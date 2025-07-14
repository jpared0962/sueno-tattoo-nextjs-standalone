import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'

export const metadata: Metadata = generateSEOMetadata({
  title: `Book Free Tattoo Consultation | Jose | ${businessInfo.name}`,
  description: `Book your free tattoo consultation with Jose in Laurel, MD. 8+ years experience, custom designs, licensed professional. Call ${businessInfo.contact.phone} or book online.`,
  keywords: [
    'book tattoo consultation laurel md',
    'free tattoo consultation maryland',
    'jose alvarado consultation',
    'professional tattoo consultation',
    'custom tattoo design consultation',
    'tattoo appointment booking laurel',
    'licensed tattoo artist consultation',
    'prince georges county tattoo booking'
  ],
  url: '/book-consultation',
})

export default function BookConsultation() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />
      
      {/* Consultation Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tattoo Consultation",
            "name": "Free Tattoo Consultation",
            "description": "Complimentary tattoo design consultation to discuss your ideas, see our portfolio, and get expert advice.",
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
              "price": "0",
              "priceCurrency": "USD",
              "name": "Free Tattoo Consultation",
              "description": "No-cost consultation with professional tattoo artist",
              "availability": "https://schema.org/InStock"
            },
            "areaServed": [
              "Laurel, MD",
              "Beltsville, MD", 
              "College Park, MD",
              "Greenbelt, MD",
              "Prince George's County, MD",
              "DMV Area"
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
                "name": "Book Consultation",
                "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/book-consultation`
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
              <span aria-current="page" className="text-crisp-white">Book Consultation</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
            Book Your Free Consultation in Laurel, MD
          </h1>
          <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto mb-8">
            Ready to bring your tattoo vision to life? Schedule a free consultation with professional 
            artist Jose to discuss your ideas, see our portfolio, and get expert advice.
          </p>
          
          {/* Voice Search Optimization - Hidden but SEO beneficial */}
          <div className="sr-only">
            <h2>How to book a tattoo consultation near me in Laurel Maryland</h2>
            <p>To book a free tattoo consultation with Jose at Sueño Tattoo in Laurel, MD, 
               call {businessInfo.contact.phone} or visit us Thursday through Sunday from 12PM to 6PM.</p>
          </div>
          
          {/* Structured Booking Hours */}
          <div className="glass-accent p-6 rounded-lg mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-crisp-white mb-4">
              Consultation Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-crisp-white/90">
              <div>
                <strong>Thursday - Sunday:</strong> 12:00 PM - 6:00 PM<br/>
                <strong>Monday - Wednesday:</strong> Closed
              </div>
              <div>
                <strong>Best Times:</strong> Weekday afternoons<br/>
                <strong>Walk-ins:</strong> Subject to availability
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-crisp-white">What&apos;s Included</h2>
            <ul className="space-y-4">
              {[
                'Personal discussion of your tattoo vision and ideas',
                'Review of our extensive portfolio and previous work',
                'Expert advice on design, placement, and sizing',
                'Honest assessment of timeline and pricing',
                'Answers to all your questions and concerns',
                'No pressure, no obligation - just professional guidance'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start text-crisp-white/90">
                  <span className="text-gold mr-3 mt-1">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-crisp-white">How to Prepare</h2>
            <ul className="space-y-4">
              {[
                'Gather reference images and inspiration photos',
                'Think about preferred size and placement',
                'Consider your budget and timeline',
                'Prepare any questions about the process',
                'Bring ID if you\'re ready to book an appointment',
                'Come with an open mind for creative input'
              ].map((tip, index) => (
                <li key={index} className="flex items-start text-crisp-white/90">
                  <span className="text-gold mr-3 mt-1">💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Consultation Process */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-crisp-white text-center">
            Consultation Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Discussion',
                description: 'We\'ll talk about your vision, style preferences, and any concerns you have.',
                duration: '15-20 min'
              },
              {
                step: '2', 
                title: 'Portfolio Review',
                description: 'Browse our work to see quality and find styles that resonate with you.',
                duration: '10-15 min'
              },
              {
                step: '3',
                title: 'Planning',
                description: 'Discuss sizing, placement, timeline, and next steps for your tattoo.',
                duration: '10-15 min'
              }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-crisp-white font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-crisp-white mb-2">{phase.title}</h3>
                <p className="text-crisp-white/80 mb-2">{phase.description}</p>
                <div className="text-gold text-sm">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Policies & Information */}
        <div className="glass-accent p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-crisp-white text-center">
            Important Booking Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🔒</span>
                Secure Booking Policy
              </h3>
              <ul className="text-crisp-white/90 space-y-2 text-sm">
                <li>• ALL APPOINTMENTS require credit card on file</li>
                <li>• Only charged for no-shows or cancellations within 48 hours</li>
                <li>• Need to reschedule? Call the shop directly</li>
                <li>• Don't book a second appointment or you'll be charged for a no-show</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-4 flex items-center">
                <span className="text-2xl mr-3">💰</span>
                Cash Deposit Required
              </h3>
              <ul className="text-crisp-white/90 space-y-2 text-sm">
                <li>• $100 minimum cash deposit after consultation</li>
                <li>• ATM available on-site for convenience</li>
                <li>• Deposit credited toward total tattoo cost</li>
                <li>• No Call - No Show = Loss of deposit</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🎂</span>
                Age & Consultation Requirements
              </h3>
              <ul className="text-crisp-white/90 space-y-2 text-sm">
                <li>• <strong className="text-deep-red">Must be 18+ to get tattooed. NO EXCEPTIONS!</strong></li>
                <li>• All tattoo appointments require consultation first</li>
                <li>• Consultations are free and always in person</li>
                <li>• Valid government-issued ID required</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-4 flex items-center">
                <span className="text-2xl mr-3">💼</span>
                What to Bring
              </h3>
              <ul className="text-crisp-white/90 space-y-1 text-sm">
                <li>• Valid government-issued ID</li>
                <li>• Cash for deposit</li>
                <li>• Reference images (if applicable)</li>
                <li>• Comfortable clothing</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-deep-red/30 pt-8">
            <h3 className="text-lg font-semibold text-crisp-white mb-6 text-center">
              Scheduling Tips for Best Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-crisp-white mb-3">Availability</h4>
                <ul className="text-crisp-white/90 space-y-1 text-sm">
                  <li>• Book 2-4 weeks in advance</li>
                  <li>• Walk-ins welcome but appointments take priority</li>
                  <li>• Thursday-Sunday: 12PM-6PM</li>
                  <li>• Same-day consultation often possible</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-crisp-white mb-3">Preparation</h4>
                <ul className="text-crisp-white/90 space-y-1 text-sm">
                  <li>• Arrive on time for your session</li>
                  <li>• Avoid alcohol and aspirin 24 hours before</li>
                  <li>• Get good night's sleep and eat beforehand</li>
                  <li>• Stay hydrated and bring positive energy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Easy Ways to Book */}
        <div className="glass-panel p-8 rounded-lg text-center mb-16">
          <h2 className="text-2xl font-bold mb-4 text-crisp-white">
            3 Easy Ways to Book Your Consultation
          </h2>
          <p className="text-crisp-white/90 mb-8">
            Choose the most convenient way to schedule your free consultation. 
            We typically respond within 24 hours and can often accommodate same-day appointments.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a href={`tel:${businessInfo.contact.phone}`} 
               className="glass-card p-6 rounded-lg hover:scale-105 transition-transform group">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-crisp-white mb-2">Call Directly</h3>
              <p className="text-gold font-bold text-lg">{businessInfo.contact.phone}</p>
              <p className="text-sm text-crisp-white/80 mt-2">Fastest response • Talk immediately</p>
              <div className="mt-4 text-xs text-crisp-white/60">
                Available: Thu-Sun 12PM-6PM
              </div>
            </a>
            
            <a href={`mailto:${businessInfo.contact.email}`} 
               className="glass-card p-6 rounded-lg hover:scale-105 transition-transform group">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-crisp-white mb-2">Email Us</h3>
              <p className="text-gold font-semibold break-all text-sm">{businessInfo.contact.email}</p>
              <p className="text-sm text-crisp-white/80 mt-2">24-48 hour response • Detailed planning</p>
              <div className="mt-4 text-xs text-crisp-white/60">
                Include reference images & ideas
              </div>
            </a>
            
            <div className="glass-card p-6 rounded-lg border-2 border-gold/30">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-crisp-white mb-2">Walk In</h3>
              <p className="text-gold font-semibold">Thu-Sun 12-6PM</p>
              <p className="text-sm text-crisp-white/80 mt-2">Subject to availability • No appointment needed</p>
              <div className="mt-4 text-xs text-crisp-white/60">
                Located in Laurel, MD
              </div>
            </div>
          </div>
          
          {/* Additional Contact Options */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact"
              className="glass-button text-crisp-white px-6 py-3 rounded-lg font-semibold"
            >
              Get Directions
            </Link>
            <Link 
              href="/services"
              className="glass-button-gold text-ink-black px-6 py-3 rounded-lg font-semibold"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="glass-card p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
            Frequently Asked Booking Questions
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-crisp-white/10 pb-4">
              <summary className="cursor-pointer font-semibold text-crisp-white hover:text-gold transition-colors">
                How far in advance should I book my consultation?
              </summary>
              <p className="mt-3 text-crisp-white/90 pl-4">
                We recommend booking 2-4 weeks in advance for the best availability, though same-day 
                consultations are often possible. Walk-ins are welcome but appointments take priority.
              </p>
            </details>
            
            <details className="group border-b border-crisp-white/10 pb-4">
              <summary className="cursor-pointer font-semibold text-crisp-white hover:text-gold transition-colors">
                What should I bring to my consultation?
              </summary>
              <p className="mt-3 text-crisp-white/90 pl-4">
                Bring your government-issued ID, any reference images or inspiration photos, and 
                cash for your deposit if you decide to book. Come with an open mind for creative input!
              </p>
            </details>
            
            <details className="group border-b border-crisp-white/10 pb-4">
              <summary className="cursor-pointer font-semibold text-crisp-white hover:text-gold transition-colors">
                Is there really no cost for the consultation?
              </summary>
              <p className="mt-3 text-crisp-white/90 pl-4">
                Absolutely! All consultations are completely free with no obligation. We believe in 
                honest advice and want you to feel confident about your decision.
              </p>
            </details>
            
            <details className="group">
              <summary className="cursor-pointer font-semibold text-crisp-white hover:text-gold transition-colors">
                What happens after the consultation?
              </summary>
              <p className="mt-3 text-crisp-white/90 pl-4">
                If you decide to move forward, we'll schedule your tattoo appointment and collect a 
                $100 cash deposit. We'll also provide detailed <Link href="/aftercare" className="text-gold hover:underline">aftercare instructions</Link> 
                and answer any remaining questions.
              </p>
            </details>
          </div>
        </section>

        {/* Location Information */}
        <div className="glass-card p-6 rounded-lg mb-16">
          <h3 className="text-lg font-semibold text-crisp-white mb-4 text-center">
            Visit Our Laurel, MD Studio
          </h3>
          <div className="text-center">
            <p className="text-crisp-white/90 mb-4">
              Located in Laurel, Maryland, we serve clients from Prince George's County 
              including Beltsville, College Park, Greenbelt, and the greater DMV area.
            </p>
            <p className="text-crisp-white/90 mb-6">
              Not sure what style you want? Browse our <Link href="/gallery" className="text-gold hover:underline">portfolio gallery</Link> or 
              learn about different <Link href="/services" className="text-gold hover:underline">tattoo services</Link> we offer. 
              Read our <Link href="/aftercare" className="text-gold hover:underline">aftercare guide</Link> to understand the healing process.
            </p>
            <Link href="/contact" className="text-gold hover:underline font-semibold">
              Get directions to our studio →
            </Link>
          </div>
        </div>

        {/* Testimonial */}
        <blockquote className="glass-accent p-6 rounded-lg mb-16 italic text-center">
          <p className="text-crisp-white/90 mb-3 text-lg">
            "Jose took the time to understand exactly what I wanted during our consultation. 
            His professional approach and artistic insight made me feel confident about my decision."
          </p>
          <cite className="text-gold not-italic font-semibold">- Recent Client Review</cite>
        </blockquote>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8 text-crisp-white">
            Why Choose Sueño Tattoo for Your Consultation?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: `${businessInfo.statistics.yearsInBusiness}+ Years Experience`, description: 'Professional expertise you can trust' },
              { icon: '👥', title: `${businessInfo.statistics.totalReviews}+ Happy Clients`, description: `${businessInfo.statistics.averageRating} star average rating` },
              { icon: '🎨', title: 'Custom Artwork', description: 'Original designs for every client' },
              { icon: '🛡️', title: 'Licensed & Insured', description: `${businessInfo.statistics.healingSuccessRate}% perfect healing rate` }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-crisp-white mb-2">{feature.title}</h3>
                <p className="text-sm text-crisp-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}