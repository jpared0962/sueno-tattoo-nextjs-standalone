'use client'

import Link from 'next/link'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';
import { popularServices } from '@/data/services';
import { ServiceCard, TestimonialCard, EnhancedCard } from '@/components/UI/EnhancedCard';
import { VariedTestimonialCard, VariedServiceCard } from '@/components/UI/CardVariations';
import { SocialProofBanner, PriceTransparencyCard, FloatingBookingButton } from '@/components/UI/FloatingBookingButton';
import { featuredReviews, reviewStats } from '@/data/reviews';

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
      
      {/* Enhanced Schema Markup for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Sueno Tattoo | Professional Tattoo Artist Jose",
            "description": "Professional tattoo artist Jose specializing in custom tattoo design, American traditional tattoos, realistic tattoos, fine line tattoos, minimalist tattoos, geometric tattoos, watercolor tattoos, flash tattoos, neo traditional tattoos, and cover-up tattoos in Laurel, MD. Serving Prince George's County and DMV area.",
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
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Realistic Tattoos",
                    "description": "Photorealistic tattoos with incredible detail perfect for portraits"
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
            Jose - Professional DMV Tattoo Artist | Maryland Tattoo Artist
          </h1>
          <h2 className="text-display-md mb-8 text-crisp-white animate-slide-up">
            Sueño Tattoo | Laurel, MD | 8+ Years Experience
          </h2>
          <p className="text-body-lg mb-12 text-crisp-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Licensed professional specializing in custom tattoo design, American traditional tattoos, 
            realistic tattoos, fine line tattoos, minimalist tattoos, geometric tattoos, watercolor tattoos, flash tattoos, neo traditional tattoos, and cover-up tattoos. Serving Laurel, MD and DMV area with 95% perfect healing rate, same-day appointments available.
          </p>
          
          {/* Hero Buttons */}
          <nav className="flex gap-4 justify-center items-center flex-wrap mb-16" aria-label="Primary actions">
            <Link 
              href="/book-consultation"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-glow-red animate-fade-in focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink-black"
              aria-label="Book a free tattoo consultation with Jose"
            >
              Book Free Consult
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
            Professional Custom Tattoos & American Traditional Tattoos in Laurel, MD
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" role="list">
            <VariedServiceCard
              icon="⚡"
              title="American Traditional Tattoos"
              description="Bold, timeless American traditional tattoos with vibrant colors and clean lines that honor classic tattooing traditions."
              features={[
                'Classic bold lines and vibrant colors',
                'Traditional imagery and motifs',
                'Time-tested designs that age beautifully',
                'Authentic old-school techniques'
              ]}
              pricing="$100-200"
              delay={0}
              variant="modern"
              onClick={() => window.location.href = '/services/traditional'}
            />
            <VariedServiceCard
              icon="🎨"
              title="Custom Tattoo Design"
              description="Original custom tattoo design created specifically for you through our collaborative custom tattoos process."
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
              icon="👤"
              title="Realistic Tattoos & Realism Work"
              description="Lifelike realistic tattoos capturing incredible detail and emotion with photorealistic precision in our realism work tattoos."
              features={[
                'Black and grey or color options',
                'Photo-realistic detail and shading',
                'Memorial and nature pieces',
                'Wildlife and detailed imagery'
              ]}
              pricing="$150-250"
              delay={0.2}
              variant="minimal"
              onClick={() => window.location.href = '/services/black-grey'}
            />
          </div>
          
          {/* Additional Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-center">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-crisp-white mb-3">Flash Tattoos</h3>
              <p className="text-crisp-white/80 text-sm mb-4">Ready-to-ink flash tattoos with traditional American styling and bold designs for same-day appointments.</p>
              <Link href="/flash" className="text-gold hover:text-gold/80 text-sm font-medium">
                Browse Flash Designs →
              </Link>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-crisp-white mb-3">Neo Traditional Tattoos</h3>
              <p className="text-crisp-white/80 text-sm mb-4">Modern neo traditional tattoos combining classic elements with contemporary artistic flair and enhanced color palettes.</p>
              <Link href="/services" className="text-gold hover:text-gold/80 text-sm font-medium">
                Learn More →
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
            Why Choose Sueno Tattoo for Custom Tattoos & American Traditional Tattoos in Laurel, MD?
          </h2>
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
                <h4 className="font-medium text-gold mb-3">Custom Tattoo Design Process</h4>
                <p className="text-crisp-white/80">From concept to completion, our custom tattoos are crafted through collaborative design sessions, ensuring your vision becomes reality.</p>
              </div>
              <div>
                <h4 className="font-medium text-gold mb-3">American Traditional Tattoos</h4>
                <p className="text-crisp-white/80">Authentic American traditional tattoos with bold lines, vibrant colors, and timeless imagery that honors classic tattooing heritage.</p>
              </div>
              <div>
                <h4 className="font-medium text-gold mb-3">Realistic Tattoos & Realism Work</h4>
                <p className="text-crisp-white/80">Photorealistic tattoos with incredible detail, perfect for portraits, wildlife, and memorial pieces that capture life-like quality.</p>
              </div>
              <div>
                <h4 className="font-medium text-gold mb-3">Flash Tattoos & Cover-Up Tattoos</h4>
                <p className="text-crisp-white/80">Ready-to-ink flash tattoos for same-day appointments, plus expert cover-up tattoos that transform unwanted ink into beautiful new art.</p>
              </div>
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
          <p className="text-body-lg mb-12 text-crisp-white/90 max-w-2xl mx-auto leading-relaxed">
            From consultation to healing, receive comprehensive support throughout your tattoo journey with expert Maryland tattoo aftercare guidance.
          </p>
          
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
              <p className="text-crisp-white/80 text-sm">
                Licensed facility with sterile techniques and 8+ years of expertise.
              </p>
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
            What Our Custom Tattoo & American Traditional Tattoo Clients Say
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
          </div>
          
          {/* Service Area */}
          <div>
            <EnhancedCard className="bg-charcoal-gray/30 border-charcoal-gray/50 p-8 h-full">
              <h3 className="text-display-sm mb-6 text-crisp-white text-center">
                Serving the Greater DMV Area
              </h3>
              <p className="text-crisp-white/90 text-center mb-8">
                Proudly serving clients throughout Prince George's County and surrounding areas
              </p>
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
            Birth Flower Tattoos & Zodiac Sign Tattoos | Seasonal Designs
          </h2>
          <p className="text-center text-crisp-white/80 mb-12 max-w-3xl mx-auto">
            Celebrate your birth month with meaningful birth flower tattoos and zodiac sign tattoos. 
            Jose specializes in botanical tattoos, astrological tattoos, and seasonal designs perfect for graduation gifts, 
            anniversary tattoos, birthday tattoos, and special occasions.
          </p>
          
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

      {/* Contact Section */}
      <section className="py-20 px-4" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="contact-heading" className="text-display-lg mb-8 text-crisp-white">
            Ready to Start Your Custom Tattoo Design Journey?
          </h2>
          <p className="text-body-lg mb-8 text-crisp-white/90">
            Located in Laurel, MD, serving Prince George&apos;s County and the entire DMV area. 
            Free consultations available for custom tattoos, American traditional tattoos, realistic tattoos, flash tattoos, neo traditional tattoos, and cover-up tattoos.
          </p>
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

