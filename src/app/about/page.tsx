import { Metadata } from 'next'
import { generateSEOMetadata, commonSEOData } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';
import { SEOLayout } from '@/components/Layout/SEOLayout';

// SEO Metadata
export const metadata: Metadata = generateSEOMetadata({
  ...commonSEOData.about,
  title: `About Jose | Professional Tattoo Artist | ${businessInfo.name}`,
  description: `Meet Jose, licensed professional tattoo artist with 8+ years experience in Laurel, MD. Specializing in custom designs, traditional American style, and realism work. 95% perfect healing rate.`,
  keywords: [
    'jose alvarado tattoo artist',
    'professional tattoo artist laurel md',
    'licensed tattoo artist maryland',
    'custom tattoo artist dmv',
    'traditional tattoo specialist',
    'realistic realism tattoo artist',
    'experienced tattoo artist prince georges county'
  ],
  url: '/about',
});

export default function About() {
  // Breadcrumbs for the About page
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About' }
  ]

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />
      
      <SEOLayout 
        breadcrumbs={breadcrumbs}
        showCTA={true}
        ctaVariant="contact"
        ctaTitle="Ready to Work Together?"
        ctaDescription="Book your free consultation to discuss your tattoo ideas with Jose."
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-12 md:mb-16">
            <h1 className="text-hero text-white mb-4 md:mb-6 bg-gradient-to-r from-gold to-deep-red bg-clip-text text-transparent">
              Meet Jose
            </h1>
            <p className="text-body-xl text-white-90 mb-6 md:mb-8 max-w-4xl mx-auto">
              Professional Tattoo Artist with 8+ Years Experience
            </p>
          </section>

          {/* About Content */}
          <section className="mb-12 md:mb-16">
            <div className="glass-card rounded-xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <div className="text-4xl md:text-6xl glass-accent rounded-full p-3 md:p-4">👨‍🎨</div>
              </div>
              <h2 className="text-display-lg text-white text-center mb-6 md:mb-8">About Jose</h2>
              <div className="space-y-4 md:space-y-6 text-body text-white-90 leading-relaxed">
                <p>
                  Licensed professional with over 8 years of experience specializing in custom tattoo design. 
                  Every piece is created for you alone. Serving Laurel, MD and Prince George&apos;s County.
                </p>
                <p>
                  Jose specializes in traditional tattoos, realism work, custom tattoo design, cover-up tattoos, 
                  spiritual & symbolic art, fine line tattoos, neo-traditional style, Japanese-inspired tattoos, 
                  geometric patterns, and botanical designs.
                </p>
                <p>
                  &quot;From initial concept to final art&quot; - Jose believes in collaborative artistry, working closely 
                  with each client to bring their vision to life through professional, custom tattoo work.
                </p>
              </div>
            </div>
          </section>

          {/* Specializations Grid */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-display-lg text-white text-center mb-8 md:mb-12">
              Artistic Specializations
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: '⚡', title: 'Traditional American', desc: 'Bold lines, classic imagery, timeless designs' },
                { icon: '👤', title: 'Realism Work', desc: 'Photorealistic detail and lifelike representation' },
                { icon: '🎨', title: 'Custom Designs', desc: 'Original artwork tailored to your vision' },
                { icon: '🔄', title: 'Cover-ups', desc: 'Transforming existing tattoos into new art' },
                { icon: '🕊️', title: 'Spiritual & Symbolic', desc: 'Meaningful designs with deep significance' },
                { icon: '🌸', title: 'Botanical Designs', desc: 'Nature-inspired florals and organic patterns' }
              ].map((specialization, index) => (
                <div key={index} className="glass-service rounded-lg p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{specialization.icon}</div>
                  <h3 className="text-display-sm text-white mb-2 md:mb-3">{specialization.title}</h3>
                  <p className="text-body-sm text-white-80 leading-relaxed">{specialization.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Stats */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Experience & Credentials
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="glass-stat rounded-xl p-6 md:p-8 text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 md:mb-4">8+</div>
                <div className="text-lg md:text-xl font-semibold text-crisp-white mb-1 md:mb-2">Years Experience</div>
                <p className="text-crisp-white/70 text-xs md:text-sm">Licensed since 2016</p>
              </div>
              <div className="glass-stat rounded-xl p-6 md:p-8 text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 md:mb-4">500+</div>
                <div className="text-lg md:text-xl font-semibold text-crisp-white mb-1 md:mb-2">Satisfied Clients</div>
                <p className="text-crisp-white/70 text-xs md:text-sm">95% perfect healing rate</p>
              </div>
              <div className="glass-stat rounded-xl p-6 md:p-8 text-center sm:col-span-2 lg:col-span-1">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 md:mb-4">100%</div>
                <div className="text-lg md:text-xl font-semibold text-crisp-white mb-1 md:mb-2">Licensed & Insured</div>
                <p className="text-crisp-white/70 text-xs md:text-sm">Maryland State licensed</p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="mb-12 md:mb-16">
            <div className="glass-testimonial rounded-xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl text-crisp-white/90 italic mb-4 md:mb-6 leading-relaxed">
                &quot;Every tattoo tells a story. My job is to make sure that story is told beautifully, 
                professionally, and with the respect it deserves. From the first consultation to the 
                final healing check, I&apos;m committed to creating art that you&apos;ll be proud to wear for life.&quot;
              </blockquote>
              <cite className="text-gold font-semibold text-sm md:text-base">— Jose, Sueño Tattoo</cite>
            </div>
          </section>
        </div>
      </SEOLayout>
    </>
  )
}