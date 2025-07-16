interface LocationSchemaProps {
  name: string
  state: string
  zipCode: string
  description: string
  landmarks: string[]
  serviceArea: string
  specialties: string[]
}

interface LocationServiceSchemaProps {
  serviceName: string
  locationName: string
  state: string
  zipCode: string
  description: string
  serviceDescription: string
  landmarks: string[]
  serviceArea: string
  problemsSolved: string[]
  targetAudience: string
}

export function generateLocationSchema(location: LocationSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.suenotattoo.com/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}#business`,
    "name": "Sueño Tattoo",
    "alternateName": `Sueño Tattoo - ${location.name}`,
    "description": location.description,
    "url": `https://www.suenotattoo.com/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+12407583226",
    "email": "jpared19@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Laurel, MD (serving " + location.name + ")",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$100-$800",
    "paymentAccepted": "Cash, Credit Card, Apple Pay",
    "currenciesAccepted": "USD",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.0993,
        "longitude": -76.8483
      },
      "geoRadius": "25000"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": location.name,
        "addressRegion": location.state
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Tattoo Services in ${location.name}`,
      "itemListElement": location.specialties.map((specialty, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": specialty,
          "description": `Professional ${specialty.toLowerCase()} services in ${location.name}, ${location.state}`,
          "provider": {
            "@type": "Person",
            "name": "Jose",
            "jobTitle": "Professional Tattoo Artist"
          }
        }
      }))
    },
    "founder": {
      "@type": "Person",
      "name": "Jose",
      "jobTitle": "Professional Tattoo Artist"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "59",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Local Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": `Excellent tattoo service in ${location.name}. Professional, clean, and high-quality work.`
      }
    ],
    "sameAs": [
      "https://www.facebook.com/suenotattoo",
      "https://www.instagram.com/suenotattoo"
    ]
  }
}

export function generateServiceAreaSchema(areas: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Tattoo Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sueño Tattoo",
      "url": "https://www.suenotattoo.com"
    },
    "areaServed": areas.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "serviceType": "Tattoo Services",
    "description": "Professional tattoo services including custom designs, traditional tattoos, cover-ups, and more."
  }
}

export function generateLocationServiceSchema(props: LocationServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${props.serviceName} in ${props.locationName}, ${props.state}`,
    "description": props.serviceDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sueño Tattoo",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Laurel",
        "addressRegion": "MD",
        "postalCode": "20723",
        "addressCountry": "US"
      },
      "telephone": "+12407583226"
    },
    "serviceType": props.serviceName,
    "areaServed": {
      "@type": "Place",
      "name": props.serviceArea
    },
    "audience": {
      "@type": "Audience",
      "audienceType": props.targetAudience
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${props.serviceName} Solutions`,
      "itemListElement": props.problemsSolved.map((problem, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": `Solution for ${problem}`,
          "description": `Professional ${props.serviceName.toLowerCase()} addressing ${problem.toLowerCase()}`
        }
      }))
    },
    "url": `https://www.suenotattoo.com/locations/${props.locationName.toLowerCase().replace(/\s+/g, '-')}/${props.serviceName.toLowerCase().replace(/\s+/g, '-')}`
  }
}

export function generateLocalFAQSchema(location: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Do you serve ${location}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we proudly serve ${location} and surrounding areas. Our studio is conveniently located in Laurel, MD, just minutes away from ${location}.`
        }
      },
      {
        "@type": "Question",
        "name": "What tattoo services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer custom tattoo designs, traditional American tattoos, cover-ups, realistic portraits, fine line work, and more. All services are performed by licensed professional artist Jose."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a free consultation by calling (240) 758-3226 or using our online booking system. We offer flexible scheduling to accommodate your needs."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your studio different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our studio prioritizes safety, cleanliness, and artistic excellence. With 8+ years of experience, we maintain the highest standards of professionalism and customer care."
        }
      }
    ]
  }
}