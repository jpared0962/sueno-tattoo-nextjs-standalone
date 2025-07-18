/**
 * LocalBusinessSchema Component
 * 
 * Generates schema.org-compliant LocalBusiness and Service structured data
 * for improved SEO and rich search results.
 * 
 * Key Features:
 * - Proper handling of closed days in opening hours (schema.org compliant)
 * - Explicit service area type mapping (State, City, AdministrativeArea)
 * - Configurable default ratings and review counts
 * - Input validation for business info and service parameters
 * - Dynamic employee count based on business type
 * - Error handling with console warnings for missing data
 */
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
  defaultReviewCount?: number;
  defaultRating?: string;
}

// Service area type mapping for better type classification
const SERVICE_AREA_TYPES: Record<string, string> = {
  'Maryland': 'State',
  'Virginia': 'State', 
  'Washington DC': 'City',
  'Prince George\'s County': 'AdministrativeArea',
  'Laurel': 'City',
  'Beltsville': 'City',
  'College Park': 'City',
  'Greenbelt': 'City',
  'Hyattsville': 'City'
};

// Validation helper
function validateBusinessInfo() {
  const required = ['name', 'description', 'contact.website', 'contact.phone', 'contact.email'];
  const missing = required.filter(field => {
    const keys = field.split('.');
    let value = businessInfo as any;
    for (const key of keys) {
      value = value?.[key];
    }
    return !value;
  });
  
  if (missing.length > 0) {
    console.warn(`LocalBusinessSchema: Missing required fields: ${missing.join(', ')}`);
  }
  
  return missing.length === 0;
}

export function LocalBusinessSchema({ 
  additionalData = {},
  reviews = [],
  services = [],
  defaultReviewCount = 59,
  defaultRating = "5.0"
}: LocalBusinessSchemaProps) {
  
  // Validate required business info
  if (!validateBusinessInfo()) {
    return null;
  }
  
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
    
    // Operating Hours - Include all days, even closed ones
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        ...(businessInfo.hours.monday.isOpen ? {
          "opens": businessInfo.hours.monday.open,
          "closes": businessInfo.hours.monday.close
        } : {})
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Tuesday",
        ...(businessInfo.hours.tuesday.isOpen ? {
          "opens": businessInfo.hours.tuesday.open,
          "closes": businessInfo.hours.tuesday.close
        } : {})
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday", 
        ...(businessInfo.hours.wednesday.isOpen ? {
          "opens": businessInfo.hours.wednesday.open,
          "closes": businessInfo.hours.wednesday.close
        } : {})
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        ...(businessInfo.hours.thursday.isOpen ? {
          "opens": businessInfo.hours.thursday.open,
          "closes": businessInfo.hours.thursday.close
        } : {})
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        ...(businessInfo.hours.friday.isOpen ? {
          "opens": businessInfo.hours.friday.open,
          "closes": businessInfo.hours.friday.close
        } : {})
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        ...(businessInfo.hours.saturday.isOpen ? {
          "opens": businessInfo.hours.saturday.open,
          "closes": businessInfo.hours.saturday.close
        } : {})
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        ...(businessInfo.hours.sunday.isOpen ? {
          "opens": businessInfo.hours.sunday.open,
          "closes": businessInfo.hours.sunday.close
        } : {})
      }
    ],
    
    // Payment Methods
    "paymentAccepted": businessInfo.pricing.paymentMethods.join(", "),
    "currenciesAccepted": "USD",
    
    // Price Range
    "priceRange": "$100-$800",
    
    // Service Areas - Use explicit type mapping
    "areaServed": businessInfo.serviceAreas.map(area => {
      const areaType = SERVICE_AREA_TYPES[area] || "City"; // Default to City if not found
      return {
        "@type": areaType,
        "name": area
      };
    }),
    
    // Services Offered
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tattoo Services",
      "itemListElement": services.length > 0 ? services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
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
    "numberOfEmployees": businessInfo.classification.businessType === 'Sole Proprietorship' ? "1" : "2-10",
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
    ]
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

    (baseSchema as any)["aggregateRating"] = aggregateRating;
    (baseSchema as any)["review"] = reviewSchemas;
  } else {
    // Default aggregate rating when no reviews provided - configurable values
    (baseSchema as any)["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": defaultRating,
      "reviewCount": defaultReviewCount.toString(),
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

// Specific schema for tattoo services with validation
export function TattooServiceSchema({ 
  serviceName, 
  description, 
  priceRange
}: {
  serviceName: string;
  description: string;
  priceRange: { min: number; max: number };
}) {
  // Validate inputs
  if (!serviceName || !description || !priceRange || priceRange.min < 0 || priceRange.max <= priceRange.min) {
    console.warn('TattooServiceSchema: Invalid or missing required parameters');
    return null;
  }
  
  if (!validateBusinessInfo()) {
    return null;
  }
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
    "areaServed": businessInfo.serviceAreas.map(area => {
      const areaType = SERVICE_AREA_TYPES[area] || "City"; // Use explicit mapping
      return {
        "@type": areaType,
        "name": area
      };
    })
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