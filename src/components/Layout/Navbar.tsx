'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/flash', label: 'Flash' },
    { href: '/aftercare', label: 'Aftercare' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-black/95 backdrop-blur-sm border-b border-charcoal-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 min-h-[4rem]">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-display-xs font-bold text-gold hover:text-gold/80 transition-colors"
          >
            Sueño Tattoo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-label font-medium transition-colors hover:text-gold ${
                  isActive(link.href) 
                    ? 'text-gold border-b-2 border-gold' 
                    : 'text-crisp-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-consultation"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-crisp-white hover:text-gold transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 border-t border-charcoal-gray">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-label font-medium transition-colors hover:text-gold ${
                  isActive(link.href) ? 'text-gold bg-charcoal-gray/30' : 'text-crisp-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4">
              <Link
                href="/book-consultation"
                className="block w-full bg-deep-red hover:bg-deep-red/80 text-crisp-white px-4 py-2 rounded-lg text-label font-semibold text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}