// Seasonal tattoo data for birth flowers, zodiac signs, and special occasions
export interface BirthFlower {
  month: string;
  flower: string;
  meaning: string;
  season: string;
  colors: string[];
  seoKeywords: string[];
}

export interface ZodiacSign {
  sign: string;
  dates: string;
  element: string;
  symbol: string;
  traits: string[];
  seoKeywords: string[];
}

export interface SeasonalOccasion {
  name: string;
  description: string;
  timeframe: string;
  popularDesigns: string[];
  seoKeywords: string[];
}

export const birthFlowers: BirthFlower[] = [
  {
    month: 'January',
    flower: 'Carnation',
    meaning: 'Love & Fascination',
    season: 'Winter',
    colors: ['Pink', 'Red', 'White'],
    seoKeywords: ['january birth flower tattoo', 'carnation tattoo', 'winter birth flower', 'january tattoo', 'carnation flower tattoo', 'birth flower january', 'winter flower tattoo']
  },
  {
    month: 'February',
    flower: 'Violet',
    meaning: 'Modesty & Faithfulness',
    season: 'Winter',
    colors: ['Purple', 'Blue', 'White'],
    seoKeywords: ['february birth flower tattoo', 'violet tattoo', 'winter birth flower', 'february tattoo', 'violet flower tattoo', 'birth flower february', 'purple flower tattoo']
  },
  {
    month: 'March',
    flower: 'Daffodil',
    meaning: 'New Beginnings',
    season: 'Spring',
    colors: ['Yellow', 'White', 'Orange'],
    seoKeywords: ['march birth flower tattoo', 'daffodil tattoo', 'spring birth flower', 'march tattoo', 'daffodil flower tattoo', 'birth flower march', 'spring flower tattoo', 'new beginnings tattoo']
  },
  {
    month: 'April',
    flower: 'Daisy',
    meaning: 'Purity & Innocence',
    season: 'Spring',
    colors: ['White', 'Yellow', 'Pink'],
    seoKeywords: ['april birth flower tattoo', 'daisy tattoo', 'spring birth flower', 'april tattoo', 'daisy flower tattoo', 'birth flower april', 'daisy chain tattoo', 'purity tattoo']
  },
  {
    month: 'May',
    flower: 'Lily of the Valley',
    meaning: 'Humility & Sweetness',
    season: 'Spring',
    colors: ['White', 'Pink'],
    seoKeywords: ['may birth flower tattoo', 'lily of the valley tattoo', 'spring birth flower', 'may tattoo', 'lily tattoo', 'birth flower may', 'delicate flower tattoo']
  },
  {
    month: 'June',
    flower: 'Rose',
    meaning: 'Love & Passion',
    season: 'Summer',
    colors: ['Red', 'Pink', 'White', 'Yellow'],
    seoKeywords: ['june birth flower tattoo', 'rose tattoo', 'summer birth flower', 'june tattoo', 'rose flower tattoo', 'birth flower june', 'red rose tattoo', 'love tattoo']
  },
  {
    month: 'July',
    flower: 'Larkspur',
    meaning: 'Positivity & Dignity',
    season: 'Summer',
    colors: ['Blue', 'Purple', 'Pink', 'White'],
    seoKeywords: ['july birth flower tattoo', 'larkspur tattoo', 'summer birth flower', 'july tattoo', 'larkspur flower tattoo', 'birth flower july', 'blue flower tattoo']
  },
  {
    month: 'August',
    flower: 'Gladiolus',
    meaning: 'Strength & Integrity',
    season: 'Summer',
    colors: ['Pink', 'Red', 'Orange', 'Yellow', 'Purple'],
    seoKeywords: ['august birth flower tattoo', 'gladiolus tattoo', 'summer birth flower', 'august tattoo', 'gladiolus flower tattoo', 'birth flower august', 'strength tattoo']
  },
  {
    month: 'September',
    flower: 'Aster',
    meaning: 'Wisdom & Valor',
    season: 'Fall',
    colors: ['Purple', 'Pink', 'White', 'Blue'],
    seoKeywords: ['september birth flower tattoo', 'aster tattoo', 'fall birth flower', 'september tattoo', 'aster flower tattoo', 'birth flower september', 'autumn flower tattoo']
  },
  {
    month: 'October',
    flower: 'Marigold',
    meaning: 'Creativity & Warmth',
    season: 'Fall',
    colors: ['Orange', 'Yellow', 'Red'],
    seoKeywords: ['october birth flower tattoo', 'marigold tattoo', 'fall birth flower', 'october tattoo', 'marigold flower tattoo', 'birth flower october', 'orange flower tattoo']
  },
  {
    month: 'November',
    flower: 'Chrysanthemum',
    meaning: 'Loyalty & Honesty',
    season: 'Fall',
    colors: ['Yellow', 'Orange', 'Red', 'Purple', 'White'],
    seoKeywords: ['november birth flower tattoo', 'chrysanthemum tattoo', 'fall birth flower', 'november tattoo', 'chrysanthemum flower tattoo', 'birth flower november', 'mum tattoo']
  },
  {
    month: 'December',
    flower: 'Poinsettia',
    meaning: 'Good Cheer & Success',
    season: 'Winter',
    colors: ['Red', 'White', 'Pink'],
    seoKeywords: ['december birth flower tattoo', 'poinsettia tattoo', 'winter birth flower', 'december tattoo', 'poinsettia flower tattoo', 'birth flower december', 'holiday flower tattoo']
  }
];

export const zodiacSigns: ZodiacSign[] = [
  {
    sign: 'Aquarius',
    dates: 'Jan 20 - Feb 18',
    element: 'Air',
    symbol: '♒',
    traits: ['Independent', 'Humanitarian', 'Innovative'],
    seoKeywords: ['aquarius tattoo', 'aquarius zodiac tattoo', 'water bearer tattoo', 'aquarius symbol tattoo', 'air sign tattoo', 'january zodiac tattoo', 'february zodiac tattoo']
  },
  {
    sign: 'Pisces',
    dates: 'Feb 19 - Mar 20',
    element: 'Water',
    symbol: '♓',
    traits: ['Intuitive', 'Compassionate', 'Artistic'],
    seoKeywords: ['pisces tattoo', 'pisces zodiac tattoo', 'fish tattoo', 'pisces symbol tattoo', 'water sign tattoo', 'february zodiac tattoo', 'march zodiac tattoo']
  },
  {
    sign: 'Aries',
    dates: 'Mar 21 - Apr 19',
    element: 'Fire',
    symbol: '♈',
    traits: ['Bold', 'Energetic', 'Leader'],
    seoKeywords: ['aries tattoo', 'aries zodiac tattoo', 'ram tattoo', 'aries symbol tattoo', 'fire sign tattoo', 'march zodiac tattoo', 'april zodiac tattoo']
  },
  {
    sign: 'Taurus',
    dates: 'Apr 20 - May 20',
    element: 'Earth',
    symbol: '♉',
    traits: ['Reliable', 'Patient', 'Practical'],
    seoKeywords: ['taurus tattoo', 'taurus zodiac tattoo', 'bull tattoo', 'taurus symbol tattoo', 'earth sign tattoo', 'april zodiac tattoo', 'may zodiac tattoo']
  },
  {
    sign: 'Gemini',
    dates: 'May 21 - Jun 20',
    element: 'Air',
    symbol: '♊',
    traits: ['Curious', 'Adaptable', 'Witty'],
    seoKeywords: ['gemini tattoo', 'gemini zodiac tattoo', 'twins tattoo', 'gemini symbol tattoo', 'air sign tattoo', 'may zodiac tattoo', 'june zodiac tattoo']
  },
  {
    sign: 'Cancer',
    dates: 'Jun 21 - Jul 22',
    element: 'Water',
    symbol: '♋',
    traits: ['Nurturing', 'Protective', 'Emotional'],
    seoKeywords: ['cancer tattoo', 'cancer zodiac tattoo', 'crab tattoo', 'cancer symbol tattoo', 'water sign tattoo', 'june zodiac tattoo', 'july zodiac tattoo']
  },
  {
    sign: 'Leo',
    dates: 'Jul 23 - Aug 22',
    element: 'Fire',
    symbol: '♌',
    traits: ['Confident', 'Generous', 'Dramatic'],
    seoKeywords: ['leo tattoo', 'leo zodiac tattoo', 'lion tattoo', 'leo symbol tattoo', 'fire sign tattoo', 'july zodiac tattoo', 'august zodiac tattoo']
  },
  {
    sign: 'Virgo',
    dates: 'Aug 23 - Sep 22',
    element: 'Earth',
    symbol: '♍',
    traits: ['Analytical', 'Practical', 'Loyal'],
    seoKeywords: ['virgo tattoo', 'virgo zodiac tattoo', 'maiden tattoo', 'virgo symbol tattoo', 'earth sign tattoo', 'august zodiac tattoo', 'september zodiac tattoo']
  },
  {
    sign: 'Libra',
    dates: 'Sep 23 - Oct 22',
    element: 'Air',
    symbol: '♎',
    traits: ['Balanced', 'Diplomatic', 'Artistic'],
    seoKeywords: ['libra tattoo', 'libra zodiac tattoo', 'scales tattoo', 'libra symbol tattoo', 'air sign tattoo', 'september zodiac tattoo', 'october zodiac tattoo']
  },
  {
    sign: 'Scorpio',
    dates: 'Oct 23 - Nov 21',
    element: 'Water',
    symbol: '♏',
    traits: ['Intense', 'Passionate', 'Mysterious'],
    seoKeywords: ['scorpio tattoo', 'scorpio zodiac tattoo', 'scorpion tattoo', 'scorpio symbol tattoo', 'water sign tattoo', 'october zodiac tattoo', 'november zodiac tattoo']
  },
  {
    sign: 'Sagittarius',
    dates: 'Nov 22 - Dec 21',
    element: 'Fire',
    symbol: '♐',
    traits: ['Adventurous', 'Optimistic', 'Philosophical'],
    seoKeywords: ['sagittarius tattoo', 'sagittarius zodiac tattoo', 'archer tattoo', 'sagittarius symbol tattoo', 'fire sign tattoo', 'november zodiac tattoo', 'december zodiac tattoo']
  },
  {
    sign: 'Capricorn',
    dates: 'Dec 22 - Jan 19',
    element: 'Earth',
    symbol: '♑',
    traits: ['Ambitious', 'Disciplined', 'Practical'],
    seoKeywords: ['capricorn tattoo', 'capricorn zodiac tattoo', 'goat tattoo', 'capricorn symbol tattoo', 'earth sign tattoo', 'december zodiac tattoo', 'january zodiac tattoo']
  }
];

export const seasonalOccasions: SeasonalOccasion[] = [
  {
    name: 'Graduation Tattoos',
    description: 'Celebrate academic achievements with meaningful graduation tattoos',
    timeframe: 'Spring/Summer (May-August)',
    popularDesigns: ['Birth flowers', 'Zodiac signs', 'Inspirational quotes', 'School mascots', 'Graduation caps', 'Dates'],
    seoKeywords: ['graduation tattoo', 'graduation tattoo ideas', 'school graduation tattoo', 'college graduation tattoo', 'graduation gift tattoo', 'achievement tattoo', 'milestone tattoo']
  },
  {
    name: 'Birthday Tattoos',
    description: 'Personal birth flower and zodiac sign tattoos for birthday celebrations',
    timeframe: 'Year-Round',
    popularDesigns: ['Birth flowers', 'Zodiac signs', 'Birth dates', 'Astrological symbols', 'Constellation tattoos'],
    seoKeywords: ['birthday tattoo', 'birthday gift tattoo', 'birthday month tattoo', 'birthday flower tattoo', 'birthday zodiac tattoo', 'birthday celebration tattoo']
  },
  {
    name: 'Anniversary Tattoos',
    description: 'Romantic couples tattoos featuring birth flowers and zodiac compatibility',
    timeframe: 'Year-Round (Valentine\'s Day peak)',
    popularDesigns: ['Matching birth flowers', 'Zodiac compatibility', 'Anniversary dates', 'Couple constellations'],
    seoKeywords: ['anniversary tattoo', 'couple tattoo', 'matching tattoo', 'romantic tattoo', 'valentine tattoo', 'love tattoo', 'relationship tattoo']
  },
  {
    name: 'Spring Tattoos',
    description: 'Fresh seasonal designs celebrating renewal and growth',
    timeframe: 'March-May',
    popularDesigns: ['Spring flowers', 'Cherry blossoms', 'Butterflies', 'New growth', 'Pastel colors'],
    seoKeywords: ['spring tattoo', 'spring flower tattoo', 'cherry blossom tattoo', 'easter tattoo', 'spring break tattoo', 'renewal tattoo', 'growth tattoo']
  },
  {
    name: 'Summer Tattoos',
    description: 'Vibrant summer designs perfect for vacation and outdoor activities',
    timeframe: 'June-August',
    popularDesigns: ['Summer flowers', 'Sun symbols', 'Beach themes', 'Vacation memories', 'Bright colors'],
    seoKeywords: ['summer tattoo', 'summer flower tattoo', 'vacation tattoo', 'beach tattoo', 'sun tattoo', 'summer solstice tattoo', 'tropical tattoo']
  },
  {
    name: 'Fall Tattoos',
    description: 'Autumn-inspired designs with warm colors and harvest themes',
    timeframe: 'September-November',
    popularDesigns: ['Fall flowers', 'Autumn leaves', 'Harvest themes', 'Warm colors', 'Halloween designs'],
    seoKeywords: ['fall tattoo', 'autumn tattoo', 'fall flower tattoo', 'halloween tattoo', 'thanksgiving tattoo', 'harvest tattoo', 'autumn leaves tattoo']
  },
  {
    name: 'Winter Tattoos',
    description: 'Winter solstice and holiday-themed designs',
    timeframe: 'December-February',
    popularDesigns: ['Winter flowers', 'Snowflakes', 'Holiday themes', 'New Year designs', 'Constellation tattoos'],
    seoKeywords: ['winter tattoo', 'winter flower tattoo', 'holiday tattoo', 'christmas tattoo', 'new year tattoo', 'winter solstice tattoo', 'snowflake tattoo']
  }
];

// Helper functions for SEO
export const getAllSeasonalKeywords = (): string[] => {
  const birthFlowerKeywords = birthFlowers.flatMap(flower => flower.seoKeywords);
  const zodiacKeywords = zodiacSigns.flatMap(sign => sign.seoKeywords);
  const occasionKeywords = seasonalOccasions.flatMap(occasion => occasion.seoKeywords);
  
  return [...birthFlowerKeywords, ...zodiacKeywords, ...occasionKeywords];
};

export const getBirthFlowerByMonth = (month: string): BirthFlower | undefined => {
  return birthFlowers.find(flower => flower.month.toLowerCase() === month.toLowerCase());
};

export const getZodiacByDate = (date: Date): ZodiacSign | undefined => {
  // Simple date range matching - in production, use proper date parsing
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // This is a simplified version - you'd want more robust date matching
  return zodiacSigns.find(sign => {
    // Add date range logic here
    return true; // Placeholder
  });
};

export const getCurrentSeasonalOccasions = (): SeasonalOccasion[] => {
  const currentMonth = new Date().getMonth() + 1;
  
  // Return relevant seasonal occasions based on current month
  if (currentMonth >= 3 && currentMonth <= 5) {
    return seasonalOccasions.filter(occasion => 
      occasion.name.includes('Spring') || occasion.name.includes('Graduation')
    );
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    return seasonalOccasions.filter(occasion => 
      occasion.name.includes('Summer') || occasion.name.includes('Graduation')
    );
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    return seasonalOccasions.filter(occasion => 
      occasion.name.includes('Fall')
    );
  } else {
    return seasonalOccasions.filter(occasion => 
      occasion.name.includes('Winter')
    );
  }
};