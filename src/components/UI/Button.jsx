import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from '@/utils/motionConfig.jsx';

const BaseButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme?.space?.[2] || '0.5rem'};
  font-family: ${({ theme }) => theme?.fonts?.primary || 'inherit'};
  font-weight: ${({ theme }) => theme?.fontWeights?.semibold || '600'};
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme?.transitions?.normal || 'all 0.3s ease'};
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme?.colors?.primary || '#8B5CF6'};
    outline-offset: 2px;
  }

  /* Ripple effect */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }

  &:active::after {
    width: 200px;
    height: 200px;
  }
`;

// Variant styles
const primaryStyles = css`
  background: linear-gradient(45deg, ${({ theme }) => theme?.colors?.primary || '#8B5CF6'}, ${({ theme }) => theme?.colors?.secondary || '#6366F1'});
  color: ${({ theme }) => theme?.colors?.black || '#000000'};
  box-shadow: ${({ theme }) => theme?.shadows?.glow || '0 4px 16px rgba(139, 92, 246, 0.3)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const secondaryStyles = css`
  background: ${({ theme }) => theme?.colors?.glass?.bg || 'rgba(255, 255, 255, 0.1)'};
  color: ${({ theme }) => theme?.colors?.text?.primary || '#ffffff'};
  border: 2px solid ${({ theme }) => theme?.colors?.glass?.border || 'rgba(255, 255, 255, 0.2)'};
  /* backdrop-filter disabled for emergency performance */

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: ${({ theme }) => theme?.colors?.primary || '#8B5CF6'};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme?.shadows?.md || '0 4px 16px rgba(0, 0, 0, 0.1)'};
  }

  &:active {
    transform: translateY(0);
  }
`;

const outlineStyles = css`
  background: transparent;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#ffffff'};
  border: 2px solid ${({ theme }) => theme?.colors?.primary || '#8B5CF6'};

  &:hover {
    background: ${({ theme }) => theme?.colors?.primary || '#8B5CF6'};
    color: ${({ theme }) => theme?.colors?.black || '#000000'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ghostStyles = css`
  background: transparent;
  color: ${({ theme }) => theme?.colors?.text?.secondary || 'rgba(255, 255, 255, 0.8)'};
  border: none;

  &:hover {
    color: ${({ theme }) => theme?.colors?.primary || '#8B5CF6'};
    background: rgba(255, 255, 255, 0.05);
  }
`;

// Size styles
const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => theme?.space?.[2] || '0.5rem'} ${({ theme }) => theme?.space?.[4] || '1rem'};
    font-size: ${({ theme }) => theme?.fontSizes?.sm || '0.875rem'};
    border-radius: ${({ theme }) => theme?.radii?.md || '0.5rem'};
    min-height: 36px;
  `,
  md: css`
    padding: ${({ theme }) => theme?.space?.[3] || '0.75rem'} ${({ theme }) => theme?.space?.[6] || '1.5rem'};
    font-size: ${({ theme }) => theme?.fontSizes?.base || '1rem'};
    border-radius: ${({ theme }) => theme?.radii?.lg || '0.75rem'};
    min-height: 44px;
  `,
  lg: css`
    padding: ${({ theme }) => theme?.space?.[4] || '1rem'} ${({ theme }) => theme?.space?.[8] || '2rem'};
    font-size: ${({ theme }) => theme?.fontSizes?.lg || '1.125rem'};
    border-radius: ${({ theme }) => theme?.radii?.xl || '1rem'};
    min-height: 52px;
  `
};

// Mobile-specific styles
const mobileStyles = css`
  ${({ theme }) => theme?.mediaQueries?.mobile || '@media (max-width: 768px)'} {
    width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
    max-width: ${({ $fullWidth }) => $fullWidth ? '100%' : '320px'};
    min-height: 48px;
    padding: ${({ theme }) => theme?.space?.[4] || '1rem'} ${({ theme }) => theme?.space?.[6] || '1.5rem'};
    font-size: ${({ theme }) => theme?.fontSizes?.base || '1rem'};
    margin: ${({ theme }) => theme?.space?.[2] || '0.5rem'} auto;
    
    ${({ $fullWidth }) => $fullWidth && css`
      margin-left: 0;
      margin-right: 0;
    `}
  }
`;

const StyledButton = styled(BaseButton)`
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return primaryStyles;
      case 'secondary':
        return secondaryStyles;
      case 'outline':
        return outlineStyles;
      case 'ghost':
        return ghostStyles;
      default:
        return primaryStyles;
    }
  }}

  ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
  ${mobileStyles}

  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}

  ${({ $loading }) => $loading && css`
    pointer-events: none;
    opacity: 0.7;
  `}
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  /* @keyframes spin moved to GlobalStyles.js to avoid duplication */
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  as = 'button',
  to,
  href,
  target,
  rel,
  className,
  ...props
}) => {
  const handleClick = (e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const buttonProps = {
    $variant: variant,
    $size: size,
    $fullWidth: fullWidth,
    $loading: loading,
    disabled: disabled || loading,
    onClick: handleClick,
    type,
    className,
    ...props
  };

  // Add motion props only for button elements (not anchor tags)
  if (as === 'button' && !href && !to) {
    buttonProps.whileTap = loading || disabled ? {} : { scale: 0.98 };
    buttonProps.whileHover = loading || disabled ? {} : { scale: 1.02 };
    buttonProps.transition = { type: 'spring', stiffness: 400, damping: 17 };
  }

  // Handle different button types (Link, anchor, button)
  if (as === 'a' || href) {
    buttonProps.as = 'a';
    buttonProps.href = href;
    buttonProps.target = target;
    buttonProps.rel = rel;
    delete buttonProps.type;
  } else if (to) {
    buttonProps.as = 'a'; // Will be handled by router Link
    buttonProps.to = to;
    delete buttonProps.type;
  }

  return (
    <StyledButton {...buttonProps}>
      {loading && <LoadingSpinner />}
      {children}
    </StyledButton>
  );
};

export default Button;