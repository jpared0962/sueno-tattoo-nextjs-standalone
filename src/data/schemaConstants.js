/**
 * Centralized constants for schema.org structured data
 * Ensures consistency across all schema implementations
 */

// Business Information Constants
export const BUSINESS_CONSTANTS = {
  name: "Sueño Tattoo", // Consistent with accent
  alternateName: "Jose Tattoo Artist",
  legalName: "Sueño Tattoo LLC",
  url: "https://www.suenotattoo.com",
  telephone: "+12407583226",
  email: "jpared19@outlook.com",
  logo: "https://www.suenotattoo.com/logo.svg",
  
  // Aggregate Rating - Single source of truth
  aggregateRating: {
    ratingValue: "5.0",
    reviewCount: "59", // Consistent count
    bestRating: "5",
    worstRating: "1"
  },

  // Address Information
  address: {
    streetAddress: "Professional Studio",
    addressLocality: "Laurel",
    addressRegion: "MD",
    addressCountry: "US",
    postalCode: "20723"
  },

  // Geographic Coordinates
  geo: {
    latitude: "39.0993",
    longitude: "-76.8483"
  },

  // Operating Hours
  hours: {
    openDays: ["Thursday", "Friday", "Saturday", "Sunday"],
    opens: "12:00",
    closes: "18:00",
    closedDays: ["Monday", "Tuesday", "Wednesday"]
  },

  // Service Areas
  serviceAreas: [
    { name: "Laurel", type: "City", region: "MD" },
    { name: "Beltsville", type: "City", region: "MD" },
    { name: "College Park", type: "City", region: "MD" },
    { name: "Greenbelt", type: "City", region: "MD" },
    { name: "Hyattsville", type: "City", region: "MD" },
    { name: "Prince George's County", type: "AdministrativeArea", region: "MD" }
  ],

  // Pricing Constants
  pricing: {
    priceRange: "$200-$800",
    currency: "USD",
    paymentMethods: ["Cash", "Credit Card", "Debit Card", "Venmo", "Zelle"],
    
    // Service-specific pricing
    services: {
      "Custom Tattoo Design": { min: 200, max: 800 },
      "Traditional Tattoos": { min: 150, max: 600 },
      "Fine Line Tattoos": { min: 180, max: 500 },
      "Cover-up Tattoos": { min: 300, max: 800 },
      "Flash Tattoos": { min: 150, max: 300 },
      "Free Consultation": { min: 0, max: 0 }
    }
  },

  // Social Media
  socialMedia: {
    instagram: "https://instagram.com/suenotattoo"
  }
};

// Artist Information
export const ARTIST_CONSTANTS = {
  name: "Jose",
  alternateName: "Jose - Sueño Tattoo Artist",
  jobTitle: "Professional Tattoo Artist",
  description: "Licensed professional with over 8 years of experience specializing in custom tattoo design. Every piece is created for you alone — no flash, no copies. Serving Laurel, MD and Prince George's County.",
  experience: "8+",
  
  specialties: [
    "Traditional Tattoos",
    "Realistic Portraits",
    "Custom Tattoo Design",
    "Cover-up Tattoos",
    "Spiritual & Symbolic Art",
    "Fine Line Tattoos",
    "Neo-Traditional Style",
    "Japanese-Inspired Tattoos",
    "Geometric Patterns",
    "Botanical Designs"
  ],

  credentials: [
    "Licensed Tattoo Artist",
    "Health Safety Certified",
    "8+ Years Professional Experience"
  ]
};

// Service Catalog Generator
export const generateServiceCatalog = () => {
  const services = [
    {
      name: "Custom Tattoo Design",
      description: "Completely original artwork designed specifically for each client"
    },
    {
      name: "Traditional Tattoos",
      description: "Classic American traditional style with bold lines and vibrant colors"
    },
    {
      name: "Realistic Portraits",
      description: "Photorealistic portraits and detailed artwork with precision"
    },
    {
      name: "Cover-up Tattoos",
      description: "Expert transformation of existing tattoos into beautiful new artwork"
    },
    {
      name: "Fine Line Tattoos",
      description: "Delicate and precise line work for minimalist designs"
    },
    {
      name: "Free Consultation",
      description: "Complimentary tattoo design consultation and quote"
    }
  ];

  return {
    "@type": "OfferCatalog",
    "name": "Tattoo Services",
    "itemListElement": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description
      },
      ...(BUSINESS_CONSTANTS.pricing.services[service.name] && {
        "price": `${BUSINESS_CONSTANTS.pricing.services[service.name].min}-${BUSINESS_CONSTANTS.pricing.services[service.name].max}`,
        "priceCurrency": BUSINESS_CONSTANTS.pricing.currency
      })
    }))
  };
};

// Validation Helpers
export const validatePortfolioData = (portfolioData) => {
  if (!portfolioData || !Array.isArray(portfolioData)) {
    console.warn('Portfolio data is missing or not an array');
    return false;
  }
  
  if (portfolioData.length === 0) {
    console.warn('Portfolio data is empty');
    return false;
  }

  // Check required fields for each portfolio item
  const requiredFields = ['id', 'title', 'description', 'style', 'image'];
  const invalidItems = portfolioData.filter(item => 
    requiredFields.some(field => !item[field])
  );

  if (invalidItems.length > 0) {
    console.warn(`Portfolio items missing required fields: ${invalidItems.length} items`);
    return false;
  }

  return true;
};

// Safe portfolio access
export const getPortfolioCount = (portfolioData) => {
  return validatePortfolioData(portfolioData) ? portfolioData.length : 0;
};

// Safe tattoo finder
export const findTattooById = (portfolioData, tattooId) => {
  if (!validatePortfolioData(portfolioData)) {
    return null;
  }
  
  const tattoo = portfolioData.find(t => t.id === tattooId);
  if (!tattoo) {
    console.warn(`Tattoo with ID ${tattooId} not found in portfolio`);
    return null;
  }
  
  return tattoo;
};

// Price calculation helper
export const calculatePriceRange = (size) => {
  const pricing = {
    small: { min: 200, max: 400 },
    medium: { min: 400, max: 800 },
    large: { min: 800, max: 1200 }
  };
  
  const range = pricing[size] || pricing.medium;
  return `$${range.min}-${range.max}`;
};

// Error boundary for schema generation
export const safeSchemaGeneration = (schemaFunction, fallbackSchema = null) => {
  try {
    return schemaFunction();
  } catch (error) {
    console.error('Schema generation error:', error);
    return fallbackSchema;
  }
};

// Breadcrumb generation helper for consistent navigation structure
export const generateBreadcrumbs = (pagePath, pageTitle) => {
  const pathSegments = pagePath.split('/').filter(segment => segment);
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": BUSINESS_CONSTANTS.url
    }
  ];

  // Build breadcrumbs based on path segments
  let currentPath = BUSINESS_CONSTANTS.url;
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    let name = '';
    
    // Map URL segments to proper display names
    switch (segment) {
      case 'about':
        name = 'About';
        break;
      case 'gallery':
        name = 'Gallery';
        break;
      case 'services':
        name = 'Services';
        break;
      case 'contact':
        name = 'Contact';
        break;
      case 'reviews':
        name = 'Reviews';
        break;
      case 'aftercare':
        name = 'Aftercare';
        break;
      case 'flash':
        name = 'Flash Tattoos';
        break;
      case 'book-consultation':
        name = 'Book Consultation';
        break;
      case 'locations':
        name = 'Locations';
        break;
      case 'faq':
        name = 'FAQ';
        break;
      case 'privacy-policy':
        name = 'Privacy Policy';
        break;
      case 'custom-tattoos':
        name = 'Custom Tattoos';
        break;
      case 'traditional':
        name = 'Traditional Tattoos';
        break;
      case 'fine-line':
        name = 'Fine Line Tattoos';
        break;
      case 'cover-ups':
        name = 'Cover-up Tattoos';
        break;
      case 'consultation':
        name = 'Consultation';
        break;
      case 'black-grey':
        name = 'Black & Grey Tattoos';
        break;
      case 'neo-traditional':
        name = 'Neo-Traditional Tattoos';
        break;
      case 'geometric-tattoos':
        name = 'Geometric Tattoos';
        break;
      case 'flash-tattoos':
        name = 'Flash Tattoos';
        break;
      case 'watercolor-tattoos':
        name = 'Watercolor Tattoos';
        break;
      case 'laurel':
        name = 'Laurel, MD';
        break;
      case 'beltsville':
        name = 'Beltsville, MD';
        break;
      case 'college-park':
        name = 'College Park, MD';
        break;
      case 'greenbelt':
        name = 'Greenbelt, MD';
        break;
      case 'washington-dc':
        name = 'Washington, DC';
        break;
      case 'maryland':
        name = 'Maryland';
        break;
      case 'northern-virginia':
        name = 'Northern Virginia';
        break;
      default:
        // Convert kebab-case to title case
        name = segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": currentPath
    });
  });

  // If pageTitle is provided and different from the last breadcrumb, add it
  if (pageTitle && breadcrumbs[breadcrumbs.length - 1].name !== pageTitle) {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": breadcrumbs.length + 1,
      "name": pageTitle,
      "item": currentPath
    });
  }

  return {
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  };
};
