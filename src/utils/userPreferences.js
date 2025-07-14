/**
 * User Preferences Manager
 * Handles onboarding preferences and user settings
 */

const STORAGE_KEYS = {
  PREFERENCES: 'userPreferences',
  ONBOARDING_DATA: 'onboardingData',
  FAVORITE_STYLES: 'favoriteStyles',
  NOTIFICATION_SETTINGS: 'notificationSettings'
};

// Default preferences
const DEFAULT_PREFERENCES = {
  preferredStyle: null,
  notifications: {
    newWork: true,
    bookingReminders: true,
    careReminders: true
  },
  display: {
    gridView: true,
    autoPlay: false,
    highQualityImages: true
  },
  onboardingCompleted: false,
  onboardingVersion: '1.0',
  lastUpdated: null
};

/**
 * Get user preferences with fallbacks
 */
export const getUserPreferences = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    if (!stored) return DEFAULT_PREFERENCES;
    
    const preferences = JSON.parse(stored);
    
    // Merge with defaults to ensure all properties exist
    return {
      ...DEFAULT_PREFERENCES,
      ...preferences,
      notifications: {
        ...DEFAULT_PREFERENCES.notifications,
        ...preferences.notifications
      },
      display: {
        ...DEFAULT_PREFERENCES.display,
        ...preferences.display
      }
    };
  } catch (error) {
    console.warn('Failed to load user preferences:', error);
    return DEFAULT_PREFERENCES;
  }
};

/**
 * Save user preferences
 */
export const saveUserPreferences = (preferences) => {
  try {
    const updated = {
      ...preferences,
      lastUpdated: Date.now()
    };
    
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.warn('Failed to save user preferences:', error);
    return false;
  }
};

/**
 * Update specific preference
 */
export const updatePreference = (key, value) => {
  const current = getUserPreferences();
  const updated = { ...current };
  
  // Handle nested keys like 'notifications.newWork'
  if (key.includes('.')) {
    const [parent, child] = key.split('.');
    updated[parent] = {
      ...updated[parent],
      [child]: value
    };
  } else {
    updated[key] = value;
  }
  
  return saveUserPreferences(updated);
};

/**
 * Save onboarding completion data
 */
export const saveOnboardingData = (data) => {
  try {
    const onboardingData = {
      ...data,
      completedAt: Date.now(),
      version: '2.0', // Fast onboarding version
      userAgent: navigator.userAgent
    };
    
    localStorage.setItem(STORAGE_KEYS.ONBOARDING_DATA, JSON.stringify(onboardingData));
    
    // Also update main preferences
    const currentPrefs = getUserPreferences();
    saveUserPreferences({
      ...currentPrefs,
      preferredStyle: data.style,
      onboardingCompleted: true,
      onboardingVersion: '2.0'
    });
    
    return true;
  } catch (error) {
    console.warn('Failed to save onboarding data:', error);
    return false;
  }
};

/**
 * Get onboarding data
 */
export const getOnboardingData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.ONBOARDING_DATA);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn('Failed to load onboarding data:', error);
    return null;
  }
};

/**
 * Check if user should see onboarding
 */
export const shouldShowOnboarding = () => {
  const preferences = getUserPreferences();
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();
  
  // Show if never completed onboarding
  if (!preferences.onboardingCompleted) {
    return true;
  }
  
  // Show if using old onboarding version
  if (preferences.onboardingVersion !== '2.0') {
    return true;
  }
  
  // Show if last visit was more than 30 days ago (re-engagement)
  if (lastVisit && (now - parseInt(lastVisit)) > 30 * 24 * 60 * 60 * 1000) {
    return true;
  }
  
  return false;
};

/**
 * Add favorite style
 */
export const addFavoriteStyle = (style) => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITE_STYLES);
    const favorites = stored ? JSON.parse(stored) : [];
    
    if (!favorites.includes(style)) {
      favorites.push(style);
      localStorage.setItem(STORAGE_KEYS.FAVORITE_STYLES, JSON.stringify(favorites));
    }
    
    return favorites;
  } catch (error) {
    console.warn('Failed to add favorite style:', error);
    return [];
  }
};

/**
 * Get favorite styles
 */
export const getFavoriteStyles = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITE_STYLES);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn('Failed to load favorite styles:', error);
    return [];
  }
};

/**
 * Filter portfolio based on user preferences
 */
export const getPersonalizedPortfolio = (portfolioData) => {
  const preferences = getUserPreferences();
  const favoriteStyles = getFavoriteStyles();
  
  if (!portfolioData || !Array.isArray(portfolioData)) {
    return [];
  }
  
  // If user has preferred style, prioritize it
  if (preferences.preferredStyle || favoriteStyles.length > 0) {
    const preferred = preferences.preferredStyle;
    const allPreferred = [...favoriteStyles];
    if (preferred && !allPreferred.includes(preferred)) {
      allPreferred.push(preferred);
    }
    
    const matching = portfolioData.filter(item => 
      allPreferred.includes(item.style)
    );
    
    const nonMatching = portfolioData.filter(item => 
      !allPreferred.includes(item.style)
    );
    
    // Return preferred styles first, then others
    return [...matching, ...nonMatching];
  }
  
  // Return original order if no preferences
  return portfolioData;
};

/**
 * Track user interaction for analytics
 */
export const trackUserInteraction = (action, data = {}) => {
  try {
    const interactions = JSON.parse(localStorage.getItem('userInteractions') || '[]');
    
    interactions.push({
      action,
      data,
      timestamp: Date.now(),
      url: window.location.pathname
    });
    
    // Keep only last 100 interactions
    if (interactions.length > 100) {
      interactions.splice(0, interactions.length - 100);
    }
    
    localStorage.setItem('userInteractions', JSON.stringify(interactions));
  } catch (error) {
    console.warn('Failed to track user interaction:', error);
  }
};

/**
 * Clear all user data (for privacy/reset)
 */
export const clearUserData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    
    // Clear other related data
    localStorage.removeItem('userInteractions');
    localStorage.removeItem('hasSeenOnboarding');
    localStorage.removeItem('lastVisit');
    localStorage.removeItem('onboardingCompletedAt');
    
    return true;
  } catch (error) {
    console.warn('Failed to clear user data:', error);
    return false;
  }
};

export default {
  getUserPreferences,
  saveUserPreferences,
  updatePreference,
  saveOnboardingData,
  getOnboardingData,
  shouldShowOnboarding,
  addFavoriteStyle,
  getFavoriteStyles,
  getPersonalizedPortfolio,
  trackUserInteraction,
  clearUserData
};