import { Metadata } from 'next';
import { businessInfo } from '@/data/business-info';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  canonicalUrl?: string;
  structuredData?: object;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = '/images/seo/sueño-tattoo-og-image.jpg',
  url,
  type = 'website',
  noIndex = false,
  canonicalUrl,
}: SEOProps): Metadata {
  
  const baseTitle = businessInfo.name;
  const baseDescription = businessInfo.description;
  const baseUrl = businessInfo.contact.website;
  
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const fullDescription = description || baseDescription;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Combine base keywords with page-specific keywords
  const baseKeywords = [
    'tattoo shop',
    'washington dc tattoos',
    'northern virginia tattoo',
    'maryland tattoo studio',
    'custom tattoos',
    'professional tattoo artist',
    'dmv tattoo shop',
    'sueño tattoo'
  ];
  
  const allKeywords = [...baseKeywords, ...keywords].join(', ');

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: businessInfo.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: `${businessInfo.name} - ${fullDescription}`,
        }
      ],
      locale: 'en_US',
      type: type,
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: businessInfo.socialMedia.twitter,
      site: businessInfo.socialMedia.twitter,
    },

    // Additional metadata
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl || fullUrl,
    },

    // Additional meta tags
    other: {
      'geo.region': 'US-DC',
      'geo.placename': 'Washington DC',
      'geo.position': `${businessInfo.location.coordinates.latitude};${businessInfo.location.coordinates.longitude}`,
      'ICBM': `${businessInfo.location.coordinates.latitude}, ${businessInfo.location.coordinates.longitude}`,
      'msapplication-TileColor': '#1F2937',
    },

    // Verification tags (to be filled with actual verification codes)
    verification: {
      google: 'GOOGLE_VERIFICATION_CODE_PLACEHOLDER',
      yandex: 'YANDEX_VERIFICATION_CODE_PLACEHOLDER',
      yahoo: 'YAHOO_VERIFICATION_CODE_PLACEHOLDER',
      other: {
        'facebook-domain-verification': 'FACEBOOK_DOMAIN_VERIFICATION_PLACEHOLDER',
        'pinterest-site-verification': 'PINTEREST_VERIFICATION_PLACEHOLDER',
      },
    },
  };
}

// Common SEO metadata for different page types
export const commonSEOData = {
  homepage: {
    title: `${businessInfo.name} | ${businessInfo.tagline} | Washington DC Tattoo Studio`,
    description: `Premier tattoo studio in Washington DC metro area. Custom designs, traditional tattoos, fine line work. Serving DC, Northern Virginia & Maryland. ${businessInfo.tagline}`,
    keywords: [
      'washington dc tattoo shop',
      'custom tattoos dc',
      'professional tattoo artist',
      'dmv tattoo studio',
      'northern virginia tattoos',
      'maryland tattoo parlor'
    ]
  },
  
  about: {
    title: 'About Us | Award-Winning Tattoo Artists',
    description: `Meet the talented artists at ${businessInfo.name}. Award-winning tattoo studio in Washington DC with years of experience in custom designs and traditional work.`,
    keywords: [
      'tattoo artists washington dc',
      'experienced tattoo artist',
      'award winning tattoo shop',
      'professional tattoo team'
    ]
  },

  services: {
    title: 'Tattoo Services | Custom Designs, Traditional & Fine Line Work',
    description: 'Comprehensive tattoo services including custom designs, traditional tattoos, fine line work, cover-ups, and consultations. Professional artists in Washington DC.',
    keywords: [
      'custom tattoo design',
      'traditional tattoos',
      'fine line tattoos',
      'tattoo cover ups',
      'tattoo consultation'
    ]
  },

  gallery: {
    title: 'Tattoo Gallery | Portfolio of Custom Artwork',
    description: 'Browse our extensive portfolio of custom tattoos, traditional work, and fine line designs. See the quality and artistry of our Washington DC tattoo studio.',
    keywords: [
      'tattoo portfolio',
      'tattoo gallery',
      'custom tattoo examples',
      'tattoo artwork',
      'professional tattoo photos'
    ]
  },

  contact: {
    title: 'Contact Us | Book Your Tattoo Consultation',
    description: `Contact ${businessInfo.name} to book your tattoo consultation. Located in Washington DC, serving the entire DMV area. Call ${businessInfo.contact.phone} or book online.`,
    keywords: [
      'book tattoo appointment',
      'tattoo consultation',
      'washington dc tattoo booking',
      'contact tattoo artist'
    ]
  },

  reviews: {
    title: 'Customer Reviews | Testimonials & Ratings',
    description: 'Read what our clients say about their tattoo experience. Five-star reviews from satisfied customers across Washington DC, Northern Virginia, and Maryland.',
    keywords: [
      'tattoo shop reviews',
      'customer testimonials',
      'five star tattoo shop',
      'best tattoo shop dc'
    ]
  }
};