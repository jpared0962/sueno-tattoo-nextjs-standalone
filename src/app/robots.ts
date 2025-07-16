import { MetadataRoute } from 'next'
import { businessInfo } from '@/data/business-info'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = businessInfo.contact.website

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/admin/*',
          '/api/',
          '/private/',
          '/_next/',
          '/temp/',
          '/test/',
          '*.json',
          '*.xml',
          '/wp-admin/', // Common paths to block
          '/wp-content/',
          '/cgi-bin/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
        ],
      },
      // Block AI crawlers that don't respect robots.txt
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}