import { businessInfo } from '@/data/business-info'

export function GlobalSchemas() {
  return (
    <>
      {/* LocalBusiness Schema - Global */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://suenotattoo.com/#organization",
            "name": businessInfo.name,
            "alternateName": "Sueno Tattoo Studio",
            "description": "Professional tattoo studio in Laurel, MD specializing in custom designs, traditional American tattoos, realism work, and cover-ups. Licensed artist with 8+ years experience.",
            "url": "https://suenotattoo.com",
            "telephone": businessInfo.contact.phone,
            "email": businessInfo.contact.email,
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
            "priceRange": "$100-$250",
            "currenciesAccepted": "USD",
            "paymentAccepted": "Cash, Credit Card",
            "areaServed": [
              {
                "@type": "City",
                "name": "Laurel",
                "addressRegion": "MD"
              },
              {
                "@type": "City", 
                "name": "Beltsville",
                "addressRegion": "MD"
              },
              {
                "@type": "City",
                "name": "College Park", 
                "addressRegion": "MD"
              },
              {
                "@type": "City",
                "name": "Greenbelt",
                "addressRegion": "MD"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tattoo Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Tattoo Design",
                    "description": "Original custom tattoo artwork designed specifically for each client"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Traditional Tattoos",
                    "description": "Classic American traditional style tattoos with bold lines and vibrant colors"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Cover-Up Tattoos",
                    "description": "Expert cover-up services to transform unwanted tattoos"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Consultation",
                    "description": "Complimentary tattoo consultation and design planning"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": businessInfo.statistics.averageRating,
              "reviewCount": businessInfo.statistics.totalReviews,
              "bestRating": 5,
              "worstRating": 1
            },
            "founder": {
              "@type": "Person",
              "name": "Jose",
              "jobTitle": "Professional Tattoo Artist",
              "description": `Licensed tattoo artist with ${businessInfo.statistics.yearsInBusiness}+ years experience`
            },
            "sameAs": [
              `https://instagram.com/${businessInfo.socialMedia.instagram.replace('@', '')}`,
              `https://${businessInfo.socialMedia.facebook}`
            ]
          })
        }}
      />

      {/* WebSite Schema with SiteLinks SearchBox */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://suenotattoo.com/#website",
            "url": "https://suenotattoo.com",
            "name": "Sueno Tattoo",
            "description": "Professional tattoo studio in Laurel, MD specializing in custom designs and traditional work",
            "publisher": {
              "@id": "https://suenotattoo.com/#organization"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://suenotattoo.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://suenotattoo.com/#organization",
            "name": businessInfo.name,
            "url": "https://suenotattoo.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://suenotattoo.com/images/logo/logo.png",
              "width": 300,
              "height": 300
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": businessInfo.contact.phone,
              "contactType": "Customer Service",
              "availableLanguage": "English",
              "areaServed": "US"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": businessInfo.location.streetAddress,
              "addressLocality": businessInfo.location.city,
              "addressRegion": businessInfo.location.state,
              "postalCode": businessInfo.location.zipCode,
              "addressCountry": "US"
            }
          })
        }}
      />
    </>
  )
}