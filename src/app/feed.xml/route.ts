import { NextResponse } from 'next/server';

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Sueño Tattoo Blog</title>
    <link>https://www.suenotattoo.com</link>
    <description>Latest updates from Sueño Tattoo - Professional tattoo artist in Laurel, MD</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    
    <item>
      <title>Welcome to Sueño Tattoo</title>
      <link>https://www.suenotattoo.com</link>
      <description>Professional tattoo services in Laurel, Maryland</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>https://www.suenotattoo.com/welcome</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
