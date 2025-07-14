/**
 * @fileoverview Unit tests for PrivacySessionManager
 * Tests consent management, session data handling, and GDPR compliance
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import PrivacySessionManager from './privacySessionManager.js';
import { createMockLocationService } from '../test/setup.js';

describe('PrivacySessionManager', () => {
  let privacyManager;
  let mockLocationService;

  beforeEach(() => {
    mockLocationService = createMockLocationService();
    privacyManager = new PrivacySessionManager(mockLocationService);
  });

  describe('Consent Management', () => {
    it('should start with no consent by default', () => {
      expect(privacyManager.hasConsent()).toBe(false);
    });

    it('should allow setting consent', () => {
      privacyManager.setConsent(true);
      expect(privacyManager.hasConsent()).toBe(true);
    });

    it('should clear session data when consent is denied', () => {
      // First grant consent and add some data
      privacyManager.setConsent(true);
      privacyManager.addInterest('test-interest');
      
      // Then deny consent
      privacyManager.setConsent(false);
      
      // Session data should be cleared
      expect(privacyManager.getSessionData()).toBeNull();
    });

    it('should handle consent expiration', () => {
      const now = Date.now();
      const expiredTime = now - (31 * 24 * 60 * 60 * 1000); // 31 days ago
      
      // Mock expired consent
      localStorage.setItem('sueno_privacy_consent', JSON.stringify({
        granted: true,
        timestamp: expiredTime,
        version: '1.0'
      }));

      expect(privacyManager.hasConsent()).toBe(false);
    });
  });

  describe('Session Data Management', () => {
    beforeEach(() => {
      privacyManager.setConsent(true);
    });

    it('should track user interests', () => {
      privacyManager.addInterest('tattoo-style');
      const sessionData = privacyManager.getSessionData();
      
      expect(sessionData.interests).toContain('tattoo-style');
    });

    it('should track page visits', () => {
      privacyManager.trackPageVisit('homepage', { test: 'metadata' });
      const sessionData = privacyManager.getSessionData();
      
      expect(sessionData.visitedPages).toHaveLength(1);
      expect(sessionData.visitedPages[0].page).toBe('homepage');
      expect(sessionData.visitedPages[0].test).toBe('metadata');
    });

    it('should limit interests array size', () => {
      // Add more than 10 interests
      for (let i = 0; i < 15; i++) {
        privacyManager.addInterest(`interest-${i}`);
      }
      
      const sessionData = privacyManager.getSessionData();
      expect(sessionData.interests.length).toBeLessThanOrEqual(10);
    });

    it('should handle session expiration', () => {
      // Create expired session data
      const expiredData = {
        interests: ['test'],
        timestamp: Date.now() - (25 * 60 * 60 * 1000) // 25 hours ago
      };
      
      sessionStorage.setItem('sueno_session_data', JSON.stringify(expiredData));
      expect(privacyManager.getSessionData()).toBeNull();
    });
  });

  describe('Location Integration', () => {
    beforeEach(() => {
      privacyManager.setConsent(true);
    });

    it('should get location data from location service', async () => {
      const location = await privacyManager.getLocationData();
      
      expect(mockLocationService.getCurrentLocation).toHaveBeenCalled();
      expect(location).toBeDefined();
      expect(location.city).toBe('Test City');
    });

    it('should not get location without consent', async () => {
      privacyManager.setConsent(false);
      const location = await privacyManager.getLocationData();
      
      expect(location).toBeNull();
    });

    it('should cache location data in session', async () => {
      await privacyManager.getLocationData();
      const sessionData = privacyManager.getSessionData();
      
      expect(sessionData.location).toBeDefined();
      expect(sessionData.locationTimestamp).toBeDefined();
    });
  });

  describe('Personalization Context', () => {
    beforeEach(() => {
      privacyManager.setConsent(true);
    });

    it('should generate personalization context', () => {
      privacyManager.addInterest('traditional');
      privacyManager.trackPageVisit('services');
      
      const context = privacyManager.getPersonalizationContext();
      
      expect(context).toHaveProperty('userInterests');
      expect(context).toHaveProperty('visitHistory');
      expect(context.userInterests).toContain('traditional');
      expect(context.visitHistory).toContain('services');
    });

    it('should return empty context without consent', () => {
      privacyManager.setConsent(false);
      const context = privacyManager.getPersonalizationContext();
      
      expect(context).toEqual({});
    });

    it('should check personalization capability', () => {
      expect(privacyManager.canPersonalize()).toBe(true);
      
      privacyManager.setConsent(false);
      expect(privacyManager.canPersonalize()).toBe(false);
    });
  });

  describe('GDPR Compliance', () => {
    it('should export user data', () => {
      privacyManager.setConsent(true);
      privacyManager.addInterest('test');
      
      const exportedData = privacyManager.exportUserData();
      
      expect(exportedData).toHaveProperty('consent');
      expect(exportedData).toHaveProperty('sessionData');
      expect(exportedData).toHaveProperty('exportedAt');
    });

    it('should delete all user data', () => {
      privacyManager.setConsent(true);
      privacyManager.addInterest('test');
      
      privacyManager.deleteAllUserData();
      
      expect(privacyManager.hasConsent()).toBe(false);
      expect(privacyManager.getSessionData()).toBeNull();
    });

    it('should clear related localStorage keys', () => {
      localStorage.setItem('sueno_test_key', 'test');
      localStorage.setItem('other_key', 'other');
      
      privacyManager.deleteAllUserData();
      
      // Check that sueno-prefixed keys were removed
      expect(localStorage.removeItem).toHaveBeenCalledWith('sueno_privacy_consent');
      expect(localStorage.removeItem).not.toHaveBeenCalledWith('other_key');
    });
  });

  describe('Error Handling', () => {
    it('should handle localStorage unavailability', () => {
      // Mock localStorage as undefined
      Object.defineProperty(window, 'localStorage', {
        value: undefined
      });
      
      const manager = new PrivacySessionManager(mockLocationService);
      expect(manager.hasConsent()).toBe(false);
      expect(manager.setConsent(true)).toBe(false);
    });

    it('should handle malformed consent data', () => {
      localStorage.setItem('sueno_privacy_consent', 'invalid-json');
      expect(privacyManager.hasConsent()).toBe(false);
    });

    it('should handle location service errors', async () => {
      mockLocationService.getCurrentLocation.mockImplementation(() => {
        throw new Error('Location service error');
      });
      
      const location = await privacyManager.getLocationData();
      expect(location).toBeNull();
    });
  });
});
