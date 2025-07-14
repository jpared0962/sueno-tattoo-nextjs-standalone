import Link from 'next/link'
import { businessInfo } from '@/data/business-info'

interface GlobalCTAProps {
  variant?: 'default' | 'services' | 'gallery' | 'contact'
  title?: string
  description?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

export function GlobalCTA({ 
  variant = 'default',
  title,
  description,
  primaryButton,
  secondaryButton
}: GlobalCTAProps) {
  const getDefaultContent = () => {
    switch (variant) {
      case 'services':
        return {
          title: 'Ready to Get Started?',
          description: 'Book your free consultation today to discuss your tattoo ideas and get expert advice.',
          primaryButton: { text: 'Book Free Consultation', href: '/book-consultation' },
          secondaryButton: { text: 'View Portfolio', href: '/gallery' }
        }
      case 'gallery':
        return {
          title: 'Love What You See?',
          description: 'Ready to create your own custom artwork? Schedule a free consultation to get started.',
          primaryButton: { text: 'Book Consultation', href: '/book-consultation' },
          secondaryButton: { text: 'View Services', href: '/services' }
        }
      case 'contact':
        return {
          title: 'Ready to Get Your Tattoo?',
          description: 'Contact us today to schedule your free consultation and start your tattoo journey.',
          primaryButton: { text: 'Call Now', href: `tel:${businessInfo.contact.phone}` },
          secondaryButton: { text: 'Book Online', href: '/book-consultation' }
        }
      default:
        return {
          title: 'Ready to Get Started?',
          description: 'Book your free consultation with Jose today and bring your vision to life.',
          primaryButton: { text: 'Book Free Consultation', href: '/book-consultation' },
          secondaryButton: { text: `Call ${businessInfo.contact.phone}`, href: `tel:${businessInfo.contact.phone}` }
        }
    }
  }

  const content = {
    title: title || getDefaultContent().title,
    description: description || getDefaultContent().description,
    primaryButton: primaryButton || getDefaultContent().primaryButton,
    secondaryButton: secondaryButton || getDefaultContent().secondaryButton
  }

  return (
    <section className="glass-card p-8 rounded-lg text-center my-16">
      <h2 className="text-2xl font-bold mb-4 text-crisp-white">
        {content.title}
      </h2>
      <p className="text-crisp-white/90 mb-8 max-w-2xl mx-auto">
        {content.description}
      </p>
      
      <div className="flex gap-4 justify-center flex-wrap">
        <Link 
          href={content.primaryButton.href}
          className="glass-button text-crisp-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          {content.primaryButton.text}
        </Link>
        
        {content.secondaryButton && (
          <Link 
            href={content.secondaryButton.href}
            className="glass-button-gold text-ink-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            {content.secondaryButton.text}
          </Link>
        )}
      </div>
      
      {/* Trust signals */}
      <div className="flex justify-center gap-8 mt-8 text-sm text-crisp-white/70">
        <span>🏆 Licensed & Insured</span>
        <span>⭐ {businessInfo.statistics.averageRating} Star Rating</span>
        <span>🎨 {businessInfo.statistics.yearsInBusiness}+ Years Experience</span>
      </div>
    </section>
  )
}