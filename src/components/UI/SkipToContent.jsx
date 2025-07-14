import React from 'react';
import styled from 'styled-components';

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: ${({ theme }) => theme.zIndices.skipLink};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  
  &:focus {
    top: 6px;
  }
`;

const SkipToContent = () => {
  return (
    <SkipLink href="#main-content">
      Skip to main content
    </SkipLink>
  );
};

export default SkipToContent;