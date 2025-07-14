import React from 'react';

/**
 * Optimized loading component for lazy-loaded routes
 * Prevents layout shifts and provides immediate visual feedback
 */
const LazyLoader = ({ 
  type = 'page',
  height = 'auto',
  className = '',
  showText = true 
}) => {
  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: 'var(--crisp-white, #FFFFFF)',
    minHeight: height === 'auto' ? '200px' : height,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const spinnerStyles = {
    width: '40px',
    height: '40px',
    border: '3px solid rgba(212, 160, 23, 0.2)',
    borderTop: '3px solid var(--gold, #D4A017)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  const pulseStyles = {
    animation: 'pulse 1.5s ease-in-out infinite'
  };

  return (
    <>
      {/* Critical CSS for loading animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
      
      <div className={`lazy-loader ${className}`} style={baseStyles}>
        {type === 'spinner' ? (
          <div style={spinnerStyles} />
        ) : (
          <div style={pulseStyles}>
            <span style={{ fontSize: '2rem' }}>⚡</span>
          </div>
        )}
        
        {showText && (
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.8)',
            opacity: 0.8
          }}>
            Loading Sueno Tattoo...
          </p>
        )}
      </div>
    </>
  );
};

// Optimized page-specific loaders that prevent layout shift
export const PageLoader = () => (
  <LazyLoader 
    type="page" 
    height="100vh" 
    className="page-loader"
  />
);

export const ComponentLoader = ({ height = '200px' }) => (
  <LazyLoader 
    type="spinner" 
    height={height}
    className="component-loader"
    showText={false}
  />
);

export default LazyLoader;