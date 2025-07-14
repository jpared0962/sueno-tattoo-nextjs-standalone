import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from '@/utils/motionConfig.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useResponsive from '@/hooks/useResponsive';

const CardWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.bg};
  /* backdrop-filter disabled for emergency performance */
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: ${({ $clickable }) => $clickable ? 'pointer' : 'default'};
  position: relative;
  
  &:hover {
    ${({ $clickable }) => $clickable && css`
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 212, 255, 0.2);
    `}
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    width: 100%;
    max-width: 100%;
    margin-bottom: ${({ theme }) => theme.space[4]};
    border-radius: ${({ theme }) => theme.radii.xl};
  }
`;

const CardHeader = styled.div`
  padding: ${({ theme, $compact }) => $compact ? theme.space[4] : theme.space[6]};
  border-bottom: ${({ $noBorder }) => $noBorder ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ theme }) => theme.space[4]};
  }
`;

const CardBody = styled.div`
  padding: ${({ theme, $compact }) => $compact ? theme.space[4] : theme.space[6]};

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ theme }) => theme.space[4]};
  }
`;

const CardFooter = styled.div`
  padding: ${({ theme, $compact }) => $compact ? theme.space[4] : theme.space[6]};
  border-top: ${({ $noBorder }) => $noBorder ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  gap: ${({ theme }) => theme.space[3]};

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ theme }) => theme.space[4]};
    flex-direction: ${({ $mobileStack }) => $mobileStack ? 'column' : 'row'};
    gap: ${({ theme, $mobileStack }) => $mobileStack ? theme.space[2] : theme.space[3]};
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height || '200px'};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.glass.bg};

  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ $mobileHeight, $height }) => $mobileHeight || $height || '180px'};
  }
`;

const StyledLazyImage = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: ${({ $objectFit }) => $objectFit || 'cover'};
  object-position: ${({ $objectPosition }) => $objectPosition || 'center'};
  transition: ${({ theme }) => theme.transitions.normal};

  ${CardWrapper}:hover & {
    transform: ${({ $hoverScale }) => $hoverScale ? 'scale(1.05)' : 'none'};
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ $overlay }) => $overlay || 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))'};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: ${({ theme }) => theme.transitions.normal};
  display: flex;
  align-items: flex-end;
  padding: ${({ theme }) => theme.space[4]};

  ${CardWrapper}:hover & {
    opacity: 1;
  }
`;

const ImageBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.space[3]};
  right: ${({ theme }) => theme.space[3]};
  background: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'success':
        return 'rgba(34, 197, 94, 0.9)';
      case 'warning':
        return 'rgba(251, 191, 36, 0.9)';
      case 'error':
        return 'rgba(239, 68, 68, 0.9)';
      default:
        return theme.colors.glass.bg;
    }
  }};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
  border-radius: ${({ theme }) => theme.radii.base};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  /* backdrop-filter disabled for emergency performance */
`;

const CardTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.space[2]} 0;
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'sm':
        return theme.fontSizes.lg;
      case 'lg':
        return theme.fontSizes['2xl'];
      default:
        return theme.fontSizes.xl;
    }
  }};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ theme, $size }) => {
      switch ($size) {
        case 'sm':
          return theme.fontSizes.base;
        case 'lg':
          return theme.fontSizes.xl;
        default:
          return theme.fontSizes.lg;
      }
    }};
    text-align: ${({ $centerOnMobile }) => $centerOnMobile ? 'center' : 'left'};
  }
`;

const CardDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.normal};

  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-align: ${({ $centerOnMobile }) => $centerOnMobile ? 'center' : 'left'};
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[3]};

  ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: ${({ $centerOnMobile }) => $centerOnMobile ? 'center' : 'flex-start'};
  }
`;

const Tag = styled.span`
  background: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      default:
        return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  color: ${({ theme, $variant }) => 
    $variant === 'primary' || $variant === 'secondary' 
      ? theme.colors.black 
      : theme.colors.text.primary
  };
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
`;

const LoadingPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  /* @keyframes shimmer will be moved to GlobalStyles.js */
`;

const Card = ({
  children,
  title,
  description,
  image,
  imageAlt,
  imageHeight,
  mobileImageHeight,
  objectFit = 'cover',
  objectPosition = 'center',
  hoverScale = true,
  overlay,
  overlayContent,
  badge,
  badgeVariant,
  tags = [],
  compact = false,
  clickable = false,
  centerOnMobile = false,
  noBorder = false,
  titleSize = 'md',
  loading = false,
  className,
  onClick,
  ...props
}) => {
  const { isMobile } = useResponsive();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <CardWrapper
      className={className}
      $clickable={clickable}
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={clickable ? { y: -5 } : {}}
      {...props}
    >
      {image && (
        <CardImage 
          $height={imageHeight}
          $mobileHeight={mobileImageHeight}
        >
          {loading ? (
            <LoadingPlaceholder />
          ) : (
            <StyledLazyImage
              src={image}
              alt={imageAlt || title || 'Card image'}
              $objectFit={objectFit}
              $objectPosition={objectPosition}
              $hoverScale={hoverScale}
              effect="blur"
              placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
            />
          )}
          
          {badge && (
            <ImageBadge $variant={badgeVariant}>
              {badge}
            </ImageBadge>
          )}
          
          {overlayContent && (
            <ImageOverlay $overlay={overlay} $visible={!!overlayContent}>
              {overlayContent}
            </ImageOverlay>
          )}
        </CardImage>
      )}

      {(title || description) && (
        <CardHeader $compact={compact} $noBorder={noBorder}>
          {title && (
            <CardTitle 
              $size={titleSize} 
              $centerOnMobile={centerOnMobile}
            >
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription $centerOnMobile={centerOnMobile}>
              {description}
            </CardDescription>
          )}
          {tags.length > 0 && (
            <TagContainer $centerOnMobile={centerOnMobile}>
              {tags.map((tag, index) => (
                <Tag 
                  key={index} 
                  $variant={typeof tag === 'object' ? tag.variant : undefined}
                >
                  {typeof tag === 'object' ? tag.label : tag}
                </Tag>
              ))}
            </TagContainer>
          )}
        </CardHeader>
      )}

      {children && (
        <CardBody $compact={compact}>
          {children}
        </CardBody>
      )}
    </CardWrapper>
  );
};

// Export additional card components for flexibility
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;