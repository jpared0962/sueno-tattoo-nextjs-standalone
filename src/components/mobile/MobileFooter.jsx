import Link from 'next/link';

function MobileFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sueno-footer">
      <div className="sueno-footer-container">
        
        {/* Primary CTA Section */}
        <div className="sueno-footer-cta">
          <Link href="/book-consultation" className="sueno-footer-cta-button">
            <span className="sueno-footer-cta-icon">📅</span>
            <span className="sueno-footer-cta-text">
              <strong>Book Free Consultation</strong>
              <small>Get started on your tattoo journey</small>
            </span>
          </Link>
        </div>

        {/* Contact Cards */}
        <div className="sueno-footer-contact-cards">
          <a href="tel:+12407583226" className="sueno-footer-card sueno-footer-card-phone">
            <span className="sueno-footer-card-icon">📞</span>
            <div className="sueno-footer-card-content">
              <strong>Call Now</strong>
              <span>(240) 758-3226</span>
            </div>
          </a>
          
          <div className="sueno-footer-card sueno-footer-card-location">
            <span className="sueno-footer-card-icon">📍</span>
            <div className="sueno-footer-card-content">
              <strong>Location</strong>
              <span>Laurel, MD 20723</span>
            </div>
          </div>
        </div>

        {/* Hours Compact */}
        <div className="sueno-footer-hours-compact">
          <div className="sueno-footer-hours-header">
            <span className="sueno-footer-hours-icon">🕐</span>
            <strong>Studio Hours</strong>
          </div>
          <div className="sueno-footer-hours-grid">
            <div className="sueno-footer-hours-item">
              <span className="sueno-footer-hours-days">Thu-Sun</span>
              <span className="sueno-footer-hours-time available">12PM-6PM</span>
            </div>
            <div className="sueno-footer-hours-item">
              <span className="sueno-footer-hours-days">Mon-Wed</span>
              <span className="sueno-footer-hours-time appointment">By Appt</span>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="sueno-footer-links-grid">
          <Link href="/gallery" className="sueno-footer-quick-link">
            <span>🖼️</span>
            Gallery
          </Link>
          <Link href="/services" className="sueno-footer-quick-link">
            <span>⚡</span>
            Services
          </Link>
          <Link href="/about" className="sueno-footer-quick-link">
            <span>👨‍🎨</span>
            About
          </Link>
          <Link href="/reviews" className="sueno-footer-quick-link">
            <span>⭐</span>
            Reviews
          </Link>
          <Link href="/aftercare" className="sueno-footer-quick-link">
            <span>🌱</span>
            Aftercare
          </Link>
          <Link href="/contact" className="sueno-footer-quick-link">
            <span>💬</span>
            Contact
          </Link>
        </div>

        {/* Social & Brand */}
        <div className="sueno-footer-brand-section">
          <div className="sueno-footer-brand">
            <span className="sueno-footer-brand-icon">🎨</span>
            <div className="sueno-footer-brand-text">
              <strong>Sueno Tattoo</strong>
              <span>Professional Custom Artistry</span>
            </div>
          </div>
          
          <a 
            href="https://instagram.com/suenotattoo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sueno-footer-social-button"
          >
            <span>📱</span>
            @suenotattoo
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="sueno-footer-bottom">
          <p className="sueno-footer-copyright">
            © {currentYear} Sueno Tattoo • Licensed Artist
          </p>
          <p className="sueno-footer-location">
            Serving Laurel, Beltsville, College Park & DMV Area
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter;