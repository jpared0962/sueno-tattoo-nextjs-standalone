import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from '@/utils/motionConfig.jsx';
import CloudinaryImage from '@/components/CloudinaryImage';
// import { generateSizes } from '@/utils/imageOptimization';

const ImageWrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: ${({ theme }) => theme?.radii?.lg || '1rem'};
  overflow: hidden;
  background: ${({ theme }) => theme?.colors?.glass?.bg || 'rgba(255, 255, 255, 0.1)'};
  /* backdrop-filter disabled for emergency performance */
  border: 1px solid ${({ theme }) => theme?.colors?.glass?.border || 'rgba(255, 255, 255, 0.2)'};
  
  /* Mobile-optimized glass effect */
  @supports not (backdrop-filter: blur(8px)) {
    background: rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: 768px) {
    /* backdrop-filter disabled for emergency performance */
  }
  transition: ${({ theme }) => theme?.transitions?.normal || '0.3s ease'};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
    border-color: ${({ theme }) => theme?.colors?.primary || '#00d4ff'};
  }
  
  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height || '300px'};
  overflow: hidden;
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: ${({ theme }) => theme?.space?.[4] || '1rem'};
  
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const ImageInfo = styled.div`
  color: white;
  width: 100%;
  
  h4 {
    font-size: ${({ theme }) => theme?.fontSizes?.lg || '1.125rem'};
    font-weight: ${({ theme }) => theme?.fontWeights?.semibold || 600};
    margin: 0 0 ${({ theme }) => theme?.space?.[1] || '0.25rem'} 0;
    line-height: 1.2;
  }
  
  p {
    font-size: ${({ theme }) => theme?.fontSizes?.sm || '0.875rem'};
    margin: 0;
    opacity: 0.9;
    line-height: 1.3;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme?.space?.[2] || '0.5rem'};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme?.space?.[2] || '0.5rem'};
`;

const Tag = styled.span`
  background: rgba(0, 212, 255, 0.2);
  color: ${({ theme }) => theme?.colors?.primary || '#00d4ff'};
  padding: ${({ theme }) => theme?.space?.[1] || '0.25rem'} ${({ theme }) => theme?.space?.[2] || '0.5rem'};
  border-radius: ${({ theme }) => theme?.radii?.full || '9999px'};
  font-size: ${({ theme }) => theme?.fontSizes?.xs || '0.75rem'};
  font-weight: ${({ theme }) => theme?.fontWeights?.medium || 500};
  border: 1px solid rgba(0, 212, 255, 0.3);
`;

const LoadingIndicator = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme?.colors?.text?.secondary || 'rgba(255, 255, 255, 0.8)'};
  font-size: 2rem;
`;

const ZoomIcon = styled(motion.div)`
  position: absolute;
  top: ${({ theme }) => theme?.space?.[3] || '0.75rem'};
  right: ${({ theme }) => theme?.space?.[3] || '0.75rem'};
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  /* backdrop-filter disabled for emergency performance */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const GalleryImage = React.memo(({
  src,
  alt,
  title,
  description,
  tags = [],
  height = '300px',
  onClick,
  loading = false,
  priority = false,
  style,
  className,
  ...props
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const imageRef = useRef(null);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onClick && !imageLoading && !imageError) {
      onClick({
        src,
        alt,
        title,
        description,
        tags,
        element: imageRef.current
      });
    }
  }, [onClick, src, alt, title, description, tags, imageLoading, imageError]);

  // Generate responsive sizes for gallery images
  const gallerySizes = '(max-width: 480px) 100vw, (max-width: 1024px) 50vw, (max-width: 1200px) 33vw, 400px';

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.4 }
    }
  };

  // Filter out motion-specific props to prevent DOM warnings
  const { 
    variants: _, 
    initial: __, 
    animate: ___, 
    whileHover: ____, 
    whileTap: _____, 
    exit: ______, 
    transition: _______,
    ...safeProps 
  } = props;

  return (
    <ImageWrapper
      ref={imageRef}
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={handleClick}
      style={style}
      className={className}
      role="button"
      tabIndex={0}
      aria-label={`View ${title || alt} in gallery`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e);
        }
      }}
      {...safeProps}
    >
      <ImageContainer $height={height}>
        <CloudinaryImage
          src={src}
          alt={alt}
          lazy={!priority}
          className="gallery-cloudinary-image"
          transformations={{
            width: 400,
            height: 300,
            crop: 'fill',
            gravity: 'auto',
            quality: 'auto',
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        
        {/* Loading state */}
        <AnimatePresence>
          {(imageLoading || loading) && (
            <LoadingIndicator
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              ⏳
            </LoadingIndicator>
          )}
        </AnimatePresence>
        
        {/* Zoom indicator */}
        {!imageLoading && !imageError && (
          <ZoomIcon
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
          >
            🔍
          </ZoomIcon>
        )}
        
        {/* Image overlay with info */}
        {(title || description || tags.length > 0) && (
          <ImageOverlay variants={overlayVariants}>
            <ImageInfo>
              {title && <h4>{title}</h4>}
              {description && <p>{description}</p>}
              {tags.length > 0 && (
                <TagsContainer>
                  {tags.slice(0, 3).map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                  {tags.length > 3 && (
                    <Tag>+{tags.length - 3} more</Tag>
                  )}
                </TagsContainer>
              )}
            </ImageInfo>
          </ImageOverlay>
        )}
      </ImageContainer>
    </ImageWrapper>
  );
});

GalleryImage.displayName = 'GalleryImage';

export default GalleryImage;