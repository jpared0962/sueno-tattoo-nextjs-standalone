import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from '@/utils/motionConfig.jsx';
import { getSecureImageUrl, validateImageSource } from '@/utils/secureImageLoader';

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.glass.bg};
  border-radius: inherit;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ $objectFit }) => $objectFit || 'cover'};
  transition: all 0.3s ease;
  opacity: ${({ $loaded }) => $loaded ? 1 : 0};
  transform: ${({ $loaded }) => $loaded ? 'scale(1)' : 'scale(1.05)'};
`;

const PlaceholderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  opacity: ${({ $show }) => $show ? 1 : 0};
  transition: opacity 0.3s ease;

  /* @keyframes shimmer will be moved to GlobalStyles.js */
`;

const ErrorDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.text.secondary};
  opacity: ${({ $show }) => $show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const OptimizedImage = React.memo(({
  src,
  alt,
  objectFit = 'cover',
  placeholder = '🖼️',
  errorText = 'Failed to load image',
  onLoad,
  onError,
  priority = false,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [secureUrl, setSecureUrl] = useState('');

  useEffect(() => {
    // Handle array sources - take first valid URL
    let imageSrc = src;
    if (Array.isArray(src)) {
      console.log('Array source detected:', src);
      imageSrc = src.find(url => url && typeof url === 'string') || src[0];
      console.log('Extracted image source:', imageSrc);
      if (!imageSrc || typeof imageSrc !== 'string') {
        console.warn('Invalid image source after array processing:', src);
        setError(true);
        return;
      }
    }

    if (!imageSrc) {
      setError(true);
      return;
    }

    console.log('Processing image source:', imageSrc);
    const validation = validateImageSource(imageSrc);
    if (!validation.isValid) {
      console.warn('Invalid image source:', imageSrc, 'Errors:', validation.errors);
      setError(true);
      return;
    }

    setSecureUrl(validation.secureUrl);
    setError(false);
  }, [src]);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    setError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setLoaded(false);
    setError(true);
    onError?.();
  }, [onError]);

  if (!secureUrl && !error) {
    return (
      <ImageContainer {...props}>
        <PlaceholderDiv $show={true}>
          {placeholder}
        </PlaceholderDiv>
      </ImageContainer>
    );
  }

  return (
    <ImageContainer {...props}>
      {secureUrl && (
        <Image
          src={secureUrl}
          alt={alt}
          $objectFit={objectFit}
          $loaded={loaded}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
      
      <PlaceholderDiv $show={!loaded && !error}>
        {placeholder}
      </PlaceholderDiv>
      
      <ErrorDiv $show={error}>
        {errorText}
      </ErrorDiv>
    </ImageContainer>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;