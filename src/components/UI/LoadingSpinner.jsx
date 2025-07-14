import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme, $fullScreen }) => $fullScreen ? '0' : theme.space[8]};
  
  ${({ $fullScreen }) => $fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(12, 12, 12, 0.9);
    /* backdrop-filter disabled for emergency performance */;
    z-index: ${({ theme }) => (theme.zIndices.overlay || 1300) + 100}; /* Full-screen overlay */
  `}
`;

const Spinner = styled.div`
  width: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '24px';
      case 'lg': return '64px';
      case 'xl': return '80px';
      default: return '40px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '24px';
      case 'lg': return '64px';
      case 'xl': return '80px';
      default: return '40px';
    }
  }};
  border: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '2px';
      case 'lg': return '4px';
      case 'xl': return '5px';
      default: return '3px';
    }
  }} solid ${({ theme }) => theme.colors.glass.border};
  border-top: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '2px';
      case 'lg': return '4px';
      case 'xl': return '5px';
      default: return '3px';
    }
  }} solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

const Dot = styled.div`
  width: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '6px';
      case 'lg': return '12px';
      case 'xl': return '16px';
      default: return '8px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '6px';
      case 'lg': return '12px';
      case 'xl': return '16px';
      default: return '8px';
    }
  }};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${pulse} 1.4s ease-in-out infinite both;
  animation-delay: ${({ $delay }) => $delay || '0s'};
`;

const LoadingText = styled.p`
  margin-top: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-align: center;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const TattooIcon = styled.div`
  width: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '32px';
      case 'lg': return '64px';
      case 'xl': return '80px';
      default: return '48px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '32px';
      case 'lg': return '64px';
      case 'xl': return '80px';
      default: return '48px';
    }
  }};
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${spin} 2s linear infinite;
  margin-bottom: ${({ theme }) => theme.space[4]};

  &::before {
    content: '🎨';
    font-size: ${({ $size }) => {
      switch ($size) {
        case 'sm': return '16px';
        case 'lg': return '32px';
        case 'xl': return '40px';
        default: return '24px';
      }
    }};
  }
`;

const LoadingSpinner = ({
  size = 'md',
  variant = 'spinner',
  fullScreen = false,
  text = 'Loading...',
  showText = true,
  className,
  ...props
}) => {
  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <DotsContainer>
            <Dot $size={size} $delay="0s" />
            <Dot $size={size} $delay="0.2s" />
            <Dot $size={size} $delay="0.4s" />
          </DotsContainer>
        );
      case 'tattoo':
        return <TattooIcon $size={size} />;
      default:
        return <Spinner $size={size} />;
    }
  };

  return (
    <LoadingContainer 
      $fullScreen={fullScreen}
      className={className}
      {...props}
    >
      {renderSpinner()}
      {showText && text && (
        <LoadingText>{text}</LoadingText>
      )}
    </LoadingContainer>
  );
};

export default LoadingSpinner;