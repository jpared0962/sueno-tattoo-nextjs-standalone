'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Detect device performance
    const detectPerformance = () => {
      if (typeof window === 'undefined') return 'medium'
      
      const hardwareConcurrency = navigator.hardwareConcurrency || 4
      const memory = (navigator as any).deviceMemory || 4
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const prefersReducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches
      const connectionType = (navigator as any).connection?.effectiveType || '4g'
      
      if (prefersReducedMotion || prefersReducedData || connectionType === 'slow-2g' || connectionType === '2g') return 'low'
      
      let score = 0
      if (hardwareConcurrency >= 8) score += 3
      else if (hardwareConcurrency >= 4) score += 2
      else score += 1
      
      if (memory >= 8) score += 3
      else if (memory >= 4) score += 2
      else score += 1
      
      // Connection score
      if (connectionType === '4g') score += 2
      else if (connectionType === '3g') score += 1
      
      if (score >= 7) return 'high'
      if (score >= 4) return 'medium'
      return 'low'
    }
    
    // Apply performance class
    const performanceMode = detectPerformance()
    document.documentElement.classList.add(`perf-${performanceMode}`)
    
    // Preload critical resources based on performance
    if (performanceMode === 'high') {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = '/images/gallery-optimized/DSC02447.jpg'
      link.as = 'image'
      document.head.appendChild(link)
    }
    
    // Add page-loaded class after initial paint
    requestAnimationFrame(() => {
      document.body.classList.add('page-loaded')
      
      // Lazy load non-critical resources after page load
      setTimeout(() => {
        if (performanceMode !== 'low') {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement
                if (img.dataset.src) {
                  img.src = img.dataset.src
                  img.removeAttribute('data-src')
                  observer.unobserve(img)
                }
              }
            })
          })
          
          document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img))
        }
      }, 100)
    })
    
    // Cleanup function
    return () => {
      document.documentElement.classList.remove('perf-high', 'perf-medium', 'perf-low')
      document.body.classList.remove('page-loaded')
    }
  }, [])

  return null // This component doesn't render anything
}