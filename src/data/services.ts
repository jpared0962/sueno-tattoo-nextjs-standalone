// Service offerings and specializations for Sueño Tattoo
export interface TattooService {
  id: string;
  name: string;
  description: string;
  category: 'tattoo' | 'consultation' | 'aftercare' | 'specialty';
  priceRange: {
    min: number;
    max: number;
    unit: 'fixed' | 'hourly' | 'session';
  };
  duration: {
    min: number; // in minutes
    max: number;
  };
  popular: boolean;
  seoKeywords: string[];
  imageAlt: string;
  slug: string;
}

export const tattooServices: TattooService[] = [
  // Core Tattoo Services
  {
    id: 'custom-tattoo-design',
    name: 'Custom Tattoo Design',
    description: 'Personalized tattoo artwork created from your ideas. Our artists work with you to develop unique designs that reflect your vision and style.',
    category: 'tattoo',
    priceRange: { min: 150, max: 500, unit: 'session' },
    duration: { min: 120, max: 480 },
    popular: true,
    seoKeywords: ['custom tattoo dc', 'personalized tattoo design', 'unique tattoo washington', 'watercolor tattoo laurel md', 'geometric tattoo design', 'portrait tattoo artist', 'first tattoo experience', 'professional tattoo consultation', 'affordable custom tattoo', 'tattoo pricing consultation', 'tattoo artist available today'],
    imageAlt: 'Custom tattoo design consultation at Sueño Tattoo Washington DC',
    slug: 'custom-tattoos'
  },
  {
    id: 'traditional-tattoo',
    name: 'Traditional Tattoos',
    description: 'Classic American Traditional and Old School tattoo styles with bold lines, solid colors, and timeless designs.',
    category: 'tattoo',
    priceRange: { min: 100, max: 400, unit: 'session' },
    duration: { min: 60, max: 300 },
    popular: true,
    seoKeywords: ['traditional tattoo dc', 'american traditional northern virginia', 'old school tattoo maryland', 'painless tattoo techniques', 'summer tattoo prep', 'graduation tattoo design', 'why choose sueno tattoo', 'best tattoo shop laurel md', 'vs other tattoo shops'],
    imageAlt: 'Traditional style tattoo work by Sueño Tattoo artists',
    slug: 'traditional'
  },
  {
    id: 'fine-line-tattoo',
    name: 'Fine Line Tattoos',
    description: 'Delicate, detailed tattoos with thin lines and subtle shading. Perfect for minimalist designs and intricate artwork.',
    category: 'tattoo',
    priceRange: { min: 120, max: 350, unit: 'session' },
    duration: { min: 90, max: 240 },
    popular: true,
    seoKeywords: ['fine line tattoo dc', 'minimalist tattoo northern virginia', 'delicate tattoo maryland', 'first tattoo experience', 'small tattoo design', 'professional fine line work', 'vacation tattoo preparation', 'discrete tattoo placement'],
    imageAlt: 'Fine line tattoo artwork at Sueño Tattoo studio',
    slug: 'fine-line'
  },
  {
    id: 'cover-up-tattoo',
    name: 'Cover-up Tattoos',
    description: 'Transform unwanted tattoos into beautiful new artwork. Our specialists excel at creative cover-up solutions.',
    category: 'specialty',
    priceRange: { min: 200, max: 800, unit: 'session' },
    duration: { min: 180, max: 600 },
    popular: true,
    seoKeywords: ['tattoo cover up dc', 'cover up specialist northern virginia', 'tattoo fix maryland', 'emergency tattoo consultation', 'tattoo repair service', 'regret tattoo solution', 'cover up expert laurel md', 'tattoo transformation specialist'],
    imageAlt: 'Before and after tattoo cover-up transformation',
    slug: 'cover-ups'
  },
  {
    id: 'neo-traditional-tattoo',
    name: 'Neo-Traditional Tattoos',
    description: 'Modern twist on traditional tattoo styles with enhanced color palettes, detailed shading, and contemporary themes.',
    category: 'tattoo',
    priceRange: { min: 150, max: 500, unit: 'session' },
    duration: { min: 120, max: 360 },
    popular: false,
    seoKeywords: ['neo traditional tattoo dc', 'modern tattoo northern virginia', 'contemporary tattoo maryland'],
    imageAlt: 'Neo-traditional tattoo design with vibrant colors',
    slug: 'neo-traditional'
  },
  {
    id: 'black-grey-tattoo',
    name: 'Black & Grey Tattoos',
    description: 'Stunning monochromatic tattoos using various shades of black and grey for realistic and artistic effects.',
    category: 'tattoo',
    priceRange: { min: 120, max: 450, unit: 'session' },
    duration: { min: 90, max: 300 },
    popular: false,
    seoKeywords: ['black grey tattoo dc', 'monochrome tattoo northern virginia', 'realistic tattoo maryland', 'portrait tattoo specialist', 'realism tattoo artist', 'black and grey shading expert', 'professional portrait work', 'wedding tattoo commemoration'],
    imageAlt: 'Black and grey realistic tattoo artwork',
    slug: 'black-grey'
  },
  
  // Specialty Services
  {
    id: 'memorial-tattoo',
    name: 'Memorial Tattoos',
    description: 'Meaningful tribute tattoos to honor loved ones. Sensitive, personal designs created with care and respect.',
    category: 'specialty',
    priceRange: { min: 150, max: 600, unit: 'session' },
    duration: { min: 120, max: 480 },
    popular: false,
    seoKeywords: ['memorial tattoo dc', 'tribute tattoo northern virginia', 'remembrance tattoo maryland'],
    imageAlt: 'Memorial tattoo design honoring loved ones',
    slug: 'memorial-tattoos'
  },
  {
    id: 'scar-coverup',
    name: 'Scar Cover-up',
    description: 'Artistic solutions for covering scars with beautiful tattoo designs. Requires consultation to assess feasibility.',
    category: 'specialty',
    priceRange: { min: 200, max: 700, unit: 'session' },
    duration: { min: 180, max: 540 },
    popular: false,
    seoKeywords: ['scar cover tattoo dc', 'scar camouflage northern virginia', 'medical tattoo maryland'],
    imageAlt: 'Scar cover-up tattoo transformation',
    slug: 'scar-cover-up'
  },
  {
    id: 'touch-up-service',
    name: 'Tattoo Touch-ups',
    description: 'Professional touch-up services to refresh and restore older tattoos. Complimentary for recent work.',
    category: 'specialty',
    priceRange: { min: 50, max: 200, unit: 'session' },
    duration: { min: 30, max: 120 },
    popular: false,
    seoKeywords: ['tattoo touch up dc', 'tattoo refresh northern virginia', 'tattoo restoration maryland'],
    imageAlt: 'Professional tattoo touch-up service',
    slug: 'touch-ups'
  },
  {
    id: 'watercolor-tattoo',
    name: 'Watercolor Tattoos',
    description: 'Vibrant watercolor-style tattoos with fluid colors and artistic brush stroke effects. Perfect for nature and abstract designs.',
    category: 'specialty',
    priceRange: { min: 200, max: 600, unit: 'session' },
    duration: { min: 150, max: 420 },
    popular: true,
    seoKeywords: ['watercolor tattoo dc', 'artistic tattoo northern virginia', 'colorful tattoo maryland', 'trendy tattoo styles', 'modern tattoo techniques', 'unique color work', 'artistic watercolor design'],
    imageAlt: 'Watercolor style tattoo with vibrant colors',
    slug: 'watercolor-tattoos'
  },
  {
    id: 'geometric-tattoo',
    name: 'Geometric Tattoos',
    description: 'Precision geometric designs including sacred geometry, mandala patterns, and contemporary geometric art.',
    category: 'specialty',
    priceRange: { min: 150, max: 500, unit: 'session' },
    duration: { min: 120, max: 360 },
    popular: true,
    seoKeywords: ['geometric tattoo dc', 'mandala tattoo northern virginia', 'sacred geometry maryland', 'precision tattoo work', 'mathematical tattoo design', 'symmetrical tattoo art', 'modern geometric patterns'],
    imageAlt: 'Geometric tattoo with precise lines and patterns',
    slug: 'geometric-tattoos'
  },

  // Consultation Services
  {
    id: 'free-consultation',
    name: 'Free Consultation',
    description: 'Complimentary design consultation to discuss your tattoo ideas, placement, and artistic approach.',
    category: 'consultation',
    priceRange: { min: 0, max: 0, unit: 'fixed' },
    duration: { min: 15, max: 45 },
    popular: true,
    seoKeywords: ['free tattoo consultation dc', 'tattoo advice northern virginia', 'tattoo planning maryland', 'first tattoo consultation', 'painless tattoo consultation', 'professional tattoo advice', 'tattoo for professionals', 'emergency tattoo consultation', 'tattoo anxiety help', 'tattoo planning session'],
    imageAlt: 'Free tattoo consultation with professional artist',
    slug: 'consultation'
  },
  {
    id: 'design-development',
    name: 'Design Development',
    description: 'Detailed design creation process including sketches, revisions, and final artwork before tattooing.',
    category: 'consultation',
    priceRange: { min: 50, max: 150, unit: 'session' },
    duration: { min: 60, max: 180 },
    popular: false,
    seoKeywords: ['tattoo design service dc', 'custom artwork northern virginia', 'tattoo sketch maryland', 'wedding tattoo design', 'couple tattoo planning', 'anniversary tattoo sketch', 'graduation tattoo design', 'special occasion tattoo'],
    imageAlt: 'Tattoo design development and sketching process',
    slug: 'design-development'
  },

  // Flash & Walk-ins
  {
    id: 'flash-tattoo',
    name: 'Flash Tattoos',
    description: 'Pre-designed tattoo options available for same-day appointments. Quick, affordable, and professionally executed.',
    category: 'tattoo',
    priceRange: { min: 80, max: 250, unit: 'fixed' },
    duration: { min: 30, max: 120 },
    popular: true,
    seoKeywords: ['flash tattoo dc', 'walk in tattoo northern virginia', 'same day tattoo maryland', 'tattoo artist available today', 'quick tattoo service', 'affordable flash designs', 'last minute tattoo appointment', 'vacation tattoo session'],
    imageAlt: 'Flash tattoo designs available for walk-ins',
    slug: 'flash-tattoos'
  },

  // Aftercare
  {
    id: 'aftercare-products',
    name: 'Aftercare Products',
    description: 'Premium tattoo healing products including balms, cleansers, and protective films for optimal healing.',
    category: 'aftercare',
    priceRange: { min: 15, max: 75, unit: 'fixed' },
    duration: { min: 5, max: 15 },
    popular: false,
    seoKeywords: ['tattoo aftercare dc', 'healing products northern virginia', 'tattoo care maryland'],
    imageAlt: 'Professional tattoo aftercare products and supplies',
    slug: 'aftercare-products'
  },
  {
    id: 'aftercare-consultation',
    name: 'Aftercare Consultation',
    description: 'Follow-up consultation for healing progress, troubleshooting, and long-term tattoo care advice.',
    category: 'aftercare',
    priceRange: { min: 0, max: 50, unit: 'session' },
    duration: { min: 15, max: 30 },
    popular: false,
    seoKeywords: ['tattoo healing advice dc', 'aftercare help northern virginia', 'tattoo care guidance maryland'],
    imageAlt: 'Professional aftercare consultation and guidance',
    slug: 'aftercare-consultation'
  }
];

// Service categories for filtering and organization
export const serviceCategories = [
  {
    id: 'tattoo',
    name: 'Tattoo Services',
    description: 'Professional tattoo application in various styles',
    icon: '🎨'
  },
  {
    id: 'consultation',
    name: 'Consultation Services',
    description: 'Design planning and artistic guidance',
    icon: '💭'
  },
  {
    id: 'specialty',
    name: 'Specialty Services',
    description: 'Specialized tattoo solutions and corrections',
    icon: '⭐'
  },
  {
    id: 'aftercare',
    name: 'Aftercare Services',
    description: 'Healing support and maintenance products',
    icon: '🏥'
  }
];

// Popular services for homepage display
export const popularServices = tattooServices.filter(service => service.popular);

// Get services by category
export const getServicesByCategory = (category: string) => 
  tattooServices.filter(service => service.category === category);

// Get service by slug
export const getServiceBySlug = (slug: string) => 
  tattooServices.find(service => service.slug === slug);