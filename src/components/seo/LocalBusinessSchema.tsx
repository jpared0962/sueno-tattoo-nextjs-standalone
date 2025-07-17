import { businessInfo } from '@/data/business-info';

interface LocalBusinessSchemaProps {
  additionalData?: object;
  reviews?: Array<{
    author: string;
    rating: number;
    text: string;
    date: string;
  }>;
  services?: string[];
}

export function LocalBusinessSchema({ 
  additionalData = {},
  reviews = [],
  services = []
}: LocalBusinessSchemaProps) {
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "alternateName": "Jose's Tattoo Studio",
    "slogan": "Where Dreams Become Art",
    "legalName": businessInfo.classification.businessType === 'LLC' ? 
      `${businessInfo.name} LLC` : businessInfo.name,
    "description": businessInfo.description,
    "url": businessInfo.contact.website,
    "logo": `${businessInfo.contact.website}/images/logo/logo.png`,
    "image": [
      `${businessInfo.contact.website}/images/logo/logo.png`,
      `${businessInfo.contact.website}/images/seo/sueño-tattoo-og-image.jpg`
    ],
    
    // Contact Information
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.location.streetAddress,
      "addressLocality": businessInfo.location.city,
      "addressRegion": businessInfo.location.state,
      "postalCode": businessInfo.location.zipCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.location.coordinates.latitude,
      "longitude": businessInfo.location.coordinates.longitude
    },
    "telephone": businessInfo.contact.phone,
    "email": businessInfo.contact.email,
    
    // Operating Hours
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": businessInfo.hours.monday.isOpen ? businessInfo.hours.monday.open : null,
        "closes": businessInfo.hours.monday.isOpen ? businessInfo.hours.monday.close : null
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday"],
        "opens": businessInfo.hours.tuesday.isOpen ? businessInfo.hours.tuesday.open : null,
        "closes": businessInfo.hours.tuesday.isOpen ? businessInfo.hours.tuesday.close : null
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday"],
        "opens": businessInfo.hours.wednesday.isOpen ? businessInfo.hours.wednesday.open : null,
        "closes": businessInfo.hours.wednesday.isOpen ? businessInfo.hours.wednesday.close : null
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday"],
        "opens": businessInfo.hours.thursday.isOpen ? businessInfo.hours.thursday.open : null,
        "closes": businessInfo.hours.thursday.isOpen ? businessInfo.hours.thursday.close : null
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": businessInfo.hours.friday.isOpen ? businessInfo.hours.friday.open : null,
        "closes": businessInfo.hours.friday.isOpen ? businessInfo.hours.friday.close : null
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": businessInfo.hours.saturday.isOpen ? businessInfo.hours.saturday.open : null,
        "closes": businessInfo.hours.saturday.isOpen ? businessInfo.hours.saturday.close : null
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": businessInfo.hours.sunday.isOpen ? businessInfo.hours.sunday.open : null,
        "closes": businessInfo.hours.sunday.isOpen ? businessInfo.hours.sunday.close : null
      }
    ].filter(spec => spec.opens && spec.closes),
    
    // Payment Methods
    "paymentAccepted": businessInfo.pricing.paymentMethods.join(", "),
    "currenciesAccepted": "USD",
    
    // Price Range
    "priceRange": "$100-$800",
    
    // Service Areas
    "areaServed": businessInfo.serviceAreas.map(area => ({
      "@type": "State",
      "name": area
    })),
    
    // Services Offered
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tattoo Services",
      "itemListElement": services.length > 0 ? services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        },
        "position": index + 1
      })) : [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Tattoo Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traditional Tattoos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fine Line Tattoos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tattoo Cover-ups"
          }
        }
      ]
    },
    
    // Social Media
    "sameAs": [
      `https://instagram.com/${businessInfo.socialMedia.instagram.replace('@', '')}`,
      businessInfo.socialMedia.facebook,
      `https://twitter.com/${businessInfo.socialMedia.twitter.replace('@', '')}`,
      `https://tiktok.com/${businessInfo.socialMedia.tiktok.replace('@', '')}`
    ],
    
    // Business Identifiers
    "taxID": businessInfo.classification.taxId !== "XX-XXXXXXX" ? 
      businessInfo.classification.taxId : undefined,
    "naics": businessInfo.classification.naicsCode,
    
    // Additional Business Info
    "foundingDate": businessInfo.classification.founded.toString(),
    "numberOfEmployees": "2-10", // [EMPLOYEE_COUNT_PLACEHOLDER]
    "knowsAbout": [
      "Custom Tattoo Design",
      "Traditional Tattoo Art",
      "Fine Line Tattoos",
      "Tattoo Cover-ups",
      "Tattoo Aftercare",
      "Body Art",
      "Skin Art",
      "Tattoo Consultation"
    ],
    
    // Founder/Owner
    "founder": {
      "@type": "Person",
      "name": "Jose",
      "jobTitle": "Professional Tattoo Artist",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Professional Tattoo Artist License",
        "credentialCategory": "Professional License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Maryland State"
        }
      }
    },
    
    // Awards/Recognition
    "awards": [
      "95% Perfect Healing Rate",
      "500+ Satisfied Clients",
      "Licensed Professional"
    ],
    
    // Legal and Licensing Information
    "acquireLicensePage": `${businessInfo.contact.website}/about`,
    "copyrightNotice": `© ${new Date().getFullYear()} ${businessInfo.name}. All rights reserved.`,
    "license": "Licensed Professional Tattoo Artist - Maryland State",
    "creditText": `Professional tattoo services by ${businessInfo.name}`,
    
    // Creator Information
    "creator": {
      "@type": "Person",
      "name": "Jose",
      "jobTitle": "Professional Tattoo Artist & Founder"
    }
  };

  // Add reviews and aggregate rating
  if (reviews.length > 0) {
    const aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    };

    const reviewSchemas = reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.text,
      "datePublished": review.date
    }));

    baseSchema["aggregateRating"] = aggregateRating;
    baseSchema["review"] = reviewSchemas;
  } else {
    // Default aggregate rating when no reviews provided
    baseSchema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "59",
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  // Merge with additional data
  const fullSchema = { ...baseSchema, ...additionalData };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(fullSchema, null, 2)
      }}
    />
  );
}

// Specific schema for tattoo services
export function TattooServiceSchema({ 
  serviceName, 
  description, 
  priceRange
}: {
  serviceName: string;
  description: string;
  priceRange: { min: number; max: number };
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "TattooParlor",
      "name": businessInfo.name,
      "url": businessInfo.contact.website,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.location.streetAddress,
        "addressLocality": businessInfo.location.city,
        "addressRegion": businessInfo.location.state,
        "postalCode": businessInfo.location.zipCode
      }
    },
    "offers": {
      "@type": "Offer",
      "price": `${priceRange.min}-${priceRange.max}`,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // 1 year from now
    },
    "serviceType": "Body Art Service",
    "category": "Tattoo Service",
    "areaServed": businessInfo.serviceAreas.map(area => ({
      "@type": "State",
      "name": area
    })),
    
    // Service Legal and Credit Information
    "license": "Licensed Professional Tattoo Service - Maryland State",
    "creditText": `Professional ${serviceName.toLowerCase()} by ${businessInfo.name}`,
    "copyrightNotice": `© ${new Date().getFullYear()} ${businessInfo.name}. All rights reserved.`,
    "creator": {
      "@type": "Person",
      "name": "Jose",
      "jobTitle": "Professional Tattoo Artist"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}