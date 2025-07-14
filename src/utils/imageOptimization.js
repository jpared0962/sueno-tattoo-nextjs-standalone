/**
 * Image Optimization Utilities
 * Provides WebP conversion, responsive sizing, and performance optimization
 */

/**
 * Image format and quality configurations
 */
export const IMAGE_CONFIG = {
  formats: {
    webp: 'image/webp',
    avif: 'image/avif',
    jpeg: 'image/jpeg',
    png: 'image/png'
  },
  quality: {
    thumbnail: 75,
    gallery: 85,
    fullscreen: 95,
    hero: 90
  },
  sizes: {
    thumbnail: { width: 300, height: 300 },
    small: { width: 600, height: 600 },
    medium: { width: 1024, height: 1024 },
    large: { width: 1920, height: 1920 },
    hero: { width: 2560, height: 1440 }
  }
};

/**
 * Generate responsive image URLs with different sizes and formats
 */
export const generateResponsiveImageUrls = (baseUrl, filename) => {
  const name = filename.split('.')[0];
  const formats = ['webp', 'jpg'];
  
  const urls = {};
  
  Object.entries(IMAGE_CONFIG.sizes).forEach(([sizeName, dimensions]) => {
    urls[sizeName] = {};
    formats.forEach(format => {
      urls[sizeName][format] = `${baseUrl}/${name}-${dimensions.width}x${dimensions.height}.${format}`;
    });
  });
  
  return urls;
};

/**
 * Generate srcSet for responsive images
 */
export const generateSrcSet = (imageUrls, format = 'webp') => {
  return Object.entries(imageUrls)
    .map(([size, formats]) => `${formats[format]} ${IMAGE_CONFIG.sizes[size].width}w`)
    .join(', ');
};

/**
 * Generate sizes attribute for responsive images
 */
export const generateSizes = (breakpoints = {}) => {
  const defaultBreakpoints = {
    mobile: '(max-width: 480px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '33vw'
  };
  
  const merged = { ...defaultBreakpoints, ...breakpoints };
  return Object.values(merged).join(', ');
};

/**
 * Check if browser supports WebP format
 */
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Check if browser supports AVIF format
 */
export const supportsAVIF = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  } catch {
    return false;
  }
};

/**
 * Get the best supported image format
 */
export const getBestImageFormat = () => {
  if (supportsAVIF()) return 'avif';
  if (supportsWebP()) return 'webp';
  return 'jpeg';
};

/**
 * Create blur placeholder from image
 * @deprecated Use createSecureBlurPlaceholder from secureImageLoader instead
 */
export const createBlurPlaceholder = async (imageSrc, quality = 10) => {
  const { createSecureBlurPlaceholder } = await import('./secureImageLoader');
  return createSecureBlurPlaceholder(imageSrc, quality);
};

/**
 * Preload critical images
 * @deprecated Use preloadSecureImage from secureImageLoader instead
 */
export const preloadImage = async (src, priority = false) => {
  const { preloadSecureImage } = await import('./secureImageLoader');
  return preloadSecureImage(src, priority);
};

/**
 * Lazy load image with intersection observer
 */
export const lazyLoadImage = (element, src, callback) => {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    element.src = src;
    callback?.();
    return;
  }
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.src = src;
          element.onload = callback;
          observer.unobserve(element);
        }
      });
    },
    {
      rootMargin: '50px', // Load 50px before entering viewport
      threshold: 0.1
    }
  );
  
  observer.observe(element);
};

/**
 * Calculate image dimensions while maintaining aspect ratio
 */
export const calculateAspectRatioDimensions = (
  originalWidth,
  originalHeight,
  maxWidth,
  maxHeight
) => {
  const aspectRatio = originalWidth / originalHeight;
  
  let width = maxWidth;
  let height = maxWidth / aspectRatio;
  
  if (height > maxHeight) {
    height = maxHeight;
    width = maxHeight * aspectRatio;
  }
  
  return { width: Math.round(width), height: Math.round(height) };
};

/**
 * Generate image optimization metadata
 */
export const generateImageMetadata = (src, alt, options = {}) => {
  const {
    sizes = generateSizes(),
    quality = IMAGE_CONFIG.quality.gallery,
    format = getBestImageFormat(),
    loading = 'lazy',
    priority = false
  } = options;
  
  return {
    src,
    alt,
    sizes,
    quality,
    format,
    loading: priority ? 'eager' : loading,
    decoding: 'async',
    'data-optimized': true
  };
};

/**
 * Image compression utility (client-side)
 */
export const compressImage = (file, quality = 0.8, maxWidth = 1920) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const { width, height } = calculateAspectRatioDimensions(
        img.width,
        img.height,
        maxWidth,
        maxWidth
      );
      
      canvas.width = width;
      canvas.height = height;
      
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(resolve, 'image/jpeg', quality);
    };
    
    img.src = URL.createObjectURL(file);
  });
};