import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Flash Tattoos | Ready-to-Ink Flash Tattoo Designs | Traditional American Flash Art | Same-Day Tattoos | Jose | Sueno Tattoo Laurel, MD',
  description: 'Browse 38+ traditional flash tattoo designs ready for same-day inking. Classic American traditional flash art by professional artist Jose in Laurel, MD. Flash tattoos featuring bold lines, vibrant colors, and timeless designs. Walk-in friendly flash tattoo appointments available. Traditional flash sheets with roses, anchors, daggers, eagles, and classic motifs serving Prince George\'s County, Beltsville, College Park, Greenbelt, and DMV area.',
  keywords: [
    'flash tattoo art',
    'ready to tattoo designs',
    'traditional flash',
    'flash sheets',
    'same day tattoos',
    'walk in tattoos laurel md',
    'traditional american flash',
    'classic tattoo designs',
    'flash tattoos laurel md',
    'same-day flash tattoos',
    'traditional flash art',
    'flash tattoo designs',
    'ready-to-ink flash tattoos',
    'walk-in flash tattoos',
    'jose alvarado flash art',
    'flash tattoo sheets',
    'traditional american flash tattoos',
    'classic flash designs',
    'flash tattoo portfolio',
    'prince georges county flash tattoos',
    'beltsville flash tattoos',
    'college park flash tattoos',
    'greenbelt flash tattoos',
    'dmv flash tattoos'
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
      
      {/* Enhanced Schema Markup for Flash Tattoos */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Flash Tattoos | Ready-to-Ink Flash Tattoo Designs",
            "description": "Traditional American flash art ready for same-day inking. Browse 38+ original flash tattoo designs featuring classic imagery and timeless designs.",
            "url": "https://www.suenotattoo.com/flash",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sueno Tattoo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Laurel",
                "addressRegion": "MD",
                "addressCountry": "US"
              }
            },
            "serviceType": "Flash Tattoos",
            "category": "Tattoo Services",
            "priceRange": "$150-$300",
            "availableAtOrFrom": {
              "@type": "Place",
              "name": "Sueno Tattoo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Laurel",
                "addressRegion": "MD",
                "addressCountry": "US"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Flash Tattoo Designs",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Traditional American Flash Tattoos",
                    "description": "Classic American traditional flash art with bold lines and vibrant colors"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Same-Day Flash Tattoos",
                    "description": "Ready-to-ink flash tattoo designs available for walk-in appointments"
                  }
                }
              ]
            },
            "serviceAudience": {
              "@type": "Audience",
              "audienceType": "People interested in same-day tattoos and traditional flash art",
              "geographicArea": {
                "@type": "Place",
                "name": "Laurel, MD and DMV area"
              }
            }
          })
        }}
      />
      
      <div className="min-h-screen pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gold to-deep-red bg-clip-text text-transparent">
              Flash Tattoos | Ready-to-Ink Flash Tattoo Designs
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-crisp-white/90 mb-6 md:mb-8">
              Traditional American flash art ready for same-day inking by Jose
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-crisp-white/80 mb-6">
                Browse our collection of 38+ original flash tattoo designs featuring classic American traditional flash art. 
                Perfect for walk-in appointments and same-day tattoos in Laurel, MD serving Prince George's County and the DMV area.
              </p>
            </div>
          </section>

          {/* Flash Info */}
          <section className="mb-12 md:mb-16">
            <div className="glass-card rounded-xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <div className="text-4xl md:text-6xl glass-accent rounded-full p-3 md:p-4">⚡</div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-crisp-white">Traditional American Flash Art | Same-Day Flash Tattoos</h2>
              <div className="space-y-4 md:space-y-6 text-crisp-white/90 leading-relaxed text-sm md:text-base">
                <p>
                  Browse our collection of 38+ original flash tattoo designs ready for same-day inking by Jose. 
                  Our traditional American flash art features bold lines, classic imagery, and timeless designs perfect for walk-in appointments.
                </p>
                <p>
                  Flash tattoo designs include floral, gothic, animals, nautical themes, and other traditional motifs. 
                  Perfect for walk-in clients or when you want a classic flash tattoo design without the wait. 
                  Each flash tattoo is hand-drawn using authentic traditional American flash art techniques.
                </p>
                <p>
                  Our flash tattoo collection showcases ready-to-ink designs that can be completed in a single session, 
                  making them ideal for same-day tattoos and walk-in appointments in Laurel, MD.
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
              Flash Tattoo Features | Why Choose Flash Tattoos
            </h2>
            <p className="text-center text-crisp-white/90 max-w-2xl mx-auto mb-8">
              Flash tattoos offer the perfect solution for same-day tattoos and walk-in appointments. 
              Discover the benefits of choosing traditional American flash art for your next tattoo.
            </p>
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
              Available Flash Tattoo Sheets | Ready-to-Ink Flash Designs
            </h2>
            <p className="text-center text-crisp-white/90 max-w-2xl mx-auto mb-8">
              Browse our complete collection of flash tattoo designs available for same-day inking. 
              Each traditional American flash tattoo is hand-drawn by Jose and ready for immediate application.
            </p>
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
              ].map((flash) => (
                <div key={flash.src} className="glass-card rounded-lg overflow-hidden group cursor-pointer">
                  <div className="relative w-full h-0 pb-[100%]">
                    <Image
                      src={flash.src}
                      alt={flash.alt}
                      fill
                      className="absolute inset-0 object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
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
                Flash Tattoo Collection Categories | Traditional American Flash Art Themes
              </h2>
              <p className="text-lg text-crisp-white/90 mb-8 max-w-3xl mx-auto">
                Our flash tattoo collection features hand-drawn traditional designs spanning classic American traditional themes. 
                Each flash tattoo piece is designed to be tattooed quickly while maintaining the highest quality standards. 
                Perfect for same-day tattoos and walk-in appointments in Laurel, MD.
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