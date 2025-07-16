import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';

export const metadata: Metadata = generateSEOMetadata({
  title: `Professional Tattoo Artist Northern Virginia | Jose | ${businessInfo.name}`,
  description: `Expert tattoo services for Northern Virginia clients. Jose specializes in custom designs, traditional American style, realism work. Based in nearby Laurel, MD serving DMV area.`,
  keywords: [
    'tattoo artist northern virginia',
    'custom tattoos nova',
    'professional tattoo artist virginia',
    'arlington tattoo artist',
    'alexandria tattoo services',
    'fairfax tattoo artist',
    'dmv area tattoo artist',
    'virginia tattoo services'
  ],
  url: '/locations/northern-virginia',
});

export default function NorthernVirginiaPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />

      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Professional Tattoo Artist Serving Northern Virginia
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Jose brings 8+ years of professional tattoo artistry to Northern Virginia clients. 
              Conveniently located in nearby Laurel, MD with easy access for Arlington, Alexandria, 
              Fairfax, and all NoVA communities seeking custom original designs.
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

          {/* Northern Virginia Access */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Convenient Access from Northern Virginia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  area: "Arlington & Alexandria",
                  distance: "25-35 minutes",
                  route: "I-495 North to US-1 North",
                  highlights: "Easy Capitol Beltway access"
                },
                {
                  area: "Fairfax & Vienna",
                  distance: "30-40 minutes", 
                  route: "I-495 to I-95 North",
                  highlights: "Straightforward highway route"
                },
                {
                  area: "Tysons & McLean",
                  distance: "35-45 minutes",
                  route: "I-495 around to I-95 North",
                  highlights: "Beltway to I-95 connection"
                },
                {
                  area: "Annandale & Falls Church",
                  distance: "30-35 minutes",
                  route: "I-495 North via local roads",
                  highlights: "Multiple route options"
                },
                {
                  area: "Springfield & Burke",
                  distance: "25-30 minutes",
                  route: "I-95 North direct",
                  highlights: "Most direct NoVA route"
                },
                {
                  area: "Reston & Herndon",
                  distance: "40-50 minutes",
                  route: "Dulles Toll Road to I-495",
                  highlights: "Scenic northern approach"
                }
              ].map((location, index) => (
                <div key={index} className="bg-charcoal-gray/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{location.area}</h3>
                  <div className="space-y-2 text-crisp-white/80">
                    <div><strong className="text-crisp-white">Distance:</strong> {location.distance}</div>
                    <div><strong className="text-crisp-white">Route:</strong> {location.route}</div>
                    <div className="text-gold text-sm">{location.highlights}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Popular with NoVA Clients */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Popular Services for Northern Virginia Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Tech Professional Designs",
                  description: "Clean, modern designs perfect for Northern Virginia's tech corridor.",
                  price: "$200+",
                  popular: "Geometric patterns, Minimal symbols, Code references"
                },
                {
                  title: "Military & Service Tributes", 
                  description: "Honoring military service with respectful, meaningful designs.",
                  price: "$300+",
                  popular: "Branch insignia, Memorial pieces, Deployment memories"
                },
                {
                  title: "Family & Heritage",
                  description: "Celebrating family connections and cultural heritage.",
                  price: "$250+",
                  popular: "Family crests, Birth flowers, Cultural symbols"
                },
                {
                  title: "Cover-up Transformations",
                  description: "Expert rework of existing tattoos into beautiful new art.",
                  price: "$400+",
                  popular: "Name cover-ups, Tribal updates, Design improvements"
                },
                {
                  title: "Custom Virginia Themes",
                  description: "Original designs celebrating Virginia history and landmarks.",
                  price: "$300+",
                  popular: "Blue Ridge Mountains, Historical themes, State pride"
                },
                {
                  title: "Professional Discrete Work",
                  description: "Sophisticated designs suitable for corporate environments.",
                  price: "$200+",
                  popular: "Small placement, Meaningful symbols, Elegant script"
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

          {/* Why NoVA Clients Choose Sueño Tattoo */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Why Northern Virginia Clients Choose Sueño Tattoo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Maryland Value</h3>
                <p className="text-crisp-white/80">
                  High-quality professional work at competitive Maryland rates. Better value than 
                  many Northern Virginia studios while maintaining premium quality and service standards.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Tech Industry Understanding</h3>
                <p className="text-crisp-white/80">
                  Familiar with Northern Virginia's tech culture and professional requirements. 
                  Expert at creating meaningful designs that respect corporate environments.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Military Respect</h3>
                <p className="text-crisp-white/80">
                  Deep respect for military service with experience creating meaningful tributes. 
                  Understanding of military culture and appropriate memorial work.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Flexible Scheduling</h3>
                <p className="text-crisp-white/80">
                  Thursday-Sunday availability perfect for Northern Virginia professionals. 
                  Weekend appointments and flexible timing to accommodate busy schedules.
                </p>
              </div>
            </div>
          </section>

          {/* Northern Virginia Client Testimonials */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Northern Virginia Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Michael R. - Arlington, VA</span>
                </div>
                <p className="text-crisp-white/80">
                  "Drove up from Arlington and couldn't be happier. Jose created an amazing custom 
                  piece that perfectly captured my military service. Professional quality at great 
                  value compared to DC/NoVA pricing."
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Lisa K. - Fairfax, VA</span>
                </div>
                <p className="text-crisp-white/80">
                  "As someone working in tech, I needed something professional yet meaningful. 
                  Jose understood exactly what I wanted and delivered beyond expectations. 
                  Worth the drive from Fairfax!"
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready to Get Your Tattoo Near Northern Virginia?
            </h2>
            <p className="text-crisp-white/80 mb-6">
              Book your free consultation with Jose. Easy access from all Northern Virginia 
              communities with professional quality and competitive pricing.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="text-crisp-white/80">
                <strong className="text-crisp-white">Location:</strong> Laurel, MD (25-50 min from NoVA)
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
                View Portfolio
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}