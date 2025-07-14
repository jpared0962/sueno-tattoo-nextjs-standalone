import { Metadata } from 'next'
import Image from 'next/image'
import { generateSEOMetadata, commonSEOData } from '@/components/seo/SEOHead'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { InteractiveGallery } from '@/components/Gallery/InteractiveGallery'
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

export default async function Gallery() {
  // Breadcrumbs for the Gallery page
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Gallery' }
  ]

  // Import real portfolio data
  const { portfolioData } = await import('@/data/portfolioData.js')
  
  // Convert portfolio data to gallery format and fix image paths
  const galleryImages = portfolioData.map(item => {
    // Extract filename from various path formats and ensure .jpg extension
    let filename = item.image.replace('public/Tattoo-Images/', '').replace('public/images/gallery/', '').replace('public/images/portfolio/', '')
    if (!filename.includes('.')) {
      filename += '.jpg' // Add .jpg extension if missing
    }
    
    // Special handling for specific file naming issues
    const fileNameMappings = {
      'IMG_2120-2.jpg': 'IMG_2120-2-2.jpg', // Handle double dash case
    }
    
    // Apply filename mapping if needed
    if (fileNameMappings[filename]) {
      filename = fileNameMappings[filename]
    }
    
    // Check if image exists in portfolio folder (for IMG files)
    const isPortfolioImage = filename.startsWith('IMG_')
    const imagePath = isPortfolioImage ? `/images/portfolio-optimized/${filename}` : `/images/gallery-optimized/${filename}`
    
    // Debug logging (remove in production)
    if (item.id === 'tattoo-036') {
      console.log('Debug tattoo-036:', {
        originalImage: item.image,
        filename,
        imagePath,
        isPortfolioImage
      })
    }
    
    return {
      id: item.id,
      src: imagePath,
      alt: item.alt || `${item.title} tattoo by Jose`,
      category: item.style,
      title: item.title,
      description: item.description
    }
  }).filter(item => {
    // Only include images that we know exist
    const validGalleryImages = [
      'DSC02447.jpg', 'DSC02452.jpg', 'DSC03838.jpg', 'DSC03855.jpg', 'DSC03866.jpg', 
      'DSC03892.jpg', 'DSC04002.jpg', 'DSC04008.jpg', 'DSC04050.jpg', 'DSC04116.jpg',
      'DSC04149.jpg', 'DSC04161.jpg', 'DSC04178.jpg', 'DSC04225.jpg', 'DSC04263.jpg',
      'DSC04304.jpg', 'DSC04340.jpg', 'DSC04436.jpg', 'DSC04447.jpg', 'DSC04453.jpg',
      'DSC04463.jpg', 'DSC04484.jpg', 'DSC04493.jpg', 'DSC04495.jpg', 'DSC04507.jpg',
      'DSC04519.jpg', 'DSC04588.jpg', 'DSC04593.jpg', 'DSC04602.jpg', 'DSC04685.jpg',
      'DSC04703.jpg', 'DSC04730.jpg', 'DSC04746.jpg', 'DSC04757.jpg', 'DSC04805.jpg'
    ]
    
    const validPortfolioImages = [
      'IMG_2115-2.jpg', 'IMG_2116-2.jpg', 'IMG_2119-2.jpg', 'IMG_2120-2-2.jpg', 'IMG_2120-2.jpg',
      'IMG_2121-2.jpg', 'IMG_2122-2.jpg', 'IMG_2129-2.jpg', 'IMG_2139-2.jpg', 'IMG_2140-2.jpg',
      'IMG_2146-2.jpg', 'IMG_2147-2.jpg', 'IMG_3141_u0mjxg.jpg', 'IMG_3142_g7and1.jpg'
    ]
    
    const filename = item.src.split('/').pop()
    return validGalleryImages.includes(filename) || validPortfolioImages.includes(filename)
  }).slice(0, 24) // Show first 24 images

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

        {/* Style Categories - Dynamic from actual data */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
            Specialization Styles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(
              galleryImages.reduce((acc, img) => {
                if (!acc[img.category]) {
                  acc[img.category] = { count: 0, image: img.src, description: '' }
                }
                acc[img.category].count++
                return acc
              }, {} as Record<string, { count: number; image: string; description: string }>)
            ).map(([style, data]) => (
              <GlassCard key={style} className="text-center p-6">
                <div className="mb-4 aspect-square bg-charcoal-gray/50 rounded-lg overflow-hidden">
                  <Image 
                    src={data.image}
                    alt={`${style} tattoo examples`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-crisp-white mb-2">
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </h3>
                <div className="text-gold font-bold text-lg mb-2">{data.count} pieces</div>
                <p className="text-crisp-white/80 text-sm">
                  {style === 'realistic' ? 'Photorealistic detail and lifelike representation' :
                   style === 'illustrative' ? 'Artistic interpretation with creative styling' :
                   style === 'traditional' ? 'Bold lines, classic imagery, timeless appeal' :
                   style === 'fine-line' ? 'Delicate, precise linework for minimalist designs' :
                   style === 'memorial' ? 'Meaningful tribute pieces honoring loved ones' :
                   'Professional tattoo artistry'}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Before & After Showcase */}
        <section className="mb-16">
          <BeforeAfterShowcase 
            beforeImage="/images/portfolio-optimized/IMG_3141_u0mjxg.jpg"
            afterImage="/images/portfolio-optimized/IMG_3142_g7and1.jpg"
            title="Phoenix Tattoo Transformation"
            description="Expert cover-up and artistic enhancement showcasing Jose's skill in transforming existing work into stunning new art"
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
