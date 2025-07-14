import React from 'react';

// EMERGENCY: Disable all animations to prevent crashes
export const MOTION_CONFIG = {
  // Disable all animations globally
  transition: { duration: 0 },
  initial: false,
  animate: false,
  exit: false,
  // Override any motion props
  whileHover: undefined,
  whileTap: undefined,
  whileInView: undefined,
  whileFocus: undefined,
};

// List of props that should be filtered out (framer-motion specific)
const motionPropsToFilter = new Set([
  'initial', 'animate', 'exit', 'transition', 'variants',
  'whileHover', 'whileTap', 'whileInView', 'whileFocus', 'whileDrag',
  'drag', 'dragConstraints', 'dragElastic', 'dragMomentum',
  'onAnimationStart', 'onAnimationComplete', 'onUpdate',
  'onHoverStart', 'onHoverEnd', 'onTapStart', 'onTap', 'onTapCancel',
  'viewport', 'onViewportEnter', 'onViewportLeave',
  'layout', 'layoutId', 'layoutDependency',
  'transformTemplate', 'custom'
]);

// Safe motion component that disables all animations and filters motion props
export const SafeMotion = React.forwardRef(({ children, ...props }, ref) => {
  // Filter out motion-specific props to prevent DOM warnings
  const domProps = {};
  
  Object.keys(props).forEach(key => {
    if (!motionPropsToFilter.has(key)) {
      domProps[key] = props[key];
    }
  });
  
  // Return plain div without any motion props
  return <div ref={ref} {...domProps}>{children}</div>;
});

SafeMotion.displayName = 'SafeMotion';

// Replace framer-motion components with safe versions
export const motion = {
  div: SafeMotion,
  section: SafeMotion,
  article: SafeMotion,
  header: SafeMotion,
  footer: SafeMotion,
  nav: SafeMotion,
  main: SafeMotion,
  aside: SafeMotion,
  h1: SafeMotion,
  h2: SafeMotion,
  h3: SafeMotion,
  h4: SafeMotion,
  h5: SafeMotion,
  h6: SafeMotion,
  p: SafeMotion,
  span: SafeMotion,
  button: SafeMotion,
  img: SafeMotion,
};

export const AnimatePresence = ({ children }) => children;