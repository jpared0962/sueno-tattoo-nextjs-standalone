import styled from 'styled-components';
import { motion } from '@/utils/motionConfig.jsx';

// @keyframes breathe moved to GlobalStyles.js to avoid duplication

const StyledBreathingCard = styled(motion.div)`
  
  animation: breathe ${props => props.$duration || 4}s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.glass.bg};
  /* backdrop-filter disabled for emergency performance */
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      transparent, 
      rgba(0, 212, 255, 0.3), 
      transparent, 
      rgba(0, 212, 255, 0.3), 
      transparent
    );
    background-size: 200% 200%;
    animation: breathe ${props => props.$duration || 4}s ease-in-out infinite;
    animation-delay: ${props => props.$delay || 0}s;
    border-radius: inherit;
    z-index: -1;
    opacity: 0.5;
  }
  
  &:hover {
    animation-duration: 2s;
    transform: translateY(-5px);
    
    &::before {
      animation-duration: 2s;
      opacity: 0.8;
    }
  }
  
  &:active {
    animation-duration: 1s;
    transform: translateY(-2px) scale(0.98);
  }
`;

const BreathingCard = ({ 
  children, 
  duration = 4, 
  delay = 0, 
  className,
  onClick,
  ...props 
}) => {
  // EMERGENCY: Disable animations on mobile to prevent CPU overload
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  
  // Use plain div on mobile without animations
  if (isMobile) {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  return (
    <StyledBreathingCard
      $duration={duration}
      $delay={delay}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledBreathingCard>
  );
};

export default BreathingCard;