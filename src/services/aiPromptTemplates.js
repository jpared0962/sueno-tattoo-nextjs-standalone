/**
 * Enhanced AI Prompt Templates for Better Tattoo Ideas
 * These templates help Claude generate more specific, actionable tattoo concepts
 */

export const promptTemplates = {
  // Main tattoo idea generation
  tattooIdeas: (userPrompt, context = {}) => {
    const { sessionInterests = [], previousIdeas = [], userLocation = null } = context;
    
    const locationContext = userLocation ? ` The client is from ${userLocation}.` : '';
    const interestContext = sessionInterests.length > 0 
      ? ` They've shown interest in: ${sessionInterests.join(', ')}.` 
      : '';
    
    return `You are a master tattoo concept artist with 15+ years of experience in custom design. A client wants a tattoo representing: "${userPrompt}"

Context:${locationContext}${interestContext}

Generate 3 distinct, professional tattoo concepts that capture this feeling. For each concept, provide:

1. **Visual Description**: Clear, specific imagery (2-3 sentences)
2. **Placement Suggestion**: Best body location and sizing
3. **Style Notes**: Artistic approach (traditional, realism, minimalist, etc.)
4. **Symbolic Meaning**: How it represents their concept

Format as a bulleted list. Be creative but practical - these should be achievable tattoos that a professional artist can execute beautifully.

Avoid generic suggestions. Focus on unique, meaningful designs that tell a story.`;
  },

  // Homepage greeting based on context
  homepageGreeting: (context = {}) => {
    const { location, timeOfDay, userInterests = [] } = context;
    
    const locationPart = location ? ` from ${location}` : '';
    const timePart = timeOfDay ? ` this ${timeOfDay}` : '';
    const interestPart = userInterests.length > 0 
      ? ` Your interest in ${userInterests[0]} caught our attention.` 
      : '';
    
    return `Create a warm, inspiring welcome message for a tattoo website visitor${locationPart}${timePart}. 

Keep it:
- Welcoming but not overly familiar
- Inspiring about tattoo artistry
- Under 30 words
- Encouraging about the creative process

Style: Artistic, authentic, slightly mystical but grounded.${interestPart}

Don't mention specific tattoo styles unless contextually relevant.`;
  },

  // SEO trending topics
  trendingTopics: (season, location) => {
    const seasonContext = season ? ` It's currently ${season}.` : '';
    const locationContext = location ? ` Focus on trends relevant to ${location}.` : '';
    
    return `You are a tattoo industry trend analyst. Generate 3 current tattoo trends with search metrics.${seasonContext}${locationContext}

For each trend, provide:
- Trend name (2-4 words)
- Brief description (one sentence)
- Realistic search volume (format: "2.1k searches")
- Growth percentage (format: "+15%")

Focus on:
- Actually popular styles (not made-up trends)
- Seasonal relevance
- Regional preferences if location provided
- Mix of styles (traditional, modern, cultural)

Format exactly as:
Trend Name
Description here

X.Xk searches
+XX%`;
  },

  // Blog intro personalization
  blogIntro: (articleTitle, userInterests = []) => {
    const interestContext = userInterests.length > 0 
      ? ` They've shown interest in: ${userInterests.join(', ')}.`
      : '';
    
    return `Write a personalized 1-2 sentence intro for a blog post titled "${articleTitle}".${interestContext}

Make it:
- Engaging and relevant to their interests
- Smooth transition into the article topic
- Personal but not invasive
- Encouraging about tattoo exploration

Style: Conversational, knowledgeable, supportive.`;
  },

  // Consultation follow-up suggestions
  consultationSuggestions: (generatedIdea, userPrompt) => {
    return `A client generated this AI tattoo idea: "${generatedIdea}"

Based on their original prompt: "${userPrompt}"

Suggest 3 specific questions a tattoo artist should ask during consultation to refine this concept:

1. One about placement and sizing
2. One about artistic style/technique  
3. One about personal meaning/symbolism

Format as natural conversation starters a professional artist would use.`;
  }
};

/**
 * Enhanced context building for better AI responses
 */
export const buildAIContext = (sessionData, userAgent, timeOfDay) => {
  const context = {
    userInterests: sessionData?.interests || [],
    previousIdeas: sessionData?.generatedIdeas || [],
    timeOfDay,
    userLocation: sessionData?.location ? 
      `${sessionData.location.city}, ${sessionData.location.country}` : null
  };

  // Add device context for better recommendations
  if (userAgent) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    context.deviceType = isMobile ? 'mobile' : 'desktop';
  }

  return context;
};

/**
 * Response enhancement utilities
 */
export const enhanceAIResponse = (response, context = {}) => {
  // Add relevant call-to-action based on response type
  if (response.includes('consultation') || response.includes('artist')) {
    response += '\n\n💬 Ready to discuss these ideas? Schedule a free consultation to explore your vision further.';
  }
  
  if (response.includes('placement') || response.includes('sizing')) {
    response += '\n\n📏 Placement and sizing are crucial for great tattoos. Our artists will help you find the perfect spot.';
  }
  
  return response;
};

/**
 * Prompt optimization based on user behavior
 */
export const optimizePromptForUser = (basePrompt, userBehavior = {}) => {
  const { hasGeneratedIdeas, viewedPages, timeOnSite } = userBehavior;
  
  let optimizedPrompt = basePrompt;
  
  // For returning users, add more sophisticated context
  if (hasGeneratedIdeas) {
    optimizedPrompt += ' This user has previously explored tattoo ideas, so provide more detailed, nuanced suggestions.';
  }
  
  // For users who spend time browsing, assume higher interest
  if (timeOnSite > 300) { // 5+ minutes
    optimizedPrompt += ' This user has shown deep interest in tattoo artistry, so provide professional-level detail.';
  }
  
  return optimizedPrompt;
};
