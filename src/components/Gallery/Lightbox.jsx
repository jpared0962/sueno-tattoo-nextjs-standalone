import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
// EMERGENCY: Use safe motion instead
import { motion, AnimatePresence } from '@/utils/motionConfig.jsx';
import CloudinaryImage from '@/components/CloudinaryImage';
import Button from '@/components/UI/Button';

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  /* backdrop-filter disabled for emergency performance */
  z-index: ${({ theme }) => theme.zIndices.modal || 9999};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[4]};
  cursor: pointer;
`;

const LightboxContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.glass.bg};
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  /* backdrop-filter disabled for emergency performance */
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  max-height: 80vh;
  width: 100%;
`;

const LightboxImageWrapper = styled.div`
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.space[4]};
  right: ${({ theme }) => theme.space[4]};
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const NavigationButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => $direction}: ${({ theme }) => theme.space[4]};
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.5rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    
    &:hover {
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.7);
    }
  }
  
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ $direction }) => $direction}: ${({ theme }) => theme.space[2]};
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }
`;

const ImageInfo = styled(motion.div)`
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.colors.glass.bg};
  border-top: 1px solid ${({ theme }) => theme.colors.glass.border};
  
  h3 {
    margin: 0 0 ${({ theme }) => theme.space[2]} 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
  
  p {
    margin: 0 0 ${({ theme }) => theme.space[4]} 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`;

const Tag = styled.span`
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.space[4]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  background: rgba(0, 0, 0, 0.7);
  padding: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ZoomButton = styled(Button)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: transparent;
  color: white;
  font-size: 1rem;
  padding: 0;
  border: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Lightbox = ({ 
  isOpen, 
  onClose, 
  images = [], 
  currentIndex = 0, 
  onIndexChange,
  showNavigation = true,
  showZoom = true,
  showInfo = true 
}) => {
  const [imageIndex, setImageIndex] = useState(currentIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const currentImage = images[imageIndex];

  // Update index when currentIndex prop changes
  useEffect(() => {
    setImageIndex(currentIndex);
  }, [currentIndex]);

  // Reset zoom when image changes
  useEffect(() => {
    setZoomLevel(1);
    setImageLoaded(false);
  }, [imageIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case '+':
        case '=':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
        case '0':
          resetZoom();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, imageIndex, images.length]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const goToPrevious = useCallback(() => {
    if (imageIndex > 0) {
      const newIndex = imageIndex - 1;
      setImageIndex(newIndex);
      onIndexChange?.(newIndex);
    }
  }, [imageIndex, onIndexChange]);

  const goToNext = useCallback(() => {
    if (imageIndex < images.length - 1) {
      const newIndex = imageIndex + 1;
      setImageIndex(newIndex);
      onIndexChange?.(newIndex);
    }
  }, [imageIndex, images.length, onIndexChange]);

  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  }, []);

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
  }, []);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  if (!isOpen || !currentImage) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  return createPortal(
    <AnimatePresence>
      <LightboxOverlay
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
      >
        <LightboxContent
          ref={containerRef}
          variants={contentVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <CloseButton
            onClick={onClose}
            aria-label="Close lightbox"
            variant="ghost"
          >
            ×
          </CloseButton>

          {/* Navigation buttons */}
          {showNavigation && images.length > 1 && (
            <>
              <NavigationButton
                $direction="left"
                onClick={goToPrevious}
                disabled={imageIndex === 0}
                aria-label="Previous image"
                variant="ghost"
              >
                ‹
              </NavigationButton>
              <NavigationButton
                $direction="right"
                onClick={goToNext}
                disabled={imageIndex === images.length - 1}
                aria-label="Next image"
                variant="ghost"
              >
                ›
              </NavigationButton>
            </>
          )}

          {/* Main image */}
          <ImageContainer>
            <LightboxImageWrapper>
              <CloudinaryImage
                ref={imageRef}
                src={currentImage.src}
                alt={currentImage.alt}
                lazy={false}
                className="lightbox-cloudinary-image"
                transformations={{
                  width: 1200,
                  height: 800,
                  crop: 'limit',
                  quality: 'auto',
                }}
                onLoad={handleImageLoad}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  width: 'auto',
                  height: 'auto',
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.3s ease'
                }}
              />
            </LightboxImageWrapper>
          </ImageContainer>

          {/* Zoom controls */}
          {showZoom && imageLoaded && (
            <ZoomControls>
              <ZoomButton
                onClick={zoomOut}
                disabled={zoomLevel <= 0.5}
                aria-label="Zoom out"
              >
                −
              </ZoomButton>
              <ZoomButton
                onClick={resetZoom}
                aria-label="Reset zoom"
              >
                ⚬
              </ZoomButton>
              <ZoomButton
                onClick={zoomIn}
                disabled={zoomLevel >= 3}
                aria-label="Zoom in"
              >
                +
              </ZoomButton>
            </ZoomControls>
          )}

          {/* Image information */}
          {showInfo && (currentImage.title || currentImage.description || currentImage.tags?.length > 0) && (
            <ImageInfo
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {currentImage.title && <h3>{currentImage.title}</h3>}
              {currentImage.description && <p>{currentImage.description}</p>}
              {currentImage.tags?.length > 0 && (
                <TagsContainer>
                  {currentImage.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
              )}
            </ImageInfo>
          )}
        </LightboxContent>
      </LightboxOverlay>
    </AnimatePresence>,
    document.body
  );
};

export default Lightbox;