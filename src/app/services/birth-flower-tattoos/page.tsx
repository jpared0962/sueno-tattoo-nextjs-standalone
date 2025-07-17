import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Birth Flower Tattoos Laurel MD | Monthly Birth Flower Designs | Sueño Tattoo',
  description: 'Beautiful birth flower tattoos for every month. Custom botanical designs featuring your birth month flower. Professional birth flower tattoo artist in Laurel, MD serving DMV area.',
  keywords: 'birth flower tattoos, monthly birth flowers, botanical tattoos, birth month flowers, carnation tattoos, violet tattoos, daffodil tattoos, daisy tattoos, lily valley tattoos, rose tattoos, larkspur tattoos, gladiolus tattoos, aster tattoos, marigold tattoos, chrysanthemum tattoos, poinsettia tattoos, birth flower tattoo artist Laurel MD',
  alternates: {
    canonical: '/services/birth-flower-tattoos',
  },
  openGraph: {
    title: 'Birth Flower Tattoos Laurel MD | Monthly Birth Flower Designs',
    description: 'Beautiful birth flower tattoos for every month. Custom botanical designs featuring your birth month flower.',
    url: 'https://www.suenotattoo.com/services/birth-flower-tattoos',
    type: 'website',
    images: [
      {
        url: '/images/services/birth-flower-tattoos.jpg',
        width: 1200,
        height: 630,
        alt: 'Birth Flower Tattoos by Sueño Tattoo',
      },
    ],
  },
}

export default function BirthFlowerTattoosPage() {
  const birthFlowers = [
    {
      month: 'January',
      flower: 'Carnation',
      meaning: 'Deep love, fascination, distinction',
      colors: 'Pink, red, white',
      description: 'Carnations symbolize deep love and fascination. Perfect for fine line or traditional style tattoos.'
    },
    {
      month: 'February', 
      flower: 'Violet',
      meaning: 'Modesty, faithfulness, virtue',
      colors: 'Purple, blue, white',
      description: 'Violets represent modesty and faithfulness. Beautiful in watercolor or realistic styles.'
    },
    {
      month: 'March',
      flower: 'Daffodil',
      meaning: 'New beginnings, rebirth, hope',
      colors: 'Yellow, white, orange',
      description: 'Daffodils symbolize new beginnings and hope. Stunning in bright, vibrant colors.'
    },
    {
      month: 'April',
      flower: 'Daisy',
      meaning: 'Innocence, purity, new beginnings',
      colors: 'White, yellow, pink',
      description: 'Daisies represent innocence and purity. Perfect for delicate, minimalist designs.'
    },
    {
      month: 'May',
      flower: 'Lily of the Valley',
      meaning: 'Humility, sweetness, return of happiness',
      colors: 'White, cream',
      description: 'Lily of the Valley symbolizes humility and sweetness. Elegant in fine line style.'
    },
    {
      month: 'June',
      flower: 'Rose',
      meaning: 'Love, passion, beauty',
      colors: 'Red, pink, white, yellow',
      description: 'Roses are classic symbols of love and beauty. Perfect for any tattoo style.'
    },
    {
      month: 'July',
      flower: 'Larkspur',
      meaning: 'Positivity, dignity, grace',
      colors: 'Blue, purple, pink, white',
      description: 'Larkspur represents positivity and grace. Beautiful in watercolor or realistic styles.'
    },
    {
      month: 'August',
      flower: 'Gladiolus',
      meaning: 'Strength, integrity, infatuation',
      colors: 'Pink, red, yellow, orange',
      description: 'Gladiolus symbolizes strength and integrity. Striking in bold, colorful designs.'
    },
    {
      month: 'September',
      flower: 'Aster',
      meaning: 'Patience, elegance, daintiness',
      colors: 'Purple, pink, white',
      description: 'Asters represent patience and elegance. Perfect for detailed, intricate designs.'
    },
    {
      month: 'October',
      flower: 'Marigold',
      meaning: 'Warmth, creativity, passion',
      colors: 'Orange, yellow, red',
      description: 'Marigolds symbolize warmth and creativity. Vibrant in traditional or neo-traditional styles.'
    },
    {
      month: 'November',
      flower: 'Chrysanthemum',
      meaning: 'Joy, optimism, longevity',
      colors: 'Yellow, white, red, purple',
      description: 'Chrysanthemums represent joy and longevity. Beautiful in detailed, realistic styles.'
    },
    {
      month: 'December',
      flower: 'Poinsettia',
      meaning: 'Good cheer, success, celebration',
      colors: 'Red, white, pink',
      description: 'Poinsettias symbolize celebration and success. Perfect for holiday-themed designs.'
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
            "name": "Birth Flower Tattoos",
            "description": "Custom birth flower tattoo designs for each month of the year",
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
            "serviceType": "Tattoo Design",
            "areaServed": "DMV Area",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Birth Flower Tattoo Designs",
              "itemListElement": birthFlowers.map((flower, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": `${flower.month} Birth Flower - ${flower.flower}`,
                  "description": `${flower.flower} tattoo representing ${flower.meaning}`
                }
              }))
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-crisp-white via-warm-gray-50 to-muted-gold-50">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-warm-gray-600">
              <li><Link href="/" className="hover:text-deep-red transition-colors">Home</Link></li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-deep-red transition-colors">Services</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-warm-gray-900 font-medium">Birth Flower Tattoos</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-deep-red mb-6">
              Birth Flower Tattoos | Professional Tattoo Artist Laurel, MD
            </h1>
            <p className="text-xl text-warm-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Celebrate your birth month with a beautiful botanical tattoo. Each month has its own unique flower 
              with special meaning and symbolism. Jose creates custom birth flower designs in fine line, traditional, 
              or realistic styles at Sueño Tattoo in Laurel, MD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Book Birth Flower Consultation
              </Link>
              <Link
                href="/gallery"
                className="border border-deep-red text-deep-red hover:bg-deep-red hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Botanical Portfolio
              </Link>
            </div>
          </div>

          {/* Why Birth Flower Tattoos */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-deep-red mb-8">Why Choose Birth Flower Tattoos?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-deep-red mb-4">Personal Meaning</h3>
                  <p className="text-warm-gray-700">Your birth flower carries unique symbolism and meaning specific to your birth month, making it deeply personal.</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-deep-red mb-4">Timeless Beauty</h3>
                  <p className="text-warm-gray-700">Botanical designs are classic and never go out of style. They age beautifully and maintain their appeal over time.</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-deep-red mb-4">Versatile Styles</h3>
                  <p className="text-warm-gray-700">Birth flowers work in any style - fine line, traditional, realistic, watercolor, or minimalist designs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Birth Flowers by Month */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">Birth Flowers by Month</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {birthFlowers.map((flower, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-deep-red">{flower.month}</h3>
                    <span className="ml-auto text-muted-gold-600 font-medium">{flower.colors}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-warm-gray-900 mb-2">{flower.flower}</h4>
                  <p className="text-warm-gray-600 italic mb-3">{flower.meaning}</p>
                  <p className="text-warm-gray-700 text-sm leading-relaxed">{flower.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Styles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">Birth Flower Tattoo Styles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-deep-red mb-4">Fine Line Birth Flowers</h3>
                <p className="text-warm-gray-700 mb-4">
                  Delicate, minimalist birth flower designs with thin lines and subtle details. Perfect for first tattoos 
                  or those who prefer understated elegance.
                </p>
                <ul className="text-warm-gray-700 space-y-2">
                  <li>• Minimal, clean aesthetic</li>
                  <li>• Perfect for small placements</li>
                  <li>• Professional workplace friendly</li>
                  <li>• Quick healing process</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-deep-red mb-4">Traditional Birth Flowers</h3>
                <p className="text-warm-gray-700 mb-4">
                  Bold, colorful birth flower tattoos with strong outlines and vibrant colors in the classic American 
                  traditional style.
                </p>
                <ul className="text-warm-gray-700 space-y-2">
                  <li>• Bold, timeless designs</li>
                  <li>• Vibrant, lasting colors</li>
                  <li>• Strong visual impact</li>
                  <li>• Ages beautifully over time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Popular Combinations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-8">Popular Birth Flower Combinations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Family Birth Flowers</h3>
                <p className="text-warm-gray-700 mb-4">
                  Combine multiple birth flowers to represent family members, children, or loved ones in one beautiful design.
                </p>
                <ul className="text-warm-gray-700 space-y-1">
                  <li>• Mother & children's birth flowers</li>
                  <li>• Couple's birth flowers intertwined</li>
                  <li>• Family bouquet arrangements</li>
                  <li>• Memorial combinations for loved ones</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-red mb-4">Birth Flower Bouquets</h3>
                <p className="text-warm-gray-700 mb-4">
                  Create stunning bouquet-style tattoos featuring your birth flower with complementary botanicals.
                </p>
                <ul className="text-warm-gray-700 space-y-1">
                  <li>• Birth flower with favorite flowers</li>
                  <li>• Seasonal flower arrangements</li>
                  <li>• Birth flower with meaningful herbs</li>
                  <li>• Custom color combinations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing & Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-deep-red text-center mb-12">Birth Flower Tattoo Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold text-deep-red mb-2">Free Consultation</h3>
                <p className="text-warm-gray-700 text-sm">Discuss your birth month, style preferences, and design ideas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold text-deep-red mb-2">Custom Design</h3>
                <p className="text-warm-gray-700 text-sm">Jose creates your unique birth flower design with personal touches</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold text-deep-red mb-2">Refinement</h3>
                <p className="text-warm-gray-700 text-sm">Review and refine the design until it's perfect</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold text-deep-red mb-2">Tattoo Session</h3>
                <p className="text-warm-gray-700 text-sm">Professional application with detailed aftercare instructions</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-deep-red to-deep-red-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Birth Flower Tattoo?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your free consultation to design the perfect birth flower tattoo celebrating your unique month
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-white text-deep-red px-8 py-3 rounded-lg font-medium hover:bg-warm-gray-100 transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-deep-red transition-colors"
              >
                Ask About Birth Flowers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}