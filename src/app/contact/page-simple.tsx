import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { SEOLayout } from '@/components/layout/SEOLayout'
import { businessInfo } from '@/data/business-info'

export const metadata: Metadata = generateSEOMetadata({
  title: `Contact Jose | Book Free Consultation | ${businessInfo.name}`,
  description: `Contact professional tattoo artist Jose in Laurel, MD. Free consultations, licensed & insured. Call ${businessInfo.contact.phone} or book online. Serving DMV area.`,
  keywords: [
    'contact tattoo artist laurel md',
    'book tattoo consultation',
    'jose alvarado contact',
    'tattoo appointment laurel',
    'free tattoo consultation maryland'
  ],
  url: '/contact',
})

export default function Contact() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Contact' }
  ]

  // Simple FAQ schema for contact page
  const contactFAQ = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How can I contact Sueno Tattoo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Call us at ${businessInfo.contact.phone}, email ${businessInfo.contact.email}, or book a consultation online. We're available Thursday-Sunday 12PM-6PM.`
              }
            },
            {
              "@type": "Question", 
              "name": "Do you offer free consultations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! All consultations are completely free with no obligation. We'll discuss your ideas and provide honest advice."
              }
            }
          ]
        })
      }}
    />
  )

  return (
    <>
      {contactFAQ}
      
      <SEOLayout 
        breadcrumbs={breadcrumbs}
        ctaVariant="contact"
        ctaTitle="Ready to Get Your Tattoo?"
        ctaDescription="Contact us today to schedule your free consultation and start your tattoo journey."
      >
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

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a href={`tel:${businessInfo.contact.phone}`} 
             className="glass-card p-6 rounded-lg hover:scale-105 transition-transform text-center group">
            <div className="text-4xl mb-3 group-hover:animate-pulse">📱</div>
            <h3 className="text-xl font-semibold text-crisp-white mb-2">Call Directly</h3>
            <p className="text-gold font-bold text-lg">{businessInfo.contact.phone}</p>
            <p className="text-sm text-crisp-white/80 mt-2">Fastest response time</p>
          </a>
          
          <a href={`mailto:${businessInfo.contact.email}`} 
             className="glass-card p-6 rounded-lg hover:scale-105 transition-transform text-center group">
            <div className="text-4xl mb-3 group-hover:animate-pulse">📧</div>
            <h3 className="text-xl font-semibold text-crisp-white mb-2">Email Us</h3>
            <p className="text-gold text-sm break-all">{businessInfo.contact.email}</p>
            <p className="text-sm text-crisp-white/80 mt-2">Response within 24-48 hours</p>
          </a>
          
          <Link href="/book-consultation" className="glass-card p-6 rounded-lg hover:scale-105 transition-transform text-center group">
            <div className="text-4xl mb-3 group-hover:animate-pulse">📅</div>
            <h3 className="text-xl font-semibold text-crisp-white mb-2">Book Consultation</h3>
            <p className="text-gold font-semibold">Free • No Obligation</p>
            <p className="text-sm text-crisp-white/80 mt-2">Schedule your free consultation</p>
          </Link>
        </div>

        {/* Studio Location */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-crisp-white text-center">Studio Location & Hours</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-crisp-white mb-4">Sueño Tattoo Studio</h3>
              <address className="text-crisp-white/90 not-italic space-y-2">
                <p className="font-semibold">{businessInfo.location.streetAddress}</p>
                <p>{businessInfo.location.city}, {businessInfo.location.state} {businessInfo.location.zipCode}</p>
                <p>Prince George's County</p>
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
              <h3 className="text-lg font-semibold text-crisp-white mb-4 text-center">Studio Hours</h3>
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
              </div>
            </div>
          </div>
        </div>
      </SEOLayout>
    </>
  )
}