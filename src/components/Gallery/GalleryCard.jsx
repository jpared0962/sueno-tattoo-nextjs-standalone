import React, { useState, useCallback } from 'react';
import { getPortfolioThumbnail } from '@/services/portfolioService';
import { ARIA_LABELS, generateAltText } from '@/constants/galleryConfig';

const GalleryCard = ({ 
  tattoo, 
  onClick, 
  index, 
  isSafari, 
  getImageSize,
  loadedImages,
  onImageLoad,
  onImageError,
  isImageLoaded
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback((e) => {
    setImageError(true);
    e.target.style.display = 'none';
    
    // Enhanced error logging
    console.error(`❌ Image failed to load in GalleryCard:`, {
      imagePath: tattoo.image,
      attemptedUrl: e.target.src,
      tattooTitle: tattoo.title,
      index,
      errorType: e.type,
      naturalWidth: e.target.naturalWidth,
      naturalHeight: e.target.naturalHeight
    });
    
    onImageError?.(tattoo.image, { 
      index, 
      tattoo: tattoo.title, 
      url: e.target.src,
      error: e.type 
    });
  }, [tattoo.image, tattoo.title, index, onImageError]);

  const handleImageLoad = useCallback((e) => {
    e.target.style.opacity = '1';
    
    // Enhanced success logging with size info
    console.log(`✅ Image loaded successfully:`, {
      imagePath: tattoo.image,
      loadedUrl: e.target.src,
      tattooTitle: tattoo.title,
      naturalWidth: e.target.naturalWidth,
      naturalHeight: e.target.naturalHeight,
      fileSize: 'Unknown - checking response headers...'
    });
    
    onImageLoad?.(tattoo.image);
  }, [tattoo.image, tattoo.title, onImageLoad]);

  const handleCardClick = useCallback(() => {
    onClick({ src: tattoo.image });
  }, [onClick, tattoo.image]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  }, [handleCardClick]);

  const tags = [tattoo.style, tattoo.size, tattoo.duration].filter(Boolean);
  const isLoaded = isImageLoaded?.(tattoo.image) || false;
  const shouldLoadEager = tattoo.featured || index < 12;

  return (
    <article
      className="gallery-card"
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={ARIA_LABELS.galleryCard(tattoo.title)}
    >
      <div className="gallery-card-image-container">
        {!imageError ? (
          <img
            src={getPortfolioThumbnail(tattoo.image, getImageSize())}
            alt={generateAltText(tattoo)}
            loading={shouldLoadEager ? "eager" : "lazy"}
            decoding="async"
            className={`gallery-card-image ${isLoaded ? 'loaded' : 'loading'}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : null}
        
        <div className={`gallery-card-error-fallback ${imageError ? 'show' : ''}`}>
          <div className="gallery-card-error-icon">🎨</div>
          <div>{tattoo.title}</div>
          <div className="gallery-card-error-details">
            {tattoo.style} • {tattoo.size}
          </div>
        </div>
      </div>
      
      <div className="gallery-card-content">
        <h3 className="gallery-card-title">
          {tattoo.title}
        </h3>
        <p className="gallery-card-description">
          {tattoo.description}
        </p>
        <div className="gallery-card-tags">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="gallery-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default React.memo(GalleryCard);