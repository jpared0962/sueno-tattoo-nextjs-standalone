import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata, commonSEOData } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { SEOLayout } from '@/components/Layout/SEOLayout'

export const metadata: Metadata = generateSEOMetadata({
  ...commonSEOData.services,
  title: `Free Tattoo Consultation Laurel MD | Expert Tattoo Planning | Jose`,
  description: `Free professional tattoo consultation in Laurel, MD. Expert design planning, pricing estimates, and tattoo preparation. 8+ years experience. Licensed Maryland tattoo artist. Call ${businessInfo.contact.phone}`,
  keywords: [
    'free tattoo consultation laurel md',
    'tattoo consultation maryland',
    'tattoo design planning',
    'professional tattoo consultation',
    'tattoo artist consultation',
    'tattoo planning services',
    'custom tattoo design',
    'tattoo preparation maryland',
    'tattoo consultation dmv',
    'expert tattoo advice',
    'tattoo design ideas',
    'tattoo size consultation',
    'tattoo placement advice',
    'tattoo cost estimate'
  ],
  url: '/services/consultation',
})

export default function TattooConsultation() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Consultation' }
  ]

  return (
    <>
      <TattooServiceSchema
        serviceName="Tattoo Consultation"
        description="Free professional tattoo consultation including design planning, placement advice, pricing estimates, and tattoo preparation guidance."
        priceRange={{ min: 0, max: 0 }}
        duration={{ min: 30, max: 60 }}
        keywords={['tattoo consultation', 'free consultation', 'tattoo planning', 'design consultation']}
      />

      <SEOLayout 
        breadcrumbs={breadcrumbs}
        showCTA={true}
        ctaVariant="contact"
        ctaTitle="Ready to Start Your Tattoo Journey?"
        ctaDescription="Book your free consultation today and let's plan your perfect tattoo together."
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
            Free Tattoo Consultation in Laurel, MD | Expert Tattoo Planning
          </h1>
          <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto mb-8">
            Start your tattoo journey with a free professional consultation. Our experienced Maryland 
            tattoo artist provides expert guidance on design, placement, sizing, and preparation to 
            ensure your tattoo vision becomes reality.
          </p>
        </div>

        {/* Service Details */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-crisp-white mb-6">
                Professional Tattoo Consultation Services
              </h2>
              <div className="space-y-4 text-crisp-white/90">
                <p>
                  A tattoo consultation is the foundation of a great tattoo experience. During your 
                  free consultation, we'll discuss your vision, explore design options, and create 
                  a detailed plan that ensures your tattoo exceeds expectations.
                </p>
                <p>
                  With 8+ years of experience as a licensed DMV tattoo artist, I provide honest, 
                  professional advice to help you make informed decisions about your tattoo investment.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-crisp-white mt-8 mb-4">
                What's Included in Your Free Consultation
              </h3>
              <ul className="space-y-2 text-crisp-white/90">
                <li>• Design concept development and refinement</li>
                <li>• Optimal placement and sizing recommendations</li>
                <li>• Detailed pricing estimates and session planning</li>
                <li>• Tattoo style and technique recommendations</li>
                <li>• Pre-tattoo preparation guidance</li>
                <li>• Aftercare planning and timeline discussion</li>
                <li>• Portfolio review of similar work</li>
                <li>• Honest assessment of design feasibility</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-crisp-white mb-4">
                Consultation Topics We Cover
              </h3>
              <div className="grid gap-4">
                <div className="glass-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Design Development</h4>
                  <p className="text-sm text-crisp-white/80">
                    Refining your ideas into a cohesive, tattooable design that works perfectly for your body
                  </p>
                </div>
                <div className="glass-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Placement & Sizing</h4>
                  <p className="text-sm text-crisp-white/80">
                    Expert advice on optimal placement, proportions, and how tattoos will age and flow
                  </p>
                </div>
                <div className="glass-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Style & Technique</h4>
                  <p className="text-sm text-crisp-white/80">
                    Matching your vision with the best tattoo style and artistic approach
                  </p>
                </div>
                <div className="glass-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Timeline & Pricing</h4>
                  <p className="text-sm text-crisp-white/80">
                    Transparent pricing, session planning, and realistic timeline expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-bold text-crisp-white mb-4">
              First-Time Consultation
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-4">🆕</div>
                <span className="text-gold font-semibold text-lg">100% Free</span>
              </div>
              <p className="text-crisp-white/90 text-sm">
                Perfect for first-time tattoo clients. We'll cover everything from basic tattoo 
                education to detailed planning for your first piece.
              </p>
              <ul className="text-xs text-crisp-white/80 space-y-1">
                <li>• Tattoo process education</li>
                <li>• Pain management discussion</li>
                <li>• Aftercare planning</li>
                <li>• Budget and timeline planning</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-bold text-crisp-white mb-4">
              Design Consultation
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <span className="text-gold font-semibold text-lg">100% Free</span>
              </div>
              <p className="text-crisp-white/90 text-sm">
                Focused on developing and refining your tattoo concept into a final, tattooable design 
                that perfectly captures your vision.
              </p>
              <ul className="text-xs text-crisp-white/80 space-y-1">
                <li>• Custom design development</li>
                <li>• Style recommendations</li>
                <li>• Reference gathering</li>
                <li>• Design refinement process</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-bold text-crisp-white mb-4">
              Cover-Up Consultation
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <span className="text-gold font-semibold text-lg">100% Free</span>
              </div>
              <p className="text-crisp-white/90 text-sm">
                Specialized consultation for cover-up tattoos, including assessment of existing work 
                and design solutions that effectively conceal unwanted tattoos.
              </p>
              <ul className="text-xs text-crisp-white/80 space-y-1">
                <li>• Existing tattoo assessment</li>
                <li>• Cover-up feasibility analysis</li>
                <li>• Design solutions planning</li>
                <li>• Laser removal alternatives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Consultation Process */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
            Your Consultation Experience
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-xl font-bold text-crisp-white mx-auto mb-4">1</div>
              <h3 className="font-semibold text-crisp-white mb-2">Book Online</h3>
              <p className="text-crisp-white/80 text-sm">
                Schedule your free consultation at a time that works for you
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-xl font-bold text-crisp-white mx-auto mb-4">2</div>
              <h3 className="font-semibold text-crisp-white mb-2">Discuss Vision</h3>
              <p className="text-crisp-white/80 text-sm">
                Share your ideas, inspiration, and goals for your tattoo
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-xl font-bold text-crisp-white mx-auto mb-4">3</div>
              <h3 className="font-semibold text-crisp-white mb-2">Expert Planning</h3>
              <p className="text-crisp-white/80 text-sm">
                Receive professional guidance on design, placement, and execution
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-xl font-bold text-crisp-white mx-auto mb-4">4</div>
              <h3 className="font-semibold text-crisp-white mb-2">Plan Next Steps</h3>
              <p className="text-crisp-white/80 text-sm">
                Get your quote, timeline, and schedule your tattoo session
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="glass-panel p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-crisp-white">
            Consultation FAQ
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-crisp-white mb-2">How long does a consultation take?</h3>
                <p className="text-crisp-white/80 text-sm">
                  Consultations typically last 30-60 minutes, depending on the complexity of your project 
                  and how many questions you have.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-crisp-white mb-2">Do I need to bring anything?</h3>
                <p className="text-crisp-white/80 text-sm">
                  Bring any reference images, ideas, or inspiration you have. If it's a cover-up, 
                  photos of the existing tattoo are helpful.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-crisp-white mb-2">Is the consultation really free?</h3>
                <p className="text-crisp-white/80 text-sm">
                  Yes! Consultations are completely free with no obligation. We want to ensure we're 
                  the right fit for your tattoo needs.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-crisp-white mb-2">Can I get tattooed the same day?</h3>
                <p className="text-crisp-white/80 text-sm">
                  For smaller, simpler pieces, same-day tattooing may be possible. Larger or more 
                  complex designs typically require a separate appointment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-crisp-white mb-2">What if I change my mind after the consultation?</h3>
                <p className="text-crisp-white/80 text-sm">
                  No pressure at all! Take time to think about our discussion. We're here when 
                  you're ready to move forward.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-crisp-white mb-2">Do you do virtual consultations?</h3>
                <p className="text-crisp-white/80 text-sm">
                  We prefer in-person consultations for the best experience, but virtual consultations 
                  can be arranged for initial discussions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-crisp-white mb-4">
            Book Your Free Consultation Today
          </h2>
          <p className="text-crisp-white/90 mb-8 max-w-2xl mx-auto">
            Ready to start planning your perfect tattoo? Book your free consultation and let's 
            discuss how we can bring your vision to life with expert guidance and professional artistry.
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Link 
              href="/book-consultation"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              aria-label="Book free tattoo consultation"
            >
              Book Free Consultation
            </Link>
            <Link 
              href={`tel:${businessInfo.contact.phone}`}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal-gray px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              aria-label={`Call Jose at ${businessInfo.contact.phone}`}
            >
              Call Now
            </Link>
          </div>
        </div>
      </SEOLayout>
    </>
  )
}
