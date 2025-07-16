import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Student Tattoos Laurel MD | College Tattoo Artist | University Discounts | Sueño Tattoo',
  description: 'Student-friendly tattoo services in Laurel, MD. Special discounts for UMD students, flexible scheduling, affordable pricing, and career-appropriate tattoo advice. Perfect for college students.',
  keywords: 'student tattoos, college tattoo artist, UMD tattoo discounts, university tattoo shop, student friendly tattoo prices, college tattoo advice, graduation tattoos, first tattoo students, professional tattoo placement students',
  alternates: {
    canonical: '/services/student-tattoos',
  },
  openGraph: {
    title: 'Student Tattoos Laurel MD | College Tattoo Artist | University Discounts',
    description: 'Student-friendly tattoo services with special discounts for college students, flexible scheduling, and career-appropriate design advice.',
    url: 'https://www.suenotattoo.com/services/student-tattoos',
    type: 'website',
    images: [
      {
        url: '/images/services/student-tattoos.jpg',
        width: 1200,
        height: 630,
        alt: 'Student Tattoos College University Discounts',
      },
    ],
  },
}

export default function StudentTattoosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Student Tattoo Services",
            "description": "Professional tattoo services designed specifically for college students with flexible scheduling and student discounts",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sueño Tattoo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Laurel",
                "addressRegion": "MD",
                "postalCode": "20723",
                "addressCountry": "US"
              },
              "telephone": "+12407583226"
            },
            "serviceType": "Student Tattoo Services",
            "audience": {
              "@type": "Audience",
              "audienceType": "College students, university students, graduate students"
            },
            "offers": {
              "@type": "Offer",
              "description": "Student discounts and flexible payment options for college students"
            }
          })
        }}
      />

      {/* Student FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you offer student discounts for tattoos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer special discounts for college students with valid student ID. UMD students receive additional discounts. We also offer flexible payment plans to help make quality tattoos affordable for students."
                }
              },
              {
                "@type": "Question",
                "name": "What tattoos are appropriate for students entering the workforce?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend tattoos that can be easily concealed by business attire, such as those on the shoulder, back, thigh, or ribcage. We'll help you choose placement that won't impact future career opportunities while still allowing personal expression."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get a tattoo during finals week?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We don't recommend getting large tattoos during high-stress periods like finals week, as stress can affect healing. However, small tattoos are fine, and we offer flexible scheduling around your academic calendar."
                }
              },
              {
                "@type": "Question",
                "name": "What's a good first tattoo for college students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Small, meaningful designs work great for first tattoos - quotes, symbols, dates, or simple graphics. These are affordable, heal quickly, and let you experience the tattoo process before committing to larger pieces."
                }
              },
              {
                "@type": "Question",
                "name": "How far is your shop from University of Maryland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We're located in Laurel, MD, just 15-20 minutes from UMD College Park campus via Route 1. Easily accessible by car, metro, or rideshare from campus."
                }
              }
            ]
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
                <Link href="/services" className="hover:text-deep-red transition-colors">Services</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-warm-gray-900 font-medium">Student Tattoos</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-deep-red mb-6">
              Student Tattoos<br />
              <span className="text-3xl md:text-4xl">College-Friendly Prices & Advice</span>
            </h1>
            <p className="text-xl text-warm-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Professional tattoo services designed for college students. Special UMD discounts, 
              flexible scheduling around classes, career-appropriate design advice, and payment 
              plans that work with student budgets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Student Consultation
              </Link>
              <Link
                href="tel:+12407583226"
                className="border border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call (240) 758-3226
              </Link>
            </div>
          </div>

          {/* Student Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Why Students Choose Sueño Tattoo
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold text-deep-red mb-3">Student Discounts</h3>
                <p className="text-warm-gray-700 text-sm">Special pricing for college students with valid student ID. Extra savings for UMD students.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-4">📅</div>
                <h3 className="text-lg font-semibold text-deep-red mb-3">Flexible Scheduling</h3>
                <p className="text-warm-gray-700 text-sm">Evening and weekend appointments that work around your class schedule and study time.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-deep-red mb-3">Career Advice</h3>
                <p className="text-warm-gray-700 text-sm">Professional guidance on tattoo placement that won't impact your future career opportunities.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-4">💳</div>
                <h3 className="text-lg font-semibold text-deep-red mb-3">Payment Plans</h3>
                <p className="text-warm-gray-700 text-sm">Flexible payment options and installment plans that work with student budgets.</p>
              </div>
            </div>
          </div>

          {/* UMD Specific Section */}
          <div className="bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl p-8 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">University of Maryland Students</h2>
              <p className="text-xl mb-8 opacity-90">
                Special perks for Terrapins! We're located just 15 minutes from campus and understand 
                the unique needs of UMD students.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Campus Convenience</h3>
                  <p className="text-sm opacity-80">Easy Route 1 access from College Park campus</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">UMD Discounts</h3>
                  <p className="text-sm opacity-80">Additional savings with valid UMD student ID</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Academic Calendar</h3>
                  <p className="text-sm opacity-80">Scheduling around exams, breaks, and graduation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Student Tattoo Ideas */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-deep-red mb-6">Popular Student Tattoo Ideas</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-deep-red mb-2">Meaningful Quotes & Dates</h3>
                  <p className="text-warm-gray-700 text-sm">Graduation dates, inspirational quotes, family mottos, or academic achievements that inspire you.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-deep-red mb-2">Small Symbols & Icons</h3>
                  <p className="text-warm-gray-700 text-sm">Minimalist designs, academic symbols, hobby representations, or personal interests.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-deep-red mb-2">Birth Flowers & Zodiac</h3>
                  <p className="text-warm-gray-700 text-sm">Trending designs that reflect your personality - birth month flowers or constellation patterns.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-deep-red mb-2">Memorial & Family</h3>
                  <p className="text-warm-gray-700 text-sm">Honoring loved ones, pets, or important people in your life with tasteful memorial pieces.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/student-tattoo-examples.jpg"
                alt="Student tattoo examples and ideas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Career Considerations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">
              Career-Smart Tattoo Advice
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Professional-Friendly Placement</h3>
                <ul className="text-warm-gray-700 space-y-2">
                  <li>• <strong>Easily Concealed:</strong> Shoulder, back, thigh, ribcage</li>
                  <li>• <strong>Business Attire Hidden:</strong> Upper arm, chest, ankle</li>
                  <li>• <strong>Seasonal Coverage:</strong> Areas covered by long sleeves</li>
                  <li>• <strong>Industry Considerations:</strong> Field-specific placement advice</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Future-Proof Design Choices</h3>
                <ul className="text-warm-gray-700 space-y-2">
                  <li>• <strong>Timeless Styles:</strong> Classic designs that age well</li>
                  <li>• <strong>Appropriate Content:</strong> Professional workplace suitable</li>
                  <li>• <strong>Quality Investment:</strong> Better to wait and get quality work</li>
                  <li>• <strong>Expandable Designs:</strong> Room to add more later if desired</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Student Budget Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Student Budget-Friendly Options
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-muted-gold-50 to-white rounded-xl p-6 shadow">
                <h3 className="text-xl font-semibold text-deep-red mb-4">Small Tattoos</h3>
                <p className="text-2xl font-bold text-deep-red mb-2">$80-150</p>
                <p className="text-warm-gray-700 mb-4">Perfect for first tattoos or meaningful symbols</p>
                <ul className="text-warm-gray-600 text-sm space-y-1">
                  <li>• Simple line work</li>
                  <li>• Text or quotes</li>
                  <li>• Small symbols</li>
                  <li>• Quick sessions</li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-muted-gold-100 to-white rounded-xl p-6 shadow border-2 border-deep-red">
                <div className="text-center mb-2">
                  <span className="bg-deep-red text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Medium Tattoos</h3>
                <p className="text-2xl font-bold text-deep-red mb-2">$150-300</p>
                <p className="text-warm-gray-700 mb-4">Detailed designs with room for creativity</p>
                <ul className="text-warm-gray-600 text-sm space-y-1">
                  <li>• Custom designs</li>
                  <li>• Birth flowers</li>
                  <li>• Portrait work</li>
                  <li>• Payment plans available</li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-muted-gold-50 to-white rounded-xl p-6 shadow">
                <h3 className="text-xl font-semibold text-deep-red mb-4">Large Projects</h3>
                <p className="text-2xl font-bold text-deep-red mb-2">$300+</p>
                <p className="text-warm-gray-700 mb-4">Statement pieces with flexible payment</p>
                <ul className="text-warm-gray-600 text-sm space-y-1">
                  <li>• Sleeve work</li>
                  <li>• Large custom pieces</li>
                  <li>• Multiple sessions</li>
                  <li>• Graduate gift option</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Student Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              What Students Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "Perfect for college students! Jose gave me great advice about placement 
                  that won't show in job interviews. The student discount made it affordable 
                  and the scheduling worked perfectly around my classes."
                </p>
                <p className="font-semibold text-deep-red">- Sarah K., UMD Senior</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "Got my graduation tattoo here - a meaningful quote that celebrates 
                  finishing my degree. The payment plan option was exactly what I needed 
                  as a broke college student!"
                </p>
                <p className="font-semibold text-deep-red">- Marcus T., Howard University</p>
              </div>
            </div>
          </div>

          {/* Timing Advice */}
          <div className="bg-gradient-to-r from-warm-gray-50 to-muted-gold-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">
              Best Times for Student Tattoos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Ideal Timing</h3>
                <ul className="text-warm-gray-700 space-y-2">
                  <li>• <strong>Summer Break:</strong> Plenty of healing time</li>
                  <li>• <strong>Winter Break:</strong> Covered during healing</li>
                  <li>• <strong>After Finals:</strong> Stress-free healing period</li>
                  <li>• <strong>Before Graduation:</strong> Celebration piece</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Times to Avoid</h3>
                <ul className="text-warm-gray-700 space-y-2">
                  <li>• <strong>Finals Week:</strong> High stress affects healing</li>
                  <li>• <strong>Before Spring Break:</strong> Limited beach/pool time</li>
                  <li>• <strong>During Midterms:</strong> Focus on studies first</li>
                  <li>• <strong>Right Before Internships:</strong> Allow healing time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Student Tattoo?</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional quality, student-friendly prices, and career-smart advice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-white text-deep-red px-8 py-3 rounded-lg font-medium hover:bg-warm-gray-100 transition-colors"
              >
                Book Student Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-deep-red transition-colors"
              >
                Ask About Student Discounts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}