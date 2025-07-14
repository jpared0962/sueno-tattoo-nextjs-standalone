/**
 * @fileoverview Unit tests for ClientPersonalizationService
 * Tests AI content generation, caching, and error handling
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import clientPersonalizationService, { ClientPersonalizationService } from './clientPersonalizationService.js';

describe('ClientPersonalizationService', () => {
  let service;
  let mockFetch;

  beforeEach(() => {
    service = new ClientPersonalizationService();
    
    // Mock fetch
    mockFetch = vi.fn();
    global.fetch = mockFetch;
  });

  describe('Homepage Greeting Generation', () => {
    it('should generate personalized greeting', async () => {
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve({ content: 'Good morning from Test City!' })
      };
      mockFetch.mockResolvedValue(mockResponse);

      const context = {
        location: 'Test City, Test Country',
        userInterests: ['traditional', 'botanical']
      };

      const greeting = await service.generateHomepageGreeting(context);
      
      expect(greeting).toBe('Good morning from Test City!');
      expect(mockFetch).toHaveBeenCalledWith('/api/personalize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('homepage-greeting')
      });
    });

    it('should use cached greeting when available', async () => {
      const context = { location: 'Test City' };
      
      // First call
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ content: 'Cached greeting' })
      });
      
      const firstGreeting = await service.generateHomepageGreeting(context);
      
      // Second call should use cache
      const secondGreeting = await service.generateHomepageGreeting(context);
      
      expect(firstGreeting).toBe(secondGreeting);
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it('should return fallback greeting on API error', async () => {
      mockFetch.mockRejectedValue(new Error('API Error'));
      
      const context = { location: 'Test City' };
      const greeting = await service.generateHomepageGreeting(context);
      
      expect(greeting).toContain('Test City');
      expect(greeting).toContain('art and personal expression');
    });

    it('should prevent duplicate requests', async () => {
      const context = { location: 'Test City' };
      
      mockFetch.mockImplementation(() => 
        new Promise(resolve => setTimeout(() => resolve({
          ok: true,
          json: () => Promise.resolve({ content: 'Test greeting' })
        }), 100))
      );

      // Make concurrent requests
      const promises = [
        service.generateHomepageGreeting(context),
        service.generateHomepageGreeting(context),
        service.generateHomepageGreeting(context)
      ];

      await Promise.all(promises);
      
      // Should only make one API call
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('Tattoo Ideas Generation', () => {
    it('should generate tattoo ideas with context', async () => {
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve({ content: 'Dragon tattoo ideas...' })
      };
      mockFetch.mockResolvedValue(mockResponse);

      const prompt = 'dragon tattoo';
      const context = { userInterests: ['traditional'] };

      const ideas = await service.generateTattooIdeas(prompt, context);
      
      expect(ideas).toBe('Dragon tattoo ideas...');
      expect(mockFetch).toHaveBeenCalledWith('/api/personalize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('tattoo-ideas')
      });
    });

    it('should return fallback ideas on error', async () => {
      mockFetch.mockRejectedValue(new Error('API Error'));
      
      const ideas = await service.generateTattooIdeas('dragon', {});
      
      expect(ideas).toContain('dragon');
      expect(ideas).toContain('Symbolic Representation');
    });
  });

  describe('Local SEO Content Generation', () => {
    it('should generate local SEO content', async () => {
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve({ content: 'Welcome to Sueno Tattoo in Test City...' })
      };
      mockFetch.mockResolvedValue(mockResponse);

      const context = { location: 'Test City' };
      const content = await service.generateLocalSEOContent(context);
      
      expect(content).toBe('Welcome to Sueno Tattoo in Test City...');
      expect(mockFetch).toHaveBeenCalledWith('/api/personalize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'local-seo-content',
          context: {
            ...context,
            businessLocation: 'Laurel, MD'
          }
        })
      });
    });
  });

  describe('Cache Management', () => {
    it('should cache responses correctly', () => {
      const key = 'test-key';
      const content = 'test content';
      
      service.setCachedContent(key, content);
      const cached = service.getCachedContent(key);
      
      expect(cached).toBe(content);
    });

    it('should expire cached content after timeout', () => {
      const key = 'test-key';
      const content = 'test content';
      
      // Mock expired timestamp
      service.cache.set(key, {
        content,
        timestamp: Date.now() - (service.cacheTimeout + 1000)
      });
      
      const cached = service.getCachedContent(key);
      expect(cached).toBeNull();
    });

    it('should limit cache size', () => {
      // Fill cache beyond limit
      for (let i = 0; i < 55; i++) {
        service.setCachedContent(`key-${i}`, `content-${i}`);
      }
      
      expect(service.cache.size).toBeLessThanOrEqual(50);
    });

    it('should clear cache and request queue', () => {
      service.setCachedContent('test', 'content');
      service.requestQueue.set('test', Promise.resolve());
      
      service.clearCache();
      
      expect(service.cache.size).toBe(0);
      expect(service.requestQueue.size).toBe(0);
    });
  });

  describe('Utility Methods', () => {
    it('should return correct time of day', () => {
      const originalHours = Date.prototype.getHours;
      
      // Mock morning
      Date.prototype.getHours = () => 8;
      expect(service.getTimeOfDay()).toBe('morning');
      
      // Mock afternoon
      Date.prototype.getHours = () => 14;
      expect(service.getTimeOfDay()).toBe('afternoon');
      
      // Mock evening
      Date.prototype.getHours = () => 20;
      expect(service.getTimeOfDay()).toBe('evening');
      
      // Restore original method
      Date.prototype.getHours = originalHours;
    });

    it('should generate cache statistics', () => {
      service.setCachedContent('test1', 'content1');
      service.setCachedContent('test2', 'content2');
      service.requestQueue.set('pending', Promise.resolve());
      
      const stats = service.getCacheStats();
      
      expect(stats.size).toBe(2);
      expect(stats.pendingRequests).toBe(1);
      expect(stats.entries).toContain('test1');
      expect(stats.entries).toContain('test2');
    });
  });

  describe('Fallback Content', () => {
    it('should generate appropriate fallback greeting', () => {
      const context = { location: 'Test City, Test Country' };
      const fallback = service.getFallbackGreeting(context);
      
      expect(fallback).toContain('Test City');
      expect(fallback).toContain('art and personal expression');
    });

    it('should generate fallback tattoo ideas', () => {
      const fallback = service.getFallbackTattooIdeas('dragon');
      
      expect(fallback).toContain('dragon');
      expect(fallback).toContain('Symbolic Representation');
      expect(fallback).toContain('Artistic Style Fusion');
    });

    it('should generate fallback local content', () => {
      const context = { location: 'Test City' };
      const fallback = service.getFallbackLocalContent(context);
      
      expect(fallback).toContain('Test City');
      expect(fallback).toContain('Sueno Tattoo');
      expect(fallback).toContain('Maryland');
    });

    it('should generate fallback trending topics', () => {
      const fallback = service.getFallbackTrending({});
      
      expect(fallback).toContain('Minimalist Line Art');
      expect(fallback).toContain('Botanical Illustrations');
      expect(fallback).toContain('Custom Typography');
    });
  });
});
