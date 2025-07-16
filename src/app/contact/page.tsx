import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata, commonSEOData } from '@/components/seo/SEOHead'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = generateSEOMetadata({
  ...commonSEOData.contact,
  title: `Contact Jose | Book Free Consultation`,
  description: `Contact professional tattoo artist Jose in Laurel, MD. Free consultations, licensed professional. Call (240) 758-3226 or book online. Serving DMV area.`,
  keywords: [
    'contact tattoo artist laurel md',
    'book tattoo consultation',
    'jose contact',
    'tattoo appointment laurel',
    'free tattoo consultation maryland',
    'professional tattoo artist contact',
    'laurel md tattoo studio phone',
    'prince georges county tattoo booking',
    'book tattoo appointment',
    'schedule tattoo consultation',
    'tattoo booking Laurel MD',
    'same day tattoo appointment',
    'weekend tattoo appointments',
    'evening tattoo appointments',
    'walk in tattoo appointments',
    'last minute tattoo booking',
    'tattoo artist phone number',
    'tattoo studio contact',
    'tattoo consultation booking',
    'tattoo appointment scheduling',
    'contact Jose tattoo artist',
    'urgent tattoo appointment',
    'emergency tattoo consultation',
    'tattoo appointment today',
    'quick tattoo consultation',
    'same day tattoo booking',
    'walk in tattoo consultation',
    'how to book a tattoo appointment',
    'tattoo consultation process',
    'schedule tattoo appointment Laurel MD',
    'contact professional tattoo artist'
  ],
  url: '/contact',
})

export default function Contact() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />
      
      {/* Enhanced Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Jose | Professional Tattoo Artist | Sueno Tattoo Laurel, MD",
            "description": "Contact professional tattoo artist Jose in Laurel, MD. Free consultations, licensed professional. Serving Prince George's County and DMV area.",
            "url": "https://www.suenotattoo.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Sueno Tattoo",
              "description": "Professional tattoo services specializing in custom tattoo design, traditional American tattoos, realistic tattoos, and cover-up tattoos",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Laurel",
                "addressRegion": "MD",
                "postalCode": "20723",
                "addressCountry": "US"
              },
              "telephone": "+12407583226",
              "email": "jpared19@outlook.com",
              "url": "https://www.suenotattoo.com",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "12:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$100-$800",
              "areaServed": {
                "@type": "Place",
                "name": "Laurel, MD and Prince George's County, DMV area"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tattoo Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Free Consultation",
                      "description": "Complimentary design consultation with no obligation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Tattoo Design",
                      "description": "Original custom tattoo artwork created specifically for each client"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Traditional American Tattoos",
                      "description": "Classic American traditional tattoos with bold lines and vibrant colors"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Realistic Tattoos",
                      "description": "Photorealistic tattoos with incredible detail perfect for portraits"
                    }
                  }
                ]
              }
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+12407583226",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "en",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "12:00",
                  "closes": "18:00"
                }
              },
              {
                "@type": "ContactPoint",
                "email": "jpared19@outlook.com",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "en"
              }
            ]
          })
        }}
      />
      
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
                  "text": "Pricing varies based on size, complexity, and style. We offer transparent piece-based pricing starting at $100. All consultations are free with no obligation."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the tattoo process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Custom designs typically take 1-2 weeks to create. Tattoo sessions range from 1-6 hours depending on the piece. We'll give you accurate time estimates during your consultation."
                }
              },
              {
                "@type": "Question",
                "name": "Do you require a deposit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we require a deposit to secure your appointment and begin design work. This is applied to your final tattoo cost and ensures your spot is reserved."
                }
              },
              {
                "@type": "Question",
                "name": "What should I bring to my consultation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bring reference images, ideas, and any questions you have. We'll discuss placement, sizing, style, and timeline during your free consultation."
                }
              }
            ]
          })
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/contact`
              }
            ]
          })
        }}
      />
      
      <div className="min-h-screen pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex space-x-2 text-sm text-crisp-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="before:content-['/'] before:mr-2">
                <span aria-current="page" className="text-crisp-white">Contact</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Contact Jose - Laurel, MD
            </h1>
            <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto">
              Ready to start your tattoo journey? Contact us for your free consultation 
              and let's bring your vision to life.
            </p>
          </div>

          {/* Prominent Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a href={`tel:${businessInfo.contact.phone}`} 
               className="glass-card p-6 rounded-lg hover:scale-105 transition-transform text-center group">
              <div className="text-4xl mb-3 group-hover:animate-pulse">📱</div>
              <h3 className="text-xl font-semibold text-crisp-white mb-2">Call Directly</h3>
              <p className="text-gold font-bold text-lg">{businessInfo.contact.phone}</p>
              <p className="text-sm text-crisp-white/80 mt-2">Fastest response time</p>
              <div className="mt-4 text-xs text-crisp-white/60">
                Available: Thu-Sun 12PM-6PM
              </div>
            </a>
            
            <a href={`mailto:${businessInfo.contact.email}`} 
               className="glass-card p-6 rounded-lg hover:scale-105 transition-transform text-center group">
              <div className="text-4xl mb-3 group-hover:animate-pulse">📧</div>
              <h3 className="text-xl font-semibold text-crisp-white mb-2">Email Us</h3>
              <p className="text-gold text-sm break-all">{businessInfo.contact.email}</p>
              <p className="text-sm text-crisp-white/80 mt-2">Response within 24-48 hours</p>
              <div className="mt-4 text-xs text-crisp-white/60">
                Include reference images & ideas
              </div>
            </a>
            
            <Link href="/book-consultation" className="glass-card p-6 rounded-lg hover:scale-105 transition-transform text-center group">
              <div className="text-4xl mb-3 group-hover:animate-pulse">📅</div>
              <h3 className="text-xl font-semibold text-crisp-white mb-2">Book Consultation</h3>
              <p className="text-gold font-semibold">Free • No Obligation</p>
              <p className="text-sm text-crisp-white/80 mt-2">Schedule your free consultation</p>
              <div className="mt-4 text-xs text-crisp-white/60">
                Expert advice & portfolio viewing
              </div>
            </Link>
          </div>

          {/* Safety & Health Assurance */}
          <div className="glass-panel p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-crisp-white text-center">Safe & Sterile Tattoo Studio</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="text-sm font-semibold text-gold mb-2">Health Department Approved</h3>
                <p className="text-xs text-crisp-white/80">Maryland state licensed and health department approved facility</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="text-sm font-semibold text-gold mb-2">Bloodborne Pathogen Certified</h3>
                <p className="text-xs text-crisp-white/80">Certified in bloodborne pathogen prevention and safety protocols</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧽</div>
                <h3 className="text-sm font-semibold text-gold mb-2">Sterile Equipment</h3>
                <p className="text-xs text-crisp-white/80">All equipment sterilized with hospital-grade autoclaves</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-sm font-semibold text-gold mb-2">Licensed Professional</h3>
                <p className="text-xs text-crisp-white/80">Fully licensed professional tattoo artist in Maryland</p>
              </div>
            </div>
          </div>
          
          {/* Studio Location with Business Hours */}
          <div className="glass-panel p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-crisp-white text-center">Studio Location & Hours</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-crisp-white mb-4">
                  Sueño Tattoo Studio
                </h3>
                <address className="text-crisp-white/90 not-italic space-y-2">
                  <p className="font-semibold">{businessInfo.location.streetAddress}</p>
                  <p>{businessInfo.location.city}, {businessInfo.location.state} {businessInfo.location.zipCode}</p>
                  <p>Prince George's County</p>
                  <p className="pt-2">
                    <strong>Parking:</strong> Free on-site parking available<br/>
                    <strong>Public Transit:</strong> Accessible by bus routes
                  </p>
                </address>
                <div className="mt-4">
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.location.streetAddress + ', ' + businessInfo.location.city + ', ' + businessInfo.location.state)}`}
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gold hover:underline font-semibold">
                    Get Directions →
                  </a>
                </div>
              </div>
              <div className="glass-accent p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-crisp-white mb-4 text-center">
                  Studio Hours
                </h3>
                <div className="max-w-md mx-auto">
                  <table className="w-full text-crisp-white/90">
                    <tbody>
                      <tr className="border-b border-crisp-white/20">
                        <td className="py-2">Monday - Wednesday</td>
                        <td className="text-right text-crisp-white/60">Closed</td>
                      </tr>
                      <tr className="border-b border-crisp-white/20">
                        <td className="py-2">Thursday - Sunday</td>
                        <td className="text-right text-gold font-semibold">12:00 PM - 6:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-crisp-white/70 mt-4 text-center">
                    *Consultations available by appointment on closed days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Statistics */}
          <div className="glass-stat p-6 rounded-lg mb-16 text-center">
            <h2 className="text-2xl font-bold mb-6 text-crisp-white">Why Clients Choose Sueño Tattoo</h2>
            <div className="flex justify-center gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold text-gold">{businessInfo.statistics.yearsInBusiness}+</div>
                <div className="text-crisp-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">{businessInfo.statistics.totalReviews}+</div>
                <div className="text-crisp-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">{businessInfo.statistics.averageRating}</div>
                <div className="text-crisp-white/80">Star Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">{businessInfo.statistics.healingSuccessRate}%</div>
                <div className="text-crisp-white/80">Healing Success</div>
              </div>
            </div>
          </div>

          {/* Enhanced Service Area */}
          <div className="glass-panel p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-crisp-white text-center">
              Proudly Serving the DMV Area
            </h2>
            <p className="text-center text-crisp-white/90 mb-8 max-w-2xl mx-auto">
              Located in Laurel, MD, we welcome clients from throughout Prince George's County 
              and the greater Washington DC metropolitan area. Our central location makes us 
              easily accessible from major highways and public transportation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessInfo.serviceAreas.map((location, index) => (
                <div key={location} className="glass-card p-4 rounded text-center">
                  <span className="text-crisp-white font-medium">{location}</span>
                  <span className="text-crisp-white/60 text-sm block mt-1">
                    {index === 0 ? '< 5 min' : '10-25 min'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold mb-2 text-crisp-white">Licensed Professional</h3>
              <p className="text-crisp-white/80">Professional artist with all required certifications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="text-lg font-semibold mb-2 text-crisp-white">Flexible Hours</h3>
              <p className="text-crisp-white/80">Appointments available to fit your schedule</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold mb-2 text-crisp-white">Custom Work</h3>
              <p className="text-crisp-white/80">Every tattoo is uniquely designed for you</p>
            </div>
          </div>

          {/* Important Information */}
          <div className="glass-accent border-2 border-gold p-6 rounded-lg mb-16">
            <h3 className="text-lg font-semibold text-crisp-white mb-4 flex items-center">
              <span className="text-2xl mr-3">⚠️</span>
              Important Information
            </h3>
            <ul className="space-y-2 text-crisp-white/90">
              <li>• Must be 18+ with valid ID (no exceptions)</li>
              <li>• All appointments require consultation first</li>
              <li>• Cash deposit required to book tattoo appointment</li>
              <li>• 48-hour cancellation policy applies</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="glass-faq p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-crisp-white text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How much do tattoos cost?",
                  answer: "Pricing varies based on size, complexity, and style. We offer transparent piece-based pricing starting at $100. All consultations are free with no obligation."
                },
                {
                  question: "How long does the process take?",
                  answer: "Custom designs typically take 1-2 weeks to create. Tattoo sessions range from 1-6 hours depending on the piece. We'll give you accurate time estimates during your consultation."
                },
                {
                  question: "Do you require a deposit?",
                  answer: "Yes, we require a deposit to secure your appointment and begin design work. This is applied to your final tattoo cost and ensures your spot is reserved."
                },
                {
                  question: "What should I bring to my consultation?",
                  answer: "Bring reference images, ideas, and any questions you have. We'll discuss placement, sizing, style, and timeline during your free consultation."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-crisp-white/10 pb-4">
                  <h3 className="text-lg font-semibold mb-2 text-crisp-white">{faq.question}</h3>
                  <p className="text-crisp-white/90">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <ContactForm />
          </div>

          {/* Enhanced CTA with Internal Linking */}
          <div className="glass-card p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready to Get Started?
            </h2>
            <p className="text-crisp-white/90 mb-6">
              Ready to book? Check our <Link href="/book-consultation" className="text-gold hover:underline">consultation process</Link>, 
              browse our <Link href="/services" className="text-gold hover:underline">tattoo services</Link>, 
              or view our <Link href="/gallery" className="text-gold hover:underline">portfolio</Link> to 
              get inspired for your next tattoo.
            </p>
            <p className="text-crisp-white/80 mb-8">
              Learn about our <Link href="/aftercare" className="text-gold hover:underline">aftercare process</Link> or 
              read <Link href="/reviews" className="text-gold hover:underline">client testimonials</Link> to 
              see why Laurel, MD chooses Sueño Tattoo for their custom artwork.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/book-consultation"
                className="glass-button text-crisp-white px-8 py-4 rounded-lg font-semibold"
              >
                Schedule Free Consultation
              </Link>
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="glass-button-gold text-ink-black px-8 py-4 rounded-lg font-semibold"
              >
                Call Now: {businessInfo.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}