import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata, commonSEOData } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { SEOLayout } from '@/components/Layout/SEOLayout'

export const metadata: Metadata = generateSEOMetadata({
  ...commonSEOData.services,
  title: `Watercolor Tattoos Laurel MD | Artistic Color Tattoos | Jose`,
  description: `Vibrant watercolor tattoos in Laurel, MD. Artistic brush stroke effects, fluid colors, and unique watercolor tattoo designs. Licensed professional with 8+ years experience. Call ${businessInfo.contact.phone}`,
  keywords: [
    'watercolor tattoos laurel md',
    'artistic tattoos maryland',
    'colorful tattoos laurel',
    'watercolor tattoo artist',
    'artistic tattoo services',
    'vibrant color tattoos',
    'fluid watercolor designs',
    'abstract watercolor tattoos',
    'watercolor sleeve tattoos',
    'artistic forearm tattoos',
    'watercolor back tattoos',
    'artistic chest tattoos',
    'watercolor small tattoos',
    'artistic large tattoos'
  ],
  url: '/services/watercolor-tattoos',
})

export default function WatercolorTattoos() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Watercolor Tattoos' }
  ]

  return (
    <>
      <TattooServiceSchema
        serviceName="Watercolor Tattoos"
        description="Vibrant watercolor-style tattoos with fluid colors and artistic brush stroke effects. Perfect for nature and abstract designs."
        priceRange={{ min: 200, max: 600 }}
        duration={{ min: 150, max: 420 }}
        keywords={['watercolor tattoos', 'artistic tattoos', 'colorful tattoos', 'watercolor tattoo services']}
      />

      <SEOLayout 
        breadcrumbs={breadcrumbs}
        showCTA={true}
        ctaVariant="services"
        ctaTitle="Ready for Your Watercolor Tattoo?"
        ctaDescription="Book your free consultation to discuss your watercolor tattoo design ideas."
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
            Watercolor Tattoos in Laurel, MD | Artistic Color Tattoo Designs
          </h1>
          <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto mb-8">
            Experience the beauty of watercolor tattoos with fluid colors, artistic brush stroke effects, 
            and unique designs that look like paintings on your skin. Our Maryland tattoo artist specializes 
            in vibrant watercolor techniques perfect for nature, abstract, and artistic designs.
          </p>
        </div>

        {/* Service Details */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-crisp-white mb-6">
                Watercolor Tattoo Artistry
              </h2>
              <div className="space-y-4 text-crisp-white/90">
                <p>
                  Watercolor tattoos bring a unique artistic flair to body art, mimicking the fluid, 
                  translucent qualities of watercolor paintings. Our skilled DMV tattoo artist creates 
                  stunning watercolor effects using specialized techniques and premium inks.
                </p>
                <p>
                  Perfect for clients who want something truly artistic and eye-catching, watercolor 
                  tattoos work beautifully for floral designs, landscapes, abstract art, and nature scenes.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-crisp-white mt-8 mb-4">
                Watercolor Tattoo Features
              </h3>
              <ul className="space-y-2 text-crisp-white/90">
                <li>• Vibrant, fluid color transitions</li>
                <li>• Artistic brush stroke effects</li>
                <li>• No heavy black outlines (optional light outlines)</li>
                <li>• Perfect for nature and abstract designs</li>
                <li>• Custom artistic consultation included</li>
                <li>• Premium watercolor-effect inks</li>
                <li>• Detailed aftercare for color preservation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-crisp-white mb-4">
                Popular Watercolor Tattoo Styles
              </h3>
              <div className="grid gap-4">
                <div className="glass-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Floral Watercolor</h4>
                  <p className="text-sm text-crisp-white/80">
                    Flowers with soft, flowing colors and natural brush stroke effects
                  </p>
                </div>
                <div className="glass-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Abstract Watercolor</h4>
                  <p className="text-sm text-crisp-white/80">
                    Artistic splashes, geometric shapes, and free-flowing color designs
                  </p>
                </div>
                <div className="glass-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Nature Scenes</h4>
                  <p className="text-sm text-crisp-white/80">
                    Landscapes, animals, and natural elements with watercolor effects
                  </p>
                </div>
                <div className="glass-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Portrait Watercolor</h4>
                  <p className="text-sm text-crisp-white/80">
                    Artistic portraits with soft, painted backgrounds and color washes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Process */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-bold text-crisp-white mb-4">
              Watercolor Tattoo Pricing
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-crisp-white/10">
                <span className="text-crisp-white/90">Small Watercolor (2-4 inches)</span>
                <span className="text-gold font-semibold">$200-300</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-crisp-white/10">
                <span className="text-crisp-white/90">Medium Watercolor (4-8 inches)</span>
                <span className="text-gold font-semibold">$300-450</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-crisp-white/10">
                <span className="text-crisp-white/90">Large Watercolor (8+ inches)</span>
                <span className="text-gold font-semibold">$450-600+</span>
              </div>
            </div>
            <p className="text-sm text-crisp-white/70 mt-4">
              * Pricing depends on complexity, size, and color saturation. Free consultation included.
            </p>
          </div>

          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-bold text-crisp-white mb-4">
              Watercolor Tattoo Process
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-ink-black">1</div>
                <div>
                  <h4 className="font-semibold text-crisp-white">Artistic Consultation</h4>
                  <p className="text-sm text-crisp-white/80">Discuss watercolor concepts and design ideas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-ink-black">2</div>
                <div>
                  <h4 className="font-semibold text-crisp-white">Custom Design Creation</h4>
                  <p className="text-sm text-crisp-white/80">Create unique watercolor artwork for your tattoo</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-ink-black">3</div>
                <div>
                  <h4 className="font-semibold text-crisp-white">Professional Application</h4>
                  <p className="text-sm text-crisp-white/80">Expert watercolor tattooing with premium inks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-ink-black">4</div>
                <div>
                  <h4 className="font-semibold text-crisp-white">Color Care Guidance</h4>
                  <p className="text-sm text-crisp-white/80">Specialized aftercare for vibrant color preservation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
            Why Choose Our Watercolor Tattoo Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-crisp-white mb-3">Artistic Expertise</h3>
              <p className="text-crisp-white/80 text-sm">
                Specialized training in watercolor tattoo techniques and color theory
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="text-lg font-semibold text-crisp-white mb-3">Premium Inks</h3>
              <p className="text-crisp-white/80 text-sm">
                High-quality inks that maintain vibrancy and create authentic watercolor effects
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-crisp-white mb-3">Proven Results</h3>
              <p className="text-crisp-white/80 text-sm">
                8+ years of experience creating stunning watercolor tattoos in the DMV area
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-crisp-white mb-4">
            Ready for Your Watercolor Tattoo?
          </h2>
          <p className="text-crisp-white/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your watercolor tattoo ideas and see how we can 
            bring your artistic vision to life with vibrant, flowing colors.
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Link 
              href="/book-consultation"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              aria-label="Book consultation for watercolor tattoo"
            >
              Book Free Consultation
            </Link>
            <Link 
              href={`tel:${businessInfo.contact.phone}`}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal-gray px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              aria-label={`Call Jose at ${businessInfo.contact.phone}`}
            >
              Call Now
            </Link>
          </div>
        </div>
      </SEOLayout>
    </>
  )
}
