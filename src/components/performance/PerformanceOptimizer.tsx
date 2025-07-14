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
      
      if (prefersReducedMotion || prefersReducedData) return 'low'
      
      let score = 0
      if (hardwareConcurrency >= 8) score += 3
      else if (hardwareConcurrency >= 4) score += 2
      else score += 1
      
      if (memory >= 8) score += 3
      else if (memory >= 4) score += 2
      else score += 1
      
      if (score >= 6) return 'high'
      if (score >= 4) return 'medium'
      return 'low'
    }
    
    // Apply performance class
    const performanceMode = detectPerformance()
    document.documentElement.classList.add(`perf-${performanceMode}`)
    
    // Add page-loaded class after initial paint
    requestAnimationFrame(() => {
      document.body.classList.add('page-loaded')
    })
    
    // Cleanup function
    return () => {
      document.documentElement.classList.remove('perf-high', 'perf-medium', 'perf-low')
      document.body.classList.remove('page-loaded')
    }
  }, [])

  return null // This component doesn't render anything
}