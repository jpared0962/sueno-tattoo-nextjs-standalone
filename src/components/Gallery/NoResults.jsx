import React from 'react';
import { GALLERY_MESSAGES } from '@/constants/galleryConfig';

const NoResults = ({ onReset }) => {
  return (
    <section className="sueno-services-section">
      <div className="gallery-no-results">
        <div className="gallery-no-results-icon" aria-hidden="true">🔍</div>
        <h3 className="gallery-no-results-title">
          {GALLERY_MESSAGES.noResults}
        </h3>
        <p className="gallery-no-results-subtitle">
          {GALLERY_MESSAGES.noResultsSubtext}
        </p>
        <button
          onClick={onReset}
          className="gallery-no-results-button"
        >
          {GALLERY_MESSAGES.showAll}
        </button>
      </div>
    </section>
  );
};

export default React.memo(NoResults);