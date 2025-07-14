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
            Jose - Professional Tattoo Artist
          </h1>
          <h2 className="text-display-md mb-8 text-crisp-white animate-slide-up">
            Sueño Tattoo | Laurel, MD | 8+ Years Experience
          </h2>
          <p className="text-body-lg mb-12 text-crisp-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up">&nbsp;
            Licensed & insured professional specializing in custom original designs, traditional American style, 
            and realism work. Serving Laurel, MD and DMV area with 95% perfect healing rate.
          </p>
          
          {/* Hero Buttons */}
          <nav className="flex gap-4 justify-center items-center flex-wrap mb-16" aria-label="Primary actions">
            <Link 
              href="/book-consultation"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-glow-red animate-fade-in focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink-black"
              aria-label="Book a free tattoo consultation with Jose Alvarado"
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
            Professional Tattoo Services in Laurel, MD
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" role="list">
            <VariedServiceCard
              icon="⚡"
              title="Traditional American"
              description="Bold, timeless pieces with vibrant colors and clean lines that honor classic tattooing traditions."
              features={[
                'Classic bold lines and vibrant colors',
                'Traditional imagery and motifs',
                'Time-tested designs that age beautifully',
                'Authentic old-school techniques'
              ]}
              pricing="$120-200"
              delay={0}
              variant="modern"
              onClick={() => window.location.href = '/services/traditional-tattoos'}
            />
            <VariedServiceCard
              icon="🎨"
              title="Custom Designs"
              description="Original artwork created specifically for you through our collaborative design process."
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
              title="Realism Work"
              description="Lifelike realism capturing incredible detail and emotion with photorealistic precision."
              features={[
                'Black and grey or color options',
                'Photo-realistic detail and shading',
                'Memorial and nature pieces',
                'Wildlife and detailed imagery'
              ]}
              pricing="$150-250"
              delay={0.2}
              variant="minimal"
              onClick={() => window.location.href = '/services/realism-work'}
            />
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
            Why Choose Sueno Tattoo in Laurel, MD?
          </h2>
          <div className="grid md:grid-cols-3 gap-8" role="list">
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
              <div className="text-stat text-gold mb-2" aria-label="100 percent licensed and insured">100%</div>
              <div className="text-crisp-white font-medium">Licensed & Insured</div>
              <p className="text-sm text-crisp-white/70 mt-2">Maryland State licensed facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="testimonials-heading" className="text-display-lg text-center mb-12 text-crisp-white">
            What Our Clients Say
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

      {/* Contact Section */}
      <section className="py-20 px-4" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="contact-heading" className="text-display-lg mb-8 text-crisp-white">
            Ready to Start Your Tattoo Journey?
          </h2>
          <p className="text-body-lg mb-8 text-crisp-white/90">
            Located in Laurel, MD, serving Prince George&apos;s County and the entire DMV area. 
            Free consultations available.
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

