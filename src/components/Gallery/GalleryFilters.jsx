import React from 'react';
import { FILTER_LABELS, GALLERY_MESSAGES, ARIA_LABELS } from '@/constants/galleryConfig';

const GalleryFilters = ({
  filters,
  filterOptions,
  updateFilter,
  setSearch,
  resetFilters,
  hasActiveFilters
}) => {
  return (
    <section className="sueno-philosophy-section">
      <div className="gallery-filters">
        {/* Search */}
        <div className="gallery-search">
          <input
            type="text"
            placeholder="Find tattoos..."
            value={filters.search}
            onChange={(e) => setSearch(e.target.value)}
            className="gallery-search-input"
            aria-label={ARIA_LABELS.searchInput}
          />
        </div>

        {/* Style Filters */}
        <div className="gallery-filter-group">
          <h3 className="gallery-filter-title">
            Pick by Style
          </h3>
          <div className="gallery-filter-buttons">
            {filterOptions.styles.map((style) => {
              const isActive = filters.style === style;
              const label = FILTER_LABELS[style] || style.charAt(0).toUpperCase() + style.slice(1);
              
              return (
                <button
                  key={style}
                  onClick={() => updateFilter('style', style)}
                  className={`gallery-filter-button ${isActive ? 'active' : ''}`}
                  aria-label={ARIA_LABELS.filterButton(label, isActive)}
                  aria-pressed={isActive}
                >
                  {style === 'all' ? 'All Styles' : label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reset Filters */}
        {hasActiveFilters && (
          <div className="gallery-reset-filters">
            <button
              onClick={resetFilters}
              className="gallery-reset-button"
              aria-label={ARIA_LABELS.resetFilters}
            >
              {GALLERY_MESSAGES.clearFilters}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(GalleryFilters);