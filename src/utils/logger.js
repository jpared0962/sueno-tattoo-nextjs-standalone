// Enhanced logging utility for production and development
class Logger {
  constructor() {
    this.isDevelopment = import.meta.env.MODE === 'development';
    this.isProduction = import.meta.env.MODE === 'production';
    this.errorBuffer = [];
    this.maxBufferSize = 100;
    this.sessionId = this.generateSessionId();
    this.logLevel = this.isProduction ? 'warn' : 'debug';
  }

  generateSessionId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  shouldLog(level) {
    const levels = { error: 4, warn: 3, info: 2, debug: 1 };
    return levels[level] >= levels[this.logLevel];
  }

  // Format timestamp
  getTimestamp() {
    return new Date().toISOString();
  }

  // Create log entry object
  createLogEntry(level, message, extra = {}) {
    return {
      timestamp: this.getTimestamp(),
      level,
      message,
      ...extra,
      userAgent: navigator?.userAgent,
      url: window?.location?.href,
    };
  }

  // Send logs to external service in production
  async sendToService(logEntry) {
    if (!this.isProduction) return;
    
    try {
      // Use secure API client for logging
      const { default: apiClient } = await import('./secureApiClient');
      await apiClient.post('/api/logs', logEntry, { 
        requireAuth: false,
        timeout: 5000 
      });
    } catch (error) {
      // Fallback: store in localStorage for later retrieval
      this.storeLocalLog(logEntry);
    }
  }

  // Store log in localStorage as fallback
  storeLocalLog(logEntry) {
    try {
      const logs = JSON.parse(localStorage.getItem('app_logs') || '[]');
      logs.push(logEntry);
      
      // Keep only last 100 logs to prevent storage overflow
      if (logs.length > 100) {
        logs.splice(0, logs.length - 100);
      }
      
      localStorage.setItem('app_logs', JSON.stringify(logs));
    } catch (error) {
      console.warn('Failed to store log locally:', error);
    }
  }

  // Get stored logs
  getStoredLogs() {
    try {
      return JSON.parse(localStorage.getItem('app_logs') || '[]');
    } catch {
      return [];
    }
  }

  // Clear stored logs
  clearStoredLogs() {
    localStorage.removeItem('app_logs');
  }

  // Log methods
  debug(message, extra = {}) {
    if (!this.shouldLog('debug')) return;

    const logEntry = this.createLogEntry('DEBUG', message, extra);
    
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, extra);
    }
    
    this.sendToService(logEntry);
  }

  info(message, extra = {}) {
    if (!this.shouldLog('info')) return;

    const logEntry = this.createLogEntry('INFO', message, extra);
    
    if (this.isDevelopment) {
      console.log(`[INFO] ${message}`, extra);
    }
    
    this.sendToService(logEntry);
  }

  warn(message, extra = {}) {
    if (!this.shouldLog('warn')) return;

    const logEntry = this.createLogEntry('WARN', message, extra);
    
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, extra);
    }
    
    this.sendToService(logEntry);
  }

  error(message, error = null, extra = {}) {
    const logEntry = this.createLogEntry('ERROR', message, {
      ...extra,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } : null,
    });
    
    if (this.isDevelopment) {
      console.error(`[ERROR] ${message}`, error, extra);
    }
    
    this.sendToService(logEntry);
  }

  // Performance tracking
  performance(name, duration, extra = {}) {
    const logEntry = this.createLogEntry('PERFORMANCE', `${name} took ${duration}ms`, {
      ...extra,
      duration,
      performanceMetric: name,
    });
    
    if (this.isDevelopment) {
      console.log(`[PERF] ${name}: ${duration}ms`, extra);
    }
    
    this.sendToService(logEntry);
  }

  // User action tracking
  userAction(action, extra = {}) {
    const logEntry = this.createLogEntry('USER_ACTION', action, extra);
    
    if (this.isDevelopment) {
      console.log(`[USER] ${action}`, extra);
    }
    
    this.sendToService(logEntry);
  }

  // Route change tracking
  routeChange(from, to, extra = {}) {
    const logEntry = this.createLogEntry('ROUTE_CHANGE', `Navigation from ${from} to ${to}`, {
      ...extra,
      from,
      to,
    });
    
    if (this.isDevelopment) {
      console.log(`[ROUTE] ${from} → ${to}`, extra);
    }
    
    this.sendToService(logEntry);
  }

  // API call tracking
  apiCall(endpoint, method, status, duration, extra = {}) {
    const level = status >= 400 ? 'ERROR' : 'INFO';
    const message = `${method} ${endpoint} - ${status} (${duration}ms)`;
    
    const logEntry = this.createLogEntry(level, message, {
      ...extra,
      endpoint,
      method,
      status,
      duration,
      type: 'API_CALL',
    });
    
    if (this.isDevelopment) {
      const logFn = status >= 400 ? console.error : console.log;
      logFn(`[API] ${message}`, extra);
    }
    
    this.sendToService(logEntry);
  }
}

// Create singleton instance
const logger = new Logger();

// Global error handler
window.addEventListener('error', (event) => {
  logger.error('Global JavaScript Error', event.error, {
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
  });
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  logger.error('Unhandled Promise Rejection', event.reason, {
    type: 'unhandledrejection',
  });
});

export default logger;