/**
 * Secure Image Loading Utilities
 * Handles CORS issues and provides secure image loading with fallbacks
 */

const ALLOWED_DOMAINS = [
  'suenotattoo.com',
  'www.suenotattoo.com',
  'images.unsplash.com',
  'supabase.co',
  'localhost',
  '127.0.0.1'
];

/**
 * Validate if URL is from allowed domain
 */
export const isAllowedDomain = (url) => {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    
    return ALLOWED_DOMAINS.some(domain => 
      hostname === domain || hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
};

/**
 * Convert HTTP URL to HTTPS and validate
 */
export const makeSecureUrl = (url) => {
  try {
    // Handle relative URLs
    if (url.startsWith('/')) {
      return { isValid: true, secureUrl: url };
    }
    
    // Handle data URLs
    if (url.startsWith('data:')) {
      return { isValid: true, secureUrl: url };
    }
    
    // Basic URL validation before constructing URL object
    if (!url.includes('://')) {
      return { isValid: false, secureUrl: url, error: 'Invalid URL format - missing protocol' };
    }
    
    const urlObj = new URL(url);
    
    // Allow local development URLs as-is
    if (urlObj.hostname === 'localhost' || urlObj.hostname === '127.0.0.1') {
      return { isValid: true, secureUrl: url };
    }
    
    // Convert HTTP to HTTPS automatically
    if (urlObj.protocol === 'http:') {
      urlObj.protocol = 'https:';
      return { isValid: true, secureUrl: urlObj.toString() };
    }
    
    // Already HTTPS
    if (urlObj.protocol === 'https:') {
      return { isValid: true, secureUrl: url };
    }
    
    return { isValid: false, secureUrl: url, error: 'Invalid protocol' };
  } catch (error) {
    return { isValid: false, secureUrl: url, error: `URL construction failed: ${error.message}` };
  }
};

/**
 * Validate if URL uses HTTPS or is local (legacy function)
 */
export const isSecureUrl = (url) => {
  const result = makeSecureUrl(url);
  return result.isValid;
};

/**
 * Create a secure image proxy URL
 */
export const createProxyUrl = (imageUrl) => {
  if (!imageUrl) return '';
  
  // For local development or already proxied URLs
  if (imageUrl.startsWith('/') || imageUrl.startsWith('data:') || isAllowedDomain(imageUrl)) {
    return imageUrl;
  }
  
  // Create proxy URL for external images
  const encodedUrl = encodeURIComponent(imageUrl);
  return `/api/proxy/image?url=${encodedUrl}`;
};

/**
 * Load image with security checks and CORS handling
 */
export const loadSecureImage = (src, options = {}) => {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error('No image source provided'));
      return;
    }

    // Security validation
    if (!isSecureUrl(src)) {
      reject(new Error('Image URL must use HTTPS protocol'));
      return;
    }

    const img = new Image();
    const { timeout = 10000, crossOrigin = null } = options;
    
    // Set up timeout
    const timeoutId = setTimeout(() => {
      img.src = '';
      reject(new Error('Image load timeout'));
    }, timeout);

    img.onload = () => {
      clearTimeout(timeoutId);
      resolve(img);
    };

    img.onerror = () => {
      clearTimeout(timeoutId);
      // Try with proxy if CORS failed
      if (!src.includes('/api/proxy/image') && !isAllowedDomain(src)) {
        const proxyUrl = createProxyUrl(src);
        loadSecureImage(proxyUrl, { ...options, crossOrigin: null })
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error('Failed to load image'));
      }
    };

    // Set crossOrigin only for external domains
    if (crossOrigin && !isAllowedDomain(src)) {
      img.crossOrigin = crossOrigin;
    }

    img.src = src;
  });
};

/**
 * Create secure blur placeholder
 */
export const createSecureBlurPlaceholder = async (imageSrc, quality = 10) => {
  try {
    const img = await loadSecureImage(imageSrc, { 
      timeout: 5000,
      crossOrigin: 'anonymous' 
    });
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set small canvas size for blur effect
    canvas.width = quality;
    canvas.height = (img.height / img.width) * quality;
    
    // Draw and get base64
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.5);
  } catch (error) {
    console.warn('Failed to create blur placeholder:', error);
    return '';
  }
};

/**
 * Preload image with security checks
 */
export const preloadSecureImage = (src, priority = false) => {
  return new Promise((resolve, reject) => {
    const secureResult = makeSecureUrl(src);
    if (!secureResult.isValid) {
      reject(new Error(`Invalid image URL: ${secureResult.error}`));
      return;
    }

    const link = document.createElement('link');
    link.rel = priority ? 'preload' : 'prefetch';
    link.as = 'image';
    link.href = isAllowedDomain(secureResult.secureUrl) ? secureResult.secureUrl : createProxyUrl(secureResult.secureUrl);
    
    link.onload = () => resolve(src);
    link.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    
    document.head.appendChild(link);
  });
};

/**
 * Get secure image URL with fallback
 */
export const getSecureImageUrl = (src, fallback = '/images/placeholder.jpg') => {
  if (!src) return fallback;
  
  try {
    if (!isSecureUrl(src)) {
      console.warn('Insecure image URL detected, using fallback:', src);
      return fallback;
    }
    
    return isAllowedDomain(src) ? src : createProxyUrl(src);
  } catch (error) {
    console.warn('Invalid image URL, using fallback:', src, error);
    return fallback;
  }
};

/**
 * Validate image before loading
 */
export const validateImageSource = (src) => {
  const errors = [];
  
  if (!src) {
    errors.push('No image source provided');
    return { isValid: false, errors };
  }
  
  // Handle array sources - take first valid URL
  let imageSrc = src;
  if (Array.isArray(src)) {
    imageSrc = src.find(url => url && typeof url === 'string' && url.trim().length > 0) || src[0];
    if (!imageSrc || typeof imageSrc !== 'string' || imageSrc.trim().length === 0) {
      errors.push('Invalid array source - no valid URLs found');
      return { isValid: false, errors };
    }
  }
  
  // Basic URL format check before validation
  imageSrc = imageSrc.toString().trim();
  if (!imageSrc.startsWith('http://') && !imageSrc.startsWith('https://') && !imageSrc.startsWith('/') && !imageSrc.startsWith('data:')) {
    errors.push('Invalid URL format - must start with http://, https://, / or data:');
    return { isValid: false, errors };
  }
  
  // Convert HTTP to HTTPS automatically
  const secureResult = makeSecureUrl(imageSrc);
  if (!secureResult.isValid) {
    errors.push(`Invalid URL: ${secureResult.error}`);
  }
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /javascript:/i,
    /data:.*script/i,
    /vbscript:/i,
    /onload=/i,
    /onerror=/i
  ];
  
  if (suspiciousPatterns.some(pattern => pattern.test(imageSrc))) {
    errors.push('Suspicious content detected in image URL');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    secureUrl: secureResult.secureUrl
  };
};