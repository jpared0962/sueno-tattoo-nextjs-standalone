import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Realistic Portrait Tattoos Greenbelt MD | Memorial Portrait Tattoos | Sueño Tattoo',
  description: 'Expert realistic portrait tattoos in Greenbelt, MD. Memorial portraits, family members, pets, and celebrity portraits. Professional realism tattoo artist serving Greenbelt and surrounding areas.',
  keywords: 'realistic portrait tattoos Greenbelt, memorial portrait tattoos Greenbelt MD, pet portrait tattoos Greenbelt, family portrait tattoos, realistic tattoo artist Greenbelt Maryland, black and grey portraits Greenbelt',
  alternates: {
    canonical: '/locations/greenbelt/realistic-portraits',
  },
  openGraph: {
    title: 'Realistic Portrait Tattoos Greenbelt MD | Memorial Portrait Tattoos',
    description: 'Expert realistic portrait tattoos in Greenbelt, MD. Memorial portraits, family members, pets, and more.',
    url: 'https://www.suenotattoo.com/locations/greenbelt/realistic-portraits',
    type: 'website',
    images: [
      {
        url: '/images/services/realistic-portraits-greenbelt.jpg',
        width: 1200,
        height: 630,
        alt: 'Realistic Portrait Tattoos Greenbelt Maryland',
      },
    ],
  },
}

export default function GreenbeltRealisticPortraitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Realistic Portrait Tattoos Greenbelt MD",
            "description": "Professional realistic portrait tattoos including memorial portraits, family, and pet portraits for Greenbelt residents",
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
            "serviceType": "Realistic Portrait Tattoo Design",
            "areaServed": "Greenbelt, College Park, Beltsville, Berwyn Heights",
            "audience": {
              "@type": "Audience",
              "audienceType": "Memorial tattoo clients, family portrait enthusiasts, pet owners"
            },
            "specialty": ["Memorial portraits", "Pet portraits", "Family member portraits", "Black and grey realism"]
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
                <Link href="/locations" className="hover:text-muted-gold transition-colors">Locations</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/locations/greenbelt" className="hover:text-muted-gold transition-colors">Greenbelt</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-crisp-white font-medium">Realistic Portraits</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-crisp-white mb-6">
              Realistic Portrait Tattoos<br />
              <span className="text-3xl md:text-4xl text-muted-gold">Greenbelt, Maryland</span>
            </h1>
            <p className="text-xl text-warm-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Honor loved ones with stunning realistic portrait tattoos in Greenbelt. Jose specializes in 
              memorial portraits, family members, beloved pets, and meaningful realistic artwork that 
              captures every detail with incredible precision and emotional depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-muted-gold hover:bg-muted-gold-600 text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Portrait Consultation
              </Link>
              <Link
                href="tel:+12407583226"
                className="border border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call (240) 758-3226
              </Link>
            </div>
          </div>

          {/* Portrait Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Portrait Tattoo Specialties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Memorial Portraits</h3>
                <p className="text-warm-gray-300 text-sm">Beautiful tributes to loved ones who have passed, capturing their essence and keeping their memory alive forever.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Pet Portraits</h3>
                <p className="text-warm-gray-300 text-sm">Beloved family pets immortalized in stunning detail, celebrating the unconditional love of our animal companions.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Family Members</h3>
                <p className="text-warm-gray-300 text-sm">Living family portraits celebrating children, parents, grandparents, and the people who matter most in your life.</p>
              </div>
              <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Historical Figures</h3>
                <p className="text-warm-gray-300 text-sm">Icons, celebrities, historical figures, and inspirational people who have influenced your life and values.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Portrait Tattoos */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-crisp-white mb-6">Why Realistic Portrait Tattoos?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Eternal Memory</h3>
                    <p className="text-warm-gray-300">Keep loved ones close to your heart with incredibly detailed portraits that capture their unique characteristics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Emotional Connection</h3>
                    <p className="text-warm-gray-300">More than just ink - these tattoos carry deep emotional significance and personal meaning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Artistic Mastery</h3>
                    <p className="text-warm-gray-300">Showcase the highest level of tattoo artistry with photorealistic detail and precision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-muted-gold">Conversation Starter</h3>
                    <p className="text-warm-gray-300">Share stories and memories of the special people and pets who shaped your life.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-warm-gray-700">
              <Image
                src="/images/services/portrait-tattoo-process.jpg"
                alt="Realistic portrait tattoo process Greenbelt"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Greenbelt Community Connection */}
          <div className="bg-charcoal-gray/30 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-8">
              Serving Greenbelt's Close-Knit Community
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Local Access</h3>
                <p className="text-warm-gray-300">Just minutes from Greenbelt via Route 1, convenient for multiple sessions required for detailed portrait work.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Community Understanding</h3>
                <p className="text-warm-gray-300">Appreciate the tight-knit nature of Greenbelt and the importance of family and community connections.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Metro Accessible</h3>
                <p className="text-warm-gray-300">Easy access from Greenbelt Metro station for residents who prefer public transportation.</p>
              </div>
            </div>
          </div>

          {/* Portrait Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Portrait Tattoo Creation Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold text-muted-gold mb-2">Photo Consultation</h3>
                <p className="text-warm-gray-400 text-sm">Discuss reference photos, story behind the portrait, and emotional significance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold text-muted-gold mb-2">Design Development</h3>
                <p className="text-warm-gray-400 text-sm">Create detailed portrait design focusing on key facial features and expressions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold text-muted-gold mb-2">Layered Application</h3>
                <p className="text-warm-gray-400 text-sm">Multiple sessions building depth, shadows, and realistic detail layer by layer</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold text-muted-gold mb-2">Final Refinement</h3>
                <p className="text-warm-gray-400 text-sm">Perfect highlights, expressions, and final details for photorealistic results</p>
              </div>
            </div>
          </div>

          {/* Technical Excellence */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Portrait Tattoo Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-8">
                <h3 className="text-2xl font-bold text-muted-gold mb-4">Black & Grey Mastery</h3>
                <p className="text-warm-gray-300 mb-4">
                  Specialized in black and grey realism that brings portraits to life through expert 
                  shading, contrast, and tonal work.
                </p>
                <ul className="text-warm-gray-400 space-y-2">
                  <li>• Professional-grade black ink gradients</li>
                  <li>• Smooth shading transitions</li>
                  <li>• Perfect highlight placement</li>
                  <li>• Photorealistic depth and dimension</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-8">
                <h3 className="text-2xl font-bold text-muted-gold mb-4">Detail Precision</h3>
                <p className="text-warm-gray-300 mb-4">
                  Meticulous attention to facial features, expressions, and the subtle details 
                  that make each portrait truly recognizable.
                </p>
                <ul className="text-warm-gray-400 space-y-2">
                  <li>• Accurate facial proportions</li>
                  <li>• Detailed eye work and expressions</li>
                  <li>• Hair texture and flow</li>
                  <li>• Skin texture and aging details</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Memorial Tribute Section */}
          <div className="bg-charcoal-gray/30 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-8">
              Memorial Portrait Tattoos
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-warm-gray-300 leading-relaxed mb-8">
                Memorial portrait tattoos are deeply personal tributes that honor the memory of loved ones. 
                Jose understands the emotional significance of these pieces and approaches each memorial 
                tattoo with the reverence and care it deserves.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Sensitive Approach</h3>
                  <ul className="text-warm-gray-300 text-left space-y-2">
                    <li>• Compassionate consultation process</li>
                    <li>• Respectful discussion of memories</li>
                    <li>• Flexible scheduling for emotional needs</li>
                    <li>• Support throughout the healing process</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Meaningful Details</h3>
                  <ul className="text-warm-gray-300 text-left space-y-2">
                    <li>• Incorporation of significant dates</li>
                    <li>• Favorite expressions captured</li>
                    <li>• Background elements with meaning</li>
                    <li>• Text or quotes that honor memory</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Client Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Greenbelt Portrait Tattoo Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-muted-gold">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-300 mb-4">
                  "Jose created the most beautiful memorial portrait of my grandmother. Every detail 
                  was perfect - her smile, her eyes, everything that made her special. It's exactly 
                  how I want to remember her forever."
                </p>
                <p className="font-semibold text-muted-gold">- Patricia R., Greenbelt</p>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-muted-gold">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-warm-gray-300 mb-4">
                  "The portrait of my dog looks so real that people think it's a photograph. Jose 
                  captured his personality perfectly. The detail work is incredible - worth every 
                  session and every dollar."
                </p>
                <p className="font-semibold text-muted-gold">- Thomas H., College Park</p>
              </div>
            </div>
          </div>

          {/* Portrait FAQ */}
          <div className="bg-charcoal-gray/20 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">
              Portrait Tattoo FAQ
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  What makes a good reference photo for portraits?
                </h3>
                <p className="text-warm-gray-300">
                  High resolution photos with good lighting and clear facial features work best. 
                  We can work with older photos, but clearer images produce better results.
                </p>
              </div>
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  How many sessions do portrait tattoos require?
                </h3>
                <p className="text-warm-gray-300">
                  Most realistic portraits require 2-4 sessions depending on size and detail level. 
                  Memorial portraits often need extra time to ensure perfect emotional accuracy.
                </p>
              </div>
              <div className="border-b border-warm-gray-600 pb-6">
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  How much do portrait tattoos cost?
                </h3>
                <p className="text-warm-gray-300">
                  Portrait pricing varies by size and complexity. We provide detailed estimates during 
                  consultation and offer payment plans for larger memorial pieces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-2">
                  Can you work with family pets for portraits?
                </h3>
                <p className="text-warm-gray-300">
                  Absolutely! Pet portraits are very popular and meaningful to clients. We specialize 
                  in capturing the unique personality and characteristics of beloved animal companions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-muted-gold to-muted-gold-600 rounded-2xl p-8 text-ink-black text-center">
            <h2 className="text-3xl font-bold mb-4">Honor Your Loved Ones</h2>
            <p className="text-xl mb-8 opacity-90">
              Create lasting memories with professional realistic portrait tattoos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-ink-black text-muted-gold px-8 py-3 rounded-lg font-medium hover:bg-charcoal-gray transition-colors"
              >
                Book Portrait Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-ink-black text-ink-black px-8 py-3 rounded-lg font-medium hover:bg-ink-black hover:text-muted-gold transition-colors"
              >
                Discuss Memorial Tribute
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}