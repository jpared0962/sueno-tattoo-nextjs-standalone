'use client';

import { useState } from 'react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  review: string;
}

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 12; // Show first 12 testimonials initially
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, initialCount);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedTestimonials.map((testimonial, index) => (
          <div key={index} className="bg-charcoal-gray/20 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-crisp-white">{testimonial.name}</h3>
                <p className="text-crisp-white/60 text-sm">{testimonial.location}</p>
              </div>
              <div className="text-right">
                <div className="flex text-gold">★★★★★</div>
                <p className="text-crisp-white/60 text-sm">{testimonial.date}</p>
              </div>
            </div>
            <div className="mb-3">
              <span className="bg-deep-red/20 text-deep-red px-3 py-1 rounded-full text-sm">
                {testimonial.service}
              </span>
            </div>
            <p className="text-crisp-white/80 leading-relaxed">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
      
      {!showAll && testimonials.length > initialCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Load More Reviews ({testimonials.length - initialCount} more)
          </button>
        </div>
      )}
      
      {showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(false)}
            className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Show Less
          </button>
        </div>
      )}
    </>
  );
}
