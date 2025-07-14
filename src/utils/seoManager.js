/**
 * Enhanced SEO Manager for SPA
 * Provides proper meta tags and structured data without breaking client-side routing
 */

// Page-specific SEO configurations
export const seoConfig = {
  home: {
    title: "Sueno Tattoo | Best Tattoo Artist Laurel, MD",
    description: "★★★★★ Top-rated tattoo artist in Laurel, MD. Custom designs, 8+ years experience. Licensed professional. Free consultations available.",
    keywords: "tattoo artist near me, best tattoo artist Laurel MD, Beltsville tattoo artist, College Park tattoos, Greenbelt tattoo shop, Prince Georges County tattoo, DMV area tattoo artist, Maryland tattoo shop, custom tattoo artist, professional tattoo shop, Jose tattoo artist, Sueno Tattoo",
    canonical: "https://www.suenotattoo.com",
    image: "https://www.suenotattoo.com/og-image.svg"
  },
  services: {
    title: "Tattoo Services | Custom Designs & Traditional | Laurel MD",
    description: "Professional tattoo services in Laurel, MD. Custom designs, traditional style, realism, cover-ups. 8+ years experience, free consultations.",
    keywords: "tattoo services Maryland, custom tattoo design, traditional tattoo style, realistic tattoo portraits, cover up tattoos, spiritual tattoos, tattoo consultation Laurel MD",
    canonical: "https://www.suenotattoo.com/services",
    image: "https://www.suenotattoo.com/og-image.svg"
  },
  gallery: {
    title: "Tattoo Portfolio | Professional Work Examples | Laurel MD",
    description: "View our tattoo portfolio featuring custom designs, traditional work, realistic portraits, and cover-ups. Professional artistry in Laurel, Maryland.",
    keywords: "tattoo portfolio, tattoo gallery Maryland, custom tattoo examples, traditional tattoo gallery, realistic tattoo portfolio, cover up tattoo examples",
    canonical: "https://www.suenotattoo.com/gallery",
    image: "https://www.suenotattoo.com/og-image.svg"
  },
  about: {
    title: "About Jose | Professional Tattoo Artist | Laurel, MD",
    description: "Meet Jose, licensed tattoo artist with 8+ years experience in Laurel, MD. Specializing in custom designs, traditional work, and realistic portraits.",
    keywords: "Jose tattoo artist, professional tattoo artist Maryland, licensed tattoo artist Laurel MD, experienced tattoo artist DMV area",
    canonical: "https://www.suenotattoo.com/about",
    image: "https://www.suenotattoo.com/og-image.svg"
  },
  contact: {
    title: "Contact Sueno Tattoo | Book Free Consultation | Laurel MD",
    description: "Contact Sueno Tattoo in Laurel, MD for your free tattoo consultation. Licensed artist serving Prince George's County and DMV area.",
    keywords: "contact tattoo artist, book tattoo consultation, Laurel MD tattoo studio, Prince Georges County tattoo artist contact",
    canonical: "https://www.suenotattoo.com/contact",
    image: "https://www.suenotattoo.com/og-image.svg"
  },
  'book-consultation': {
    title: "Book Free Consultation | Sueno Tattoo Laurel, MD",
    description: "Book your free tattoo consultation with professional artist Jose in Laurel, MD. Custom designs, traditional work, realistic portraits.",
    keywords: "book tattoo consultation, free tattoo consultation Maryland, professional tattoo consultation Laurel MD, custom tattoo design consultation",
    canonical: "https://www.suenotattoo.com/book-consultation",
    image: "https://www.suenotattoo.com/og-image.svg"
  },
  reviews: {
    title: "Client Reviews | 5-Star Tattoo Artist | Laurel, MD",
    description: "Read authentic 5-star reviews from satisfied Sueno Tattoo clients in Laurel, MD. Professional tattoo artist with exceptional service and happy customers.",
    keywords: "tattoo artist reviews, Sueno Tattoo testimonials, Laurel MD tattoo reviews, professional tattoo artist ratings, customer testimonials",
    canonical: "https://www.suenotattoo.com/reviews",
    image: "https://www.suenotattoo.com/og-image.svg"
  },
  aftercare: {
    title: "Tattoo Aftercare Guide | Healing Tips | Laurel, MD",
    description: "Complete tattoo aftercare guide from professional artist Jose. Learn proper healing techniques, what to expect, and helpful care tips.",
    keywords: "tattoo aftercare, tattoo healing guide, professional aftercare tips, tattoo care instructions Maryland",
    canonical: "https://www.suenotattoo.com/aftercare",
    image: "https://www.suenotattoo.com/og-image.svg"
  },
  flash: {
    title: "Flash Tattoo Designs | Pre-Made Art | Laurel, MD",
    description: "Browse our collection of flash tattoo designs available for immediate booking. Traditional and custom flash art by professional artist Jose.",
    keywords: "flash tattoo designs, pre-made tattoo art, traditional flash tattoos, ready tattoo designs Maryland",
    canonical: "https://www.suenotattoo.com/flash",
    image: "https://www.suenotattoo.com/og-image.svg"
  }
};

/**
 * Get SEO configuration for a given route
 */
export const getSEOConfig = (pathname) => {
  const route = pathname.replace('/', '') || 'home';
  return seoConfig[route] || seoConfig.home;
};

/**
 * Update document meta tags dynamically (for SPA navigation)
 */
export const updateMetaTags = (pathname) => {
  const config = getSEOConfig(pathname);
  
  // Update title
  document.title = config.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.description);
  }
  
  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', config.keywords);
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', config.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', config.description);
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', config.canonical);
  }
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = config.canonical;
};

/**
 * Enhanced structured data for each page type
 */
export const getStructuredData = (pathname) => {
  const config = getSEOConfig(pathname);
  const route = pathname.replace('/', '') || 'home';
  
  const baseData = {
    "@context": "https://schema.org",
    "@type": "TattooShop",
    "name": "Sueno Tattoo",
    "url": "https://www.suenotattoo.com",
    "description": "Professional tattoo artist in Laurel, MD specializing in custom designs, traditional work, and realistic portraits.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Laurel",
      "addressRegion": "MD",
      "addressCountry": "US"
    },
    "telephone": "+1-XXX-XXX-XXXX",
    "priceRange": "$$",
    "image": config.image,
    "sameAs": [
      "https://www.instagram.com/suenotattoo",
      "https://www.facebook.com/suenotattoo"
    ]
  };
  
  // Add page-specific structured data
  switch (route) {
    case 'services':
      return {
        ...baseData,
        "@type": ["TattooShop", "Service"],
        "serviceType": [
          "Custom Tattoo Design",
          "Traditional Tattoos",
          "Realistic Portraits",
          "Cover-up Tattoos",
          "Spiritual Tattoos"
        ]
      };
      
    case 'gallery':
      return {
        ...baseData,
        "@type": ["TattooShop", "ImageGallery"],
        "contentLocation": "Laurel, MD"
      };
      
    case 'about':
      return {
        ...baseData,
        "@type": ["TattooShop", "Person"],
        "name": "Jose Alvarado",
        "jobTitle": "Professional Tattoo Artist",
        "worksFor": {
          "@type": "TattooShop",
          "name": "Sueno Tattoo"
        },
        "yearsOfExperience": "8+"
      };
      
    default:
      return baseData;
  }
};
