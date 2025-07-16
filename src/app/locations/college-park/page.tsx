import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { tattooServices } from '@/data/services'
import { generateLocationSchema } from '@/components/seo/LocationSchemas'

export const metadata: Metadata = {
  title: 'Professional Tattoo Artist College Park MD | Sueño Tattoo Near UMD',
  description: 'Expert tattoo artist Jose serving College Park, MD and University of Maryland students. Custom designs, traditional tattoos, and professional aftercare. Licensed studio near UMD campus.',
  keywords: 'tattoo artist college park md, tattoo shop near umd, university of maryland tattoos, college park tattoo studio, professional tattoo artist 20740, custom tattoo design college park, tattoo near university of maryland, student tattoos college park',
  alternates: {
    canonical: '/locations/college-park',
  },
  openGraph: {
    title: 'Professional Tattoo Artist College Park MD | Sueño Tattoo Near UMD',
    description: 'Expert tattoo artist Jose serving College Park, MD and University of Maryland students. Custom designs, traditional tattoos, and professional aftercare.',
    url: 'https://www.suenotattoo.com/locations/college-park',
    type: 'website',
    images: [
      {
        url: '/images/locations/college-park-tattoo-artist.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Tattoo Artist College Park MD - Sueño Tattoo',
      },
    ],
  },
}

export default function CollegeParkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema({
            name: 'College Park',
            state: 'MD',
            zipCode: '20740',
            description: 'Professional tattoo services for College Park, MD residents and University of Maryland students',
            landmarks: ['University of Maryland', 'College Park Metro Station', 'Route 1 Corridor'],
            serviceArea: 'College Park, University of Maryland, Berwyn Heights, Riverdale Park',
            specialties: ['Student-friendly tattoos', 'Custom graduation designs', 'Small meaningful tattoos', 'Memorial tattoos']
          }))
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
                <span className="text-warm-gray-900 font-medium">College Park</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-deep-red mb-6">
              Professional Tattoo Artist<br />
              <span className="text-3xl md:text-4xl">College Park, MD</span>
            </h1>
            <p className="text-xl text-warm-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Serving College Park, MD and University of Maryland students with exceptional custom tattoo designs, 
              traditional American tattoos, and professional aftercare. Located just minutes from UMD campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                href="/gallery"
                className="border border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Why Choose Us for College Park */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-deep-red">Why College Park Chooses Sueño Tattoo</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Student-Friendly Experience</h3>
                    <p className="text-warm-gray-700">Flexible scheduling around class schedules, competitive pricing for students, and understanding of first-time tattoo experiences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Close to UMD Campus</h3>
                    <p className="text-warm-gray-700">Convenient location just minutes from University of Maryland campus, easily accessible by Metro, car, or bike.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Licensed & Professional</h3>
                    <p className="text-warm-gray-700">Fully licensed tattoo artist with 8+ years experience, strict safety protocols, and commitment to excellence.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Custom Graduation Designs</h3>
                    <p className="text-warm-gray-700">Specializing in meaningful graduation tattoos, school spirit designs, and custom artwork celebrating academic achievements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/locations/college-park-studio.jpg"
                alt="Sueño Tattoo Studio serving College Park MD"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Services for College Park */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Tattoo Services in College Park, MD
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tattooServices.slice(0, 6).map((service) => (
                <div key={service.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={`/images/services/${service.slug}.jpg`}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-deep-red mb-2">{service.name}</h3>
                  <p className="text-warm-gray-700 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-deep-red hover:text-deep-red-700 font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-deep-red mb-6">Serving College Park & Surrounding Areas</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-deep-red">Primary Service Area:</h3>
                    <p className="text-warm-gray-700">College Park, MD 20740</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Also Serving:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• University of Maryland Campus</li>
                      <li>• Berwyn Heights, MD</li>
                      <li>• Riverdale Park, MD</li>
                      <li>• Hyattsville, MD</li>
                      <li>• Greenbelt, MD</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Distance from College Park:</h3>
                    <p className="text-warm-gray-700">15 minutes by car or Metro from College Park</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-deep-red mb-6">Popular with UMD Students</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-deep-red">Student Favorites:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• Small meaningful tattoos</li>
                      <li>• Graduation commemoration designs</li>
                      <li>• School spirit and mascot tattoos</li>
                      <li>• Friend matching tattoos</li>
                      <li>• Memorial and tribute pieces</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Flexible Scheduling:</h3>
                    <p className="text-warm-gray-700">Evening and weekend appointments available to work around class schedules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local SEO Content */}
          <div className="bg-gradient-to-r from-muted-gold-50 to-warm-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">
              College Park Tattoo Artist - Local Expertise
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-warm-gray-700 leading-relaxed mb-6">
                As a professional tattoo artist serving College Park, MD, I understand the unique needs of our diverse community. 
                Whether you're a University of Maryland student looking for your first tattoo, a graduate commemorating your 
                achievement, or a local resident wanting custom artwork, I provide personalized service with the highest standards 
                of safety and artistry.
              </p>
              <p className="text-lg text-warm-gray-700 leading-relaxed">
                My studio welcomes clients from all backgrounds and experience levels. I specialize in working with first-time 
                tattoo clients, providing thorough consultations, detailed aftercare instructions, and a comfortable environment 
                that puts you at ease throughout the entire process.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              What College Park Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "Jose did an amazing job on my graduation tattoo. As a UMD student, I was nervous about my first tattoo, 
                  but he made the whole experience comfortable and professional."
                </p>
                <p className="font-semibold text-deep-red">- Sarah M., UMD Graduate</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "Living in College Park, I wanted a local artist I could trust. Jose's work is incredible and his studio 
                  is clean and professional. Highly recommend to anyone in the area!"
                </p>
                <p className="font-semibold text-deep-red">- Mike D., College Park Resident</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "Perfect location for students! Easy to get to from campus, and Jose was super accommodating with my class schedule. 
                  The tattoo healed perfectly and looks amazing."
                </p>
                <p className="font-semibold text-deep-red">- Alex T., UMD Student</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Frequently Asked Questions - College Park
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Do you offer student discounts for UMD students?
                </h3>
                <p className="text-warm-gray-700">
                  Yes! I offer competitive pricing for University of Maryland students. Contact me for current student rates and 
                  bring your student ID for verification.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  How far is your studio from UMD campus?
                </h3>
                <p className="text-warm-gray-700">
                  My studio is located in Laurel, MD, approximately 15 minutes from College Park by car or Metro. 
                  I'm easily accessible from the College Park Metro station.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Can you work around my class schedule?
                </h3>
                <p className="text-warm-gray-700">
                  Absolutely! I offer flexible scheduling including evening and weekend appointments to accommodate student schedules. 
                  Just let me know your availability during booking.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  What's the best tattoo for a college graduation?
                </h3>
                <p className="text-warm-gray-700">
                  Popular graduation tattoos include graduation dates, meaningful quotes, school mascots, or symbols representing 
                  your field of study. I can help design something unique to commemorate your achievement.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Your Tattoo in College Park?</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional tattoo artist serving College Park, MD and University of Maryland students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-white text-deep-red px-8 py-3 rounded-lg font-medium hover:bg-warm-gray-100 transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-deep-red transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}