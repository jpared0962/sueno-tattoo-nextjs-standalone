import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { getServiceBySlug } from '@/data/services'

const serviceSlug = 'fine-line'
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

export default function FineLineTattoosPage() {
  if (!service) {
    notFound()
  }

  const features = [
    'Delicate, thin lines and subtle shading',
    'Perfect for minimalist and intricate designs',
    'Ideal for small to medium-sized tattoos',
    'Clean, modern aesthetic',
    'Excellent for detailed botanical and geometric work'
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
                <span aria-current="page" className="text-crisp-white">Fine Line Tattoos</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Fine Line Tattoos in Laurel, MD
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Experience the art of delicate, detailed tattooing with Jose's fine line technique. 
              Perfect for minimalist designs and intricate artwork that requires precision and artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation" 
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Fine Line Consultation
              </Link>
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Call {businessInfo.contact.phone}
              </a>
            </div>
          </section>

          {/* What Makes Fine Line Special */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Makes Fine Line Tattoos Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Delicate Precision</h3>
                <p className="text-crisp-white/80">
                  Ultra-thin lines and subtle shading create elegant, refined artwork that's 
                  perfect for detailed designs and minimalist aesthetics.
                </p>
              </div>
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Intricate Detail</h3>
                <p className="text-crisp-white/80">
                  Perfect for botanical illustrations, geometric patterns, and detailed 
                  artwork that requires exceptional precision and technical skill.
                </p>
              </div>
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Modern Aesthetic</h3>
                <p className="text-crisp-white/80">
                  Clean, contemporary style that's ideal for first-time tattoo clients 
                  and those who prefer subtle, sophisticated body art.
                </p>
              </div>
            </div>
          </section>

          {/* Fine Line Portfolio */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Fine Line Tattoo Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-charcoal-gray/30 rounded-lg overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-ink-black/30">
                  <Image
                    src="/images/portfolio-optimized/IMG_2129-2.jpg" 
                    alt="Fine line tattoo by Jose - Delicate artwork"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-crisp-white mb-2">Delicate Fine Line</h3>
                  <p className="text-crisp-white/80 text-sm">Intricate fine line work with precise detail</p>
                </div>
              </div>
              <div className="bg-charcoal-gray/30 rounded-lg overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-ink-black/30">
                  <Image
                    src="/images/portfolio-optimized/IMG_2140-2.jpg" 
                    alt="Fine line tattoo by Jose - Minimalist design"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-crisp-white mb-2">Minimalist Art</h3>
                  <p className="text-crisp-white/80 text-sm">Clean, minimal fine line design</p>
                </div>
              </div>
              <div className="bg-charcoal-gray/30 rounded-lg overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-ink-black/30">
                  <Image
                    src="/images/portfolio-optimized/IMG_2116-2.jpg" 
                    alt="Fine line tattoo by Jose - Detailed linework"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-crisp-white mb-2">Detailed Linework</h3>
                  <p className="text-crisp-white/80 text-sm">Expert fine line technique and artistry</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/gallery"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View More Fine Line Work
              </Link>
            </div>
          </section>

          {/* Popular Fine Line Styles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Popular Fine Line Tattoo Styles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Botanical & Nature</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• Delicate flower illustrations</li>
                  <li>• Leaf and plant designs</li>
                  <li>• Minimalist nature scenes</li>
                  <li>• Botanical line art</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Geometric & Abstract</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• Clean geometric patterns</li>
                  <li>• Minimalist line work</li>
                  <li>• Abstract compositions</li>
                  <li>• Sacred geometry designs</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Script & Lettering</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• Elegant script fonts</li>
                  <li>• Minimalist text designs</li>
                  <li>• Single-line lettering</li>
                  <li>• Delicate calligraphy</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Portrait & Figurative</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• Fine line portraits</li>
                  <li>• Minimalist figure work</li>
                  <li>• Delicate facial features</li>
                  <li>• Artistic interpretations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Information */}
          <section className="mb-16">
            <div className="bg-charcoal-gray/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
                Fine Line Tattoo Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-charcoal-gray/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Small Fine Line</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$100-200</div>
                  <div className="text-crisp-white/80 text-sm mb-4">Up to 2 inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Simple line work</li>
                    <li>• 1-2 hour session</li>
                    <li>• Perfect for first tattoo</li>
                    <li>• Minimal aftercare</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-deep-red/10 border border-deep-red rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Medium Fine Line</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$200-350</div>
                  <div className="text-crisp-white/80 text-sm mb-4">2-4 inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Detailed artwork</li>
                    <li>• 2-3 hour session</li>
                    <li>• Intricate designs</li>
                    <li>• Professional consultation</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-charcoal-gray/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Large Fine Line</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$350+</div>
                  <div className="text-crisp-white/80 text-sm mb-4">4+ inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Complex compositions</li>
                    <li>• 3-4 hour sessions</li>
                    <li>• Custom design work</li>
                    <li>• Multiple consultations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Fine Line Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Fine Line Tattoo Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Design Consultation",
                  description: "We discuss your vision, preferred style, and placement. Fine line work requires careful planning to ensure the design translates well to skin.",
                  duration: "30 minutes"
                },
                {
                  step: "2",
                  title: "Artwork Creation",
                  description: "Custom design development focusing on clean lines and proper scaling. We ensure the design will age well and maintain its integrity.",
                  duration: "3-5 days"
                },
                {
                  step: "3",
                  title: "Stencil Application",
                  description: "Precise stencil placement and sizing adjustment. Fine line work requires exact positioning for optimal results.",
                  duration: "15-20 minutes"
                },
                {
                  step: "4",
                  title: "Tattooing Process",
                  description: "Careful, methodical tattooing using specialized fine line techniques. Each line is precisely placed with attention to detail.",
                  duration: "1-4 hours"
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

          {/* Fine Line Care */}
          <section className="mb-16">
            <div className="bg-charcoal-gray/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
                Fine Line Tattoo Care
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Immediate Care (First 2 weeks)</h3>
                  <ul className="space-y-2 text-crisp-white/80">
                    <li>• Keep tattoo clean and dry</li>
                    <li>• Apply thin layer of recommended ointment</li>
                    <li>• Avoid sun exposure and swimming</li>
                    <li>• Don't pick at scabs or peeling skin</li>
                    <li>• Wear loose, breathable clothing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Long-term Care</h3>
                  <ul className="space-y-2 text-crisp-white/80">
                    <li>• Use SPF 30+ sunscreen daily</li>
                    <li>• Moisturize regularly with unscented lotion</li>
                    <li>• Schedule touch-ups as needed</li>
                    <li>• Maintain healthy skin through good nutrition</li>
                    <li>• Avoid harsh chemicals and exfoliants</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Jose for Fine Line */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Why Choose Jose for Fine Line Tattoos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Precision Expertise</h3>
                    <p className="text-crisp-white/80">Specialized training in fine line techniques with attention to detail and technical precision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Gentle Approach</h3>
                    <p className="text-crisp-white/80">Careful, methodical technique that minimizes discomfort and ensures optimal healing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Custom Design Work</h3>
                    <p className="text-crisp-white/80">Every fine line tattoo is custom-designed to complement your body and personal style.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Quality Equipment</h3>
                    <p className="text-crisp-white/80">Professional-grade equipment specifically chosen for fine line work and detailed artwork.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Comprehensive Aftercare</h3>
                    <p className="text-crisp-white/80">Detailed aftercare instructions and follow-up support to ensure perfect healing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Satisfaction Guarantee</h3>
                    <p className="text-crisp-white/80">Free touch-ups within 6 months and commitment to your complete satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Fine Line Tattoo Client Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Sarah M. - Beltsville, MD</span>
                </div>
                <p className="text-crisp-white/80 mb-4">
                  "Jose's fine line work is absolutely incredible. My botanical tattoo is so delicate 
                  and beautiful - exactly what I envisioned. The precision and attention to detail 
                  is unmatched. Highly recommend!"
                </p>
                <div className="text-sm text-crisp-white/60">Fine line botanical design</div>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Alex T. - Laurel, MD</span>
                </div>
                <p className="text-crisp-white/80 mb-4">
                  "Perfect for my first tattoo! Jose made the whole process comfortable and the 
                  fine line style was exactly what I wanted. Clean, minimalist, and beautifully 
                  executed. Will definitely be back!"
                </p>
                <div className="text-sm text-crisp-white/60">Minimalist geometric design</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready for Your Fine Line Tattoo?
            </h2>
            <p className="text-crisp-white/80 mb-6">
              Book your free consultation to discuss your fine line tattoo vision. Let's create 
              something beautiful and delicate together.
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
                View Fine Line Work
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}