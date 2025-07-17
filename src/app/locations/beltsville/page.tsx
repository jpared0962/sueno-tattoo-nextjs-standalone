import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { tattooServices } from '@/data/services'
import { generateLocationSchema } from '@/components/seo/LocationSchemas'
import { SEOLayout } from '@/components/Layout/SEOLayout'

export const metadata: Metadata = {
  title: 'Professional Tattoo Artist Beltsville MD | Sueño Tattoo Studio',
  description: 'Expert tattoo artist Jose serving Beltsville, MD with custom tattoo designs, cover-ups, and traditional tattoos. Licensed professional studio with 8+ years experience.',
  keywords: 'tattoo artist beltsville md, tattoo shop beltsville maryland, professional tattoo studio 20705, custom tattoo design beltsville, cover up tattoo specialist beltsville, traditional tattoo artist beltsville',
  alternates: {
    canonical: '/locations/beltsville',
  },
  openGraph: {
    title: 'Professional Tattoo Artist Beltsville MD | Sueño Tattoo Studio',
    description: 'Expert tattoo artist Jose serving Beltsville, MD with custom tattoo designs, cover-ups, and traditional tattoos. Licensed professional studio.',
    url: 'https://www.suenotattoo.com/locations/beltsville',
    type: 'website',
    images: [
      {
        url: '/images/locations/beltsville-tattoo-artist.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Tattoo Artist Beltsville MD - Sueño Tattoo',
      },
    ],
  },
}

export default function BeltsvillePage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Locations', href: '/locations' },
    { name: 'Beltsville' }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema({
            name: 'Beltsville',
            state: 'MD',
            zipCode: '20705',
            description: 'Professional tattoo services for Beltsville, MD residents with custom designs and expert craftsmanship',
            landmarks: ['Beltsville Agricultural Research Center', 'Calverton', 'Powder Mill Road'],
            serviceArea: 'Beltsville, Calverton, Adelphi, Konterra',
            specialties: ['Cover-up tattoos', 'Traditional American tattoos', 'Custom portraits', 'Fine line work']
          }))
        }}
      />
      
      <SEOLayout 
        breadcrumbs={breadcrumbs}
        showCTA={true}
        ctaVariant="contact"
        ctaTitle="Ready to Get Your Beltsville Tattoo?"
        ctaDescription="Book your free consultation today to discuss your tattoo ideas with Jose."
      >
        <div className="min-h-screen bg-gradient-to-br from-crisp-white via-warm-gray-50 to-muted-gold-50">
          <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-deep-red mb-6">
                Professional Tattoo Artist<br />
                <span className="text-3xl md:text-4xl">Beltsville, MD</span>
              </h1>
            <p className="text-xl text-warm-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Serving Beltsville, Maryland with exceptional custom tattoo designs, expert cover-ups, and traditional 
              American tattoos. Licensed professional artist with 8+ years of experience and commitment to excellence.
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

          {/* Why Choose Us for Beltsville */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-deep-red">Why Beltsville Trusts Sueño Tattoo</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Cover-up Specialist</h3>
                    <p className="text-warm-gray-700">Expert in transforming unwanted tattoos into beautiful new artwork. Skilled in color theory and design strategies for successful cover-ups.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Local Community Focus</h3>
                    <p className="text-warm-gray-700">Proud to serve the Beltsville community with personalized service, competitive pricing, and commitment to local residents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Convenient Location</h3>
                    <p className="text-warm-gray-700">Easy access from Beltsville via Route 1 and I-495. Ample parking and comfortable studio environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Traditional Expertise</h3>
                    <p className="text-warm-gray-700">Specializing in traditional American tattoos with bold lines, vibrant colors, and timeless designs that age beautifully.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/locations/beltsville-tattoo-work.jpg"
                alt="Professional tattoo work in Beltsville MD"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Services Spotlight */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Specialized Services for Beltsville Residents
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-deep-red mb-4">Cover-up Tattoos</h3>
                <p className="text-warm-gray-700 mb-4">
                  Transform regrettable ink into beautiful new artwork. As a cover-up specialist, I work with clients 
                  to design creative solutions that completely hide or incorporate existing tattoos.
                </p>
                <ul className="text-warm-gray-700 space-y-2 mb-6">
                  <li>• Free cover-up consultations</li>
                  <li>• Color theory expertise</li>
                  <li>• Custom design solutions</li>
                  <li>• Multiple session planning</li>
                </ul>
                <Link
                  href="/services/cover-ups"
                  className="inline-block bg-deep-red text-white px-6 py-2 rounded-lg hover:bg-deep-red-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-deep-red mb-4">Traditional American</h3>
                <p className="text-warm-gray-700 mb-4">
                  Classic American traditional tattoos with bold black outlines, vibrant colors, and timeless imagery. 
                  Perfect for clients who appreciate the foundational style of tattooing.
                </p>
                <ul className="text-warm-gray-700 space-y-2 mb-6">
                  <li>• Bold, timeless designs</li>
                  <li>• Vibrant color palette</li>
                  <li>• Ages beautifully</li>
                  <li>• Classic American imagery</li>
                </ul>
                <Link
                  href="/services/traditional"
                  className="inline-block bg-deep-red text-white px-6 py-2 rounded-lg hover:bg-deep-red-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Location & Service Area */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-deep-red mb-6">Serving Beltsville & Surrounding Areas</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-deep-red">Primary Service Area:</h3>
                    <p className="text-warm-gray-700">Beltsville, MD 20705</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Also Serving:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• Calverton, MD</li>
                      <li>• Adelphi, MD</li>
                      <li>• Konterra, MD</li>
                      <li>• Muirkirk, MD</li>
                      <li>• Laurel, MD</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Travel Time:</h3>
                    <p className="text-warm-gray-700">10-15 minutes from Beltsville center</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-deep-red mb-6">Easy Access from Beltsville</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-deep-red">Directions:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• Take Route 1 South to Laurel</li>
                      <li>• I-495 to Route 1 South</li>
                      <li>• Powder Mill Road access</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Parking:</h3>
                    <p className="text-warm-gray-700">Free parking available at studio location</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Public Transit:</h3>
                    <p className="text-warm-gray-700">Accessible via Prince George's County Transit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Connection */}
          <div className="bg-gradient-to-r from-muted-gold-50 to-warm-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">
              Proud to Serve the Beltsville Community
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-warm-gray-700 leading-relaxed mb-6">
                As a professional tattoo artist serving Beltsville, MD, I'm committed to providing exceptional service 
                to our local community. Whether you're looking for your first tattoo, need a cover-up, or want to add 
                to your existing collection, I bring years of experience and artistic expertise to every project.
              </p>
              <p className="text-lg text-warm-gray-700 leading-relaxed">
                I understand that choosing a tattoo artist is a personal decision that requires trust. That's why I 
                prioritize open communication, detailed consultations, and maintaining the highest standards of safety 
                and professionalism in my practice.
              </p>
            </div>
          </div>

          {/* Process for Beltsville Clients */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Your Tattoo Journey from Beltsville
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold text-deep-red mb-2">Consultation</h3>
                <p className="text-warm-gray-700 text-sm">Free consultation to discuss your ideas, placement, and design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold text-deep-red mb-2">Design</h3>
                <p className="text-warm-gray-700 text-sm">Custom design creation based on your vision and preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold text-deep-red mb-2">Tattooing</h3>
                <p className="text-warm-gray-700 text-sm">Professional tattooing in clean, comfortable environment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold text-deep-red mb-2">Aftercare</h3>
                <p className="text-warm-gray-700 text-sm">Detailed aftercare instructions and ongoing support</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Frequently Asked Questions - Beltsville
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Do you specialize in cover-up tattoos?
                </h3>
                <p className="text-warm-gray-700">
                  Yes! Cover-up tattoos are one of my specialties. I have extensive experience in color theory and design 
                  strategies needed to successfully transform unwanted tattoos into beautiful new artwork.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  How far is your studio from Beltsville?
                </h3>
                <p className="text-warm-gray-700">
                  My studio is located in Laurel, MD, approximately 10-15 minutes from Beltsville center. Easy access via 
                  Route 1 South or I-495, with free parking available.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  What makes your traditional tattoos special?
                </h3>
                <p className="text-warm-gray-700">
                  I specialize in authentic American traditional tattoos with bold black outlines, vibrant colors, and 
                  classic imagery. These designs are built to age beautifully and maintain their impact over time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Do you offer payment plans for larger tattoos?
                </h3>
                <p className="text-warm-gray-700">
                  Yes, for larger pieces or multi-session tattoos, I offer flexible payment options. We can discuss 
                  payment plans during your consultation to make your tattoo more affordable.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Tattoo in Beltsville?</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional tattoo artist serving Beltsville, MD with cover-ups, traditional tattoos, and custom designs
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
      </SEOLayout>
    </>
  )
}