import React, { useState } from 'react';
import './ContentAccordion.css';

const ContentAccordion = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="content-accordion">
      <button 
        className="accordion-header" 
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-controls="accordion-content"
      >
        <span className="accordion-title">{title}</span>
        <span className={`accordion-icon ${isExpanded ? 'expanded' : ''}`}>
          ▼
        </span>
      </button>
      
      <div 
        id="accordion-content"
        className={`accordion-content ${isExpanded ? 'expanded' : ''}`}
        aria-hidden={!isExpanded}
      >
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentAccordion;