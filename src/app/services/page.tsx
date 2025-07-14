import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata, commonSEOData } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { tattooServices, serviceCategories } from '@/data/services'
import { SEOOptimizedServiceCards } from '@/components/UI/SEOOptimizedServiceCards'
import { SEOLayout } from '@/components/layout/SEOLayout'

export const metadata: Metadata = generateSEOMetadata({
  ...commonSEOData.services,
  title: `Professional Tattoo Services Laurel MD | Jose Alvarado | ${businessInfo.name}`,
  description: `Comprehensive tattoo services in Laurel, MD. Custom designs, traditional American style, realism work, cover-ups. Licensed professional with 8+ years experience. Call ${businessInfo.contact.phone}`,
  keywords: [
    'tattoo services laurel md',
    'custom tattoo design laurel',
    'traditional tattoos maryland',
    'realistic realism tattoos',
    'cover up tattoo specialist',
    'professional tattoo artist services',
    'licensed tattoo studio laurel',
    'prince georges county tattoo',
    'watercolor tattoo specialist',
    'geometric tattoo design',
    'portrait tattoo artist',
    'first tattoo experience',
    'painless tattoo techniques',
    'affordable tattoo pricing',
    'best tattoo shop laurel md',
    'tattoo artist available today',
    'emergency tattoo consultation',
    'wedding tattoo design',
    'graduation tattoo service',
    'vacation tattoo preparation',
    'why choose sueno tattoo',
    'vs other tattoo shops'
  ],
  url: '/services',
})

export default function Services() {
  // Breadcrumbs for the Services page
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services' }
  ]

  // Use single source of truth - convert imported services to display format
  const servicesForDisplay = tattooServices
    .filter(service => service.popular) // Show popular services first
    .map(service => ({
      id: service.id,
      icon: getServiceIcon(service.category),
      title: service.name,
      description: service.description,
      features: getServiceFeatures(service.id),
      pricing: `$${service.priceRange.min}-${service.priceRange.max}`,
      priceType: service.priceRange.unit,
      category: service.category,
      slug: service.slug
    }))

  return (
    <>
      {/* Schema Markup for ALL Services */}
      {tattooServices.map(service => (
        <TattooServiceSchema
          key={service.id}
          serviceName={service.name}
          description={service.description}
          priceRange={service.priceRange}
          duration={service.duration}
          keywords={service.seoKeywords}
        />
      ))}

      {/* FAQ Schema Markup */}
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
              },
              {
                "@type": "Question",
                "name": "How long does the tattoo process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Timeline depends on the design complexity. Small tattoos can be completed in one 30-60 minute session, while larger custom pieces may require multiple sessions over several weeks. We'll create a realistic timeline during your consultation."
                }
              },
              {
                "@type": "Question",
                "name": "What's included in the service price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All our services include the consultation, custom design work, professional tattooing, aftercare instructions, and follow-up support. We also provide comprehensive aftercare guidance to ensure optimal healing."
                }
              }
            ]
          })
        }}
      />

      <SEOLayout 
        breadcrumbs={breadcrumbs}
        showCTA={true}
        ctaVariant="services"
        ctaTitle="Ready to Get Started?"
        ctaDescription="Book your free consultation today to discuss your tattoo ideas and get expert advice."
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
            Professional Tattoo Services in Laurel, MD
          </h1>
          <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto mb-8">
            From custom designs to traditional work, we offer comprehensive tattoo services 
            with 8+ years of professional experience serving Laurel, MD and the greater DMV area 
            including Prince George's County, Beltsville, College Park, and Greenbelt.
          </p>
          
          {/* Business Hours & Contact */}
          <div className="glass-accent p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-crisp-white">
              <strong>Available:</strong> Thursday - Sunday, 12:00 PM - 6:00 PM | 
              <strong className="ml-4">Call:</strong> 
              <a 
                href={`tel:${businessInfo.contact.phone}`} 
                className="text-gold hover:underline ml-2 font-semibold"
                aria-label={`Call ${businessInfo.name} at ${businessInfo.contact.phone}`}
              >
                {businessInfo.contact.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Main SEO-Optimized Services Section */}
        <SEOOptimizedServiceCards services={servicesForDisplay} />

        {/* Process Section */}
        <div className="glass-panel p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', description: 'Free consultation to discuss your vision and ideas' },
              { step: '2', title: 'Design', description: 'Custom artwork creation and revision process' },
              { step: '3', title: 'Appointment', description: 'Professional tattooing in a clean, safe environment' },
              { step: '4', title: 'Aftercare', description: 'Comprehensive healing guidance and support' }
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

        {/* Local SEO Section */}
        <section className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-6 text-crisp-white">
            Serving Laurel, MD and Surrounding Communities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-4">Primary Service Areas</h3>
              <ul className="space-y-2 text-crisp-white/90">
                <li>• Laurel, MD (Primary Location)</li>
                <li>• Beltsville, MD</li>
                <li>• College Park, MD</li>
                <li>• Greenbelt, MD</li>
                <li>• Hyattsville, MD</li>
                <li>• Prince George's County</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-4">Why Choose Local</h3>
              <ul className="space-y-2 text-crisp-white/90">
                <li>• Licensed Maryland tattoo professional</li>
                <li>• 8+ years serving the DMV community</li>
                <li>• Personal, boutique-style service</li>
                <li>• Deep understanding of local preferences</li>
                <li>• Convenient location for multiple consultations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="glass-card p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
            Frequently Asked Questions About Our Services
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
            <div className="border-b border-crisp-white/10 pb-4">
              <h3 className="text-lg font-semibold text-crisp-white mb-2">
                Do you offer free consultations?
              </h3>
              <p className="text-crisp-white/90">
                Yes! All consultations are completely free with no obligation. We'll discuss your ideas, 
                show you our portfolio, and provide honest advice about design, placement, and pricing. 
                Learn more about our <Link href="/book-consultation" className="text-gold hover:underline">consultation process</Link> or 
                call <a href={`tel:${businessInfo.contact.phone}`} className="text-gold hover:underline">{businessInfo.contact.phone}</a> to schedule.
              </p>
            </div>
            <div className="border-b border-crisp-white/10 pb-4">
              <h3 className="text-lg font-semibold text-crisp-white mb-2">
                How long does the tattoo process take?
              </h3>
              <p className="text-crisp-white/90">
                Timeline depends on the design complexity. Small tattoos can be completed in one 
                30-60 minute session, while larger custom pieces may require multiple sessions over 
                several weeks. We'll create a realistic timeline during your consultation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-2">
                What's included in the service price?
              </h3>
              <p className="text-crisp-white/90">
                All our services include the consultation, custom design work, professional tattooing, 
                aftercare instructions, and follow-up support. We also provide comprehensive 
                <Link href="/aftercare" className="text-gold hover:underline ml-1">aftercare guidance</Link> 
                to ensure optimal healing.
              </p>
            </div>
          </div>
        </section>
      </SEOLayout>
    </>
  )
}

// Helper functions
function getServiceIcon(category: string): string {
  const icons: { [key: string]: string } = {
    'tattoo': '🎨',
    'consultation': '💭',
    'specialty': '⭐',
    'aftercare': '🏥'
  }
  return icons[category] || '🎨'
}

function getServiceFeatures(serviceId: string): string[] {
  const features: { [key: string]: string[] } = {
    'custom-tattoo-design': [
      'Personal consultation to understand your vision',
      'Original artwork created specifically for you',
      'Multiple design revisions included',
      'Digital mockups and placement guidance',
      'Collaborative design process'
    ],
    'traditional-tattoo': [
      'Classic bold lines and vibrant colors',
      'Traditional imagery: roses, eagles, anchors, daggers',
      'Time-tested designs that age beautifully',
      'Proper traditional color palette',
      'Authentic old-school techniques'
    ],
    'fine-line-tattoo': [
      'Delicate, precise linework',
      'Minimalist and elegant designs',
      'Perfect for small, detailed pieces',
      'Subtle shading techniques',
      'Clean, modern aesthetic'
    ],
    'cover-up-tattoo': [
      'Expert cover-up design and planning',
      'Color correction and enhancement',
      'Creative solutions for challenging pieces',
      'Before/after documentation',
      'Transform unwanted tattoos'
    ],
    'memorial-tattoo': [
      'Sensitive, personal design approach',
      'Meaningful tribute artwork',
      'Cultural respect and understanding',
      'Collaborative family input',
      'Healing-focused process'
    ],
    'free-consultation': [
      'No cost initial meeting',
      'Design discussion and planning',
      'Placement and sizing advice',
      'Timeline and pricing estimates',
      'Professional recommendations'
    ]
  }
  
  return features[serviceId] || [
    'Professional service delivery',
    'Quality materials and equipment',
    'Licensed and insured professional',
    'Comprehensive aftercare guidance'
  ]
}
