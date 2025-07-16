import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { getServiceBySlug } from '@/data/services'

const serviceSlug = 'traditional'
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

export default function TraditionalTattoosPage() {
  if (!service) {
    notFound()
  }

  const features = [
    'Classic bold lines and vibrant colors',
    'Traditional imagery: roses, eagles, anchors, daggers',
    'Time-tested designs that age beautifully',
    'Proper traditional color palette',
    'Authentic old-school techniques'
  ]

  return (
    <>
      {/* Schema Markup */}
      <TattooServiceSchema
        serviceName={service.name}
        description={service.description}
        priceRange={service.priceRange}
        duration={service.duration}
        keywords={service.seoKeywords}
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
                <span aria-current="page" className="text-crisp-white">{service.name}</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              {service.name} in Laurel, MD
            </h1>
            <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto">
              {service.description}
            </p>
          </header>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-crisp-white">Service Details</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-crisp-white/80">Price Range:</span>
                  <span className="text-gold font-semibold">
                    ${service.priceRange.min}-${service.priceRange.max}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-crisp-white/80">Duration:</span>
                  <span className="text-crisp-white">
                    {Math.floor(service.duration.min / 60)}-{Math.floor(service.duration.max / 60)} hours
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-crisp-white/80">Category:</span>
                  <span className="text-crisp-white capitalize">{service.category}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-crisp-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-crisp-white/90">
                    <div className="w-2 h-2 bg-gradient-to-r from-gold to-deep-red rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-crisp-white">Why Choose Traditional Style?</h2>
              
              <div className="space-y-4 text-crisp-white/90">
                <p>
                  Traditional American tattoos represent the roots of modern tattooing culture. 
                  These designs have stood the test of time for nearly a century, featuring 
                  bold outlines, solid colors, and iconic imagery.
                </p>
                
                <p>
                  Our approach honors the classic techniques while ensuring each piece is 
                  executed with modern precision and safety standards. Whether you're looking 
                  for a classic rose, eagle, or anchor, we create traditional tattoos that 
                  will age beautifully and maintain their impact for decades.
                </p>

                <h3 className="text-lg font-semibold text-crisp-white mt-6 mb-3">Popular Traditional Designs</h3>
                <ul className="space-y-2">
                  <li>• Classic roses with thorns and leaves</li>
                  <li>• American eagles and patriotic imagery</li>
                  <li>• Nautical themes: anchors, ships, compasses</li>
                  <li>• Pin-up girls and vintage portraits</li>
                  <li>• Daggers, skulls, and bold typography</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Portfolio Gallery */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
              Traditional Tattoo Portfolio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { 
                  src: '/images/gallery-optimized/DSC02447.jpg',
                  alt: 'Traditional American tattoo with cartoon characters - Laurel MD',
                  title: 'Classic Cartoon Style'
                },
                { 
                  src: '/images/gallery-optimized/DSC03838.jpg',
                  alt: 'Traditional hot air balloon with hearts tattoo - Laurel MD',
                  title: 'Traditional Hot Air Balloon'
                },
                { 
                  src: '/images/gallery-optimized/DSC03892.jpg',
                  alt: 'Traditional peony flowers with script tattoo - Laurel MD',
                  title: 'Traditional Peony Script'
                },
                { 
                  src: '/images/portfolio-optimized/IMG_2147-2.jpg',
                  alt: 'Traditional American eagle chest piece tattoo - Laurel MD',
                  title: 'Classic American Eagle'
                },
                { 
                  src: '/images/gallery-optimized/DSC04008.jpg',
                  alt: 'Traditional daisy memorial banner tattoo - Laurel MD',
                  title: 'Memorial Banner Design'
                }
              ].map((image, index) => (
                <div key={index} className="glass-card rounded-lg overflow-hidden group">
                  <div className="relative w-full h-80 bg-ink-black/30">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="absolute inset-0 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <h3 className="text-crisp-white font-semibold text-center px-4">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="glass-panel p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
              Traditional Tattoo Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Design Selection',
                  description: 'Choose from classic flash designs or work with us to create a custom traditional piece'
                },
                {
                  step: '2',
                  title: 'Artist Preparation',
                  description: 'We prepare stencils and set up with traditional color palettes and proper line weights'
                },
                {
                  step: '3',
                  title: 'Professional Application',
                  description: 'Expert application using time-tested techniques for bold, lasting results'
                }
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-crisp-white font-bold text-xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-crisp-white mb-2">{phase.title}</h3>
                  <p className="text-crisp-white/80">{phase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center glass-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready for Your Traditional Tattoo?
            </h2>
            <p className="text-crisp-white/90 mb-8">
              Book a free consultation to discuss your traditional tattoo ideas. 
              View our <Link href="/gallery" className="text-gold hover:underline">portfolio</Link> to 
              see examples of our traditional work.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/book-consultation"
                className="glass-button text-crisp-white px-8 py-4 rounded-lg font-semibold"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/gallery"
                className="glass-button-gold text-ink-black px-8 py-4 rounded-lg font-semibold"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}