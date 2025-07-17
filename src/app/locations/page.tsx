import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { SEOLayout } from '@/components/Layout/SEOLayout'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Service Locations | Professional Tattoo Artist DMV Area',
  description: 'Professional tattoo services serving Washington DC, Northern Virginia, and Maryland. Located in Laurel, MD with convenient access to the entire DMV area.',
  keywords: [
    'tattoo locations dmv',
    'tattoo artist washington dc',
    'tattoo artist northern virginia',
    'tattoo artist maryland',
    'laurel md tattoo',
    'dmv tattoo services',
    'washington dc tattoo artist',
    'northern virginia tattoo artist',
    'maryland tattoo artist',
    'prince georges county tattoo'
  ],
  url: '/locations',
})

export default function LocationsPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Locations' }
  ]

  const serviceAreas = [
    {
      region: 'Washington DC',
      description: 'Serving all DC neighborhoods including Dupont Circle, Georgetown, Capitol Hill, and Adams Morgan',
      highlights: ['Government workers welcome', 'Evening appointments available', 'Metro accessible'],
      href: '/locations/washington-dc',
      distance: '25-45 minutes from Laurel, MD'
    },
    {
      region: 'Northern Virginia',
      description: 'Convenient for Arlington, Alexandria, Fairfax, and surrounding NoVA communities',
      highlights: ['Competitive pricing vs DC/NoVA shops', 'Free parking', 'Professional clientele'],
      href: '/locations/northern-virginia',
      distance: '30-50 minutes from Laurel, MD'
    },
    {
      region: 'Maryland',
      description: 'Primary location in Laurel, MD serving Prince Georges County and surrounding areas',
      highlights: ['Main studio location', 'Easy highway access', 'Local community focus'],
      href: '/locations/maryland',
      distance: 'Based in Laurel, MD'
    }
  ]

  const locationFeatures = [
    { icon: '🚗', title: 'Free Parking', description: 'No parking fees or time limits' },
    { icon: '🚌', title: 'Public Transit', description: 'MARC train accessible' },
    { icon: '🏪', title: 'Central Location', description: 'Easy access from I-95, Route 1, and BWP' },
    { icon: '⏰', title: 'Flexible Hours', description: 'Thursday-Sunday 12PM-6PM' },
    { icon: '💼', title: 'Professional Friendly', description: 'Convenient for government and corporate workers' },
    { icon: '🏥', title: 'Licensed Facility', description: 'Maryland state licensed and insured' }
  ]

  return (
    <>
      <LocalBusinessSchema />
      
      <SEOLayout 
        breadcrumbs={breadcrumbs}
        showCTA={true}
        ctaVariant="contact"
        ctaTitle="Ready to Schedule Your Tattoo?"
        ctaDescription="Contact us today to book your consultation. Serving the entire DMV area."
      >
        <div className="min-h-screen pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gold to-deep-red bg-clip-text text-transparent">
                Service Locations
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-crisp-white/90 mb-6 md:mb-8">
                Professional tattoo services serving the entire DMV area
              </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-crisp-white/80 mb-6">
                Located in Laurel, MD with convenient access to Washington DC, Northern Virginia, and Maryland. 
                Our central location makes us easily accessible from major highways and public transportation.
              </p>
            </div>
          </section>

          {/* Primary Location */}
          <section className="mb-12 md:mb-16">
            <div className="glass-card p-8 rounded-lg max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-crisp-white">
                Primary Studio Location
              </h2>
              <div className="text-xl text-gold mb-4">Sueño Tattoo</div>
              <div className="text-crisp-white/90 mb-6">
                <p className="mb-2">Laurel, MD 20723</p>
                <p className="mb-2">Prince George's County</p>
                <p>(240) 758-3226</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get Directions
                </Link>
                <Link 
                  href="/book-consultation"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Areas We Serve
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="glass-service rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gold">{area.region}</h3>
                  <p className="text-crisp-white/80 mb-4">{area.description}</p>
                  <div className="text-crisp-white/60 text-sm mb-4">{area.distance}</div>
                  <ul className="space-y-2 mb-6">
                    {area.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-crisp-white/80 text-sm">
                        <div className="text-gold mr-2 mt-1">•</div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={area.href}
                    className="text-gold hover:text-gold/80 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Location Features */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Why Choose Our Location
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="glass-accent rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-crisp-white">{feature.title}</h3>
                  <p className="text-crisp-white/80 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Travel Information */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Getting Here
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gold">By Car</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• From DC: I-495 to I-95 North (30-45 minutes)</li>
                  <li>• From NoVA: I-495 to I-95 North (25-50 minutes)</li>
                  <li>• From Baltimore: I-95 South (45-60 minutes)</li>
                  <li>• Route 1 and Baltimore-Washington Parkway access</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gold">By Public Transit</h3>
                <ul className="space-y-2 text-crisp-white/80">
                  <li>• MARC train to Laurel station</li>
                  <li>• Bus routes available</li>
                  <li>• Rideshare and taxi friendly</li>
                  <li>• Free parking at studio</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-crisp-white">
                Ready to Visit?
              </h2>
              <p className="text-crisp-white/80 mb-8">
                Contact us for directions, parking information, or to schedule your appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get Directions
                </Link>
                <Link 
                  href="/book-consultation"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      </SEOLayout>
    </>
  )
}