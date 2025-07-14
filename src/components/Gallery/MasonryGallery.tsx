'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Grid3X3, LayoutGrid, Maximize2 } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title?: string
  description?: string
}

interface MasonryGalleryProps {
  images: GalleryImage[]
  showCategories?: boolean
}

export function MasonryGallery({ images, showCategories = true }: MasonryGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [layoutMode, setLayoutMode] = useState<'masonry' | 'grid'>('masonry')

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))]
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        {/* Category Filter */}
        {showCategories && (
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-gold text-ink-black'
                    : 'bg-charcoal-gray/50 text-crisp-white hover:bg-charcoal-gray/70'
                  }
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Layout Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setLayoutMode('masonry')}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${layoutMode === 'masonry'
                ? 'bg-gold text-ink-black'
                : 'bg-charcoal-gray/50 text-crisp-white hover:bg-charcoal-gray/70'
              }
            `}
            aria-label="Masonry layout"
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setLayoutMode('grid')}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${layoutMode === 'grid'
                ? 'bg-gold text-ink-black'
                : 'bg-charcoal-gray/50 text-crisp-white hover:bg-charcoal-gray/70'
              }
            `}
            aria-label="Grid layout"
          >
            <Grid3X3 size={20} />
          </button>
        </div>
      </div>

      {/* Gallery */}
      {layoutMode === 'masonry' ? (
        <MasonryLayout images={filteredImages} />
      ) : (
        <GridLayout images={filteredImages} />
      )}
    </div>
  )
}

function MasonryLayout({ images }: { images: GalleryImage[] }) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="break-inside-avoid mb-4 group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="relative overflow-hidden rounded-lg bg-charcoal-gray shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              quality={85}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 text-crisp-white p-3 rounded-full">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>

            {/* Title */}
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-crisp-white font-medium">{image.title}</h3>
                {image.description && (
                  <p className="text-crisp-white/80 text-sm mt-1">{image.description}</p>
                )}
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-gold text-ink-black px-2 py-1 rounded-full text-xs font-medium">
                {image.category}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function GridLayout({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="group cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="relative overflow-hidden rounded-lg bg-charcoal-gray shadow-lg" style={{ aspectRatio: '3/4' }}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              quality={85}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 text-crisp-white p-3 rounded-full">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>

            {/* Title */}
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-crisp-white font-medium">{image.title}</h3>
                {image.description && (
                  <p className="text-crisp-white/80 text-sm mt-1">{image.description}</p>
                )}
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-gold text-ink-black px-2 py-1 rounded-full text-xs font-medium">
                {image.category}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
