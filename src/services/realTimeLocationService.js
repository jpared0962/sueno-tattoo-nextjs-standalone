/**
 * Real-Time Location Detection Service
 * Updates location without page refresh using multiple detection methods
 * Includes battery optimization, offline support, user preferences, and metrics
 */

class RealTimeLocationService {
  constructor() {
    this.currentLocation = null;
    this.lastUpdate = null;
    this.listeners = new Set();
    this.isUpdating = false;
    this.metrics = {
      gpsSuccess: 0,
      gpsFailure: 0,
      ipSuccess: 0,
      ipFailure: 0,
      cacheHits: 0,
      totalRequests: 0
    };
    
    // Optimized intervals for mobile battery conservation
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.updateInterval = this.isMobile ? 15 * 60 * 1000 : 10 * 60 * 1000; // 15min mobile, 10min desktop
    this.highAccuracyInterval = this.isMobile ? 30 * 60 * 1000 : 20 * 60 * 1000; // 30min mobile, 20min desktop
    
    // Error state tracking
    this.errorState = {
      consecutiveFailures: 0,
      lastError: null,
      networkOffline: false
    };
    
    // Load cached data and user preferences
    this.loadFromCache();
    this.loadUserPreferences();
    
    // Start automatic updates if enabled
    this.init();
  }

  init() {
    // Check if automatic location detection is enabled
    if (!this.userPreferences.autoLocationEnabled) {
      console.log('🚫 Automatic location detection disabled by user preference');
      return;
    }

    // Check if user has given location consent
    if (!this.hasLocationConsent()) {
      console.log('🚫 Location consent not granted, skipping automatic location detection');
      return;
    }

    // Get initial location
    this.updateLocation();
    
    // Set up periodic updates with battery optimization
    this.setupPeriodicUpdates();
    
    // Network status monitoring
    this.setupNetworkMonitoring();
    
    // Update on page visibility change (user returns to tab)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.shouldUpdate()) {
        this.updateLocation();
      }
    });

    // Battery status monitoring (if available)
    this.setupBatteryMonitoring();
  }

  setupPeriodicUpdates() {
    // Use different intervals based on device type and battery status
    const getUpdateInterval = () => {
      if (this.errorState.consecutiveFailures > 3) {
        return this.updateInterval * 2; // Slow down after failures
      }
      
      if (this.isMobile && this.batteryStatus?.level < 0.2) {
        return this.updateInterval * 3; // More aggressive battery conservation
      }
      
      if (this.isMobile && this.batteryStatus?.level < 0.5) {
        return this.updateInterval * 1.5; // Moderate battery conservation
      }
      
      return this.updateInterval;
    };

    const scheduleNextUpdate = () => {
      setTimeout(() => {
        this.updateLocation().finally(() => {
          scheduleNextUpdate(); // Schedule next update regardless of success/failure
        });
      }, getUpdateInterval());
    };

    scheduleNextUpdate();
  }

  setupNetworkMonitoring() {
    // Monitor online/offline status
    window.addEventListener('online', () => {
      console.log('🌐 Network back online, updating location...');
      this.errorState.networkOffline = false;
      setTimeout(() => this.updateLocation(), 1000);
    });

    window.addEventListener('offline', () => {
      console.log('📴 Network offline, using cached location');
      this.errorState.networkOffline = true;
    });
  }

  async setupBatteryMonitoring() {
    // Battery API is deprecated but still useful where available
    try {
      if ('getBattery' in navigator) {
        this.batteryStatus = await navigator.getBattery();
        console.log(`🔋 Battery level: ${Math.round(this.batteryStatus.level * 100)}%`);
        
        this.batteryStatus.addEventListener('levelchange', () => {
          const level = this.batteryStatus.level;
          if (level < 0.15) {
            console.log('🪫 Critical battery detected, minimizing location updates');
          } else if (level < 0.3) {
            console.log('🔋 Low battery detected, reducing location update frequency');
          }
        });
      }
    } catch (error) {
      // Battery API not available, continue without it
      console.log('Battery monitoring not available');
    }
  }

  loadFromCache() {
    try {
      const cached = localStorage.getItem('sueno_location_cache');
      if (cached) {
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < 24 * 60 * 60 * 1000) { // 24 hours
          this.currentLocation = data.location;
          this.lastUpdate = data.timestamp;
          console.log('📱 Loaded location from offline cache:', this.currentLocation.city);
        }
      }

      // Load metrics
      const metrics = localStorage.getItem('sueno_location_metrics');
      if (metrics) {
        this.metrics = { ...this.metrics, ...JSON.parse(metrics) };
      }
    } catch (error) {
      console.warn('Cache loading failed:', error);
    }
  }

  loadUserPreferences() {
    try {
      const prefs = localStorage.getItem('sueno_location_preferences');
      this.userPreferences = prefs ? JSON.parse(prefs) : {
        autoLocationEnabled: true,
        gpsEnabled: true,
        updateFrequency: 'normal', // normal, reduced, disabled
        batteryOptimization: true
      };
    } catch (error) {
      this.userPreferences = {
        autoLocationEnabled: true,
        gpsEnabled: true,
        updateFrequency: 'normal',
        batteryOptimization: true
      };
    }
  }

  /**
   * Check if user has given location consent
   */
  hasLocationConsent() {
    try {
      const granularConsent = localStorage.getItem('sueno_granular_consent');
      if (!granularConsent) {
        return false;
      }
      
      const consentData = JSON.parse(granularConsent);
      const now = Date.now();
      
      // Check if consent has expired (30 days)
      if (now - consentData.timestamp > 30 * 24 * 60 * 60 * 1000) {
        return false;
      }
      
      return consentData.location === true;
    } catch (error) {
      console.error('Error checking location consent:', error);
      return false;
    }
  }

  saveToCache() {
    try {
      if (this.currentLocation) {
        localStorage.setItem('sueno_location_cache', JSON.stringify({
          location: this.currentLocation,
          timestamp: this.lastUpdate || Date.now()
        }));
      }

      // Save metrics
      localStorage.setItem('sueno_location_metrics', JSON.stringify(this.metrics));
    } catch (error) {
      console.warn('Cache saving failed:', error);
    }
  }

  saveUserPreferences() {
    try {
      localStorage.setItem('sueno_location_preferences', JSON.stringify(this.userPreferences));
    } catch (error) {
      console.warn('Preferences saving failed:', error);
    }
  }

  shouldUpdate() {
    if (!this.lastUpdate) return true;
    
    // Respect user preferences
    if (this.userPreferences.updateFrequency === 'disabled') return false;
    
    const interval = this.userPreferences.updateFrequency === 'reduced' 
      ? this.updateInterval * 2 
      : this.updateInterval;
    
    return Date.now() - this.lastUpdate > interval;
  }

  async updateLocation() {
    if (this.isUpdating) return;
    this.isUpdating = true;

    try {
      // Check network status first
      if (this.errorState.networkOffline && !navigator.onLine) {
        console.log('📴 Network offline, using cached location');
        return this.currentLocation;
      }

      this.metrics.totalRequests++;

      // Try multiple location detection methods
      const location = await this.detectLocation();
      
      if (location && this.hasLocationChanged(location)) {
        this.currentLocation = location;
        this.lastUpdate = Date.now();
        this.errorState.consecutiveFailures = 0; // Reset failure counter
        this.errorState.lastError = null;
        
        // Save to cache for offline support
        this.saveToCache();
        
        this.notifyListeners(location);
        
        console.log('🌍 Location updated:', location);
        return location;
      } else if (location) {
        // Location didn't change, but update timestamp
        this.lastUpdate = Date.now();
        return this.currentLocation;
      }
    } catch (error) {
      this.handleLocationError(error);
    } finally {
      this.isUpdating = false;
    }

    return this.currentLocation;
  }

  handleLocationError(error) {
    this.errorState.consecutiveFailures++;
    this.errorState.lastError = {
      message: error.message,
      timestamp: Date.now(),
      type: error.name || 'LocationError'
    };

    console.warn(`Location update failed (${this.errorState.consecutiveFailures} consecutive):`, error);

    // Exponential backoff after repeated failures
    if (this.errorState.consecutiveFailures > 5) {
      console.log('Too many location failures, falling back to cached data');
    }

    // Notify listeners of error state
    this.notifyListeners({
      ...this.currentLocation,
      error: true,
      errorMessage: error.message,
      errorCount: this.errorState.consecutiveFailures
    });
  }

  async detectLocation() {
    // If network is offline, return cached location
    if (this.errorState.networkOffline) {
      this.metrics.cacheHits++;
      return this.currentLocation;
    }

    // Method 1: Try browser geolocation (most accurate) - only if user enabled GPS
    if (this.userPreferences.gpsEnabled) {
      const gpsLocation = await this.tryBrowserGeolocation();
      if (gpsLocation) {
        this.metrics.gpsSuccess++;
        return gpsLocation;
      } else {
        this.metrics.gpsFailure++;
      }
    }

    // Method 2: IP-based detection (fallback)
    const ipLocation = await this.tryIPGeolocation();
    if (ipLocation) {
      this.metrics.ipSuccess++;
      return ipLocation;
    } else {
      this.metrics.ipFailure++;
    }

    // Method 3: Use cached location if available
    if (this.currentLocation) {
      this.metrics.cacheHits++;
      return this.currentLocation;
    }

    throw new Error('All location detection methods failed');
  }

  async tryBrowserGeolocation() {
    return new Promise((resolve) => {
      if (!navigator.geolocation || !this.userPreferences.gpsEnabled || !this.hasLocationConsent()) {
        resolve(null);
        return;
      }

      // Optimized GPS settings for mobile performance
      // Use standard accuracy for better battery life and faster response
      const highAccuracy = false; // Standard accuracy is sufficient for business needs
      
      const options = {
        enableHighAccuracy: highAccuracy,
        timeout: this.isMobile ? 12000 : 8000, // Optimal timeout - 12s mobile, 8s desktop
        maximumAge: this.isMobile ? 15 * 60 * 1000 : 10 * 60 * 1000 // 15min cache mobile, 10min desktop
      };

      const startTime = Date.now();

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude, accuracy } = position.coords;
            const responseTime = Date.now() - startTime;
            
            console.log(`🛰️ GPS location acquired in ${responseTime}ms, accuracy: ${Math.round(accuracy)}m (optimized for mobile)`);
            
            // Use reverse geocoding to get city name
            const response = await fetch('/api/location/precise', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ latitude, longitude, accuracy })
            });

            if (response.ok) {
              const location = await response.json();
              resolve({
                ...location,
                source: 'gps',
                accuracy: `${Math.round(accuracy)}m`,
                coordinates: { latitude, longitude },
                responseTime: responseTime
              });
            } else {
              console.warn('GPS reverse geocoding failed');
              resolve(null);
            }
          } catch (error) {
            console.warn('GPS reverse geocoding failed:', error);
            resolve(null);
          }
        },
        (error) => {
          const responseTime = Date.now() - startTime;
          console.log(`GPS location failed in ${responseTime}ms:`, error.message);
          
          // Track specific GPS error types
          this.metrics.gpsErrors = this.metrics.gpsErrors || {};
          this.metrics.gpsErrors[error.code] = (this.metrics.gpsErrors[error.code] || 0) + 1;
          
          resolve(null);
        },
        options
      );
    });
  }

  async tryIPGeolocation() {
    try {
      const startTime = Date.now();
      
      const response = await fetch('/api/location', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });

      const responseTime = Date.now() - startTime;

      if (response.ok) {
        const location = await response.json();
        console.log(`🌐 IP location acquired in ${responseTime}ms`);
        
        return {
          ...location,
          source: location.source || 'ip',
          responseTime: responseTime
        };
      } else {
        console.warn(`IP geolocation failed: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.warn('IP geolocation failed:', error);
      
      // Track IP service errors
      this.metrics.ipErrors = this.metrics.ipErrors || {};
      this.metrics.ipErrors[error.name || 'NetworkError'] = 
        (this.metrics.ipErrors[error.name || 'NetworkError'] || 0) + 1;
    }
    return null;
  }

  hasLocationChanged(newLocation) {
    if (!this.currentLocation) return true;
    
    // Consider location changed if city is different
    return this.currentLocation.city !== newLocation.city ||
           this.currentLocation.region !== newLocation.region;
  }

  addListener(callback) {
    this.listeners.add(callback);
    
    // Immediately call with current location if available
    if (this.currentLocation) {
      callback(this.currentLocation);
    }
    
    return () => this.listeners.delete(callback);
  }

  notifyListeners(location) {
    this.listeners.forEach(callback => {
      try {
        callback(location);
      } catch (error) {
        console.error('Location listener error:', error);
      }
    });
  }

  getCurrentLocation() {
    return this.currentLocation;
  }

  // Manual location refresh
  async refresh() {
    await this.updateLocation();
    return this.currentLocation;
  }

  // Request high-accuracy location (prompts user for GPS permission)
  async requestHighAccuracy() {
    const gpsLocation = await this.tryBrowserGeolocation();
    if (gpsLocation) {
      this.currentLocation = gpsLocation;
      this.lastUpdate = Date.now();
      this.saveToCache();
      this.notifyListeners(gpsLocation);
      return gpsLocation;
    }
    return null;
  }

  // User preference management
  setUserPreference(key, value) {
    this.userPreferences[key] = value;
    this.saveUserPreferences();
    
    // Apply immediate changes
    switch (key) {
      case 'autoLocationEnabled':
        if (!value) {
          console.log('🚫 Automatic location detection disabled');
        } else {
          console.log('✅ Automatic location detection enabled');
          this.updateLocation(); // Get location immediately
        }
        break;
      case 'gpsEnabled':
        console.log(`🛰️ GPS ${value ? 'enabled' : 'disabled'}`);
        break;
      case 'updateFrequency':
        console.log(`⏱️ Update frequency set to: ${value}`);
        break;
    }
  }

  getUserPreferences() {
    return { ...this.userPreferences };
  }

  // Metrics and diagnostics
  getMetrics() {
    const totalAttempts = this.metrics.gpsSuccess + this.metrics.gpsFailure + 
                         this.metrics.ipSuccess + this.metrics.ipFailure;
    
    return {
      ...this.metrics,
      successRate: totalAttempts > 0 ? 
        ((this.metrics.gpsSuccess + this.metrics.ipSuccess) / totalAttempts * 100).toFixed(1) + '%' : '0%',
      gpsSuccessRate: (this.metrics.gpsSuccess + this.metrics.gpsFailure) > 0 ?
        (this.metrics.gpsSuccess / (this.metrics.gpsSuccess + this.metrics.gpsFailure) * 100).toFixed(1) + '%' : '0%',
      ipSuccessRate: (this.metrics.ipSuccess + this.metrics.ipFailure) > 0 ?
        (this.metrics.ipSuccess / (this.metrics.ipSuccess + this.metrics.ipFailure) * 100).toFixed(1) + '%' : '0%',
      errorState: this.errorState,
      batteryOptimized: this.isMobile && this.userPreferences.batteryOptimization,
      updateInterval: this.updateInterval,
      lastUpdate: this.lastUpdate ? new Date(this.lastUpdate).toLocaleString() : 'Never'
    };
  }

  getErrorState() {
    return {
      ...this.errorState,
      hasErrors: this.errorState.consecutiveFailures > 0,
      networkStatus: navigator.onLine ? 'online' : 'offline'
    };
  }

  // Clear cache and reset
  clearCache() {
    try {
      localStorage.removeItem('sueno_location_cache');
      localStorage.removeItem('sueno_location_metrics');
      this.currentLocation = null;
      this.lastUpdate = null;
      this.metrics = {
        gpsSuccess: 0,
        gpsFailure: 0,
        ipSuccess: 0,
        ipFailure: 0,
        cacheHits: 0,
        totalRequests: 0
      };
      console.log('🗑️ Location cache cleared');
    } catch (error) {
      console.warn('Cache clearing failed:', error);
    }
  }

  // Export metrics for admin dashboard
  exportDiagnostics() {
    return {
      service: 'RealTimeLocationService',
      version: '2.0.0',
      timestamp: new Date().toISOString(),
      device: {
        isMobile: this.isMobile,
        userAgent: navigator.userAgent,
        geolocationSupported: !!navigator.geolocation,
        batteryAPI: 'getBattery' in navigator,
        onlineStatus: navigator.onLine
      },
      preferences: this.userPreferences,
      metrics: this.getMetrics(),
      currentLocation: this.currentLocation ? {
        city: this.currentLocation.city,
        country: this.currentLocation.country,
        source: this.currentLocation.source,
        lastUpdate: this.lastUpdate
      } : null,
      errors: this.errorState
    };
  }
}

// Global location service instance
window.locationService = new RealTimeLocationService();

// Export for use in other modules
export default window.locationService;
