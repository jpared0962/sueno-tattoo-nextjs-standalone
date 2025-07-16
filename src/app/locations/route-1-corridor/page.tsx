import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateLocationSchema } from '@/components/seo/LocationSchemas'

export const metadata: Metadata = {
  title: 'Route 1 Corridor Tattoo Artist MD | Convenient Commuter Location | Sueño Tattoo',
  description: 'Professional tattoo artist on Route 1 corridor Maryland. Perfect for Baltimore-DC commuters. Easy access, professional service, and quality tattoo work along Route 1 in Laurel, MD.',
  keywords: 'Route 1 corridor tattoo artist, Route 1 tattoo shop Maryland, Baltimore Washington corridor tattoo, commuter tattoo artist, tattoo studio Route 1 Laurel, professional tattoo Route 1',
  alternates: {
    canonical: '/locations/route-1-corridor',
  },
  openGraph: {
    title: 'Route 1 Corridor Tattoo Artist MD | Convenient Commuter Location',
    description: 'Professional tattoo artist on Route 1 corridor Maryland. Perfect for Baltimore-DC commuters with easy access and quality service.',
    url: 'https://www.suenotattoo.com/locations/route-1-corridor',
    type: 'website',
    images: [
      {
        url: '/images/locations/route-1-corridor-tattoo.jpg',
        width: 1200,
        height: 630,
        alt: 'Route 1 Corridor Tattoo Artist Maryland',
      },
    ],
  },
}

export default function Route1CorridorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema({
            name: 'Route 1 Corridor',
            state: 'MD',
            zipCode: '20723',
            description: 'Professional tattoo services conveniently located on Route 1 corridor for Baltimore-Washington commuters',
            landmarks: ['Route 1', 'Baltimore-Washington Parkway', 'MARC Train', 'Laurel Shopping Center'],
            serviceArea: 'Route 1 Corridor, Baltimore-Washington commuters, MARC train riders',
            specialties: ['Commuter-friendly scheduling', 'Professional quick service', 'Easy highway access', 'Business traveler accommodations']
          }))
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-charcoal-gray via-ink-black to-deep-red-900">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-warm-gray-300">
              <li><Link href="/" className="hover:text-muted-gold transition-colors">Home</Link></li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/locations" className="hover:text-muted-gold transition-colors">Locations</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-crisp-white font-medium">Route 1 Corridor</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-crisp-white mb-6">
              Route 1 Corridor<br />
              <span className="text-3xl md:text-4xl text-muted-gold">Tattoo Artist</span>
            </h1>
            <p className="text-xl text-warm-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Conveniently located on the Route 1 corridor in Laurel, MD, perfect for Baltimore-Washington commuters. 
              Professional tattoo services with easy highway access, ample parking, and scheduling that works with 
              your travel routine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-muted-gold hover:bg-muted-gold-600 text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                href="tel:+12407583226"
                className="border border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call (240) 758-3226
              </Link>
            </div>
          </div>

          {/* Commuter Benefits */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-crisp-white">Perfect for Commuters</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Highway Convenient</h3>
                    <p className="text-warm-gray-300">Easy on/off access from Route 1, perfect for your daily commute between Baltimore and DC.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Commuter Schedule Friendly</h3>
                    <p className="text-warm-gray-300">Evening and weekend appointments available to work around your commuting schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Professional Excellence</h3>
                    <p className="text-warm-gray-300">High-quality work perfect for professionals who commute to Baltimore or Washington DC.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Free Parking</h3>
                    <p className="text-warm-gray-300">Ample free parking available - no meter worries or time limits during your appointment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-warm-gray-700">
              <Image
                src="/images/locations/route-1-corridor-access.jpg"
                alt="Route 1 corridor tattoo studio access"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Travel Information */}
          <div className="bg-charcoal-gray/30 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-crisp-white mb-6">Easy Route 1 Access</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-muted-gold">From Baltimore:</h3>
                    <p className="text-warm-gray-300">Take Route 1 South to Laurel - approximately 20-30 minutes depending on traffic</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">From Washington DC:</h3>
                    <p className="text-warm-gray-300">Take Route 1 North to Laurel - approximately 25-35 minutes from downtown DC</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Alternative Routes:</h3>
                    <ul className="text-warm-gray-300 space-y-1">
                      <li>• Baltimore-Washington Parkway</li>
                      <li>• I-95 to Route 1</li>
                      <li>• I-495 to Route 1</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-crisp-white mb-6">Commuter Considerations</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-muted-gold">Rush Hour Planning:</h3>
                    <p className="text-warm-gray-300">Schedule appointments outside peak traffic times for easiest travel</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Public Transit:</h3>
                    <ul className="text-warm-gray-300 space-y-1">
                      <li>• MARC train to Laurel station</li>
                      <li>• Local bus connections available</li>
                      <li>• Ride-share friendly location</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Business Travel:</h3>
                    <p className="text-warm-gray-300">Perfect stop for business travelers passing through the corridor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Services for Route 1 Corridor Professionals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Discrete Professional Tattoos</h3>
                <p className="text-warm-gray-300 mb-4">
                  Perfect placement and designs for professionals commuting to Baltimore or DC business districts.
                </p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Easily concealed by business attire</li>
                  <li>• Professional workplace appropriate</li>
                  <li>• Quick healing designs</li>
                  <li>• Conservative styling options</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Flexible Scheduling</h3>
                <p className="text-warm-gray-300 mb-4">
                  Appointment times that work around your commuting schedule and work commitments.
                </p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Evening appointments available</li>
                  <li>• Weekend scheduling</li>
                  <li>• Quick consultation options</li>
                  <li>• Efficient service timing</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Commuter Convenience</h3>
                <p className="text-warm-gray-300 mb-4">
                  Everything designed for easy access during your commute or travel along Route 1.
                </p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Easy highway access</li>
                  <li>• Free parking available</li>
                  <li>• Quick in-and-out service</li>
                  <li>• Professional environment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commuter Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              What Route 1 Commuters Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-muted-gold">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-300 mb-4">
                  "Perfect location for my daily commute from Baltimore to DC. Jose worked around my schedule 
                  and the quality is outstanding. Easy to stop by on my way home from work."
                </p>
                <p className="font-semibold text-muted-gold">- Robert T., Baltimore Commuter</p>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-muted-gold">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-300 mb-4">
                  "As someone who travels Route 1 regularly for business, this was the perfect location. 
                  Professional service, easy parking, and Jose understood my workplace requirements perfectly."
                </p>
                <p className="font-semibold text-muted-gold">- Lisa M., DC Professional</p>
              </div>
            </div>
          </div>

          {/* Business Hours & Planning */}
          <div className="bg-charcoal-gray/30 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-8">
              Commuter-Friendly Hours & Planning
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Business Hours</h3>
                  <ul className="text-warm-gray-300 space-y-2">
                    <li><strong>Thursday - Sunday:</strong> 12:00 PM - 6:00 PM</li>
                    <li><strong>Evening appointments:</strong> Available by arrangement</li>
                    <li><strong>Consultations:</strong> Flexible scheduling</li>
                    <li><strong>Walk-ins:</strong> Welcome during business hours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Commuter Tips</h3>
                  <ul className="text-warm-gray-300 space-y-2">
                    <li>• Book evening appointments to avoid rush hour</li>
                    <li>• Weekend sessions perfect for larger pieces</li>
                    <li>• Call ahead to check traffic conditions</li>
                    <li>• Multiple route options available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ for Route 1 Commuters */}
          <div className="bg-charcoal-gray/20 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Route 1 Corridor FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  How easy is it to reach you from Route 1?
                </h3>
                <p className="text-warm-gray-300">
                  Very easy! We're located just off Route 1 in Laurel with simple access and plenty of free parking. 
                  Perfect for commuters traveling between Baltimore and Washington DC.
                </p>
              </div>
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  Can you work around my commuting schedule?
                </h3>
                <p className="text-warm-gray-300">
                  Absolutely! We offer evening and weekend appointments specifically for commuters. 
                  We understand the challenges of Baltimore-DC corridor traffic and work with your schedule.
                </p>
              </div>
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  Do you accommodate business travelers?
                </h3>
                <p className="text-warm-gray-300">
                  Yes! We welcome business travelers passing through the Route 1 corridor. Quick consultations 
                  and efficient service for professionals with limited time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  What about parking during busy commute times?
                </h3>
                <p className="text-warm-gray-300">
                  Free parking is always available at our location with no time limits or meters. 
                  You won't have to worry about parking during your tattoo appointment.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-muted-gold to-muted-gold-600 rounded-2xl p-8 text-ink-black text-center">
            <h2 className="text-3xl font-bold mb-4">Your Route 1 Corridor Tattoo Destination</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional tattoo services perfectly positioned for Baltimore-Washington commuters
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-ink-black text-muted-gold px-8 py-3 rounded-lg font-medium hover:bg-charcoal-gray transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-ink-black text-ink-black px-8 py-3 rounded-lg font-medium hover:bg-ink-black hover:text-muted-gold transition-colors"
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