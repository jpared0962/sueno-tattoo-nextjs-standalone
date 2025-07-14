/**
 * A/B Tested CTA Button Component
 * Tests different variants to improve click-through rates and SEO engagement metrics
 */

import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import useABTest from '../../hooks/useABTest';
import styled from 'styled-components';

// Styled components for different button variants
const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${props => props.$size === 'large' ? '1rem 2rem' : '0.875rem 1.75rem'};
  border-radius: ${props => props.$rounded ? '50px' : '8px'};
  text-decoration: none;
  font-weight: 600;
  font-size: ${props => props.$size === 'large' ? '1.125rem' : '1rem'};
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  text-align: center;
  min-width: 200px;
  
  /* Variant-specific styles */
  background: ${props => {
    switch(props.$variant) {
      case 'gold': return 'linear-gradient(135deg, #D4A017 0%, #B8941F 100%)';
      case 'red': return 'linear-gradient(135deg, #8B0000 0%, #A52A2A 100%)';
      case 'black': return 'linear-gradient(135deg, #1C2526 0%, #2C3E40 100%)';
      default: return '#8B0000';
    }
  }};
  
  color: ${props => props.$variant === 'black' ? '#D4A017' : '#FFFFFF'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    background: ${props => {
      switch(props.$variant) {
        case 'gold': return 'linear-gradient(135deg, #B8941F 0%, #D4A017 100%)';
        case 'red': return 'linear-gradient(135deg, #A52A2A 0%, #8B0000 100%)';
        case 'black': return 'linear-gradient(135deg, #2C3E40 0%, #1C2526 100%)';
        default: return '#A52A2A';
      }
    }};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Focus accessibility */
  &:focus {
    outline: 3px solid rgba(212, 175, 55, 0.5);
    outline-offset: 2px;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, var(--crisp-white) 0%, rgba(212, 160, 23, 0.05) 100%);
  padding: 4rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
`;

const CTATitle = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--ink-black);
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const CTASubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--charcoal-gray);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

// A/B Test Variants Configuration
const CTA_VARIANTS = [
  {
    id: 'control',
    name: 'Control (Current)',
    buttonText: 'Schedule Consultation',
    buttonVariant: 'red',
    buttonSize: 'normal',
    buttonRounded: false,
    icon: Calendar,
    urgency: false
  },
  {
    id: 'gold_journey',
    name: 'Gold Journey',
    buttonText: 'Start Your Tattoo Journey',
    buttonVariant: 'gold', 
    buttonSize: 'large',
    buttonRounded: true,
    icon: Sparkles,
    urgency: false
  },
  {
    id: 'black_urgent',
    name: 'Black Urgent',
    buttonText: 'Book Free Consultation Today',
    buttonVariant: 'black',
    buttonSize: 'normal', 
    buttonRounded: false,
    icon: ArrowRight,
    urgency: true
  }
];

const ABTestCTA = ({ 
  href = '/book-consultation',
  title = 'Ready to Start Your Tattoo Journey?',
  subtitle = 'Have an idea? Let\'s bring your vision to life. Professional artistry, guaranteed.',
  testName = 'cta_button_main'
}) => {
  
  // Initialize A/B test with first two variants (control vs gold)
  const { selectedVariant, isLoading, trackConversion, isControlGroup } = useABTest(
    testName, 
    CTA_VARIANTS.slice(0, 2), // Start with control vs gold variant
    {
      testDuration: 14 * 24 * 60 * 60 * 1000, // 14 days
      trackEvents: true
    }
  );

  // Show loading state or fallback
  if (isLoading || !selectedVariant) {
    return (
      <CTASection>
        <CTATitle>{title}</CTATitle>
        <CTASubtitle>{subtitle}</CTASubtitle>
        <CTAButton 
          href={href}
          $variant="red"
          $size="normal"
          $rounded={false}
        >
          <Calendar size={20} />
          Schedule Consultation
        </CTAButton>
      </CTASection>
    );
  }

  const handleClick = (e) => {
    // Track conversion for A/B test
    trackConversion('click');
    
    // Add slight delay for tracking
    setTimeout(() => {
      window.location.href = href;
    }, 100);
    
    e.preventDefault();
  };

  const IconComponent = (selectedVariant.icon && typeof selectedVariant.icon === 'function') 
    ? selectedVariant.icon 
    : Calendar;

  return (
    <CTASection>
      <CTATitle>{title}</CTATitle>
      <CTASubtitle>
        {selectedVariant.urgency ? 
          `${subtitle} Limited consultation slots available this month.` : 
          subtitle
        }
      </CTASubtitle>
      
      <CTAButton
        href={href}
        onClick={handleClick}
        $variant={selectedVariant.buttonVariant}
        $size={selectedVariant.buttonSize}
        $rounded={selectedVariant.buttonRounded}
        title={`${selectedVariant.buttonText} - Free consultation with Jose`}
        // SEO and accessibility attributes
        role="button"
        aria-label={`${selectedVariant.buttonText} - Book your free tattoo consultation`}
        data-ab-test={testName}
        data-ab-variant={selectedVariant.id}
      >
        <IconComponent size={selectedVariant.buttonSize === 'large' ? 22 : 20} />
        {selectedVariant.buttonText}
      </CTAButton>
      
      {/* Hidden tracking for SEO analytics */}
      <div style={{ display: 'none' }}>
        {/* This helps with conversion tracking */}
        <span data-ab-test-active="true" data-variant={selectedVariant.id}>
          A/B Test: {isControlGroup ? 'Control Group' : 'Test Group'}
        </span>
      </div>
    </CTASection>
  );
};

export default ABTestCTA;