'use client'

import Link from 'next/link'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';
import { popularServices } from '@/data/services';
import { ServiceCard, TestimonialCard, EnhancedCard } from '@/components/UI/EnhancedCard';
import { VariedTestimonialCard, VariedServiceCard } from '@/components/UI/CardVariations';
import { SocialProofBanner, PriceTransparencyCard, FloatingBookingButton } from '@/components/UI/FloatingBookingButton';
import { LazyDropdown } from '@/components/UI/LazyDropdown';
import { featuredReviews, reviewStats } from '@/data/reviews';
import AppointmentBookingSchema from '@/components/seo/AppointmentBookingSchema';

// Note: SEO metadata moved to layout.tsx since this is now a client component

export default function Home() {
  // Use real Google reviews for schema
  const schemaReviews = featuredReviews.slice(0, 3).map(review => ({
    author: review.author,
    rating: review.rating,
    text: review.text,
    date: review.date
  }));

  const serviceNames = popularServices.map(service => service.name);

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema 
        reviews={schemaReviews}
        services={serviceNames}
      />
      
      {/* Appointment Booking Schema */}
      <AppointmentBookingSchema schemas={['reservation', 'schedule']} />
      
      {/* Enhanced Schema Markup for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Sueno Tattoo | Professional Tattoo Artist Jose",
            "description": "Professional tattoo artist Jose specializing in realistic tattoos, black and gray tattoos, custom tattoo design, fine line tattoos, minimalist tattoos, geometric tattoos, American traditional tattoos, watercolor tattoos, flash tattoos, neo traditional tattoos, and cover-up tattoos in Laurel, MD. Serving Prince George's County and DMV area.",
            "url": "https://www.suenotattoo.com",
            "image": "https://www.suenotattoo.com/images/logo/logo.png",
            "priceRange": "$100-$800",
            "telephone": "+12407583226",
            "email": "jpared19@outlook.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Laurel",
              "addressRegion": "MD",
              "postalCode": "20723",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.0993,
              "longitude": -76.8483
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "12:00",
                "closes": "18:00"
              }
            ],
            "serviceArea": {
              "@type": "Place",
              "name": "Laurel, MD and DMV area including Prince George's County, Beltsville, College Park, Greenbelt"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tattoo Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Tattoo Design",
                    "description": "Original custom tattoo designs created through collaborative consultation process"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "American Traditional Tattoos",
                    "description": "Classic American traditional tattoos with bold lines and vibrant colors"
                  }
                },                  {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Realistic Tattoos",
                    "description": "Photorealistic tattoos with incredible detail perfect for illustrative portraits"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Flash Tattoos",
                    "description": "Ready-to-ink flash tattoo designs available for same-day appointments"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cover-Up Tattoos",
                    "description": "Expert cover-up tattoos transforming unwanted ink into beautiful artwork"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Birth Flower Tattoos",
                    "description": "Meaningful birth flower tattoos by month including roses, daisies, and seasonal botanicals"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Zodiac Sign Tattoos",
                    "description": "Astrological tattoos featuring zodiac signs, constellations, and celestial designs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Seasonal Tattoos",
                    "description": "Seasonal designs perfect for graduation, birthdays, anniversaries, and special occasions"
                  }
                }
              ]
            },
            "employee": {
              "@type": "Person",
              "name": "Jose",
              "jobTitle": "Professional Tattoo Artist",
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional License",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Maryland State"
                }
              }
            },
            "review": schemaReviews.map(review => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.author
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": 5
              },
              "reviewBody": review.text,
              "datePublished": review.date
            }))
          })
        }}
      />

      {/* Voice Search FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is the best tattoo artist near me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jose at Sueño Tattoo in Laurel, MD is a professional tattoo artist with 8+ years of experience, specializing in custom designs, American traditional tattoos, and cover-ups. Located conveniently between Baltimore and Washington DC, serving the entire DMV area."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I get a good tattoo in Maryland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sueño Tattoo in Laurel, MD offers professional tattoo services with a 95% perfect healing rate. We serve College Park, Beltsville, Greenbelt, and surrounding Maryland communities with high-quality custom tattoos and traditional work."
                }
              },
              {
                "@type": "Question",
                "name": "How do I book a tattoo appointment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Call (240) 758-3226 or use our online booking system for a free consultation. We're open Thursday-Sunday from 12PM-6PM and welcome both appointments and walk-ins for consultations and smaller tattoos."
                }
              },
              {
                "@type": "Question",
                "name": "What makes a good tattoo shop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Look for proper licensing, clean facilities, experienced artists, portfolio quality, and client reviews. Sueño Tattoo maintains the highest safety standards with hospital-grade sterilization and uses only premium tattoo equipment and inks."
                }
              },
              {
                "@type": "Question",
                "name": "Can college students get tattoos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We welcome University of Maryland students and other college students. We offer student-friendly pricing, flexible scheduling around classes, and advice on professional tattoo placement for future careers."
                }
              },
              {
                "@type": "Question",
                "name": "Are tattoos appropriate for professionals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many professionals have tattoos! We help choose appropriate placement and designs that can be easily concealed for work environments while still allowing personal expression. Discrete placement options include areas covered by business attire."
                }
              }
            ]
          })
        }}
      />

      <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-ink-black via-charcoal-gray/50 to-ink-black pt-16" 
        aria-labelledby="hero-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(212,161,23,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,0,0,0.2)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 id="hero-heading" className="text-hero text-gold animate-fade-in">
            Jose - DMV Tattoo Artist | Maryland
          </h1>
          <h2 className="text-display-md mb-8 text-crisp-white animate-slide-up">
            Sueño Tattoo | Laurel, MD | 8+ Years Experience
          </h2>
          <p className="text-body-lg mb-12 text-crisp-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Licensed tattoo artist Laurel specializing in custom tattoo designs Laurel MD. 
            Realistic work, custom designs, and traditional styles. 
            Serving DMV area with 95% perfect healing rate. Same-day appointments available.
          </p>
          
          {/* Hero Buttons */}
          <nav className="flex gap-4 justify-center items-center flex-wrap mb-16" aria-label="Primary actions">
            <Link 
              href="/book-consultation"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-glow-red animate-fade-in focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink-black"
              aria-label="Book a free tattoo consultation with Jose"
            >
              Free Tattoo Consultation DMV
            </Link>
            <Link 
              href="/gallery"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 animate-fade-in focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink-black"
              aria-label="View Jose's tattoo portfolio and gallery"
            >
              View Gallery
            </Link>
          </nav>

          {/* Social Proof Banner */}
          <div className="animate-slide-up">
            <SocialProofBanner />
          </div>
        </div>
      </section>

      {/* Floating Booking Button */}
      <FloatingBookingButton />

      {/* Services Section */}
      <section className="py-20 px-4" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="services-heading" className="text-display-lg text-center mb-12 text-crisp-white">
            Realistic & Black Gray Tattoos in Laurel, MD
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-body-lg mb-6 text-crisp-white/90">
              Looking for custom tattoo designs Laurel MD? You've come to the right place. 
              I'm Jose, a licensed tattoo artist Laurel with over 8 years of experience.
            </p>
            
            <p className="text-body-lg mb-6 text-crisp-white/90">
              What makes me different? I really listen to what you want. 
              Whether it's your first tattoo or your tenth, I'll work with you. 
              My specialty is realistic work and black & gray pieces.
            </p>
            
            <p className="text-body-lg mb-8 text-crisp-white/90">
              Every tattoo I do is custom designed just for you. 
              No flash sheets or cookie-cutter designs. Just original art that tells your story. 
              Plus, I maintain the highest safety standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" role="list">
            <VariedServiceCard
              icon="👤"
              title="Realistic Tattoos & Black & Gray"
              description="Lifelike tattoos and detailed black & gray work with amazing detail and emotion."
              features={[
                'Photorealistic illustrative portraits and imagery',
                'Expert black and gray shading',
                'Memorial and nature pieces',
                'Wildlife and detailed artwork'
              ]}
              pricing="$150-300"
              delay={0}
              variant="modern"
              onClick={() => window.location.href = '/services/black-grey'}
            />
            <VariedServiceCard
              icon="🎨"
              title="Custom Tattoo Design"
              description="Original custom designs created through our tattoo consultation process."
              features={[
                'Personal consultation and design session',
                'Original artwork created just for you',
                'Multiple revisions included',
                'Digital mockups and placement guidance'
              ]}
              pricing="$150+ design fee"
              delay={0.1}
              variant="detailed"
              onClick={() => window.location.href = '/services/custom-tattoos'}
            />
            <VariedServiceCard
              icon="⚡"
              title="Fine Line & Minimalist Tattoos"
              description="Delicate fine line tattoos and minimalist designs with clean, simple elegance."
              features={[
                'Precise fine line work',
                'Minimalist aesthetic designs',
                'Delicate botanical elements',
                'Modern clean styling'
              ]}
              pricing="$100-200"
              delay={0.2}
              variant="minimal"
              onClick={() => window.location.href = '/services/fine-line'}
            />
          </div>
          
          {/* Additional Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-center">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-crisp-white mb-3">American Traditional Tattoos</h3>
              <p className="text-crisp-white/80 text-sm mb-4">Classic American traditional tattoos with bold lines, vibrant colors, and timeless imagery that honors old-school traditions.</p>
              <Link href="/services/traditional" className="text-gold hover:text-gold/80 text-sm font-medium">
                View Traditional Work →
              </Link>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-crisp-white mb-3">Geometric & Abstract Tattoos</h3>
              <p className="text-crisp-white/80 text-sm mb-4">Modern geometric tattoos and abstract designs combining mathematical precision with artistic flair.</p>
              <Link href="/services/geometric-tattoos" className="text-gold hover:text-gold/80 text-sm font-medium">
                Explore Geometric →
              </Link>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-crisp-white mb-3">Cover-Up Tattoos</h3>
              <p className="text-crisp-white/80 text-sm mb-4">Expert cover-up tattoos transforming unwanted ink into beautiful new artwork with creative design solutions.</p>
              <Link href="/services/cover-ups" className="text-gold hover:text-gold/80 text-sm font-medium">
                View Cover-Ups →
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/services" 
              className="inline-block bg-gold hover:bg-gold/80 text-ink-black px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink-black"
              aria-label="View all tattoo services offered at Sueno Tattoo"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-charcoal-gray/20" aria-labelledby="why-choose-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="why-choose-heading" className="text-display-lg mb-8 text-crisp-white">
            Why Choose Sueno Tattoo?
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-body-lg mb-6 text-crisp-white/90">
              Getting a tattoo is a big decision. 
              You want someone who knows what they're doing. Someone who cares about your vision. 
              That's exactly what you get at Sueno Tattoo.
            </p>
            
            <p className="text-body-lg mb-6 text-crisp-white/90">
              I've been tattooing since 2016. I've learned something important along the way. 
              It's not just about being good with a needle. It's about understanding people. 
              I take time to really talk with you about what you want.
            </p>
            
            <p className="text-body-lg mb-8 text-crisp-white/90">
              My clients come back because they trust me. 
              95% of my tattoos heal perfectly. That's because I follow strict safety protocols. 
              You're not just getting a tattoo. You're getting peace of mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12" role="list">
            <div role="listitem" className="text-center">
              <div className="text-stat text-gold mb-2" aria-label="8 plus years of professional experience">8+</div>
              <div className="text-crisp-white font-medium">Years Professional Experience</div>
              <p className="text-caption text-crisp-white/70 mt-2">Licensed tattoo artist since 2016</p>
            </div>
            <div role="listitem" className="text-center">
              <div className="text-stat text-gold mb-2" aria-label="Over 500 satisfied clients">500+</div>
              <div className="text-crisp-white font-medium">Satisfied Clients</div>
              <p className="text-caption text-crisp-white/70 mt-2">95% perfect healing rate</p>
            </div>
            <div role="listitem" className="text-center">
              <div className="text-stat text-gold mb-2" aria-label="100 percent licensed professional">100%</div>
              <div className="text-crisp-white font-medium">Licensed Professional</div>
              <p className="text-sm text-crisp-white/70 mt-2">Maryland State licensed facility</p>
            </div>
          </div>
          
          {/* Expertise Highlights */}
          <div className="max-w-3xl mx-auto bg-charcoal-gray/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-crisp-white mb-6 text-center">Expert Specializations</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-gold mb-3">Realistic Tattoos & Black & Gray Mastery</h4>
                <p className="text-crisp-white/80">Specializing in photorealistic tattoos and expert black & gray work with incredible detail, perfect for illustrative portraits, wildlife, and memorial pieces.</p>
              </div>
              <div>
                <h4 className="font-medium text-gold mb-3">Custom Tattoo Design Process</h4>
                <p className="text-crisp-white/80">From concept to completion, our custom tattoos are crafted through collaborative design sessions, ensuring your vision becomes reality.</p>
              </div>
              <div>
                <h4 className="font-medium text-gold mb-3">Fine Line & Minimalist Expertise</h4>
                <p className="text-crisp-white/80">Precise fine line tattoos and minimalist designs with delicate detail and modern aesthetic appeal for contemporary tattoo enthusiasts.</p>
              </div>
              <div>
                <h4 className="font-medium text-gold mb-3">Diverse Style Mastery</h4>
                <p className="text-crisp-white/80">Traditional, geometric, cover-ups, and watercolor tattoos - versatile expertise across all major tattoo styles and techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Tattoo Placement Guide */}
      <section className="py-20 px-4" aria-labelledby="placement-guide-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="placement-guide-heading" className="text-display-lg text-center mb-8 text-crisp-white">
            Tattoo Placement Guide | Expert Advice
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-body-lg mb-6 text-crisp-white/90">
              Choosing where to put your tattoo is just as important as choosing the design. 
              Think about it - you'll be living with this for life, so placement matters big time. 
              I help my clients think through all the factors that matter.
            </p>
            
            <p className="text-body-lg mb-6 text-crisp-white/90">
              Do you work in a conservative office? We'll find spots that can be easily covered. 
              Want to show off your ink? Let's talk about areas that look great and age well. 
              First tattoo? I'll guide you toward placements that are less painful and heal easily.
            </p>
            
            <p className="text-body-lg mb-8 text-crisp-white/90">
              After 8 years of doing this, I've learned that the right placement can make or break a tattoo. 
              Some areas stretch over time, others fade faster, and some just hurt more than others. 
              I'll give you the honest truth about what to expect so you can make the best choice.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Classic Placement Areas */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Professional Tattoo Placement Areas</h3>
              <div className="space-y-6">
                <div className="border-b border-crisp-white/10 pb-4">
                  <h4 className="font-semibold text-crisp-white mb-2 flex items-center">
                    <span className="text-2xl mr-3">💪</span>
                    Upper Arm & Shoulder
                  </h4>
                  <p className="text-crisp-white/80 text-sm mb-2">
                    Perfect for medium to large realistic and detailed pieces. Easy to conceal for work, great canvas for intricate designs.
                  </p>
                  <div className="text-xs text-crisp-white/60">
                    Best for: Illustrative portraits, realistic animals, detailed scenes • Size: 4-8 inches • Professional friendly
                  </div>
                </div>
                
                <div className="border-b border-crisp-white/10 pb-4">
                  <h4 className="font-semibold text-crisp-white mb-2 flex items-center">
                    <span className="text-2xl mr-3">🦾</span>
                    Forearm
                  </h4>
                  <p className="text-crisp-white/80 text-sm mb-2">
                    Ideal for showcasing detailed artwork and fine line designs. Natural flow with arm movement, excellent visibility.
                  </p>
                  <div className="text-xs text-crisp-white/60">
                    Best for: Fine line work, geometric patterns, small illustrative portraits • Size: 3-6 inches • Always visible
                  </div>
                </div>
                
                <div className="border-b border-crisp-white/10 pb-4">
                  <h4 className="font-semibold text-crisp-white mb-2 flex items-center">
                    <span className="text-2xl mr-3">👤</span>
                    Chest
                  </h4>
                  <p className="text-crisp-white/80 text-sm mb-2">
                    Premium canvas for large realistic pieces and detailed black & gray work. Symmetrical placement options, easy to conceal.
                  </p>
                  <div className="text-xs text-crisp-white/60">
                    Best for: Large illustrative portraits, realistic scenes, memorial pieces • Size: 6-12 inches • Completely concealable
                  </div>
                </div>
                
                <div className="border-b border-crisp-white/10 pb-4">
                  <h4 className="font-semibold text-crisp-white mb-2 flex items-center">
                    <span className="text-2xl mr-3">🦵</span>
                    Thigh
                  </h4>
                  <p className="text-crisp-white/80 text-sm mb-2">
                    Large flat surface ideal for detailed realistic work and complex designs. Minimal distortion, easy healing.
                  </p>
                  <div className="text-xs text-crisp-white/60">
                    Best for: Large realistic pieces, detailed scenes, complex artwork • Size: 6-10 inches • Easily concealed
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-crisp-white mb-2 flex items-center">
                    <span className="text-2xl mr-3">🔙</span>
                    Back & Shoulder Blade
                  </h4>
                  <p className="text-crisp-white/80 text-sm mb-2">
                    Premium real estate for statement pieces and large-scale artwork. Natural canvas shape, professional-friendly.
                  </p>
                  <div className="text-xs text-crisp-white/60">
                    Best for: Large realistic scenes, detailed artwork, illustrative portraits • Size: 8-16 inches • Work appropriate
                  </div>
                </div>
              </div>
            </div>
            
            {/* Size & Professional Considerations */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Size & Professional Considerations</h3>
              <div className="space-y-6">
                <div className="bg-charcoal-gray/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-3">Small Traditional Tattoos (2-4 inches)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-crisp-white/90 font-medium mb-2">Best Placements:</p>
                      <ul className="text-crisp-white/70 space-y-1">
                        <li>• Wrist & ankle</li>
                        <li>• Behind ear</li>
                        <li>• Inner arm</li>
                        <li>• Calf</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-crisp-white/90 font-medium mb-2">Perfect For:</p>
                      <ul className="text-crisp-white/70 space-y-1">
                        <li>• First tattoos</li>
                        <li>• Simple symbols</li>
                        <li>• Flash designs</li>
                        <li>• Budget-friendly</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-charcoal-gray/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-3">Medium Traditional Tattoos (4-8 inches)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-crisp-white/90 font-medium mb-2">Best Placements:</p>
                      <ul className="text-crisp-white/70 space-y-1">
                        <li>• Upper arm</li>
                        <li>• Forearm</li>
                        <li>• Shoulder</li>
                        <li>• Calf</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-crisp-white/90 font-medium mb-2">Perfect For:</p>
                      <ul className="text-crisp-white/70 space-y-1">
                        <li>• Detailed designs</li>
                        <li>• Traditional imagery</li>
                        <li>• Memorial pieces</li>
                        <li>• Statement tattoos</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-charcoal-gray/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gold mb-3">Large Traditional Tattoos (8+ inches)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-crisp-white/90 font-medium mb-2">Best Placements:</p>
                      <ul className="text-crisp-white/70 space-y-1">
                        <li>• Back</li>
                        <li>• Chest</li>
                        <li>• Thigh</li>
                        <li>• Full sleeve</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-crisp-white/90 font-medium mb-2">Perfect For:</p>
                      <ul className="text-crisp-white/70 space-y-1">
                        <li>• Complex scenes</li>
                        <li>• Multiple sessions</li>
                        <li>• Portfolio pieces</li>
                        <li>• Serious collectors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional & Lifestyle Considerations */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-accent p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">👔</div>
              <h4 className="text-lg font-semibold text-gold mb-3">Professional-Friendly Placements</h4>
              <p className="text-crisp-white/80 text-sm mb-4">
                Easily concealed areas perfect for medical professionals, government workers, corporate professionals, and those requiring discrete tattoos.
              </p>
              <div className="text-xs text-crisp-white/60">
                Upper arm, chest, back, thigh - hidden under business attire
              </div>
            </div>
            
            <div className="glass-accent p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h4 className="text-lg font-semibold text-gold mb-3">Visible Showcase Areas</h4>
              <p className="text-crisp-white/80 text-sm mb-4">
                Perfect for those who want to display their traditional tattoo artwork and don't have workplace restrictions.
              </p>
              <div className="text-xs text-crisp-white/60">
                Forearm, hand, neck, calf - always visible statement pieces
              </div>
            </div>
            
            <div className="glass-accent p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h4 className="text-lg font-semibold text-gold mb-3">Aging & Longevity</h4>
              <p className="text-crisp-white/80 text-sm mb-4">
                Strategic placement ensures your traditional tattoo ages beautifully with minimal distortion over time.
              </p>
              <div className="text-xs text-crisp-white/60">
                Areas with stable skin and muscle structure for lasting quality
              </div>
            </div>
          </div>
          
          {/* Traditional Tattoo Building Tips */}
          <div className="glass-panel p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-crisp-white">
              Building Your Traditional Tattoo Collection | Sleeve Planning Guide
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="font-semibold text-crisp-white mb-2">Traditional Sleeve Progression</h4>
                <p className="text-crisp-white/80 text-xs">
                  Start with upper arm traditional pieces, add forearm tattoos, connect with flowing elements for cohesive traditional sleeve design.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-semibold text-crisp-white mb-2">Traditional Tattoo Theme Consistency</h4>
                <p className="text-crisp-white/80 text-xs">
                  Maintain classic American traditional color palette and imagery themes across multiple tattoo pieces for unified collection.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="font-semibold text-crisp-white mb-2">Tattoo Body Balance Planning</h4>
                <p className="text-crisp-white/80 text-xs">
                  Consider visual weight distribution - balance large traditional tattoo pieces across different body areas for symmetrical design.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📅</div>
                <h4 className="font-semibold text-crisp-white mb-2">Multi-Session Tattoo Planning</h4>
                <p className="text-crisp-white/80 text-xs">
                  Large traditional tattoo pieces may require multiple tattoo sessions - plan placement for proper healing between appointments.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-crisp-white mb-4">
              Ready to Plan Your Perfect Traditional Tattoo Placement?
            </h3>
            <p className="text-crisp-white/80 mb-8 max-w-2xl mx-auto">
              Get expert placement advice during your free consultation. Jose will help you choose the optimal location 
              based on your design, lifestyle, and future tattoo goals.
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Link 
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                aria-label="Book consultation for tattoo placement advice"
              >
                Get Placement Consultation
              </Link>
              <Link 
                href="/gallery"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all inline-block"
                aria-label="View traditional tattoo placement examples"
              >
                View Placement Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Care Section */}
      <section className="py-20 px-4 bg-charcoal-gray/10" aria-labelledby="professional-care-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="professional-care-heading" className="text-display-lg mb-8 text-crisp-white">
            Complete Professional Care by Your DMV Tattoo Artist
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-body-lg mb-6 text-crisp-white/90">
              Getting a tattoo shouldn't feel like you're on your own. 
              From your first consultation until your tattoo is fully healed, I'm here to support you. 
              This is your journey. I want to make sure it's a great one.
            </p>
            
            <p className="text-body-lg mb-6 text-crisp-white/90">
              We start with a real conversation about what you want. 
              No rushing, no pressure. Just honest talk about your ideas. 
              Then I create a custom design that's 100% yours.
            </p>
            
            <p className="text-body-lg mb-8 text-crisp-white/90">
              After your tattoo session, I don't just send you home with a pamphlet. 
              I give you detailed aftercare instructions. I'm always available if you have questions. 
              Your tattoo healing well is just as important to me as it is to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-crisp-white mb-3">Custom Design</h3>
              <p className="text-crisp-white/80 text-sm">
                Personalized consultation and original artwork creation for your unique vision.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-crisp-white mb-3">Professional Tattooing</h3>
              <p className="text-crisp-white/80 text-sm mb-4">
                Licensed Maryland tattoo artist with bloodborne pathogen certification.
                Autoclave sterilization, single-use needles, and strict infection control protocols.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-charcoal-gray/40 rounded p-2">
                  <div className="text-gold">✓</div>
                  <div className="text-crisp-white/70">Autoclave Certified</div>
                </div>
                <div className="bg-charcoal-gray/40 rounded p-2">
                  <div className="text-gold">✓</div>
                  <div className="text-crisp-white/70">Single-Use Needles</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-crisp-white mb-3">Tattoo Aftercare</h3>
              <p className="text-crisp-white/80 text-sm">
                Comprehensive healing support and Maryland-specific aftercare guidance.
              </p>
              <Link 
                href="/aftercare" 
                className="text-gold hover:text-gold/80 text-sm font-medium mt-2 inline-block"
                aria-label="Complete tattoo aftercare guide"
              >
                Complete Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="testimonials-heading" className="text-display-lg text-center mb-12 text-crisp-white">
            Client Stories & Reviews
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.slice(0, 6).map((review, index) => {
              // Cycle through different testimonial styles
              const styles = ['modern', 'detailed', 'quote', 'compact', 'minimal', 'default'] as const
              const style = styles[index % styles.length]
              
              return (
                <VariedTestimonialCard
                  key={review.id}
                  name={review.author}
                  location={review.location || "DMV Area"}
                  rating={review.rating}
                  text={review.text}
                  delay={index * 0.1}
                  style={style}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Price Transparency & Service Area */}
      <section className="py-20 px-4 bg-charcoal-gray/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Price Transparency */}
          <div>
            <PriceTransparencyCard />
            
            {/* Payment Methods Section */}
            <div className="mt-8">
              <EnhancedCard className="bg-charcoal-gray/30 border-charcoal-gray/50 p-6">
                <h3 className="text-display-sm mb-4 text-gold text-center">
                  Payment Methods & Booking
                </h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-crisp-white/90 mb-3">
                      We accept cash, credit cards, and Venmo for your convenience.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-charcoal-gray/40 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">💵</div>
                        <div className="text-sm text-crisp-white">Cash</div>
                      </div>
                      <div className="bg-charcoal-gray/40 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">💳</div>
                        <div className="text-sm text-crisp-white">Credit Cards</div>
                      </div>
                      <div className="bg-charcoal-gray/40 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">📱</div>
                        <div className="text-sm text-crisp-white">Venmo</div>
                      </div>
                    </div>
                    <div className="bg-deep-red/20 rounded-lg p-3 border border-deep-red/30">
                      <p className="text-crisp-white text-sm">
                        <strong>$50 deposit required</strong> to book appointments. 
                        Remaining balance due day of session.
                      </p>
                    </div>
                  </div>
                </div>
              </EnhancedCard>
            </div>
          </div>
          
          {/* Service Area */}
          <div>
            <EnhancedCard className="bg-charcoal-gray/30 border-charcoal-gray/50 p-8 h-full">
              <h3 className="text-display-sm mb-6 text-crisp-white text-center">
                Serving the Greater DMV Area
              </h3>
              <p className="text-crisp-white/90 text-center mb-6">
                Proudly serving clients throughout Prince George's County and surrounding areas
              </p>
              
              {/* Transit Accessibility */}
              <div className="bg-charcoal-gray/40 rounded-lg p-4 mb-6">
                <h4 className="text-gold text-sm font-medium mb-3 text-center">Easy to Reach Location</h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="text-lg mb-1">🚗</div>
                    <div className="text-crisp-white">I-95 Corridor</div>
                    <div className="text-crisp-white/60">Route 1 Access</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg mb-1">🚆</div>
                    <div className="text-crisp-white">MARC Train</div>
                    <div className="text-crisp-white/60">Laurel Station</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg mb-1">✈️</div>
                    <div className="text-crisp-white">BWI Airport</div>
                    <div className="text-crisp-white/60">15 minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg mb-1">🏢</div>
                    <div className="text-crisp-white">Fort Meade</div>
                    <div className="text-crisp-white/60">10 minutes</div>
                  </div>
                </div>
              </div>
              
              {/* Local Area Expertise Dropdown */}
              <div className="mt-6">
                <LazyDropdown question="Professional tattoo studio DMV - Local Area Expertise">
                  <div className="text-xs space-y-1">
                    <p><strong>Laurel, MD:</strong> Main location with full studio</p>
                    <p><strong>Beltsville:</strong> Serving UMD area students</p>
                    <p><strong>College Park:</strong> Custom designs for UMD community</p>
                    <p><strong>Greenbelt:</strong> Professional tattoos for government workers</p>
                    <p><strong>Fort Meade:</strong> Military-friendly scheduling</p>
                  </div>
                </LazyDropdown>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { city: 'Laurel', state: 'MD', isMain: true },
                  { city: 'Beltsville', state: 'MD' },
                  { city: 'College Park', state: 'MD' },
                  { city: 'Greenbelt', state: 'MD' },
                  { city: 'Hyattsville', state: 'MD' },
                  { city: 'Riverdale Park', state: 'MD' },
                  { city: 'Bladensburg', state: 'MD' },
                  { city: 'New Carrollton', state: 'MD' }
                ].map((location, index) => (
                  <div key={index} className={`p-3 rounded-lg text-center transition-colors ${location.isMain ? 'bg-gold/20 border border-gold/50 text-gold' : 'bg-charcoal-gray/50 text-crisp-white hover:bg-charcoal-gray/70'}`}>
                    <div className="font-medium text-label">{location.city}</div>
                    <div className="text-caption opacity-70">{location.state}</div>
                    {location.isMain && <div className="text-caption mt-1">Main Location</div>}
                  </div>
                ))}
              </div>
            </EnhancedCard>
          </div>
        </div>
      </section>

      {/* Seasonal & Zodiac Section */}
      <section className="py-20 px-4 bg-charcoal-gray/10" aria-labelledby="seasonal-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="seasonal-heading" className="text-display-lg text-center mb-12 text-crisp-white">
            Birth Flower & Zodiac Tattoos
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-body-lg mb-6 text-crisp-white/90">
              Want a tattoo that's deeply personal? Birth flowers and zodiac signs make incredible tattoos. 
              There's something special about wearing art that represents exactly when you came into this world. 
              Plus, they're beautiful and full of meaning.
            </p>
            
            <p className="text-body-lg mb-6 text-crisp-white/90">
              I love doing these because every person's story is different. 
              Maybe you want your birth flower to honor a loved one, or your zodiac sign to celebrate your personality. 
              These tattoos work great as standalone pieces or as part of a larger design.
            </p>
            
            <p className="text-body-lg mb-8 text-crisp-white/90">
              The timing is perfect too - graduation season, birthdays, anniversaries, or just because. 
              I can create these in any style you want, from delicate line work to bold traditional designs. 
              Let's make something that's uniquely yours.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Birth Flowers */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Birth Flower Tattoos by Month</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { month: 'January', flower: 'Carnation', meaning: 'Love & Fascination', season: 'Winter' },
                  { month: 'February', flower: 'Violet', meaning: 'Modesty & Faithfulness', season: 'Winter' },
                  { month: 'March', flower: 'Daffodil', meaning: 'New Beginnings', season: 'Spring' },
                  { month: 'April', flower: 'Daisy', meaning: 'Purity & Innocence', season: 'Spring' },
                  { month: 'May', flower: 'Lily of the Valley', meaning: 'Humility & Sweetness', season: 'Spring' },
                  { month: 'June', flower: 'Rose', meaning: 'Love & Passion', season: 'Summer' },
                  { month: 'July', flower: 'Larkspur', meaning: 'Positivity & Dignity', season: 'Summer' },
                  { month: 'August', flower: 'Gladiolus', meaning: 'Strength & Integrity', season: 'Summer' },
                  { month: 'September', flower: 'Aster', meaning: 'Wisdom & Valor', season: 'Fall' },
                  { month: 'October', flower: 'Marigold', meaning: 'Creativity & Warmth', season: 'Fall' },
                  { month: 'November', flower: 'Chrysanthemum', meaning: 'Loyalty & Honesty', season: 'Fall' },
                  { month: 'December', flower: 'Poinsettia', meaning: 'Good Cheer & Success', season: 'Winter' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-charcoal-gray/20 rounded-lg">
                    <div>
                      <span className="font-semibold text-crisp-white">{item.month}</span>
                      <span className="text-gold ml-2">{item.flower}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-crisp-white/80 text-sm">{item.meaning}</div>
                      <div className="text-crisp-white/60 text-xs">{item.season} Tattoo</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Zodiac Signs */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Zodiac Sign Tattoos by Date</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { sign: 'Aquarius', dates: 'Jan 20 - Feb 18', element: 'Air', symbol: '♒' },
                  { sign: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water', symbol: '♓' },
                  { sign: 'Aries', dates: 'Mar 21 - Apr 19', element: 'Fire', symbol: '♈' },
                  { sign: 'Taurus', dates: 'Apr 20 - May 20', element: 'Earth', symbol: '♉' },
                  { sign: 'Gemini', dates: 'May 21 - Jun 20', element: 'Air', symbol: '♊' },
                  { sign: 'Cancer', dates: 'Jun 21 - Jul 22', element: 'Water', symbol: '♋' },
                  { sign: 'Leo', dates: 'Jul 23 - Aug 22', element: 'Fire', symbol: '♌' },
                  { sign: 'Virgo', dates: 'Aug 23 - Sep 22', element: 'Earth', symbol: '♍' },
                  { sign: 'Libra', dates: 'Sep 23 - Oct 22', element: 'Air', symbol: '♎' },
                  { sign: 'Scorpio', dates: 'Oct 23 - Nov 21', element: 'Water', symbol: '♏' },
                  { sign: 'Sagittarius', dates: 'Nov 22 - Dec 21', element: 'Fire', symbol: '♐' },
                  { sign: 'Capricorn', dates: 'Dec 22 - Jan 19', element: 'Earth', symbol: '♑' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-charcoal-gray/20 rounded-lg">
                    <div>
                      <span className="font-semibold text-crisp-white">{item.sign}</span>
                      <span className="text-gold ml-2 text-xl">{item.symbol}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-crisp-white/80 text-sm">{item.dates}</div>
                      <div className="text-crisp-white/60 text-xs">{item.element} Element</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Seasonal Occasions */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-accent p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-gold mb-3">🎓 Graduation Tattoos</h4>
              <p className="text-crisp-white/80 text-sm mb-4">Celebrate your achievements with meaningful graduation tattoos, zodiac signs, or birth flowers.</p>
              <div className="text-crisp-white/60 text-xs">Spring/Summer Special</div>
            </div>
            <div className="glass-accent p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-gold mb-3">🎂 Birthday Tattoos</h4>
              <p className="text-crisp-white/80 text-sm mb-4">Birth flower tattoos and zodiac sign tattoos make perfect birthday gifts to yourself.</p>
              <div className="text-crisp-white/60 text-xs">Year-Round Availability</div>
            </div>
            <div className="glass-accent p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-gold mb-3">💕 Anniversary Tattoos</h4>
              <p className="text-crisp-white/80 text-sm mb-4">Couple birth flowers, matching zodiac signs, or meaningful date tattoos.</p>
              <div className="text-crisp-white/60 text-xs">Valentine's & Beyond</div>
            </div>
            <div className="glass-accent p-6 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-gold mb-3">🌸 Seasonal Designs</h4>
              <p className="text-crisp-white/80 text-sm mb-4">Spring florals, summer botanicals, fall leaves, winter constellations.</p>
              <div className="text-crisp-white/60 text-xs">Seasonal Specials</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/book-consultation"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block mr-4"
              aria-label="Book consultation for birth flower or zodiac tattoo"
            >
              Book Birth Flower Consultation
            </Link>
            <Link 
              href="/gallery"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              aria-label="View botanical and zodiac tattoo portfolio"
            >
              View Botanical Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-display-lg text-center mb-12 text-crisp-white">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {/* Voice Search FAQ Section */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gold mb-4">Voice Search Questions</h3>
              <div className="space-y-4">
                <LazyDropdown question="Where can I get a tattoo consultation in Laurel Maryland?">
                  <p>Sueño Tattoo in Laurel, MD! Free tattoo consultation DMV area. Near I-95 and Route 1. Open Thu-Sun, 12PM-6PM.</p>
                </LazyDropdown>
                
                <LazyDropdown question="How much does Jose charge for tattoos?">
                  <p>Small tattoos: $100-200. Custom designs: $150+ design fee. Large work: $300-600+. Pricing varies by size and detail.</p>
                </LazyDropdown>
                
                <LazyDropdown question="What are Sueño Tattoo's hours today?">
                  <p>Open Thu-Sun, 12PM-6PM. Closed Mon-Wed. Same day tattoo consultation available - call (240) 758-3226.</p>
                </LazyDropdown>
                
                <LazyDropdown question="Is there parking at Sueño Tattoo?">
                  <p>Yes! Free parking on-site. Easy I-95 and Route 1 access. 15 min from BWI Airport, 10 min from Fort Meade.</p>
                </LazyDropdown>
                
                <LazyDropdown question="Can I get a same day tattoo consultation in Laurel?">
                  <p>Yes! Same day tattoo consultation for walk-ins. Limited small tattoo availability. Call ahead: (240) 758-3226.</p>
                </LazyDropdown>
              </div>
            </div>

            {/* Pain Levels FAQ */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gold mb-3">How much do tattoos hurt?</h3>
              <p className="text-crisp-white/90 mb-4">
                Pain levels vary by location and person. Most people describe it as a scratching or burning sensation. 
                Areas with more muscle and fat (like arms and thighs) typically hurt less than bony areas (like ribs or ankles).
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-gold text-sm font-medium mb-2">Less Painful Areas:</h4>
                  <ul className="text-crisp-white/80 text-sm space-y-1">
                    <li>• Upper arm and shoulder</li>
                    <li>• Forearm</li>
                    <li>• Thigh</li>
                    <li>• Calf</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gold text-sm font-medium mb-2">More Sensitive Areas:</h4>
                  <ul className="text-crisp-white/80 text-sm space-y-1">
                    <li>• Ribs and chest</li>
                    <li>• Ankles and feet</li>
                    <li>• Spine</li>
                    <li>• Inner arm</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* First-Timer vs Enthusiast Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gold mb-3">First Tattoo? Start Here</h3>
                <p className="text-crisp-white/90 mb-4">
                  Getting your first tattoo is exciting! I specialize in making first-timers feel comfortable and confident.
                </p>
                
                <LazyDropdown question="Best tattoo styles for first timers">
                  <div className="space-y-1 text-xs">
                    <p><strong>Simple Line Work:</strong> Clean, minimalist designs</p>
                    <p><strong>Small Traditional:</strong> Classic bold designs</p>
                    <p><strong>Text & Symbols:</strong> Meaningful words/symbols</p>
                    <p><strong>Botanical:</strong> Flowers and nature designs</p>
                  </div>
                </LazyDropdown>
                
                <ul className="text-crisp-white/80 text-sm space-y-2">
                  <li>• <strong>Free consultation</strong> to discuss your ideas</li>
                  <li>• <strong>Beginner-friendly designs</strong> that age well</li>
                  <li>• <strong>Painless tattoo techniques</strong> when possible</li>
                  <li>• <strong>Small tattoo options</strong> to start your journey</li>
                  <li>• <strong>Complete aftercare guidance</strong> included</li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gold mb-3">Building Your Collection?</h3>
                <p className="text-crisp-white/90 mb-4">
                  Already have ink? Let's create something amazing to add to your collection.
                </p>
                
                <LazyDropdown question="Creative cover-up solutions">
                  <div className="space-y-1 text-xs">
                    <p><strong>Design Integration:</strong> Work old tattoos into new pieces</p>
                    <p><strong>Style Transformation:</strong> Update with modern techniques</p>
                    <p><strong>Color Correction:</strong> Fix faded color work</p>
                    <p><strong>Complete Rework:</strong> Transform unwanted tattoos</p>
                  </div>
                </LazyDropdown>
                
                <ul className="text-crisp-white/80 text-sm space-y-2">
                  <li>• <strong>Custom sleeve design</strong> and planning</li>
                  <li>• <strong>Large scale tattoos</strong> over multiple sessions</li>
                  <li>• <strong>Creative cover-up solutions</strong> for old work</li>
                  <li>• <strong>Collection cohesion</strong> planning</li>
                  <li>• <strong>Advanced techniques</strong> for complex designs</li>
                </ul>
              </div>
            </div>

            {/* Pricing & Booking FAQ */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gold mb-3">How much do tattoos cost in DMV?</h3>
              
              <div className="space-y-4 mb-6">
                <LazyDropdown question="Small Tattoo Cost (2-4 inches)">
                  <div className="text-sm">
                    <p><strong>$100-$200</strong> depending on detail and placement</p>
                    <p>Perfect for first-time tattoos, simple designs, text, small symbols</p>
                  </div>
                </LazyDropdown>
                
                <LazyDropdown question="Custom Tattoo Consultation Maryland - Process & Pricing">
                  <div className="text-sm">
                    <p><strong>$150+ design fee</strong> then hourly rate for tattooing</p>
                    <p>Includes: consultation, custom design, revisions, placement guidance</p>
                    <p>Tattoo consultation process: Meet → Design → Approve → Schedule → Tattoo</p>
                  </div>
                </LazyDropdown>
                
                <LazyDropdown question="Large Scale Work & Sleeves">
                  <div className="text-sm">
                    <p><strong>$300-$600+</strong> depending on size and complexity</p>
                    <p>Multiple sessions may be required for large pieces</p>
                  </div>
                </LazyDropdown>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gold text-sm font-medium mb-2">Book tattoo consultation Laurel:</h4>
                  <p className="text-crisp-white/90 mb-3">Call (240) 758-3226 or walk-in for consultations</p>
                  
                  <h4 className="text-gold text-sm font-medium mb-2">Tattoo appointment Maryland:</h4>
                  <p className="text-crisp-white/90 mb-3">$50 deposit required to secure your appointment</p>
                </div>
                <div>
                  <h4 className="text-gold text-sm font-medium mb-2">Schedule tattoo session:</h4>
                  <p className="text-crisp-white/90 mb-3">Online booking or call directly for fastest service</p>
                  
                  <h4 className="text-gold text-sm font-medium mb-2">Same Day Appointments:</h4>
                  <p className="text-crisp-white/90">Available for small tattoos - call to check availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="contact-heading" className="text-display-lg mb-8 text-crisp-white">
            Ready to Start Your Custom Tattoo Design Journey?
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-body-lg mb-6 text-crisp-white/90">
              Here's what happens next. Reach out and we'll set up a free tattoo consultation DMV. 
              No commitment, no pressure. Just a chance to meet and talk about your ideas. 
              I'm right here in Laurel, MD. I work with people all over the DMV area.
            </p>
            
            <p className="text-body-lg mb-6 text-crisp-white/90">
              You can call me directly, send a message, or just stop by the shop. 
              I love talking about tattoos. I'd love to hear what you're thinking about. 
              Even if you're not ready to book today, I'm happy to answer your questions.
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Link 
              href="/contact"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              aria-label="Contact Sueno Tattoo for consultation or booking"
            >
              Get In Touch
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
      </section>
    </div>
    </>
  )
}

