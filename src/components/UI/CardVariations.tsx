'use client'

import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Heart, Award, Calendar, MapPin } from 'lucide-react'

// Card Base Interface
interface BaseCardProps {
  children: ReactNode
  className?: string
  delay?: number
  onClick?: () => void
}

// Modern Glass Card
export function GlassCard({ children, className = '', delay = 0 }: BaseCardProps) {
  return (
    <motion.div
      className={`
        glass-card rounded-2xl p-6 overflow-hidden relative
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-deep-red/5 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-gold/30 rounded-full animate-pulse" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-deep-red/40 rounded-full animate-ping" />
    </motion.div>
  )
}

// Neon Border Card
export function NeonCard({ children, className = '', delay = 0, onClick }: BaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className={`
        glass-accent rounded-xl p-6 overflow-hidden relative
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Animated border glow */}
      <div className={`
        absolute inset-0 rounded-xl transition-all duration-500 pointer-events-none
        ${isHovered 
          ? 'shadow-[0_0_30px_rgba(212,161,23,0.4),inset_0_0_20px_rgba(212,161,23,0.1)]' 
          : 'shadow-lg'
        }
      `} />
      
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gold/60 opacity-70" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-deep-red/60 opacity-70" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-deep-red/60 opacity-70" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gold/60 opacity-70" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

// Polaroid Style Card
export function PolaroidCard({ children, className = '', delay = 0 }: BaseCardProps) {
  return (
    <motion.div
      className={`
        bg-crisp-white rounded-lg shadow-xl p-4 pb-16 transform rotate-1
        border border-gray-200 ${className}
      `}
      initial={{ opacity: 0, rotate: -5, y: 30 }}
      animate={{ opacity: 1, rotate: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ rotate: 0, y: -10, scale: 1.05 }}
    >
      <div className="bg-gray-100 rounded mb-4 aspect-square overflow-hidden">
        {children}
      </div>
      
      {/* Polaroid bottom space for text */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="text-charcoal-gray text-sm font-handwriting text-center">
          Sueno Tattoo ✨
        </div>
      </div>
      
      {/* Tape effect */}
      <div className="absolute -top-2 left-8 w-16 h-6 bg-yellow-200/70 rotate-12 rounded shadow-sm" />
    </motion.div>
  )
}

// Gradient Border Card
export function GradientBorderCard({ children, className = '', delay = 0, onClick }: BaseCardProps) {
  return (
    <motion.div
      className={`relative p-[2px] rounded-2xl bg-gradient-to-r from-gold via-deep-red to-gold ${className}`}
      initial={{ opacity: 0, rotateY: -15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ rotateY: 5, scale: 1.02 }}
      onClick={onClick}
    >
      <div className="glass-panel rounded-2xl p-6 h-full">
        {children}
      </div>
    </motion.div>
  )
}

// Different Testimonial Card Styles
interface TestimonialProps {
  name: string
  location?: string
  rating: number
  text: string
  image?: string
  delay?: number
  style?: 'default' | 'modern' | 'compact' | 'detailed' | 'quote' | 'minimal'
}

export function VariedTestimonialCard({
  name,
  location,
  rating,
  text,
  image,
  delay = 0,
  style = 'default'
}: TestimonialProps) {
  
  const renderStars = () => (
    <div className="flex items-center space-x-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < rating ? 'text-gold fill-gold' : 'text-gray-400'}`}
        />
      ))}
    </div>
  )

  switch (style) {
    case 'modern':
      return (
        <motion.div
          className="glass-testimonial rounded-xl p-6 h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay }}
        >
          <div className="flex items-start space-x-4">
            {image && (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-deep-red p-[2px]">
                <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
              </div>
            )}
            <div className="flex-1">
              {renderStars()}
              <blockquote className="text-crisp-white/90 italic text-sm leading-relaxed mb-3">
                "{text}"
              </blockquote>
              <div>
                <div className="text-gold font-semibold">{name}</div>
                {location && <div className="text-crisp-white/60 text-xs">{location}</div>}
              </div>
            </div>
          </div>
        </motion.div>
      )

    case 'compact':
      return (
        <motion.div
          className="glass-faq rounded-xl p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay }}
          whileHover={{ x: 5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="text-crisp-white font-medium text-sm">{name}</div>
            <div className="flex">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={12} className="text-gold fill-gold" />
              ))}
            </div>
          </div>
          <p className="text-crisp-white/80 text-xs leading-relaxed">"{text}"</p>
          {location && (
            <div className="flex items-center mt-2 text-xs text-crisp-white/50">
              <MapPin size={10} className="mr-1" />
              {location}
            </div>
          )}
        </motion.div>
      )

    case 'detailed':
      return (
        <NeonCard delay={delay} className="h-full">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {image ? (
                  <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-deep-red flex items-center justify-center">
                    <span className="text-ink-black font-bold text-sm">{name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <div className="text-crisp-white font-semibold">{name}</div>
                  {location && (
                    <div className="text-crisp-white/60 text-xs flex items-center">
                      <MapPin size={10} className="mr-1" />
                      {location}
                    </div>
                  )}
                </div>
              </div>
              <Award className="text-gold" size={20} />
            </div>
            
            {renderStars()}
            
            <blockquote className="text-crisp-white/90 leading-relaxed">
              <Quote className="text-gold/50 mb-2" size={16} />
              "{text}"
            </blockquote>
            
            <div className="flex items-center justify-between pt-2 border-t border-charcoal-gray/50">
              <span className="text-crisp-white/50 text-xs">Verified Review</span>
              <Heart className="text-deep-red" size={14} />
            </div>
          </div>
        </NeonCard>
      )

    case 'quote':
      return (
        <motion.div
          className="relative glass-card rounded-lg p-6 border-l-4 border-gold"
          initial={{ opacity: 0, rotateX: -15 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6, delay }}
          whileHover={{ rotateX: 2, y: -5 }}
        >
          <Quote className="absolute top-2 right-2 text-gold/30" size={32} />
          
          <blockquote className="text-crisp-white/90 text-lg italic leading-relaxed mb-4 relative z-10">
            "{text}"
          </blockquote>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gold font-semibold">{name}</div>
              {location && <div className="text-crisp-white/60 text-sm">{location}</div>}
            </div>
            {renderStars()}
          </div>
        </motion.div>
      )

    case 'minimal':
      return (
        <motion.div
          className="glass-testimonial rounded-lg p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <div className="text-center space-y-3">
            {renderStars()}
            <p className="text-crisp-white/80 text-sm">"{text}"</p>
            <div className="text-gold font-medium text-sm">{name}</div>
            {location && <div className="text-crisp-white/50 text-xs">{location}</div>}
          </div>
        </motion.div>
      )

    default:
      return (
        <GradientBorderCard delay={delay} className="h-full">
          <div className="space-y-4">
            {renderStars()}
            <blockquote className="text-crisp-white/90 italic leading-relaxed">
              "{text}"
            </blockquote>
            <div className="flex items-center space-x-3">
              {image && (
                <div className="w-10 h-10 rounded-full bg-charcoal-gray overflow-hidden">
                  <img src={image} alt={`${name}'s profile`} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <div className="text-crisp-white font-medium">{name}</div>
                {location && <div className="text-crisp-white/70 text-sm">{location}</div>}
              </div>
            </div>
          </div>
        </GradientBorderCard>
      )
  }
}

// Service Card Variations
interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  pricing: string
  ctaText?: string
  onClick?: () => void
  delay?: number
  variant?: 'default' | 'modern' | 'minimal' | 'detailed'
}

export function VariedServiceCard({
  icon,
  title,
  description,
  features,
  pricing,
  ctaText = 'Learn More',
  onClick,
  delay = 0,
  variant = 'default'
}: ServiceCardProps) {
  
  switch (variant) {
    case 'modern':
      return (
        <motion.div
          className="glass-service rounded-xl p-6 h-full group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay }}
          onClick={onClick}
        >
          <div className="flex flex-col h-full">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-crisp-white mb-2">{title}</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-deep-red mx-auto rounded-full" />
            </div>
            
            <p className="text-crisp-white/80 text-center mb-6 leading-relaxed flex-grow">
              {description}
            </p>
            
            <div className="space-y-2 mb-6">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-crisp-white/70">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="text-center pt-4 border-t border-white/10">
              <div className="text-gold font-bold text-lg mb-2">{pricing}</div>
              <button className="text-crisp-white text-sm hover:text-gold transition-colors">
                {ctaText} →
              </button>
            </div>
          </div>
        </motion.div>
      )

    case 'minimal':
      return (
        <motion.div
          className="glass-service rounded-2xl p-6 h-full cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.1)' }}
          onClick={onClick}
        >
          <div className="text-center space-y-4">
            <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-lg font-bold text-crisp-white">{title}</h3>
            <p className="text-crisp-white/70 text-sm leading-relaxed">{description}</p>
            <div className="text-gold font-semibold">{pricing}</div>
          </div>
        </motion.div>
      )

    case 'detailed':
      return (
        <NeonCard delay={delay} className="h-full cursor-pointer" onClick={onClick}>
          <div className="flex flex-col h-full">
            <div className="flex items-start space-x-4 mb-4">
              <div className="text-3xl p-3 glass-accent rounded-lg">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-crisp-white mb-2">{title}</h3>
                <p className="text-crisp-white/80 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-6 flex-grow">
              <h4 className="text-gold font-semibold text-sm mb-3">Service Includes:</h4>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start text-sm text-crisp-white/70">
                  <Calendar size={12} className="mr-2 mt-1 text-gold flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="glass-accent rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-crisp-white/70 text-sm">Starting at:</span>
                <span className="text-gold font-bold">{pricing}</span>
              </div>
            </div>
          </div>
        </NeonCard>
      )

    default:
      return (
        <GradientBorderCard delay={delay} className="h-full cursor-pointer" onClick={onClick}>
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{icon}</span>
              <h3 className="text-xl font-bold text-crisp-white">{title}</h3>
            </div>
            
            <p className="text-crisp-white/90 mb-4 leading-relaxed">{description}</p>
            
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
            
            <div className="border-t border-charcoal-gray/50 pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-crisp-white/70">Starting at:</span>
                <span className="text-gold font-semibold">{pricing}</span>
              </div>
              <button className="w-full glass-button text-crisp-white py-2 px-4 rounded-lg text-sm font-medium">
                {ctaText} →
              </button>
            </div>
          </div>
        </GradientBorderCard>
      )
  }
}