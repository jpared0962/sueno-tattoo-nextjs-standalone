import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Flash Tattoo Designs | Ready-to-Ink Art | Sueno Tattoo',
  description: 'Browse traditional flash tattoo designs ready for same-day inking. Classic American traditional flash art by professional artist Jose in Laurel, MD.',
  keywords: [
    'flash tattoo art',
    'ready to tattoo designs',
    'traditional flash',
    'flash sheets',
    'same day tattoos',
    'walk in tattoos laurel md',
    'traditional american flash',
    'classic tattoo designs'
  ],
  url: '/flash',
})

export default function Flash() {
  const flashFeatures = [
    {
      icon: '🎨',
      title: 'Original Designs',
      description: 'Hand-drawn traditional flash sheets featuring original artwork and classic motifs.'
    },
    {
      icon: '⏰',
      title: 'Same-Day Available',
      description: 'No design fee or wait time. Perfect for walk-ins and spontaneous tattoo decisions.'
    },
    {
      icon: '💰',
      title: 'Fixed Pricing',
      description: 'Transparent pricing from $150-300. No surprises, just quality traditional work.'
    },
    {
      icon: '⚡',
      title: 'Traditional Style',
      description: 'Bold lines, vibrant colors, and classic American traditional aesthetic.'
    },
    {
      icon: '🌹',
      title: 'Classic Imagery',
      description: 'Roses, anchors, daggers, eagles, and other timeless traditional motifs.'
    },
    {
      icon: '🖼️',
      title: 'Ready to Ink',
      description: 'Pre-designed pieces ready for immediate application with minor customization.'
    }
  ]

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />
      
      <div className="min-h-screen pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gold to-deep-red bg-clip-text text-transparent">
              Flash Tattoo Designs
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-crisp-white/90 mb-6 md:mb-8">
              Ready-to-ink traditional flash art
            </p>
          </section>

          {/* Flash Info */}
          <section className="mb-12 md:mb-16">
            <div className="glass-card rounded-xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <div className="text-4xl md:text-6xl glass-accent rounded-full p-3 md:p-4">⚡</div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-crisp-white">Traditional Flash Art</h2>
              <div className="space-y-4 md:space-y-6 text-crisp-white/90 leading-relaxed text-sm md:text-base">
                <p>
                  Browse our collection of 38+ original flash tattoo designs ready for inking. 
                  Classic American traditional flash art featuring bold lines, classic imagery, and timeless designs.
                </p>
                <p>
                  Flash designs include floral, gothic, animals, nautical themes, and other traditional motifs. 
                  Perfect for walk-ins or when you want a classic tattoo design without the wait.
                </p>
                <div className="glass-panel rounded-lg p-4 md:p-6 mt-4 md:mt-6">
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                    <div>
                      <p><strong className="text-gold">Pricing:</strong> $150-300 per piece</p>
                    </div>
                    <div>
                      <p><strong className="text-gold">Availability:</strong> Same day or next-day appointments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Flash Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Flash Tattoo Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flashFeatures.map((feature, index) => (
                <div key={index} className="glass-service rounded-lg p-6">
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white text-center">{feature.title}</h3>
                  <p className="text-crisp-white/80 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Flash Collection Preview */}
          <section className="mb-16">
            <div className="glass-testimonial rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-crisp-white">
                Traditional Flash Collection
              </h2>
              <p className="text-lg text-crisp-white/90 mb-8 max-w-3xl mx-auto">
                Our flash collection features hand-drawn traditional designs spanning classic American traditional themes. 
                Each piece is designed to be tattooed quickly while maintaining the highest quality standards.
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-sm text-crisp-white/80">
                <div className="glass-panel rounded-lg p-4">
                  <div className="text-2xl mb-2">🌹</div>
                  <strong>Floral</strong>
                  <p>Roses, wildflowers, botanical designs</p>
                </div>
                <div className="glass-panel rounded-lg p-4">
                  <div className="text-2xl mb-2">⚓</div>
                  <strong>Nautical</strong>
                  <p>Anchors, ships, sailor themes</p>
                </div>
                <div className="glass-panel rounded-lg p-4">
                  <div className="text-2xl mb-2">🦅</div>
                  <strong>Animals</strong>
                  <p>Eagles, panthers, serpents</p>
                </div>
                <div className="glass-panel rounded-lg p-4">
                  <div className="text-2xl mb-2">💀</div>
                  <strong>Gothic</strong>
                  <p>Skulls, daggers, crosses</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="glass-pricing rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-crisp-white">
                Ready for Flash Art?
              </h2>
              <p className="text-crisp-white/80 mb-8 text-lg">
                Contact us to see our full flash collection and book your session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="glass-button text-crisp-white px-8 py-4 rounded-lg font-semibold inline-block"
                >
                  View Flash Collection
                </Link>
                <Link 
                  href="/book-consultation"
                  className="glass-button-gold text-ink-black px-8 py-4 rounded-lg font-semibold inline-block"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}