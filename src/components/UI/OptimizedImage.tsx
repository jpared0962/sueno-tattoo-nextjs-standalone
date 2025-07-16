'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  sizes,
  quality = 85,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Generate WebP version of the image path
  const getWebPSrc = (originalSrc: string) => {
    // Check if it's already a WebP
    if (originalSrc.endsWith('.webp')) {
      return originalSrc
    }
    
    // Replace extension with .webp
    const lastDot = originalSrc.lastIndexOf('.')
    if (lastDot > -1) {
      return originalSrc.substring(0, lastDot) + '.webp'
    }
    
    return originalSrc
  }

  // Fallback to original format if WebP fails
  const handleError = () => {
    if (!imageError) {
      setImageError(true)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Generate low-quality placeholder for blur effect
  const generateBlurDataURL = (src: string) => {
    if (blurDataURL) return blurDataURL
    
    // Simple base64 encoded 1x1 pixel transparent image
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
  }

  const commonProps = {
    alt,
    className: `${className} ${isLoading ? 'opacity-0 transition-opacity duration-300' : 'opacity-100 transition-opacity duration-300'}`,
    onError: handleError,
    onLoad: handleLoad,
    priority,
    quality,
    placeholder: placeholder as 'blur' | 'empty',
    blurDataURL: placeholder === 'blur' ? generateBlurDataURL(src) : undefined,
    sizes: sizes || (fill ? '100vw' : undefined)
  }

  if (fill) {
    return (
      <>
        {/* Try WebP first */}
        {!imageError ? (
          <Image
            src={getWebPSrc(src)}
            fill
            {...commonProps}
          />
        ) : (
          /* Fallback to original format */
          <Image
            src={src}
            fill
            {...commonProps}
          />
        )}
      </>
    )
  }

  return (
    <>
      {/* Try WebP first */}
      {!imageError ? (
        <Image
          src={getWebPSrc(src)}
          width={width}
          height={height}
          {...commonProps}
        />
      ) : (
        /* Fallback to original format */
        <Image
          src={src}
          width={width}
          height={height}
          {...commonProps}
        />
      )}
    </>
  )
}

// Pre-built optimized image components for common use cases
export function HeroImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      className={className}
      priority
      sizes="100vw"
      quality={90}
      placeholder="blur"
    />
  )
}

export function GalleryImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={85}
      placeholder="blur"
    />
  )
}

export function ServiceImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, 50vw"
      quality={80}
      placeholder="blur"
    />
  )
}

export function ThumbnailImage({ 
  src, 
  alt, 
  width = 300, 
  height = 300, 
  className 
}: { 
  src: string; 
  alt: string; 
  width?: number; 
  height?: number; 
  className?: string 
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      quality={75}
      placeholder="blur"
    />
  )
}