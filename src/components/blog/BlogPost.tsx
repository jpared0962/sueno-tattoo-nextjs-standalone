import Image from 'next/image'
import Link from 'next/link'
import { BlogPost as BlogPostType } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'

interface BlogPostProps {
  post: BlogPostType
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crisp-white via-warm-gray-50 to-muted-gold-50">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-warm-gray-600">
            <li>
              <Link href="/" className="hover:text-deep-red transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-deep-red transition-colors">
                Blog
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-warm-gray-900 font-medium" aria-current="page">
                {post.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6 text-sm text-warm-gray-600">
              <span className="bg-muted-gold-100 text-deep-red px-4 py-2 rounded-full font-medium">
                {post.category}
              </span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readTime} min read</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-deep-red mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-warm-gray-700 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              )}
              <div className="text-left">
                <p className="font-medium text-warm-gray-900">{post.author}</p>
                <p className="text-sm text-warm-gray-600">Professional Tattoo Artist</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-warm-gray-100 text-warm-gray-600 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-warm-gray max-w-none">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, (match) => {
                  const level = match.trim().length
                  return `<h${level} class="text-deep-red font-bold mt-8 mb-4">`
                }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          </div>
        </article>

        {/* Author Bio */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <div className="flex items-center gap-6">
            {post.authorImage && (
              <Image
                src={post.authorImage}
                alt={post.author}
                width={80}
                height={80}
                className="rounded-full"
              />
            )}
            <div>
              <h3 className="text-xl font-bold text-deep-red mb-2">{post.author}</h3>
              <p className="text-warm-gray-700 leading-relaxed">
                Professional tattoo artist with 8+ years of experience specializing in custom designs, 
                traditional American tattoos, and realistic artwork. Serving the Laurel, MD area and 
                surrounding DMV region.
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center px-4 py-2 bg-deep-red text-white rounded-lg hover:bg-deep-red-700 transition-colors"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-4 py-2 border border-deep-red text-deep-red rounded-lg hover:bg-deep-red hover:text-white transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-deep-red mb-8 text-center">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/blog/tattoo-aftercare-guide-maryland"
              className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-bold text-deep-red mb-2">
                Complete Tattoo Aftercare Guide
              </h3>
              <p className="text-warm-gray-700 text-sm">
                Learn essential aftercare tips to ensure your new tattoo heals perfectly...
              </p>
            </Link>
            <Link
              href="/blog/best-tattoo-styles-dmv-area"
              className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-bold text-deep-red mb-2">
                Best Tattoo Styles for DMV Area
              </h3>
              <p className="text-warm-gray-700 text-sm">
                Discover the most popular tattoo styles in the Washington DC area...
              </p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Your Dream Tattoo?</h2>
          <p className="text-lg mb-6 opacity-90">
            Book a consultation with Jose at Sueño Tattoo in Laurel, MD
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-deep-red rounded-lg font-medium hover:bg-warm-gray-100 transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-deep-red transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}