import React from 'react';
import { GALLERY_MESSAGES } from '@/constants/galleryConfig';

const GalleryLoading = () => {
  return (
    <div className="gallery-loading">
      <div className="gallery-loading-content">
        <h2 className="gallery-loading-title">
          {GALLERY_MESSAGES.loading}
        </h2>
        <p className="gallery-loading-subtitle">
          {GALLERY_MESSAGES.loadingSubtext}
        </p>
      </div>
    </div>
  );
};

export default React.memo(GalleryLoading);