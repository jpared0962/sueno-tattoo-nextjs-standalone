'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X, Phone, MessageCircle } from 'lucide-react'

export function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    const handleScroll = () => {
      const scrolled = window.scrollY
      setIsVisible(scrolled > 200)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const quickActions = [
    {
      icon: Calendar,
      label: 'Book Consultation',
      href: '/book-consultation',
      color: 'bg-deep-red hover:bg-deep-red/80',
      primary: true
    },
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+1234567890',
      color: 'bg-gold hover:bg-gold/80 text-ink-black'
    },
    {
      icon: MessageCircle,
      label: 'Text Us',
      href: 'sms:+1234567890',
      color: 'bg-charcoal-gray hover:bg-charcoal-gray/80'
    }
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isExpanded && isMobile && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3 mb-2"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {quickActions.slice(1).map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={action.href}
                  className={`
                    glass-button flex items-center space-x-3 px-4 py-3 rounded-full
                    text-crisp-white font-medium text-sm
                    transform transition-all duration-200 hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
                  `}
                >
                  <action.icon size={18} />
                  <span>{action.label}</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="relative"
      >
        {isMobile ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              glass-floating w-14 h-14 rounded-full flex items-center justify-center
              text-crisp-white transform transition-all duration-300 hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
            `}
            aria-label={isExpanded ? 'Close booking options' : 'Open booking options'}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? <X size={24} /> : <Calendar size={24} />}
            </motion.div>
          </button>
        ) : (
          <Link
            href="/book-consultation"
            className="
              glass-button flex items-center space-x-3
              text-crisp-white px-6 py-3 rounded-full font-medium
              transform transition-all duration-300 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
            "
            aria-label="Book free consultation"
          >
            <Calendar size={20} />
            <span>Book Free Consult</span>
          </Link>
        )}

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-deep-red animate-ping opacity-20" />
      </motion.div>
    </div>
  )
}

export function SocialProofBanner() {
  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '8+', label: 'Years Experience' },
    { value: '95%', label: 'Perfect Healing' },
    { value: '5.0★', label: 'Google Rating' }
  ]

  return (
    <motion.div
      className="glass-stat rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-crisp-white mb-2">
          Trusted by the DMV Community
        </h3>
        <p className="text-crisp-white/80 text-sm">
          Licensed professional with proven results
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-2xl font-bold text-gold">{stat.value}</div>
            <div className="text-crisp-white/70 text-xs">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function BeforeAfterShowcase({
  beforeImage,
  afterImage,
  title,
  description
}: {
  beforeImage: string
  afterImage: string
  title: string
  description: string
}) {
  const [showAfter, setShowAfter] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="glass-card rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-crisp-white mb-2">{title}</h3>
            <p className="text-crisp-white/80 text-sm max-w-2xl mx-auto">{description}</p>
          </div>
          
          {/* Image Slider */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-charcoal-gray mx-auto max-w-2xl">
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src={beforeImage}
                alt="Before tattoo"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* After Image with Clip Path */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={afterImage}
                alt="After tattoo"
                className="w-full h-full object-contain"
              />
            </div>
          
          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-gold cursor-ew-resize z-10 touch-none"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={(e) => {
              e.preventDefault()
              const rect = e.currentTarget.parentElement!.getBoundingClientRect()
              const handleMouseMove = (e: MouseEvent) => {
                const x = e.clientX - rect.left
                const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
                setSliderPosition(percentage)
              }
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove)
                document.removeEventListener('mouseup', handleMouseUp)
              }
              
              document.addEventListener('mousemove', handleMouseMove)
              document.addEventListener('mouseup', handleMouseUp)
            }}
            onTouchStart={(e) => {
              e.preventDefault()
              const rect = e.currentTarget.parentElement!.getBoundingClientRect()
              const handleTouchMove = (e: TouchEvent) => {
                const touch = e.touches[0]
                const x = touch.clientX - rect.left
                const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
                setSliderPosition(percentage)
              }
              
              const handleTouchEnd = () => {
                document.removeEventListener('touchmove', handleTouchMove)
                document.removeEventListener('touchend', handleTouchEnd)
              }
              
              document.addEventListener('touchmove', handleTouchMove, { passive: false })
              document.addEventListener('touchend', handleTouchEnd)
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl border-2 border-yellow-300">
              <div className="w-4 h-4 md:w-3 md:h-3 bg-amber-900 rounded-full" />
            </div>
          </div>
          
          {/* Click/Touch anywhere to slide */}
          <div 
            className="absolute inset-0 cursor-ew-resize touch-none"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
              setSliderPosition(percentage)
            }}
            onTouchStart={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const touch = e.touches[0]
              const x = touch.clientX - rect.left
              const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
              setSliderPosition(percentage)
            }}
          />
          
          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/50 text-crisp-white px-2 py-1 rounded text-xs">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-black/50 text-crisp-white px-2 py-1 rounded text-xs">
            After
          </div>
        </div>
        
        {/* Toggle Buttons */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-6 max-w-md mx-auto">
          <button
            onClick={() => setSliderPosition(0)}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold touch-manipulation ${
              sliderPosition < 25 
                ? 'bg-gold text-ink-black shadow-glow-gold' 
                : 'bg-charcoal-gray hover:bg-charcoal-gray/70 text-crisp-white'
            }`}
          >
            <span className="hidden sm:inline">Show Before Only</span>
            <span className="sm:hidden">Before</span>
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold touch-manipulation ${
              sliderPosition > 25 && sliderPosition < 75 
                ? 'bg-gold text-ink-black shadow-glow-gold' 
                : 'bg-charcoal-gray hover:bg-charcoal-gray/70 text-crisp-white'
            }`}
          >
            Compare
          </button>
          <button
            onClick={() => setSliderPosition(100)}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold touch-manipulation ${
              sliderPosition > 75 
                ? 'bg-gold text-ink-black shadow-glow-gold' 
                : 'bg-deep-red hover:bg-deep-red/80 text-crisp-white'
            }`}
          >
            <span className="hidden sm:inline">Show After Only</span>
            <span className="sm:hidden">After</span>
          </button>
        </div>
        
        {/* Instructions */}
        <div className="text-center mt-4">
          <p className="text-crisp-white/60 text-xs">
            <span className="hidden sm:inline">Drag the slider or click anywhere on the image to compare • Use buttons for quick view</span>
            <span className="sm:hidden">Drag slider or tap image • Use buttons for quick view</span>
          </p>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export function PriceTransparencyCard() {
  const priceRanges = [
    { service: 'Small Tattoos', size: '2-4 inches', price: '$120-200', duration: '1-2 hours' },
    { service: 'Medium Tattoos', size: '4-6 inches', price: '$200-400', duration: '2-4 hours' },
    { service: 'Large Tattoos', size: '6+ inches', price: '$400-800+', duration: '4-8 hours' },
    { service: 'Custom Design', size: 'Any size', price: '+$50-150', duration: '1-2 weeks' }
  ]

  return (
    <motion.div
      className="glass-pricing rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold text-crisp-white mb-4 text-center">
        Transparent Pricing
      </h3>
      <p className="text-crisp-white/80 text-sm text-center mb-6">
        No hidden fees. Free consultations. Clear estimates.
      </p>
      
      <div className="space-y-4">
        {priceRanges.map((item, index) => (
          <motion.div
            key={item.service}
            className="flex justify-between items-center p-3 glass-panel rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div>
              <div className="text-crisp-white font-medium">{item.service}</div>
              <div className="text-crisp-white/70 text-xs">{item.size} • {item.duration}</div>
            </div>
            <div className="text-gold font-semibold">{item.price}</div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 p-4 glass-accent rounded-lg">
        <p className="text-crisp-white/90 text-sm text-center">
          ✓ Free consultation included<br />
          ✓ No pressure, honest advice<br />
          ✓ Deposit applied to final cost
        </p>
      </div>
    </motion.div>
  )
}