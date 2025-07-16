import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import { PerformanceOptimizer } from '@/components/performance/PerformanceOptimizer'
import { AdvancedSEO, PerformanceMonitor, criticalCSS } from '@/components/performance/AdvancedSEO'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D4A117' },
    { media: '(prefers-color-scheme: dark)', color: '#8B0000' }
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Custom Tattoo Design & Traditional American Tattoos | Sueno Tattoo Laurel, MD',
    template: '%s | Sueno Tattoo'
  },
  description: 'Professional tattoo artist Jose specializing in custom tattoo design, traditional American tattoos, realistic tattoos, fine line tattoos, minimalist tattoos, geometric tattoos, watercolor tattoos, flash tattoos, neo traditional tattoos, and cover-up tattoos. Serving Laurel, Beltsville, College Park, Greenbelt & Prince George\'s County, MD. Expert realism work tattoos, custom tattoos, and traditional American tattoos. 8+ years experience, 500+ satisfied clients, same-day appointments available.',
  keywords: 'custom tattoo design, custom tattoos, traditional american tattoos, realistic tattoos, fine line tattoos, minimalist tattoos, geometric tattoos, watercolor tattoos, blackwork tattoos, script lettering tattoos, portrait tattoos, botanical tattoos, memorial tattoos, neo traditional tattoos, flash tattoos, cover-up tattoos, birth flower tattoos, zodiac sign tattoos, astrological tattoos, seasonal tattoos, graduation tattoos, birthday tattoos, anniversary tattoos, spring tattoos, summer tattoos, fall tattoos, winter tattoos, carnation tattoos, violet tattoos, daffodil tattoos, daisy tattoos, lily of the valley tattoos, rose tattoos, larkspur tattoos, gladiolus tattoos, aster tattoos, marigold tattoos, chrysanthemum tattoos, poinsettia tattoos, aquarius tattoos, pisces tattoos, aries tattoos, taurus tattoos, gemini tattoos, cancer tattoos, leo tattoos, virgo tattoos, libra tattoos, scorpio tattoos, sagittarius tattoos, capricorn tattoos, tattoo artist, Laurel MD, Prince Georges County, tattoo near me, tattoo artist 20723, tattoo near Laurel MD, traditional tattoos, realism work, professional tattoo artist, sleeve tattoos, forearm tattoos, back tattoos, chest tattoos, small tattoos, large tattoos, first tattoo experience, painless tattoo techniques, affordable tattoo pricing, best tattoo shop laurel md, tattoo artist available today, same day tattoo appointment, emergency tattoo consultation, wedding tattoo design, graduation tattoo service, vacation tattoo preparation, why choose sueno tattoo, vs other tattoo shops, licensed tattoo artist, licensed tattoo artist, certified tattoo artist, best tattoo artist reviews, tattoo prices laurel md, tattoo cost maryland, same day flash tattoos, walk in tattoo appointments',
  authors: [{ name: 'Jose - Sueno Tattoo' }],
  creator: 'Jose',
  publisher: 'Sueno Tattoo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.suenotattoo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Custom Tattoo Design & Traditional American Tattoos | Sueno Tattoo Laurel, MD',
    description: 'Professional tattoo artist Jose specializing in custom tattoo design, traditional American tattoos, realistic tattoos, fine line tattoos, minimalist tattoos, geometric tattoos, watercolor tattoos, flash tattoos, neo traditional tattoos, and cover-up tattoos. Serving Laurel, Beltsville, College Park, Greenbelt & Prince George\'s County, MD. Same-day appointments available.',
    url: 'https://www.suenotattoo.com',
    siteName: 'Sueno Tattoo',
    images: [
      {
        url: '/images/seo/sueño-tattoo-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sueno Tattoo - Professional Tattoo Artist in Laurel, MD',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Tattoo Design & Traditional American Tattoos | Sueno Tattoo Laurel, MD',
    description: 'Professional tattoo artist Jose specializing in custom tattoo design, traditional American tattoos, realistic tattoos, fine line tattoos, minimalist tattoos, geometric tattoos, watercolor tattoos, flash tattoos, neo traditional tattoos, and cover-up tattoos in Laurel, MD. Same-day appointments available.',
    images: ['/images/seo/sueño-tattoo-og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'dc.language': 'en-US',
    'dc.creator': 'Jose',
    'dc.publisher': 'Sueño Tattoo',
    'dc.coverage': 'Laurel, Maryland, United States',
    'dc.rights': `Copyright ${new Date().getFullYear()} Sueño Tattoo`
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Advanced SEO and Performance Optimizations */}
        <AdvancedSEO 
          criticalCSS={criticalCSS}
          preloadFonts={['/fonts/inter-subset.woff2']}
          preloadImages={['/images/seo/sueño-tattoo-logo.png', '/images/hero/tattoo-artist-hero.webp']}
          enableWebVitals={true}
          enableLazyLoading={true}
        />
        
        {/* Critical preconnects for faster loading */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://hqnwthvicofazfdnsati.supabase.co" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/seo/sueño-tattoo-logo.png" as="image" type="image/png" />
        <link rel="preload" href="/fonts/inter-subset.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#D4A117" />
        
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Sueno Tattoo" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-TileImage" content="/apple-touch-icon.png" />
        
        {/* Local Business Meta */}
        <meta name="geo.region" content="US-MD" />
        <meta name="geo.placename" content="Laurel" />
        <meta name="geo.position" content="39.0993;-76.8483" />
        <meta name="ICBM" content="39.0993, -76.8483" />
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="Sueño Tattoo Blog" href="/feed.xml" />
        
        {/* Verification Tags (add when needed) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* <meta name="facebook-domain-verification" content="your-verification-code" /> */}
        
        {/* Google Analytics 4 (add when ready) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        {/* Performance Monitoring */}
        <PerformanceMonitor />
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-deep-red text-crisp-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        
        {/* Global Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.suenotattoo.com/#business",
                  "name": "Sueño Tattoo",
                  "alternateName": "Jose's Tattoo Studio",
                  "slogan": "Where Dreams Become Art",
                  "image": "https://www.suenotattoo.com/images/logo/logo.png",
                  "logo": "https://www.suenotattoo.com/images/logo/logo.png",
                  "url": "https://www.suenotattoo.com",
                  "telephone": "+12407583226",
                  "email": "jpared19@outlook.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Laurel, MD",
                    "addressLocality": "Laurel",
                    "addressRegion": "MD",
                    "postalCode": "20723",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 39.0993,
                    "longitude": -76.8483
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday"],
                      "opens": "12:00",
                      "closes": "18:00"
                    }
                  ],
                  "priceRange": "$100-$800",
                  "paymentAccepted": "Cash, Credit Card, Apple Pay",
                  "currenciesAccepted": "USD",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "59",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "founder": {
                    "@type": "Person",
                    "name": "Jose",
                    "jobTitle": "Professional Tattoo Artist"
                  },
                  "serviceArea": {
                    "@type": "Place",
                    "name": "Laurel, MD and DMV area including Prince George's County, Beltsville, College Park, Greenbelt"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Tattoo Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Custom Tattoo Design",
                          "description": "Original custom tattoo designs created through collaborative consultation process"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Traditional American Tattoos",
                          "description": "Classic American traditional tattoos with bold lines and vibrant colors"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Realistic Tattoos",
                          "description": "Photorealistic tattoos with incredible detail perfect for portraits"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.suenotattoo.com/#website",
                  "url": "https://www.suenotattoo.com",
                  "name": "Sueño Tattoo",
                  "publisher": {
                    "@id": "https://www.suenotattoo.com/#business"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.suenotattoo.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
        
        <PerformanceOptimizer />
        <div id="root">
          <Navbar />
          <div className="h-16"></div>
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* NoScript fallback */}
        <noscript>
          <div className="bg-deep-red text-crisp-white p-4 text-center">
            This website works best with JavaScript enabled. Please enable JavaScript to enjoy the full experience.
          </div>
        </noscript>
      </body>
    </html>
  )
}
