import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { getServiceBySlug } from '@/data/services'

const serviceSlug = 'cover-ups'
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

export default function CoverUpTattoosPage() {
  if (!service) {
    notFound()
  }

  const features = [
    'Expert cover-up design and planning',
    'Creative design solutions for challenging pieces',
    'Color correction and enhancement techniques',
    'Seamless integration with existing work',
    'Before/after documentation and guidance'
  ]

  return (
    <>
      {/* Schema Markup */}
      <TattooServiceSchema
        serviceName={service.name}
        description={service.description}
        priceRange={service.priceRange}
      />

      {/* Voice Search FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can any tattoo be covered up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most tattoos can be covered up successfully! The key factors are the size, darkness, and density of the existing tattoo. Very dark, large, or densely packed tattoos may require laser lightening first, but we can cover the majority of unwanted tattoos with creative design solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to cover up a tattoo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cover-up tattoos typically cost 20-50% more than regular tattoos due to the complexity and design work required. Pricing depends on the existing tattoo size and the new design complexity. We provide detailed quotes during your free consultation."
                }
              },
              {
                "@type": "Question",
                "name": "Will you be able to see my old tattoo after the cover-up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When done properly, a cover-up tattoo should completely conceal the original tattoo. We use strategic design placement, darker colors, and expert techniques to ensure the old tattoo is not visible through the new artwork."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a cover-up tattoo take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cover-up tattoos often require multiple sessions and take longer than regular tattoos due to the complexity. Simple cover-ups may take 2-4 hours, while complex pieces can require 6-12 hours across multiple appointments."
                }
              },
              {
                "@type": "Question",
                "name": "What should I bring to a cover-up consultation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bring photos of your existing tattoo from multiple angles, any reference images for your desired new design, and be prepared to discuss why you want the cover-up. This helps us create the best possible solution for your specific situation."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to wait before getting a cover-up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If your existing tattoo is fully healed (at least 4-6 weeks old), we can start the cover-up process immediately. Fresh tattoos need to be completely healed before any cover-up work can begin."
                }
              }
            ]
          })
        }}
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
              <h2 className="text-2xl font-bold mb-6 text-crisp-white">Cover-Up Expertise</h2>
              
              <div className="space-y-4 text-crisp-white/90">
                <p>
                  Cover-up tattoos require specialized expertise in design, color theory, and 
                  artistic problem-solving. Our approach focuses on creating beautiful new 
                  artwork that completely transforms unwanted tattoos into pieces you'll love.
                </p>
                
                <p>
                  We assess each existing tattoo individually, considering factors like size, 
                  color saturation, and skin condition to develop the most effective cover-up 
                  strategy. Our goal is not just to hide the old tattoo, but to create 
                  something significantly better.
                </p>

                <h3 className="text-lg font-semibold text-crisp-white mt-6 mb-3">Cover-Up Considerations</h3>
                <ul className="space-y-2">
                  <li>• Size requirements (usually 2-3x larger)</li>
                  <li>• Color density and saturation levels</li>
                  <li>• Age and healing quality of existing tattoo</li>
                  <li>• Skin condition and texture</li>
                  <li>• Design style compatibility</li>
                </ul>
              </div>
            </div>
          </div>


          {/* Process Section */}
          <section className="glass-panel p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
              Cover-Up Tattoo Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Assessment',
                  description: 'Detailed evaluation of existing tattoo and skin condition'
                },
                {
                  step: '2',
                  title: 'Design Strategy',
                  description: 'Custom design creation with strategic coverage planning'
                },
                {
                  step: '3',
                  title: 'Test Patch',
                  description: 'Small test area to verify coverage effectiveness'
                },
                {
                  step: '4',
                  title: 'Full Application',
                  description: 'Complete cover-up execution with precise technique'
                }
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-crisp-white font-bold text-xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-crisp-white mb-2">{phase.title}</h3>
                  <p className="text-crisp-white/80 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notes */}
          <section className="glass-accent p-6 rounded-lg mb-16">
            <h2 className="text-xl font-bold mb-4 text-crisp-white">Important Cover-Up Information</h2>
            <div className="space-y-3 text-crisp-white/90">
              <p>
                <strong className="text-crisp-white">Consultation Required:</strong> All cover-up work requires an in-person consultation 
                to assess feasibility and discuss design options.
              </p>
              <p>
                <strong className="text-crisp-white">Realistic Expectations:</strong> Cover-ups typically need to be significantly larger 
                and darker than the original tattoo for effective coverage.
              </p>
              <p>
                <strong className="text-crisp-white">Design Limitations:</strong> Some designs may not be suitable for cover-up work. 
                We'll work with you to find the best artistic solution.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center glass-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready to Transform Your Tattoo?
            </h2>
            <p className="text-crisp-white/90 mb-8">
              Cover-up consultations are always free and include honest assessment of your options. 
              View our <Link href="/gallery" className="text-gold hover:underline">portfolio</Link> to 
              see examples of successful cover-up transformations.
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
                View Cover-Up Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}