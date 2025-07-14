import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';

export const metadata: Metadata = generateSEOMetadata({
  title: `Professional Tattoo Artist Washington DC | Jose Alvarado | ${businessInfo.name}`,
  description: `Expert tattoo services for Washington DC clients. Jose Alvarado specializes in custom designs, traditional American style, realism work. Based in nearby Laurel, MD serving DMV area.`,
  keywords: [
    'tattoo artist washington dc',
    'custom tattoos dc',
    'professional tattoo artist washington',
    'dc area tattoo artist',
    'dmv tattoo services',
    'licensed tattoo artist dc area',
    'traditional tattoos washington dc',
    'realistic realism tattoos dc'
  ],
  url: '/locations/washington-dc',
});

export default function WashingtonDCPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />

      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Professional Tattoo Artist Serving Washington DC
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Jose Alvarado brings 8+ years of professional tattoo artistry to Washington DC clients. 
              Conveniently located in nearby Laurel, MD with easy Metro access for DC residents seeking 
              custom original designs and traditional American style work.
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

          {/* DC Area Access */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Easy Access from Washington DC
            </h2>
            <div className="bg-charcoal-gray/20 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">🚇 Metro Accessible</h3>
                  <p className="text-crisp-white/80 mb-4">
                    Easy access via MARC Penn Line to Laurel station, or drive via I-95/I-495. 
                    Only 30-45 minutes from downtown DC depending on traffic and transportation method.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">🅿️ Convenient Parking</h3>
                  <p className="text-crisp-white/80 mb-4">
                    Free parking available for all DC clients. No need to worry about DC parking 
                    meters or restrictions - focus on your tattoo experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">⏰ Flexible Scheduling</h3>
                  <p className="text-crisp-white/80 mb-4">
                    Thursday-Sunday availability works perfectly for DC professionals. 
                    Weekend and evening appointments available to accommodate work schedules.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-crisp-white">💰 DC Value</h3>
                  <p className="text-crisp-white/80 mb-4">
                    High-quality professional work at competitive Maryland rates. 
                    Better value than many DC studios while maintaining premium quality standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Popular with DC Clients */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Popular Services for Washington DC Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional & Minimalist",
                  description: "Discrete, elegant tattoos perfect for DC's professional environment.",
                  price: "$200+",
                  popular: "Small symbols, Coordinates, Meaningful quotes"
                },
                {
                  title: "Political & Patriotic", 
                  description: "Respectful designs celebrating American values and civic pride.",
                  price: "$200+",
                  popular: "Memorial pieces, Service tributes, Historical themes"
                },
                {
                  title: "Cultural & International",
                  description: "Designs celebrating DC's diverse international community.",
                  price: "$300+",
                  popular: "Cultural symbols, Heritage pieces, Travel memories"
                },
                {
                  title: "Cover-up Specialists",
                  description: "Transform old work into professional-appropriate new designs.",
                  price: "$400+",
                  popular: "Name cover-ups, Professional reworks, Design improvements"
                },
                {
                  title: "Custom Monuments",
                  description: "Original designs inspired by DC landmarks and monuments.",
                  price: "$300+",
                  popular: "Lincoln Memorial, Capitol dome, Cherry blossoms"
                },
                {
                  title: "Realistic Portraits",
                  description: "Memorial pieces and family portraits with incredible detail.",
                  price: "$400+",
                  popular: "Family portraits, Pet memorials, Historical figures"
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

          {/* Why DC Clients Choose Sueño Tattoo */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Why Washington DC Clients Choose Sueño Tattoo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Professional Discretion</h3>
                <p className="text-crisp-white/80">
                  Understanding of DC's professional environment. Expert at creating meaningful 
                  tattoos that respect workplace considerations and career requirements.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Cultural Sensitivity</h3>
                <p className="text-crisp-white/80">
                  Respectful approach to cultural and spiritual designs reflecting DC's diverse 
                  international community. Thoughtful consultation process for meaningful work.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Quality & Safety Standards</h3>
                <p className="text-crisp-white/80">
                  Maryland state licensed with strict health and safety protocols. 
                  Professional standards that meet or exceed DC area expectations.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Personalized Service</h3>
                <p className="text-crisp-white/80">
                  Limited bookings ensure personal attention and custom design development. 
                  Not a high-volume shop - focus on individual client experience and satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* DC Client Testimonials */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What DC Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Sarah M. - Capitol Hill, DC</span>
                </div>
                <p className="text-crisp-white/80">
                  "As a federal employee, I needed something professional yet meaningful. Jose 
                  perfectly balanced my vision with workplace considerations. The drive from DC 
                  was completely worth it for his expertise."
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">David L. - Dupont Circle, DC</span>
                </div>
                <p className="text-crisp-white/80">
                  "Jose created an incredible memorial piece for my father who served in Vietnam. 
                  His respect for the subject matter and attention to detail made this experience 
                  truly special. Highly recommend to DC folks."
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready to Get Your Tattoo Near DC?
            </h2>
            <p className="text-crisp-white/80 mb-6">
              Book your free consultation with Jose Alvarado. Easy access from Washington DC 
              with professional quality and personalized service.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="text-crisp-white/80">
                <strong className="text-crisp-white">Location:</strong> Laurel, MD (30-45 min from DC)
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