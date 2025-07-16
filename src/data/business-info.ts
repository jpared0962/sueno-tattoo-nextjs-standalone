// Core business information for Sueño Tattoo
export const businessInfo = {
  // Basic Business Details
  name: "Sueño Tattoo",
  legalName: "Sueño Tattoo",
  tagline: "Where Dreams Become Art",
  description: "Professional independent tattoo artist Jose specializing in custom original designs, traditional American style, and realism work. Licensed professional with 8+ years experience serving Laurel, MD and the DMV area.",
  
  // Artist Information
  artist: {
    name: "Jose",
    experience: "8+ years (since 2017)",
    specializations: [
      "Traditional American Style",
      "Custom Original Designs", 
      "Realism Work",
      "Cover-up Transformations",
      "Spiritual & Symbolic",
      "Fine Line & Minimalist",
      "Botanical & Nature"
    ],
    credentials: "Licensed Professional"
  },

  // Contact Information
  contact: {
    phone: "(240) 758-3226",
    email: "jpared19@outlook.com",
    website: "https://www.suenotattoo.com",
    emergencyContact: "(240) 758-3226"
  },

  // Physical Location
  location: {
    streetAddress: "Laurel, MD",
    city: "Laurel",
    state: "MD",
    zipCode: "20723",
    neighborhood: "Laurel",
    coordinates: {
      latitude: 39.0993,
      longitude: -76.8483
    }
  },

  // Service Areas
  serviceAreas: [
    "Laurel, MD (primary)",
    "Beltsville, MD",
    "College Park, MD", 
    "Greenbelt, MD",
    "Hyattsville, MD",
    "Prince George's County, MD",
    "DMV area (DC, Maryland, Virginia)"
  ],

  // Operating Hours
  hours: {
    monday: { open: null, close: null, isOpen: false },
    tuesday: { open: null, close: null, isOpen: false },
    wednesday: { open: null, close: null, isOpen: false },
    thursday: { open: "12:00", close: "18:00", isOpen: true },
    friday: { open: "12:00", close: "18:00", isOpen: true },
    saturday: { open: "12:00", close: "18:00", isOpen: true },
    sunday: { open: "12:00", close: "18:00", isOpen: true }
  },

  // Social Media
  socialMedia: {
    instagram: "https://www.instagram.com/suenotattoo",
    facebook: "https://www.facebook.com/suenotattoo",
    tiktok: "https://www.tiktok.com/@suenotattoo",
    twitter: "https://www.twitter.com/suenotattoo",
    youtube: "https://www.youtube.com/@suenotattoo",
    googleBusiness: "https://business.google.com/suenotattoo",
    // Review Platform URLs
    googleReviews: "https://www.google.com/search?sca_esv=41c54eb164886e82&sxsrf=AE3TifP3Y80ponnpwJmKZNNmQI36Q3IB-g:1752559671016&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E18dnNN3Z_EJQQlChQxvq3XqQj3VpZNl8FSPgms_NE8B8mmnWYzwgHfxW9Wes0rrj8mur799JKJ9QV8wam6j6z1hIEWI&q=Sueno+Tattoo+Reviews&sa=X&ved=2ahUKEwjF143Fmb6OAxU1F1kFHUkYM3cQ0bkNegQIQxAE&biw=1080&bih=1103&dpr=2",
    yelpReviews: "https://www.yelp.com/biz/sueno-tattoo-laurel/writeareview",
    facebookReviews: "https://www.facebook.com/suenotattoo/reviews",
    nextdoorReviews: "https://nextdoor.com/pages/sueno-tattoo-laurel-md/"
  },

  // Business Classification
  classification: {
    industry: "Personal Care Services",
    subIndustry: "Independent Professional Tattoo Artist",
    naicsCode: "812199",
    businessType: "Independent Professional",
    founded: 2017,
    taxId: "Professional License on File"
  },

  // Payment & Pricing
  pricing: {
    consultationFee: 0, // Free consultations
    minimumCharge: 200, // Small tattoos start at $200
    priceRanges: {
      small: { min: 200, max: 400 },
      medium: { min: 400, max: 800 },
      large: { min: 800, max: 1500 }
    },
    depositRequired: 0, // No hidden fees
    paymentMethods: ["Cash", "Credit Card", "Debit Card", "Venmo", "Zelle"],
    tipsAccepted: true,
    paymentPlansAvailable: false
  },

  // Certifications & Licenses
  certifications: {
    healthDeptLicense: "Licensed Professional Tattoo Artist",
    businessLicense: "Maryland State Licensed",
    contractorLicense: "Licensed Professional",
    bloodbornePathogenCert: true,
    firstAidCprCert: true,
    autoclaveTestingCurrent: true
  },

  // Insurance
  insurance: {
    generalLiability: true,
    professionalLiability: true,
    propertyInsurance: true,
    workersCompensation: false // Independent artist
  },

  // Awards & Recognition
  awards: [
    {
      title: "5.0 Stars Google Reviews",
      year: 2024,
      organization: "Google My Business (39+ reviews)"
    },
    {
      title: "5.0 Stars Yelp Reviews", 
      year: 2024,
      organization: "Yelp Reviews"
    },
    {
      title: "Verified Local Business",
      year: 2024,
      organization: "Nextdoor"
    }
  ],

  // Unique Selling Points
  uniqueSellingPoints: [
    "Completely original custom designs",
    "8+ years professional experience",
    "95% perfect healing rate",
    "Limited bookings for personal attention",
    "Cultural respect for spiritual designs",
    "Professional studio environment",
    "Free consultations included",
    "Transparent pricing with no hidden fees"
  ],

  // Business Stats
  statistics: {
    yearsInBusiness: 9,
    totalReviews: 59, // 39 Google + 20 other platforms
    averageRating: 5.0,
    healingSuccessRate: 95,
    portfolioSize: 46
  },

  // Special Programs
  specialOffers: {
    freeConsultations: true,
    walkInConsultations: true,
    multipleConsultationSessions: true,
    sketchRevisionsIncluded: true,
    placementGuidance: true,
    aftercareEducation: true
  }
};

// Export individual components for easier access
export const { name, tagline, contact, location, hours, socialMedia } = businessInfo;