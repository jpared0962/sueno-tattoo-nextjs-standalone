import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateLocationSchema } from '@/components/seo/LocationSchemas'

export const metadata: Metadata = {
  title: 'Tattoo Artist Near Laurel Lakes MD | Professional Tattoo Studio | Sueño Tattoo',
  description: 'Professional tattoo artist serving Laurel Lakes, MD community. Custom tattoo designs, expert craftsmanship, and personalized service just minutes from Laurel Lakes neighborhoods.',
  keywords: 'tattoo artist near Laurel Lakes, Laurel Lakes tattoo shop, tattoo studio Laurel Lakes MD, custom tattoo Laurel Lakes, professional tattoo artist 20723, tattoo near Laurel Lakes community',
  alternates: {
    canonical: '/locations/laurel-lakes',
  },
  openGraph: {
    title: 'Tattoo Artist Near Laurel Lakes MD | Professional Tattoo Studio',
    description: 'Professional tattoo artist serving Laurel Lakes, MD community with custom designs and expert craftsmanship.',
    url: 'https://www.suenotattoo.com/locations/laurel-lakes',
    type: 'website',
    images: [
      {
        url: '/images/locations/laurel-lakes-tattoo-artist.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Tattoo Artist Near Laurel Lakes MD',
      },
    ],
  },
}

export default function LaurelLakesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema({
            name: 'Laurel Lakes',
            state: 'MD',
            zipCode: '20723',
            description: 'Professional tattoo services for Laurel Lakes community residents with convenient local access',
            landmarks: ['Laurel Lakes Centre', 'Laurel Lakes Elementary', 'Patuxent Research Refuge'],
            serviceArea: 'Laurel Lakes, South Laurel, Montpelier, Russett',
            specialties: ['Community-focused service', 'Neighborhood convenience', 'Family-friendly approach', 'Local resident discounts']
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
                <span className="text-warm-gray-900 font-medium">Laurel Lakes</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-deep-red mb-6">
              Professional Tattoo Artist<br />
              <span className="text-3xl md:text-4xl">Near Laurel Lakes, MD</span>
            </h1>
            <p className="text-xl text-warm-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Serving the Laurel Lakes community with exceptional tattoo artistry just minutes from your neighborhood. 
              Jose provides personalized, professional tattoo services with the convenience of local access and 
              community-focused care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                href="tel:+12407583226"
                className="border border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call (240) 758-3226
              </Link>
            </div>
          </div>

          {/* Local Community Focus */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-deep-red">Your Neighborhood Tattoo Artist</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Local Convenience</h3>
                    <p className="text-warm-gray-700">Just minutes from Laurel Lakes neighborhoods, no need to travel far for quality tattoo work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Community Connection</h3>
                    <p className="text-warm-gray-700">Understanding the local community and providing personalized service to Laurel Lakes residents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Professional Excellence</h3>
                    <p className="text-warm-gray-700">8+ years of experience with a 95% perfect healing rate, bringing professional standards to your neighborhood.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-deep-red rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Easy Access & Parking</h3>
                    <p className="text-warm-gray-700">Convenient location with free parking, making your tattoo appointment stress-free.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/locations/laurel-lakes-community.jpg"
                alt="Laurel Lakes community tattoo artist"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Distance & Directions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-deep-red mb-6">Distance from Laurel Lakes</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-deep-red">Travel Time:</h3>
                    <p className="text-warm-gray-700">5-10 minutes by car from most Laurel Lakes addresses</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Nearby Landmarks:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• Laurel Lakes Centre (shopping)</li>
                      <li>• Laurel Lakes Elementary School</li>
                      <li>• Patuxent Research Refuge</li>
                      <li>• Montpelier Mansion</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Easy Access:</h3>
                    <p className="text-warm-gray-700">Direct routes via local roads, no highway travel needed</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-deep-red mb-6">Neighborhood Service Areas</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-deep-red">Primary Coverage:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• All Laurel Lakes neighborhoods</li>
                      <li>• South Laurel residential areas</li>
                      <li>• Montpelier community</li>
                      <li>• Russett development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-red">Community Benefits:</h3>
                    <ul className="text-warm-gray-700 space-y-1">
                      <li>• Local resident references available</li>
                      <li>• Community event participation</li>
                      <li>• Neighborhood referral discounts</li>
                      <li>• Flexible local scheduling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              What Laurel Lakes Neighbors Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "Living in Laurel Lakes, I was thrilled to find such a talented tattoo artist so close to home. 
                  Jose's work is incredible and the convenience can't be beat. Highly recommend to my neighbors!"
                </p>
                <p className="font-semibold text-deep-red">- Jennifer K., Laurel Lakes Resident</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-700 mb-4">
                  "As a busy parent in the Laurel Lakes community, having a professional tattoo artist nearby 
                  was perfect. Quick drive, excellent work, and Jose understood exactly what I wanted."
                </p>
                <p className="font-semibold text-deep-red">- Michael R., South Laurel</p>
              </div>
            </div>
          </div>

          {/* Services for Laurel Lakes */}
          <div className="bg-gradient-to-r from-muted-gold-50 to-warm-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">
              Tailored for Laurel Lakes Community
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-warm-gray-700 leading-relaxed mb-6 text-center">
                Understanding the diverse Laurel Lakes community, Jose provides personalized tattoo services 
                that respect individual styles, professional needs, and family considerations. Whether you're 
                a long-time resident or new to the neighborhood, you'll receive the same high-quality, 
                professional service with local convenience.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-deep-red mb-2">Family Considerations</h3>
                  <p className="text-warm-gray-700 text-sm">Understanding family schedules and providing appropriate timing for parents</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-deep-red mb-2">Professional Needs</h3>
                  <p className="text-warm-gray-700 text-sm">Discrete placement options for community professionals and commuters</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-deep-red mb-2">Local Referrals</h3>
                  <p className="text-warm-gray-700 text-sm">Building relationships within the Laurel Lakes community through quality work</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ for Laurel Lakes */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">
              Frequently Asked Questions - Laurel Lakes
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  How close are you to Laurel Lakes neighborhoods?
                </h3>
                <p className="text-warm-gray-700">
                  We're located just 5-10 minutes by car from most Laurel Lakes addresses. Easy local roads access 
                  with no need for highway travel, making it very convenient for residents.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Do you offer any community discounts?
                </h3>
                <p className="text-warm-gray-700">
                  Yes! We offer referral discounts for Laurel Lakes residents and participate in community events. 
                  Ask about our neighborhood resident benefits during your consultation.
                </p>
              </div>
              <div className="border-b border-warm-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Can you work around family schedules?
                </h3>
                <p className="text-warm-gray-700">
                  Absolutely! We understand the busy schedules of Laurel Lakes families and offer flexible 
                  appointment times including evenings and weekends to accommodate your needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  Do you have other clients from Laurel Lakes?
                </h3>
                <p className="text-warm-gray-700">
                  Yes! We serve many Laurel Lakes residents and can provide local references upon request. 
                  Word-of-mouth referrals are common in our close-knit community.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Your Local Laurel Lakes Tattoo Artist</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional tattoo services just minutes from your Laurel Lakes neighborhood
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
                Get Local Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}