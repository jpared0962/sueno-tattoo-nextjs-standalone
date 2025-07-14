'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="sueno-mobile-nav" role="navigation" aria-label="Main navigation">
      <div className="sueno-nav-container">
        <div className="sueno-nav-header">
          <Link 
            href="/" 
            className="sueno-nav-brand"
            aria-label="Sueno Tattoo - Return to homepage"
          >
            🎨 Sueno Tattoo
          </Link>
          <button 
            className={`sueno-nav-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="main-navigation-menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        
        <div 
          className={`sueno-nav-menu ${isOpen ? 'active' : ''}`}
          id="main-navigation-menu"
          role="menu"
          aria-label="Site navigation"
          aria-hidden={!isOpen}
        >
          <div className="sueno-nav-links">
            <Link 
              href="/" 
              className={`sueno-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="Home - Main page"
            >
              🏠 Home
            </Link>
            <Link 
              href="/about" 
              className={`sueno-nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="About - Meet Jose the tattoo artist"
            >
              👨‍🎨 Meet Jose
            </Link>
            <Link 
              href="/gallery" 
              className={`sueno-nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="Gallery - View tattoo portfolio"
            >
              🖼️ Portfolio
            </Link>
            <Link 
              href="/flash" 
              className={`sueno-nav-link ${isActive('/flash') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="Flash Art - Pre-designed tattoo options"
            >
              ⚡ Flash Art
            </Link>
            <Link 
              href="/services" 
              className={`sueno-nav-link ${isActive('/services') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="Services - Tattoo services and pricing"
            >
              📋 Services
            </Link>
            <Link 
              href="/aftercare" 
              className={`sueno-nav-link ${isActive('/aftercare') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="Aftercare - Tattoo healing and care instructions"
            >
              🩹 Aftercare
            </Link>
            <Link 
              href="/contact" 
              className={`sueno-nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="Contact - Get in touch with Sueno Tattoo"
            >
              📞 Contact
            </Link>
            <Link 
              href="/book-consultation" 
              className={`sueno-nav-cta ${isActive('/book-consultation') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label="Book Consultation - Schedule your free tattoo consultation"
            >
              📅 Book Consultation
            </Link>
            {process.env.NODE_ENV === 'development' && (
              <Link 
                href="/admin" 
                className={`sueno-nav-link admin-link ${isActive('/admin') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)} 
                role="menuitem"
                aria-label="Admin Login - Access administrative dashboard"
                >
                🔐 Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;