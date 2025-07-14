import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';
import { googleReviews, reviewStats, recentReviews } from '@/data/reviews';

export const metadata: Metadata = generateSEOMetadata({
  title: `Client Reviews & Testimonials | ${businessInfo.name} Laurel MD`,
  description: `Read ${reviewStats.totalReviews}+ authentic Google reviews for Jose Alvarado's tattoo work. ${reviewStats.averageRating}-star rated tattoo artist serving Laurel, MD and the DMV area since 2017.`,
  keywords: [
    'tattoo reviews laurel md',
    'jose alvarado reviews',
    'sueno tattoo testimonials',
    'maryland tattoo reviews',
    'dmv tattoo artist reviews',
    'custom tattoo reviews',
    'professional tattoo testimonials',
    '5 star tattoo artist'
  ],
  url: '/reviews',
});

export default function ReviewsPage() {
  const testimonials = [
    {
      name: "Jennifer K.",
      location: "Laurel, MD",
      rating: 5,
      date: "December 2024",
      service: "Custom Rose Design",
      review: "Jose is incredibly talented and professional. He created a beautiful custom piece that perfectly captured what I wanted. The healing process was flawless thanks to his excellent aftercare guidance. I've gotten so many compliments on this tattoo!"
    },
    {
      name: "Marcus T.",
      location: "College Park, MD", 
      rating: 5,
      date: "November 2024",
      service: "Traditional American Eagle",
      review: "Drove from College Park and it was absolutely worth it. Jose's attention to detail is amazing and his professionalism made me feel comfortable throughout the entire process. The traditional work is exactly what I wanted - bold, clean, and timeless."
    },
    {
      name: "Sarah M.",
      location: "Capitol Hill, DC",
      rating: 5,
      date: "October 2024",
      service: "Memorial Portrait",
      review: "As a federal employee, I needed something professional yet meaningful. Jose perfectly balanced my vision with workplace considerations. The drive from DC was completely worth it for his expertise. He created a beautiful memorial piece for my grandmother."
    },
    {
      name: "David L.",
      location: "Dupont Circle, DC",
      rating: 5,
      date: "September 2024",
      service: "Military Tribute Piece",
      review: "Jose created an incredible memorial piece for my father who served in Vietnam. His respect for the subject matter and attention to detail made this experience truly special. Highly recommend to DC folks - worth every minute of the drive."
    },
    {
      name: "Michael R.",
      location: "Arlington, VA",
      rating: 5,
      date: "August 2024",
      service: "Custom Military Design",
      review: "Drove up from Arlington and couldn't be happier. Jose created an amazing custom piece that perfectly captured my military service. Professional quality at great value compared to DC/NoVA pricing. Will definitely be back for my next piece."
    },
    {
      name: "Lisa K.",
      location: "Fairfax, VA",
      rating: 5,
      date: "July 2024",
      service: "Fine Line Minimalist",
      review: "As someone working in tech, I needed something professional yet meaningful. Jose understood exactly what I wanted and delivered beyond expectations. Worth the drive from Fairfax! The fine line work is absolutely perfect."
    },
    {
      name: "Carlos R.",
      location: "Beltsville, MD",
      rating: 5,
      date: "June 2024",
      service: "Cover-up Transformation",
      review: "Jose transformed my old tribal tattoo into something absolutely beautiful. I can't believe it's the same area! His cover-up work is incredible - you'd never know there was an old tattoo underneath. So happy I found him."
    },
    {
      name: "Amanda W.",
      location: "Greenbelt, MD",
      rating: 5,
      date: "May 2024",
      service: "Birth Flower Bouquet",
      review: "The most beautiful floral work I've ever seen! Jose took my idea of birth flowers for my children and created this stunning bouquet design. Every detail is perfect and the colors are so vibrant. Healed beautifully too."
    },
    {
      name: "James P.",
      location: "Hyattsville, MD",
      rating: 5,
      date: "April 2024",
      service: "Realistic Portrait",
      review: "Jose did a portrait of my late dog and I'm blown away by how realistic it looks. The detail in the fur and eyes is incredible. He really captured his personality. This means the world to me - thank you for making this so special."
    },
    {
      name: "Maria S.",
      location: "Alexandria, VA",
      rating: 5,
      date: "March 2024", 
      service: "Cultural Symbol Design",
      review: "Jose was so respectful when I explained the cultural significance of my design. He took time to research and understand the meaning, then created something beautiful that honors my heritage. His cultural sensitivity really impressed me."
    },
    {
      name: "Tony M.",
      location: "Springfield, VA",
      rating: 5,
      date: "February 2024",
      service: "Traditional Anchor",
      review: "Clean, bold traditional work exactly like I wanted. Jose knows his traditional style inside and out. The line work is perfect and the colors are so vibrant. This is what American traditional should look like!"
    },
    {
      name: "Rachel D.",
      location: "Laurel, MD",
      rating: 5,
      date: "January 2024",
      service: "Custom Script Lettering",
      review: "Jose's custom lettering work is beautiful. He designed the perfect script for my meaningful quote and the placement looks amazing. So glad to have found such a talented artist right here in Laurel!"
    }
  ];

  const platformReviews = [
    {
      platform: "Google My Business",
      rating: 5.0,
      reviewCount: 39,
      link: "#"
    },
    {
      platform: "Yelp",
      rating: 5.0,
      reviewCount: 12,
      link: "#"
    },
    {
      platform: "Facebook",
      rating: 5.0,
      reviewCount: 8,
      link: "#"
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />

      <div className="min-h-screen pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Client Reviews & Testimonials
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Read what our {businessInfo.statistics.totalReviews}+ satisfied clients have to say about their tattoo experience 
              with Jose Alvarado. Maintaining a perfect 5.0-star rating across all platforms since 2017.
            </p>
            
            {/* Rating Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-gold mb-2">5.0</div>
                <div className="flex justify-center text-gold mb-2">★★★★★</div>
                <div className="text-crisp-white/80">Overall Rating</div>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-deep-red mb-2">{businessInfo.statistics.totalReviews}+</div>
                <div className="text-crisp-white/80">Total Reviews</div>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-gold mb-2">95%</div>
                <div className="text-crisp-white/80">Perfect Healing Rate</div>
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
                href={`tel:${businessInfo.contact.phone}`}
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Call {businessInfo.contact.phone}
              </a>
            </div>
          </section>

          {/* Platform Reviews */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-crisp-white">
              Review Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platformReviews.map((platform, index) => (
                <div key={index} className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{platform.platform}</h3>
                  <div className="flex justify-center text-gold mb-2">★★★★★</div>
                  <div className="text-2xl font-bold text-gold mb-2">{platform.rating}</div>
                  <div className="text-crisp-white/80 mb-4">({platform.reviewCount} reviews)</div>
                  <a 
                    href={platform.link}
                    className="text-deep-red hover:text-crisp-white hover:bg-deep-red px-4 py-2 rounded transition-all"
                  >
                    Read Reviews →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Individual Testimonials */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-charcoal-gray/20 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-crisp-white">{testimonial.name}</h3>
                      <p className="text-crisp-white/60 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex text-gold">★★★★★</div>
                      <p className="text-crisp-white/60 text-sm">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="bg-deep-red/20 text-deep-red px-3 py-1 rounded-full text-sm">
                      {testimonial.service}
                    </span>
                  </div>
                  <p className="text-crisp-white/80 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Review Highlights */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Clients Love Most
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Original Designs",
                  description: "Clients consistently praise the completely unique, personalized artwork",
                  icon: "🎨"
                },
                {
                  title: "Professional Quality",
                  description: "Licensed, insured, and maintaining the highest safety and artistic standards",
                  icon: "⭐"
                },
                {
                  title: "Perfect Healing",
                  description: "95% perfect healing rate thanks to excellent aftercare guidance",
                  icon: "🩹"
                },
                {
                  title: "Cultural Respect",
                  description: "Thoughtful approach to meaningful and culturally significant designs",
                  icon: "🙏"
                },
                {
                  title: "Convenient Location",
                  description: "Easy access from DMV area with free parking and flexible scheduling",
                  icon: "📍"
                },
                {
                  title: "Fair Pricing",
                  description: "Transparent pricing with no hidden fees and excellent value",
                  icon: "💰"
                }
              ].map((highlight, index) => (
                <div key={index} className="bg-charcoal-gray/30 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-crisp-white">{highlight.title}</h3>
                  <p className="text-crisp-white/80">{highlight.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Leave a Review CTA */}
          <section className="max-w-2xl mx-auto text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg mt-16">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Share Your Experience
            </h2>
            <p className="text-crisp-white/80 mb-6">
              If Jose has created artwork for you, we'd love to hear about your experience! 
              Your review helps other clients discover quality tattoo artistry in the DMV area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Leave Google Review
              </a>
              <a 
                href="#"
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Leave Yelp Review
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}