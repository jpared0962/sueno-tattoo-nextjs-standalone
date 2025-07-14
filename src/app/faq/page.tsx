import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';

export const metadata: Metadata = generateSEOMetadata({
  title: `Tattoo FAQ | Common Questions | ${businessInfo.name} Laurel MD`,
  description: `Frequently asked questions about tattoo services, pricing, aftercare, and booking with Jose in Laurel, MD. Get answers to common tattoo questions for DMV area clients.`,
  keywords: [
    'tattoo faq laurel md',
    'tattoo questions maryland',
    'tattoo aftercare guide',
    'tattoo pricing questions',
    'first tattoo questions',
    'tattoo consultation faq',
    'dmv tattoo questions',
    'jose alvarado faq'
  ],
  url: '/faq',
});

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Booking & Consultation",
      questions: [
        {
          q: "Do you offer free consultations?",
          a: "Yes! All consultations are completely free. We believe in taking time to understand your vision before any commitment. Consultations include design discussion, placement guidance, size recommendations, and pricing estimates."
        },
        {
          q: "How do I book an appointment?",
          a: "You can book through our online form, call (240) 758-3226, or visit during walk-in hours (Thursday-Sunday 12PM-6PM). We recommend calling ahead to ensure availability, especially for larger pieces."
        },
        {
          q: "What's your availability for DMV area clients?",
          a: "We're open Thursday through Sunday, 12PM-6PM, which works great for DC/NoVA professionals who want weekend appointments. Evening appointments may be available by special arrangement."
        },
        {
          q: "How far in advance should I book?",
          a: "For custom work, we typically book 1-3 weeks out. Smaller pieces or touch-ups may have same-week availability. Holiday seasons book faster, so plan accordingly."
        },
        {
          q: "Do you take walk-ins?",
          a: "Yes, walk-in consultations are welcome during business hours. However, same-day tattoo work depends on availability and complexity. We always recommend calling ahead."
        },
        {
          q: "What's the minimum age requirement?",
          a: "Must be 18+ to get tattooed. NO EXCEPTIONS! Valid government-issued ID is required for all appointments. We strictly follow Maryland state laws regarding tattoo age requirements."
        },
        {
          q: "Is a consultation required for all tattoos?",
          a: "Yes! All tattoo appointments require a consultation first. Consultations are free and always in person. This ensures we understand your vision and can provide the best possible service."
        },
        {
          q: "What should I bring to my appointment?",
          a: "Bring: Valid government-issued ID, cash for deposit, reference images if applicable, and comfortable clothing that allows access to the tattoo area. We'll handle the rest!"
        },
        {
          q: "Any scheduling tips for the best experience?",
          a: "Book 2-4 weeks in advance. Walk-ins welcome but appointments take priority. Arrive on time for your session. Avoid alcohol and aspirin 24 hours before your appointment."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      questions: [
        {
          q: "What are your pricing ranges?",
          a: "Small tattoos start at $200, medium pieces $400-800, and larger works $800+. Pricing depends on size, complexity, placement, and time required. We provide transparent quotes with no hidden fees."
        },
        {
          q: "Do you require a deposit?",
          a: "Yes! After consultation, a $100 minimum cash deposit is required (ATM available on-site). The deposit is credited toward your total tattoo cost and secures your appointment slot."
        },
        {
          q: "What's your secure booking policy?",
          a: "ALL APPOINTMENTS require a credit card on file - only charged for no-shows or cancellations within 48 hours. Important: Need to reschedule? Call the shop. Don't book a second appointment or you'll be charged for a no-show."
        },
        {
          q: "What happens if I don't show up?",
          a: "No Call - No Show = Loss of deposit. Some larger tattoos may require larger deposits. We respect your time, and ask that you respect ours by providing adequate notice for changes."
        },
        {
          q: "What payment methods do you accept?",
          a: "Cash (all prices based on cash payment), Credit Cards (Visa, MasterCard, American Express), and Apple Pay for quick and secure mobile payment. Balance is due on completion of your tattoo session."
        },
        {
          q: "Are your prices competitive with DC/NoVA shops?",
          a: "Yes! Our Maryland location allows us to offer premium quality at better value than many DC or Northern Virginia studios, while maintaining the same professional standards."
        },
        {
          q: "Do you offer payment plans for larger tattoos?",
          a: "For larger pieces that require multiple sessions, we can work out a payment schedule. This typically involves paying for each session as completed, with deposits required to hold appointment slots. We'll discuss all financial arrangements during your consultation to ensure everything works within your budget."
        },
        {
          q: "How long does the tattoo process take from consultation to completion?",
          a: "The timeline varies based on design complexity and size. Simple pieces can often be completed within 1-2 weeks of consultation, while larger custom work may take 2-4 weeks for design development plus the actual tattoo session(s). During your free consultation, we'll provide a realistic timeline specific to your project."
        }
      ]
    },
    {
      title: "Design & Artistic Process",
      questions: [
        {
          q: "Do you create custom designs?",
          a: "Absolutely! Every piece we create is completely original and tailored to your vision. We don't use generic flash or copy other artists' work. Your tattoo will be unique to you."
        },
        {
          q: "How does the design process work?",
          a: "After our consultation, we develop initial sketches based on your ideas. We'll refine the design through revisions until it's perfect. You'll see the final design before we start tattooing."
        },
        {
          q: "What if I don't know exactly what I want?",
          a: "That's completely normal! We'll work together during consultation to explore ideas, discuss themes, and develop concepts. Many clients come with just a general idea and leave with a perfect design."
        },
        {
          q: "Can you work with reference images?",
          a: "Yes, we love working with inspiration images! We'll use them to understand your style preferences and create original artwork that captures the essence of what you love."
        },
        {
          q: "Do you do cover-ups?",
          a: "Yes! Cover-ups are a specialty. We'll assess your existing tattoo and design new artwork that completely transforms the area. Most cover-ups turn out better than the original tattoo."
        },
        {
          q: "What should I bring to my consultation?",
          a: "Bring any reference images, inspiration photos, or ideas you've collected. Even rough sketches or descriptions help us understand your vision. We'll also discuss placement, sizing, and any personal meaning behind the tattoo. Don't worry if you're not sure about details – that's what the consultation is for!"
        },
        {
          q: "Can you work with existing tattoos for additions or modifications?",
          a: "Absolutely! We specialize in working with existing tattoos whether you want to add elements, create a sleeve, or modify what you have. Each situation is unique, so we'll assess your current work during consultation and discuss the best approach to achieve your goals while maintaining artistic integrity."
        }
      ]
    },
    {
      title: "Health & Safety",
      questions: [
        {
          q: "Are you licensed and insured?",
          a: "Yes, we're fully licensed by Maryland state and carry comprehensive insurance. We meet or exceed all health department requirements and maintain strict safety protocols."
        },
        {
          q: "What safety measures do you follow?",
          a: "We use single-use needles, sterile equipment, and follow strict sanitization procedures. All equipment is properly sterilized, and we maintain the highest health and safety standards."
        },
        {
          q: "What should I do to prepare for my tattoo?",
          a: "Get a good night's sleep, eat a proper meal beforehand, stay hydrated, and avoid alcohol/drugs for 24 hours. Wear comfortable clothing that allows access to the tattoo area."
        },
        {
          q: "Can I get a tattoo if I'm pregnant or breastfeeding?",
          a: "We don't tattoo pregnant or breastfeeding clients as a safety precaution. We'll be happy to work with you after this period when it's safe for both you and your baby."
        },
        {
          q: "What if I have medical conditions or take medications?",
          a: "Please discuss any medical conditions, medications, or allergies during consultation. Some conditions may require doctor approval before tattooing."
        }
      ]
    },
    {
      title: "Aftercare & Healing",
      questions: [
        {
          q: "How do I care for my new tattoo?",
          a: "We provide detailed aftercare instructions after every session. Generally: keep clean and dry, apply recommended ointment, avoid sun/swimming for 2-3 weeks, and don't pick at scabs."
        },
        {
          q: "How long does healing take?",
          a: "Surface healing takes 2-3 weeks, complete healing takes 2-3 months. Following proper aftercare ensures optimal healing and color retention. We're always available for healing questions."
        },
        {
          q: "What products should I use for aftercare?",
          a: "We'll recommend specific products based on your tattoo and skin type. Generally, fragrance-free moisturizers and antibacterial soap work well. Avoid petroleum-based products."
        },
        {
          q: "What if my tattoo doesn't heal properly?",
          a: "Proper healing issues are rare when aftercare is followed. If you have concerns, contact us immediately. We stand behind our work and will address any healing complications."
        },
        {
          q: "When can I exercise, swim, or tan after getting tattooed?",
          a: "Avoid strenuous exercise for 48-72 hours, swimming/soaking for 2-3 weeks, and direct sun exposure for 3-4 weeks. We'll give you specific timeline based on your tattoo's location and size."
        },
        {
          q: "What's your policy on tattoo touch-ups?",
          a: "We offer complimentary touch-ups within the first 6 months if needed, provided you've followed all aftercare instructions. Most tattoos heal perfectly without touch-ups when proper care is taken. We'll give you detailed aftercare instructions and are always available to answer healing questions."
        },
        {
          q: "What happens if I need to reschedule my appointment?",
          a: "Life happens! We ask for at least 48 hours notice for rescheduling to avoid losing your deposit. Emergency situations are handled case-by-case. We'll work with you to find a new appointment time that works for everyone. Communication is key – just let us know as soon as possible."
        }
      ]
    },
    {
      title: "Location & Travel",
      questions: [
        {
          q: "Where exactly are you located in Laurel, MD?",
          a: "We're located in Laurel, MD 20723. Exact address will be provided when you book your appointment. We're easily accessible from I-95, Route 1, and the Baltimore-Washington Parkway."
        },
        {
          q: "Is parking available?",
          a: "Yes, free parking is available for all clients. No need to worry about parking meters or time limits - focus on your tattoo experience."
        },
        {
          q: "How do I get there from Washington DC?",
          a: "From DC, take I-495 North to I-95 North to Laurel (about 30-45 minutes). MARC train service is also available to Laurel station. We can provide detailed directions when you book."
        },
        {
          q: "How do I get there from Northern Virginia?",
          a: "From NoVA, take I-495 around to I-95 North to Laurel (25-50 minutes depending on your starting point). Multiple route options available to avoid traffic."
        },
        {
          q: "Is it worth traveling from DC/NoVA for tattoo work?",
          a: "Absolutely! Many clients prefer the personalized attention, competitive pricing, and quality work. The drive is usually 30-45 minutes and clients consistently say it's worth the trip."
        }
      ]
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />

      <div className="min-h-screen pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-crisp-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-crisp-white/80 mb-8 max-w-3xl mx-auto">
              Get answers to common questions about tattoo services, pricing, aftercare, and booking 
              with Jose at Sueño Tattoo in Laurel, MD. Serving the DMV area with professional 
              tattoo artistry since 2017.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-consultation" 
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </a>
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Call {businessInfo.contact.phone}
              </a>
            </div>
          </section>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <section key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-crisp-white border-b border-deep-red pb-4">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-charcoal-gray/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-crisp-white">
                        {faq.q}
                      </h3>
                      <p className="text-crisp-white/80 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Still Have Questions */}
          <section className="max-w-2xl mx-auto text-center bg-deep-red/10 border border-deep-red p-8 rounded-lg mt-16">
            <h2 className="text-2xl font-bold mb-4 text-crisp-white">
              Still Have Questions?
            </h2>
            <p className="text-crisp-white/80 mb-6">
              Don't see your question answered? We're here to help! Contact us directly 
              or schedule a free consultation where we can discuss all your concerns in person.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="text-crisp-white/80">
                <strong className="text-crisp-white">Phone:</strong> <a href={`tel:${businessInfo.contact.phone}`} className="text-deep-red hover:underline">{businessInfo.contact.phone}</a>
              </div>
              <div className="text-crisp-white/80">
                <strong className="text-crisp-white">Email:</strong> <a href={`mailto:${businessInfo.contact.email}`} className="text-deep-red hover:underline">{businessInfo.contact.email}</a>
              </div>
              <div className="text-crisp-white/80">
                <strong className="text-crisp-white">Hours:</strong> Thursday-Sunday: 12PM-6PM
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-consultation"
                className="bg-deep-red hover:bg-deep-red/80 text-crisp-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </a>
              <a 
                href="/contact"
                className="border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}