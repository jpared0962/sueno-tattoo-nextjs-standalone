// Comprehensive structured data schemas for Sueno Tattoo
import { portfolioData } from './portfolioData.js';
import { 
  BUSINESS_CONSTANTS, 
  ARTIST_CONSTANTS, 
  generateServiceCatalog,
  validatePortfolioData,
  getPortfolioCount,
  findTattooById,
  calculatePriceRange,
  safeSchemaGeneration,
  generateBreadcrumbs
} from './schemaConstants.js';

// Generate ImageObject schemas for each portfolio piece with validation
export const generatePortfolioImageSchemas = () => {
  return safeSchemaGeneration(() => {
    if (!validatePortfolioData(portfolioData)) {
      return [];
    }

    return portfolioData.map((tattoo) => ({
      "@type": "ImageObject",
      "name": tattoo.title,
      "description": `${tattoo.description} Professional ${tattoo.style} tattoo work by ${ARTIST_CONSTANTS.name} at ${BUSINESS_CONSTANTS.name} in ${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion}. ${tattoo.size?.charAt(0).toUpperCase() + tattoo.size?.slice(1) || 'Custom'} size tattoo${tattoo.duration ? ` completed in ${tattoo.duration}` : ''}.`,
      "alternateName": tattoo.alt || `${tattoo.title} tattoo by ${ARTIST_CONSTANTS.name}`,
      "url": `${BUSINESS_CONSTANTS.url}/gallery#${tattoo.id}`,
      "contentUrl": `https://res.cloudinary.com/dwgkw4zfd/image/upload/w_800,h_600,c_fill,q_auto:good/${tattoo.image.replace('public/Tattoo-Images/', '')}.jpg`,
      "thumbnailUrl": `https://res.cloudinary.com/dwgkw4zfd/image/upload/w_300,h_300,c_fill,q_auto:good/${tattoo.image.replace('public/Tattoo-Images/', '')}.jpg`,
      "creator": {
        "@type": "Person",
        "name": ARTIST_CONSTANTS.name,
        "jobTitle": ARTIST_CONSTANTS.jobTitle
      },
      "copyrightHolder": {
        "@type": "Organization",
        "name": BUSINESS_CONSTANTS.name
      },
      "keywords": tattoo.tags?.join(', ') || tattoo.style,
      "genre": tattoo.style,
      "artMedium": "Tattoo",
      "artworkSurface": tattoo.bodyPart || "Skin",
      "technique": tattoo.technique || "Traditional tattooing",
      "artForm": "Body Art",
      "priceRange": calculatePriceRange(tattoo.size),
      "dateCreated": tattoo.date,
      "datePublished": tattoo.date,
      "contentLocation": {
        "@type": "Place",
        "name": BUSINESS_CONSTANTS.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": BUSINESS_CONSTANTS.address.addressLocality,
          "addressRegion": BUSINESS_CONSTANTS.address.addressRegion,
          "addressCountry": BUSINESS_CONSTANTS.address.addressCountry
        }
      },
      "width": "800px",
      "height": "600px",
      "encodingFormat": "image/jpeg",
      "representativeOfPage": tattoo.featured || false,
      "isFamilyFriendly": true,
      "isAccessibleForFree": true
    }));
  }, []);
};

// Generate individual ImageObject schema for a specific tattoo with validation
export const generateIndividualImageSchema = (tattooId) => {
  return safeSchemaGeneration(() => {
    const tattoo = findTattooById(portfolioData, tattooId);
    if (!tattoo) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "name": tattoo.title,
      "description": `${tattoo.description} Professional ${tattoo.style} tattoo work by ${ARTIST_CONSTANTS.name} at ${BUSINESS_CONSTANTS.name} in ${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion}. ${tattoo.size?.charAt(0).toUpperCase() + tattoo.size?.slice(1) || 'Custom'} size tattoo${tattoo.duration ? ` completed in ${tattoo.duration}` : ''}.`,
      "alternateName": tattoo.alt || `${tattoo.title} tattoo by ${ARTIST_CONSTANTS.name}`,
      "url": `${BUSINESS_CONSTANTS.url}/gallery#${tattoo.id}`,
      "contentUrl": `https://res.cloudinary.com/dwgkw4zfd/image/upload/w_1200,h_900,c_fill,q_auto:good/${tattoo.image.replace('public/Tattoo-Images/', '')}.jpg`,
      "thumbnailUrl": `https://res.cloudinary.com/dwgkw4zfd/image/upload/w_300,h_300,c_fill,q_auto:good/${tattoo.image.replace('public/Tattoo-Images/', '')}.jpg`,
      "creator": {
        "@type": "Person",
        "name": ARTIST_CONSTANTS.name,
        "jobTitle": ARTIST_CONSTANTS.jobTitle,
        "worksFor": {
          "@type": "Organization",
          "name": BUSINESS_CONSTANTS.name,
          "url": BUSINESS_CONSTANTS.url
        }
      },
      "copyrightHolder": {
        "@type": "Organization",
        "name": BUSINESS_CONSTANTS.name
      },
      "keywords": tattoo.tags?.join(', ') || tattoo.style,
      "genre": tattoo.style,
      "artMedium": "Tattoo",
      "artworkSurface": tattoo.bodyPart || "Skin",
      "technique": tattoo.technique || "Traditional tattooing",
      "artForm": "Body Art",
      "priceRange": calculatePriceRange(tattoo.size),
      "dateCreated": tattoo.date,
      "datePublished": tattoo.date,
      "contentLocation": {
        "@type": "Place",
        "name": BUSINESS_CONSTANTS.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": BUSINESS_CONSTANTS.address.addressLocality,
          "addressRegion": BUSINESS_CONSTANTS.address.addressRegion,
          "addressCountry": BUSINESS_CONSTANTS.address.addressCountry
        }
      },
      "width": "1200px",
      "height": "900px",
      "encodingFormat": "image/jpeg",
      "representativeOfPage": tattoo.featured || false,
      "isFamilyFriendly": true,
      "isAccessibleForFree": true,
      "potentialAction": {
        "@type": "ViewAction",
        "target": `${BUSINESS_CONSTANTS.url}/gallery#${tattoo.id}`,
        "name": "View Tattoo Details"
      },
      "isPartOf": {
        "@type": "ImageGallery",
        "name": `${BUSINESS_CONSTANTS.name} Portfolio Gallery`,
        "url": `${BUSINESS_CONSTANTS.url}/gallery`
      }
    };
  }, null);
};

// CRITICAL: LocalBusiness schema for Google Maps and local search - using centralized constants
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BUSINESS_CONSTANTS.url}/#localbusiness`,
  "name": BUSINESS_CONSTANTS.name,
  "alternateName": BUSINESS_CONSTANTS.alternateName,
  "description": `Professional tattoo artist in ${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion}. Custom designs, ${ARTIST_CONSTANTS.experience} years experience. Licensed professional.`,
  "url": BUSINESS_CONSTANTS.url,
  "telephone": BUSINESS_CONSTANTS.telephone,
  "email": BUSINESS_CONSTANTS.email,
  "image": [BUSINESS_CONSTANTS.logo, `${BUSINESS_CONSTANTS.url}/og-image.svg`],
  "logo": BUSINESS_CONSTANTS.logo,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_CONSTANTS.address.streetAddress,
    "addressLocality": BUSINESS_CONSTANTS.address.addressLocality,
    "addressRegion": BUSINESS_CONSTANTS.address.addressRegion,
    "addressCountry": BUSINESS_CONSTANTS.address.addressCountry,
    "postalCode": BUSINESS_CONSTANTS.address.postalCode
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": parseFloat(BUSINESS_CONSTANTS.geo.latitude),
    "longitude": parseFloat(BUSINESS_CONSTANTS.geo.longitude)
  },
  "hasMap": `https://maps.google.com/?q=${BUSINESS_CONSTANTS.geo.latitude},${BUSINESS_CONSTANTS.geo.longitude}`,
  "openingHours": BUSINESS_CONSTANTS.hours.openDays.map(day => 
    `${day.substring(0, 2)} ${BUSINESS_CONSTANTS.hours.opens}-${BUSINESS_CONSTANTS.hours.closes}`
  ),
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": BUSINESS_CONSTANTS.hours.openDays,
      "opens": BUSINESS_CONSTANTS.hours.opens,
      "closes": BUSINESS_CONSTANTS.hours.closes
    }
  ],
  "priceRange": BUSINESS_CONSTANTS.pricing.priceRange,
  "paymentAccepted": BUSINESS_CONSTANTS.pricing.paymentMethods,
  "currenciesAccepted": BUSINESS_CONSTANTS.pricing.currency,
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": parseFloat(BUSINESS_CONSTANTS.geo.latitude),
      "longitude": parseFloat(BUSINESS_CONSTANTS.geo.longitude)
    },
    "geoRadius": "25 miles"
  },
  "serviceArea": BUSINESS_CONSTANTS.serviceAreas.map(area => `${area.name}, ${area.region}`),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": BUSINESS_CONSTANTS.aggregateRating.ratingValue,
    "reviewCount": BUSINESS_CONSTANTS.aggregateRating.reviewCount,
    "bestRating": BUSINESS_CONSTANTS.aggregateRating.bestRating
  },
  "review": [
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Leivy Cortez"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5"},
      "reviewBody": `${ARTIST_CONSTANTS.name} created an amazing design just by talking with me. Professional and comfortable experience.`
    }
  ],
  "sameAs": [BUSINESS_CONSTANTS.socialMedia.instagram],
  "isAccessibleForFree": false,
  "smokingPolicy": "https://schema.org/NonSmokingPolicySet"
};

export const baseBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TattooParlor", "LocalBusiness", "HealthAndBeautyBusiness"],
  "@id": `${BUSINESS_CONSTANTS.url}/#business`,
  "name": BUSINESS_CONSTANTS.name,
  "alternateName": [BUSINESS_CONSTANTS.alternateName, `${BUSINESS_CONSTANTS.name} Studio`],
  "description": `Independent professional tattoo artist specializing in custom designs, traditional tattoos, realistic artwork, and cover-ups in ${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion}. Licensed artist with ${ARTIST_CONSTANTS.experience} years experience serving ${BUSINESS_CONSTANTS.serviceAreas.find(area => area.type === 'AdministrativeArea')?.name} and DMV area.`,
  "url": BUSINESS_CONSTANTS.url,
  "telephone": BUSINESS_CONSTANTS.telephone,
  "email": BUSINESS_CONSTANTS.email,
  "image": BUSINESS_CONSTANTS.logo,
  "logo": BUSINESS_CONSTANTS.logo,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_CONSTANTS.address.streetAddress,
    "addressLocality": BUSINESS_CONSTANTS.address.addressLocality,
    "addressRegion": BUSINESS_CONSTANTS.address.addressRegion,
    "addressCountry": BUSINESS_CONSTANTS.address.addressCountry,
    "postalCode": BUSINESS_CONSTANTS.address.postalCode
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": BUSINESS_CONSTANTS.geo.latitude,
    "longitude": BUSINESS_CONSTANTS.geo.longitude
  },
  "openingHours": BUSINESS_CONSTANTS.hours.openDays.map(day => 
    `${day.substring(0, 2)} ${BUSINESS_CONSTANTS.hours.opens}-${BUSINESS_CONSTANTS.hours.closes}`
  ),
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": BUSINESS_CONSTANTS.hours.openDays,
      "opens": BUSINESS_CONSTANTS.hours.opens,
      "closes": BUSINESS_CONSTANTS.hours.closes,
      "description": "Available for consultations and appointments by independent artist. Walk-in consultations welcome during studio hours (limited availability)."
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": BUSINESS_CONSTANTS.hours.closedDays,
      "opens": "00:00",
      "closes": "00:00",
      "description": "Artist not available - Consultations by appointment only"
    }
  ],
  "priceRange": BUSINESS_CONSTANTS.pricing.priceRange,
  "paymentAccepted": BUSINESS_CONSTANTS.pricing.paymentMethods.join(", "),
  "currenciesAccepted": BUSINESS_CONSTANTS.pricing.currency,
  "areaServed": BUSINESS_CONSTANTS.serviceAreas.map(area => ({
    "@type": area.type,
    "name": area.name,
    ...(area.region && { "addressRegion": area.region })
  })),
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_CONSTANTS.geo.latitude,
      "longitude": BUSINESS_CONSTANTS.geo.longitude
    },
    "geoRadius": "25 miles"
  },
  "knowsAbout": ARTIST_CONSTANTS.specialties,
  "sameAs": [BUSINESS_CONSTANTS.socialMedia.instagram],
  "aggregateRating": {
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "TattooParlor",
      "name": BUSINESS_CONSTANTS.name,
      "@id": BUSINESS_CONSTANTS.url
    },
    "ratingValue": BUSINESS_CONSTANTS.aggregateRating.ratingValue,
    "reviewCount": BUSINESS_CONSTANTS.aggregateRating.reviewCount,
    "bestRating": BUSINESS_CONSTANTS.aggregateRating.bestRating,
    "worstRating": BUSINESS_CONSTANTS.aggregateRating.worstRating
  },
  "founder": {
    "@type": "Person",
    "name": ARTIST_CONSTANTS.name,
    "jobTitle": ARTIST_CONSTANTS.jobTitle,
    "description": `Licensed tattoo artist with ${ARTIST_CONSTANTS.experience} years experience specializing in custom artwork`
  }
};

// Comprehensive FAQ Schema for SEO boost
export const generalFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do custom tattoos cost at Sueno Tattoo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom tattoo pricing at Sueno Tattoo varies based on size, complexity, and detail level. Small tattoos start around $200-400, medium pieces $400-800, and larger custom work $800+. We provide detailed quotes during free consultations based on your specific design requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Does Sueno Tattoo offer free consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Sueno Tattoo offers completely free 30-45 minute consultations. During this time, we discuss your ideas, review portfolio examples, plan placement, provide sizing recommendations, and give you a transparent price quote. No obligation required."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Sueno Tattoo serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sueno Tattoo is located in Laurel, MD and serves the entire Prince George's County area including Beltsville, College Park, Greenbelt, Hyattsville, and the broader DMV region. We welcome clients from Washington DC, Northern Virginia, and throughout Maryland."
      }
    },
    {
      "@type": "Question",
      "name": "What tattoo styles does Jose specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jose specializes in multiple tattoo styles including traditional American, realistic portraits, custom original designs, cover-ups, spiritual/symbolic art, fine line work, botanical designs, neo-traditional, Japanese-inspired, and geometric patterns. Every piece is custom designed for each client."
      }
    },
    {
      "@type": "Question",
      "name": "How long has Jose been tattooing professionally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jose has been a licensed professional tattoo artist for over 8 years, with experience dating back to 2017. He has completed thousands of tattoos and maintains a 95% perfect healing rate through comprehensive aftercare guidance and professional protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Does Sueno Tattoo accept walk-ins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While we primarily work by appointment to ensure personalized attention, we do accept walk-in consultations during studio hours (Thursday-Sunday, 12PM-6PM). For tattoo appointments, booking ahead is recommended to secure your preferred date and time."
      }
    },
    {
      "@type": "Question",
      "name": "What safety protocols does Sueno Tattoo follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sueno Tattoo follows strict health and safety protocols including proper licensing, health department certification, sterile equipment procedures, single-use needles, medical-grade sterilization, and comprehensive sanitation practices. All work is performed in a clean, professional environment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Sueno Tattoo cover up old tattoos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jose specializes in cover-up work and transformations. During consultation, we assess your existing tattoo and create a custom design that effectively covers and transforms it into beautiful new artwork. Many successful cover-ups in our portfolio demonstrate this expertise."
      }
    }
  ]
};

export const homePageSchema = [
  localBusinessSchema,
  {
    ...baseBusinessSchema,
    "hasOfferCatalog": generateServiceCatalog()
  },
  generalFAQSchema
];

export const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": baseBusinessSchema,
  "serviceType": "Tattoo Services",
  "areaServed": {
    "@type": "Place",
    "name": `${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion} and surrounding areas`
  },
  "breadcrumb": generateBreadcrumbs('/services'),
  "hasOfferCatalog": generateServiceCatalog()
};

export const galleryPageSchema = safeSchemaGeneration(() => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": `${BUSINESS_CONSTANTS.name} Portfolio Gallery`,
  "description": `Professional tattoo portfolio showcasing original artwork, traditional tattoos, realistic portraits, and cover-ups by ${ARTIST_CONSTANTS.name} in ${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion}. Over ${getPortfolioCount(portfolioData)} completed tattoo pieces featuring diverse styles including realistic, illustrative, traditional, and bespoke designs.`,
  "creator": {
    "@type": "Person",
    "name": ARTIST_CONSTANTS.name,
    "jobTitle": ARTIST_CONSTANTS.jobTitle,
    "worksFor": baseBusinessSchema
  },
  "publisher": baseBusinessSchema,
  "url": `${BUSINESS_CONSTANTS.url}/gallery`,
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": getPortfolioCount(portfolioData),
    "itemListElement": validatePortfolioData(portfolioData) ? 
      generatePortfolioImageSchemas().map((imageSchema, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": imageSchema
      })) : []
  },
  "associatedMedia": generatePortfolioImageSchemas(),
  "keywords": `tattoo portfolio, custom tattoos, realistic tattoos, traditional tattoos, cover-up tattoos, tattoo gallery, ${ARTIST_CONSTANTS.name}, ${BUSINESS_CONSTANTS.name}, ${BUSINESS_CONSTANTS.address.addressLocality} ${BUSINESS_CONSTANTS.address.addressRegion}`,
  "genre": ["Body Art", "Tattoo Art", "Custom Artwork"],
  "audience": {
    "@type": "Audience",
    "audienceType": "People interested in professional tattoo services"
  },
  "contentRating": "General audiences",
  "isAccessibleForFree": true,
  "dateModified": new Date().toISOString().split('T')[0]
}), {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": `${BUSINESS_CONSTANTS.name} Portfolio Gallery`,
  "description": "Professional tattoo portfolio gallery",
  "url": `${BUSINESS_CONSTANTS.url}/gallery`,
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 0
  }
});

export const reviewsPageSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  ...baseBusinessSchema,
  "breadcrumb": generateBreadcrumbs('/reviews'),
  "review": [
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "TattooParlor",
        "name": "Sueno Tattoo",
        "@id": "https://www.suenotattoo.com"
      },
      "author": {
        "@type": "Person",
        "name": "Leivy Cortez"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I walked in without any idea of what I wanted, and Jose created an amazing design just by talking with me. He taught me about the process and made sure I was comfortable throughout. The final result exceeded my expectations!",
      "datePublished": "2024-08-15"
    },
    {
      "@type": "Review", 
      "itemReviewed": {
        "@type": "TattooParlor",
        "name": "Sueno Tattoo",
        "@id": "https://www.suenotattoo.com"
      },
      "author": {
        "@type": "Person",
        "name": "Bailey Hoak"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Jose is an amazing artist! After looking at many artists in the area, his line work and black and gray shading really stood out. The attention to detail is incredible and the healing process went perfectly.",
      "datePublished": "2024-08-01"
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "TattooParlor",
        "name": "Sueno Tattoo",
        "@id": "https://www.suenotattoo.com"
      },
      "author": {
        "@type": "Person", 
        "name": "Erica Correll"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I loved how Jose did an amazing job on my tattoo! I love it so much! Also, he made sure I was doing okay during the process and was very professional throughout.",
      "datePublished": "2023-08-31"
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "TattooParlor",
        "name": "Sueno Tattoo",
        "@id": "https://www.suenotattoo.com"
      },
      "author": {
        "@type": "Person",
        "name": "Kyle Schwartz"
      },
      "reviewRating": {
        "@type": "Rating", 
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Jose is a phenomenal artist and an even better person. His attention to detail and artistic ability is unmatched. The studio is extremely clean and the entire experience was professional from start to finish.",
      "datePublished": "2023-07-15"
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "TattooParlor",
        "name": "Sueno Tattoo",
        "@id": "https://www.suenotattoo.com"
      },
      "author": {
        "@type": "Person",
        "name": "Michelle Rodriguez"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5", 
        "bestRating": "5"
      },
      "reviewBody": "Jose transformed my old, faded tattoo into an absolutely stunning piece of art. The cover-up work he did exceeded all my expectations. His artistic vision and technical skill are incredible.",
      "datePublished": "2023-06-20"
    }
  ]
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BUSINESS_CONSTANTS.url}/about#${ARTIST_CONSTANTS.name.toLowerCase()}-alvarado`,
  "name": ARTIST_CONSTANTS.name,
  "alternateName": ARTIST_CONSTANTS.alternateName,
  "jobTitle": ARTIST_CONSTANTS.jobTitle,
  "worksFor": baseBusinessSchema,
  "description": ARTIST_CONSTANTS.description,
  "knowsAbout": ARTIST_CONSTANTS.specialties,
  "award": ARTIST_CONSTANTS.credentials,
  "yearsOfExperience": ARTIST_CONSTANTS.experience,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": BUSINESS_CONSTANTS.address.addressLocality,
    "addressRegion": BUSINESS_CONSTANTS.address.addressRegion,
    "addressCountry": BUSINESS_CONSTANTS.address.addressCountry,
    "postalCode": BUSINESS_CONSTANTS.address.postalCode
  },
  "telephone": BUSINESS_CONSTANTS.telephone,
  "email": BUSINESS_CONSTANTS.email,
  "url": `${BUSINESS_CONSTANTS.url}/about`,
  "sameAs": [BUSINESS_CONSTANTS.socialMedia.instagram],
  "breadcrumb": generateBreadcrumbs('/about'),
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Tattoo Artist",
    "occupationalCategory": "Arts, Entertainment, and Recreation",
    "experienceRequirements": "Licensed Professional",
    "qualifications": "Licensed & Health Safety Certified"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Professional Tattoo Artists"
  }
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": baseBusinessSchema,
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.suenotattoo.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.suenotattoo.com/contact"
      }
    ]
  }
};

export const aftercareFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a tattoo take to heal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tattoo typically takes 4-6 weeks to fully heal. The surface healing occurs in the first 2 weeks, while deeper skin layers continue healing for several more weeks."
      }
    },
    {
      "@type": "Question", 
      "name": "When can I shower normally after getting a tattoo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can shower immediately after getting a tattoo, but keep showers brief and avoid direct water pressure on the tattoo. No baths, pools, or hot tubs for 2-4 weeks until fully healed."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I moisturize my new tattoo?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Apply a thin layer of unscented moisturizer 2-3 times daily. Over-moisturizing can delay healing, so use only what's needed to keep the skin from getting too dry."
      }
    },
    {
      "@type": "Question",
      "name": "Is itching normal during tattoo healing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, itching is completely normal and part of the healing process. Resist scratching - instead, gently pat the area or apply a small amount of moisturizer."
      }
    },
    {
      "@type": "Question",
      "name": "When can I exercise after getting a tattoo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Light exercise can resume after 3-4 days, but avoid intense workouts for 1-2 weeks. The timing depends on tattoo location and size - always follow your artist's specific advice."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if my tattoo shows signs of infection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact your tattoo artist immediately if you notice excessive redness extending beyond tattoo borders, green/yellow discharge, red streaks, fever, or foul smell. These may indicate infection requiring medical attention."
      }
    },
    {
      "@type": "Question",
      "name": "How do I care for a tattoo with Derm Shield?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leave Derm Shield on for 3-5 days. Fluid buildup under the bandage is normal - do not remove it early. The bandage is water-resistant for showering. Remove slowly using soap and water, then switch to regular aftercare routine."
      }
    }
  ]
};

export const aftercarePageSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Professional Tattoo Aftercare Guide",
  "description": `Complete guide to proper tattoo aftercare for optimal healing and longevity from ${BUSINESS_CONSTANTS.name} in ${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion}`,
  "image": `${BUSINESS_CONSTANTS.url}/aftercare-guide.png`,
  "breadcrumb": generateBreadcrumbs('/aftercare'),
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": BUSINESS_CONSTANTS.pricing.currency,
    "value": "0"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Antibacterial soap"
    },
    {
      "@type": "HowToSupply", 
      "name": "Unscented moisturizer"
    },
    {
      "@type": "HowToSupply",
      "name": "Clean towels"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Initial Care (Hours 1-3)",
      "text": "Keep bandage on for 2-3 hours, then gently remove and clean with antibacterial soap"
    },
    {
      "@type": "HowToStep",
      "name": "Daily Cleaning (Days 1-14)",
      "text": "Wash gently 2-3 times daily with antibacterial soap and pat dry"
    },
    {
      "@type": "HowToStep",
      "name": "Moisturizing (Days 3-30)",
      "text": "Apply thin layer of unscented moisturizer 2-3 times daily"
    }
  ],
  "author": {
    "@type": "Person",
    "name": ARTIST_CONSTANTS.name,
    "jobTitle": ARTIST_CONSTANTS.jobTitle
  }
};

export const flashGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": `Flash Tattoo Designs by ${ARTIST_CONSTANTS.name} | ${BUSINESS_CONSTANTS.name}`,
  "description": `Browse 38+ original flash tattoo designs ready for inking. Classic American traditional flash art including floral, gothic, animals, nautical themes by professional artist ${ARTIST_CONSTANTS.name} in ${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion}.`,
  "breadcrumb": generateBreadcrumbs('/flash'),
  "creator": {
    "@type": "Person",
    "name": ARTIST_CONSTANTS.name,
    "jobTitle": ARTIST_CONSTANTS.jobTitle,
    "worksFor": baseBusinessSchema
  },
  "publisher": baseBusinessSchema,
  "url": `${BUSINESS_CONSTANTS.url}/flash`,
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": "38",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "ImageObject",
          "name": "Traditional Flash Tattoo Designs",
          "description": "Original American traditional flash art featuring bold lines, classic imagery, and timeless designs ready for tattooing",
          "url": `${BUSINESS_CONSTANTS.url}/flash`,
          "creator": ARTIST_CONSTANTS.name,
          "copyrightHolder": BUSINESS_CONSTANTS.name,
          "contentLocation": `${BUSINESS_CONSTANTS.address.addressLocality}, ${BUSINESS_CONSTANTS.address.addressRegion}`,
          "artMedium": "Flash Art",
          "artForm": "Traditional Flash",
          "priceRange": `$${BUSINESS_CONSTANTS.pricing.services["Flash Tattoos"].min}-${BUSINESS_CONSTANTS.pricing.services["Flash Tattoos"].max}`,
          "keywords": "flash tattoo art, traditional flash, ready to tattoo designs, flash sheets, custom flash art"
        }
      }
    ]
  },
  "keywords": `flash tattoo art, ready to tattoo designs, flash sheets, traditional flash, custom flash art, original tattoo designs, ${ARTIST_CONSTANTS.name} flash, ${BUSINESS_CONSTANTS.name} flash, ${BUSINESS_CONSTANTS.address.addressLocality} ${BUSINESS_CONSTANTS.address.addressRegion} flash tattoos`,
  "genre": ["Flash Art", "Traditional Tattoo Art", "Ready-to-Ink Designs"],
  "audience": {
    "@type": "Audience",
    "audienceType": "People looking for ready-to-tattoo flash designs"
  },
  "contentRating": "General audiences",
  "isAccessibleForFree": true,
  "dateModified": new Date().toISOString().split('T')[0],
  "offers": {
    "@type": "Offer",
    "name": "Flash Tattoo Booking",
    "description": "Book any flash design with same-day or next-day availability",
    "priceRange": `$${BUSINESS_CONSTANTS.pricing.services["Flash Tattoos"].min}-${BUSINESS_CONSTANTS.pricing.services["Flash Tattoos"].max}`,
    "priceCurrency": BUSINESS_CONSTANTS.pricing.currency,
    "availability": "https://schema.org/InStock",
    "seller": baseBusinessSchema
  }
};

