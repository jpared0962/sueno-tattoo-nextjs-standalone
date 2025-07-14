/**
 * Enhanced Framer Motion Style Smooth Scrolling
 * Provides buttery smooth scrolling with intelligent momentum and interruption handling
 */

// Global scroll state management
let activeScrollAnimation = null;
let lastScrollTime = 0;
let scrollVelocity = 0;
let lastScrollDirection = 0;
let scrollMomentum = 0;
let isAnimating = false;
let userScrolling = false;
let scrollTimeout = null;

/**
 * Enhanced smooth scroll with momentum detection and interruption handling
 * @param {string|number} target - Element selector or Y position
 * @param {object} options - Scrolling options
 */
export const smoothScrollTo = (target, options = {}) => {
  const {
    duration = 400, // Faster for responsiveness
    offset = 0,
    easing = 'easeOut',
    interruptible = true
  } = options;

  // Don't interrupt user scrolling
  if (userScrolling && interruptible) {
    return;
  }

  // Cancel any existing animation for instant responsiveness
  if (activeScrollAnimation && interruptible) {
    cancelAnimationFrame(activeScrollAnimation);
    activeScrollAnimation = null;
    isAnimating = false;
  }

  let targetY;

  if (typeof target === 'string') {
    const element = document.querySelector(target);
    if (!element) return;
    targetY = element.offsetTop + offset;
  } else {
    targetY = target + offset;
  }

  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const direction = distance > 0 ? 1 : -1;
  
  // Skip animation for tiny distances - reduced threshold
  if (Math.abs(distance) < 5) {
    window.scroll(0, targetY);
    return;
  }

  // Smoother momentum handling with reduced impact
  if (lastScrollDirection !== 0 && lastScrollDirection !== direction) {
    scrollMomentum = Math.abs(scrollVelocity) * 0.1; // Reduced momentum impact
  }
  
  lastScrollDirection = direction;
  isAnimating = true;
  let startTime = null;

  // Enhanced Framer Motion easing functions with anticipation
  const easingFunctions = {
    // Framer Motion's signature anticipate easing
    anticipate: t => {
      const c1 = 2.70158;
      const c3 = c1 + 1;
      return c3 * t * t * t - c1 * t * t;
    },
    // Smooth ease with slight overshoot prevention
    easeInOut: t => {
      return t < 0.5 
        ? 2 * t * t 
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
    },
    // Fast start, smooth end
    easeOut: t => 1 - Math.pow(1 - t, 3),
    // Slow start, fast end  
    easeIn: t => t * t * t,
    // Constant speed
    linear: t => t,
    // Bouncy end (subtle)
    backOut: t => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }
  };

  const easingFunction = easingFunctions[easing] || easingFunctions.anticipate;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Check if user started scrolling during animation
    if (userScrolling) {
      activeScrollAnimation = null;
      isAnimating = false;
      return;
    }
    
    let easedProgress = easingFunction(progress);
    
    // Minimal momentum compensation to reduce jumpiness
    if (scrollMomentum > 0 && progress < 0.2) {
      const momentumFactor = (1 - progress / 0.2) * scrollMomentum;
      easedProgress = Math.max(0, easedProgress - momentumFactor);
    }
    
    const currentY = startY + (distance * easedProgress);
    
    // Simplified velocity tracking
    const now = performance.now();
    if (lastScrollTime > 0) {
      const timeDelta = now - lastScrollTime;
      if (timeDelta > 0) {
        const positionDelta = currentY - window.pageYOffset;
        scrollVelocity = positionDelta / timeDelta;
      }
    }
    lastScrollTime = now;
    
    // Use scrollTo with proper coordinates
    window.scrollTo(0, Math.round(currentY));
    
    if (progress < 1) {
      activeScrollAnimation = requestAnimationFrame(animation);
    } else {
      activeScrollAnimation = null;
      isAnimating = false;
      scrollMomentum = 0;
      scrollVelocity = 0;
    }
  }

  activeScrollAnimation = requestAnimationFrame(animation);
};

/**
 * Smooth scroll to top of page
 */
export const smoothScrollToTop = (options = {}) => {
  smoothScrollTo(0, { duration: 400, easing: 'easeOut', ...options });
};

/**
 * Enhanced scroll initialization with user interaction detection
 */
export const initSmoothScrolling = () => {
  // Detect user scroll to interrupt animations
  const handleUserScroll = () => {
    userScrolling = true;
    
    // Cancel any active smooth scroll animation immediately
    if (activeScrollAnimation) {
      cancelAnimationFrame(activeScrollAnimation);
      activeScrollAnimation = null;
      isAnimating = false;
    }
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      userScrolling = false;
    }, 100); // Faster reset for responsiveness
  };

  // Listen for wheel, touch, and keyboard scroll events with optimized handling
  window.addEventListener('wheel', handleUserScroll, { passive: true });
  window.addEventListener('touchmove', handleUserScroll, { passive: true });
  window.addEventListener('touchstart', handleUserScroll, { passive: true });
  window.addEventListener('keydown', (e) => {
    // Arrow keys, page up/down, space, home, end
    if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
      handleUserScroll();
    }
  });

  // Handle anchor links with enhanced responsiveness
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    
    e.preventDefault();
    const href = link.getAttribute('href');
    
    if (href === '#') {
      smoothScrollToTop({ duration: 400, easing: 'easeOut' });
    } else {
      smoothScrollTo(href, { 
        duration: 400, 
        offset: -80, 
        easing: 'easeOut',
        interruptible: true 
      });
    }
  });

  // Enhanced programmatic scrollTo with interruption handling
  const originalScrollTo = window.scrollTo;
  const originalScroll = window.scroll;
  
  window.scrollTo = function(x, y) {
    // Don't intercept if user is actively scrolling
    if (userScrolling) {
      originalScrollTo.apply(window, arguments);
      return;
    }

    if (typeof x === 'object') {
      const options = x;
      if (options.behavior === 'smooth') {
        smoothScrollTo(options.top || 0, { 
          duration: 400, 
          easing: 'easeOut',
          interruptible: true 
        });
        return;
      }
    } else if (arguments.length === 2) {
      const currentY = window.pageYOffset;
      const distance = Math.abs(y - currentY);
      
      if (distance > 10) { // Reduced threshold for smoother experience
        smoothScrollTo(y, { 
          duration: Math.min(Math.max(distance * 0.3, 250), 600), // Faster dynamic duration
          easing: 'easeOut',
          interruptible: true 
        });
        return;
      }
    }
    
    originalScrollTo.apply(window, arguments);
  };

  // Also override window.scroll for completeness
  window.scroll = function(x, y) {
    window.scrollTo(x, y);
  };
};

/**
 * Auto-initialize smooth scrolling when DOM is ready
 */
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScrolling);
  } else {
    initSmoothScrolling();
  }
}