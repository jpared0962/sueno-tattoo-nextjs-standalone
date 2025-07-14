import React from 'react';

/**
 * Loading placeholder component to prevent CLS (Cumulative Layout Shift)
 * Provides skeleton loading states for glassmorphic components
 */

interface LoadingPlaceholderProps {
  type?: 'card' | 'service' | 'stat' | 'testimonial';
  height?: string;
  width?: string;
  className?: string;
  count?: number;
}

const LoadingPlaceholder: React.FC<LoadingPlaceholderProps> = ({
  type = 'card',
  height = 'auto',
  width = '100%',
  className = '',
  count = 1
}) => {
  const getPlaceholderStyles = (type: string) => {
    const baseStyles = {
      background: 'rgba(28, 37, 38, 0.3)',
      border: '1px solid rgba(212, 161, 23, 0.2)',
      borderRadius: '12px',
      animation: 'pulse 2s infinite',
      minHeight: height === 'auto' ? getDefaultHeight(type) : height,
      width: width,
    };

    return baseStyles;
  };

  const getDefaultHeight = (type: string) => {
    switch (type) {
      case 'service': return '180px';
      case 'stat': return '160px';
      case 'testimonial': return '200px';
      case 'card':
      default: return '200px';
    }
  };

  const renderSinglePlaceholder = (index: number) => (
    <div
      key={index}
      className={`glass-loading-placeholder ${className}`}
      style={getPlaceholderStyles(type)}
      role="status"
      aria-label="Loading content..."
    >
      {/* Skeleton content based on type */}
      {type === 'service' && (
        <div style={{ padding: '1.5rem', textAlign: 'center' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'rgba(212, 161, 23, 0.2)',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '24px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '16px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '4px',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      )}
      
      {type === 'stat' && (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{
            height: '48px',
            background: 'rgba(212, 161, 23, 0.2)',
            borderRadius: '4px',
            marginBottom: '1rem',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '14px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '4px',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      )}
      
      {type === 'testimonial' && (
        <div style={{ padding: '2rem' }}>
          <div style={{
            height: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            width: '80%',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '1rem',
            width: '60%',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '14px',
            background: 'rgba(212, 161, 23, 0.2)',
            borderRadius: '4px',
            width: '40%',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      )}
      
      {type === 'card' && (
        <div style={{ padding: '2rem' }}>
          <div style={{
            height: '60px',
            background: 'rgba(212, 161, 23, 0.2)',
            borderRadius: '50%',
            width: '60px',
            margin: '0 auto 1rem',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '24px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '1rem',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            width: '80%',
            animation: 'pulse 2s infinite'
          }} />
          <div style={{
            height: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            width: '60%',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      )}
      
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (count === 1) {
    return renderSinglePlaceholder(0);
  }

  return (
    <>
      {Array.from({ length: count }, (_, index) => renderSinglePlaceholder(index))}
    </>
  );
};

// Specialized loading components for different sections
export const ServiceLoadingGrid: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    <LoadingPlaceholder type="service" count={count} />
  </div>
);

export const StatsLoadingGrid: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    <LoadingPlaceholder type="stat" count={count} />
  </div>
);

export const TestimonialLoading: React.FC = () => (
  <LoadingPlaceholder type="testimonial" />
);

export default LoadingPlaceholder;
