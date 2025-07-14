import React from 'react';
import { formatPublicId } from '../utils/cloudinary';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// EMERGENCY DISABLED: import 'react-lazy-load-image-component/src/effects/blur.css';

/**
 * CloudinaryImage - A component for displaying images from Cloudinary
 * 
 * @param {Object} props
 * @param {string} props.src - Local image path or Cloudinary public ID
 * @param {string} props.alt - Alt text for the image
 * @param {Object} props.transformations - Cloudinary transformations to apply
 * @param {string} props.className - CSS class name
 * @param {boolean} props.lazy - Whether to lazy load the image (default: true)
 */
const CloudinaryImage = React.forwardRef(({ 
  src, 
  alt = '', 
  transformations = {}, 
  className = '', 
  lazy = true,
  ...props 
}, ref) => {
  // Early return if no src provided
  if (!src) {
    // Filter out custom props before passing to DOM
    const { transformations: _, publicId: __, ...safeDomProps } = props;
    return (
      <div 
        ref={ref}
        className={className}
        style={{ 
          backgroundColor: '#f0f0f0', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '200px',
          color: '#666'
        }}
        {...safeDomProps}
      >
        No image provided
      </div>
    );
  }

  // Format the public ID properly (remove file extension)
  const publicId = formatPublicId(src);
  
  // Get cloud name from environment variables with fallback
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dv9x1lf3a';
  
  // Create transformation string for the URL
  const transformationParams = [];
  if (transformations.width) transformationParams.push(`w_${transformations.width}`);
  if (transformations.height) transformationParams.push(`h_${transformations.height}`);
  if (transformations.crop) transformationParams.push(`c_${transformations.crop}`);
  if (transformations.quality !== false) transformationParams.push(transformations.quality || 'q_auto');
  if (process.env.NEXT_PUBLIC_CLOUDINARY_AUTO_FORMAT !== 'false') transformationParams.push('f_auto');
  
  const transformationString = transformationParams.length 
    ? transformationParams.join(',') + '/' 
    : '';
  
  // Use direct URL structure without any format extension
  // This ensures Cloudinary serves the image in its original format
  const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}${publicId}`;
  
  // Error handling for failed images
  const handleError = (e) => {
    console.error('CloudinaryImage failed to load:', { src, publicId, imageUrl });
    // In production, could show a placeholder image
    e.target.style.opacity = '0.3';
  };

  // Filter out our custom props before passing to DOM elements
  const { transformations: _, publicId: __, ...domProps } = props;

  // Use either lazy loaded image or regular img tag
  return (
    <>
      {lazy ? (
        <LazyLoadImage
          ref={ref}
          src={imageUrl}
          alt={alt}
          className={className}
          effect="opacity"
          onError={handleError}
          {...domProps}
        />
      ) : (
        <img 
          ref={ref}
          src={imageUrl} 
          alt={alt} 
          className={className} 
          loading="eager"
          onError={handleError}
          {...domProps} 
        />
      )}
      <noscript>
        <img 
          src={imageUrl} 
          alt={alt} 
          className={className}
        />
      </noscript>
    </>
  );
});

export default CloudinaryImage;
