import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { tattooServices } from '@/data/services'
import { generateLocationSchema } from '@/components/seo/LocationSchemas'
import { SEOLayout } from '@/components/Layout/SEOLayout'

export const metadata: Metadata = {
  title: 'Tattoo Artist Greenbelt MD | Professional Tattoo Studio | Sueño Tattoo',
  description: 'Professional tattoo artist serving Greenbelt, MD with custom designs, realistic portraits, and fine line tattoos. Licensed studio near Greenbelt Metro with 8+ years experience.',
  keywords: 'tattoo artist greenbelt md, tattoo shop greenbelt maryland, professional tattoo studio 20770, custom tattoo design greenbelt, realistic tattoo artist greenbelt, fine line tattoos greenbelt md, tattoo near greenbelt metro',
  alternates: {
    canonical: '/locations/greenbelt',
  },
  openGraph: {
    title: 'Tattoo Artist Greenbelt MD | Professional Tattoo Studio | Sueño Tattoo',
    description: 'Professional tattoo artist serving Greenbelt, MD with custom designs, realistic portraits, and fine line tattoos. Licensed studio near Greenbelt Metro.',
    url: 'https://www.suenotattoo.com/locations/greenbelt',
    type: 'website',
    images: [
      {
        url: '/images/locations/greenbelt-tattoo-artist.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Tattoo Artist Greenbelt MD - Sueño Tattoo',
      },
    ],
  },
}

export default function GreenbeltPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema({
            name: 'Greenbelt',
            state: 'MD',
            zipCode: '20770',
            description: 'Professional tattoo services for Greenbelt, MD residents specializing in custom designs and realistic artwork',
            landmarks: ['Greenbelt Metro Station', 'Greenbelt Park', 'Roosevelt Center'],
            serviceArea: 'Greenbelt, Berwyn Heights, New Carrollton, Landover Hills',
            specialties: ['Realistic portraits', 'Custom designs', 'Fine line tattoos', 'Memorial tattoos']
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
                <span className="text-warm-gray-900 font-medium">Greenbelt</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-deep-red mb-6">
              Professional Tattoo Artist<br />
              <span className="text-3xl md:text-4xl">Greenbelt, MD</span>
            </h1>
            <p className="text-xl text-warm-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Serving Greenbelt, Maryland with exceptional custom tattoo designs, realistic portraits, and fine line work. 
              Licensed professional artist conveniently located near Greenbelt Metro station.
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

          {/* Why Choose Us for Greenbelt */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-deep-red">Why Greenbelt Residents Choose Sueño Tattoo</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Realistic Portrait Specialist</h3>
                    <p className="text-warm-gray-700">Expert in creating lifelike portraits and memorial tattoos with incredible detail and emotional depth.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Metro Accessible</h3>
                    <p className="text-warm-gray-700">Convenient location accessible via Greenbelt Metro station and major DMV transit routes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Custom Design Focus</h3>
                    <p className="text-warm-gray-700">Every tattoo is custom-designed to reflect your personal story, style, and vision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Fine Line Expertise</h3>
                    <p className="text-warm-gray-700">Skilled in delicate fine line work perfect for minimalist designs and detailed artwork.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/locations/greenbelt-realistic-tattoo.jpg"
                alt="Realistic portrait tattoo work in Greenbelt MD"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Specialized Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Specialized Services for Greenbelt Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/services/realistic-portraits.jpg"
                    alt="Realistic portrait tattoos in Greenbelt MD"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-deep-red mb-2">Realistic Portraits</h3>
                <p className="text-warm-gray-700 mb-4">
                  Incredibly detailed portrait tattoos that capture the essence and emotion of your subject. 
                  Perfect for memorial pieces and loved ones.
                </p>
                <Link
                  href="/services/realistic"
                  className="text-deep-red hover:text-deep-red-700 font-medium transition-colors"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/services/fine-line-tattoos.jpg"
                    alt="Fine line tattoos in Greenbelt MD"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-deep-red mb-2">Fine Line Work</h3>
                <p className="text-warm-gray-700 mb-4">
                  Delicate, precise fine line tattoos perfect for minimalist designs, botanical art, 
                  and detailed illustrations.
                </p>
                <Link
                  href="/services/fine-line"
                  className="text-deep-red hover:text-deep-red-700 font-medium transition-colors"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/services/custom-designs.jpg"
                    alt="Custom tattoo designs in Greenbelt MD"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-deep-red mb-2">Custom Designs</h3>
                <p className="text-warm-gray-700 mb-4">
                  Unique, one-of-a-kind tattoo designs created specifically for you through collaborative 
                  consultation and artistic expertise.
                </p>
                <Link
                  href="/services/custom-tattoos"
                  className="text-deep-red hover:text-deep-red-700 font-medium transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Location & Transit */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-deep-red mb-6">Serving Greenbelt & Metro Area</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-deep-red">Primary Service Area:</h3>
                    <p className="text-warm-gray-700">Greenbelt, MD 20770</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Also Serving:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• Berwyn Heights, MD</li>
                      <li>• New Carrollton, MD</li>
                      <li>• Landover Hills, MD</li>
                      <li>• Cheverly, MD</li>
                      <li>• Hyattsville, MD</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">From Greenbelt Metro:</h3>
                    <p className="text-warm-gray-700">20 minutes by Metro and bus connection</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-deep-red mb-6">Easy Transit Access</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-deep-red">Metro Access:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• Greenbelt Metro Station (Green Line)</li>
                      <li>• New Carrollton Metro (Orange Line)</li>
                      <li>• Prince George's Plaza Metro</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Bus Routes:</h3>
                    <p className="text-warm-gray-700">Multiple Prince George's County bus routes</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Driving:</h3>
                    <p className="text-warm-gray-700">Easy access via I-495 and Route 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Memorial Tattoo Focus */}
          <div className="bg-gradient-to-r from-muted-gold-50 to-warm-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">
              Memorial Tattoos for Greenbelt Families
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-warm-gray-700 leading-relaxed mb-6">
                Memorial tattoos hold special significance, and I'm honored to help Greenbelt families create meaningful 
                tributes to their loved ones. With expertise in realistic portraits and custom memorial designs, I work 
                closely with clients to create lasting memorials that celebrate life and preserve memories.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h3 className="font-semibold text-deep-red mb-2">Portrait Memorials</h3>
                  <p className="text-warm-gray-700 text-sm">Lifelike portraits that capture the essence of your loved one</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-deep-red mb-2">Custom Symbols</h3>
                  <p className="text-warm-gray-700 text-sm">Meaningful symbols and designs that tell their story</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-deep-red mb-2">Sensitive Approach</h3>
                  <p className="text-warm-gray-700 text-sm">Compassionate consultation process during difficult times</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              What Greenbelt Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "Jose created the most beautiful memorial tattoo for my father. The portrait is incredibly realistic 
                  and captured his spirit perfectly. The whole process was handled with such care and professionalism."
                </p>
                <p className="font-semibold text-deep-red">- Maria L., Greenbelt</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "The fine line work on my botanical tattoo is absolutely stunning. Jose's attention to detail is 
                  incredible, and the studio is easily accessible from Greenbelt Metro. Highly recommend!"
                </p>
                <p className="font-semibold text-deep-red">- David K., Greenbelt</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Frequently Asked Questions - Greenbelt
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  How long does a realistic portrait tattoo take?
                </h3>
                <p className="text-warm-gray-700">
                  Portrait tattoos typically require 4-8 hours depending on size and detail level. We usually schedule 
                  these across multiple sessions to ensure the best quality and your comfort.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Can I get to your studio using public transportation?
                </h3>
                <p className="text-warm-gray-700">
                  Yes! You can take the Green Line to Greenbelt Metro and then connect via bus to reach our studio. 
                  The total travel time is about 20 minutes from Greenbelt Metro.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  What makes your fine line work special?
                </h3>
                <p className="text-warm-gray-700">
                  I use specialized techniques and equipment for fine line work, ensuring clean, precise lines that heal 
                  beautifully. My experience with detailed work ensures your tattoo will maintain its clarity over time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  How do you handle memorial tattoo consultations?
                </h3>
                <p className="text-warm-gray-700">
                  Memorial consultations are handled with extra care and sensitivity. I take time to understand the story 
                  and create a design that truly honors your loved one's memory. These consultations are always free.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Tattoo in Greenbelt?</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional tattoo artist serving Greenbelt, MD with realistic portraits, custom designs, and fine line work
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