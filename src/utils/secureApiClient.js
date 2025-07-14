/**
 * Secure API Client with Authentication and Rate Limiting
 */

import logger from './logger';
import { supabase } from '../lib/supabase';

class RateLimiter {
  constructor() {
    this.requests = new Map();
    this.limits = {
      default: { requests: 60, window: 60000 }, // 60 requests per minute
      auth: { requests: 5, window: 60000 }, // 5 auth requests per minute
      upload: { requests: 10, window: 60000 }, // 10 uploads per minute
    };
  }

  isAllowed(key, type = 'default') {
    const limit = this.limits[type] || this.limits.default;
    const now = Date.now();
    
    if (!this.requests.has(key)) {
      this.requests.set(key, []);
    }
    
    const userRequests = this.requests.get(key);
    
    // Remove old requests outside the window
    const windowStart = now - limit.window;
    const validRequests = userRequests.filter(time => time > windowStart);
    
    // Check if under limit
    if (validRequests.length >= limit.requests) {
      return false;
    }
    
    // Add current request
    validRequests.push(now);
    this.requests.set(key, validRequests);
    
    return true;
  }

  getRemainingRequests(key, type = 'default') {
    const limit = this.limits[type] || this.limits.default;
    const now = Date.now();
    
    if (!this.requests.has(key)) {
      return limit.requests;
    }
    
    const userRequests = this.requests.get(key);
    const windowStart = now - limit.window;
    const validRequests = userRequests.filter(time => time > windowStart);
    
    return Math.max(0, limit.requests - validRequests.length);
  }
}

class SecureApiClient {
  constructor() {
    this.rateLimiter = new RateLimiter();
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || '';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  // Get client identifier for rate limiting
  getClientId() {
    // Use a combination of factors to identify client
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width,
      screen.height,
      Intl.DateTimeFormat().resolvedOptions().timeZone
    ].join('|');
    
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return Math.abs(hash).toString(36);
  }

  // Validate URL
  validateUrl(url) {
    try {
      const urlObj = new URL(url, this.baseUrl);
      
      // Only allow HTTPS in production
      if (import.meta.env.PROD && urlObj.protocol !== 'https:') {
        throw new Error('Only HTTPS URLs are allowed in production');
      }
      
      // Validate domain if baseUrl is set
      if (this.baseUrl) {
        const baseUrlObj = new URL(this.baseUrl);
        if (urlObj.hostname !== baseUrlObj.hostname) {
          throw new Error('URL must be from the same domain');
        }
      }
      
      return urlObj.toString();
    } catch (error) {
      throw new Error(`Invalid URL: ${error.message}`);
    }
  }

  // Sanitize headers
  sanitizeHeaders(headers = {}) {
    const sanitized = { ...this.defaultHeaders };
    
    const allowedHeaders = [
      'content-type',
      'authorization',
      'x-api-key',
      'accept',
      'cache-control'
    ];
    
    Object.entries(headers).forEach(([key, value]) => {
      const normalizedKey = key.toLowerCase();
      if (allowedHeaders.includes(normalizedKey)) {
        sanitized[key] = String(value).slice(0, 1000); // Limit header length
      }
    });
    
    return sanitized;
  }

  // Add authentication headers
  async addAuthHeaders(headers = {}) {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.access_token) {
        headers.Authorization = `Bearer ${session.access_token}`;
      }
    } catch (error) {
      logger.warn('Failed to add auth headers', { error: error.message });
    }
    
    return headers;
  }

  // Secure fetch wrapper
  async fetch(url, options = {}) {
    const startTime = Date.now();
    const clientId = this.getClientId();
    
    try {
      // Validate URL
      const validatedUrl = this.validateUrl(url);
      
      // Check rate limit
      const rateLimitType = options.rateLimitType || 'default';
      if (!this.rateLimiter.isAllowed(clientId, rateLimitType)) {
        const remaining = this.rateLimiter.getRemainingRequests(clientId, rateLimitType);
        throw new Error(`Rate limit exceeded. Try again later. Remaining requests: ${remaining}`);
      }
      
      // Prepare headers
      let headers = this.sanitizeHeaders(options.headers);
      
      // Add authentication if required
      if (options.requireAuth !== false) {
        headers = await this.addAuthHeaders(headers);
      }
      
      // Prepare request options
      const requestOptions = {
        ...options,
        headers,
        credentials: 'same-origin',
        mode: 'cors',
      };
      
      // Validate and sanitize body
      if (requestOptions.body && typeof requestOptions.body === 'object') {
        requestOptions.body = JSON.stringify(requestOptions.body);
      }
      
      // Set timeout
      const timeout = options.timeout || 30000;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      
      requestOptions.signal = controller.signal;
      
      // Make request
      const response = await fetch(validatedUrl, requestOptions);
      clearTimeout(timeoutId);
      
      const duration = Date.now() - startTime;
      
      // Log API call
      logger.apiCall(url, options.method || 'GET', response.status, duration);
      
      // Handle response
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      const duration = Date.now() - startTime;
      logger.apiCall(url, options.method || 'GET', 0, duration, { 
        error: error.message 
      });
      throw error;
    }
  }

  // HTTP method helpers
  async get(url, options = {}) {
    return this.fetch(url, { ...options, method: 'GET' });
  }

  async post(url, data, options = {}) {
    return this.fetch(url, {
      ...options,
      method: 'POST',
      body: data,
      rateLimitType: 'default'
    });
  }

  async put(url, data, options = {}) {
    return this.fetch(url, {
      ...options,
      method: 'PUT',
      body: data
    });
  }

  async delete(url, options = {}) {
    return this.fetch(url, { ...options, method: 'DELETE' });
  }

  async upload(url, formData, options = {}) {
    const uploadOptions = {
      ...options,
      method: 'POST',
      body: formData,
      rateLimitType: 'upload',
      headers: {
        // Don't set Content-Type for FormData, let browser set it
        ...options.headers
      }
    };
    
    // Remove Content-Type header for file uploads
    delete uploadOptions.headers['Content-Type'];
    
    return this.fetch(url, uploadOptions);
  }

  // Authentication specific methods
  async authRequest(url, data, options = {}) {
    return this.fetch(url, {
      ...options,
      method: 'POST',
      body: data,
      rateLimitType: 'auth',
      requireAuth: false
    });
  }
}

// Create singleton instance
const apiClient = new SecureApiClient();

export default apiClient;
export { RateLimiter };