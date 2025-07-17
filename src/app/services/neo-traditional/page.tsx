import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { getServiceBySlug } from '@/data/services'

const serviceSlug = 'neo-traditional'
const service = getServiceBySlug(serviceSlug)

if (!service) {
  notFound()
}

export const metadata: Metadata = generateSEOMetadata({
  title: `${service.name} | Professional Tattoo Services`,
  description: `${service.description} Expert ${service.name.toLowerCase()} in Laurel, MD. Modern twist on traditional styles with enhanced color palettes. Call (240) 758-3226 to book consultation.`,
  keywords: service.seoKeywords,
  url: `/services/${service.slug}`,
})

export default function NeoTraditionalPage() {
  if (!service) {
    notFound()
  }

  const features = [
    'Enhanced color palettes beyond traditional limitations',
    'Detailed shading and dimensional effects',
    'Contemporary themes with traditional foundations',
    'Larger scale compositions',
    'Artistic freedom within traditional framework',
    'Bold outlines with intricate internal details',
    'Modern interpretations of classic motifs',
    'Personalized symbolic elements'
  ]

  const neoTraditionalStyles = [
    { name: 'Nature Neo-Traditional', description: 'Flora and fauna with enhanced realism and color' },
    { name: 'Portrait Neo-Traditional', description: 'Stylized portraits with traditional elements' },
    { name: 'Geometric Neo-Traditional', description: 'Traditional imagery with geometric patterns' },
    { name: 'Abstract Neo-Traditional', description: 'Artistic interpretation of traditional themes' },
    { name: 'Cultural Neo-Traditional', description: 'Traditional designs with cultural significance' },
    { name: 'Fantasy Neo-Traditional', description: 'Mythical creatures and fantasy elements' }
  ]

  const designElements = [
    { element: 'Bold Outlines', description: 'Maintains traditional tattoo readability' },
    { element: 'Enhanced Color', description: 'Expanded palette beyond traditional constraints' },
    { element: 'Detailed Shading', description: 'Dimensional effects and gradient work' },
    { element: 'Contemporary Themes', description: 'Modern subjects with traditional techniques' },
    { element: 'Artistic Freedom', description: 'Creative interpretation within style boundaries' },
    { element: 'Scale Flexibility', description: 'Adaptable to various tattoo sizes' }
  ]

  const pricingInfo = [
    { size: 'Small Neo-Traditional', dimension: '2-4 inches', price: '$150-250', time: '2-3 hours' },
    { size: 'Medium Neo-Traditional', dimension: '4-7 inches', price: '$250-400', time: '3-5 hours' },
    { size: 'Large Neo-Traditional', dimension: '7+ inches', price: '$400-600', time: '5-8 hours' }
  ]

  return (
    <>
      <TattooServiceSchema 
        serviceName={service.name}
        description={service.description}
        priceRange={service.priceRange}
      />
      
      <div className="min-h-screen pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
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
                <span aria-current="page" className="text-crisp-white">Neo-Traditional</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gold to-deep-red bg-clip-text text-transparent">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-crisp-white/90 mb-6 md:mb-8">
              Modern evolution of traditional tattoo artistry
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-crisp-white/80 mb-6">
                {service.description} Neo-traditional style combines the bold foundations of traditional tattooing with contemporary artistic freedom, enhanced color palettes, and detailed shading techniques.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/gallery"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Portfolio
              </Link>
              <Link 
                href="/book-consultation"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </section>

          {/* Service Features */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Neo-Traditional Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="text-gold mr-3 mt-1">✓</div>
                    <p className="text-crisp-white">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Neo-Traditional Styles */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Neo-Traditional Specializations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neoTraditionalStyles.map((style, index) => (
                <div key={index} className="glass-service rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{style.name}</h3>
                  <p className="text-crisp-white/80">{style.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Design Elements */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Key Design Elements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designElements.map((element, index) => (
                <div key={index} className="glass-accent rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gold">{element.element}</h3>
                  <p className="text-crisp-white/80">{element.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Neo-Traditional Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingInfo.map((tier, index) => (
                <div key={index} className="glass-pricing rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{tier.size}</h3>
                  <div className="text-3xl font-bold text-gold mb-2">{tier.price}</div>
                  <div className="text-crisp-white/80 mb-2">{tier.dimension}</div>
                  <div className="text-crisp-white/60 text-sm">{tier.time}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-crisp-white/80 text-sm">
                Pricing includes consultation, design development, and aftercare instructions.
                <Link href="/aftercare" className="text-gold hover:underline ml-1">
                  Learn about aftercare →
                </Link>
              </p>
            </div>
          </section>

          {/* Process */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Neo-Traditional Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Style Consultation', description: 'Discuss neo-traditional approach for your concept' },
                { step: '2', title: 'Design Development', description: 'Create detailed artwork with enhanced elements' },
                { step: '3', title: 'Refinement', description: 'Perfect colors, shading, and composition' },
                { step: '4', title: 'Professional Execution', description: 'Expert tattooing with precision techniques' }
              ].map((step, index) => (
                <div key={index} className="glass-accent rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-gold mb-3">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-2 text-crisp-white">{step.title}</h3>
                  <p className="text-crisp-white/80 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-crisp-white">
                Ready for Neo-Traditional Art?
              </h2>
              <p className="text-crisp-white/80 mb-8">
                Let's create a unique neo-traditional piece that combines traditional foundations with modern artistic vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/book-consultation"
                  className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Book Consultation
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}