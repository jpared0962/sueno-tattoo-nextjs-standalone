'use client'

import Head from 'next/head'
import { useEffect } from 'react'

interface AdvancedSEOProps {
  criticalCSS?: string
  preloadFonts?: string[]
  preloadImages?: string[]
  enableWebVitals?: boolean
  enableLazyLoading?: boolean
}

export function AdvancedSEO({
  criticalCSS,
  preloadFonts = [],
  preloadImages = [],
  enableWebVitals = true,
  enableLazyLoading = true
}: AdvancedSEOProps) {
  
  useEffect(() => {
    // Enable lazy loading for images if not natively supported
    if (enableLazyLoading && 'loading' in HTMLImageElement.prototype === false) {
      // Fallback for older browsers - could implement intersection observer here
      console.log('Native lazy loading not supported, consider implementing polyfill')
    }

    // Performance optimizations
    if (enableWebVitals) {
      // Report Web Vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }

    // Preload critical resources on user interaction
    const preloadOnInteraction = () => {
      // Preload next likely pages
      const criticalPages = ['/gallery', '/services', '/book-consultation']
      criticalPages.forEach(page => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = page
        document.head.appendChild(link)
      })
    }

    // Add event listeners for preloading
    const events = ['mouseenter', 'touchstart', 'focus']
    events.forEach(event => {
      document.addEventListener(event, preloadOnInteraction, { once: true, passive: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, preloadOnInteraction)
      })
    }
  }, [enableWebVitals, enableLazyLoading])

  return (
    <Head>
      {/* Critical CSS inline */}
      {criticalCSS && (
        <style 
          dangerouslySetInnerHTML={{ __html: criticalCSS }}
          data-critical-css
        />
      )}

      {/* Preload critical fonts */}
      {preloadFonts.map((font, index) => (
        <link
          key={index}
          rel="preload"
          href={font}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      ))}

      {/* Preload critical images */}
      {preloadImages.map((image, index) => (
        <link
          key={index}
          rel="preload"
          href={image}
          as="image"
          type="image/webp"
        />
      ))}

      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Preconnect to important external domains */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints for performance */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Enable GZIP compression hint */}
      <meta httpEquiv="content-encoding" content="gzip" />
      
      {/* Optimize for mobile performance */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Service Worker registration hint */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Critical resource hints */}
      <link rel="prefetch" href="/api/contact" />
      <link rel="prefetch" href="/gallery" />
      <link rel="prefetch" href="/services" />
    </Head>
  )
}

// Component for lazy loading sections
export function LazySection({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  className = ''
}: {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lazy-loaded')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    const lazyElements = document.querySelectorAll('.lazy-load')
    lazyElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div className={`lazy-load ${className} opacity-0 transform translate-y-8 transition-all duration-700 ease-out`}>
      {children}
    </div>
  )
}

// Performance monitoring component
export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime)
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            console.log('CLS:', clsValue)
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null
}

// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Critical above-the-fold styles */
  body {
    font-family: system-ui, -apple-system, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #0a0a0a;
    color: #ffffff;
  }
  
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  }
  
  .hero-title {
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #d4af37;
    color: #0a0a0a;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: transform 0.2s ease;
  }
  
  .cta-button:hover {
    transform: scale(1.05);
  }
  
  /* Lazy loading animation */
  .lazy-loaded {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`