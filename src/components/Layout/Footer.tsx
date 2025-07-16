import Link from 'next/link'
import { businessInfo } from '@/data/business-info'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-panel border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-3">Sueño Tattoo</h3>
              <p className="text-crisp-white/90 leading-relaxed">
                Professional tattoo artist Jose in Laurel, MD. 8+ years creating custom artwork 
                with 95% perfect healing rate.
              </p>
            </div>
            
            {/* Quick Contact */}
            <div className="space-y-3">
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="flex items-center gap-3 text-crisp-white hover:text-gold transition-colors group"
              >
                <span className="text-lg">📱</span>
                <span className="font-medium">{businessInfo.contact.phone}</span>
              </a>
              
              <div className="flex items-center gap-3 text-crisp-white/80">
                <span className="text-lg">📍</span>
                <span>Laurel, MD • Prince George's County</span>
              </div>
              
              <div className="flex items-center gap-3 text-crisp-white/80">
                <span className="text-lg">🕐</span>
                <span>Thu-Sun 12PM-6PM</span>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex gap-6 text-sm">
              <span className="glass-accent px-3 py-1 rounded-full text-gold">Licensed Professional</span>
              <span className="glass-accent px-3 py-1 rounded-full text-gold">8+ Years Experience</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-crisp-white mb-4">Services</h4>
              <nav className="space-y-3">
                <Link href="/services/custom-tattoos" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Custom Designs
                </Link>
                <Link href="/services/traditional" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Traditional American
                </Link>
                <Link href="/services/black-grey" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Black & Grey
                </Link>
                <Link href="/services/flash-tattoos" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Flash Tattoos
                </Link>
                <Link href="/services/neo-traditional" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Neo-Traditional
                </Link>
                <Link href="/services/cover-ups" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Cover-ups
                </Link>
                <Link href="/book-consultation" className="block text-gold hover:text-gold/80 transition-colors font-medium">
                  Free Consultation →
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-crisp-white mb-4">Company</h4>
              <nav className="space-y-3">
                <Link href="/about" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  About Jose
                </Link>
                <Link href="/gallery" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Portfolio
                </Link>
                <Link href="/reviews" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Reviews
                </Link>
                <Link href="/aftercare" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  Aftercare Guide
                </Link>
                <Link href="/faq" className="block text-crisp-white/80 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-crisp-white/10 pt-8 mb-8 text-center">
          <h4 className="text-sm font-semibold text-crisp-white mb-3">Proudly Serving the DMV Area</h4>
          <p className="text-crisp-white/60 text-sm leading-relaxed">
            Laurel • Beltsville • College Park • Greenbelt • Hyattsville • Riverdale Park • 
            New Carrollton • Prince George's County • Washington DC Metro Area
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-crisp-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-crisp-white/60 text-sm">
            © {currentYear} Sueño Tattoo. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-crisp-white/60 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-crisp-white/60 hover:text-gold transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="text-crisp-white/40 hover:text-crisp-white/60 transition-colors" title="Admin Access">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}