import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme?.space?.[8] || '2rem'};
  text-align: center;
  background: ${({ theme }) => theme?.colors?.background?.primary || 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)'};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme?.space?.[4] || '1rem'};
    min-height: 80vh;
  }
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme?.space?.[4] || '1rem'};
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ErrorTitle = styled.h1`
  font-size: ${({ theme }) => theme?.fontSizes?.['4xl'] || '2.25rem'};
  margin-bottom: ${({ theme }) => theme?.space?.[4] || '1rem'};
  color: ${({ theme }) => theme?.colors?.text?.primary || '#ffffff'};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme?.fontSizes?.['2xl'] || '1.5rem'};
  }
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme?.fontSizes?.lg || '1.125rem'};
  color: ${({ theme }) => theme?.colors?.text?.secondary || 'rgba(255, 255, 255, 0.8)'};
  margin-bottom: ${({ theme }) => theme?.space?.[6] || '1.5rem'};
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme?.fontSizes?.base || '1rem'};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme?.space?.[4] || '1rem'};
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorTitle>Oops! Something went wrong</ErrorTitle>
      <ErrorMessage>
        We're sorry, but something unexpected happened. Our team has been notified and is working on a fix.
      </ErrorMessage>
      
      <ButtonGroup>
        <Button 
          variant="primary" 
          onClick={resetErrorBoundary}
        >
          Try Again
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => window.location.href = '/'}
        >
          Go Home
        </Button>
      </ButtonGroup>

      {process.env.NODE_ENV === 'development' && (
        <details style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          background: 'rgba(255, 255, 255, 0.1)', 
          borderRadius: '8px',
          maxWidth: '600px',
          width: '100%'
        }}>
          <summary style={{ 
            cursor: 'pointer', 
            marginBottom: '1rem',
            color: '#ff6b6b'
          }}>
            Error Details (Development Only)
          </summary>
          <pre style={{ 
            fontSize: '0.8rem', 
            overflow: 'auto',
            color: '#fff',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '4px'
          }}>
            {error.message}
            {error.stack}
          </pre>
        </details>
      )}
    </ErrorContainer>
  );
};

export default ErrorFallback;