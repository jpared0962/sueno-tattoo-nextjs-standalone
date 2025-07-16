import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Tattoos Laurel MD | Workplace Appropriate Tattoos | Discrete Placement | Sueño Tattoo',
  description: 'Professional tattoo services for working professionals in Laurel, MD. Discrete placement, workplace appropriate designs, and expert advice for career-minded clients.',
  keywords: 'professional tattoos, workplace appropriate tattoos, discrete tattoo placement, business professional tattoos, corporate tattoos, career friendly tattoos, professional tattoo artist, workplace tattoo advice',
  alternates: {
    canonical: '/services/professional-tattoos',
  },
  openGraph: {
    title: 'Professional Tattoos Laurel MD | Workplace Appropriate Tattoos | Discrete Placement',
    description: 'Professional tattoo services for working professionals with discrete placement and workplace appropriate designs.',
    url: 'https://www.suenotattoo.com/services/professional-tattoos',
    type: 'website',
    images: [
      {
        url: '/images/services/professional-tattoos.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Workplace Appropriate Tattoos',
      },
    ],
  },
}

export default function ProfessionalTattoosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Tattoo Services",
            "description": "Tattoo services designed for working professionals with workplace appropriate designs and discrete placement",
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
            "serviceType": "Professional Tattoo Services",
            "audience": {
              "@type": "Audience",
              "audienceType": "Working professionals, business professionals, corporate employees"
            },
            "specialty": ["Discrete placement", "Workplace appropriate designs", "Professional consultation"]
          })
        }}
      />

      {/* Professional FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I have tattoos in a professional workplace?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many professionals have tattoos! The key is strategic placement and appropriate design choices. We specialize in helping professionals choose placements that can be easily concealed by business attire while still allowing personal expression."
                }
              },
              {
                "@type": "Question",
                "name": "Where should professionals place their tattoos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best areas for professional tattoos are those easily covered by business clothing: upper arms, shoulders, back, chest, thighs, and ribs. We'll help you choose the perfect placement based on your specific work environment and dress code."
                }
              },
              {
                "@type": "Question",
                "name": "What tattoo designs are appropriate for business environments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend tasteful, meaningful designs that reflect your personality without being controversial. Popular choices include geometric patterns, nature themes, meaningful quotes, family tributes, and artistic abstracts."
                }
              },
              {
                "@type": "Question",
                "name": "How do I schedule around my work schedule?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer evening and weekend appointments specifically for working professionals. We understand busy schedules and can work around your meetings, travel, and professional commitments."
                }
              },
              {
                "@type": "Question",
                "name": "Will my tattoo affect my career advancement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With proper placement and professional design choices, tattoos shouldn't impact career advancement. Many executives, lawyers, doctors, and other professionals have tattoos. The key is strategic placement and industry awareness."
                }
              }
            ]
          })
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
                <Link href="/services" className="hover:text-muted-gold transition-colors">Services</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-crisp-white font-medium">Professional Tattoos</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-crisp-white mb-6">
              Professional Tattoos<br />
              <span className="text-3xl md:text-4xl text-muted-gold">Workplace Appropriate Designs</span>
            </h1>
            <p className="text-xl text-warm-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Expert tattoo services for working professionals who want meaningful body art without 
              compromising their career. Discrete placement, tasteful designs, and industry-specific 
              advice from an artist who understands professional environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-muted-gold hover:bg-muted-gold-600 text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Professional Consultation
              </Link>
              <Link
                href="tel:+12407583226"
                className="border border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call (240) 758-3226
              </Link>
            </div>
          </div>

          {/* Professional Considerations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Professional Tattoo Considerations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Industry Awareness</h3>
                <p className="text-warm-gray-300 text-sm">Understanding different professional environments and their tattoo policies for informed decisions.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <div className="text-3xl mb-4">👔</div>
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Discrete Placement</h3>
                <p className="text-warm-gray-300 text-sm">Strategic positioning that's easily concealed by business attire and professional clothing.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Tasteful Design</h3>
                <p className="text-warm-gray-300 text-sm">Appropriate imagery and content that reflects professionalism while maintaining personal meaning.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Career Advancement</h3>
                <p className="text-warm-gray-300 text-sm">Ensuring your tattoo choices support rather than hinder your professional growth and opportunities.</p>
              </div>
            </div>
          </div>

          {/* Industry-Specific Guidance */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-crisp-white mb-6">Industry-Specific Tattoo Advice</h2>
              <div className="space-y-6">
                <div className="bg-charcoal-gray/20 rounded-lg border border-warm-gray-700 p-6">
                  <h3 className="font-semibold text-muted-gold mb-2">Corporate/Finance</h3>
                  <p className="text-warm-gray-300 text-sm">Conservative placement recommended. Upper arms, back, and areas covered by business suits work best.</p>
                </div>
                <div className="bg-charcoal-gray/20 rounded-lg border border-warm-gray-700 p-6">
                  <h3 className="font-semibold text-muted-gold mb-2">Healthcare</h3>
                  <p className="text-warm-gray-300 text-sm">Placement that can be covered by scrubs. Many hospitals allow tattoos if they're not visible to patients.</p>
                </div>
                <div className="bg-charcoal-gray/20 rounded-lg border border-warm-gray-700 p-6">
                  <h3 className="font-semibold text-muted-gold mb-2">Education</h3>
                  <p className="text-warm-gray-300 text-sm">Varies by institution. Generally accepting of discrete tattoos, especially in higher education settings.</p>
                </div>
                <div className="bg-charcoal-gray/20 rounded-lg border border-warm-gray-700 p-6">
                  <h3 className="font-semibold text-muted-gold mb-2">Legal/Law Firms</h3>
                  <p className="text-warm-gray-300 text-sm">Traditional conservative approach. Ensure complete concealment during court appearances and client meetings.</p>
                </div>
                <div className="bg-charcoal-gray/20 rounded-lg border border-warm-gray-700 p-6">
                  <h3 className="font-semibold text-muted-gold mb-2">Tech/Creative</h3>
                  <p className="text-warm-gray-300 text-sm">Generally more accepting. Still consider client-facing roles and company culture for placement decisions.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-warm-gray-700">
              <Image
                src="/images/services/professional-placement-guide.jpg"
                alt="Professional tattoo placement guide"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Optimal Placement Guide */}
          <div className="bg-charcoal-gray/30 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-8">
              Professional Tattoo Placement Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Most Discrete</h3>
                <ul className="text-warm-gray-300 space-y-2">
                  <li>• Upper back and shoulder blades</li>
                  <li>• Chest (covered by dress shirts)</li>
                  <li>• Upper arms (covered by sleeves)</li>
                  <li>• Thighs (covered by pants)</li>
                  <li>• Ribs and torso</li>
                  <li>• Upper shoulders</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Seasonally Concealed</h3>
                <ul className="text-warm-gray-300 space-y-2">
                  <li>• Forearms (long sleeves required)</li>
                  <li>• Lower legs (pants/tights required)</li>
                  <li>• Neck area (high collars required)</li>
                  <li>• Ankle area (socks/boots required)</li>
                  <li>• Wrist area (sleeves/watch required)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Consider Carefully</h3>
                <ul className="text-warm-gray-300 space-y-2">
                  <li>• Hands and fingers</li>
                  <li>• Neck and face</li>
                  <li>• Lower arms/forearms</li>
                  <li>• Behind ears</li>
                  <li>• Any highly visible areas</li>
                  <li>• Areas difficult to cover</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional-Appropriate Design Themes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Professional-Appropriate Design Themes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Geometric & Abstract</h3>
                <p className="text-warm-gray-300 mb-4">Clean lines, mathematical patterns, and artistic abstracts that appear sophisticated and meaningful.</p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Sacred geometry patterns</li>
                  <li>• Minimalist line work</li>
                  <li>• Abstract artistic designs</li>
                  <li>• Architectural elements</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Nature & Botanical</h3>
                <p className="text-warm-gray-300 mb-4">Elegant natural themes that convey growth, strength, and connection to the natural world.</p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Tree and branch designs</li>
                  <li>• Floral patterns (birth flowers)</li>
                  <li>• Mountain landscapes</li>
                  <li>• Subtle wildlife imagery</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Meaningful Text</h3>
                <p className="text-warm-gray-300 mb-4">Inspirational quotes, dates, and words that hold personal significance in elegant typography.</p>
                <ul className="text-warm-gray-400 text-sm space-y-1">
                  <li>• Professional mottos</li>
                  <li>• Important dates</li>
                  <li>• Latin phrases</li>
                  <li>• Family names/tributes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Workplace Etiquette */}
          <div className="bg-charcoal-gray/30 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-8">
              Professional Tattoo Etiquette
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Best Practices</h3>
                  <ul className="text-warm-gray-300 space-y-2">
                    <li>• Research your company's dress code policy</li>
                    <li>• Consider client-facing role requirements</li>
                    <li>• Start with discrete placement for first tattoos</li>
                    <li>• Choose timeless designs over trendy ones</li>
                    <li>• Invest in quality work from experienced artists</li>
                    <li>• Plan placement to allow for career changes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Things to Avoid</h3>
                  <ul className="text-warm-gray-300 space-y-2">
                    <li>• Controversial or offensive imagery</li>
                    <li>• Highly visible placement without job security</li>
                    <li>• Rushing into visible tattoo decisions</li>
                    <li>• Ignoring industry-specific considerations</li>
                    <li>• Choosing placement that limits clothing options</li>
                    <li>• Getting tattoos before important interviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              What Professionals Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-muted-gold">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-300 mb-4">
                  "As a corporate lawyer, I needed a tattoo that I could keep completely private. 
                  Jose helped me choose the perfect placement and design. No one at work knows, 
                  but I have this meaningful piece that's completely mine."
                </p>
                <p className="font-semibold text-muted-gold">- Rachel M., Corporate Attorney</p>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-muted-gold">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-300 mb-4">
                  "Working in healthcare, I was concerned about professional appearance. Jose 
                  designed a beautiful piece on my shoulder that's never visible in scrubs. 
                  Perfect solution for medical professionals!"
                </p>
                <p className="font-semibold text-muted-gold">- Dr. James K., Emergency Medicine</p>
              </div>
            </div>
          </div>

          {/* Scheduling for Professionals */}
          <div className="bg-charcoal-gray/20 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-8">
              Professional Scheduling Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Optimal Timing</h3>
                <ul className="text-warm-gray-300 space-y-2">
                  <li>• Weekend appointments for healing time</li>
                  <li>• Before vacation periods for recovery</li>
                  <li>• During slower work periods</li>
                  <li>• After major presentations/events</li>
                  <li>• During winter months (more coverage)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Healing Considerations</h3>
                <ul className="text-warm-gray-300 space-y-2">
                  <li>• Plan for 2-4 weeks of careful care</li>
                  <li>• Avoid tight clothing on healing tattoos</li>
                  <li>• Consider sun exposure during healing</li>
                  <li>• Plan around swimming/gym activities</li>
                  <li>• Account for touch-up appointments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-muted-gold to-muted-gold-600 rounded-2xl p-8 text-ink-black text-center">
            <h2 className="text-3xl font-bold mb-4">Professional Tattoo Consultation</h2>
            <p className="text-xl mb-8 opacity-90">
              Expert advice for career-minded individuals who want meaningful tattoos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-ink-black text-muted-gold px-8 py-3 rounded-lg font-medium hover:bg-charcoal-gray transition-colors"
              >
                Book Professional Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-ink-black text-ink-black px-8 py-3 rounded-lg font-medium hover:bg-ink-black hover:text-muted-gold transition-colors"
              >
                Discuss Career Considerations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}