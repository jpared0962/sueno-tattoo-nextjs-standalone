'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, Share2 } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title?: string
  description?: string
  beforeSrc?: string // For before/after comparisons
}

interface InteractiveGalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  showCategories?: boolean
  showBeforeAfter?: boolean
}

export function InteractiveGallery({ 
  images, 
  columns = 3,
  showCategories = true,
  showBeforeAfter = false 
}: InteractiveGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)
  const [showBefore, setShowBefore] = useState(false)
  const lightboxRef = useRef<HTMLDivElement>(null)

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))]
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      
      switch (e.key) {
        case 'Escape':
          setSelectedImage(null)
          break
        case 'ArrowLeft':
          navigateImage(-1)
          break
        case 'ArrowRight':
          navigateImage(1)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setShowBefore(false)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: number) => {
    const newIndex = currentIndex + direction
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setCurrentIndex(newIndex)
      setSelectedImage(filteredImages[newIndex])
      setShowBefore(false)
    }
  }

  const shareImage = async () => {
    if (!selectedImage) return
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedImage.title || 'Sueno Tattoo Portfolio',
          text: selectedImage.description || 'Check out this amazing tattoo work!',
          url: window.location.href
        })
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      {showCategories && (
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink-black
                ${selectedCategory === category
                  ? 'bg-gold text-ink-black shadow-glow-gold'
                  : 'bg-charcoal-gray/50 text-crisp-white hover:bg-charcoal-gray'
                }
              `}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Filter by ${category}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className={`grid ${columnClasses[columns]} gap-4`}>
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="bg-charcoal-gray/30 rounded-lg animate-pulse" 
              style={{ aspectRatio: '3/4' }}
            />
          ))}
        </div>
      )}

      {/* Gallery Grid - Masonry Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className={`columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              onClick={() => openLightbox(image, index)}
              showBeforeAfter={showBeforeAfter && !!image.beforeSrc}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            ref={lightboxRef}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4">
              {/* Navigation */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-crisp-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage(-1)
                }}
                disabled={currentIndex === 0}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-crisp-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage(1)
                }}
                disabled={currentIndex === filteredImages.length - 1}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Controls */}
              <div className="absolute top-4 right-4 flex space-x-2">
                {selectedImage.beforeSrc && (
                  <button
                    className="p-2 bg-black/50 rounded-full text-crisp-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowBefore(!showBefore)
                    }}
                    aria-label={showBefore ? 'Show after' : 'Show before'}
                  >
                    <ZoomIn size={20} />
                  </button>
                )}
                
                <button
                  className="p-2 bg-black/50 rounded-full text-crisp-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                  onClick={(e) => {
                    e.stopPropagation()
                    shareImage()
                  }}
                  aria-label="Share image"
                >
                  <Share2 size={20} />
                </button>

                <button
                  className="p-2 bg-black/50 rounded-full text-crisp-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Image */}
              <motion.div
                className="relative max-w-4xl max-h-[80vh] w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={showBefore && selectedImage.beforeSrc ? selectedImage.beforeSrc : selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    quality={95}
                    priority
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-crisp-white">
                    <span className="inline-block bg-gold text-ink-black px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {selectedImage.category}
                    </span>
                    {selectedImage.title && (
                      <h3 className="text-lg font-semibold mb-1">{selectedImage.title}</h3>
                    )}
                    {selectedImage.description && (
                      <p className="text-crisp-white/90 text-sm">{selectedImage.description}</p>
                    )}
                    {showBefore && selectedImage.beforeSrc && (
                      <p className="text-gold text-sm mt-2">Before Image</p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 rounded-full px-3 py-1 text-crisp-white text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function GalleryItem({ 
  image, 
  index, 
  onClick, 
  showBeforeAfter 
}: { 
  image: GalleryImage
  index: number
  onClick: () => void
  showBeforeAfter?: boolean
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showBefore, setShowBefore] = useState(false)

  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-charcoal-gray mb-4 break-inside-avoid"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${image.alt} in lightbox`}
    >
      {/* Main Image */}
      <div className="relative w-full">
        <Image
          src={showBefore && image.beforeSrc ? image.beforeSrc : image.src}
          alt={image.alt}
          width={400}
          height={600}
          className={`
            w-full h-auto object-cover transition-all duration-500 group-hover:scale-105
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          onLoad={() => setIsLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          loading="lazy"
        />
        
        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-charcoal-gray/50 animate-pulse" />
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Category Badge */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-gold text-ink-black px-2 py-1 rounded-full text-xs font-medium">
          {image.category}
        </span>
      </div>

      {/* Before/After Toggle */}
      {showBeforeAfter && image.beforeSrc && (
        <button
          className="absolute top-3 right-3 bg-black/50 text-crisp-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-gold"
          onClick={(e) => {
            e.stopPropagation()
            setShowBefore(!showBefore)
          }}
          aria-label={showBefore ? 'Show after' : 'Show before'}
        >
          <ZoomIn size={16} />
        </button>
      )}

      {/* Zoom Icon */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/50 text-crisp-white p-2 rounded-full">
          <ZoomIn size={16} />
        </div>
      </div>

      {/* Title Overlay */}
      {image.title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-crisp-white font-medium text-sm">{image.title}</h3>
        </div>
      )}
    </motion.div>
  )
}