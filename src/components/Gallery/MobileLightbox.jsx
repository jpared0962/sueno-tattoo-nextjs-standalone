import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { getPortfolioFullSize } from '@/services/portfolioService';


const MobileLightbox = ({ 
  isOpen, 
  onClose, 
  image, 
  images = [], 
  currentIndex = 0, 
  onNavigate 
}) => {
  const [loading, setLoading] = useState(true);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate?.('prev');
      if (e.key === 'ArrowRight') onNavigate?.('next');
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNavigate]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  // Handle both single image and image array
  const currentImage = image || (images && images.length > 0 ? images[currentIndex] : null);
  if (!currentImage) return null;

  return createPortal(
    <div className="lightbox-overlay" onClick={handleOverlayClick}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="lightbox-close" onClick={onClose}>
          ×
        </button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button 
              className="lightbox-nav lightbox-nav-prev" 
              onClick={() => onNavigate?.('prev')}
              disabled={currentIndex === 0}
            >
              ‹
            </button>
            <button 
              className="lightbox-nav lightbox-nav-next" 
              onClick={() => onNavigate?.('next')}
              disabled={currentIndex === images.length - 1}
            >
              ›
            </button>
          </>
        )}

        {/* Image */}
        <div className="lightbox-image-container">
          <img
            src={getPortfolioFullSize(currentImage.src)}
            alt={currentImage.alt || currentImage.title || 'Tattoo artwork'}
            className="lightbox-image"
            onLoad={(e) => {
              setLoading(false);
              console.log('Lightbox image loaded:', {
                src: e.target.src,
                naturalWidth: e.target.naturalWidth,
                naturalHeight: e.target.naturalHeight,
                displayWidth: e.target.width,
                displayHeight: e.target.height
              });
            }}
            onError={(e) => {
              console.warn(`Failed to load lightbox image: ${currentImage.src}`);
              setLoading(false);
              e.target.classList.add('hidden');
              e.target.nextSibling?.classList?.add('show');
            }}
            loading="eager"
          />
          
          {loading && (
            <div className="lightbox-loading">Loading high-quality image...</div>
          )}
          
          <div className="lightbox-image-fallback">
            <div className="lightbox-fallback-icon">🎨</div>
            <div className="lightbox-fallback-title">{currentImage.title || 'Tattoo Artwork'}</div>
            <div className="lightbox-fallback-subtitle">
              High-quality image not available
            </div>
          </div>
        </div>

        {/* Image Info */}
        {(currentImage.title || currentImage.description) && (
          <div className="lightbox-info">
            {currentImage.title && (
              <h3 className="lightbox-title">{currentImage.title}</h3>
            )}
            {currentImage.description && (
              <p className="lightbox-description">{currentImage.description}</p>
            )}
            {currentImage.tags && currentImage.tags.length > 0 && (
              <div className="lightbox-tags">
                {currentImage.tags.map((tag, index) => (
                  <span key={index} className="lightbox-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

    </div>,
    document.body
  );
};

export default MobileLightbox;