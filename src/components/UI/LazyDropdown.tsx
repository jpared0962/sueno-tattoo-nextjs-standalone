'use client'

import { useState, useRef, useEffect } from 'react'

interface LazyDropdownProps {
  question: string
  children: React.ReactNode
  className?: string
}

export function LazyDropdown({ question, children, className = '' }: LazyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (detailsRef.current) {
      observer.observe(detailsRef.current)
    }

    return () => observer.disconnect()
  }, [isLoaded])

  const handleToggle = () => {
    setIsOpen(!isOpen)
    if (!isLoaded) {
      setIsLoaded(true)
    }
  }

  return (
    <details 
      ref={detailsRef}
      className={`group ${className}`}
      open={isOpen}
      onToggle={handleToggle}
    >
      <summary className="flex justify-between items-center cursor-pointer text-crisp-white/90 hover:text-gold transition-colors">
        <span>{question}</span>
        <span className="group-open:rotate-180 transition-transform">▼</span>
      </summary>
      {isLoaded && (
        <div className="mt-3 text-crisp-white/80 text-sm">
          {children}
        </div>
      )}
    </details>
  )
}