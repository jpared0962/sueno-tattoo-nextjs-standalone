import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {post.image && (
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-warm-gray-600">
              <span className="bg-muted-gold-100 text-deep-red px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readTime} min read</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-deep-red group-hover:text-deep-red-700 transition-colors">
              {post.title}
            </h2>
            <p className="text-warm-gray-700 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="text-sm text-warm-gray-600">{post.author}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-warm-gray-100 text-warm-gray-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {post.image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-sm text-warm-gray-600">
            <span className="bg-muted-gold-100 text-deep-red px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <h3 className="text-xl font-bold text-deep-red group-hover:text-deep-red-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-warm-gray-700 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span className="text-sm text-warm-gray-600">{post.author}</span>
            </div>
            <span className="text-sm text-warm-gray-500">{post.readTime} min read</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-warm-gray-100 text-warm-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}