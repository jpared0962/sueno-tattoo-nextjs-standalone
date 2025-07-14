import React, { useState, useEffect } from 'react';
import { GALLERY_MESSAGES } from '@/constants/galleryConfig';

const GalleryCardSkeleton = ({ index = 0, isLoaded = false, showProgress = false }) => (
  <div 
    className={`gallery-card skeleton-card ${isLoaded ? 'loaded' : ''} ${showProgress ? 'skeleton-progressive' : ''}`}
    style={showProgress ? { '--skeleton-index': index } : undefined}
    aria-hidden="true"
    role="presentation"
  >
    <div className="gallery-card-image-container">
      <div className="skeleton-shimmer" />
    </div>
    <div className="gallery-card-content">
      <div className="skeleton-text skeleton-text-title" />
      <div className="skeleton-text skeleton-text-line" />
      <div className="skeleton-text skeleton-text-line short" />
      <div className="gallery-card-tags">
        <div className="skeleton-tag medium" />
        <div className="skeleton-tag small" />
      </div>
    </div>
  </div>
);

const GalleryGridSkeleton = ({ 
  count = 6, 
  isMobile = false, 
  showProgress = false,
  progressMessage = null
}) => {
  const [loadedCount, setLoadedCount] = useState(0);
  
  // Responsive skeleton count
  const displayCount = isMobile ? Math.min(count, 3) : count;
  
  // Progressive loading simulation
  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setLoadedCount(prev => {
          const newCount = prev + 1;
          if (newCount >= displayCount) {
            clearInterval(interval);
          }
          return Math.min(newCount, displayCount);
        });
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [displayCount, showProgress]);

  // Screen reader announcement for progress
  const getProgressMessage = () => {
    if (progressMessage) return progressMessage;
    if (showProgress && loadedCount > 0) {
      return `Loaded ${loadedCount} of ${displayCount} gallery items`;
    }
    return `Loading ${displayCount} gallery items...`;
  };

  return (
    <section 
      className="sueno-services-section"
      aria-busy="true"
      aria-label="Loading gallery images"
      role="status"
      aria-live="polite"
    >
      {/* Screen reader announcement */}
      <span className="sr-only">
        {getProgressMessage()}
      </span>
      
      {/* Progress indicator for screen readers */}
      {showProgress && (
        <div 
          className="sr-only" 
          aria-live="polite" 
          aria-atomic="true"
          key={loadedCount} // Forces re-announcement
        >
          {loadedCount < displayCount 
            ? `Loading progress: ${Math.round((loadedCount / displayCount) * 100)}%`
            : 'Gallery loading complete'
          }
        </div>
      )}
      
      <div className={`gallery-grid ${isMobile ? 'mobile' : 'desktop'}`}>
        {Array.from({ length: displayCount }, (_, index) => (
          <GalleryCardSkeleton 
            key={`skeleton-${index}`}
            index={index}
            isLoaded={showProgress && index < loadedCount}
            showProgress={showProgress}
          />
        ))}
      </div>
      
      {/* Optional loading message */}
      {showProgress && loadedCount < displayCount && (
        <div className="gallery-load-more">
          <div className="gallery-load-more-loading">
            <div className="gallery-load-more-spinner" aria-hidden="true" />
            <span>
              {progressMessage || `Loading gallery... ${loadedCount}/${displayCount}`}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

// Enhanced skeleton with network retry simulation
export const GalleryGridSkeletonWithRetry = ({ 
  count = 6, 
  isMobile = false,
  onRetry,
  retryAttempts = 0,
  maxRetries = 3
}) => {
  const [showRetry, setShowRetry] = useState(false);
  
  useEffect(() => {
    // Simulate network delay/failure
    const timer = setTimeout(() => {
      setShowRetry(true);
    }, 5000); // Show retry option after 5 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  if (showRetry && retryAttempts < maxRetries) {
    return (
      <section className="sueno-services-section">
        <div className="gallery-no-results">
          <div className="gallery-no-results-icon" aria-hidden="true">⏳</div>
          <h3 className="gallery-no-results-title">
            Taking longer than expected
          </h3>
          <p className="gallery-no-results-subtitle">
            The gallery is taking a while to load. This might be due to a slow connection.
          </p>
          <div className="sueno-retry-buttons">
            <button
              onClick={() => {
                setShowRetry(false);
                onRetry?.();
              }}
              className="gallery-no-results-button"
              aria-label={`Retry loading gallery (attempt ${retryAttempts + 1} of ${maxRetries})`}
            >
              Try Again {retryAttempts > 0 && `(${retryAttempts + 1}/${maxRetries})`}
            </button>
            <button
              onClick={() => setShowRetry(false)}
              className="gallery-reset-button"
            >
              Keep Waiting
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <GalleryGridSkeleton 
      count={count} 
      isMobile={isMobile} 
      showProgress={true}
      progressMessage={retryAttempts > 0 ? `Retrying... (${retryAttempts}/${maxRetries})` : null}
    />
  );
};

export default GalleryGridSkeleton;