/**
 * @fileoverview Real User Monitoring (RUM) with Web Vitals
 * Tracks Core Web Vitals and custom performance metrics
 * Note: Web Vitals disabled in production due to stability issues
 */

// Temporarily disabled web-vitals import due to production issues
// import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.isProduction = process.env.NODE_ENV === 'production';
    this.apiEndpoint = '/api/metrics';
    this.batchSize = 10;
    this.batchTimeout = 30000; // 30 seconds
    this.batch = [];
    this.batchTimer = null;
    
    this.init();
  }

  /**
   * Initialize performance monitoring
   */
  init() {
    if (typeof window === 'undefined') return;

    // Track Core Web Vitals
    this.trackWebVitals();
    
    // Track custom metrics
    this.trackCustomMetrics();
    
    // Track user interactions
    this.trackUserInteractions();
    
    // Send batch on page unload
    window.addEventListener('beforeunload', () => {
      this.sendBatch(true);
    });

    // Send batch on visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.sendBatch(true);
      }
    });

    console.log('🔍 Performance monitoring initialized');
  }

  /**
   * Track Core Web Vitals metrics
   * Temporarily disabled due to production stability issues
   */
  trackWebVitals() {
    // Web Vitals tracking disabled in production
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals tracking disabled in production');
      return;
    }
    
    // Development-only web vitals tracking would go here
    // Currently commented out to prevent production issues
    
    /*
    // Cumulative Layout Shift
    onCLS((metric) => {
      this.recordMetric('CLS', metric.value, {
        rating: metric.rating,
        entries: metric.entries.length
      });
    });

    // First Input Delay
    onFID((metric) => {
      this.recordMetric('FID', metric.value, {
        rating: metric.rating,
        target: metric.entries[0]?.target?.tagName
      });
    });

    // First Contentful Paint
    onFCP((metric) => {
      this.recordMetric('FCP', metric.value, {
        rating: metric.rating
      });
    });

    // Largest Contentful Paint
    onLCP((metric) => {
      this.recordMetric('LCP', metric.value, {
        rating: metric.rating,
        element: metric.entries[0]?.element?.tagName
      });
    });

    // Time to First Byte
    onTTFB((metric) => {
      this.recordMetric('TTFB', metric.value, {
        rating: metric.rating
      });
    });
    */
  }

  /**
   * Track custom application metrics
   */
  trackCustomMetrics() {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.recordMetric('PageLoad', loadTime);
    });

    // Track route changes (for SPA)
    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        this.recordMetric('RouteChange', performance.now(), {
          from: lastUrl,
          to: url
        });
      }
    }).observe(document, { subtree: true, childList: true });

    // Track resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.recordMetric('ResourceError', 1, {
          resource: event.target.src || event.target.href,
          type: event.target.tagName
        });
      }
    });

    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      if (event.target === window) {
        this.recordMetric('JSError', 1, {
          message: event.message,
          filename: event.filename,
          line: event.lineno,
          column: event.colno
        });
      }
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.recordMetric('UnhandledRejection', 1, {
        reason: event.reason?.toString()
      });
    });
  }

  /**
   * Track user interaction metrics
   */
  trackUserInteractions() {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target.closest('[data-track]') || event.target;
      this.recordMetric('UserClick', 1, {
        element: target.tagName,
        id: target.id,
        className: target.className,
        dataTrack: target.dataset?.track
      });
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      this.recordMetric('FormSubmit', 1, {
        formId: event.target.id,
        action: event.target.action
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          this.recordMetric('ScrollDepth', maxScrollDepth);
        }
      }
    });
  }

  /**
   * Record a performance metric
   * @param {string} name - Metric name
   * @param {number} value - Metric value
   * @param {Object} metadata - Additional metadata
   */
  recordMetric(name, value, metadata = {}) {
    const metric = {
      name,
      value,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connection: this.getConnectionInfo(),
      ...metadata
    };

    this.metrics.set(`${name}_${metric.timestamp}`, metric);
    this.addToBatch(metric);

    // Log in development
    if (!this.isProduction) {
      console.log(`📊 Metric recorded: ${name} = ${value}`, metadata);
    }
  }

  /**
   * Track AI service response time
   */
  async trackAIService(serviceType, operationPromise) {
    const startTime = performance.now();
    
    try {
      const result = await operationPromise;
      const duration = performance.now() - startTime;
      
      this.recordMetric('AIService', duration, {
        serviceType,
        success: true,
        type: 'ai-response-time'
      });

      // Track slow AI responses
      if (duration > 2000) {
        this.recordMetric('SlowAIService', duration, {
          serviceType,
          threshold: 2000
        });
      }

      return { result, duration };
    } catch (error) {
      const duration = performance.now() - startTime;
      
      this.recordMetric('AIServiceError', duration, {
        serviceType,
        error: error.message,
        success: false
      });

      throw error;
    }
  }

  /**
   * Track component render timing
   */
  trackComponentRender(componentName, renderFunction) {
    const startTime = performance.now();
    
    try {
      const result = renderFunction();
      const duration = performance.now() - startTime;
      
      this.recordMetric('ComponentRender', duration, {
        component: componentName,
        type: 'render-time'
      });

      // Track slow renders
      if (duration > 100) {
        this.recordMetric('SlowRender', duration, {
          component: componentName,
          threshold: 100
        });
      }

      return result;
    } catch (error) {
      const duration = performance.now() - startTime;
      
      this.recordMetric('RenderError', duration, {
        component: componentName,
        error: error.message
      });

      throw error;
    }
  }

  /**
   * Get connection information
   */
  getConnectionInfo() {
    if ('connection' in navigator) {
      const conn = navigator.connection;
      return {
        effectiveType: conn.effectiveType,
        downlink: conn.downlink,
        rtt: conn.rtt,
        saveData: conn.saveData
      };
    }
    return null;
  }

  /**
   * Add metric to batch for sending
   * @param {Object} metric - Metric to add
   */
  addToBatch(metric) {
    this.batch.push(metric);

    if (this.batch.length >= this.batchSize) {
      this.sendBatch();
    } else if (!this.batchTimer) {
      this.batchTimer = setTimeout(() => {
        this.sendBatch();
      }, this.batchTimeout);
    }
  }

  /**
   * Send batch of metrics to server
   * @param {boolean} immediate - Send immediately (for page unload)
   */
  async sendBatch(immediate = false) {
    if (this.batch.length === 0) return;

    const batch = [...this.batch];
    this.batch = [];
    
    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
      this.batchTimer = null;
    }

    try {
      const payload = {
        metrics: batch,
        session: {
          id: this.getSessionId(),
          timestamp: Date.now(),
          page: window.location.pathname
        }
      };

      if (immediate && 'sendBeacon' in navigator) {
        // Use sendBeacon for immediate sending (more reliable on page unload)
        navigator.sendBeacon(
          this.apiEndpoint,
          JSON.stringify(payload)
        );
      } else {
        await fetch(this.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      }

      if (!this.isProduction) {
        console.log(`📊 Sent ${batch.length} metrics to server`);
      }
    } catch (error) {
      console.warn('Failed to send metrics:', error);
      
      // Re-add to batch for retry
      this.batch.unshift(...batch);
    }
  }

  /**
   * Get or create session ID
   */
  getSessionId() {
    let sessionId = sessionStorage.getItem('perf_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('perf_session_id', sessionId);
    }
    return sessionId;
  }

  /**
   * Get current metrics
   */
  getMetrics() {
    return Array.from(this.metrics.values());
  }

  /**
   * Get metrics summary
   */
  getMetricsSummary() {
    const metrics = this.getMetrics();
    const summary = {};

    metrics.forEach(metric => {
      if (!summary[metric.name]) {
        summary[metric.name] = {
          count: 0,
          total: 0,
          min: Infinity,
          max: -Infinity,
          avg: 0
        };
      }

      const stat = summary[metric.name];
      stat.count++;
      stat.total += metric.value;
      stat.min = Math.min(stat.min, metric.value);
      stat.max = Math.max(stat.max, metric.value);
      stat.avg = stat.total / stat.count;
    });

    return summary;
  }

  /**
   * Export metrics for analysis
   */
  exportMetrics() {
    const data = {
      metrics: this.getMetrics(),
      summary: this.getMetricsSummary(),
      session: {
        id: this.getSessionId(),
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
        url: window.location.href
      }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `performance-metrics-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// Initialize performance monitoring
const performanceMonitor = new PerformanceMonitor();

// Export for manual usage
window.performanceMonitor = performanceMonitor;

export default performanceMonitor;
