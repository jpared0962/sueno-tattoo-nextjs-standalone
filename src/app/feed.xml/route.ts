import { NextResponse } from 'next/server';
import { blogPosts } from '@/data/blog-posts';

export async function GET() {
  const publishedPosts = blogPosts.filter(post => post.published);
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sueño Tattoo Blog</title>
    <link>https://www.suenotattoo.com/blog</link>
    <description>Expert tattoo advice, aftercare tips, style guides, and industry insights from Jose at Sueño Tattoo in Laurel, MD</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <atom:link href="https://www.suenotattoo.com/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>https://www.suenotattoo.com/images/logo/logo.png</url>
      <title>Sueño Tattoo Blog</title>
      <link>https://www.suenotattoo.com/blog</link>
    </image>
    
    ${publishedPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://www.suenotattoo.com/blog/${post.slug}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <guid>https://www.suenotattoo.com/blog/${post.slug}</guid>
      <author>jpared19@outlook.com (${post.author})</author>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('')}
    </item>`).join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
