import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateLocationServiceSchema } from '@/components/seo/LocationSchemas'

export const metadata: Metadata = {
  title: 'Tattoo Cover-ups College Park MD | UMD Area Cover-up Specialist | Sueño Tattoo',
  description: 'Expert tattoo cover-ups near University of Maryland College Park. Transform regrettable tattoos into beautiful new designs. Professional cover-up specialist serving UMD students and College Park residents.',
  keywords: 'tattoo cover ups College Park, tattoo cover up near UMD, College Park tattoo artist, University of Maryland tattoo cover ups, student tattoo cover ups, bad tattoo fix College Park MD, tattoo rework near UMD',
  alternates: {
    canonical: '/locations/college-park/tattoo-cover-ups',
  },
  openGraph: {
    title: 'Tattoo Cover-ups College Park MD | UMD Area Cover-up Specialist',
    description: 'Expert tattoo cover-ups near University of Maryland College Park. Transform regrettable tattoos into beautiful new designs.',
    url: 'https://www.suenotattoo.com/locations/college-park/tattoo-cover-ups',
    type: 'website',
    images: [
      {
        url: '/images/services/cover-ups-college-park.jpg',
        width: 1200,
        height: 630,
        alt: 'Tattoo Cover-ups College Park Maryland UMD',
      },
    ],
  },
}

export default function CollegeParkCoverUpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationServiceSchema({
            serviceName: 'Tattoo Cover-ups',
            locationName: 'College Park',
            state: 'MD',
            zipCode: '20740',
            description: 'Expert tattoo cover-up services for University of Maryland students and College Park residents',
            serviceDescription: 'Professional tattoo cover-ups transforming regrettable tattoos into beautiful new designs',
            landmarks: ['University of Maryland', 'College Park Metro', 'Route 1'],
            serviceArea: 'College Park, University of Maryland, Hyattsville, Berwyn Heights',
            problemsSolved: ['Bad tattoo regret', 'Faded old tattoos', 'Ex-name tattoos', 'Poorly done tattoos'],
            targetAudience: 'UMD students, College Park residents, young adults with tattoo regret'
          }))
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-deep-red-900 via-ink-black to-charcoal-gray">
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
                <Link href="/locations/college-park" className="hover:text-muted-gold transition-colors">College Park</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-crisp-white font-medium">Tattoo Cover-ups</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-crisp-white mb-6">
              Tattoo Cover-ups<br />
              <span className="text-3xl md:text-4xl text-muted-gold">College Park, MD</span>
            </h1>
            <p className="text-xl text-warm-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform regrettable tattoos into beautiful new designs near University of Maryland. 
              Jose specializes in cover-up tattoos for UMD students and College Park residents, 
              turning tattoo mistakes into stunning artwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-muted-gold hover:bg-muted-gold-600 text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Free Cover-up Consultation
              </Link>
              <Link
                href="tel:+12407583226"
                className="border border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call (240) 758-3226
              </Link>
            </div>
          </div>

          {/* Why Cover-ups Are Needed */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Common Tattoo Regret Situations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">College Impulse Tattoos</h3>
                <p className="text-warm-gray-300 text-sm">Quick decisions during college years that no longer reflect your style or professional goals.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Ex-Partner Names</h3>
                <p className="text-warm-gray-300 text-sm">Relationship tattoos that are now unwanted reminders of the past.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Poor Quality Work</h3>
                <p className="text-warm-gray-300 text-sm">Tattoos done at questionable shops or by inexperienced artists that need professional correction.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Faded or Aging Tattoos</h3>
                <p className="text-warm-gray-300 text-sm">Old tattoos that have lost their vibrancy and need refreshing or complete redesign.</p>
              </div>
            </div>
          </div>

          {/* UMD Student Focused Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-crisp-white mb-6">Cover-ups for UMD Students</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Professional Career Preparation</h3>
                    <p className="text-warm-gray-300">Transform college tattoos into designs suitable for your professional career path.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Student-Friendly Pricing</h3>
                    <p className="text-warm-gray-300">Flexible payment options and student discounts for University of Maryland students.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Convenient Scheduling</h3>
                    <p className="text-warm-gray-300">Evening and weekend appointments to work around your class schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Close to Campus</h3>
                    <p className="text-warm-gray-300">Just minutes from UMD campus via Route 1 - easy metro or car access.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-warm-gray-700">
              <Image
                src="/images/services/cover-up-before-after.jpg"
                alt="Tattoo cover-up before and after College Park"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cover-up Process */}
          <div className="bg-charcoal-gray/30 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">Cover-up Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold text-muted-gold mb-2">Assessment</h3>
                <p className="text-warm-gray-400 text-sm">Evaluate existing tattoo size, color, and coverage requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold text-muted-gold mb-2">Design Planning</h3>
                <p className="text-warm-gray-400 text-sm">Create custom design that completely covers old tattoo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold text-muted-gold mb-2">Strategic Coverage</h3>
                <p className="text-warm-gray-400 text-sm">Use darker colors and strategic placement for complete coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold text-muted-gold mb-2">Professional Execution</h3>
                <p className="text-warm-gray-400 text-sm">Expert application ensuring complete old tattoo concealment</p>
              </div>
            </div>
          </div>

          {/* Student Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              UMD Student Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-muted-gold">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-300 mb-4">
                  "I got a terrible tattoo freshman year that I regretted by senior year. Jose completely 
                  transformed it into something beautiful that I'm proud to show in job interviews. 
                  Perfect timing before graduation!"
                </p>
                <p className="font-semibold text-muted-gold">- Sarah M., UMD Graduate</p>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-muted-gold">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-300 mb-4">
                  "Had my ex's name covered up with an amazing design. Jose was so understanding and 
                  professional. The new tattoo is exactly what I wanted, and nobody can tell what 
                  was there before."
                </p>
                <p className="font-semibold text-muted-gold">- Alex R., College Park Resident</p>
              </div>
            </div>
          </div>

          {/* College Park Specific Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Why Choose Cover-ups Near College Park?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Metro Accessible</h3>
                <p className="text-warm-gray-300 mb-4">
                  Easy access via College Park Metro station - no need for a car to reach our studio.
                </p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Green line metro connection</li>
                  <li>• Bus routes from campus</li>
                  <li>• Ride-share friendly location</li>
                  <li>• Free parking if driving</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Student-Focused Service</h3>
                <p className="text-warm-gray-300 mb-4">
                  Understanding of student needs, schedules, and budget considerations.
                </p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Student discount programs</li>
                  <li>• Flexible payment plans</li>
                  <li>• Evening appointments</li>
                  <li>• Spring break scheduling</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Professional Standards</h3>
                <p className="text-warm-gray-300 mb-4">
                  Cover-ups appropriate for internships, job interviews, and professional careers.
                </p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Career-appropriate designs</li>
                  <li>• Professional placement advice</li>
                  <li>• Industry experience guidance</li>
                  <li>• Workplace appropriateness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-charcoal-gray/20 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Cover-up FAQ for College Park Area
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  Can any tattoo be covered up?
                </h3>
                <p className="text-warm-gray-300">
                  Most tattoos can be covered, but success depends on size, color, and density. Dark, 
                  dense tattoos are more challenging but still possible with the right design approach.
                </p>
              </div>
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  How much do cover-ups cost for students?
                </h3>
                <p className="text-warm-gray-300">
                  Cover-ups typically cost more than regular tattoos due to complexity. We offer student 
                  discounts and payment plans for UMD students to make quality work affordable.
                </p>
              </div>
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  How long does a cover-up take?
                </h3>
                <p className="text-warm-gray-300">
                  Cover-ups usually require multiple sessions depending on size and complexity. 
                  We work with your school schedule to plan sessions during breaks or weekends.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  Do you offer consultations for UMD students?
                </h3>
                <p className="text-warm-gray-300">
                  Yes! Free consultations help determine the best cover-up approach. We understand 
                  student budgets and schedules, offering honest assessments of what's possible.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-muted-gold to-muted-gold-600 rounded-2xl p-8 text-ink-black text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Tattoo Regret</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional cover-ups for College Park area students and residents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-ink-black text-muted-gold px-8 py-3 rounded-lg font-medium hover:bg-charcoal-gray transition-colors"
              >
                Free Cover-up Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-ink-black text-ink-black px-8 py-3 rounded-lg font-medium hover:bg-ink-black hover:text-muted-gold transition-colors"
              >
                Get Directions from UMD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}