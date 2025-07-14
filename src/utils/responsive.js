// Centralized responsive configuration
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1280
};

export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.tablet + 1}px)`,
  large: `(min-width: ${BREAKPOINTS.large}px)`
};

// Responsive utility functions
export const getDeviceType = (width) => {
  if (width <= BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  if (width <= BREAKPOINTS.desktop) return 'desktop';
  return 'large';
};

export const isDevice = (width, device) => {
  switch (device) {
    case 'mobile':
      return width <= BREAKPOINTS.mobile;
    case 'tablet':
      return width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet;
    case 'desktop':
      return width > BREAKPOINTS.tablet;
    case 'large':
      return width >= BREAKPOINTS.large;
    default:
      return false;
  }
};

// Mobile-first responsive values
export const responsive = (values) => {
  if (typeof values === 'object' && values !== null) {
    return {
      mobile: values.mobile || values.default,
      tablet: values.tablet || values.mobile || values.default,
      desktop: values.desktop || values.tablet || values.mobile || values.default,
      large: values.large || values.desktop || values.tablet || values.mobile || values.default
    };
  }
  return values;
};