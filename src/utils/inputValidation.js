/**
 * Comprehensive Input Validation and Sanitization
 */

// Common validation patterns
const VALIDATION_PATTERNS = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[\d\s\-+()]{10,15}$/,
  name: /^[a-zA-Z\s\-']{1,50}$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  url: /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
  hex: /^#[0-9A-Fa-f]{6}$/,
  // Safe text: alphanumeric, spaces, and common punctuation
  safeText: /^[a-zA-Z0-9\s\-.,!?'":;()]*$/
};

// XSS patterns to detect and block
const XSS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /<iframe\b[^>]*>/gi,
  /<object\b[^>]*>/gi,
  /<embed\b[^>]*>/gi,
  /<link\b[^>]*>/gi,
  /<meta\b[^>]*>/gi,
  /javascript:/gi,
  /vbscript:/gi,
  /data:.*script/gi,
  /on\w+\s*=/gi, // Event handlers like onclick=, onload=
  /expression\s*\(/gi, // CSS expressions
  /url\s*\(\s*['"]*javascript:/gi
];

// SQL injection patterns
const SQL_INJECTION_PATTERNS = [
  /(\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE)?|INSERT( +INTO)?|MERGE|SELECT|UPDATE|UNION( +ALL)?)\b)|(\b(AND|OR)\b.{1,6}?(=|>|<|\bIN\b|\bLIKE\b))|(\b(GRANT|REVOKE)\b)|(\b(GROUP\s+BY|ORDER\s+BY|HAVING)\b)|(\bCAST\s*\()|(\bCONVERT\s*\()|(\bSUBSTRING\s*\()/gi,
  /('(''|[^'])*')|(\b(NULL|IS|NOT)\b)|(\|\|)|(%)/gi,
  /(;|--|\/{2})/g
];

/**
 * Sanitize string input
 */
export const sanitizeString = (input, options = {}) => {
  if (typeof input !== 'string') {
    return '';
  }

  let sanitized = input;

  // Basic cleanup
  sanitized = sanitized.trim();
  
  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '');
  
  // Limit length
  const maxLength = options.maxLength || 1000;
  sanitized = sanitized.slice(0, maxLength);

  // HTML escape if requested
  if (options.escapeHtml !== false) {
    sanitized = escapeHtml(sanitized);
  }

  // Remove dangerous patterns
  if (options.removeXss !== false) {
    sanitized = removeXssPatterns(sanitized);
  }

  return sanitized;
};

/**
 * Escape HTML entities
 */
export const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#47;'
  };
  
  return text.replace(/[&<>"'/]/g, (char) => map[char]);
};

/**
 * Remove XSS patterns
 */
export const removeXssPatterns = (text) => {
  let cleaned = text;
  
  XSS_PATTERNS.forEach(pattern => {
    cleaned = cleaned.replace(pattern, '');
  });
  
  return cleaned;
};

/**
 * Validate email address
 */
export const validateEmail = (email) => {
  const trimmed = String(email).trim().toLowerCase();
  
  if (!trimmed) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (trimmed.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }
  
  if (!VALIDATION_PATTERNS.email.test(trimmed)) {
    return { isValid: false, error: 'Invalid email format' };
  }
  
  // Check for dangerous patterns
  if (XSS_PATTERNS.some(pattern => pattern.test(trimmed))) {
    return { isValid: false, error: 'Invalid characters in email' };
  }
  
  return { isValid: true, value: trimmed };
};

/**
 * Validate name (first name, last name, etc.)
 */
export const validateName = (name) => {
  const trimmed = String(name).trim();
  
  if (!trimmed) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (trimmed.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }
  
  if (trimmed.length > 50) {
    return { isValid: false, error: 'Name is too long' };
  }
  
  if (!VALIDATION_PATTERNS.name.test(trimmed)) {
    return { isValid: false, error: 'Name contains invalid characters' };
  }
  
  return { isValid: true, value: trimmed };
};

/**
 * Validate phone number
 */
export const validatePhone = (phone) => {
  if (!phone) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  const cleaned = String(phone).replace(/[\s\-\(\)]/g, '');
  
  if (cleaned.length < 10 || cleaned.length > 15) {
    return { isValid: false, error: 'Phone number must be 10-15 digits' };
  }
  
  if (!/^\+?[\d]+$/.test(cleaned)) {
    return { isValid: false, error: 'Phone number contains invalid characters' };
  }
  
  return { isValid: true, value: cleaned };
};

/**
 * Validate URL
 */
export const validateUrl = (url) => {
  if (!url) {
    return { isValid: false, error: 'URL is required' };
  }
  
  const trimmed = String(url).trim();
  
  if (!VALIDATION_PATTERNS.url.test(trimmed)) {
    return { isValid: false, error: 'Invalid URL format' };
  }
  
  // Additional security checks
  try {
    const urlObj = new URL(trimmed);
    
    // Only allow HTTP/HTTPS
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { isValid: false, error: 'Only HTTP and HTTPS URLs are allowed' };
    }
    
    // Check for dangerous patterns
    if (XSS_PATTERNS.some(pattern => pattern.test(trimmed))) {
      return { isValid: false, error: 'URL contains dangerous content' };
    }
    
    return { isValid: true, value: trimmed };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
};

/**
 * Validate age verification checkbox (COPPA compliance)
 */
export const validateAgeVerification = (value) => {
  if (!value) {
    return { isValid: false, error: 'Age verification is required. You must be 18 or older to use our services.' };
  }
  return { isValid: true, value: true };
};

/**
 * Validate text content
 */
export const validateText = (text, options = {}) => {
  if (!text) {
    if (options.required !== false) {
      return { isValid: false, error: 'Text is required' };
    }
    return { isValid: true, value: '' };
  }
  
  const trimmed = String(text).trim();
  const minLength = options.minLength || 0;
  const maxLength = options.maxLength || 1000;
  
  if (trimmed.length < minLength) {
    return { isValid: false, error: `Text must be at least ${minLength} characters` };
  }
  
  if (trimmed.length > maxLength) {
    return { isValid: false, error: `Text must be no more than ${maxLength} characters` };
  }
  
  // Check for XSS patterns
  if (XSS_PATTERNS.some(pattern => pattern.test(trimmed))) {
    return { isValid: false, error: 'Text contains dangerous content' };
  }
  
  // Check for SQL injection patterns if requested
  if (options.checkSql && SQL_INJECTION_PATTERNS.some(pattern => pattern.test(trimmed))) {
    return { isValid: false, error: 'Text contains invalid patterns' };
  }
  
  // Use safe text pattern if strict mode
  if (options.strict && !VALIDATION_PATTERNS.safeText.test(trimmed)) {
    return { isValid: false, error: 'Text contains invalid characters' };
  }
  
  return { isValid: true, value: sanitizeString(trimmed, options) };
};

/**
 * Validate and sanitize form data
 */
export const validateFormData = (data, schema) => {
  const errors = {};
  const sanitized = {};
  let isValid = true;
  
  Object.entries(schema).forEach(([field, rules]) => {
    const value = data[field];
    let result;
    
    switch (rules.type) {
      case 'email':
        result = validateEmail(value);
        break;
      case 'name':
        result = validateName(value);
        break;
      case 'phone':
        result = validatePhone(value);
        break;
      case 'url':
        result = validateUrl(value);
        break;
      case 'text':
        result = validateText(value, rules);
        break;
      case 'ageVerification':
        result = validateAgeVerification(value);
        break;
      default:
        result = { isValid: true, value: value };
    }
    
    if (!result.isValid) {
      errors[field] = result.error;
      isValid = false;
    } else {
      sanitized[field] = result.value;
    }
  });
  
  return { isValid, errors, data: sanitized };
};

/**
 * Security scan for dangerous content
 */
export const securityScan = (input) => {
  const threats = [];
  
  if (typeof input !== 'string') {
    return { isSafe: true, threats: [] };
  }
  
  // XSS detection
  XSS_PATTERNS.forEach((pattern, index) => {
    if (pattern.test(input)) {
      threats.push(`XSS pattern detected (${index + 1})`);
    }
  });
  
  // SQL injection detection
  SQL_INJECTION_PATTERNS.forEach((pattern, index) => {
    if (pattern.test(input)) {
      threats.push(`SQL injection pattern detected (${index + 1})`);
    }
  });
  
  // Path traversal detection
  if (/\.\.\/|\.\.\\|%2e%2e%2f|%2e%2e\\/.test(input)) {
    threats.push('Path traversal attempt detected');
  }
  
  // Command injection detection (more specific patterns)
  if (/[;&|`]|(\$\()|(\$\{)/g.test(input)) {
    threats.push('Command injection patterns detected');
  }
  
  return {
    isSafe: threats.length === 0,
    threats
  };
};

// Pre-defined validation schemas
export const VALIDATION_SCHEMAS = {
  contact: {
    name: { type: 'name' },
    email: { type: 'email' },
    phone: { type: 'phone', required: false },
    service: { type: 'text', required: false, maxLength: 100 },
    message: { type: 'text', minLength: 10, maxLength: 1000 },
    ageVerification: { type: 'ageVerification' }
  },
  
  consultation: {
    name: { type: 'name' },
    email: { type: 'email' },
    phone: { type: 'phone' },
    tattooIdea: { type: 'text', minLength: 10, maxLength: 1000 },
    size: { type: 'text', required: false, maxLength: 50 },
    placement: { type: 'text', required: false, maxLength: 100 },
    timeframe: { type: 'text', required: false, maxLength: 50 },
    experience: { type: 'text', required: false, maxLength: 100 },
    budget: { type: 'text', required: false, maxLength: 50 },
    availability: { type: 'text', required: false, maxLength: 500 },
    ageVerification: { type: 'ageVerification' }
  },
  
  profile: {
    firstName: { type: 'name' },
    lastName: { type: 'name' },
    email: { type: 'email' },
    phone: { type: 'phone', required: false }
  },
  
  tattoo: {
    description: { type: 'text', minLength: 5, maxLength: 500 },
    placement: { type: 'text', maxLength: 100 },
    size: { type: 'text', maxLength: 50 },
    style: { type: 'text', maxLength: 50 }
  }
};