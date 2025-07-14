import Anthropic from '@anthropic-ai/sdk';

class PersonalizationService {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY,
    });
  }

  /**
   * Generate personalized homepage greeting based on location and user context
   */
  async generateHomepageGreeting(context = {}) {
    const { location, userInterests, timeOfDay } = context;
    
    const prompt = `Create a welcoming greeting for Sueno Tattoo visitors ${location ? `from ${location}` : ''}.
    
    Write a brief, friendly greeting (1-2 sentences) about art and personal expression.
    Write only the greeting, no meta-commentary.`;

    try {
      const message = await this.anthropic.messages.create({
        model: 'claude-3-haiku-20240307',
        max_tokens: 150,
        messages: [{ role: 'user', content: prompt }]
      });

      // Clean the response to remove any meta-commentary
      let content = message.content[0].text.trim();
      content = content.replace(/^Certainly!? Here.*?:/i, '');
      content = content.replace(/^Here's .*?:/i, '');
      content = content.replace(/^This is .*?:/i, '');
      content = content.replace(/^Here is .*?:/i, '');
      content = content.replace(/^Here are .*?:/i, '');
      content = content.replace(/^The content .*?:/i, '');
      content = content.replace(/^Let me .*?:/i, '');
      content = content.replace(/^I'll .*?:/i, '');
      content = content.trim();

      return content;
    } catch (error) {
      console.error('Error generating homepage greeting:', error);
      return "Welcome to Sueno Tattoo! Let's create something meaningful together.";
    }
  }

  /**
   * Generate personalized tattoo ideas based on user input
   */
  async generateTattooIdeas(userPrompt, context = {}) {
    const { sessionInterests, previousIdeas } = context;
    
    const prompt = `You are a tattoo concept artist with expertise in custom designs. 
    A user wants a tattoo representing: "${userPrompt}"
    
    Additional context:
    - Previous interests: ${sessionInterests?.join(', ') || 'None'}
    - Previous concepts explored: ${previousIdeas?.length || 0} ideas
    
    Generate 3 distinct, creative tattoo concept ideas that capture the essence of their request.
    Format as a bulleted list with brief descriptions.
    Focus on visual elements, placement suggestions, and symbolic meaning.`;

    try {
      const message = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 400,
        messages: [{ role: 'user', content: prompt }]
      });

      return message.content[0].text;
    } catch (error) {
      console.error('Error generating tattoo ideas:', error);
      throw new Error('Unable to generate ideas right now. Please try again.');
    }
  }

  /**
   * Generate dynamic blog post introductions
   */
  async generateBlogIntro(postTitle, userContext = {}) {
    const { previousInterests, location } = userContext;
    
    const prompt = `You are a content creator for a tattoo blog. 
    Write a compelling 1-2 sentence introduction for a blog post titled: "${postTitle}"
    
    User context:
    - Previously interested in: ${previousInterests?.join(', ') || 'Various styles'}
    - Location: ${location || 'Unknown'}
    
    Connect this post to their interests naturally, without being overly obvious about personalization.`;

    try {
      const message = await this.anthropic.messages.create({
        model: 'claude-3-haiku-20240307',
        max_tokens: 100,
        messages: [{ role: 'user', content: prompt }]
      });

      return message.content[0].text;
    } catch (error) {
      console.error('Error generating blog intro:', error);
      return null; // Fall back to static content
    }
  }

  /**
   * Generate A/B test variations
   */
  async generateABVariant(originalContent, variant = 'B', context = {}) {
    const prompt = `Rewrite this content as variant ${variant} for A/B testing:
    "${originalContent}"
    
    Create a different tone/approach while maintaining the same core message.
    Context: ${JSON.stringify(context)}`;

    try {
      const message = await this.anthropic.messages.create({
        model: 'claude-3-haiku-20240307',
        max_tokens: 200,
        messages: [{ role: 'user', content: prompt }]
      });

      return message.content[0].text;
    } catch (error) {
      console.error('Error generating A/B variant:', error);
      return originalContent; // Fall back to original
    }
  }
}

export default PersonalizationService;
