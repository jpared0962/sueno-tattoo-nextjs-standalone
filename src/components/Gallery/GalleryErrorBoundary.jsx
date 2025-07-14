import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GALLERY_ERROR_STATES, GALLERY_MESSAGES } from '@/constants/galleryConfig';

const GalleryError = ({ error, resetErrorBoundary }) => {
  return (
    <div className="gallery-no-results">
      <div className="gallery-no-results-icon" aria-hidden="true">⚠️</div>
      <h3 className="gallery-no-results-title">
        Gallery Error
      </h3>
      <p className="gallery-no-results-subtitle">
        {GALLERY_ERROR_STATES.GENERIC_ERROR}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={resetErrorBoundary}
          className="gallery-no-results-button"
        >
          Try Again
        </button>
        <a
          href="tel:2407583226"
          className="gallery-no-results-button"
          style={{ textDecoration: 'none' }}
        >
          {GALLERY_MESSAGES.bookConsultation}
        </a>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <details style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '600px' }}>
          <summary style={{ color: 'var(--gold)', cursor: 'pointer' }}>
            Error Details (Development Only)
          </summary>
          <pre style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '1rem', 
            borderRadius: '8px',
            fontSize: '0.75rem',
            overflow: 'auto',
            marginTop: '1rem',
            color: 'var(--text-secondary)'
          }}>
            {error.message}
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  );
};

const GalleryErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={GalleryError}
      onError={(error, errorInfo) => {
        console.error('Gallery Error:', error, errorInfo);
        // Future: Add error tracking
        // analytics.track('Gallery Error', {
        //   error: error.message,
        //   stack: error.stack,
        //   componentStack: errorInfo.componentStack
        // });
      }}
      onReset={() => {
        // Future: Add recovery tracking
        // analytics.track('Gallery Error Recovery');
        console.log('Gallery error boundary reset');
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default GalleryErrorBoundary;