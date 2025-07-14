// Security utilities for input validation and sanitization
export const SecurityUtils = {
  // Sanitize user input to prevent XSS
  sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  },

  // Validate email format
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  // Validate phone number format
  isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  },

  // Check for potentially malicious patterns
  hasMaliciousContent(content) {
    const maliciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /vbscript:/gi,
      /onload=/gi,
      /onerror=/gi,
      /onclick=/gi,
      /eval\(/gi,
      /expression\(/gi
    ];

    return maliciousPatterns.some(pattern => pattern.test(content));
  },

  // Generate secure random token
  generateSecureToken(length = 32) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const randomArray = new Uint8Array(length);
    crypto.getRandomValues(randomArray);
    
    for (let i = 0; i < length; i++) {
      result += chars[randomArray[i] % chars.length];
    }
    
    return result;
  },

  // Validate and sanitize URL
  sanitizeUrl(url) {
    try {
      const urlObj = new URL(url);
      
      // Only allow http and https protocols
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        return null;
      }
      
      return urlObj.toString();
    } catch {
      return null;
    }
  },

  // Rate limiting for form submissions
  rateLimiter: {
    attempts: new Map(),
    
    isAllowed(identifier, maxAttempts = 3, windowMs = 300000) {
      const now = Date.now();
      const attempts = this.attempts.get(identifier) || [];
      
      // Remove old attempts outside the window
      const recentAttempts = attempts.filter(time => now - time < windowMs);
      
      if (recentAttempts.length >= maxAttempts) {
        return false;
      }
      
      recentAttempts.push(now);
      this.attempts.set(identifier, recentAttempts);
      return true;
    }
  }
};

export default SecurityUtils;
