'use client'

import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'

interface EnhancedCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: 'gold' | 'red' | 'none'
  animation?: 'fade' | 'slide' | 'zoom' | 'none'
  delay?: number
  onClick?: () => void
  ariaLabel?: string
}

export function EnhancedCard({
  children,
  className = '',
  hover = true,
  glow = 'none',
  animation = 'fade',
  delay = 0,
  onClick,
  ariaLabel
}: EnhancedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = `
    relative overflow-hidden rounded-xl border transition-all duration-300
    ${hover ? 'cursor-pointer' : ''}
    ${glow === 'gold' ? 'hover:shadow-glow-gold' : ''}
    ${glow === 'red' ? 'hover:shadow-glow-red' : ''}
    ${className}
  `

  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay }
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    zoom: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, delay }
    },
    none: {}
  }

  const cardVariants = animation !== 'none' ? animations[animation] : {}

  return (
    <motion.div
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      {...cardVariants}
      role={onClick ? 'button' : undefined}
      aria-label={ariaLabel}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {/* Hover overlay */}
      {hover && (
        <div className={`
          absolute inset-0 bg-gradient-to-br from-gold/5 to-deep-red/5 
          opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}
        `} />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shimmer effect on hover */}
      {hover && (
        <div className={`
          absolute inset-0 -translate-x-full bg-gradient-to-r 
          from-transparent via-white/10 to-transparent
          transition-transform duration-700 ease-in-out
          ${isHovered ? 'translate-x-full' : ''}
        `} />
      )}
    </motion.div>
  )
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  pricing,
  ctaText = 'Learn More',
  onClick,
  delay = 0
}: {
  icon: string
  title: string
  description: string
  features: string[]
  pricing: string
  ctaText?: string
  onClick?: () => void
  delay?: number
}) {
  return (
    <EnhancedCard
      className="bg-charcoal-gray/50 border-charcoal-gray p-6 h-full"
      glow="gold"
      animation="slide"
      delay={delay}
      onClick={onClick}
      ariaLabel={`${title} service details`}
    >
      <div className="flex flex-col h-full">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4" aria-hidden="true">{icon}</span>
          <h3 className="text-xl font-bold text-crisp-white">{title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-crisp-white/90 mb-4 leading-relaxed">{description}</p>
        
        {/* Features */}
        <div className="mb-6 flex-grow">
          <h4 className="text-sm font-semibold text-gold mb-2">What's Included:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-crisp-white/80 flex items-start">
                <span className="text-gold mr-2 mt-1 text-xs">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Pricing and CTA */}
        <div className="border-t border-charcoal-gray/50 pt-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-crisp-white/70">Starting at:</span>
            <span className="text-gold font-semibold">{pricing}</span>
          </div>
          <button 
            className="w-full bg-deep-red/20 hover:bg-deep-red text-crisp-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal-gray"
            onClick={onClick}
            aria-label={`Learn more about ${title}`}
          >
            {ctaText} →
          </button>
        </div>
      </div>
    </EnhancedCard>
  )
}

export function TestimonialCard({
  name,
  location,
  rating,
  text,
  image,
  delay = 0
}: {
  name: string
  location: string
  rating: number
  text: string
  image?: string
  delay?: number
}) {
  return (
    <EnhancedCard
      className="bg-charcoal-gray/30 border-charcoal-gray/50 p-6"
      animation="fade"
      delay={delay}
      glow="gold"
    >
      <div className="space-y-4">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${i < rating ? 'text-gold' : 'text-charcoal-gray'}`}
              aria-hidden="true"
            >
              ★
            </span>
          ))}
          <span className="sr-only">{rating} out of 5 stars</span>
        </div>
        
        {/* Quote */}
        <blockquote className="text-crisp-white/90 italic leading-relaxed">
          "{text}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center space-x-3">
          {image && (
            <div className="w-10 h-10 rounded-full bg-charcoal-gray overflow-hidden">
              <img src={image} alt={`${name}'s profile`} className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <div className="text-crisp-white font-medium">{name}</div>
            <div className="text-crisp-white/70 text-sm">{location}</div>
          </div>
        </div>
      </div>
    </EnhancedCard>
  )
}

export function PriceCard({
  title,
  price,
  description,
  features,
  popular = false,
  ctaText = 'Book Now',
  onClick,
  delay = 0
}: {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
  onClick?: () => void
  delay?: number
}) {
  return (
    <EnhancedCard
      className={`
        relative p-6 h-full
        ${popular 
          ? 'bg-gradient-to-br from-deep-red/20 to-gold/10 border-gold' 
          : 'bg-charcoal-gray/30 border-charcoal-gray/50'
        }
      `}
      animation="zoom"
      delay={delay}
      glow={popular ? 'gold' : 'none'}
      onClick={onClick}
      ariaLabel={`${title} pricing plan`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gold text-ink-black px-3 py-1 rounded-full text-xs font-bold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold text-crisp-white">{title}</h3>
        <div className="text-3xl font-bold text-gold">{price}</div>
        <p className="text-crisp-white/80 text-sm">{description}</p>
        
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="text-crisp-white/90 flex items-center justify-center">
              <span className="text-gold mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <button
          className={`
            w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal-gray
            ${popular
              ? 'bg-gold text-ink-black hover:bg-gold/90 focus:ring-gold'
              : 'bg-deep-red text-crisp-white hover:bg-deep-red/80 focus:ring-deep-red'
            }
          `}
          onClick={onClick}
          aria-label={`${ctaText} for ${title}`}
        >
          {ctaText}
        </button>
      </div>
    </EnhancedCard>
  )
}