// Gallery Configuration Constants - Enhanced Version
// TypeScript-ready interfaces (for future migration)

/**
 * @typedef {Object} GalleryConfigValue
 * @property {number} default - Default value for modern browsers
 * @property {number} safari - Optimized value for Safari
 */

/**
 * @typedef {Object} GalleryConfig
 * @property {GalleryConfigValue} INITIAL_LOAD
 * @property {GalleryConfigValue} BATCH_SIZE
 * @property {GalleryConfigValue} LOAD_DELAY
 * @property {GalleryConfigValue} PRELOAD_COUNT
 * @property {number} INTERSECTION_THRESHOLD
 * @property {string} IMAGE_ASPECT_RATIO
 * @property {number} LOAD_MORE_TIMEOUT
 */

// Environment-based configuration
const isProduction = import.meta.env.PROD;
const isDevelopment = import.meta.env.DEV;

export const GALLERY_CONFIG = {
  INITIAL_LOAD: { 
    default: isProduction ? 12 : 6, 
    safari: isProduction ? 8 : 4 
  },
  BATCH_SIZE: { 
    default: isProduction ? 12 : 6, 
    safari: isProduction ? 6 : 3 
  },
  LOAD_DELAY: { 
    default: isDevelopment ? 200 : 100, 
    safari: isDevelopment ? 500 : 300 
  },
  PRELOAD_COUNT: { 
    default: isProduction ? 6 : 3, 
    safari: isProduction ? 3 : 2 
  },
  INTERSECTION_THRESHOLD: 0.1,
  IMAGE_ASPECT_RATIO: '75%', // 4:3 aspect ratio
  LOAD_MORE_TIMEOUT: isDevelopment ? 15000 : 10000, // Longer timeout in dev
};

// Animation and transition constants
export const GALLERY_ANIMATIONS = {
  CARD_HOVER_TRANSFORM: 'translateY(-4px)',
  CARD_TRANSITION: 'all var(--animation-duration-fast) ease',
  IMAGE_FADE_DURATION: 300,
  LIGHTBOX_FADE_DURATION: 400,
  FILTER_TRANSITION: 'all 0.2s ease',
  LOADING_SPINNER_DURATION: 1000,
  TOUCH_FEEDBACK_DURATION: 150,
};

// Responsive breakpoint constants
export const GALLERY_BREAKPOINTS = {
  MOBILE_MAX: 768,
  TABLET_MAX: 1024,
  DESKTOP_MIN: 1025,
  GRID_COLUMNS: {
    mobile: '1fr',
    tablet: 'repeat(auto-fill, minmax(250px, 1fr))',
    desktop: 'repeat(auto-fill, minmax(300px, 1fr))'
  },
  GRID_GAPS: {
    mobile: 'var(--grid-gap-md)',
    tablet: 'var(--grid-gap-lg)',
    desktop: 'var(--grid-gap-lg)'
  }
};

// Error states and fallback content
export const GALLERY_ERROR_STATES = {
  IMAGE_LOAD_FAILED: '🎨',
  IMAGE_LOAD_FAILED_TEXT: 'Image unavailable',
  IMAGE_LOAD_FAILED_SUBTITLE: 'Unable to load image',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  FILTER_ERROR: 'Unable to apply filters. Please try again.',
  SEARCH_ERROR: 'Search temporarily unavailable.',
  LIGHTBOX_ERROR: 'Unable to open image viewer.',
  GENERIC_ERROR: 'Something went wrong. Please refresh and try again.'
};

// SEO and metadata configuration
export const GALLERY_SEO = {
  ALT_TEXT_TEMPLATE: '{style} {title} tattoo {size} by Jose at Sueno Tattoo in Laurel MD',
  META_DESCRIPTION_TEMPLATE: 'See {count} custom {style} tattoos in our gallery',
  DEFAULT_ALT_SUFFIX: 'by Jose at Sueno Tattoo in Laurel MD',
  STRUCTURED_DATA_TYPE: 'ImageGallery',
  BREADCRUMB_SEPARATOR: ' → ',
  GALLERY_TITLE_TEMPLATE: 'Custom {style} Tattoos | Sueno Tattoo Gallery',
};

// UI Messages - Enhanced with more context
export const GALLERY_MESSAGES = {
  loading: 'Loading Portfolio...',
  loadingSubtext: 'Getting Jose\'s custom tattoo gallery ready',
  loadingMore: 'Loading more tattoos...',
  scrollPrompt: 'Scroll down to see more tattoos',
  safariOptimized: 'Optimized for Safari',
  noResults: 'No tattoos found',
  noResultsSubtext: 'Try changing your search to see more tattoos',
  showAll: 'Show All Tattoos',
  clearFilters: 'Clear All Filters',
  bookConsultation: 'Book Free Meeting',
  ctaTitle: 'Ready for Your Custom Tattoo?',
  ctaSubtitle: 'Every tattoo here started with a meeting. Let\'s make something special for your story.',
  searchPlaceholder: 'Search tattoos by style, size, or type...',
  filterByStyle: 'Pick by Style',
  resultsCount: (visible, total) => `Showing ${visible} of ${total} tattoos`,
  loadingProgress: (current, total) => `Loading ${current} of ${total}`,
};

// Image size mappings with quality settings
export const IMAGE_SIZES = {
  small: { size: 'small', quality: 'auto', format: 'webp' },
  medium: { size: 'medium', quality: 'auto', format: 'webp' },
  large: { size: 'large', quality: 'auto', format: 'webp' },
  thumbnail: { size: 'thumbnail', quality: 85, format: 'webp' },
  fullsize: { size: 'fullsize', quality: 95, format: 'jpg' }
};

// Filter labels with internationalization support
export const FILTER_LABELS = {
  all: 'All Styles',
  traditional: 'Traditional',
  realistic: 'Realistic',
  mystical: 'Mystical',
  blackAndGray: 'Black & Gray',
  color: 'Color',
  fineline: 'Fine Line',
  geometric: 'Geometric',
  tribal: 'Tribal',
  japanese: 'Japanese',
  portrait: 'Portrait'
};

// Enhanced accessibility labels with dynamic content
export const ARIA_LABELS = {
  galleryCard: (title) => `View ${title} tattoo in lightbox`,
  filterButton: (style, isActive) => `Filter by ${style}${isActive ? ', currently selected' : ''}`,
  searchInput: 'Find tattoos by name, style, or type',
  resetFilters: 'Clear all choices',
  loadMore: 'Loading more tattoos',
  showCount: (visible, total) => `Showing ${visible} of ${total} tattoos`,
  lightboxOpen: (title) => `Lightbox opened showing ${title}`,
  lightboxClose: 'Close lightbox',
  lightboxNext: 'Next image',
  lightboxPrev: 'Previous image',
  galleryGrid: 'Tattoo photo gallery',
  filterGroup: 'Pick options',
  imageLoading: 'Image loading',
  imageError: 'Image failed to load',
};

// Performance monitoring constants
export const GALLERY_PERFORMANCE = {
  MAX_CONCURRENT_LOADS: 6,
  IMAGE_LOAD_TIMEOUT: 10000, // 10 seconds
  SAFARI_MEMORY_LIMIT: 100 * 1024 * 1024, // 100MB
  INTERSECTION_ROOT_MARGIN: '50px',
  LAZY_LOAD_OFFSET: 3, // Load 3 items ahead
  CACHE_SIZE_LIMIT: 50, // Max cached images
};

// Helper Functions
/**
 * Get configuration value based on browser and environment
 * @param {string} key - Configuration key
 * @param {boolean} isSafari - Whether the browser is Safari
 * @returns {number|string|object} Configuration value
 */
export const getGalleryConfig = (key, isSafari = false) => {
  const config = GALLERY_CONFIG[key];
  if (typeof config === 'object' && config.default !== undefined) {
    return config[isSafari ? 'safari' : 'default'];
  }
  return config;
};

/**
 * Generate SEO-optimized ALT text for tattoo images
 * @param {Object} tattoo - Tattoo object
 * @param {string} tattoo.style - Tattoo style
 * @param {string} tattoo.title - Tattoo title
 * @param {string} tattoo.size - Tattoo size
 * @returns {string} SEO-optimized ALT text
 */
export const generateAltText = (tattoo) => {
  if (!tattoo) return GALLERY_SEO.DEFAULT_ALT_SUFFIX;
  
  return GALLERY_SEO.ALT_TEXT_TEMPLATE
    .replace('{style}', tattoo.style || '')
    .replace('{title}', tattoo.title?.toLowerCase() || '')
    .replace('{size}', tattoo.size?.toLowerCase() || '')
    .replace(/\s+/g, ' ') // Clean up extra spaces
    .trim();
};

/**
 * Generate responsive image size configuration
 * @param {boolean} isMobile - Is mobile device
 * @param {boolean} isTablet - Is tablet device
 * @param {boolean} isRetina - Is high-DPI display
 * @returns {Object} Image size configuration
 */
export const getImageSizeConfig = (isMobile = false, isTablet = false, isRetina = false) => {
  let baseSize = IMAGE_SIZES.large;
  
  if (isMobile) {
    baseSize = IMAGE_SIZES.small;
  } else if (isTablet) {
    baseSize = IMAGE_SIZES.medium;
  }
  
  // Adjust quality for retina displays
  if (isRetina && baseSize.quality) {
    return {
      ...baseSize,
      quality: Math.min(baseSize.quality + 10, 100)
    };
  }
  
  return baseSize;
};

/**
 * Get grid configuration based on screen size
 * @param {number} screenWidth - Screen width in pixels
 * @returns {Object} Grid configuration
 */
export const getGridConfig = (screenWidth) => {
  if (screenWidth <= GALLERY_BREAKPOINTS.MOBILE_MAX) {
    return {
      columns: GALLERY_BREAKPOINTS.GRID_COLUMNS.mobile,
      gap: GALLERY_BREAKPOINTS.GRID_GAPS.mobile
    };
  } else if (screenWidth <= GALLERY_BREAKPOINTS.TABLET_MAX) {
    return {
      columns: GALLERY_BREAKPOINTS.GRID_COLUMNS.tablet,
      gap: GALLERY_BREAKPOINTS.GRID_GAPS.tablet
    };
  }
  return {
    columns: GALLERY_BREAKPOINTS.GRID_COLUMNS.desktop,
    gap: GALLERY_BREAKPOINTS.GRID_GAPS.desktop
  };
};

/**
 * Check if Safari browser and return optimized settings
 * @returns {Object} Safari detection and settings
 */
export const getSafariOptimizations = () => {
  const isSafari = typeof navigator !== 'undefined' && 
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  return {
    isSafari,
    initialLoad: getGalleryConfig('INITIAL_LOAD', isSafari),
    batchSize: getGalleryConfig('BATCH_SIZE', isSafari),
    loadDelay: getGalleryConfig('LOAD_DELAY', isSafari),
    preloadCount: getGalleryConfig('PRELOAD_COUNT', isSafari),
  };
};

/**
 * Generate structured data for gallery SEO
 * @param {Array} tattoos - Array of tattoo objects
 * @param {string} galleryUrl - Gallery page URL
 * @returns {Object} Structured data object
 */
export const generateGalleryStructuredData = (tattoos = [], galleryUrl = '') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Sueno Tattoo Photo Gallery',
    description: `Pro tattoo photos showing ${tattoos.length} custom designs by Jose`,
    url: galleryUrl || 'https://www.suenotattoo.com/gallery',
    numberOfItems: tattoos.length,
    dateModified: new Date().toISOString(),
    image: tattoos.slice(0, 5).map(tattoo => ({
      '@type': 'ImageObject',
      url: tattoo.image,
      description: generateAltText(tattoo),
      contentUrl: tattoo.image, // Full-size URL
      thumbnailUrl: tattoo.image, // Thumbnail URL (same for now)
      creator: {
        '@type': 'Person',
        name: 'Jose'
      }
    }))
  };
};

// Export grouped constants for easier imports
export const GALLERY_CONSTANTS = {
  CONFIG: GALLERY_CONFIG,
  ANIMATIONS: GALLERY_ANIMATIONS,
  BREAKPOINTS: GALLERY_BREAKPOINTS,
  ERROR_STATES: GALLERY_ERROR_STATES,
  SEO: GALLERY_SEO,
  MESSAGES: GALLERY_MESSAGES,
  IMAGE_SIZES,
  FILTER_LABELS,
  ARIA_LABELS,
  PERFORMANCE: GALLERY_PERFORMANCE,
};