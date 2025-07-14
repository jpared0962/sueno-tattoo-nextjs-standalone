/**
 * Client-Side AI Personalization Service
 * Handles AI-powered content generation with proper privacy integration
 * Works with the server-side API endpoints
 */

class ClientPersonalizationService {
  constructor() {
    this.apiEndpoint = '/api/personalize';
    this.cache = new Map();
    this.cacheTimeout = 10 * 60 * 1000; // 10 minutes
    this.requestQueue = new Map(); // Prevent duplicate requests
  }

  /**
   * Generate homepage greeting with enhanced context
   */
  async generateHomepageGreeting(context) {
    const cacheKey = `greeting-${context.location}-${context.userInterests?.join(',')}-${this.getTimeOfDay()}`;
    
    // Check cache first
    const cached = this.getCachedContent(cacheKey);
    if (cached) return cached;

    // Check if request is already in progress
    if (this.requestQueue.has(cacheKey)) {
      return await this.requestQueue.get(cacheKey);
    }

    const requestPromise = this.makePersonalizationRequest('homepage-greeting', null, {
      ...context,
      timeOfDay: this.getTimeOfDay()
    });

    this.requestQueue.set(cacheKey, requestPromise);

    try {
      const result = await requestPromise;
      this.setCachedContent(cacheKey, result);
      return result;
    } catch (error) {
      console.error('Error generating greeting:', error);
      return this.getFallbackGreeting(context);
    } finally {
      this.requestQueue.delete(cacheKey);
    }
  }

  /**
   * Generate tattoo ideas with user context
   */
  async generateTattooIdeas(prompt, context) {
    const cacheKey = `ideas-${prompt}-${context.userInterests?.join(',')}`;
    
    const cached = this.getCachedContent(cacheKey);
    if (cached) return cached;

    if (this.requestQueue.has(cacheKey)) {
      return await this.requestQueue.get(cacheKey);
    }

    const requestPromise = this.makePersonalizationRequest('tattoo-ideas', prompt, context);
    this.requestQueue.set(cacheKey, requestPromise);

    try {
      const result = await requestPromise;
      this.setCachedContent(cacheKey, result);
      return result;
    } catch (error) {
      console.error('Error generating tattoo ideas:', error);
      return this.getFallbackTattooIdeas(prompt);
    } finally {
      this.requestQueue.delete(cacheKey);
    }
  }

  /**
   * Generate local SEO content
   */
  async generateLocalSEOContent(context) {
    const cacheKey = `local-seo-${context.location}`;
    
    const cached = this.getCachedContent(cacheKey);
    if (cached) return cached;

    if (this.requestQueue.has(cacheKey)) {
      return await this.requestQueue.get(cacheKey);
    }

    const requestPromise = this.makePersonalizationRequest('local-seo-content', null, {
      ...context,
      businessLocation: 'Laurel, MD'
    });

    this.requestQueue.set(cacheKey, requestPromise);

    try {
      const result = await requestPromise;
      this.setCachedContent(cacheKey, result);
      return result;
    } catch (error) {
      console.error('Error generating local SEO content:', error);
      return this.getFallbackLocalContent(context);
    } finally {
      this.requestQueue.delete(cacheKey);
    }
  }

  /**
   * Generate trending topics
   */
  async generateTrendingTopics(context) {
    const cacheKey = `trending-${context.location}-${context.userInterests?.join(',')}`;
    
    const cached = this.getCachedContent(cacheKey);
    if (cached) return cached;

    if (this.requestQueue.has(cacheKey)) {
      return await this.requestQueue.get(cacheKey);
    }

    const requestPromise = this.makePersonalizationRequest('trending-topics', null, context);
    this.requestQueue.set(cacheKey, requestPromise);

    try {
      const result = await requestPromise;
      this.setCachedContent(cacheKey, result);
      return result;
    } catch (error) {
      console.error('Error generating trending topics:', error);
      return this.getFallbackTrending(context);
    } finally {
      this.requestQueue.delete(cacheKey);
    }
  }

  /**
   * Make personalization request to API
   */
  async makePersonalizationRequest(type, prompt, context) {
    const requestBody = {
      type,
      context
    };

    if (prompt) {
      requestBody.prompt = prompt;
    }

    const response = await fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  }

  /**
   * Cache management
   */
  getCachedContent(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.content;
    }
    this.cache.delete(key);
    return null;
  }

  setCachedContent(key, content) {
    this.cache.set(key, {
      content,
      timestamp: Date.now()
    });

    // Limit cache size
    if (this.cache.size > 50) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }

  /**
   * Utility methods
   */
  getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  }

  /**
   * Fallback content when AI fails
   */
  getFallbackGreeting(context) {
    const timeGreeting = {
      morning: 'Good morning',
      afternoon: 'Good afternoon', 
      evening: 'Good evening'
    }[this.getTimeOfDay()] || 'Welcome';
    
    const locationPart = context.location ? ` from ${context.location}` : '';
    
    return `${timeGreeting}${locationPart}! Let's explore the intersection of art and personal expression.`;
  }

  getFallbackTattooIdeas(prompt) {
    return `Here are some creative directions for "${prompt}":

• **Symbolic Representation**: Transform the concept into meaningful symbols that resonate with your personal journey
• **Artistic Style Fusion**: Blend traditional techniques with modern artistic elements for a unique aesthetic
• **Personal Touch**: Incorporate elements from your life story to make the design truly yours

Visit our studio to discuss how we can bring your vision to life with custom artwork.`;
  }

  getFallbackLocalContent(context) {
    const location = context.location || 'the area';
    return `Welcome to Sueno Tattoo, proudly serving ${location} and the greater Maryland region. Our experienced artists specialize in custom designs, bringing your vision to life with professional artistry and attention to detail.`;
  }

  getFallbackTrending(context) {
    return `**Current Tattoo Trends:**

• **Minimalist Line Art**: Clean, simple designs with powerful meaning
• **Botanical Illustrations**: Nature-inspired pieces with intricate detail  
• **Custom Typography**: Personalized lettering and meaningful quotes

Each trend can be customized to reflect your personal style and story.`;
  }

  /**
   * Clear cache (useful for testing)
   */
  clearCache() {
    this.cache.clear();
    this.requestQueue.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return {
      size: this.cache.size,
      pendingRequests: this.requestQueue.size,
      entries: Array.from(this.cache.keys())
    };
  }
}

// Create and export instance
const clientPersonalizationService = new ClientPersonalizationService();

// Global client personalization service instance for browser access
if (typeof window !== 'undefined') {
  window.clientPersonalizationService = clientPersonalizationService;
}

export { ClientPersonalizationService };
export default clientPersonalizationService;
