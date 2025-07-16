interface FAQ {
  question: string
  answer: string
  category: string
}

export function generateVoiceSearchSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Voice Search Optimized Tattoo FAQ | Sueño Tattoo",
    "description": "Voice search optimized frequently asked questions about tattoo services in Laurel MD, College Park, Beltsville, and DMV area",
    "url": "https://www.suenotattoo.com/faq",
    "about": {
      "@type": "LocalBusiness",
      "name": "Sueño Tattoo",
      "description": "Professional tattoo artist specializing in custom designs, voice search optimized for local clients",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Laurel",
        "addressRegion": "MD",
        "postalCode": "20723",
        "addressCountry": "US"
      },
      "telephone": "+12407583226",
      "email": "jpared19@outlook.com",
      "url": "https://www.suenotattoo.com",
      "serviceArea": [
        "Laurel, MD",
        "College Park, MD", 
        "Beltsville, MD",
        "Greenbelt, MD",
        "Prince George's County, MD",
        "DMV Area"
      ]
    },
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export function generateConversationalKeywordSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Voice Search Tattoo Questions",
    "description": "Conversational keyword optimized page for voice search queries about tattoos",
    "url": "https://www.suenotattoo.com/faq",
    "about": [
      {
        "@type": "Thing",
        "name": "Where can I get a custom tattoo designed near me",
        "description": "Custom tattoo design services in Laurel MD and DMV area"
      },
      {
        "@type": "Thing", 
        "name": "Who is the best tattoo artist in Prince Georges County",
        "description": "Licensed professional tattoo artist Jose with 8+ years experience"
      },
      {
        "@type": "Thing",
        "name": "Tattoo shops open today near Laurel MD",
        "description": "Same-day tattoo consultations and appointments available"
      },
      {
        "@type": "Thing",
        "name": "Birth flower tattoos trending",
        "description": "Popular botanical birth flower tattoo designs by month"
      },
      {
        "@type": "Thing",
        "name": "Zodiac constellation tattoos",
        "description": "Astrological constellation and zodiac sign tattoo art"
      }
    ]
  }
}

export function generateLocalVoiceSearchSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sueño Tattoo",
    "alternateName": [
      "Tattoo artist near Laurel Lakes",
      "Route 1 corridor tattoo shop", 
      "I-95 tattoo artist Maryland",
      "Prince Georges County licensed tattoo artist"
    ],
    "description": "Professional tattoo artist serving Laurel MD, College Park, Beltsville, and DMV area with voice search optimized services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Laurel, MD",
      "addressLocality": "Laurel", 
      "addressRegion": "MD",
      "postalCode": "20723",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.0993,
      "longitude": -76.8483
    },
    "telephone": "+12407583226",
    "email": "jpared19@outlook.com",
    "url": "https://www.suenotattoo.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "18:00"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates", 
        "latitude": 39.0993,
        "longitude": -76.8483
      },
      "geoRadius": "25000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Voice Search Optimized Tattoo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom tattoo design near me",
            "description": "Where can I get a custom tattoo designed - professional custom tattoo services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Best tattoo artist Prince Georges County",
            "description": "Licensed professional tattoo artist with 8+ years experience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Birth flower tattoo designs",
            "description": "Trending botanical birth flower tattoos for each month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zodiac constellation tattoos", 
            "description": "Astrological zodiac and constellation tattoo artwork"
          }
        }
      ]
    }
  }
}