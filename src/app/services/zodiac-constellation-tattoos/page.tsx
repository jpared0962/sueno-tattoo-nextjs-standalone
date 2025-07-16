import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zodiac Constellation Tattoos Laurel MD | Astrological Tattoo Designs | Sueño Tattoo',
  description: 'Custom zodiac constellation tattoos and astrological designs. Professional astrology tattoo artist in Laurel, MD. Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn tattoos.',
  keywords: 'zodiac tattoos, constellation tattoos, astrology tattoos, aquarius tattoos, pisces tattoos, aries tattoos, taurus tattoos, gemini tattoos, cancer tattoos, leo tattoos, virgo tattoos, libra tattoos, scorpio tattoos, sagittarius tattoos, capricorn tattoos, astrological tattoos, celestial tattoos, star sign tattoos',
  alternates: {
    canonical: '/services/zodiac-constellation-tattoos',
  },
  openGraph: {
    title: 'Zodiac Constellation Tattoos Laurel MD | Astrological Tattoo Designs',
    description: 'Custom zodiac constellation tattoos and astrological designs. Professional astrology tattoo artist in Laurel, MD.',
    url: 'https://www.suenotattoo.com/services/zodiac-constellation-tattoos',
    type: 'website',
    images: [
      {
        url: '/images/services/zodiac-constellation-tattoos.jpg',
        width: 1200,
        height: 630,
        alt: 'Zodiac Constellation Tattoos by Sueño Tattoo',
      },
    ],
  },
}

export default function ZodiacConstellationTattoosPage() {
  const zodiacSigns = [
    {
      sign: 'Aquarius',
      dates: 'January 20 - February 18',
      element: 'Air',
      symbol: 'Water Bearer',
      traits: 'Independent, innovative, humanitarian',
      constellation: 'Known for the distinctive water-pouring figure'
    },
    {
      sign: 'Pisces',
      dates: 'February 19 - March 20',
      element: 'Water',
      symbol: 'Two Fish',
      traits: 'Intuitive, artistic, compassionate',
      constellation: 'Two fish swimming in opposite directions'
    },
    {
      sign: 'Aries',
      dates: 'March 21 - April 19',
      element: 'Fire',
      symbol: 'Ram',
      traits: 'Bold, energetic, pioneering',
      constellation: 'Ram with distinctive curved horns'
    },
    {
      sign: 'Taurus',
      dates: 'April 20 - May 20',
      element: 'Earth',
      symbol: 'Bull',
      traits: 'Stable, determined, practical',
      constellation: 'Bull featuring the bright star Aldebaran'
    },
    {
      sign: 'Gemini',
      dates: 'May 21 - June 20',
      element: 'Air',
      symbol: 'Twins',
      traits: 'Curious, adaptable, communicative',
      constellation: 'Twin figures of Castor and Pollux'
    },
    {
      sign: 'Cancer',
      dates: 'June 21 - July 22',
      element: 'Water',
      symbol: 'Crab',
      traits: 'Nurturing, intuitive, protective',
      constellation: 'Crab shape with the Beehive Cluster'
    },
    {
      sign: 'Leo',
      dates: 'July 23 - August 22',
      element: 'Fire',
      symbol: 'Lion',
      traits: 'Confident, generous, creative',
      constellation: 'Majestic lion with the bright star Regulus'
    },
    {
      sign: 'Virgo',
      dates: 'August 23 - September 22',
      element: 'Earth',
      symbol: 'Maiden',
      traits: 'Analytical, helpful, perfectionist',
      constellation: 'Maiden holding wheat, featuring bright Spica'
    },
    {
      sign: 'Libra',
      dates: 'September 23 - October 22',
      element: 'Air',
      symbol: 'Scales',
      traits: 'Diplomatic, balanced, aesthetic',
      constellation: 'Balanced scales representing justice'
    },
    {
      sign: 'Scorpio',
      dates: 'October 23 - November 21',
      element: 'Water',
      symbol: 'Scorpion',
      traits: 'Intense, passionate, mysterious',
      constellation: 'Scorpion with the red star Antares'
    },
    {
      sign: 'Sagittarius',
      dates: 'November 22 - December 21',
      element: 'Fire',
      symbol: 'Archer',
      traits: 'Adventurous, optimistic, philosophical',
      constellation: 'Centaur archer pointing toward galactic center'
    },
    {
      sign: 'Capricorn',
      dates: 'December 22 - January 19',
      element: 'Earth',
      symbol: 'Sea Goat',
      traits: 'Ambitious, disciplined, responsible',
      constellation: 'Sea goat with distinctive triangular shape'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Zodiac Constellation Tattoos",
            "description": "Custom zodiac constellation and astrological tattoo designs for all 12 zodiac signs",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sueño Tattoo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Laurel",
                "addressRegion": "MD",
                "postalCode": "20723",
                "addressCountry": "US"
              }
            },
            "serviceType": "Astrological Tattoo Design",
            "areaServed": "DMV Area",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Zodiac Sign Tattoo Designs",
              "itemListElement": zodiacSigns.map((sign, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": `${sign.sign} Constellation Tattoo`,
                  "description": `${sign.sign} zodiac tattoo representing ${sign.traits}`
                }
              }))
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-deep-red-900 via-ink-black to-charcoal-gray">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-warm-gray-300">
              <li><Link href="/" className="hover:text-muted-gold transition-colors">Home</Link></li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-muted-gold transition-colors">Services</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-crisp-white font-medium">Zodiac Constellation Tattoos</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-crisp-white mb-6">
              Zodiac Constellation Tattoos
            </h1>
            <p className="text-xl text-warm-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Connect with the cosmos through beautiful zodiac constellation tattoos. Jose creates accurate star patterns 
              and artistic interpretations of your astrological sign at Sueño Tattoo in Laurel, MD. Perfect for astrology 
              enthusiasts and celestial art lovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-muted-gold hover:bg-muted-gold-600 text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Zodiac Consultation
              </Link>
              <Link
                href="/gallery"
                className="border border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-ink-black px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Celestial Portfolio
              </Link>
            </div>
          </div>

          {/* Why Zodiac Tattoos */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-crisp-white mb-8">Why Choose Zodiac Constellation Tattoos?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Personal Connection</h3>
                  <p className="text-warm-gray-300">Your zodiac sign reflects your personality, traits, and cosmic connection, making it deeply meaningful.</p>
                </div>
                <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Celestial Beauty</h3>
                  <p className="text-warm-gray-300">Star patterns and constellation designs create stunning, ethereal tattoos that capture cosmic wonder.</p>
                </div>
                <div className="bg-charcoal-gray/30 rounded-xl border border-warm-gray-700 p-6">
                  <h3 className="text-xl font-semibold text-muted-gold mb-4">Timeless Appeal</h3>
                  <p className="text-warm-gray-300">Astrological symbols have been meaningful for thousands of years and never go out of style.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zodiac Signs Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">All Zodiac Signs Available</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zodiacSigns.map((sign, index) => (
                <div key={index} className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6 hover:border-muted-gold transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-muted-gold">{sign.sign}</h3>
                    <span className="text-sm text-warm-gray-400 bg-warm-gray-800 px-2 py-1 rounded">{sign.element}</span>
                  </div>
                  <p className="text-sm text-warm-gray-400 mb-2">{sign.dates}</p>
                  <p className="text-warm-gray-300 mb-3 font-medium">{sign.symbol}</p>
                  <p className="text-warm-gray-400 text-sm mb-3">{sign.traits}</p>
                  <p className="text-xs text-warm-gray-500 leading-relaxed">{sign.constellation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Styles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">Zodiac Tattoo Styles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-8">
                <h3 className="text-2xl font-bold text-muted-gold mb-4">Constellation Star Maps</h3>
                <p className="text-warm-gray-300 mb-4">
                  Accurate star pattern tattoos showing your zodiac constellation exactly as it appears in the night sky. 
                  Perfect for astronomy enthusiasts.
                </p>
                <ul className="text-warm-gray-400 space-y-2">
                  <li>• Astronomically accurate patterns</li>
                  <li>• Fine line dot work stars</li>
                  <li>• Minimalist, elegant design</li>
                  <li>• Can include bright star names</li>
                </ul>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-8">
                <h3 className="text-2xl font-bold text-muted-gold mb-4">Artistic Zodiac Symbols</h3>
                <p className="text-warm-gray-300 mb-4">
                  Stylized interpretations of zodiac symbols combined with constellation elements. Blend mythology 
                  with celestial beauty.
                </p>
                <ul className="text-warm-gray-400 space-y-2">
                  <li>• Mythological symbol artwork</li>
                  <li>• Combined with star patterns</li>
                  <li>• Traditional or neo-traditional style</li>
                  <li>• Rich in symbolic meaning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mercury Retrograde Section */}
          <div className="bg-charcoal-gray/30 rounded-2xl border border-warm-gray-700 p-8 mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-8">Astrological Timing Considerations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Mercury Retrograde & Tattoos</h3>
                <p className="text-warm-gray-300 mb-4">
                  Many clients ask about getting tattoos during Mercury retrograde. While there are no medical 
                  contraindications, we respect astrological beliefs and can schedule around preferred timing.
                </p>
                <ul className="text-warm-gray-400 space-y-1">
                  <li>• No medical restrictions during retrograde</li>
                  <li>• We respect spiritual beliefs</li>
                  <li>• Flexible scheduling for optimal timing</li>
                  <li>• Consultation to discuss concerns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-muted-gold mb-4">Optimal Astrological Timing</h3>
                <p className="text-warm-gray-300 mb-4">
                  Some clients prefer to get zodiac tattoos during their birthday season or during favorable 
                  astrological transits for added personal significance.
                </p>
                <ul className="text-warm-gray-400 space-y-1">
                  <li>• Birthday season tattoos</li>
                  <li>• New moon ceremonies</li>
                  <li>• Personal astrological events</li>
                  <li>• Meaningful date selection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Popular Combinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">Popular Zodiac Combinations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Sun, Moon & Rising</h3>
                <p className="text-warm-gray-400 text-sm">Combine your three main astrological signs in one comprehensive design representing your complete astrological profile.</p>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Couple's Compatibility</h3>
                <p className="text-warm-gray-400 text-sm">Matching or complementary zodiac tattoos showing astrological compatibility between partners or loved ones.</p>
              </div>
              <div className="bg-charcoal-gray/20 rounded-xl border border-warm-gray-700 p-6">
                <h3 className="text-lg font-semibold text-muted-gold mb-3">Full Zodiac Wheel</h3>
                <p className="text-warm-gray-400 text-sm">Complete zodiac circle highlighting your sign, perfect for astrology enthusiasts who love the entire cosmic system.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-crisp-white text-center mb-12">Zodiac Tattoo Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold text-muted-gold mb-2">Astrological Consultation</h3>
                <p className="text-warm-gray-400 text-sm">Discuss your zodiac sign, astrological interests, and design preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold text-muted-gold mb-2">Celestial Design</h3>
                <p className="text-warm-gray-400 text-sm">Create accurate constellation patterns or artistic zodiac interpretations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold text-muted-gold mb-2">Cosmic Refinement</h3>
                <p className="text-warm-gray-400 text-sm">Perfect the star placement and symbolic elements for accuracy and beauty</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-gold rounded-full flex items-center justify-center text-ink-black font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold text-muted-gold mb-2">Stellar Application</h3>
                <p className="text-warm-gray-400 text-sm">Professional tattooing with attention to celestial detail and precision</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-muted-gold to-muted-gold-600 rounded-2xl p-8 text-ink-black text-center">
            <h2 className="text-3xl font-bold mb-4">Connect with Your Cosmic Identity</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your consultation to design the perfect zodiac constellation tattoo reflecting your astrological essence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-ink-black text-muted-gold px-8 py-3 rounded-lg font-medium hover:bg-charcoal-gray transition-colors"
              >
                Book Astrological Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-ink-black text-ink-black px-8 py-3 rounded-lg font-medium hover:bg-ink-black hover:text-muted-gold transition-colors"
              >
                Ask About Zodiac Tattoos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}