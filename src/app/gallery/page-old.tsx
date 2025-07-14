import { Metadata } from 'next'
import { generateSEOMetadata, commonSEOData } from '@/components/seo/SEOHead'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { InteractiveGallery } from '@/components/Gallery/InteractiveGallery'
import { MasonryGallery } from '@/components/Gallery/MasonryGallery'
import { GlassCard } from '@/components/UI/CardVariations'
import { BeforeAfterShowcase, SocialProofBanner } from '@/components/UI/FloatingBookingButton'
import { SEOLayout } from '@/components/Layout/SEOLayout'

export const metadata: Metadata = generateSEOMetadata({
  ...commonSEOData.gallery,
  title: `Tattoo Gallery | Jose Portfolio | ${businessInfo.name} Laurel MD`,
  description: `Browse ${businessInfo.statistics.portfolioSize}+ tattoo portfolio pieces by Jose. Custom designs, traditional work, realism work, cover-ups. Professional tattoo art in Laurel, MD.`,
  keywords: [
    'tattoo gallery laurel md',
    'jose alvarado portfolio',
    'custom tattoo gallery maryland',
    'traditional tattoo portfolio',
    'realism tattoo work',
    'cover up tattoo gallery',
    'professional tattoo artwork',
    'laurel md tattoo examples'
  ],
  url: '/gallery',
})

export default function Gallery() {
  // Breadcrumbs for the Gallery page

  // Sample gallery data - replace with real images
  const galleryImages = [
    {
      id: '1',
      src: '/images/gallery/DSC04519.jpg',
      alt: 'Professional tattoo work by Jose',
      category: 'custom',
      title: 'Custom Dragon Design',
      description: 'Intricate custom dragon piece with detailed shading'
    },
    {
      id: '2', 
      src: '/images/gallery/DSC04757.jpg',
      alt: 'Traditional American tattoo by Jose',
      category: 'traditional',
      title: 'Classic American Eagle',
      description: 'Bold traditional eagle with banner'
    },
    {
      id: '3',
      src: '/images/gallery/DSC04746.jpg',
      alt: 'Realistic realism tattoo work',
      category: 'realism',
      title: 'Memorial Realism',
      description: 'Lifelike black and gray realism work'
    },
    {
      id: '4',
      src: '/images/gallery/DSC04703.jpg',
      alt: 'Custom tattoo design in Laurel MD',
      category: 'custom',
      title: 'Floral Mandala',
      description: 'Geometric floral design with custom elements'
    },
    {
      id: '5',
      src: '/images/gallery/DSC04685.jpg',
      alt: 'Professional tattoo artistry',
      category: 'fine-line',
      title: 'Minimalist Nature',
      description: 'Delicate fine line botanical piece'
    },
    {
      id: '6',
      src: '/images/gallery/DSC04593.jpg',
      alt: 'Detailed tattoo work by Jose',
      category: 'custom',
      title: 'Abstract Geometric',
      description: 'Modern geometric design with color accents'
    },
    {
      id: '7',
      src: '/images/gallery/DSC04495.jpg',
      alt: 'Traditional style tattoo Laurel MD',
      category: 'traditional',
      title: 'Traditional Rose',
      description: 'Classic red rose with bold black outline'
    },
    {
      id: '8',
      src: '/images/gallery/DSC04463.jpg',
      alt: 'Professional tattoo portfolio piece',
      category: 'custom',
      title: 'Watercolor Splash',
      description: 'Vibrant watercolor style design'
    }
  ]

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />
      
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-hero mb-6 text-crisp-white">
            Jose Portfolio
          </h1>
          <p className="text-body-xl text-crisp-white/90 max-w-3xl mx-auto mb-8">
            Explore 100+ pieces from Jose&apos;s portfolio featuring custom designs, traditional work, 
            realism work, and transformative cover-ups from 8+ years of professional artistry.
          </p>
          
          {/* Social Proof */}
          <SocialProofBanner />
        </div>

        {/* Interactive Gallery */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-charcoal-gray/50 p-1 rounded-lg">
              <p className="text-crisp-white/80 text-sm px-4 py-2">
                📸 Images now display fully without cropping • Choose your preferred layout above
              </p>
            </div>
          </div>
          
          <InteractiveGallery 
            images={galleryImages}
            columns={3}
            showCategories={true}
            showBeforeAfter={false}
          />
          
          {/* Alternative Masonry Layout */}
          <div className="mt-12 pt-8 border-t border-charcoal-gray/30">
            <h3 className="text-display-sm text-center mb-8 text-crisp-white">
              Masonry Layout View
            </h3>
            <MasonryGallery 
              images={galleryImages}
              showCategories={true}
            />
          </div>
        </div>

        {/* Before/After Showcase */}
        <div className="mb-16">
          <h2 className="text-display-lg text-center mb-12 text-crisp-white">
            Cover-up Transformations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BeforeAfterShowcase
              beforeImage="/images/gallery/DSC04225.jpg"
              afterImage="/images/gallery/DSC04463.jpg"
              title="Complete Cover-up Transformation"
              description="Transformed an old, faded tattoo into a vibrant new design that exceeded the client's expectations."
            />
            <BeforeAfterShowcase
              beforeImage="/images/portfolio/IMG_2115-2.jpg"
              afterImage="/images/portfolio/IMG_2122-2.jpg"
              title="Color Enhancement Rework"
              description="Refreshed and enhanced an existing piece with improved color saturation and detail work."
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-deep-red/10 to-gold/10 border border-gold/30 p-12 rounded-lg">
          <h2 className="text-display-sm mb-4 text-crisp-white">
            Ready to Create Your Custom Tattoo?
          </h2>
          <p className="text-crisp-white/90 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your ideas and see more of Jose&apos;s portfolio in person. 
            Every piece is uniquely designed for each client.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/book-consultation"
              className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </a>
            <a 
              href="/contact"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Contact Jose
            </a>
          </div>
        </div>

        {/* Gallery Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <GlassCard delay={0}>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-display-xs mb-2 text-crisp-white">Custom Artwork</h3>
              <p className="text-crisp-white/80">Every piece is uniquely designed for each client</p>
            </div>
          </GlassCard>
          <NeonCard delay={0.1}>
            <div className="text-center">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-display-xs mb-2 text-crisp-white">High Quality Photos</h3>
              <p className="text-crisp-white/80">Professional photography showcasing fine details</p>
            </div>
          </NeonCard>
          <GlassCard delay={0.2}>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-display-xs mb-2 text-crisp-white">Client Stories</h3>
              <p className="text-crisp-white/80">Each tattoo comes with its unique story and meaning</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
    </>
  )
}