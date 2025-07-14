import React, { forwardRef } from 'react';
import { GALLERY_MESSAGES, ARIA_LABELS } from '@/constants/galleryConfig';

const LoadMoreIndicator = forwardRef(({ 
  isLoading, 
  visibleCount, 
  totalCount, 
  isSafari 
}, ref) => {
  return (
    <div 
      ref={ref}
      className="gallery-load-more"
      role="status"
      aria-live="polite"
      aria-label={isLoading ? ARIA_LABELS.loadMore : ARIA_LABELS.showCount(visibleCount, totalCount)}
    >
      {isLoading ? (
        <div className="gallery-load-more-loading">
          <div 
            className="gallery-load-more-spinner"
            aria-hidden="true"
          />
          <span>{GALLERY_MESSAGES.loadingMore}</span>
        </div>
      ) : (
        <div>
          <div className="gallery-load-more-icon" aria-hidden="true">🎨</div>
          <p>{GALLERY_MESSAGES.scrollPrompt}</p>
          <p className="gallery-load-more-count">
            {isSafari ? `${GALLERY_MESSAGES.safariOptimized} • ` : ''}
            ({visibleCount} of {totalCount} shown)
          </p>
        </div>
      )}
    </div>
  );
});

LoadMoreIndicator.displayName = 'LoadMoreIndicator';

export default LoadMoreIndicator;