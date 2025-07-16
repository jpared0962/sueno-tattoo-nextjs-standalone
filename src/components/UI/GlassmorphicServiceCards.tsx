'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  pricing: string
  priceType: string
  category: string
  slug: string
}

interface GlassmorphicServiceCardsProps {
  services?: Service[]
}

const defaultServices: Service[] = [
  {
    id: 'traditional-american',
    icon: '⚡',
    title: 'Traditional American',
    description: 'Bold, timeless pieces with vibrant colors and clean lines that honor classic tattooing traditions.',
    features: [
      'Classic bold lines and vibrant colors',
      'Traditional imagery and motifs',
      'Time-tested designs that age beautifully'
    ],
    pricing: '$100-200',
    priceType: 'piece',
    category: 'style',
    slug: 'traditional-american-tattoos'
  },
  {
    id: 'custom-designs',
    icon: '🎨',
    title: 'Custom Designs',
    description: 'Original artwork created specifically for you through our collaborative design process.',
    features: [
      'Personal consultation and design session',
      'Original artwork created just for you',
      'Multiple revisions included',
      'Digital mockups and placement guidance'
    ],
    pricing: '$150+ design fee',
    priceType: 'design',
    category: 'service',
    slug: 'custom-tattoo-designs'
  },
  {
    id: 'black-grey',
    icon: '🖤',
    title: 'Black & Grey',
    description: 'Sophisticated monochromatic tattoos with exceptional detail and smooth gradients.',
    features: [
      'Photorealistic imagery and details',
      'Smooth shading and gradient work',
      'Timeless aesthetic that never goes out of style'
    ],
    pricing: '$100-180',
    priceType: 'piece',
    category: 'style',
    slug: 'black-grey-tattoos'
  },
  {
    id: 'cover-ups',
    icon: '🔄',
    title: 'Cover-Up Tattoos',
    description: 'Transform old or unwanted tattoos into beautiful new artwork with our specialized cover-up techniques.',
    features: [
      'Expert assessment and planning',
      'Creative design solutions',
      'Seamless integration with existing work'
    ],
    pricing: '$140-220',
    priceType: 'piece',
    category: 'service',
    slug: 'tattoo-cover-ups'
  }
]

export function GlassmorphicServiceCards({ services = defaultServices }: GlassmorphicServiceCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleCardHover = (cardId: string) => {
    setHoveredCard(cardId)
  }

  const handleCardLeave = () => {
    setHoveredCard(null)
  }

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto">

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="group relative glass-service rounded-2xl p-8 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
              onMouseEnter={() => handleCardHover(service.id)}
              onMouseLeave={handleCardLeave}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl glass-accent rounded-full p-3 backdrop-blur-sm">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-crisp-white mb-2">{service.title}</h2>
                  <p className="text-crisp-white/90 leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start gap-3 text-crisp-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-gold to-deep-red rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Pricing and CTA */}
              <div className="border-t border-crisp-white/20 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-crisp-white/70 text-sm">Starting at</span>
                    <div className="text-2xl font-bold text-gold">{service.pricing}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-crisp-white/60 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <motion.button 
                  className="w-full glass-button text-crisp-white font-semibold py-3 px-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(`/services/${service.slug}`, '_blank')}
                >
                  Learn More →
                </motion.button>
              </div>

              {/* Subtle glow effect */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/10 to-deep-red/10 transition-opacity duration-300 -z-10 blur-xl ${
                  hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gold/40 rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-deep-red/50 rounded-full animate-ping" />
              
              {/* Corner accent lines */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-gold/40 opacity-60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-deep-red/40 opacity-60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-deep-red/40 opacity-60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-gold/40 opacity-60" />
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  )
}

export default GlassmorphicServiceCards