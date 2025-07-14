import React, { useState } from 'react';
import { getResponsivePictureData } from '../../services/portfolioService';

/**
 * ResponsiveImage - Modern responsive image component with WebP/AVIF support
 * 
 * Features:
 * - Automatic WebP/AVIF format selection for modern browsers
 * - Responsive srcset for optimal loading across devices
 * - JPEG fallback for older browsers
 * - Loading states and error handling
 * - Lazy loading support
 * - Accessibility optimized
 */
const ResponsiveImage = ({
  src,
  alt,
  className = '',
  style = {},
  sizes,
  options = {},
  loading = 'lazy',
  onLoad,
  onError,
  placeholder = null,
  aspectRatio = '4/3',
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!src) {
    return (
      <div 
        className={`responsive-image-placeholder ${className}`}
        style={{
          ...style,
          aspectRatio,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666'
        }}
        {...props}
      >
        {placeholder || '🖼️'}
      </div>
    );
  }

  // Get responsive image data
  const imageData = getResponsivePictureData(src, {
    sizes: sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    ...options
  });

  if (!imageData) {
    return (
      <div 
        className={`responsive-image-error ${className}`}
        style={{ ...style, aspectRatio }}
        {...props}
      >
        ❌ Image not found
      </div>
    );
  }

  const handleLoad = (e) => {
    setImageLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setImageError(true);
    if (onError) onError(e);
  };

  return (
    <div 
      className={`responsive-image-container ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '1rem',
            aspectRatio
          }}
        >
          {placeholder || '⏳'}
        </div>
      )}

      {/* Error state */}
      {imageError && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#f8f8f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '1rem',
            aspectRatio
          }}
        >
          ❌ Failed to load
        </div>
      )}

      {/* Modern responsive picture element */}
      <picture style={{ display: 'block', width: '100%' }}>
        {/* AVIF format for maximum compression (newest browsers) */}
        {imageData.avif && (
          <source
            srcSet={imageData.avif}
            sizes={imageData.sizes}
            type="image/avif"
          />
        )}
        
        {/* WebP format for modern browsers */}
        {imageData.webp && (
          <source
            srcSet={imageData.webp}
            sizes={imageData.sizes}
            type="image/webp"
          />
        )}
        
        {/* JPEG fallback for all browsers */}
        <img
          src={imageData.src}
          srcSet={imageData.jpeg}
          sizes={imageData.sizes}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            aspectRatio,
            transition: 'opacity 0.3s ease',
            opacity: imageLoaded ? 1 : 0
          }}
          decoding="async"
        />
      </picture>
    </div>
  );
};

export default ResponsiveImage;