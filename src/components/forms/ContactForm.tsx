'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service_interest: string;
  message: string;
  newsletter_signup: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service_interest: '',
    message: '',
    newsletter_signup: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          service_interest: formData.service_interest || null,
          message: formData.message,
          newsletter_signup: formData.newsletter_signup,
          status: 'unread'
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_interest: '',
        message: '',
        newsletter_signup: false
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-crisp-white mb-4">
          Message Sent Successfully!
        </h2>
        <p className="text-crisp-white/80 mb-6">
          Thank you for reaching out! We'll get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="bg-gold hover:bg-gold/80 text-ink-black px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-crisp-white mb-6 text-center">
        Contact Us
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-crisp-white font-semibold mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
            placeholder="Your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-crisp-white font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-crisp-white font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
            placeholder="(240) 555-0123"
          />
        </div>

        {/* Service Interest Field */}
        <div>
          <label htmlFor="service_interest" className="block text-crisp-white font-semibold mb-2">
            Service Interest
          </label>
          <select
            id="service_interest"
            name="service_interest"
            value={formData.service_interest}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="">Select a service...</option>
            <option value="Custom Tattoo Design">Custom Tattoo Design</option>
            <option value="American Traditional Tattoos">American Traditional Tattoos</option>
            <option value="Fine Line Tattoos">Fine Line Tattoos</option>
            <option value="Cover-up Tattoos">Cover-up Tattoos</option>
            <option value="Neo-Traditional">Neo-Traditional</option>
            <option value="Black & Grey">Black & Grey</option>
            <option value="Flash Tattoos">Flash Tattoos</option>
            <option value="Consultation Only">Consultation Only</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-crisp-white font-semibold mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 resize-vertical"
            placeholder="Tell us about your tattoo ideas, questions, or what you'd like to discuss..."
          />
        </div>

        {/* Newsletter Signup */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="newsletter_signup"
            name="newsletter_signup"
            checked={formData.newsletter_signup}
            onChange={handleChange}
            className="w-4 h-4 text-gold bg-charcoal-gray/30 border-crisp-white/20 rounded focus:ring-gold focus:ring-2"
          />
          <label htmlFor="newsletter_signup" className="ml-2 text-crisp-white/80 text-sm">
            Subscribe to our newsletter for tattoo care tips and updates
          </label>
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-deep-red/20 border border-deep-red/50 text-deep-red p-4 rounded-lg">
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-deep-red hover:bg-deep-red/80 disabled:bg-deep-red/50 text-crisp-white py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-deep-red focus:ring-offset-2 focus:ring-offset-ink-black"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-6 text-center text-crisp-white/60 text-sm">
        <p>
          Prefer to call? Contact us directly at{' '}
          <a href="tel:240-758-3226" className="text-gold hover:underline">
            (240) 758-3226
          </a>
        </p>
      </div>
    </div>
  );
}