import { Metadata } from 'next';
import { generateSEOMetadata } from '@/components/seo/SEOHead';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { businessInfo } from '@/data/business-info';

export const metadata: Metadata = generateSEOMetadata({
  title: `Complete Tattoo Aftercare Guide | Jose | Laurel MD`,
  description: `Professional tattoo aftercare guide with Derm Shield instructions, healing timeline, and expert advice from licensed tattoo artist Jose in Laurel, MD. Ensure perfect healing for your new tattoo.`,
  keywords: [
    'tattoo aftercare guide laurel md',
    'derm shield aftercare instructions',
    'tattoo healing guide maryland',
    'professional tattoo aftercare',
    'jose aftercare advice',
    'tattoo healing timeline dmv',
    'maryland tattoo aftercare',
    'complete tattoo care guide',
    'tattoo aftercare guide',
    'tattoo healing process',
    'tattoo care instructions',
    'proper tattoo care',
    'tattoo healing timeline',
    'tattoo maintenance',
    'tattoo aftercare tips',
    'professional aftercare advice',
    'new tattoo care',
    'fresh tattoo aftercare',
    'tattoo healing stages',
    'tattoo scabbing',
    'tattoo peeling',
    'tattoo itching',
    'tattoo fading',
    'tattoo aftercare products',
    'tattoo healing balm',
    'tattoo moisturizer',
    'tattoo soap',
    'tattoo lotion',
    'aftercare cream',
    'healing ointment',
    'tattoo infection signs',
    'tattoo healing problems',
    'tattoo not healing',
    'tattoo aftercare mistakes',
    'tattoo touch up needed',
    'tattoo healing complications',
    'how to care for a new tattoo',
    'tattoo aftercare instructions Maryland',
    'professional tattoo aftercare guide',
    'what to do after getting a tattoo',
    'safe tattoo shop',
    'sterile tattoo studio',
    'clean tattoo parlor',
    'hygienic tattoo artist',
    'health department approved',
    'bloodborne pathogen certified'
  ],
  url: '/aftercare',
});

export default function AftercarePage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />

      <div className="min-h-screen pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-crisp-white">
              🛡️ Complete Tattoo Aftercare Guide
            </h1>
            <p className="text-lg md:text-xl text-crisp-white/80 mb-3 md:mb-4 max-w-3xl mx-auto">
              Your Roadmap to Perfect Healing with Jose
            </p>
            <p className="text-base md:text-lg text-crisp-white/70 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional aftercare instructions from 8+ years of experience and thousands of successfully healed tattoos in Laurel, MD and the DMV area.
            </p>
            <div className="glass-accent rounded-lg p-4 md:p-6 max-w-2xl mx-auto mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-crisp-white mb-2">
                🚨 IMPORTANT: FLUID BUILDUP IS NORMAL! 🚨
              </h2>
              <p className="text-sm md:text-base text-crisp-white/90 leading-relaxed">
                EXCESSIVE BODILY FLUID BUILDUP UNDER DERM SHIELD IS A NORMAL PART OF THE HEALING PROCESS!
              </p>
            </div>
            
            {/* Safety & Health Assurance */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏥</div>
                <h3 className="text-sm font-semibold text-gold mb-2">Health Department Approved</h3>
                <p className="text-xs text-crisp-white/80">Maryland state licensed and health department approved tattoo facility</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🩸</div>
                <h3 className="text-sm font-semibold text-gold mb-2">Bloodborne Pathogen Certified</h3>
                <p className="text-xs text-crisp-white/80">Certified in bloodborne pathogen prevention and sterile techniques</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧼</div>
                <h3 className="text-sm font-semibold text-gold mb-2">Sterile Equipment</h3>
                <p className="text-xs text-crisp-white/80">All equipment sterilized with hospital-grade autoclaves</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="glass-button text-crisp-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base"
              >
                Call {businessInfo.contact.phone}
              </a>
              <a 
                href={`mailto:${businessInfo.contact.email}`}
                className="glass-button-gold text-ink-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base"
              >
                Email Questions
              </a>
            </div>
          </section>

          {/* Understanding the Healing Journey */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-crisp-white border-b border-deep-red pb-4">
              Understanding the Healing Journey: Why Proper Aftercare Matters
            </h2>
            <div className="glass-card rounded-lg p-8 mb-8">
              <p className="text-crisp-white/90 leading-relaxed mb-6">
                Getting a tattoo is only half the story. The moment your artist puts down their machine, you become the custodian of a healing wound that will transform into permanent artwork. The difference between a vibrant, crisp tattoo and a faded, blurry disappointment often comes down to those crucial first few weeks of care.
              </p>
              <p className="text-crisp-white/80 leading-relaxed">
                Your body views a fresh tattoo as an injury—because technically, it is. Thousands of tiny needle punctures have deposited ink into your dermis, and your immune system immediately springs into action. Understanding this process helps explain why certain aftercare steps are critical and why shortcuts can lead to disappointment.
              </p>
            </div>
          </section>

          {/* Derm Shield Application & Wear */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-crisp-white border-b border-gold pb-4">
              🛡️ Derm Shield Application & Wear
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="glass-service rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">Duration & Care</h3>
                <ul className="text-crisp-white/90 space-y-2">
                  <li>• <strong>Duration:</strong> Derm Shield stays in place for 3-5 days</li>
                  <li>• <strong>Water Resistant:</strong> OK to shower, just don&apos;t touch it</li>
                  <li>• <strong>DO NOT:</strong> Fully submerge for first 2 weeks</li>
                  <li>• <strong>Early Removal:</strong> OK if bandage won&apos;t stay after 2-3 days</li>
                </ul>
              </div>
              
              <div className="glass-gold rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-crisp-white">What Is Derm Shield?</h3>
                <p className="text-crisp-white/90 leading-relaxed">
                  Derm Shield represents a significant advancement in tattoo aftercare technology. This transparent, breathable film creates a protective barrier over your fresh tattoo while allowing oxygen exchange—crucial for proper healing.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-crisp-white">The Science Behind the Shield:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-crisp-white/90 space-y-3">
                  <li>• Breathable membrane allows oxygen in while keeping contaminants out</li>
                  <li>• Waterproof barrier protects against external moisture and bacteria</li>
                  <li>• Adhesive technology stays in place without irritating healing skin</li>
                </ul>
                <ul className="text-crisp-white/90 space-y-3">
                  <li>• Transparent design lets you monitor healing progress</li>
                  <li>• Medical-grade materials ensure safety and effectiveness</li>
                  <li>• FDA registered, patented, and manufactured in the USA</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Managing Fluid Buildup */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-crisp-white border-b border-deep-red pb-4">
              💧 Managing the Fluid Buildup: Trust the Process
            </h2>
            
            <div className="glass-accent rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-crisp-white">⚠️ Here&apos;s what&apos;s actually happening under that bandage:</h3>
              <p className="text-crisp-white/90 mb-4">
                When you see fluid accumulating under your Derm Shield, you&apos;re witnessing your body&apos;s natural healing response. This isn&apos;t a sign of infection or problems—it&apos;s exactly what should happen. Think of it as your body&apos;s own custom-made healing serum.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gold">The fluid consists of:</h4>
                  <ul className="text-crisp-white/80 space-y-2">
                    <li>• <strong>Blood plasma:</strong> Rich in healing factors and white blood cells</li>
                    <li>• <strong>Lymphatic fluid:</strong> Part of your body&apos;s waste removal system</li>
                    <li>• <strong>Excess ink:</strong> Not all ink stays in the dermis; some gets pushed out</li>
                    <li>• <strong>Dead white blood cells:</strong> Evidence of your immune system at work</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gold">What You&apos;ll See:</h4>
                  <ul className="text-crisp-white/80 space-y-2">
                    <li>• <strong>Day 1:</strong> Light fluid accumulation, possibly pink-tinged</li>
                    <li>• <strong>Day 2-3:</strong> Peak fluid production, darker appearance</li>
                    <li>• <strong>Day 4-5:</strong> Fluid beginning to reabsorb, less production</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-crisp-white">Critical Rules:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <strong className="text-deep-red">DO NOT DRAIN THE FLUID</strong>
                      <p className="text-crisp-white/80 text-sm">This breaks the sterile seal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <strong className="text-deep-red">DO NOT PANIC</strong>
                      <p className="text-crisp-white/80 text-sm">Dark, murky fluid is normal</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <strong className="text-deep-red">DO NOT SQUEEZE</strong>
                      <p className="text-crisp-white/80 text-sm">Let your body reabsorb naturally</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <strong className="text-deep-red">DO NOT RE-BANDAGE</strong>
                      <p className="text-crisp-white/80 text-sm">If it leaks, dab gently and continue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Removal Process */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-crisp-white border-b border-gold pb-4">
              🔄 The Removal Process: Technique Matters
            </h2>
            
            <div className="glass-gold rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-crisp-white">Optimal Removal Conditions:</h3>
              <p className="text-crisp-white/90 mb-4">
                The shower is your best friend for Derm Shield removal. Here&apos;s why:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-crisp-white/90 space-y-2">
                  <li>• Warm water softens the adhesive</li>
                  <li>• Steam helps release the bond</li>
                </ul>
                <ul className="text-crisp-white/90 space-y-2">
                  <li>• Running water prevents re-sticking</li>
                  <li>• Soap provides lubrication</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-crisp-white">Step-by-Step Removal Technique:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm text-crisp-white">1</span>
                  <p className="text-crisp-white/90">Start your shower with comfortably warm water</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm text-crisp-white">2</span>
                  <p className="text-crisp-white/90">Let water run over bandage for 30-60 seconds</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm text-crisp-white">3</span>
                  <p className="text-crisp-white/90">Find an edge (usually a corner works best)</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm text-crisp-white">4</span>
                  <p className="text-crisp-white/90">Apply liquid soap to the lifting edge</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm text-crisp-white">5</span>
                  <p className="text-crisp-white/90">Pull slowly back over itself - think peeling a sticker, not ripping a band-aid</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm text-crisp-white">6</span>
                  <p className="text-crisp-white/90">Keep the angle low - pull parallel to skin, not perpendicular</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm text-crisp-white">7</span>
                  <p className="text-crisp-white/90">Use continuous soap and water as you peel</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm text-crisp-white">8</span>
                  <p className="text-crisp-white/90">Go slowly - rushing causes unnecessary pain and skin stress</p>
                </div>
              </div>
            </div>
          </section>

          {/* Healing Timeline */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-crisp-white border-b border-deep-red pb-4">
              📅 Healing Timeline: What to Expect Each Week
            </h2>
            
            <div className="space-y-8">
              <div className="glass-accent rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-crisp-white flex items-center">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center mr-3 text-crisp-white">🔴</span>
                  Fresh Stage (Days 0-3): First Days
                </h3>
                <p className="text-crisp-white/90 mb-4">Important first few days when your body starts healing</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-crisp-white mb-2">Day 0 - Tattoo Day:</h4>
                    <ul className="text-crisp-white/80 text-sm space-y-1">
                      <li>• Initial bandaging by artist</li>
                      <li>• Mild to moderate discomfort expected</li>
                      <li>• Possible swelling, especially on extremities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-crisp-white mb-2">Day 1 - Reality Sets In:</h4>
                    <ul className="text-crisp-white/80 text-sm space-y-1">
                      <li>• Peak tenderness and sensitivity</li>
                      <li>• Initial plasma/ink discharge</li>
                      <li>• Skin feels hot and tight</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-crisp-white mb-2">Days 2-3 - Stabilization:</h4>
                    <ul className="text-crisp-white/80 text-sm space-y-1">
                      <li>• Discomfort decreasing</li>
                      <li>• Discharge minimizing</li>
                      <li>• Initial healing visible</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-gold rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-crisp-white flex items-center">
                  <span className="glass-button rounded-full w-8 h-8 flex items-center justify-center mr-3 text-ink-black">🟡</span>
                  Active Healing Stage (Days 4-14): The Challenging Phase
                </h3>
                <p className="text-crisp-white/90 mb-4">This is when your self-control will be tested - the itch is real, but resistance is crucial</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-crisp-white mb-2">Week 1 Milestones:</h4>
                    <ul className="text-crisp-white/80 text-sm space-y-1">
                      <li>• Scab formation begins</li>
                      <li>• Itching intensifies</li>
                      <li>• Colors may look dull under forming scabs</li>
                      <li>• Tightness when moving the area</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-crisp-white mb-2">Week 2 Revelations:</h4>
                    <ul className="text-crisp-white/80 text-sm space-y-1">
                      <li>• Peak peeling phase (like sunburn)</li>
                      <li>• Extreme itching episodes</li>
                      <li>• Patches of healed skin emerging</li>
                      <li>• Temptation to pick at its highest</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-crisp-white flex items-center">
                  <span className="bg-green-600 text-crisp-white rounded-full w-8 h-8 flex items-center justify-center mr-3">🟢</span>
                  Settling Stage (Days 15-28): Seeing Results
                </h3>
                <p className="text-crisp-white/90 mb-4">The worst is behind you - now you start seeing the true beauty emerge</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-crisp-white mb-2">Week 3 Progress:</h4>
                    <ul className="text-crisp-white/80 text-sm space-y-1">
                      <li>• Most scabbing resolved</li>
                      <li>• Shiny or waxy appearance (normal)</li>
                      <li>• Colors beginning to settle</li>
                      <li>• Occasional itchy episodes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-crisp-white mb-2">Week 4 Achievement:</h4>
                    <ul className="text-crisp-white/80 text-sm space-y-1">
                      <li>• Surface healing complete</li>
                      <li>• True colors emerging</li>
                      <li>• Skin texture normalizing</li>
                      <li>• Pride in proper healing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-crisp-white border-b border-deep-red pb-4">
              📞 Emergency Contact Information
            </h2>
            <div className="glass-accent rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-crisp-white">Questions or Concerns?</h3>
              <p className="text-crisp-white/90 mb-6">
                Don&apos;t hesitate to reach out! For urgent concerns outside business hours, call or text. 
                When in doubt, always contact your artist directly for personalized advice.
              </p>
              <div className="space-y-4">
                <div className="text-crisp-white">
                  <strong>Phone:</strong> <a href={`tel:${businessInfo.contact.phone}`} className="text-deep-red font-bold text-xl hover:underline">{businessInfo.contact.phone}</a>
                </div>
                <div className="text-crisp-white">
                  <strong>Email:</strong> <a href={`mailto:${businessInfo.contact.email}`} className="text-deep-red hover:underline">{businessInfo.contact.email}</a>
                </div>
                <div className="text-crisp-white/80 text-sm mt-4">
                  <strong>Remember:</strong> This comprehensive guide represents 8+ years of professional experience and thousands of successfully healed tattoos. Your healing is my priority!
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="max-w-2xl mx-auto text-center">
            <div className="glass-pricing rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-crisp-white">
                Ready for Your Next Tattoo?
              </h2>
              <p className="text-crisp-white/80 mb-6">
                Experience the quality and care that leads to perfect healing. Book your free consultation 
                with Jose at Sueño Tattoo in Laurel, MD.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/book-consultation"
                  className="glass-button text-crisp-white px-8 py-4 rounded-lg font-semibold"
                >
                  Book Free Consultation
                </a>
                <a 
                  href="/gallery"
                  className="glass-button-gold text-ink-black px-8 py-4 rounded-lg font-semibold"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}