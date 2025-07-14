/**
 * Privacy-first session management for personalization
 * Handles user consent, temporary session data, and GDPR compliance
 * Updated to integrate with RealTimeLocationService and PersonalizationService
 */

class PrivacySessionManager {
  constructor(locationService = window.locationService) {
    this.sessionKey = 'sueno_session_data';
    this.consentKey = 'sueno_privacy_consent';
    this.granularConsentKey = 'sueno_granular_consent';
    this.maxSessionAge = 24 * 60 * 60 * 1000; // 24 hours
    this.locationService = locationService; // Use the shared location service
  }

  /**
   * Check if user has given consent for personalization
   */
  hasConsent() {
    try {
      // Check if localStorage is available (browser environment)
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return false;
      }

      const consent = localStorage.getItem(this.consentKey);
      if (!consent) {
        console.log('No consent found in localStorage');
        return false;
      }
      
      const consentData = JSON.parse(consent);
      const now = Date.now();
      
      // Check if consent has expired (30 days)
      if (now - consentData.timestamp > 30 * 24 * 60 * 60 * 1000) {
        console.log('Consent expired, clearing...');
        this.clearConsent();
        return false;
      }
      
      return consentData.granted === true;
    } catch (error) {
      console.error('Error checking consent:', error);
      return false;
    }
  }

  /**
   * Set user consent for personalization
   */
  setConsent(granted = true) {
    try {
      // Check if localStorage is available
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.warn('localStorage not available, consent not saved');
        return false;
      }

      const consentData = {
        granted,
        timestamp: Date.now(),
        version: '1.0' // For future consent version tracking
      };
      
      localStorage.setItem(this.consentKey, JSON.stringify(consentData));
      console.log('Consent saved:', { granted });
      
      if (!granted) {
        // Clear all session data if consent is denied
        this.clearSessionData();
      }
      
      return true;
    } catch (error) {
      console.error('Error setting consent:', error);
      return false;
    }
  }

  /**
   * Set granular consent for different features
   */
  setGranularConsent(consents) {
    try {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        console.warn('localStorage not available, granular consent not saved');
        return false;
      }

      const consentData = {
        ...consents,
        timestamp: Date.now(),
        version: '1.0'
      };
      
      localStorage.setItem(this.granularConsentKey, JSON.stringify(consentData));
      console.log('Granular consent saved:', consents);
      
      return true;
    } catch (error) {
      console.error('Error setting granular consent:', error);
      return false;
    }
  }

  /**
   * Get granular consent for specific features
   */
  getGranularConsent() {
    try {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return null;
      }

      const consent = localStorage.getItem(this.granularConsentKey);
      if (!consent) {
        return null;
      }
      
      const consentData = JSON.parse(consent);
      const now = Date.now();
      
      // Check if consent has expired (30 days)
      if (now - consentData.timestamp > 30 * 24 * 60 * 60 * 1000) {
        console.log('Granular consent expired, clearing...');
        localStorage.removeItem(this.granularConsentKey);
        return null;
      }
      
      return consentData;
    } catch (error) {
      console.error('Error getting granular consent:', error);
      return null;
    }
  }

  /**
   * Check if user has given consent for a specific feature
   */
  hasFeatureConsent(feature) {
    const granularConsent = this.getGranularConsent();
    if (!granularConsent) {
      return false;
    }
    
    return granularConsent[feature] === true;
  }

  /**
   * Clear consent and all associated data
   */
  clearConsent() {
    try {
      localStorage.removeItem(this.consentKey);
      localStorage.removeItem(this.granularConsentKey);
      this.clearSessionData();
    } catch (error) {
      console.error('Error clearing consent:', error);
    }
  }

  /**
   * Get current session data
   */
  getSessionData() {
    if (!this.hasConsent()) {
      return null;
    }

    try {
      const sessionData = sessionStorage.getItem(this.sessionKey);
      if (!sessionData) return null;
      
      const data = JSON.parse(sessionData);
      const now = Date.now();
      
      // Check if session has expired
      if (now - data.timestamp > this.maxSessionAge) {
        this.clearSessionData();
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error getting session data:', error);
      return null;
    }
  }

  /**
   * Update session data with new interests/preferences
   */
  updateSessionData(updates) {
    if (!this.hasConsent()) {
      return false;
    }

    try {
      const currentData = this.getSessionData() || {
        interests: [],
        visitedPages: [],
        generatedIdeas: [],
        timestamp: Date.now()
      };

      const updatedData = {
        ...currentData,
        ...updates,
        timestamp: Date.now() // Update timestamp
      };

      // Limit array sizes to prevent memory issues
      if (updatedData.interests) {
        updatedData.interests = [...new Set(updatedData.interests)].slice(-10);
      }
      if (updatedData.visitedPages) {
        updatedData.visitedPages = updatedData.visitedPages.slice(-20);
      }
      if (updatedData.generatedIdeas) {
        updatedData.generatedIdeas = updatedData.generatedIdeas.slice(-5);
      }

      sessionStorage.setItem(this.sessionKey, JSON.stringify(updatedData));
      return true;
    } catch (error) {
      console.error('Error updating session data:', error);
      return false;
    }
  }

  /**
   * Add interest to session
   */
  addInterest(interest) {
    const sessionData = this.getSessionData() || { interests: [] };
    const interests = [...new Set([...sessionData.interests, interest])];
    
    return this.updateSessionData({ interests });
  }

  /**
   * Track page visit
   */
  trackPageVisit(page, metadata = {}) {
    const sessionData = this.getSessionData() || { visitedPages: [] };
    const visit = {
      page,
      timestamp: Date.now(),
      ...metadata
    };
    
    const visitedPages = [...sessionData.visitedPages, visit];
    return this.updateSessionData({ visitedPages });
  }

  /**
   * Save generated idea from AI personalization
   */
  saveGeneratedIdea(idea, userPrompt) {
    const sessionData = this.getSessionData() || { generatedIdeas: [] };
    const ideaRecord = {
      idea,
      userPrompt,
      timestamp: Date.now()
    };
    
    const generatedIdeas = [...sessionData.generatedIdeas, ideaRecord];
    return this.updateSessionData({ generatedIdeas });
  }

  /**
   * Clear all session data
   */
  clearSessionData() {
    try {
      sessionStorage.removeItem(this.sessionKey);
    } catch (error) {
      console.error('Error clearing session data:', error);
    }
  }

  /**
   * Get location data from the RealTimeLocationService
   * This replaces the direct API call implementation with the shared service
   */
  async getLocationData() {
    if (!this.hasConsent()) {
      return null;
    }

    try {
      // Use the global location service
      if (this.locationService) {
        const location = this.locationService.getCurrentLocation();
        if (location) {
          // Cache location in session data
          this.updateSessionData({
            location,
            locationTimestamp: Date.now()
          });
          return location;
        }
        
        // If no location is available, trigger an update and wait for it
        return await this.locationService.refresh();
      }
      
      // Fallback to cached location if service is unavailable
      const sessionData = this.getSessionData();
      return this.getCachedLocationOrNull(sessionData);
      
    } catch (error) {
      console.error('Error getting location data:', error);
      return null;
    }
  }

  /**
   * Helper to get cached location or return null gracefully
   */
  getCachedLocationOrNull(sessionData) {
    if (sessionData?.location && sessionData.location.city !== 'Unknown') {
      console.log('Using cached location data');
      return sessionData.location;
    }
    return null; // No useful location data available
  }

  /**
   * Get high-accuracy location using the RealTimeLocationService
   */
  async getHighAccuracyLocation() {
    if (!this.hasConsent()) {
      return null;
    }

    try {
      if (this.locationService) {
        // Request high accuracy location from the service
        const location = await this.locationService.requestHighAccuracy();
        if (location) {
          // Cache in session
          this.updateSessionData({
            highAccuracyLocation: location,
            highAccuracyLocationTimestamp: Date.now()
          });
          return location;
        }
      }
      
      // Fallback to cached high-accuracy location
      const sessionData = this.getSessionData();
      if (sessionData?.highAccuracyLocation) {
        const locationAge = Date.now() - (sessionData.highAccuracyLocationTimestamp || 0);
        if (locationAge < 30 * 60 * 1000) { // 30 minutes for GPS data
          return sessionData.highAccuracyLocation;
        }
      }
      
      return null;
    } catch (error) {
      console.error('High-accuracy location error:', error);
      return null;
    }
  }

  /**
   * Get context data for AI personalization
   * Prepares relevant user data for the PersonalizationService
   */
  getPersonalizationContext() {
    if (!this.hasConsent()) {
      return {};
    }
    
    const sessionData = this.getSessionData();
    if (!sessionData) return {};
    
    // Get current location from session or location service
    const location = sessionData.location?.city ? 
      `${sessionData.location.city}, ${sessionData.location.region || ''}` : 
      null;
    
    return {
      location,
      userInterests: sessionData.interests || [],
      visitHistory: sessionData.visitedPages?.map(v => v.page) || [],
      previousIdeas: sessionData.generatedIdeas?.map(g => g.idea) || [],
      previousPrompts: sessionData.generatedIdeas?.map(g => g.userPrompt) || []
    };
  }

  /**
   * Check if personalization features can be used
   */
  canPersonalize() {
    return this.hasConsent();
  }

  /**
   * Export user data for GDPR compliance
   * Enhanced to include all data from connected services
   */
  exportUserData() {
    const data = {
      consent: localStorage.getItem(this.consentKey),
      sessionData: sessionStorage.getItem(this.sessionKey),
      exportedAt: new Date().toISOString()
    };
    
    // Add location data if available
    if (this.locationService) {
      data.locationData = this.locationService.getCurrentLocation();
    }
    
    return data;
  }

  /**
   * Delete all user data for GDPR compliance
   * Enhanced to clear data from connected services
   */
  deleteAllUserData() {
    this.clearConsent();
    this.clearSessionData();
    
    // Clear any other related data
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('sueno_')) {
        localStorage.removeItem(key);
      }
    });
    
    const sessionKeys = Object.keys(sessionStorage);
    sessionKeys.forEach(key => {
      if (key.startsWith('sueno_')) {
        sessionStorage.removeItem(key);
      }
    });
  }
}

export default PrivacySessionManager;