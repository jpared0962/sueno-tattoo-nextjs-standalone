import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { SEOLayout } from '@/components/layout/SEOLayout'
import { businessInfo } from '@/data/business-info'
import { tattooServices } from '@/data/services'

export const metadata: Metadata = generateSEOMetadata({
  title: `Professional Tattoo Services Laurel MD | Jose Alvarado | ${businessInfo.name}`,
  description: `Comprehensive tattoo services in Laurel, MD. Custom designs, traditional American style, realism work, cover-ups. Licensed professional with 8+ years experience. Call ${businessInfo.contact.phone}`,
  keywords: [
    'tattoo services laurel md',
    'custom tattoo design laurel',
    'traditional tattoos maryland',
    'realistic realism tattoos',
    'cover up tattoo specialist'
  ],
  url: '/services',
})

export default function Services() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services' }
  ]

  // Simple page-specific FAQ schema
  const servicesFAQ = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much do tattoos cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our tattoo pricing varies by size, complexity, and style. Small tattoos start at $120, medium pieces range from $200-600, and larger custom work can be $600+. We provide transparent estimates during your free consultation."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer free consultations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! All consultations are completely free with no obligation. We'll discuss your ideas, show you our portfolio, and provide honest advice about design, placement, and pricing."
              }
            }
          ]
        })
      }}
    />
  )

  return (
    <>
      {servicesFAQ}
      
      <SEOLayout 
        breadcrumbs={breadcrumbs}
        ctaVariant="services"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
            Professional Tattoo Services in Laurel, MD
          </h1>
          <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto mb-8">
            From custom designs to traditional work, we offer comprehensive tattoo services 
            with 8+ years of professional experience serving Laurel, MD and the greater DMV area.
          </p>
          
          {/* Quick contact info */}
          <div className="glass-accent p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-crisp-white">
              <strong>Available:</strong> Thursday - Sunday, 12:00 PM - 6:00 PM | 
              <strong className="ml-4">Call:</strong> 
              <a 
                href={`tel:${businessInfo.contact.phone}`} 
                className="text-gold hover:underline ml-2 font-semibold"
              >
                {businessInfo.contact.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tattooServices.filter(service => service.popular).map((service) => (
            <article key={service.id} className="glass-card p-6 rounded-lg">
              <div className="text-3xl mb-4">🎨</div>
              <h2 className="text-xl font-bold text-crisp-white mb-3">{service.name}</h2>
              <p className="text-crisp-white/90 mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-crisp-white/80">Price Range:</span>
                  <span className="text-gold font-semibold">
                    ${service.priceRange.min}-${service.priceRange.max}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-crisp-white/80">Duration:</span>
                  <span className="text-crisp-white">
                    {Math.floor(service.duration.min / 60)}-{Math.floor(service.duration.max / 60)} hours
                  </span>
                </div>
              </div>

              {service.slug && (
                <Link 
                  href={`/services/${service.slug}`}
                  className="text-gold hover:underline font-semibold"
                >
                  Learn More →
                </Link>
              )}
            </article>
          ))}
        </div>

        {/* Process Overview */}
        <div className="glass-panel p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', description: 'Free consultation to discuss your vision' },
              { step: '2', title: 'Design', description: 'Custom artwork creation and revisions' },
              { step: '3', title: 'Appointment', description: 'Professional tattooing session' },
              { step: '4', title: 'Aftercare', description: 'Comprehensive healing guidance' }
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
        </div>

        {/* Simple FAQ */}
        <section className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-crisp-white/10 pb-4">
              <h3 className="text-lg font-semibold text-crisp-white mb-2">
                How much do tattoos cost?
              </h3>
              <p className="text-crisp-white/90">
                Our tattoo pricing varies by size, complexity, and style. Small tattoos start at $120, 
                medium pieces range from $200-600, and larger custom work can be $600+. We provide 
                transparent estimates during your free consultation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-2">
                Do you offer free consultations?
              </h3>
              <p className="text-crisp-white/90">
                Yes! All consultations are completely free with no obligation. We'll discuss your ideas, 
                show you our portfolio, and provide honest advice about design, placement, and pricing. 
                <Link href="/book-consultation" className="text-gold hover:underline ml-1">Book yours today</Link>.
              </p>
            </div>
          </div>
        </section>
      </SEOLayout>
    </>
  )
}