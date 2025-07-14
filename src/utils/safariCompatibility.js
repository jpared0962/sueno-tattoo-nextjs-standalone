// Safari Compatibility Utilities
// Handles Safari-specific issues like private mode localStorage

/**
 * Detect if the browser is Safari
 */
export const isSafari = () => {
  if (typeof navigator === 'undefined') return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

/**
 * Safe localStorage operations for Safari private mode
 */
export const safeLocalStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn(`Safari localStorage getItem failed for key: ${key}`, error);
      return null;
    }
  },

  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn(`Safari localStorage setItem failed for key: ${key}`, error);
      return false;
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Safari localStorage removeItem failed for key: ${key}`, error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn('Safari localStorage clear failed', error);
      return false;
    }
  }
};

/**
 * Safari-optimized image loading settings
 */
export const safariImageSettings = {
  // Reduce concurrent image loads for Safari
  maxConcurrentLoads: isSafari() ? 3 : 6,
  
  // Add delays between batch loads for Safari
  loadDelay: isSafari() ? 300 : 100,
  
  // Reduce initial preload count for Safari
  preloadCount: isSafari() ? 3 : 6,
  
  // Smaller batch sizes for Safari pagination
  batchSize: isSafari() ? 6 : 12,
  
  // Initial load count
  initialCount: isSafari() ? 8 : 12
};

/**
 * Memory-conscious intersection observer for Safari
 */
export const createSafariOptimizedObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: isSafari() ? '50px' : '100px' // Smaller rootMargin for Safari
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

/**
 * Debounced function for Safari performance
 */
export const safariDebounce = (func, wait = 300) => {
  let timeout;
  const debounceWait = isSafari() ? Math.max(wait, 200) : wait; // Minimum 200ms for Safari
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, debounceWait);
  };
};

/**
 * Safari-friendly touch event options
 */
export const safariTouchOptions = {
  passive: isSafari() ? true : false, // Force passive for Safari
  capture: false
};

/**
 * Memory cleanup utility for Safari
 */
export const safariMemoryCleanup = {
  // Clean up unused image references
  cleanupImages: (imageRefs) => {
    if (!isSafari()) return;
    
    imageRefs.forEach(ref => {
      if (ref && ref.current) {
        ref.current.src = '';
        ref.current.srcset = '';
      }
    });
  },

  // Force garbage collection hint (Safari-specific)
  requestCleanup: () => {
    if (!isSafari()) return;
    
    // Safari-specific memory management hints
    if (window.gc && typeof window.gc === 'function') {
      setTimeout(() => window.gc(), 1000);
    }
  }
};

export default {
  isSafari,
  safeLocalStorage,
  safariImageSettings,
  createSafariOptimizedObserver,
  safariDebounce,
  safariTouchOptions,
  safariMemoryCleanup
};