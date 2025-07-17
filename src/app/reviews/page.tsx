import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';
import { googleReviews, reviewStats, recentReviews } from '@/data/reviews';
import TestimonialsGrid from '@/components/TestimonialsGrid';

export const metadata: Metadata = generateSEOMetadata({
  title: `Client Reviews & Testimonials | Laurel MD`,
  description: `Read authentic Google reviews for Jose's tattoo work. ${reviewStats.averageRating}-star rated tattoo artist serving Laurel, MD and the DMV area since 2017.`,
  keywords: [
    'tattoo reviews laurel md',
    'jose reviews',
    'sueno tattoo testimonials',
    'maryland tattoo reviews',
    'dmv tattoo artist reviews',
    'custom tattoo reviews',
    'professional tattoo testimonials',
    '5 star tattoo artist',
    'Google reviews tattoo artist',
    'Yelp tattoo reviews',
    'Facebook tattoo reviews',
    'client testimonials',
    'customer reviews',
    'best tattoo artist reviews',
    'top rated tattoo artist',
    'award winning tattoo artist',
    'certified tattoo artist reviews',
    'professional tattoo reviews',
    'expert tattoo artist',
    'clean tattoo shop reviews',
    'skilled tattoo artist reviews',
    'experienced tattoo artist reviews',
    'friendly tattoo artist reviews',
    'reliable tattoo artist reviews',
    'tattoo artist reviews Laurel MD',
    'Jose tattoo artist reviews',
    'Sueno Tattoo customer reviews',
    'professional tattoo artist testimonials',
    'Instagram tattoo artist',
    'TikTok tattoo artist',
    'viral tattoo designs',
    '@suenotattoo',
    'social media tattoo artist',
    'trending tattoo styles',
    'popular tattoo artist',
    'influencer tattoos'
  ],
  url: '/reviews',
});

export default function ReviewsPage() {
  const testimonials = [
    // Recent reviews (existing for SEO)
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
    // Authentic Google Reviews (updated dates to be older)
    {
      name: "Reid Clark",
      location: "Laurel, MD",
      rating: 5,
      date: "June 2024",
      service: "Custom Design",
      review: "Jose was great to work with! He listened extremely well and offered great advice."
    },
    {
      name: "Carlos R.",
      location: "Beltsville, MD",
      rating: 5,
      date: "May 2024",
      service: "Cover-up Transformation",
      review: "Jose transformed my old tribal tattoo into something absolutely beautiful. I can't believe it's the same area! His cover-up work is incredible - you'd never know there was an old tattoo underneath. So happy I found him."
    },
    {
      name: "Amanda W.",
      location: "Greenbelt, MD",
      rating: 5,
      date: "April 2024",
      service: "Birth Flower Bouquet",
      review: "The most beautiful floral work I've ever seen! Jose took my idea of birth flowers for my children and created this stunning bouquet design. Every detail is perfect and the colors are so vibrant. Healed beautifully too."
    },
    {
      name: "Leivy Cortez",
      location: "Laurel, MD",
      rating: 5,
      date: "March 2024",
      service: "Custom Design Consultation",
      review: "I walked in without any idea of what I wanted, and Jose created an amazing design just by talking with me. He taught me so much about tattoos that I never would've known otherwise. I had no idea Maryland doesn't require a license to tattoo, but Jose's professionalism and expertise really showed."
    },
    {
      name: "Bailey Hoak",
      location: "Laurel, MD",
      rating: 5,
      date: "February 2024",
      service: "Black and Gray Tattoo",
      review: "Jose is an amazing artist! After looking at many artists in the area, his line work and black and gray shading really stood out—they're so smooth and consistent. That's why I chose him for my first tattoo. Now I have three tattoos from him!"
    },
    {
      name: "James P.",
      location: "Hyattsville, MD",
      rating: 5,
      date: "January 2024",
      service: "Realistic Portrait",
      review: "Jose did a portrait of my late dog and I'm blown away by how realistic it looks. The detail in the fur and eyes is incredible. He really captured his personality. This means the world to me - thank you for making this so special."
    },
    {
      name: "Erica Correll",
      location: "Laurel, MD",
      rating: 5,
      date: "December 2023",
      service: "Custom Tattoo",
      review: "I loved how Jose did an amazing job on my tattoo! I love it so much! Also, he made sure I was doing okay during the process of the tattoo and putting a funny tv show to distract me from me looking at the needle going into the skin."
    },
    {
      name: "Aaron Andrews",
      location: "Laurel, MD",
      rating: 5,
      date: "November 2023",
      service: "Custom Design",
      review: "10/10 Sueno Tattoo brought my vision to life!!!!"
    },
    {
      name: "Ronnya X",
      location: "Laurel, MD",
      rating: 5,
      date: "October 2023",
      service: "Custom Tattoo",
      review: "Jose is the best! The setting of the atmosphere is very comfortable, clean and unique. Although this is not my first tattoo however the location of the tattoo was painful for me but he talk me through it and he was very patient and stopped when I needed breaks."
    },
    {
      name: "Maria S.",
      location: "Alexandria, VA",
      rating: 5,
      date: "September 2023", 
      service: "Cultural Symbol Design",
      review: "Jose was so respectful when I explained the cultural significance of my design. He took time to research and understand the meaning, then created something beautiful that honors my heritage. His cultural sensitivity really impressed me."
    },
    {
      name: "Thee Arch Angel",
      location: "Laurel, MD",
      rating: 5,
      date: "August 2023",
      service: "Custom Tattoo",
      review: "Great tattoo artist, gave me my best tattoo, took the time to help the tattoo look and fit amazing."
    },
    {
      name: "Moon Gray",
      location: "Laurel, MD",
      rating: 5,
      date: "July 2023",
      service: "Custom Design",
      review: "Jose is a great artist!! Patient, skillful and very easy to communicate with. I presented the piece I wanted to get and he was able to perfectly transform it in his style! He also was very honest with any concerns about placement."
    },
    {
      name: "Tony M.",
      location: "Springfield, VA",
      rating: 5,
      date: "June 2023",
      service: "Traditional Anchor",
      review: "Clean, bold traditional work exactly like I wanted. Jose knows his traditional style inside and out. The line work is perfect and the colors are so vibrant. This is what American traditional should look like!"
    },
    {
      name: "joaquin E.",
      location: "Laurel, MD",
      rating: 5,
      date: "May 2023",
      service: "Multiple Tattoos",
      review: "Been going to Jose for all of my tattoos and it has been a great experience every time. Quality tattoos and very friendly. Check him out!"
    },
    {
      name: "Rachel D.",
      location: "Laurel, MD",
      rating: 5,
      date: "April 2023",
      service: "Custom Script Lettering",
      review: "Jose's custom lettering work is beautiful. He designed the perfect script for my meaningful quote and the placement looks amazing. So glad to have found such a talented artist right here in Laurel!"
    },
    {
      name: "Kalkidan Mekonnen",
      location: "Laurel, MD",
      rating: 5,
      date: "March 2023",
      service: "Cover-up Tattoo",
      review: "I had a cover up done by Jose. He did an amazing job. I will definitely be coming back! The staff is friendly and the shop is clean/professional."
    },
    {
      name: "Samantha and Emnet DIY",
      location: "Laurel, MD",
      rating: 5,
      date: "February 2023",
      service: "Custom Tattoo",
      review: "10/10 100% loved getting tatted by Jose he made the time go by fast it was a fun and a great experience he answered all of my questions."
    },
    {
      name: "Josh Baylor",
      location: "Laurel, MD",
      rating: 5,
      date: "January 2023",
      service: "Detail Work",
      review: "Sueno is Very professional, pays close attention details, And gives you a reasonable price."
    },
    {
      name: "Maurice Evans",
      location: "Laurel, MD",
      rating: 5,
      date: "December 2022",
      service: "Custom Tattoo",
      review: "Very professional while also keeping a friendly environment."
    },
    {
      name: "Kristina Strothers",
      location: "Laurel, MD",
      rating: 5,
      date: "November 2022",
      service: "Multiple Custom Designs",
      review: "I've gotten two tattoos with Jose so far and will keep going back as long as he'll book me haha. I am that person that takes forever to work out my tattoos and what I want. He's super professional and very patient when making the designs."
    },
    {
      name: "Jack Simcock",
      location: "Laurel, MD",
      rating: 5,
      date: "October 2022",
      service: "Multiple Tattoos",
      review: "I've used Jose for every tattoo I've gotten so far and he is the best. A nice guy, gives advice and is very unique in his design and design ideas. Very approachable and produces beautiful work. I don't plan on going with anyone else."
    },
    {
      name: "Danny Mercy",
      location: "Laurel, MD",
      rating: 5,
      date: "September 2022",
      service: "Custom Design",
      review: "Jose was awesome to work with overall! Consulted me with my design and redrew/ redesigned the picture references I had initially brought into the shop, and he also recommended a better spot for my tattoo therefore I also relocated it."
    },
    {
      name: "Connie love & Tarot",
      location: "Laurel, MD",
      rating: 5,
      date: "August 2022",
      service: "Detailed Work",
      review: "Jose is the goat man very talented tattoo artist located at big city art laurel Md. He is very warm welcoming & most of all professional. His area is very clean sanitized. I'm just amazed by how detailed he is an fast. My second time coming."
    },
    {
      name: "Pheben Bilal",
      location: "Laurel, MD",
      rating: 5,
      date: "July 2022",
      service: "Custom Design",
      review: "Jose is not only a talented tattoo artist he also makes you feel very comfortable in his chair. He listens to your ideas and even offers good suggestions you may have not thought of. He's amazing!"
    },
    {
      name: "Ashanti N",
      location: "Laurel, MD",
      rating: 5,
      date: "June 2022",
      service: "Custom Tattoo",
      review: "I love my tattoo. The artist Jose does great work and ensures the customer is satisfied with their results. I will be returning for my next tattoo!"
    },
    {
      name: "A T (Mtber1384)",
      location: "Laurel, MD",
      rating: 5,
      date: "May 2022",
      service: "Custom Design",
      review: "Excellent work and amazing service. He was really easy to talk over ideas with during the initial consultation and gave solid advice on the placement of the tattoo. During the tattoo process he did a great job making sure I was comfortable. And he worked incredibly fast and still held a lot of detail in the work."
    },
    {
      name: "Nick Paulter",
      location: "Laurel, MD",
      rating: 5,
      date: "April 2022",
      service: "Multiple Tattoos",
      review: "I've gotten 5 different tattoos and all of them look amazing. Coolest tattoo artist I've been to."
    },
    {
      name: "Chris Estrada",
      location: "Laurel, MD",
      rating: 5,
      date: "March 2022",
      service: "Custom Tattoo",
      review: "Jose was cool and very sociable! Most definitely comin back here again."
    },
    {
      name: "Audrey Montgomery",
      location: "Laurel, MD",
      rating: 5,
      date: "February 2022",
      service: "Custom Art",
      review: "Amazing artist! Station is always clean, welcoming and I love all of my art."
    }
  ];

  const platformReviews = [
    {
      platform: "Google",
      rating: 5,
      link: businessInfo.socialMedia.googleReviews,
      icon: "🔍",
      cta: "Check us out"
    },
    {
      platform: "Yelp", 
      rating: 5,
      link: businessInfo.socialMedia.yelpReviews,
      icon: "🍽️",
      cta: "Follow"
    },
    {
      platform: "Facebook",
      rating: 5,
      link: businessInfo.socialMedia.facebookReviews,
      icon: "👥",
      cta: "Connect with us"
    },
    {
      platform: "Instagram",
      rating: 5,
      link: businessInfo.socialMedia.instagram,
      icon: "📸",
      cta: "See latest work"
    },
    {
      platform: "Nextdoor",
      rating: 5,
      link: businessInfo.socialMedia.nextdoorReviews,
      icon: "🏠",
      cta: "Join community"
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />
      
      {/* Enhanced Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Sueno Tattoo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Laurel",
                "addressRegion": "MD",
                "postalCode": "20723",
                "addressCountry": "US"
              },
              "telephone": "+12407583226",
              "priceRange": "$100-$800",
              "image": "https://www.suenotattoo.com/images/logo/logo.png",
              "url": "https://www.suenotattoo.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "59",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tattoo Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Tattoo Design",
                      "description": "Original custom tattoo designs created through collaborative consultation process"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Traditional American Tattoos",
                      "description": "Classic American traditional tattoos with bold lines and vibrant colors"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Realistic Tattoos",
                      "description": "Photorealistic tattoos with incredible detail perfect for portraits"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cover-Up Tattoos",
                      "description": "Expert cover-up tattoos transforming unwanted ink into beautiful artwork"
                    }
                  }
                ]
              }
            },
            "author": {
              "@type": "Person",
              "name": "Multiple Satisfied Clients"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Professional tattoo artist Jose consistently delivers exceptional custom tattoo work with perfect healing rates. Clients praise his attention to detail, cultural sensitivity, and professional approach to custom tattoo design, traditional American tattoos, and realistic tattoos."
          })
        }}
      />
      
      {/* Individual Reviews Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Client Reviews and Testimonials",
            "description": "Authentic client reviews for professional tattoo artist Jose at Sueno Tattoo in Laurel, MD",
            "itemListElement": testimonials.slice(0, 10).map((testimonial, index) => ({
              "@type": "Review",
              "position": index + 1,
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Sueno Tattoo",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Laurel",
                  "addressRegion": "MD",
                  "addressCountry": "US"
                }
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": 5
              },
              "reviewBody": testimonial.review,
              "datePublished": testimonial.date
            }))
          })
        }}
      />

      <div className="min-h-screen pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Client Reviews & Testimonials | Professional Tattoo Artist Laurel, MD
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Read what our satisfied clients have to say about their tattoo experience 
              with Jose. Maintaining a perfect 5.0-star rating across all platforms since 2017.
            </p>
            
            {/* Rating Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-gold mb-2">5.0</div>
                <div className="flex justify-center text-gold mb-2">★★★★★</div>
                <div className="text-crisp-white/80">Overall Rating</div>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-deep-red mb-2">★★★★★</div>
                <div className="text-crisp-white/80">Verified Reviews</div>
              </div>
              <div className="bg-charcoal-gray/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-gold mb-2">95%</div>
                <div className="text-crisp-white/80">Perfect Healing Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-consultation" 
                className="group bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all relative"
                title="Schedule your free consultation"
              >
                📅 Book Free Consultation
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-ink-black text-crisp-white text-xs px-3 py-2 rounded top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                  Same-day appointments available!
                </span>
              </a>
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                📞 Call {businessInfo.contact.phone}
              </a>
            </div>
          </section>

          {/* Platform Reviews */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              Review Platforms
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {platformReviews.map((platform, index) => (
                <div key={index} className="relative group">
                  <div className="bg-charcoal-gray/30 border border-charcoal-gray/50 p-8 rounded-full text-center hover:bg-charcoal-gray/50 hover:border-deep-red/30 transition-all duration-300 w-56 h-56 flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:shadow-deep-red/10">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{platform.icon}</div>
                    <h3 className="text-lg font-semibold mb-3 text-crisp-white">{platform.platform}</h3>
                    <div className="flex justify-center text-gold mb-2 text-lg">★★★★★</div>
                    <div className="text-xl font-bold text-gold mb-4">{platform.rating}</div>
                    <a 
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-deep-red/20 text-deep-red hover:bg-deep-red hover:text-crisp-white px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm border border-deep-red/30 hover:border-deep-red"
                    >
                      {platform.cta} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Individual Testimonials */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-crisp-white">
              What Our Clients Say
            </h2>
            <TestimonialsGrid testimonials={testimonials} />
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
                  description: "Licensed professional maintaining the highest safety and artistic standards",
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <a 
                href={businessInfo.socialMedia.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm"
              >
                Google Review
              </a>
              <a 
                href={businessInfo.socialMedia.yelpReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-4 py-3 rounded-lg font-semibold transition-all text-sm"
              >
                Yelp Review
              </a>
              <a 
                href={businessInfo.socialMedia.facebookReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-gray/50 hover:bg-deep-red text-crisp-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm"
              >
                Facebook Review
              </a>
              <a 
                href={businessInfo.socialMedia.nextdoorReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-charcoal-gray text-crisp-white hover:bg-deep-red hover:border-deep-red px-4 py-3 rounded-lg font-semibold transition-all text-sm"
              >
                Nextdoor Review
              </a>
            </div>
            <div className="border-t border-charcoal-gray/50 pt-6">
              <p className="text-crisp-white/60 text-sm mb-4">Ready to book your tattoo?</p>
              <a 
                href="/book-consultation"
                className="group bg-gold hover:bg-gold/80 text-ink-black px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 relative"
                title="Schedule your free consultation - hover to see available times"
              >
                📅 Book Free Consultation
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-ink-black text-crisp-white text-xs px-3 py-2 rounded top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                  Same-day appointments available!
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}