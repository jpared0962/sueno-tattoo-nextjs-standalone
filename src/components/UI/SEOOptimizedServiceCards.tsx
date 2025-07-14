import Link from 'next/link'
import { businessInfo } from '@/data/business-info'

interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  pricing: string
  priceType: string
  category: string
  slug: string
}

interface SEOOptimizedServiceCardsProps {
  services: Service[]
  className?: string
}

export function SEOOptimizedServiceCards({ services, className = '' }: SEOOptimizedServiceCardsProps) {
  return (
    <>
      {/* JSON-LD Schema for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Tattoo Services",
            "description": "Professional tattoo services offered by Sueño Tattoo in Laurel, MD",
            "itemListElement": services.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "category": service.category,
              "priceRange": service.pricing,
              "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/services/${service.slug}`,
              "provider": {
                "@type": "LocalBusiness",
                "name": businessInfo.name,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": businessInfo.location.streetAddress,
                  "addressLocality": businessInfo.location.city,
                  "addressRegion": businessInfo.location.state,
                  "postalCode": businessInfo.location.zipCode,
                  "addressCountry": "US"
                },
                "telephone": businessInfo.contact.phone,
                "email": businessInfo.contact.email
              },
              "offers": {
                "@type": "Offer",
                "priceRange": service.pricing,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }))
          })
        }}
      />

      <section className={`py-8 ${className}`} aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="glass-service rounded-2xl p-8 transition-all duration-300 hover:glass-service-hover group"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Service Header */}
                <header className="flex items-start gap-4 mb-6">
                  <div 
                    className="text-4xl glass-accent rounded-full p-3 backdrop-blur-sm"
                    role="img"
                    aria-label={`${service.title} service icon`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold text-crisp-white mb-2"
                      itemProp="name"
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-crisp-white/90 leading-relaxed"
                      itemProp="description"
                    >
                      {service.description}
                    </p>
                  </div>
                </header>

                {/* Service Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-crisp-white mb-3 sr-only">
                    Service Features
                  </h4>
                  <ul className="space-y-3" role="list">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-3 text-crisp-white/80"
                      >
                        <div 
                          className="w-2 h-2 bg-gradient-to-r from-gold to-deep-red rounded-full mt-2 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Footer with Pricing and CTA */}
                <footer className="border-t border-crisp-white/20 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-crisp-white/70 text-sm">Starting at</span>
                      <div 
                        className="text-2xl font-bold text-gold"
                        itemProp="priceRange"
                      >
                        {service.pricing}
                      </div>
                    </div>
                    <div className="text-right">
                      <span 
                        className="text-xs text-crisp-white/60 uppercase tracking-wider"
                        itemProp="category"
                      >
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/services/${service.slug}`}
                    className="w-full glass-button text-crisp-white font-semibold py-3 px-6 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink-black"
                    aria-label={`Learn more about ${service.title} tattoo service`}
                  >
                    Learn More
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </footer>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gold/40 rounded-full animate-pulse" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-deep-red/50 rounded-full animate-ping" aria-hidden="true" />
                
                {/* Corner accent lines */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-gold/40 opacity-60" aria-hidden="true" />
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-deep-red/40 opacity-60" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-deep-red/40 opacity-60" aria-hidden="true" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-gold/40 opacity-60" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SEOOptimizedServiceCards