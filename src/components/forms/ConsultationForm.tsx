'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  tattoo_idea: string;
  size: string;
  placement: string;
  timeframe: string;
  experience: string;
  budget: string;
  availability: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    tattoo_idea: '',
    size: '',
    placement: '',
    timeframe: '',
    experience: '',
    budget: '',
    availability: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { data, error } = await supabase
        .from('consultation_requests')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tattoo_idea: formData.tattoo_idea,
          size: formData.size || null,
          placement: formData.placement || null,
          timeframe: formData.timeframe || null,
          experience: formData.experience || null,
          budget: formData.budget || null,
          availability: formData.availability || null,
          status: 'pending'
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
        tattoo_idea: '',
        size: '',
        placement: '',
        timeframe: '',
        experience: '',
        budget: '',
        availability: ''
      });
    } catch (error) {
      console.error('Consultation form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit consultation request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">📅</div>
        <h2 className="text-2xl font-bold text-crisp-white mb-4">
          Consultation Request Submitted!
        </h2>
        <p className="text-crisp-white/80 mb-6">
          Thank you for your consultation request! We'll review your details and get back to you within 24 hours to schedule your free consultation.
        </p>
        
        {/* Square Appointments Link */}
        <div className="mb-6">
          <p className="text-crisp-white/90 mb-4">
            Ready to book your appointment now? Use our online booking system:
          </p>
          <a 
            style={{
              backgroundColor: '#A53E31',
              color: '#F5F5F5',
              height: '40px',
              textTransform: 'uppercase',
              fontFamily: "'Square Market', 'helvetica neue', helvetica, arial, sans-serif",
              letterSpacing: '1px',
              lineHeight: '38px',
              padding: '0 28px',
              borderRadius: '3px',
              fontWeight: '500',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-block',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease'
            }}
            href="https://squareup.com/appointments/buyer/widget/wvdgymz6ya23rw/GWAX8GWRX2KB8"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(165, 62, 49, 0.8)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#A53E31'}
          >
            Book an Appointment
          </a>
        </div>
        
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="bg-gold hover:bg-gold/80 text-ink-black px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-crisp-white mb-6 text-center">
        Book Your Free Consultation
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
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
            placeholder="(240) 555-0123"
          />
        </div>

        {/* Tattoo Idea Field */}
        <div>
          <label htmlFor="tattoo_idea" className="block text-crisp-white font-semibold mb-2">
            Tattoo Idea *
          </label>
          <textarea
            id="tattoo_idea"
            name="tattoo_idea"
            value={formData.tattoo_idea}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 resize-vertical"
            placeholder="Describe your tattoo idea in detail..."
          />
        </div>

        {/* Size Field */}
        <div>
          <label htmlFor="size" className="block text-crisp-white font-semibold mb-2">
            Approximate Size
          </label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="">Select size...</option>
            <option value="Small (2-4 inches)">Small (2-4 inches)</option>
            <option value="Medium (4-7 inches)">Medium (4-7 inches)</option>
            <option value="Large (7+ inches)">Large (7+ inches)</option>
            <option value="Full sleeve">Full sleeve</option>
            <option value="Half sleeve">Half sleeve</option>
            <option value="Back piece">Back piece</option>
            <option value="Chest piece">Chest piece</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>

        {/* Placement Field */}
        <div>
          <label htmlFor="placement" className="block text-crisp-white font-semibold mb-2">
            Placement/Location
          </label>
          <select
            id="placement"
            name="placement"
            value={formData.placement}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="">Select placement...</option>
            <option value="Arm/Sleeve">Arm/Sleeve</option>
            <option value="Forearm">Forearm</option>
            <option value="Upper arm">Upper arm</option>
            <option value="Shoulder">Shoulder</option>
            <option value="Back">Back</option>
            <option value="Chest">Chest</option>
            <option value="Leg">Leg</option>
            <option value="Thigh">Thigh</option>
            <option value="Calf">Calf</option>
            <option value="Wrist">Wrist</option>
            <option value="Ankle">Ankle</option>
            <option value="Ribs">Ribs</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Timeframe Field */}
        <div>
          <label htmlFor="timeframe" className="block text-crisp-white font-semibold mb-2">
            Desired Timeframe
          </label>
          <select
            id="timeframe"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="">Select timeframe...</option>
            <option value="ASAP">ASAP</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>

        {/* Experience Field */}
        <div>
          <label htmlFor="experience" className="block text-crisp-white font-semibold mb-2">
            Tattoo Experience
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="">Select experience...</option>
            <option value="First tattoo">First tattoo</option>
            <option value="2-3 tattoos">2-3 tattoos</option>
            <option value="4-10 tattoos">4-10 tattoos</option>
            <option value="10+ tattoos">10+ tattoos</option>
            <option value="Heavily tattooed">Heavily tattooed</option>
          </select>
        </div>

        {/* Budget Field */}
        <div>
          <label htmlFor="budget" className="block text-crisp-white font-semibold mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="">Select budget...</option>
            <option value="Under $200">Under $200</option>
            <option value="$200-$400">$200-$400</option>
            <option value="$400-$600">$400-$600</option>
            <option value="$600-$800">$600-$800</option>
            <option value="$800+">$800+</option>
            <option value="Discuss during consultation">Discuss during consultation</option>
          </select>
        </div>

        {/* Availability Field */}
        <div>
          <label htmlFor="availability" className="block text-crisp-white font-semibold mb-2">
            Availability
          </label>
          <textarea
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-charcoal-gray/30 border border-crisp-white/20 rounded-lg text-crisp-white placeholder-crisp-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 resize-vertical"
            placeholder="Let us know your preferred days/times for consultation (Thu-Sun, 12PM-6PM)"
          />
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
          {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
        </button>
      </form>

      <div className="mt-6 text-center text-crisp-white/60 text-sm">
        <p>
          All consultations are completely free with no obligation. Questions?{' '}
          <a href="tel:240-758-3226" className="text-gold hover:underline">
            Call (240) 758-3226
          </a>
        </p>
      </div>
    </div>
  );
}