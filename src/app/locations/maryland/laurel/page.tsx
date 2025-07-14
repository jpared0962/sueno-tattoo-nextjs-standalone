import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';

// SEO Metadata for Laurel, MD location page
export const metadata: Metadata = generateSEOMetadata({
  title: `Professional Tattoo Artist Laurel MD | Jose Alvarado | Custom Tattoos`,
  description: `Top-rated tattoo artist in Laurel, Maryland. Jose Alvarado specializes in custom designs, traditional American style, realism work. Licensed & insured. Call ${businessInfo.contact.phone}`,
  keywords: [
    'tattoo artist laurel md',
    'custom tattoos laurel maryland',
    'professional tattoo laurel',
    'licensed tattoo artist laurel md',
    'traditional tattoos laurel',
    'realistic realism tattoos laurel',
    'best tattoo shop laurel maryland',
    'prince georges county tattoo artist',
    'tattoo consultation laurel md'
  ],
  url: '/locations/maryland/laurel',
});

export default function LaurelMDPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />

      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Professional Tattoo Artist in Laurel, MD
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Jose Alvarado brings 8+ years of professional tattoo artistry to Laurel, Maryland. 
              Specializing in custom original designs, traditional American style, and realism work 
              with a 95% perfect healing rate.
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

          {/* Location Details */}
          <section className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-crisp-white">
                  Serving Laurel, MD & Surrounding Areas
                </h2>
                <div className="space-y-4 text-crisp-white/80">
                  <p>
                    Located in the heart of Laurel, Maryland, Sueño Tattoo serves clients throughout 
                    Prince George's County and the greater DMV area. Our central location provides 
                    easy access for clients from:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {businessInfo.serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-deep-red rounded-full mr-3"></span>
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-charcoal-gray/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-crisp-white">Studio Information</h3>
                <div className="space-y-4 text-crisp-white/80">
                  <div>
                    <strong className="text-crisp-white">Location:</strong><br />
                    Laurel, MD 20723
                  </div>
                  <div>
                    <strong className="text-crisp-white">Hours:</strong><br />
                    Thursday - Sunday: 12:00 PM - 6:00 PM<br />
                    Monday - Wednesday: Closed
                  </div>
                  <div>
                    <strong className="text-crisp-white">Contact:</strong><br />
                    Phone: <a href={`tel:${businessInfo.contact.phone}`} className="text-deep-red hover:underline">{businessInfo.contact.phone}</a><br />
                    Email: <a href={`mailto:${businessInfo.contact.email}`} className="text-deep-red hover:underline">{businessInfo.contact.email}</a>
                  </div>
                  <div>
                    <strong className="text-crisp-white">Appointments:</strong><br />
                    Walk-in consultations welcome<br />
                    Advance booking recommended
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Laurel Location */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Why Choose Sueño Tattoo in Laurel, MD?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Local Expertise</h3>
                <p className="text-crisp-white/80">
                  As a Laurel-based artist, Jose understands the local community and has built 
                  lasting relationships with clients throughout Prince George's County and the DMV area.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Convenient Access</h3>
                <p className="text-crisp-white/80">
                  Centrally located with easy access from Baltimore, Washington DC, and surrounding 
                  Maryland communities. Ample parking and public transportation options available.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Professional Standards</h3>
                <p className="text-crisp-white/80">
                  Licensed and insured professional maintaining the highest standards of cleanliness, 
                  safety, and artistic excellence in every session.
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Community Focused</h3>
                <p className="text-crisp-white/80">
                  Proud to serve the Laurel community with personalized attention, cultural respect, 
                  and commitment to creating meaningful artwork for each client.
                </p>
              </div>
            </div>
          </section>

          {/* Services in Laurel */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Tattoo Services Available in Laurel, MD
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Tattoo Designs",
                  description: "Original artwork created specifically for you. No flash, no copies - every piece is unique.",
                  price: "$200+"
                },
                {
                  title: "Traditional American Style", 
                  description: "Bold lines, vibrant colors, and timeless designs rooted in classic American tattooing.",
                  price: "$200+"
                },
                {
                  title: "Realistic Portraits",
                  description: "Lifelike depictions of people, pets, or meaningful subjects with incredible detail.",
                  price: "$400+"
                },
                {
                  title: "Cover-up Tattoos",
                  description: "Transform unwanted tattoos into beautiful new artwork you'll love.",
                  price: "$400+"
                },
                {
                  title: "Spiritual & Symbolic",
                  description: "Meaningful designs representing your beliefs, values, and personal journey.",
                  price: "$200+"
                },
                {
                  title: "Fine Line & Minimalist",
                  description: "Delicate, precise linework creating elegant and subtle tattoo designs.",
                  price: "$200+"
                }
              ].map((service, index) => (
                <div key={index} className="bg-charcoal-gray/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{service.title}</h3>
                  <p className="text-crisp-white/80 mb-4">{service.description}</p>
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

          {/* Local Testimonials */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Laurel Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Sarah M. - Laurel, MD</span>
                </div>
                <p className="text-crisp-white/80">
                  "Jose created the most beautiful custom piece for me. His attention to detail 
                  and professionalism made the entire experience amazing. Highly recommend!"
                </p>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">★★★★★</div>
                  <span className="ml-2 text-crisp-white/80">Mike R. - College Park, MD</span>
                </div>
                <p className="text-crisp-white/80">
                  "Best tattoo experience I've ever had. The healing was perfect and the 
                  artwork exceeded my expectations. Worth the drive from College Park!"
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Ready to Get Your Custom Tattoo in Laurel, MD?
            </h2>
            <p className="text-crisp-white/80 mb-6">
              Book your free consultation with Jose Alvarado and start creating your perfect tattoo today.
            </p>
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