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
  title: `Professional Tattoo Gallery | Custom Tattoo Design Portfolio | Traditional American Tattoos | Realistic Tattoos | Jose | Sueno Tattoo Laurel, MD`,
  description: `Browse ${businessInfo.statistics.portfolioSize}+ professional tattoo portfolio pieces by Jose. Custom tattoo design, traditional American tattoos, realistic tattoos, neo traditional tattoos, flash tattoos, cover-up tattoos, and realism work tattoos. Professional tattoo gallery showcasing quality artwork in Laurel, MD serving Prince George's County, Beltsville, College Park, Greenbelt, and DMV area.`,
  keywords: [
    'tattoo gallery laurel md',
    'jose alvarado portfolio',
    'custom tattoo gallery maryland',
    'fine line tattoo portfolio',
    'minimalist tattoo examples',
    'geometric tattoo gallery',
    'watercolor tattoo portfolio',
    'portrait tattoo examples',
    'botanical tattoo gallery',
    'memorial tattoo portfolio',
    'script tattoo examples',
    'traditional tattoo portfolio',
    'realism tattoo work',
    'cover up tattoo gallery',
    'professional tattoo artwork',
    'laurel md tattoo examples',
    'custom tattoo design portfolio',
    'traditional american tattoos gallery',
    'realistic tattoos portfolio',
    'neo traditional tattoos gallery',
    'flash tattoos portfolio',
    'cover-up tattoos gallery',
    'realism work tattoos portfolio',
    'professional tattoo artist portfolio',
    'sleeve tattoo portfolio',
    'forearm tattoo examples',
    'back tattoo gallery',
    'chest tattoo portfolio',
    'small tattoo examples',
    'wrist tattoo gallery',
    'women tattoo portfolio',
    'men tattoo gallery',
    'first tattoo examples',
    'meaningful tattoo portfolio',
    'prince georges county tattoo gallery',
    'dmv tattoo portfolio',
    'maryland tattoo gallery',
    'beltsville tattoo portfolio',
    'college park tattoo gallery',
    'greenbelt tattoo portfolio',
    'high quality tattoo work',
    'award winning tattoo portfolio',
    'certified artist work',
    'before and after tattoos',
    'healed tattoo examples',
    'professional tattoo portfolio',
    'tattoo portfolio laurel md artist',
    'professional tattoo work examples',
    'quality tattoo artwork gallery'
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
      
      {/* Enhanced Schema Markup for Gallery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Professional Tattoo Gallery | Custom Tattoo Design Portfolio",
            "description": "Browse professional tattoo portfolio pieces by Jose featuring custom tattoo design, traditional American tattoos, realistic tattoos, and cover-up tattoos in Laurel, MD",
            "url": "https://www.suenotattoo.com/gallery",
            "image": galleryImages.map(img => ({
              "@type": "ImageObject",
              "url": `https://www.suenotattoo.com${img.src}`,
              "name": img.title,
              "description": img.alt,
              "caption": img.description || img.alt
            })),
            "creator": {
              "@type": "Person",
              "name": "Jose",
              "jobTitle": "Professional Tattoo Artist",
              "worksFor": {
                "@type": "LocalBusiness",
                "name": "Sueno Tattoo",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Laurel",
                  "addressRegion": "MD",
                  "addressCountry": "US"
                }
              }
            },
            "about": [
              {
                "@type": "Thing",
                "name": "Custom Tattoo Design",
                "description": "Original custom tattoo designs created through collaborative consultation process"
              },
              {
                "@type": "Thing",
                "name": "Traditional American Tattoos",
                "description": "Classic American traditional tattoos with bold lines and vibrant colors"
              },
              {
                "@type": "Thing",
                "name": "Realistic Tattoos",
                "description": "Photorealistic tattoos with incredible detail perfect for portraits"
              },
              {
                "@type": "Thing",
                "name": "Cover-Up Tattoos",
                "description": "Expert cover-up tattoos transforming unwanted ink into beautiful artwork"
              }
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": "People interested in professional tattoo services",
              "geographicArea": {
                "@type": "Place",
                "name": "Laurel, MD and DMV area"
              }
            }
          })
        }}
      />
      
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
            Professional Tattoo Gallery | Custom Tattoo Design Portfolio
          </h1>
          <p className="text-xl text-crisp-white/90 max-w-3xl mx-auto mb-8">
            Browse {businessInfo.statistics.portfolioSize}+ professional tattoo pieces from Jose&apos;s portfolio. 
            Custom tattoo design, traditional American tattoos, realistic tattoos, neo traditional tattoos, flash tattoos, cover-up tattoos, 
            and realism work tattoos serving Laurel, MD, Prince George&apos;s County, and the DMV area.
          </p>
          
          <div className="glass-accent p-4 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-crisp-white text-sm">
              🎨 All professional tattoo artwork shown was completed by Jose at Sueño Tattoo in Laurel, MD. 
              Individual results may vary. Each custom tattoo is uniquely designed for the client using traditional American tattoo techniques, 
              realistic tattoo methods, and modern custom tattoo design processes.
            </p>
          </div>
        </div>

        {/* Interactive Gallery Component */}
        <div className="mb-16">
          <InteractiveGallery images={galleryImages} />
        </div>

        {/* Tattoo Styles Overview */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
              Professional Tattoo Styles & Techniques
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gold mb-4">Custom Tattoo Design Process</h3>
                <p className="text-crisp-white/90 mb-4">
                  Our custom tattoo design process begins with a thorough consultation to understand your vision. 
                  Jose specializes in creating unique custom tattoos that reflect your personality and story.
                </p>
                <ul className="text-crisp-white/80 text-sm space-y-2">
                  <li>• Personal design consultation</li>
                  <li>• Original artwork creation</li>
                  <li>• Multiple revision rounds</li>
                  <li>• Placement and sizing guidance</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gold mb-4">Traditional American Tattoos</h3>
                <p className="text-crisp-white/90 mb-4">
                  Traditional American tattoos featuring bold lines, vibrant colors, and classic imagery. 
                  Our traditional tattoo portfolio showcases authentic old-school techniques and timeless designs.
                </p>
                <ul className="text-crisp-white/80 text-sm space-y-2">
                  <li>• Bold outlines and solid colors</li>
                  <li>• Classic imagery and motifs</li>
                  <li>• Time-tested techniques</li>
                  <li>• Authentic traditional styling</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gold mb-4">Realistic Tattoos & Realism Work</h3>
                <p className="text-crisp-white/90 mb-4">
                  Realistic tattoos featuring photorealistic detail and lifelike representation. 
                  Our realism work tattoos capture incredible detail perfect for portraits, wildlife, and memorial pieces.
                </p>
                <ul className="text-crisp-white/80 text-sm space-y-2">
                  <li>• Photorealistic detail</li>
                  <li>• Smooth gradient shading</li>
                  <li>• Portrait specialization</li>
                  <li>• Memorial and tribute work</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gold mb-4">Flash Tattoos & Cover-Up Tattoos</h3>
                <p className="text-crisp-white/90 mb-4">
                  Flash tattoos ready for same-day appointments and expert cover-up tattoos transforming 
                  unwanted ink into beautiful new artwork with creative design solutions.
                </p>
                <ul className="text-crisp-white/80 text-sm space-y-2">
                  <li>• Same-day flash tattoos</li>
                  <li>• Expert cover-up solutions</li>
                  <li>• Creative design transformation</li>
                  <li>• Professional consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Style Categories - Dynamic from actual data */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
            Tattoo Portfolio by Style | Custom Tattoo Design Gallery
          </h2>
          <p className="text-center text-crisp-white/90 max-w-2xl mx-auto mb-8">
            Explore our professional tattoo portfolio organized by style. Each category showcases Jose's expertise in 
            different tattoo techniques, from traditional American tattoos to realistic tattoos and custom tattoo design work.
          </p>
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
                  {style === 'realistic' ? 'Photorealistic tattoos with incredible detail and lifelike representation perfect for portraits and memorial pieces' :
                   style === 'illustrative' ? 'Artistic interpretation with creative styling blending traditional and modern techniques' :
                   style === 'traditional' ? 'Traditional American tattoos with bold lines, classic imagery, and timeless appeal using authentic techniques' :
                   style === 'fine-line' ? 'Delicate fine-line tattoos with precise linework perfect for minimalist custom designs' :
                   style === 'memorial' ? 'Meaningful memorial tattoos and tribute pieces honoring loved ones with personal significance' :
                   'Professional tattoo artistry showcasing expert technique and custom design work'}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Before & After Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
            Cover-Up Tattoos & Transformations | Before & After Gallery
          </h2>
          <p className="text-center text-crisp-white/90 max-w-2xl mx-auto mb-8">
            Discover the expertise behind our cover-up tattoos with before and after examples. Jose specializes in 
            transforming unwanted tattoos into beautiful new artwork through creative design solutions and professional techniques.
          </p>
          <BeforeAfterShowcase 
            beforeImage="/images/portfolio-optimized/IMG_3141_u0mjxg.jpg"
            afterImage="/images/portfolio-optimized/IMG_3142_g7and1.jpg"
            title="Phoenix Tattoo Transformation | Cover-Up Tattoo Expertise"
            description="Expert cover-up tattoo and artistic enhancement showcasing Jose's skill in transforming existing work into stunning new art. This cover-up tattoo demonstrates professional techniques used to create beautiful new artwork from unwanted tattoos."
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
