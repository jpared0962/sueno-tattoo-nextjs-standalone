'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function Analytics() {
  useEffect(() => {
    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const { name, value } = entry as any
        if (['LCP', 'FID', 'CLS'].includes(name) && window.gtag) {
          window.gtag('event', name, {
            event_category: 'Core Web Vitals',
            value: Math.round(name === 'CLS' ? value * 1000 : value),
          })
        }
      }
    })

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Fallback for older browsers
    }

    return () => observer.disconnect()
  }, [])

  return null
}