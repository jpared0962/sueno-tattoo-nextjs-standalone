import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';
import { getLocationsByState } from '@/data/locations';

const marylandLocations = getLocationsByState('MD');

export const metadata: Metadata = generateSEOMetadata({
  title: `Professional Tattoo Artist Maryland | Jose | ${businessInfo.name}`,
  description: `Professional tattoo services throughout Maryland. Jose specializes in custom designs, traditional American style, realism work. Based in Laurel, serving Prince George's County & DMV.`,
  keywords: [
    'tattoo artist maryland',
    'custom tattoos maryland',
    'professional tattoo artist md',
    'laurel md tattoo artist',
    'prince georges county tattoo',
    'licensed tattoo artist maryland',
    'traditional tattoos maryland',
    'realistic realism tattoos md'
  ],
  url: '/locations/maryland',
});

export default function MarylandPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />

      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Professional Tattoo Artist in Maryland
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Jose brings 8+ years of professional tattoo artistry to Maryland communities. 
              Based in Laurel and serving Prince George's County, Montgomery County, and the greater DMV area 
              with custom original designs and traditional work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-consultation" 
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </a>
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Call {businessInfo.contact.phone}
              </a>
            </div>
          </section>

          {/* Maryland Service Areas */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Maryland Service Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessInfo.serviceAreas.filter(area => area.includes('MD')).map((area, index) => (
                <div key={index} className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{area}</h3>
                  <p className="text-crisp-white/80 mb-4">
                    Professional tattoo services with convenient access and flexible scheduling.
                  </p>
                  <a 
                    href="/book-consultation"
                    className="text-deep-red hover:text-crisp-white hover:bg-deep-red px-4 py-2 rounded transition-all"
                  >
                    Book Consultation →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Maryland Tattoo Services */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Why Choose Sueño Tattoo for Maryland Clients?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Local Maryland Expertise</h3>
                <p className="text-crisp-white/80">
                  Based in Laurel, MD with deep understanding of Maryland communities, regulations, 
                  and client preferences. Serving Prince George's County and surrounding areas for years.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Maryland State Licensed</h3>
                <p className="text-crisp-white/80">
                  Fully licensed and insured professional meeting all Maryland state requirements 
                  for tattoo artistry. Compliance with local health department standards.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">DMV Area Access</h3>
                <p className="text-crisp-white/80">
                  Convenient location with easy access from Washington DC, Northern Virginia, 
                  and throughout Maryland. Central location for the entire DMV metro area.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Community Focused</h3>
                <p className="text-crisp-white/80">
                  Proud member of the Maryland tattoo community with commitment to serving 
                  local clients with personalized attention and cultural respect.
                </p>
              </div>
            </div>
          </section>

          {/* Services Popular in Maryland */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Popular Tattoo Services in Maryland
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Maryland Designs",
                  description: "Original artwork incorporating Maryland themes, landmarks, and personal stories.",
                  price: "$200+",
                  popular: "Flag designs, Crab motifs, Local landmarks"
                },
                {
                  title: "Traditional American Style", 
                  description: "Classic American traditional tattoos with bold lines and vibrant colors.",
                  price: "$200+",
                  popular: "Eagles, Roses, Anchors, Military themes"
                },
                {
                  title: "Realism Work",
                  description: "Lifelike portraits of family, pets, or meaningful subjects.",
                  price: "$400+",
                  popular: "Family portraits, Pet memorials, Historical figures"
                },
                {
                  title: "Cover-up Specialists",
                  description: "Expert cover-up work transforming old tattoos into new art.",
                  price: "$400+",
                  popular: "Name cover-ups, Tribal reworks, Design improvements"
                },
                {
                  title: "Military & Memorial",
                  description: "Honoring service members and commemorating loved ones.",
                  price: "$200+",
                  popular: "Military insignia, Memorial pieces, Patriotic designs"
                },
                {
                  title: "Fine Line & Minimalist",
                  description: "Delicate, precise work perfect for professional settings.",
                  price: "$200+",
                  popular: "Small symbols, Coordinates, Meaningful quotes"
                }
              ].map((service, index) => (
                <div key={index} className="bg-charcoal-gray/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{service.title}</h3>
                  <p className="text-crisp-white/80 mb-4">{service.description}</p>
                  <div className="mb-3">
                    <span className="text-deep-red font-semibold">Popular: </span>
                    <span className="text-crisp-white/70 text-sm">{service.popular}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-red font-semibold">{service.price}</span>
                    <a href="/book-consultation" className="text-crisp-white hover:text-deep-red">
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Maryland Client Testimonials */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Maryland Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Jennifer K. - Laurel, MD</span>
                </div>
                <p className="text-crisp-white/80">
                  "Jose is incredibly talented and professional. He created a beautiful custom piece 
                  that perfectly captured what I wanted. The healing process was flawless thanks to 
                  his excellent aftercare guidance."
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Marcus T. - College Park, MD</span>
                </div>
                <p className="text-crisp-white/80">
                  "Drove from College Park and it was absolutely worth it. Jose's attention to detail 
                  is amazing and his professionalism made me feel comfortable throughout the entire process."
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready to Get Your Tattoo in Maryland?
            </h2>
            <p className="text-crisp-white/80 mb-6">
              Book your free consultation with Jose and experience professional tattoo 
              artistry right here in Maryland.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="text-crisp-white/80">
                <strong className="text-crisp-white">Location:</strong> Laurel, MD 20723
              </div>
              <div className="text-crisp-white/80">
                <strong className="text-crisp-white">Hours:</strong> Thursday-Sunday: 12PM-6PM
              </div>
              <div className="text-crisp-white/80">
                <strong className="text-crisp-white">Phone:</strong> <a href={`tel:${businessInfo.contact.phone}`} className="text-deep-red hover:underline">{businessInfo.contact.phone}</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </a>
              <a 
                href="/gallery"
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                View Maryland Work
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}