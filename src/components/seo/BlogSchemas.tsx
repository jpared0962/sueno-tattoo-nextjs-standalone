import { BlogPost } from '@/data/blog-posts'

export function generateBlogSchemaMarkup(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.suenotattoo.com/blog#blog",
    "url": "https://www.suenotattoo.com/blog",
    "name": "Sueño Tattoo Blog",
    "description": "Professional tattoo advice, aftercare tips, style guides, and industry insights from Jose at Sueño Tattoo in Laurel, MD.",
    "author": {
      "@type": "Person",
      "name": "Jose",
      "url": "https://www.suenotattoo.com",
      "image": "https://www.suenotattoo.com/images/logo/logo.png",
      "jobTitle": "Professional Tattoo Artist",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Sueño Tattoo",
        "url": "https://www.suenotattoo.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sueño Tattoo",
      "url": "https://www.suenotattoo.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.suenotattoo.com/images/logo/logo.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "@id": `https://www.suenotattoo.com/blog/${post.slug}#article`,
      "url": `https://www.suenotattoo.com/blog/${post.slug}`,
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.publishedAt,
      "dateModified": post.updatedAt,
      "author": {
        "@type": "Person",
        "name": post.author,
        "url": "https://www.suenotattoo.com",
        "image": post.authorImage || "https://www.suenotattoo.com/images/logo/logo.png"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Sueño Tattoo",
        "url": "https://www.suenotattoo.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.suenotattoo.com/images/logo/logo.png"
        }
      },
      "image": post.image ? {
        "@type": "ImageObject",
        "url": post.image,
        "width": 1200,
        "height": 630
      } : {
        "@type": "ImageObject",
        "url": "https://www.suenotattoo.com/images/logo/logo.png",
        "width": 200,
        "height": 60
      },
      "keywords": post.tags.join(", "),
      "articleSection": post.category,
      "wordCount": post.content.split(/\s+/).length,
      "timeRequired": `PT${post.readTime}M`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.suenotattoo.com/blog/${post.slug}`
      }
    }))
  }
}

export function generateBlogPostSchemaMarkup(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.suenotattoo.com/blog/${post.slug}#article`,
    "url": `https://www.suenotattoo.com/blog/${post.slug}`,
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.suenotattoo.com",
      "image": post.authorImage || "https://www.suenotattoo.com/images/logo/logo.png",
      "jobTitle": "Professional Tattoo Artist",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Sueño Tattoo",
        "url": "https://www.suenotattoo.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sueño Tattoo",
      "url": "https://www.suenotattoo.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.suenotattoo.com/images/logo/logo.png",
        "width": 200,
        "height": 60
      }
    },
    "image": post.image ? {
      "@type": "ImageObject",
      "url": post.image,
      "width": 1200,
      "height": 630
    } : {
      "@type": "ImageObject",
      "url": "https://www.suenotattoo.com/images/logo/logo.png",
      "width": 200,
      "height": 60
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.split(/\s+/).length,
    "timeRequired": `PT${post.readTime}M`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.suenotattoo.com/blog/${post.slug}`
    },
    "about": {
      "@type": "Thing",
      "name": "Tattoo Art",
      "description": "Professional tattoo artistry and related topics"
    },
    "mentions": [
      {
        "@type": "LocalBusiness",
        "name": "Sueño Tattoo",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Laurel",
          "addressRegion": "MD",
          "postalCode": "20723",
          "addressCountry": "US"
        }
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://www.suenotattoo.com/blog#blog",
      "url": "https://www.suenotattoo.com/blog",
      "name": "Sueño Tattoo Blog"
    }
  }
}

export function generateBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.suenotattoo.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.suenotattoo.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.suenotattoo.com/blog/${post.slug}`
      }
    ]
  }
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a tattoo take to heal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most tattoos take 2-4 weeks to heal on the surface, with complete healing taking 2-3 months. Proper aftercare is essential for optimal healing."
        }
      },
      {
        "@type": "Question",
        "name": "What aftercare products should I use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use fragrance-free, gentle cleansers and moisturizers. Avoid products with alcohol or harsh chemicals. Follow your artist's specific aftercare instructions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I swim with a new tattoo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid swimming, soaking in baths, or hot tubs for at least 2-3 weeks after getting a tattoo. Submerging can lead to infection and poor healing."
        }
      },
      {
        "@type": "Question",
        "name": "How do I protect my tattoo from sun damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always use SPF 30+ sunscreen on healed tattoos. For new tattoos, keep them covered and out of direct sunlight during the healing process."
        }
      }
    ]
  }
}