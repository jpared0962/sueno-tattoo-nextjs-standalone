import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';
import { getServiceBySlug } from '@/data/services';

const service = getServiceBySlug('custom-tattoos');

export const metadata: Metadata = generateSEOMetadata({
  title: `Custom Tattoo Designs Laurel MD | Original Artwork | Jose`,
  description: `Custom tattoo designs in Laurel, MD. Original artwork created specifically for you by Jose. 8+ years experience, collaborative design process. Free consultations. Call ${businessInfo.contact.phone}`,
  keywords: [
    'custom tattoo design laurel md',
    'original tattoo artwork',
    'personalized tattoo design',
    'custom tattoo artist laurel',
    'unique tattoo designs maryland',
    'collaborative tattoo design',
    'custom tattoo consultation',
    'one of a kind tattoos'
  ],
  url: '/services/custom-tattoos',
});

export default function CustomTattoosPage() {
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      {/* Schema Markup */}
      <TattooServiceSchema
        serviceName={service.name}
        description={service.description}
        priceRange={service.priceRange}
        duration={service.duration}
        keywords={service.seoKeywords}
      />

      <div className="min-h-screen pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Custom Tattoo Designs in Laurel, MD
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Experience the art of personalized tattooing with Jose. Every design is 
              created specifically for you - no flash, no copies, just original artwork that 
              tells your unique story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation" 
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Custom Design
              </Link>
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Call {businessInfo.contact.phone}
              </a>
            </div>
          </section>

          {/* What Makes Our Custom Designs Special */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Makes Our Custom Designs Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Original Artwork</h3>
                <p className="text-crisp-white/80">
                  Every design is created from scratch based on your ideas, story, and vision. 
                  No pre-made designs or flash art.
                </p>
              </div>
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Collaborative Process</h3>
                <p className="text-crisp-white/80">
                  We work together through multiple consultations and revisions to ensure 
                  your design perfectly captures your vision.
                </p>
              </div>
              <div className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-3 text-crisp-white">Meaningful Art</h3>
                <p className="text-crisp-white/80">
                  Each tattoo tells a story. We focus on creating artwork that has deep 
                  personal meaning and significance to you.
                </p>
              </div>
            </div>
          </section>

          {/* Custom Tattoo Portfolio */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Custom Tattoo Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-charcoal-gray/30 rounded-lg overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-ink-black/30">
                  <Image
                    src="/images/portfolio-optimized/IMG_2120-2.jpg" 
                    alt="Custom tattoo design by Jose - Original artwork"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-crisp-white mb-2">Custom Design</h3>
                  <p className="text-crisp-white/80 text-sm">Original artwork created specifically for client</p>
                </div>
              </div>
              <div className="bg-charcoal-gray/30 rounded-lg overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-ink-black/30">
                  <Image
                    src="/images/portfolio-optimized/IMG_2121-2.jpg" 
                    alt="Custom tattoo design by Jose - Personalized artwork"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-crisp-white mb-2">Personalized Art</h3>
                  <p className="text-crisp-white/80 text-sm">Unique design tailored to client's vision</p>
                </div>
              </div>
              <div className="bg-charcoal-gray/30 rounded-lg overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-ink-black/30">
                  <Image
                    src="/images/portfolio-optimized/IMG_2122-2.jpg" 
                    alt="Custom tattoo design by Jose - Collaborative creation"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-crisp-white mb-2">Collaborative Creation</h3>
                  <p className="text-crisp-white/80 text-sm">Result of our detailed design process</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/gallery"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View More Custom Work
              </Link>
            </div>
          </section>

          {/* Our Custom Design Process */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Our Custom Design Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "We start with a free consultation where you share your ideas, inspiration, and the story behind your tattoo. This helps me understand your vision and suggest the best artistic approach.",
                  duration: "30-45 minutes",
                  cost: "Free"
                },
                {
                  step: "2",
                  title: "Concept Development", 
                  description: "Based on our discussion, I create initial sketches and concepts. We explore different styles, compositions, and placement options to find the perfect direction.",
                  duration: "3-5 days",
                  cost: "Included"
                },
                {
                  step: "3",
                  title: "Design Refinement",
                  description: "We review the concepts together and make revisions. This collaborative process continues until we achieve a design that perfectly captures your vision.",
                  duration: "1-2 weeks",
                  cost: "Revisions included"
                },
                {
                  step: "4",
                  title: "Final Artwork",
                  description: "Once approved, I create the final detailed artwork ready for tattooing. We'll also discuss placement, sizing, and any final adjustments.",
                  duration: "2-3 days",
                  cost: "Design fee: $100-150"
                },
                {
                  step: "5",
                  title: "Tattoo Session",
                  description: "The exciting part! We bring your custom design to life with professional tattooing in a clean, comfortable environment.",
                  duration: "Varies by size",
                  cost: "$200-800+"
                }
              ].map((phase, index) => (
                <div key={index} className="bg-charcoal-gray/20 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-crisp-white font-bold text-xl flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-crisp-white">{phase.title}</h3>
                      <p className="text-crisp-white/80 mb-4">{phase.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="bg-charcoal-gray/50 px-3 py-1 rounded text-crisp-white/70">
                          Duration: {phase.duration}
                        </span>
                        <span className="bg-deep-red/20 px-3 py-1 rounded text-deep-red">
                          {phase.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Information */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-charcoal-gray/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
                Custom Design Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-charcoal-gray/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Small Custom</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$200-400</div>
                  <div className="text-crisp-white/80 text-sm mb-4">Up to 3 inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Simple to moderate detail</li>
                    <li>• 1-2 hour session</li>
                    <li>• Free consultation</li>
                    <li>• Design revisions included</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-deep-red/10 border border-deep-red rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Medium Custom</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$400-800</div>
                  <div className="text-crisp-white/80 text-sm mb-4">3-6 inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Detailed artwork</li>
                    <li>• 2-4 hour session</li>
                    <li>• Multiple consultations</li>
                    <li>• Unlimited revisions</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-charcoal-gray/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">Large Custom</h3>
                  <div className="text-3xl font-bold text-deep-red mb-2">$800+</div>
                  <div className="text-crisp-white/80 text-sm mb-4">6+ inches</div>
                  <ul className="text-crisp-white/70 text-sm space-y-1">
                    <li>• Complex, detailed designs</li>
                    <li>• Multiple sessions</li>
                    <li>• Extended design process</li>
                    <li>• Full collaboration</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-crisp-white/80">
                  All prices include free consultation, design development, and aftercare guidance. 
                  No hidden fees - transparent pricing always.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Jose for Custom Work */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Why Choose Jose for Custom Tattoo Designs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">8+ Years Experience</h3>
                    <p className="text-crisp-white/80">Extensive experience creating custom artwork across all styles and subjects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Cultural Respect</h3>
                    <p className="text-crisp-white/80">Deep understanding and respect for spiritual, cultural, and personal meanings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Personal Attention</h3>
                    <p className="text-crisp-white/80">Limited bookings ensure each client receives dedicated time and focus.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">95% Perfect Healing</h3>
                    <p className="text-crisp-white/80">Exceptional healing success rate with comprehensive aftercare support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Licensed Professional</h3>
                    <p className="text-crisp-white/80">Professional credentials and certifications for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-crisp-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-crisp-white">Transparent Pricing</h3>
                    <p className="text-crisp-white/80">No hidden fees, clear pricing structure, and payment plan options.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Clients Say About Custom Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Maria S. - Laurel, MD</span>
                </div>
                <p className="text-crisp-white/80 mb-4">
                  "Jose took my vague idea and turned it into the most beautiful, meaningful piece. 
                  The design process was so collaborative and he really listened to what I wanted. 
                  The final result exceeded all my expectations!"
                </p>
                <div className="text-sm text-crisp-white/60">Custom floral memorial piece</div>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">David R. - College Park, MD</span>
                </div>
                <p className="text-crisp-white/80 mb-4">
                  "I wanted something completely unique and Jose delivered. He took time to understand 
                  the story behind my tattoo and created something that truly represents who I am. 
                  Amazing attention to detail!"
                </p>
                <div className="text-sm text-crisp-white/60">Custom geometric design</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready to Create Your Custom Tattoo?
            </h2>
            <p className="text-crisp-white/80 mb-6">
              Start your custom design journey with a free consultation. Let's discuss your ideas 
              and create something truly unique together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/gallery"
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                View Custom Work
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}