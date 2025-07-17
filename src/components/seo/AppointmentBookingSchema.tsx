// Comprehensive appointment booking schema for Sueno Tattoo
// Reflects the consultation-first booking process

import { businessInfo } from '@/data/business-info'

// Action Schema for booking appointments (shows "Book Appointment" in search results)
export const reservationActionSchema = {
  "@context": "https://schema.org",
  "@type": "ReserveAction",
  "agent": {
    "@type": "Organization",
    "name": businessInfo.name,
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'
  },
  "object": {
    "@type": "Service",
    "name": "Tattoo Appointment",
    "description": "Professional tattoo session after consultation",
    "provider": {
      "@type": "LocalBusiness",
      "name": businessInfo.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.location.streetAddress,
        "addressLocality": businessInfo.location.city,
        "addressRegion": businessInfo.location.state,
        "postalCode": businessInfo.location.zipCode,
        "addressCountry": "US"
      },
      "telephone": businessInfo.contact.phone
    }
  },
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/book-consultation`,
    "inLanguage": "en-US",
    "actionPlatform": [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/MobileWebPlatform"
    ]
  },
  "result": {
    "@type": "Reservation",
    "name": "Tattoo Appointment Reservation"
  }
}

// Schedule Action Schema for showing booking capability
export const scheduleActionSchema = {
  "@context": "https://schema.org",
  "@type": "ScheduleAction",
  "agent": {
    "@type": "Organization",
    "name": businessInfo.name
  },
  "object": {
    "@type": "Event",
    "name": "Tattoo Consultation & Appointment",
    "description": "Free consultation followed by tattoo appointment booking",
    "location": {
      "@type": "Place",
      "name": businessInfo.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.location.streetAddress,
        "addressLocality": businessInfo.location.city,
        "addressRegion": businessInfo.location.state,
        "postalCode": businessInfo.location.zipCode,
        "addressCountry": "US"
      }
    },
    "performer": {
      "@type": "Person",
      "name": "Jose",
      "jobTitle": "Professional Tattoo Artist",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": businessInfo.name
      }
    }
  },
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/book-consultation`,
    "inLanguage": "en-US"
  }
}

// Consultation Service Schema with booking flow
export const consultationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Tattoo Consultation",
  "name": "Free Tattoo Consultation",
  "description": "Complimentary consultation to discuss your tattoo ideas, get expert advice, and book your appointment",
  "provider": {
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.location.streetAddress,
      "addressLocality": businessInfo.location.city,
      "addressRegion": businessInfo.location.state,
      "postalCode": businessInfo.location.zipCode,
      "addressCountry": "US"
    },
    "telephone": businessInfo.contact.phone,
    "email": businessInfo.contact.email,
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "name": "Free Consultation",
    "description": "No-cost consultation with professional tattoo artist",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString(),
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/book-consultation`
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tattoo Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "American Traditional Tattoos",
          "description": "Classic American traditional style tattoos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fine Line Tattoos",
          "description": "Delicate fine line and minimalist tattoo work"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Realistic Portraits",
          "description": "Photorealistic portrait tattoos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cover-up Tattoos",
          "description": "Expert cover-up and rework services"
        }
      }
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Laurel",
      "containedInPlace": {
        "@type": "State", 
        "name": "Maryland"
      }
    },
    {
      "@type": "City",
      "name": "Beltsville",
      "containedInPlace": {
        "@type": "State",
        "name": "Maryland" 
      }
    },
    {
      "@type": "City",
      "name": "College Park",
      "containedInPlace": {
        "@type": "State",
        "name": "Maryland"
      }
    },
    {
      "@type": "City",
      "name": "Greenbelt", 
      "containedInPlace": {
        "@type": "State",
        "name": "Maryland"
      }
    },
    {
      "@type": "City",
      "name": "Washington",
      "containedInPlace": {
        "@type": "State",
        "name": "District of Columbia"
      }
    }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "name": "Online Consultation Booking",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/book-consultation`,
    "serviceType": "Consultation Request Form"
  }
}

// Appointment Booking Process Schema
export const bookingProcessSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Book a Tattoo Appointment",
  "description": "Step-by-step process to book your tattoo appointment with Jose",
  "image": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/images/logo/logo-main.png`,
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Submit Consultation Request",
      "text": "Fill out the free consultation form with your tattoo ideas, preferred size, placement, and availability",
      "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/book-consultation`
    },
    {
      "@type": "HowToStep", 
      "position": 2,
      "name": "Consultation Review",
      "text": "Jose will review your consultation request and contact you within 24 hours to discuss your tattoo ideas"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Schedule Consultation",
      "text": "Book your free in-person consultation to finalize design details, placement, and pricing"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Book Tattoo Appointment",
      "text": "After your consultation, use the Square Appointments booking system to schedule your tattoo session",
      "url": "https://squareup.com/appointments/buyer/widget/wvdgymz6ya23rw/GWAX8GWRX2KB8"
    }
  ],
  "totalTime": "PT15M",
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Tattoo Design Ideas"
    },
    {
      "@type": "HowToSupply", 
      "name": "Reference Images (optional)"
    }
  ]
}

// Event Schema for consultation appointments
export const consultationEventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Free Tattoo Consultation",
  "description": "Complimentary consultation to discuss your tattoo vision and plan your appointment",
  "location": {
    "@type": "Place",
    "name": businessInfo.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.location.streetAddress,
      "addressLocality": businessInfo.location.city,
      "addressRegion": businessInfo.location.state,
      "postalCode": businessInfo.location.zipCode,
      "addressCountry": "US"
    }
  },
  "performer": {
    "@type": "Person",
    "name": "Jose",
    "jobTitle": "Professional Tattoo Artist"
  },
  "organizer": {
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "telephone": businessInfo.contact.phone,
    "email": businessInfo.contact.email
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}/book-consultation`
  },
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled"
}

// Complete booking schema collection
export const appointmentBookingSchemas = [
  reservationActionSchema,
  scheduleActionSchema,
  consultationServiceSchema,
  bookingProcessSchema,
  consultationEventSchema
]

// React component to render booking schemas
interface AppointmentBookingSchemaProps {
  schemas?: ('reservation' | 'schedule' | 'consultation' | 'process' | 'event')[]
}

export default function AppointmentBookingSchema({ 
  schemas = ['reservation', 'schedule', 'consultation'] 
}: AppointmentBookingSchemaProps) {
  const schemaMap = {
    reservation: reservationActionSchema,
    schedule: scheduleActionSchema, 
    consultation: consultationServiceSchema,
    process: bookingProcessSchema,
    event: consultationEventSchema
  }

  return (
    <>
      {schemas.map((schemaType, index) => (
        <script
          key={`booking-schema-${schemaType}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMap[schemaType])
          }}
        />
      ))}
    </>
  )
}
