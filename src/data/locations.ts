// Location-based SEO data for DMV area targeting
export interface LocationData {
  id: string;
  name: string;
  state: string;
  region: 'dc' | 'northern-virginia' | 'maryland';
  slug: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  demographics: {
    population: number;
    medianAge: number;
    medianIncome: number;
    artsCommunity: 'high' | 'medium' | 'low';
  };
  seoData: {
    title: string;
    description: string;
    keywords: string[];
    h1: string;
    localKeywords: string[];
  };
  nearbyLandmarks: string[];
  transportationHubs: string[];
  targetAudience: string[];
  competitorDensity: 'high' | 'medium' | 'low';
  marketPotential: 'high' | 'medium' | 'low';
  specialConsiderations: string[];
}

export const dmvLocations: LocationData[] = [
  // Washington DC Locations
  {
    id: 'dupont-circle-dc',
    name: 'Dupont Circle',
    state: 'DC',
    region: 'dc',
    slug: 'dupont-circle',
    coordinates: { latitude: 38.9097, longitude: -77.0436 },
    demographics: {
      population: 15000,
      medianAge: 32,
      medianIncome: 95000,
      artsCommunity: 'high'
    },
    seoData: {
      title: 'Best Tattoo Shop Dupont Circle DC | Custom Tattoos | Sueño Tattoo',
      description: 'Premier tattoo studio in Dupont Circle, Washington DC. Custom designs, traditional tattoos, and fine line work. Walk-ins welcome. Metro accessible location.',
      keywords: ['tattoo shop dupont circle', 'custom tattoos dupont circle dc', 'best tattoo artist dupont circle'],
      h1: 'Professional Tattoo Shop in Dupont Circle, Washington DC',
      localKeywords: ['dupont circle tattoo', 'dc tattoo parlor', 'washington tattoo studio']
    },
    nearbyLandmarks: ['Dupont Circle Metro', 'Phillips Collection', 'Anderson House'],
    transportationHubs: ['Dupont Circle Metro (Red Line)', 'Multiple bus routes'],
    targetAudience: ['Young professionals', 'Art enthusiasts', 'Embassy workers', 'Graduate students'],
    competitorDensity: 'medium',
    marketPotential: 'high',
    specialConsiderations: ['High foot traffic area', 'Affluent demographic', 'Arts-friendly community']
  },
  {
    id: 'adams-morgan-dc',
    name: 'Adams Morgan',
    state: 'DC',
    region: 'dc',
    slug: 'adams-morgan',
    coordinates: { latitude: 38.9222, longitude: -77.0429 },
    demographics: {
      population: 12000,
      medianAge: 28,
      medianIncome: 78000,
      artsCommunity: 'high'
    },
    seoData: {
      title: 'Adams Morgan Tattoo Studio | Creative Custom Tattoos | Sueño Tattoo DC',
      description: 'Artistic tattoo studio in Adams Morgan, DC. Specializing in creative designs, cover-ups, and traditional work. Part of DC\'s vibrant arts scene.',
      keywords: ['adams morgan tattoo', 'creative tattoos adams morgan', 'dc arts district tattoo'],
      h1: 'Creative Tattoo Studio in Adams Morgan, Washington DC',
      localKeywords: ['adams morgan tattoo shop', 'dc nightlife tattoo', 'creative district tattoo']
    },
    nearbyLandmarks: ['Adams Morgan Main Strip', 'Meridian Hill Park', 'National Zoo'],
    transportationHubs: ['Woodley Park Metro', 'Columbia Heights Metro', 'Multiple bus lines'],
    targetAudience: ['Artists', 'Musicians', 'Creative professionals', 'Night life crowd'],
    competitorDensity: 'high',
    marketPotential: 'high',
    specialConsiderations: ['Vibrant nightlife area', 'Arts community hub', 'Weekend tourist traffic']
  },
  {
    id: 'georgetown-dc',
    name: 'Georgetown',
    state: 'DC',
    region: 'dc',
    slug: 'georgetown',
    coordinates: { latitude: 38.9076, longitude: -77.0723 },
    demographics: {
      population: 18000,
      medianAge: 24,
      medianIncome: 120000,
      artsCommunity: 'medium'
    },
    seoData: {
      title: 'Georgetown Tattoo Shop | Upscale Tattoo Studio | Sueño Tattoo DC',
      description: 'Premium tattoo services in Georgetown, Washington DC. High-end custom tattoos near Georgetown University. Professional artists, sterile environment.',
      keywords: ['georgetown tattoo', 'upscale tattoo georgetown', 'georgetown university tattoo'],
      h1: 'Premium Tattoo Studio in Georgetown, Washington DC',
      localKeywords: ['georgetown tattoo shop', 'high end tattoo dc', 'university tattoo georgetown']
    },
    nearbyLandmarks: ['Georgetown University', 'M Street Shopping', 'Georgetown Waterfront'],
    transportationHubs: ['Georgetown Metro Connector', 'Multiple bus routes', 'Water taxi'],
    targetAudience: ['University students', 'Affluent residents', 'Tourists', 'Young professionals'],
    competitorDensity: 'low',
    marketPotential: 'high',
    specialConsiderations: ['High-income area', 'University population', 'Tourist destination']
  },
  {
    id: 'capitol-hill-dc',
    name: 'Capitol Hill',
    state: 'DC',
    region: 'dc',
    slug: 'capitol-hill',
    coordinates: { latitude: 38.8866, longitude: -76.9962 },
    demographics: {
      population: 35000,
      medianAge: 35,
      medianIncome: 85000,
      artsCommunity: 'medium'
    },
    seoData: {
      title: 'Capitol Hill Tattoo Studio | Professional Tattoos Near Congress | Sueño Tattoo',
      description: 'Professional tattoo studio on Capitol Hill, DC. Serving government workers, residents, and visitors. Custom designs and traditional work.',
      keywords: ['capitol hill tattoo', 'government worker tattoo dc', 'congress tattoo studio'],
      h1: 'Professional Tattoo Studio on Capitol Hill, Washington DC',
      localKeywords: ['capitol hill tattoo shop', 'government district tattoo', 'eastern market tattoo']
    },
    nearbyLandmarks: ['US Capitol Building', 'Eastern Market', 'Supreme Court'],
    transportationHubs: ['Capitol South Metro', 'Eastern Market Metro', 'Union Station'],
    targetAudience: ['Government workers', 'Political staff', 'Residents', 'Tourists'],
    competitorDensity: 'low',
    marketPotential: 'medium',
    specialConsiderations: ['Government worker clientele', 'Professional environment', 'Security considerations']
  },

  // Northern Virginia Locations
  {
    id: 'arlington-va',
    name: 'Arlington',
    state: 'VA',
    region: 'northern-virginia',
    slug: 'arlington',
    coordinates: { latitude: 38.8816, longitude: -77.0910 },
    demographics: {
      population: 230000,
      medianAge: 33,
      medianIncome: 120000,
      artsCommunity: 'medium'
    },
    seoData: {
      title: 'Arlington VA Tattoo Shop | Custom Tattoos Northern Virginia | Sueño Tattoo',
      description: 'Top-rated tattoo studio in Arlington, Virginia. Custom designs, cover-ups, and traditional work. Serving Northern Virginia and DC metro area.',
      keywords: ['arlington va tattoo', 'northern virginia tattoo shop', 'custom tattoos arlington'],
      h1: 'Premier Tattoo Studio in Arlington, Northern Virginia',
      localKeywords: ['arlington tattoo artist', 'nova tattoo shop', 'clarendon tattoo']
    },
    nearbyLandmarks: ['Pentagon', 'Arlington Cemetery', 'Clarendon Metro'],
    transportationHubs: ['Multiple Metro lines', 'Pentagon Metro hub', 'Reagan National Airport'],
    targetAudience: ['Government contractors', 'Military personnel', 'Young professionals', 'Commuters'],
    competitorDensity: 'medium',
    marketPotential: 'high',
    specialConsiderations: ['High-income area', 'Military-friendly', 'Metro accessible']
  },
  {
    id: 'alexandria-va',
    name: 'Alexandria',
    state: 'VA',
    region: 'northern-virginia',
    slug: 'alexandria',
    coordinates: { latitude: 38.8048, longitude: -77.0469 },
    demographics: {
      population: 160000,
      medianAge: 37,
      medianIncome: 95000,
      artsCommunity: 'medium'
    },
    seoData: {
      title: 'Alexandria VA Tattoo Studio | Old Town Tattoos | Sueño Tattoo Northern Virginia',
      description: 'Historic Alexandria tattoo studio near Old Town. Custom tattoo designs, traditional work, and fine line tattoos in Northern Virginia.',
      keywords: ['alexandria va tattoo', 'old town alexandria tattoo', 'historic district tattoo'],
      h1: 'Historic Alexandria Tattoo Studio in Northern Virginia',
      localKeywords: ['old town tattoo', 'alexandria tattoo shop', 'waterfront tattoo alexandria']
    },
    nearbyLandmarks: ['Old Town Alexandria', 'King Street Metro', 'Potomac Waterfront'],
    transportationHubs: ['King Street Metro', 'Multiple bus routes', 'Water taxi'],
    targetAudience: ['Historic district visitors', 'Professionals', 'Residents', 'Tourists'],
    competitorDensity: 'low',
    marketPotential: 'medium',
    specialConsiderations: ['Historic preservation area', 'Tourist destination', 'Waterfront location']
  },
  {
    id: 'fairfax-va',
    name: 'Fairfax',
    state: 'VA',
    region: 'northern-virginia',
    slug: 'fairfax',
    coordinates: { latitude: 38.8462, longitude: -77.3064 },
    demographics: {
      population: 24000,
      medianAge: 35,
      medianIncome: 105000,
      artsCommunity: 'low'
    },
    seoData: {
      title: 'Fairfax VA Tattoo Shop | University Town Tattoos | Sueño Tattoo Northern Virginia',
      description: 'Professional tattoo studio in Fairfax, Virginia. Serving George Mason University students and Fairfax County residents with custom designs.',
      keywords: ['fairfax va tattoo', 'george mason university tattoo', 'fairfax county tattoo'],
      h1: 'Professional Tattoo Studio in Fairfax, Northern Virginia',
      localKeywords: ['fairfax tattoo shop', 'gmu tattoo', 'fairfax city tattoo']
    },
    nearbyLandmarks: ['George Mason University', 'Fairfax City Hall', 'Fair Oaks Mall'],
    transportationHubs: ['Fairfax Connector buses', 'University shuttle', 'Multiple commuter routes'],
    targetAudience: ['University students', 'Suburban families', 'Commuters', 'Faculty'],
    competitorDensity: 'low',
    marketPotential: 'medium',
    specialConsiderations: ['University population', 'Suburban setting', 'Family-oriented community']
  },

  // Maryland Locations
  {
    id: 'bethesda-md',
    name: 'Bethesda',
    state: 'MD',
    region: 'maryland',
    slug: 'bethesda',
    coordinates: { latitude: 38.9847, longitude: -77.0947 },
    demographics: {
      population: 65000,
      medianAge: 38,
      medianIncome: 140000,
      artsCommunity: 'medium'
    },
    seoData: {
      title: 'Bethesda MD Tattoo Studio | Upscale Tattoos Montgomery County | Sueño Tattoo',
      description: 'Luxury tattoo studio in Bethesda, Maryland. Serving medical professionals and affluent Montgomery County residents with custom artwork.',
      keywords: ['bethesda md tattoo', 'montgomery county tattoo', 'upscale tattoo bethesda'],
      h1: 'Luxury Tattoo Studio in Bethesda, Montgomery County Maryland',
      localKeywords: ['bethesda tattoo shop', 'medical district tattoo', 'nih tattoo bethesda']
    },
    nearbyLandmarks: ['NIH Campus', 'Bethesda Metro', 'Walter Reed Medical Center'],
    transportationHubs: ['Bethesda Metro (Red Line)', 'Medical Center Metro', 'Multiple bus routes'],
    targetAudience: ['Medical professionals', 'Researchers', 'Affluent residents', 'Government workers'],
    competitorDensity: 'low',
    marketPotential: 'high',
    specialConsiderations: ['High-income area', 'Medical community', 'Professional clientele']
  },
  {
    id: 'silver-spring-md',
    name: 'Silver Spring',
    state: 'MD',
    region: 'maryland',
    slug: 'silver-spring',
    coordinates: { latitude: 38.9906, longitude: -77.0261 },
    demographics: {
      population: 80000,
      medianAge: 34,
      medianIncome: 75000,
      artsCommunity: 'high'
    },
    seoData: {
      title: 'Silver Spring MD Tattoo Shop | Diverse Community Tattoos | Sueño Tattoo Maryland',
      description: 'Inclusive tattoo studio in Silver Spring, Maryland. Celebrating diversity through custom tattoo art. Metro accessible location.',
      keywords: ['silver spring md tattoo', 'diverse tattoo silver spring', 'maryland tattoo studio'],
      h1: 'Inclusive Tattoo Studio in Silver Spring, Montgomery County Maryland',
      localKeywords: ['silver spring tattoo shop', 'downtown silver spring tattoo', 'multicultural tattoo']
    },
    nearbyLandmarks: ['Silver Spring Metro', 'Downtown Silver Spring', 'AFI Silver Theatre'],
    transportationHubs: ['Silver Spring Metro (Red Line)', 'Transit center', 'Multiple bus lines'],
    targetAudience: ['Diverse community', 'Young professionals', 'Artists', 'Commuters'],
    competitorDensity: 'medium',
    marketPotential: 'high',
    specialConsiderations: ['Diverse population', 'Transit hub', 'Growing arts scene']
  },
  {
    id: 'college-park-md',
    name: 'College Park',
    state: 'MD',
    region: 'maryland',
    slug: 'college-park',
    coordinates: { latitude: 38.9897, longitude: -76.9378 },
    demographics: {
      population: 32000,
      medianAge: 22,
      medianIncome: 45000,
      artsCommunity: 'high'
    },
    seoData: {
      title: 'College Park MD Tattoo Shop | University of Maryland Tattoos | Sueño Tattoo',
      description: 'Student-friendly tattoo studio near University of Maryland. Custom designs, flash tattoos, and affordable options for college students.',
      keywords: ['college park md tattoo', 'university of maryland tattoo', 'student tattoo college park'],
      h1: 'Student-Friendly Tattoo Studio in College Park, Maryland',
      localKeywords: ['umd tattoo', 'college park tattoo shop', 'student discount tattoo']
    },
    nearbyLandmarks: ['University of Maryland', 'College Park Metro', 'M-Square Research Park'],
    transportationHubs: ['College Park Metro (Green/Yellow Line)', 'University shuttle', 'Campus bus system'],
    targetAudience: ['University students', 'Faculty', 'Young adults', 'Recent graduates'],
    competitorDensity: 'medium',
    marketPotential: 'medium',
    specialConsiderations: ['Student population', 'Price-sensitive market', 'Seasonal business']
  }
];

// Helper functions for location data
export const getLocationsByRegion = (region: string) => 
  dmvLocations.filter(location => location.region === region);

export const getLocationBySlug = (slug: string) => 
  dmvLocations.find(location => location.slug === slug);

export const getHighPotentialMarkets = () => 
  dmvLocations.filter(location => location.marketPotential === 'high');

export const getLocationsByState = (state: string) => 
  dmvLocations.filter(location => location.state === state);

// SEO-focused location groups
export const dcLocations = getLocationsByRegion('dc');
export const virginiaLocations = getLocationsByRegion('northern-virginia');
export const marylandLocations = getLocationsByRegion('maryland');