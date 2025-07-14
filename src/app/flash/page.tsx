import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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

          {/* Flash Sheets Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
              Available Flash Sheets
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: '/images/drawings-optimized/Anker.jpg', alt: 'Anchor flash tattoo design - Laurel MD', title: 'Anchor Design' },
                { src: '/images/drawings-optimized/Bat-and-flower.jpg', alt: 'Bat and flower flash tattoo - Laurel MD', title: 'Bat & Flower' },
                { src: '/images/drawings-optimized/Bird.jpg', alt: 'Bird flash tattoo design - Laurel MD', title: 'Bird Design' },
                { src: '/images/drawings-optimized/Bow.jpg', alt: 'Bow flash tattoo design - Laurel MD', title: 'Bow Design' },
                { src: '/images/drawings-optimized/Cat.jpg', alt: 'Cat flash tattoo design - Laurel MD', title: 'Cat Design' },
                { src: '/images/drawings-optimized/Fish.jpg', alt: 'Fish flash tattoo design - Laurel MD', title: 'Fish Design' },
                { src: '/images/drawings-optimized/Flower-23.jpg', alt: 'Flower flash tattoo design 23 - Laurel MD', title: 'Flower 23' },
                { src: '/images/drawings-optimized/Flower-24.jpg', alt: 'Flower flash tattoo design 24 - Laurel MD', title: 'Flower 24' },
                { src: '/images/drawings-optimized/Flower-25.jpg', alt: 'Flower flash tattoo design 25 - Laurel MD', title: 'Flower 25' },
                { src: '/images/drawings-optimized/Flower-Snake.jpg', alt: 'Flower snake flash tattoo - Laurel MD', title: 'Flower Snake' },
                { src: '/images/drawings-optimized/Flower-Snake-2.jpg', alt: 'Flower snake flash tattoo 2 - Laurel MD', title: 'Flower Snake 2' },
                { src: '/images/drawings-optimized/Flower-with-stars.jpg', alt: 'Flower with stars flash tattoo - Laurel MD', title: 'Flower & Stars' },
                { src: '/images/drawings-optimized/Flower27.jpg', alt: 'Flower flash tattoo design 27 - Laurel MD', title: 'Flower 27' },
                { src: '/images/drawings-optimized/Frog-23.jpg', alt: 'Frog flash tattoo design 23 - Laurel MD', title: 'Frog 23' },
                { src: '/images/drawings-optimized/Frog.jpg', alt: 'Frog flash tattoo design - Laurel MD', title: 'Frog Design' },
                { src: '/images/drawings-optimized/Fruit.jpg', alt: 'Fruit flash tattoo design - Laurel MD', title: 'Fruit Design' },
                { src: '/images/drawings-optimized/Hat.jpg', alt: 'Hat flash tattoo design - Laurel MD', title: 'Hat Design' },
                { src: '/images/drawings-optimized/Heart-2.jpg', alt: 'Heart flash tattoo design 2 - Laurel MD', title: 'Heart 2' },
                { src: '/images/drawings-optimized/Heart-Puzzle.jpg', alt: 'Heart puzzle flash tattoo - Laurel MD', title: 'Heart Puzzle' },
                { src: '/images/drawings-optimized/Heart.jpg', alt: 'Heart flash tattoo design - Laurel MD', title: 'Heart Design' },
                { src: '/images/drawings-optimized/Insect-1.jpg', alt: 'Insect flash tattoo design 1 - Laurel MD', title: 'Insect 1' },
                { src: '/images/drawings-optimized/Insect-2.jpg', alt: 'Insect flash tattoo design 2 - Laurel MD', title: 'Insect 2' },
                { src: '/images/drawings-optimized/Pod-23.jpg', alt: 'Pod flash tattoo design 23 - Laurel MD', title: 'Pod 23' },
                { src: '/images/drawings-optimized/Rabbit.jpg', alt: 'Rabbit flash tattoo design - Laurel MD', title: 'Rabbit Design' },
                { src: '/images/drawings-optimized/Sea-.jpg', alt: 'Sea flash tattoo design - Laurel MD', title: 'Sea Design' },
                { src: '/images/drawings-optimized/Sea-65.jpg', alt: 'Sea flash tattoo design 65 - Laurel MD', title: 'Sea 65' },
                { src: '/images/drawings-optimized/Skull-Book.jpg', alt: 'Skull book flash tattoo - Laurel MD', title: 'Skull Book' },
                { src: '/images/drawings-optimized/Skull-Flower.jpg', alt: 'Skull flower flash tattoo - Laurel MD', title: 'Skull Flower' },
                { src: '/images/drawings-optimized/Skull-surrounded-by-flower.jpg', alt: 'Skull surrounded by flowers flash tattoo - Laurel MD', title: 'Skull & Flowers' },
                { src: '/images/drawings-optimized/Skull-though-flower.jpg', alt: 'Skull through flower flash tattoo - Laurel MD', title: 'Skull Through Flower' },
                { src: '/images/drawings-optimized/Soup-Skull.jpg', alt: 'Soup skull flash tattoo - Laurel MD', title: 'Soup Skull' },
                { src: '/images/drawings-optimized/Travel.jpg', alt: 'Travel flash tattoo design - Laurel MD', title: 'Travel Design' },
              ].map((flash, index) => (
                <div key={flash.src} className="glass-card rounded-lg overflow-hidden group cursor-pointer">
                  <div className="relative aspect-square">
                    <Image
                      src={flash.src}
                      alt={flash.alt}
                      fill
                      className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-crisp-white">
                        <h3 className="font-semibold text-sm mb-1">{flash.title}</h3>
                        <p className="text-xs text-gold">Click to inquire</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Flash Collection Categories */}
          <section className="mb-16">
            <div className="glass-testimonial rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-crisp-white">
                Flash Collection Categories
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