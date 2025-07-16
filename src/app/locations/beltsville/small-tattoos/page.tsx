import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Small Tattoos Beltsville MD | Minimalist Tattoo Artist | First Tattoo Beltsville | Sueño Tattoo',
  description: 'Professional small tattoos and minimalist designs in Beltsville, MD. Perfect first tattoos, delicate fine line work, and small meaningful designs. Expert small tattoo artist near Beltsville.',
  keywords: 'small tattoos Beltsville, minimalist tattoos Beltsville MD, first tattoo Beltsville, fine line tattoos Beltsville, delicate tattoos near Beltsville, small tattoo artist Maryland, tiny tattoos Beltsville',
  alternates: {
    canonical: '/locations/beltsville/small-tattoos',
  },
  openGraph: {
    title: 'Small Tattoos Beltsville MD | Minimalist Tattoo Artist | First Tattoo',
    description: 'Professional small tattoos and minimalist designs in Beltsville, MD. Perfect first tattoos and delicate fine line work.',
    url: 'https://www.suenotattoo.com/locations/beltsville/small-tattoos',
    type: 'website',
    images: [
      {
        url: '/images/services/small-tattoos-beltsville.jpg',
        width: 1200,
        height: 630,
        alt: 'Small Minimalist Tattoos Beltsville Maryland',
      },
    ],
  },
}

export default function BeltsvilleSmallTattoosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Small Tattoos Beltsville MD",
            "description": "Professional small tattoos and minimalist designs for Beltsville residents",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sueño Tattoo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Laurel",
                "addressRegion": "MD",
                "postalCode": "20723",
                "addressCountry": "US"
              }
            },
            "serviceType": "Small Tattoo Design",
            "areaServed": "Beltsville, College Park, Greenbelt, Laurel",
            "audience": {
              "@type": "Audience",
              "audienceType": "First-time tattoo clients, minimalist design enthusiasts, professional workers"
            },
            "offers": {
              "@type": "Offer",
              "description": "Small tattoo services including first tattoos, minimalist designs, and fine line work"
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-crisp-white via-warm-gray-50 to-muted-gold-50">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-warm-gray-600">
              <li><Link href="/" className="hover:text-deep-red transition-colors">Home</Link></li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/locations" className="hover:text-deep-red transition-colors">Locations</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/locations/beltsville" className="hover:text-deep-red transition-colors">Beltsville</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-warm-gray-900 font-medium">Small Tattoos</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-deep-red mb-6">
              Small Tattoos<br />
              <span className="text-3xl md:text-4xl">Beltsville, Maryland</span>
            </h1>
            <p className="text-xl text-warm-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Perfect small tattoos and minimalist designs for Beltsville residents. Jose specializes in 
              delicate fine line work, first tattoos, and meaningful small designs that are perfect for 
              professionals and tattoo newcomers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Small Tattoo Consultation
              </Link>
              <Link
                href="tel:+12407583226"
                className="border border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call (240) 758-3226
              </Link>
            </div>
          </div>

          {/* Why Small Tattoos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Why Choose Small Tattoos?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-deep-red mb-3">Perfect First Tattoo</h3>
                <p className="text-warm-gray-700 text-sm">Less intimidating for first-timers. Test your pain tolerance and commitment with a small, meaningful design.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-deep-red mb-3">Professional Friendly</h3>
                <p className="text-warm-gray-700 text-sm">Easily concealed for workplace requirements while still expressing your personal style.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-deep-red mb-3">Budget Conscious</h3>
                <p className="text-warm-gray-700 text-sm">More affordable entry point into tattoo artistry without compromising on quality.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-deep-red mb-3">Quick Healing</h3>
                <p className="text-warm-gray-700 text-sm">Faster healing time and easier aftercare compared to larger tattoo pieces.</p>
              </div>
            </div>
          </div>

          {/* Small Tattoo Styles */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-deep-red mb-6">Popular Small Tattoo Styles</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-deep-red mb-2">Fine Line Minimalist</h3>
                  <p className="text-warm-gray-700 text-sm">Delicate single-line designs, geometric shapes, and simple symbols with clean, precise execution.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-deep-red mb-2">Small Script & Words</h3>
                  <p className="text-warm-gray-700 text-sm">Meaningful quotes, names, dates, or single words in beautiful custom lettering.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-deep-red mb-2">Micro Realism</h3>
                  <p className="text-warm-gray-700 text-sm">Tiny realistic portraits, flowers, or objects with incredible detail in small scale.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-deep-red mb-2">Simple Symbols</h3>
                  <p className="text-warm-gray-700 text-sm">Hearts, stars, arrows, infinity signs, and other meaningful symbols with personal significance.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/small-tattoo-examples.jpg"
                alt="Small tattoo examples Beltsville"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Beltsville Community Focus */}
          <div className="bg-gradient-to-r from-muted-gold-50 to-warm-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">
              Serving the Beltsville Community
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold text-deep-red mb-3">Local Convenience</h3>
                <p className="text-warm-gray-700 text-sm">Just minutes from Beltsville neighborhoods via Route 1. Easy access for consultations and follow-up care.</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-deep-red mb-3">Community Understanding</h3>
                <p className="text-warm-gray-700 text-sm">Familiar with Beltsville's diverse, family-oriented community and professional workforce needs.</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-deep-red mb-3">Flexible Scheduling</h3>
                <p className="text-warm-gray-700 text-sm">Evening and weekend appointments to accommodate Beltsville residents' work and family schedules.</p>
              </div>
            </div>
          </div>

          {/* First Tattoo Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              First Tattoo Experience for Beltsville Clients
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold text-deep-red mb-2">Friendly Consultation</h3>
                <p className="text-warm-gray-700 text-sm">Relaxed discussion about your ideas, concerns, and design preferences in a welcoming environment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold text-deep-red mb-2">Custom Small Design</h3>
                <p className="text-warm-gray-700 text-sm">Create a personalized small tattoo design that fits your style and placement preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold text-deep-red mb-2">Comfortable Experience</h3>
                <p className="text-warm-gray-700 text-sm">Gentle, professional tattooing with clear communication throughout the process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold text-deep-red mb-2">Complete Aftercare</h3>
                <p className="text-warm-gray-700 text-sm">Detailed healing instructions and ongoing support for optimal tattoo care</p>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Beltsville Small Tattoo Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "Perfect for my first tattoo! Jose made me feel so comfortable and the small design 
                  was exactly what I wanted. Being close to Beltsville made it so convenient for 
                  follow-up care."
                </p>
                <p className="font-semibold text-deep-red">- Maria L., Beltsville Resident</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "I work in a professional environment and needed something discrete. Jose created 
                  a beautiful small tattoo that I can easily hide at work but love showing off on 
                  weekends. Excellent work!"
                </p>
                <p className="font-semibold text-deep-red">- David K., Beltsville Professional</p>
              </div>
            </div>
          </div>

          {/* Small Tattoo Placement Guide */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">
              Best Placement for Small Tattoos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Easily Concealed Areas</h3>
                <ul className="text-warm-gray-700 space-y-2">
                  <li>• Behind the ear (perfect for first tattoos)</li>
                  <li>• Inner wrist (popular for small symbols)</li>
                  <li>• Ankle (great for delicate designs)</li>
                  <li>• Shoulder blade (professional hiding)</li>
                  <li>• Rib cage (discrete and personal)</li>
                  <li>• Back of neck (hair coverage)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Visible Statement Areas</h3>
                <ul className="text-warm-gray-700 space-y-2">
                  <li>• Forearm (for meaningful quotes)</li>
                  <li>• Hand/finger (bold small symbols)</li>
                  <li>• Collarbone (elegant placement)</li>
                  <li>• Outer wrist (always visible)</li>
                  <li>• Behind forearm (partial concealment)</li>
                  <li>• Upper shoulder (tank top visible)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ for Small Tattoos */}
          <div className="bg-gradient-to-r from-warm-gray-50 to-muted-gold-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Small Tattoo FAQ - Beltsville Area
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  How much do small tattoos cost?
                </h3>
                <p className="text-warm-gray-700">
                  Small tattoos typically range from $80-200 depending on detail and placement. 
                  We provide exact pricing during consultation based on your specific design.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  How long do small tattoos take?
                </h3>
                <p className="text-warm-gray-700">
                  Most small tattoos take 30 minutes to 2 hours depending on complexity. Simple 
                  designs can often be completed in a single short session.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Are small tattoos good for first-timers?
                </h3>
                <p className="text-warm-gray-700">
                  Absolutely! Small tattoos are perfect for first-time clients. Less time in the chair, 
                  lower cost, and you can see how you handle the process before committing to larger work.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  How far is your studio from Beltsville?
                </h3>
                <p className="text-warm-gray-700">
                  We're located in Laurel, just 10-15 minutes from most Beltsville locations via Route 1. 
                  Easy drive with free parking available.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Tattoo Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Perfect small tattoos for Beltsville residents - professional, personal, beautiful
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-white text-deep-red px-8 py-3 rounded-lg font-medium hover:bg-warm-gray-100 transition-colors"
              >
                Book Small Tattoo Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-deep-red transition-colors"
              >
                Get Directions from Beltsville
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}