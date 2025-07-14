/**
 * Performance Detection and Glassmorphism Optimization
 * Dynamically adjusts visual effects based on device capabilities
 */

// Device performance detection
export const detectDevicePerformance = () => {
  if (typeof window === 'undefined') return 'medium';
  
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  const connection = navigator.connection;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const prefersReducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
  
  // Performance scoring
  let score = 0;
  
  // CPU cores
  if (hardwareConcurrency >= 8) score += 3;
  else if (hardwareConcurrency >= 4) score += 2;
  else score += 1;
  
  // RAM
  if (memory >= 8) score += 3;
  else if (memory >= 4) score += 2;
  else score += 1;
  
  // Network conditions
  if (connection) {
    if (connection.effectiveType === '4g') score += 2;
    else if (connection.effectiveType === '3g') score += 1;
    
    if (connection.saveData) score -= 2;
  }
  
  // User preferences override
  if (prefersReducedMotion || prefersReducedData) return 'low';
  
  // Screen size factor
  const isLargeScreen = window.innerWidth >= 1920 && window.innerHeight >= 1080;
  if (isLargeScreen) score += 1;
  
  // Battery status (if available)
  if ('getBattery' in navigator) {
    navigator.getBattery().then((battery) => {
      if (battery.level < 0.2 || battery.chargingTime > 0) {
        // Low battery, reduce effects
        applyPerformanceMode('low');
      }
    });
  }
  
  // Determine performance tier
  if (score >= 8) return 'high';
  if (score >= 5) return 'medium';
  return 'low';
};

// Apply performance-based CSS classes
export const applyPerformanceMode = (mode) => {
  if (typeof document === 'undefined') return;
  
  const body = document.body;
  
  // Remove existing performance classes
  body.classList.remove('perf-low', 'perf-medium', 'perf-high');
  
  // Add appropriate class
  body.classList.add(`perf-${mode}`);
  
  // Store preference
  try {
    localStorage.setItem('performance-mode', mode);
  } catch (e) {
    // Silent fail for storage issues
  }
};

// Initialize performance optimization
export const initPerformanceOptimization = () => {
  if (typeof window === 'undefined') return;
  
  // Check for stored preference first
  let performanceMode = 'medium';
  try {
    performanceMode = localStorage.getItem('performance-mode') || detectDevicePerformance();
  } catch (e) {
    performanceMode = detectDevicePerformance();
  }
  
  applyPerformanceMode(performanceMode);
  
  // Monitor for battery changes
  if ('getBattery' in navigator) {
    navigator.getBattery().then((battery) => {
      battery.addEventListener('levelchange', () => {
        if (battery.level < 0.15) {
          applyPerformanceMode('low');
        }
      });
    });
  }
  
  // Monitor for network changes
  if ('connection' in navigator) {
    const connection = navigator.connection;
    connection.addEventListener('change', () => {
      if (connection.saveData || connection.effectiveType === 'slow-2g') {
        applyPerformanceMode('low');
      }
    });
  }
};

// Frame rate monitor for adaptive performance
export const monitorFrameRate = () => {
  if (typeof window === 'undefined') return;
  
  let lastTime = performance.now();
  let frameCount = 0;
  let averageFPS = 60;
  
  const measureFPS = () => {
    const now = performance.now();
    frameCount++;
    
    if (now - lastTime >= 1000) {
      averageFPS = frameCount;
      frameCount = 0;
      lastTime = now;
      
      // Adjust performance based on FPS
      if (averageFPS < 30) {
        applyPerformanceMode('low');
      } else if (averageFPS < 45) {
        applyPerformanceMode('medium');
      }
    }
    
    requestAnimationFrame(measureFPS);
  };
  
  // Start monitoring after a delay to avoid initial load impact
  setTimeout(measureFPS, 3000);
};

// Core Web Vitals optimization
export const optimizeForCoreWebVitals = () => {
  if (typeof window === 'undefined') return;
  
  // Reduce animations that might affect CLS
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });
  
  // Observe all glassmorphic service cards
  document.querySelectorAll('.glass-service').forEach((el) => {
    observer.observe(el);
  });
};

// Emergency performance mode for low-end devices
export const enableEmergencyMode = () => {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = `
    /* Emergency: Disable all expensive effects */
    * {
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      filter: none !important;
      animation: none !important;
      transition: none !important;
      transform: none !important;
      will-change: auto !important;
    }
    
    .glass-element,
    .glass-card,
    .glass-service {
      background: rgba(28, 37, 38, 0.95) !important;
      border: 1px solid rgba(212, 161, 23, 0.5) !important;
    }
  `;
  
  document.head.appendChild(style);
  document.body.classList.add('emergency-mode');
};

export default {
  detectDevicePerformance,
  applyPerformanceMode,
  initPerformanceOptimization,
  monitorFrameRate,
  optimizeForCoreWebVitals,
  enableEmergencyMode
};
