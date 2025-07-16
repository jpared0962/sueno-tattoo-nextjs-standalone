import { Metadata } from 'next'
import { blogPosts } from '@/data/blog-posts'
import BlogCard from '@/components/blog/BlogCard'
import { generateBlogSchemaMarkup } from '@/components/seo/BlogSchemas'

export const metadata: Metadata = {
  title: 'Maryland Tattoo Blog | DMV Tattoo Artist Tips & Aftercare Guide',
  description: 'Professional tattoo aftercare tips, custom tattoo design insights, and Maryland tattoo artist advice from Jose at Sueño Tattoo in Laurel, MD. Expert DMV tattoo guidance.',
  keywords: 'Maryland tattoo, DMV tattoo artist, tattoo aftercare, custom tattoo design, tattoo styles, Maryland tattoo artist, Laurel tattoo shop, tattoo care tips',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Maryland Tattoo Blog | DMV Tattoo Artist Tips | Sueño Tattoo',
    description: 'Professional tattoo aftercare tips, custom tattoo design insights, and Maryland tattoo artist advice from Jose at Sueño Tattoo in Laurel, MD.',
    url: 'https://www.suenotattoo.com/blog',
    type: 'website',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sueño Tattoo Blog - Professional Tattoo Tips & Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maryland Tattoo Blog | DMV Tattoo Artist Tips | Sueño Tattoo',
    description: 'Professional tattoo aftercare tips, custom tattoo design insights, and Maryland tattoo artist advice from Jose at Sueño Tattoo in Laurel, MD.',
    images: ['/images/logo/logo.png'],
  },
}

export default function BlogPage() {
  const publishedPosts = blogPosts.filter(post => post.published)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogSchemaMarkup(publishedPosts))
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-crisp-white via-warm-gray-50 to-muted-gold-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-deep-red mb-6">
              Maryland Tattoo Artist Blog: Expert Aftercare & Custom Design Tips
            </h1>
            <p className="text-xl text-warm-gray-700 max-w-3xl mx-auto leading-relaxed">
              Professional tattoo aftercare guidance, custom tattoo design insights, and expert advice from your trusted DMV tattoo artist Jose at Sueño Tattoo in Laurel, MD.
            </p>
          </div>

          {/* Featured Post */}
          {publishedPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-deep-red mb-8">Featured Article</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <BlogCard post={publishedPosts[0]} featured={true} />
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-deep-red mb-8">Latest Articles</h2>
            {publishedPosts.length > 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedPosts.slice(1).map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : publishedPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-warm-gray-600 text-lg">
                  New articles coming soon! Check back for expert tattoo tips and insights.
                </p>
              </div>
            ) : null}
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-deep-red mb-6">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Aftercare', count: 3 },
                { name: 'Tattoo Styles', count: 5 },
                { name: 'First Tattoo', count: 2 },
                { name: 'Cover-ups', count: 2 },
              ].map((category) => (
                <div key={category.name} className="text-center p-4 bg-warm-gray-50 rounded-lg hover:bg-muted-gold-50 transition-colors">
                  <h3 className="font-semibold text-deep-red">{category.name}</h3>
                  <p className="text-warm-gray-600 text-sm">{category.count} articles</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}