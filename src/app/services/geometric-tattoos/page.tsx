import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { getServiceBySlug } from '@/data/services'

const serviceSlug = 'geometric-tattoos'
const service = getServiceBySlug(serviceSlug)

if (!service) {
  notFound()
}

export const metadata: Metadata = generateSEOMetadata({
  title: `${service.name} | Professional Tattoo Services | ${businessInfo.name}`,
  description: `${service.description} Expert ${service.name.toLowerCase()} in Laurel, MD. ${businessInfo.artist.experience} experience. Call ${businessInfo.contact.phone} to book consultation.`,
  keywords: service.seoKeywords,
  url: `/services/${service.slug}`,
})

export default function GeometricTattoosPage() {
  if (!service) {
    notFound()
  }

  const features = [
    'Precise geometric patterns and symmetrical designs',
    'Sacred geometry and mandala compositions',
    'Contemporary geometric art and abstract patterns',
    'Mathematical precision with artistic flair',
    'Perfect for both minimalist and complex designs'
  ]

  return (
    <>
      {/* Schema Markup */}
      <TattooServiceSchema
        serviceName={service.name}
        description={service.description}
        priceRange={service.priceRange}
      />

      <div className="min-h-screen pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex space-x-2 text-sm text-crisp-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="before:content-['/'] before:mr-2">
                <Link href="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li className="before:content-['/'] before:mr-2">
                <span aria-current="page" className="text-crisp-white">Geometric Tattoos</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Geometric Tattoos in Laurel, MD
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Discover the perfect balance of mathematical precision and artistic beauty with Jose's geometric tattoo designs. 
              From sacred geometry to contemporary patterns, each piece is crafted with meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation" 
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Geometric Consultation
              </Link>
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Call {businessInfo.contact.phone}
              </a>
            </div>
          </section>

          {/* What Makes Geometric Tattoos Special */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Makes Geometric Tattoos Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Mathematical Precision</h3>
                <p className="text-crisp-white/80">
                  Every line, angle, and curve is precisely calculated to create perfect symmetry 
                  and balance in your geometric tattoo design.
                </p>
              </div>
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Sacred Geometry</h3>
                <p className="text-crisp-white/80">
                  Explore ancient patterns and sacred symbols that have held meaning across 
                  cultures, from mandalas to the flower of life.
                </p>
              </div>
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Versatile Design</h3>
                <p className="text-crisp-white/80">
                  Perfect for both minimalist single elements and complex full-sleeve 
                  compositions that flow with your body's natural contours.
                </p>
              </div>
            </div>
          </section>

          {/* Popular Geometric Styles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Popular Geometric Tattoo Styles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Sacred Geometry</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• Mandala designs and circular patterns</li>
                  <li>• Flower of life and Metatron's cube</li>
                  <li>• Fibonacci spirals and golden ratio</li>
                  <li>• Sacred triangles and pentagons</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Contemporary Patterns</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• Linear geometric compositions</li>
                  <li>• Abstract polygon designs</li>
                  <li>• Tessellations and repeating motifs</li>
                  <li>• Modern minimalist geometry</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Nature-Inspired Geometry</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• Geometric animals and portraits</li>
                  <li>• Crystalline and mineral patterns</li>
                  <li>• Botanical geometric combinations</li>
                  <li>• Organic shapes with geometric frames</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">3D & Optical Effects</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• Dimensional cube and sphere designs</li>
                  <li>• Optical illusion patterns</li>
                  <li>• Perspective and depth effects</li>
                  <li>• Shading for geometric dimension</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Information */}
          <section className="mb-16">
            <div className="bg-charcoal-gray/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
                Geometric Tattoo Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-charcoal-gray/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Simple Geometric</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$150-250</div>
                  <div className="text-crisp-white/80 text-sm mb-4">Up to 3 inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Basic geometric shapes</li>
                    <li>• 1-2 hour session</li>
                    <li>• Perfect for first geometric tattoo</li>
                    <li>• Clean, minimal design</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-deep-red/10 border border-deep-red rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Detailed Geometric</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$250-400</div>
                  <div className="text-crisp-white/80 text-sm mb-4">3-6 inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Mandala and sacred geometry</li>
                    <li>• 2-3 hour session</li>
                    <li>• Intricate pattern work</li>
                    <li>• Professional consultation</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-charcoal-gray/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Complex Geometric</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$400+</div>
                  <div className="text-crisp-white/80 text-sm mb-4">6+ inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Full sleeve compositions</li>
                    <li>• 3-6 hour sessions</li>
                    <li>• Custom geometric art</li>
                    <li>• Multiple consultations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Geometric Tattoo Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Geometric Tattoo Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Concept & Planning",
                  description: "We discuss your geometric vision, explore sacred geometry meanings, and plan the mathematical structure of your design.",
                  duration: "30-45 minutes"
                },
                {
                  step: "2",
                  title: "Geometric Design",
                  description: "Using precise mathematical tools, we create your geometric pattern with perfect symmetry and proportional balance.",
                  duration: "2-5 days"
                },
                {
                  step: "3",
                  title: "Precision Stenciling",
                  description: "Exact placement and measurement ensure your geometric tattoo aligns perfectly with your body's natural lines.",
                  duration: "20-30 minutes"
                },
                {
                  step: "4",
                  title: "Detailed Execution",
                  description: "Methodical tattooing with attention to line weight, angles, and spacing to achieve perfect geometric precision.",
                  duration: "2-6 hours"
                }
              ].map((phase, index) => (
                <div key={index} className="bg-charcoal-gray/20 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-crisp-white font-bold text-xl flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-crisp-white">{phase.title}</h3>
                      <p className="text-crisp-white/80 mb-4">{phase.description}</p>
                      <span className="bg-charcoal-gray/50 px-3 py-1 rounded text-crisp-white/70 text-sm">
                        Duration: {phase.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Geometric Tattoo Care */}
          <section className="mb-16">
            <div className="bg-charcoal-gray/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
                Geometric Tattoo Care
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Healing Process (First 3 weeks)</h3>
                  <ul className="space-y-2 text-crisp-white/80">
                    <li>• Keep geometric lines clean and straight</li>
                    <li>• Avoid stretching the tattooed area</li>
                    <li>• Apply recommended healing products</li>
                    <li>• Protect from sun exposure</li>
                    <li>• Avoid swimming and soaking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Long-term Maintenance</h3>
                  <ul className="space-y-2 text-crisp-white/80">
                    <li>• Use high SPF sunscreen daily</li>
                    <li>• Moisturize to maintain line crispness</li>
                    <li>• Schedule touch-ups for line sharpness</li>
                    <li>• Maintain healthy skin for pattern clarity</li>
                    <li>• Avoid harsh exfoliants on geometric areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Jose for Geometric Work */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Why Choose Jose for Geometric Tattoos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Mathematical Precision</h3>
                    <p className="text-crisp-white/80">Expert understanding of geometric principles and sacred geometry meanings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Technical Excellence</h3>
                    <p className="text-crisp-white/80">Steady hand and meticulous attention to detail for perfect line work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Custom Geometric Art</h3>
                    <p className="text-crisp-white/80">Original geometric designs created specifically for your body and vision.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Specialized Equipment</h3>
                    <p className="text-crisp-white/80">Professional-grade tools specifically chosen for precise geometric work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Pattern Expertise</h3>
                    <p className="text-crisp-white/80">Deep knowledge of how geometric patterns flow with body movement and anatomy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Lifetime Touch-ups</h3>
                    <p className="text-crisp-white/80">Free touch-ups within 6 months to ensure your geometric lines stay sharp.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Geometric Tattoo Client Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Michael R. - Greenbelt, MD</span>
                </div>
                <p className="text-crisp-white/80 mb-4">
                  "Jose's geometric work is absolutely perfect. Every line is precise, every 
                  angle is exact. My mandala sleeve is a masterpiece that gets compliments 
                  everywhere I go. True geometric artistry!"
                </p>
                <div className="text-sm text-crisp-white/60">Sacred geometry mandala sleeve</div>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Jessica L. - College Park, MD</span>
                </div>
                <p className="text-crisp-white/80 mb-4">
                  "I wanted something mathematical and meaningful. Jose created a beautiful 
                  geometric pattern that incorporates the golden ratio. The precision is 
                  incredible and the symbolism is perfect!"
                </p>
                <div className="text-sm text-crisp-white/60">Golden ratio geometric design</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready for Your Geometric Tattoo?
            </h2>
            <p className="text-crisp-white/80 mb-6">
              Book your free consultation to explore geometric tattoo possibilities. Let's create 
              something mathematically beautiful and personally meaningful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/gallery"
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                View Geometric Work
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}