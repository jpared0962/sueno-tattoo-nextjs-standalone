import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { generateSEOMetadata } from '@/components/seo/SEOHead'
import { TattooServiceSchema } from '@/components/seo/LocalBusinessSchema'
import { businessInfo } from '@/data/business-info'
import { getServiceBySlug } from '@/data/services'

const serviceSlug = 'flash-tattoos'
const service = getServiceBySlug(serviceSlug)

if (!service) {
  notFound()
}

export const metadata: Metadata = generateSEOMetadata({
  title: `${service.name} | Professional Tattoo Services`,
  description: `${service.description} Expert ${service.name.toLowerCase()} in Laurel, MD. Same-day appointments available. Quick flash designs, walk-in friendly. Call (240) 758-3226 to book consultation.`,
  keywords: service.seoKeywords,
  url: `/services/${service.slug}`,
})

export default function FlashTattoosPage() {
  if (!service) {
    notFound()
  }

  const features = [
    'Pre-designed artwork ready for immediate tattooing',
    'Same-day appointments available',
    'Quick session times (30 minutes to 2 hours)',
    'Affordable fixed pricing',
    'Perfect for walk-in clients',
    'Traditional American flash art style',
    'No design fee required',
    'Professional quality execution'
  ]

  const flashCategories = [
    { name: 'Traditional Flash', description: 'Classic American traditional designs' },
    { name: 'Small Flash', description: 'Quick, simple designs perfect for first tattoos' },
    { name: 'Nautical Flash', description: 'Anchors, ships, and sailor-themed designs' },
    { name: 'Floral Flash', description: 'Roses, flowers, and botanical flash art' },
    { name: 'Animal Flash', description: 'Eagles, panthers, and classic animal designs' },
    { name: 'Symbolic Flash', description: 'Skulls, daggers, and traditional symbols' }
  ]

  const pricingTiers = [
    { size: 'Small Flash', dimension: '1-3 inches', price: '$100-150', time: '30-60 min' },
    { size: 'Medium Flash', dimension: '3-5 inches', price: '$150-200', time: '1-2 hours' },
    { size: 'Large Flash', dimension: '5+ inches', price: '$200-250', time: '2-3 hours' }
  ]

  return (
    <>
      <TattooServiceSchema 
        serviceName={service.name}
        description={service.description}
        priceRange={service.priceRange}
      />
      
      <div className="min-h-screen pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex space-x-2 text-sm text-crisp-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="before:content-['/'] before:mr-2">
                <Link href="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li className="before:content-['/'] before:mr-2">
                <span aria-current="page" className="text-crisp-white">Flash Tattoos</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gold to-deep-red bg-clip-text text-transparent">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-crisp-white/90 mb-6 md:mb-8">
              Ready-to-ink flash designs for same-day appointments
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-crisp-white/80 mb-6">
                {service.description} Perfect for walk-in clients or when you want quality flash art without the wait.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/flash"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Flash Gallery
              </Link>
              <Link 
                href="/book-consultation"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Book Flash Session
              </Link>
            </div>
          </section>

          {/* Service Features */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Flash Tattoo Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="text-gold mr-3 mt-1">✓</div>
                    <p className="text-crisp-white">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Flash Categories */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Flash Art Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flashCategories.map((category, index) => (
                <div key={index} className="glass-service rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{category.name}</h3>
                  <p className="text-crisp-white/80">{category.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Flash Tattoo Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="glass-pricing rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{tier.size}</h3>
                  <div className="text-3xl font-bold text-gold mb-2">{tier.price}</div>
                  <div className="text-crisp-white/80 mb-2">{tier.dimension}</div>
                  <div className="text-crisp-white/60 text-sm">{tier.time}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-crisp-white/80 text-sm">
                All prices include consultation and aftercare instructions. 
                <Link href="/aftercare" className="text-gold hover:underline ml-1">
                  Learn about aftercare →
                </Link>
              </p>
            </div>
          </section>

          {/* Process */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-crisp-white">
              Flash Tattoo Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Browse Flash', description: 'View our available flash designs' },
                { step: '2', title: 'Quick Consultation', description: 'Discuss placement and sizing' },
                { step: '3', title: 'Same-Day Tattooing', description: 'Get your flash tattoo immediately' },
                { step: '4', title: 'Aftercare Guide', description: 'Follow professional healing instructions' }
              ].map((step, index) => (
                <div key={index} className="glass-accent rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-gold mb-3">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-2 text-crisp-white">{step.title}</h3>
                  <p className="text-crisp-white/80 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-crisp-white">
                Ready for Flash Art?
              </h2>
              <p className="text-crisp-white/80 mb-8">
                Browse our complete flash collection and book your same-day session today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/flash"
                  className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Flash Gallery
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-ink-black px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}