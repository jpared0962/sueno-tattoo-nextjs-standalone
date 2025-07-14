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
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Gallery' }
  ]

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
      
      <SEOLayout 
        breadcrumbs={breadcrumbs}
        showCTA={true}
        ctaVariant="gallery"
        ctaTitle="Ready to Create Your Custom Piece?"
        ctaDescription="Browse our portfolio and book your free consultation to discuss your vision."
      >
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
            Tattoo Portfolio Gallery
          </h1>
          <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto mb-8">
            Browse {businessInfo.statistics.portfolioSize}+ professional tattoo pieces from Jose&apos;s portfolio. 
            Custom designs, traditional work, realism, and cover-ups serving Laurel, MD and the DMV area.
          </p>
          
          <div className="glass-accent p-4 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-crisp-white text-sm">
              🎨 All work shown was completed by Jose at Sueño Tattoo in Laurel, MD. 
              Individual results may vary. Each tattoo is custom designed for the client.
            </p>
          </div>
        </div>

        {/* Interactive Gallery Component */}
        <div className="mb-16">
          <InteractiveGallery images={galleryImages} />
        </div>

        {/* Featured Recent Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
            Recent Work
          </h2>
          <MasonryGallery images={galleryImages.slice(0, 6)} />
        </section>

        {/* Style Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
            Specialization Styles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                style: 'Custom Designs', 
                count: '200+', 
                image: '/images/gallery/DSC04519.jpg',
                description: 'Original artwork created specifically for each client'
              },
              { 
                style: 'Traditional American', 
                count: '150+', 
                image: '/images/gallery/DSC04757.jpg',
                description: 'Bold lines, classic imagery, timeless appeal'
              },
              { 
                style: 'Realism Work', 
                count: '100+', 
                image: '/images/gallery/DSC04746.jpg',
                description: 'Photorealistic detail and lifelike representation'
              },
              { 
                style: 'Cover-ups', 
                count: '80+', 
                image: '/images/gallery/DSC04703.jpg',
                description: 'Transforming existing tattoos into beautiful new art'
              },
              { 
                style: 'Fine Line', 
                count: '90+', 
                image: '/images/gallery/DSC04685.jpg',
                description: 'Delicate, precise linework for minimalist designs'
              },
              { 
                style: 'Botanical', 
                count: '120+', 
                image: '/images/gallery/DSC04593.jpg',
                description: 'Nature-inspired florals and organic patterns'
              }
            ].map((category, index) => (
              <GlassCard key={index} className="text-center p-6">
                <div className="mb-4 aspect-square bg-charcoal-gray/50 rounded-lg overflow-hidden">
                  <img 
                    src={category.image}
                    alt={`${category.style} tattoo examples`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-crisp-white mb-2">{category.style}</h3>
                <div className="text-gold font-bold text-lg mb-2">{category.count} pieces</div>
                <p className="text-crisp-white/80 text-sm">{category.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Before & After Showcase */}
        <section className="mb-16">
          <BeforeAfterShowcase 
            beforeImage="/images/gallery/DSC04703.jpg"
            afterImage="/images/gallery/DSC04519.jpg"
            title="Cover-up Transformation"
            description="Expert cover-up work transforming an old tattoo into beautiful new art"
          />
        </section>

        {/* Social Proof */}
        <section className="mb-16">
          <SocialProofBanner />
        </section>
      </SEOLayout>
    </>
  )
}
