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
    seoKeywords: ['custom tattoo design', 'personalized tattoo art', 'unique tattoo washington', 'custom tattoo Laurel MD', 'custom fine line tattoos', 'custom minimalist tattoos', 'custom geometric tattoos', 'custom watercolor tattoos', 'custom portrait tattoos', 'custom botanical tattoos', 'custom memorial tattoos', 'custom script tattoos', 'custom sleeve design', 'custom forearm tattoos', 'custom back piece', 'custom chest tattoos', 'custom small tattoos', 'custom large tattoos', 'custom tattoo consultation', 'original tattoo designs', 'bespoke tattoo design', 'custom tattoo planning', 'individual tattoo design', 'custom tattoo prices', 'custom tattoo cost', 'custom design fee', 'custom tattoo hourly rate', 'first tattoo experience', 'professional tattoo consultation', 'affordable custom tattoo', 'tattoo pricing consultation', 'tattoo artist available today', 'how to get a custom tattoo designed', 'custom tattoo design process', 'personalized tattoo ideas', 'unique tattoo concepts'],
    imageAlt: 'Custom tattoo design consultation at Sueño Tattoo Washington DC',
    slug: 'custom-tattoos'
  },
  {
    id: 'traditional-tattoo',
    name: 'American Traditional Tattoos',
    description: 'Classic American Traditional and Old School tattoo styles with bold lines, solid colors, and timeless designs.',
    category: 'tattoo',
    priceRange: { min: 100, max: 400, unit: 'session' },
    duration: { min: 60, max: 300 },
    popular: true,
    seoKeywords: ['american traditional tattoo Laurel MD', 'american traditional tattoos', 'old school tattoo maryland', 'traditional American tattoos', 'american traditional flash tattoos', 'american traditional sleeve tattoos', 'american traditional forearm tattoos', 'american traditional back tattoos', 'american traditional chest tattoos', 'american traditional small tattoos', 'american traditional large tattoos', 'american traditional tattoo artist', 'american traditional tattoo prices', 'american traditional tattoo cost', 'american traditional tattoo style', 'american traditional flash', 'american traditional tattoo designs', 'american traditional tattoo portfolio', 'american traditional tattoo consultation', 'american traditional tattoo booking', 'painless tattoo techniques', 'summer tattoo prep', 'graduation tattoo design', 'why choose sueno tattoo', 'best tattoo shop laurel md', 'vs other tattoo shops', 'american traditional tattoo artist Laurel MD', 'professional american traditional tattoos', 'authentic american traditional tattoos', 'classic american traditional tattoo work'],
    imageAlt: 'American Traditional style tattoo work by Sueño Tattoo artists',
    slug: 'traditional'
  },
  {
    id: 'fine-line-tattoo',
    name: 'Fine Line Tattoos',
    description: 'Delicate, detailed tattoos with thin lines and subtle shading. Perfect for minimalist designs and intricate artwork.',
    category: 'tattoo',
    priceRange: { min: 100, max: 350, unit: 'session' },
    duration: { min: 90, max: 240 },
    popular: true,
    seoKeywords: ['fine line tattoo Laurel MD', 'minimalist tattoo maryland', 'delicate tattoo Laurel', 'fine line tattoo services', 'minimalist tattoo services', 'fine line tattoo portfolio', 'minimalist tattoo examples', 'fine line sleeve tattoos', 'minimalist forearm tattoos', 'fine line back tattoos', 'minimalist chest tattoos', 'fine line small tattoos', 'minimalist wrist tattoos', 'fine line ankle tattoos', 'minimalist shoulder tattoos', 'fine line tattoo artist', 'minimalist tattoo artist', 'fine line tattoo prices', 'minimalist tattoo cost', 'fine line tattoo consultation', 'minimalist tattoo booking', 'first tattoo experience', 'small tattoo design', 'professional fine line work', 'vacation tattoo preparation', 'discrete tattoo placement', 'delicate tattoo work', 'subtle tattoo designs', 'elegant fine line tattoos'],
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
    seoKeywords: ['tattoo cover up Laurel MD', 'cover up specialist maryland', 'tattoo fix Laurel', 'cover-up tattoos', 'tattoo cover up services', 'cover-up specialist', 'tattoo rework', 'fix bad tattoo', 'tattoo restoration', 'tattoo refresh', 'cover up consultation', 'tattoo transformation', 'cover up portfolio', 'cover up examples', 'cover up sleeve tattoos', 'cover up forearm tattoos', 'cover up back tattoos', 'cover up chest tattoos', 'cover up prices', 'cover up cost', 'emergency tattoo consultation', 'tattoo repair service', 'regret tattoo solution', 'cover up expert laurel md', 'tattoo transformation specialist', 'professional cover up work', 'cover up artist Laurel MD', 'tattoo coverup consultation', 'cover up tattoo booking'],
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
    seoKeywords: ['neo traditional tattoo Laurel MD', 'modern tattoo maryland', 'contemporary tattoo Laurel', 'neo traditional tattoos', 'modern traditional tattoos', 'contemporary tattoo style', 'enhanced traditional tattoos', 'neo traditional portraits', 'neo traditional animals', 'neo traditional flowers', 'neo traditional geometric', 'neo traditional sleeve', 'neo traditional forearm', 'neo traditional back piece', 'neo traditional chest', 'neo traditional shoulder', 'neo traditional leg', 'enhanced color tattoos', 'dimensional tattoos', 'artistic tattoo style', 'contemporary tattoo art', 'modern tattoo techniques', 'stylized tattoos', 'what is neo traditional tattoo style', 'neo traditional vs traditional tattoos', 'modern traditional tattoo artist', 'contemporary tattoo style artist', 'neo traditional tattoo services', 'neo traditional tattoo portfolio'],
    imageAlt: 'Neo-traditional tattoo design with vibrant colors',
    slug: 'neo-traditional'
  },
  {
    id: 'black-grey-tattoo',
    name: 'Black & Grey Tattoos',
    description: 'Stunning monochromatic tattoos using various shades of black and grey for realistic and artistic effects.',
    category: 'tattoo',
    priceRange: { min: 100, max: 450, unit: 'session' },
    duration: { min: 90, max: 300 },
    popular: false,
    seoKeywords: ['black grey tattoo Laurel MD', 'monochrome tattoo maryland', 'realistic tattoo Laurel', 'black and grey tattoos', 'realistic tattoos', 'portrait tattoo specialist', 'realism tattoo artist', 'black and grey shading expert', 'professional portrait work', 'black grey sleeve tattoos', 'realistic forearm tattoos', 'portrait back tattoos', 'black grey chest tattoos', 'realistic small tattoos', 'portrait large tattoos', 'black grey tattoo services', 'realistic tattoo services', 'portrait tattoo services', 'black grey tattoo portfolio', 'realistic tattoo examples', 'portrait tattoo gallery', 'black grey tattoo prices', 'realistic tattoo cost', 'portrait tattoo consultation', 'wedding tattoo commemoration', 'memorial portrait tattoos', 'realistic animal tattoos', 'black grey botanical tattoos'],
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
    seoKeywords: ['memorial tattoo Laurel MD', 'tribute tattoo maryland', 'remembrance tattoo Laurel', 'memorial tattoos', 'tribute tattoos', 'remembrance tattoos', 'memorial tattoo services', 'tribute tattoo services', 'memorial tattoo portfolio', 'tribute tattoo examples', 'memorial sleeve tattoos', 'tribute forearm tattoos', 'memorial back tattoos', 'tribute chest tattoos', 'memorial small tattoos', 'tribute large tattoos', 'memorial tattoo artist', 'tribute tattoo artist', 'memorial tattoo prices', 'tribute tattoo cost', 'memorial tattoo consultation', 'tribute tattoo booking', 'meaningful memorial tattoos', 'personalized tribute tattoos', 'custom memorial designs', 'professional memorial tattoos', 'sensitive memorial tattoo work'],
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
    seoKeywords: ['scar cover tattoo Laurel MD', 'scar camouflage maryland', 'medical tattoo Laurel', 'scar cover-up tattoos', 'scar camouflage tattoos', 'medical tattoo services', 'scar cover tattoo services', 'scar camouflage services', 'scar cover tattoo portfolio', 'scar camouflage examples', 'scar cover sleeve tattoos', 'scar camouflage forearm tattoos', 'scar cover back tattoos', 'scar camouflage chest tattoos', 'scar cover small tattoos', 'scar camouflage large tattoos', 'scar cover tattoo artist', 'scar camouflage artist', 'scar cover tattoo prices', 'scar camouflage cost', 'scar cover tattoo consultation', 'scar camouflage booking', 'medical scar tattoos', 'surgical scar cover tattoos', 'burn scar tattoos', 'accident scar tattoos'],
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
    seoKeywords: ['tattoo touch up Laurel MD', 'tattoo refresh maryland', 'tattoo restoration Laurel', 'tattoo touch ups', 'tattoo refresh services', 'tattoo restoration services', 'tattoo touch up services', 'tattoo refresh portfolio', 'tattoo restoration examples', 'tattoo touch up prices', 'tattoo refresh cost', 'tattoo restoration consultation', 'tattoo touch up booking', 'tattoo maintenance', 'tattoo care services', 'tattoo healing touch ups', 'color tattoo touch ups', 'black grey tattoo touch ups', 'fine line tattoo touch ups', 'traditional tattoo touch ups', 'custom tattoo touch ups', 'professional tattoo touch ups', 'expert tattoo restoration', 'tattoo touch up artist', 'tattoo refresh artist', 'tattoo restoration artist'],
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
    seoKeywords: ['watercolor tattoo Laurel MD', 'artistic tattoo maryland', 'colorful tattoo Laurel', 'watercolor tattoos', 'artistic tattoos', 'colorful tattoos', 'watercolor tattoo services', 'artistic tattoo services', 'watercolor tattoo portfolio', 'artistic tattoo examples', 'watercolor sleeve tattoos', 'artistic forearm tattoos', 'watercolor back tattoos', 'artistic chest tattoos', 'watercolor small tattoos', 'artistic large tattoos', 'watercolor tattoo artist', 'artistic tattoo artist', 'watercolor tattoo prices', 'artistic tattoo cost', 'watercolor tattoo consultation', 'artistic tattoo booking', 'trendy tattoo styles', 'modern tattoo techniques', 'unique color work', 'artistic watercolor design', 'vibrant watercolor tattoos', 'fluid color tattoos', 'abstract watercolor tattoos'],
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
    seoKeywords: ['geometric tattoo Laurel MD', 'mandala tattoo maryland', 'sacred geometry Laurel', 'geometric tattoos', 'mandala tattoos', 'sacred geometry tattoos', 'geometric tattoo services', 'mandala tattoo services', 'geometric tattoo portfolio', 'mandala tattoo examples', 'geometric sleeve tattoos', 'mandala forearm tattoos', 'geometric back tattoos', 'mandala chest tattoos', 'geometric small tattoos', 'mandala large tattoos', 'geometric tattoo artist', 'mandala tattoo artist', 'geometric tattoo prices', 'mandala tattoo cost', 'geometric tattoo consultation', 'mandala tattoo booking', 'precision tattoo work', 'mathematical tattoo design', 'symmetrical tattoo art', 'modern geometric patterns', 'sacred geometry designs', 'geometric tattoo specialist', 'mandala tattoo specialist'],
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
    seoKeywords: ['free tattoo consultation Laurel MD', 'tattoo advice maryland', 'tattoo planning Laurel', 'book tattoo consultation', 'free tattoo consultation', 'schedule tattoo consultation', 'tattoo consultation booking', 'consultation appointment', 'design consultation', 'custom tattoo consultation', 'cover-up consultation', 'memorial tattoo consultation', 'first tattoo consultation', 'touch up consultation', 'restoration consultation', 'same day consultation', 'urgent tattoo consultation', 'weekend consultation', 'evening consultation', 'walk in consultation', 'last minute consultation', 'how to book a tattoo consultation', 'professional tattoo consultation process', 'schedule tattoo design consultation', 'painless tattoo consultation', 'professional tattoo advice', 'tattoo for professionals', 'emergency tattoo consultation', 'tattoo anxiety help', 'tattoo planning session'],
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
    seoKeywords: ['tattoo design service Laurel MD', 'custom artwork maryland', 'tattoo sketch Laurel', 'design development', 'tattoo design services', 'custom tattoo artwork', 'tattoo sketch services', 'design development services', 'tattoo design portfolio', 'custom artwork examples', 'tattoo sketch gallery', 'design development prices', 'custom artwork cost', 'tattoo sketch consultation', 'design development booking', 'wedding tattoo design', 'couple tattoo planning', 'anniversary tattoo sketch', 'graduation tattoo design', 'special occasion tattoo', 'personalized tattoo design', 'original tattoo artwork', 'bespoke tattoo sketches', 'professional tattoo design', 'expert tattoo artwork'],
    imageAlt: 'Tattoo design development and sketching process',
    slug: 'design-development'
  },

  // Flash & Walk-ins
  {
    id: 'flash-tattoo',
    name: 'Flash Tattoos',
    description: 'Pre-designed tattoo options available for same-day appointments. Quick, affordable, and professionally executed.',
    category: 'tattoo',
    priceRange: { min: 100, max: 250, unit: 'fixed' },
    duration: { min: 30, max: 120 },
    popular: true,
    seoKeywords: ['flash tattoo Laurel MD', 'walk in tattoo maryland', 'same day tattoo Laurel', 'flash tattoos', 'walk in tattoos', 'same day tattoos', 'traditional flash tattoos', 'american traditional flash', 'fine line flash designs', 'minimalist flash tattoos', 'small flash tattoos', 'quick flash designs', 'flash sleeve tattoos', 'flash forearm designs', 'small flash tattoos', 'flash wrist tattoos', 'flash ankle tattoos', 'flash shoulder designs', 'same day flash tattoos', 'walk in flash tattoos', 'last minute flash tattoos', 'quick flash appointments', 'flash tattoos today', 'instant flash tattoos', 'flash tattoo prices', 'affordable flash tattoos', 'flash tattoo cost', 'cheap flash tattoos', 'flash tattoo deals', 'budget flash tattoos', 'flash tattoos near me', 'same day flash tattoos', 'quick small tattoos', 'ready made tattoo designs', 'tattoo artist available today', 'quick tattoo service', 'last minute tattoo appointment', 'vacation tattoo session'],
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
    seoKeywords: ['tattoo aftercare Laurel MD', 'healing products maryland', 'tattoo care Laurel', 'tattoo aftercare products', 'tattoo healing products', 'aftercare products', 'tattoo aftercare guide', 'tattoo healing process', 'tattoo care instructions', 'proper tattoo care', 'tattoo healing timeline', 'tattoo maintenance', 'tattoo aftercare tips', 'professional aftercare advice', 'new tattoo care', 'fresh tattoo aftercare', 'tattoo healing stages', 'tattoo scabbing', 'tattoo peeling', 'tattoo itching', 'tattoo fading', 'tattoo healing balm', 'tattoo moisturizer', 'tattoo soap', 'tattoo lotion', 'aftercare cream', 'healing ointment', 'tattoo infection signs', 'tattoo healing problems', 'tattoo not healing', 'tattoo aftercare mistakes'],
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
    seoKeywords: ['tattoo healing advice Laurel MD', 'aftercare help maryland', 'tattoo care guidance Laurel', 'aftercare consultation', 'tattoo healing consultation', 'aftercare help', 'tattoo care guidance', 'aftercare consultation services', 'tattoo healing advice', 'aftercare consultation portfolio', 'tattoo healing examples', 'aftercare consultation prices', 'tattoo healing cost', 'aftercare consultation booking', 'tattoo healing booking', 'professional aftercare consultation', 'expert tattoo healing advice', 'tattoo care specialist', 'aftercare expert', 'tattoo healing expert', 'tattoo maintenance consultation', 'tattoo care follow up', 'aftercare guidance', 'tattoo healing support', 'aftercare troubleshooting', 'tattoo healing problems help', 'aftercare consultation appointment'],
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