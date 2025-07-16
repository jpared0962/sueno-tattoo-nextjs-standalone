// Google Indexing Acceleration Utilities
export class IndexingBooster {
  constructor() {
    this.baseUrl = 'https://www.suenotattoo.com';
    this.indexNowKey = '4f8b2c9e1a7d6b5e3f9c8a2b1d4e7f0c';
  }

  // Generate priority page list for faster indexing
  getPriorityPages() {
    return [
      { url: '/', priority: 1.0, changefreq: 'weekly' },
      { url: '/services', priority: 0.9, changefreq: 'monthly' },
      { url: '/gallery', priority: 0.8, changefreq: 'weekly' },
      { url: '/contact', priority: 0.9, changefreq: 'monthly' },
      { url: '/about', priority: 0.8, changefreq: 'monthly' },
      { url: '/flash', priority: 0.7, changefreq: 'weekly' },
      { url: '/reviews', priority: 0.8, changefreq: 'weekly' },
      { url: '/aftercare', priority: 0.7, changefreq: 'monthly' },
      { url: '/book-consultation', priority: 0.9, changefreq: 'monthly' }
    ];
  }

  // Generate JSON-LD for enhanced content discovery
  generateWebsiteSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Sueno Tattoo",
      "alternateName": "Jose Tattoo Artist",
      "url": this.baseUrl,
      "description": "Professional tattoo artist in Laurel, MD specializing in custom designs, traditional tattoos, and realistic artwork",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "publisher": {
        "@type": "Organization",
        "@id": `${this.baseUrl}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${this.baseUrl}/gallery?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 8,
        "itemListElement": this.getPriorityPages().map((page, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `${this.baseUrl}${page.url}`,
          "name": this.getPageTitle(page.url)
        }))
      }
    };
  }

  // Get page titles for structured data
  getPageTitle(url) {
    const titles = {
      '/': 'Sueno Tattoo | Professional Tattoo Artist in Laurel, MD',
      '/about': 'Meet Jose | Master Tattoo Artist',
      '/services': 'Services & Pricing | Professional Tattoo Services',
      '/gallery': 'Portfolio Gallery | Custom Tattoo Artwork',
      '/flash': 'Flash Designs | Ready-to-Ink Tattoo Art',
      '/reviews': 'Client Reviews | 100+ Five-Star Testimonials',
      '/contact': 'Contact & Booking | Free Consultation',
      '/aftercare': 'Professional Aftercare Guide',
      '/book-consultation': 'Book Free Consultation'
    };
    return titles[url] || 'Sueno Tattoo';
  }

  // Generate Google-friendly internal linking structure
  generateInternalLinks() {
    return {
      homepage: ['/about', '/services', '/gallery', '/contact'],
      about: ['/services', '/gallery', '/reviews'],
      services: ['/gallery', '/flash', '/contact', '/aftercare'],
      gallery: ['/flash', '/about', '/contact'],
      flash: ['/gallery', '/services', '/contact'],
      reviews: ['/contact', '/services', '/about'],
      contact: ['/services', '/about', '/aftercare'],
      aftercare: ['/services', '/contact']
    };
  }

  // IndexNow submission for instant indexing
  async submitToIndexNow(urls) {
    if (!Array.isArray(urls)) {
      urls = [urls];
    }

    const payload = {
      host: 'www.suenotattoo.com',
      key: this.indexNowKey,
      keyLocation: `${this.baseUrl}/indexnow.txt`,
      urlList: urls.map(url => url.startsWith('http') ? url : `${this.baseUrl}${url}`)
    };

    try {
      // Submit to multiple search engines
      const endpoints = [
        'https://api.indexnow.org/indexnow',
        'https://www.bing.com/indexnow',
        'https://search.yahoo.com/indexnow'
      ];

      const promises = endpoints.map(endpoint =>
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(payload)
        }).catch(err => console.log(`IndexNow submission failed for ${endpoint}:`, err))
      );

      await Promise.allSettled(promises);
      console.log('IndexNow submissions completed');
    } catch (error) {
      console.error('IndexNow submission error:', error);
    }
  }

  // Force page refresh in Google's cache
  generatePageUpdateSignals() {
    return {
      lastModified: new Date().toISOString(),
      contentHash: Date.now().toString(),
      version: '1.0.0',
      updateFrequency: 'daily'
    };
  }
}

// Export singleton instance
export const indexingBooster = new IndexingBooster();

// Auto-submit current page to IndexNow on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const currentUrl = window.location.pathname;
    indexingBooster.submitToIndexNow([currentUrl]);
  });
}