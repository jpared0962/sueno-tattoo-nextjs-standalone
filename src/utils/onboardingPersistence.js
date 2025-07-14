/**
 * Onboarding Persistence Utility
 * Handles storing and retrieving onboarding wizard data from localStorage
 * Prevents users from having to repeat the onboarding process
 */

const ONBOARDING_STORAGE_KEY = 'sueno_tattoo_onboarding_data';
const STORAGE_VERSION = '1.0';

/**
 * Check if onboarding data exists and is valid
 */
export const hasCompletedOnboarding = () => {
  try {
    const stored = localStorage.getItem(ONBOARDING_STORAGE_KEY);
    if (!stored) return false;
    
    const data = JSON.parse(stored);
    
    // Check version compatibility
    if (data.version !== STORAGE_VERSION) {
      console.log('Onboarding data version mismatch, clearing data');
      localStorage.removeItem(ONBOARDING_STORAGE_KEY);
      return false;
    }
    
    // Check if required data exists
    const hasUserProfile = data.userProfile && data.userProfile.name && data.userProfile.email;
    const hasTattooData = data.tattoo && data.tattoo.name && data.tattoo.bodyLocation;
    
    return hasUserProfile && hasTattooData;
  } catch (error) {
    console.error('Error reading onboarding data from storage:', error);
    return false;
  }
};

/**
 * Get stored onboarding data
 */
export const getStoredOnboardingData = () => {
  try {
    const stored = localStorage.getItem(ONBOARDING_STORAGE_KEY);
    if (!stored) return null;
    
    const data = JSON.parse(stored);
    
    // Check version compatibility
    if (data.version !== STORAGE_VERSION) {
      localStorage.removeItem(ONBOARDING_STORAGE_KEY);
      return null;
    }
    
    return {
      userProfile: data.userProfile,
      tattoo: data.tattoo,
      completedAt: data.completedAt,
      formData: data.formData
    };
  } catch (error) {
    console.error('Error reading onboarding data from storage:', error);
    return null;
  }
};

/**
 * Save onboarding data to localStorage
 */
export const saveOnboardingData = (userProfile, tattoo, formData) => {
  try {
    const data = {
      version: STORAGE_VERSION,
      userProfile,
      tattoo,
      formData,
      completedAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving onboarding data to storage:', error);
    return false;
  }
};

/**
 * Save form progress (partial completion)
 */
export const saveFormProgress = (formData, currentStep) => {
  try {
    const existing = getStoredOnboardingData() || {};
    
    const data = {
      version: STORAGE_VERSION,
      userProfile: existing.userProfile,
      tattoo: existing.tattoo,
      formData,
      currentStep,
      isIncomplete: true,
      lastUpdated: new Date().toISOString(),
      completedAt: existing.completedAt
    };
    
    localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving form progress to storage:', error);
    return false;
  }
};

/**
 * Get form progress data
 */
export const getFormProgress = () => {
  try {
    const stored = localStorage.getItem(ONBOARDING_STORAGE_KEY);
    if (!stored) return null;
    
    const data = JSON.parse(stored);
    
    if (data.version !== STORAGE_VERSION) return null;
    
    return {
      formData: data.formData,
      currentStep: data.currentStep,
      isIncomplete: data.isIncomplete
    };
  } catch (error) {
    console.error('Error reading form progress from storage:', error);
    return null;
  }
};

/**
 * Update existing onboarding data
 */
export const updateOnboardingData = (updates) => {
  try {
    const existing = getStoredOnboardingData();
    if (!existing) return false;
    
    const data = {
      ...existing,
      ...updates,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify({
      version: STORAGE_VERSION,
      ...data
    }));
    
    return true;
  } catch (error) {
    console.error('Error updating onboarding data:', error);
    return false;
  }
};

/**
 * Clear onboarding data (for re-onboarding or testing)
 */
export const clearOnboardingData = () => {
  try {
    localStorage.removeItem(ONBOARDING_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing onboarding data:', error);
    return false;
  }
};

/**
 * Check if onboarding data is expired (older than X days)
 */
export const isOnboardingDataExpired = (maxAgeDays = 90) => {
  const data = getStoredOnboardingData();
  if (!data || !data.completedAt) return true;
  
  const completedDate = new Date(data.completedAt);
  const now = new Date();
  const ageInDays = Math.floor((now - completedDate) / (1000 * 60 * 60 * 24));
  
  return ageInDays > maxAgeDays;
};

/**
 * Get onboarding completion summary
 */
export const getOnboardingSummary = () => {
  const data = getStoredOnboardingData();
  if (!data) return null;
  
  return {
    hasCompleted: hasCompletedOnboarding(),
    completedAt: data.completedAt,
    userName: data.userProfile?.name,
    tattooName: data.tattoo?.name,
    tattooLocation: data.tattoo?.bodyLocation,
    careRoutineStyle: data.userProfile?.preferences?.careRoutineStyle,
    isExpired: isOnboardingDataExpired()
  };
};