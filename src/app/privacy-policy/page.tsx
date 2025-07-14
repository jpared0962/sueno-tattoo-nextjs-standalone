export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy-First Experience
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-red-100">
            Your privacy is our foundation. Sueno Tattoo uses privacy-first technology to enhance 
            your tattoo consultation experience without compromising your personal data.
          </p>
          <p className="text-lg font-semibold">
            <strong>Last Updated:</strong> January 9, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h3>
            <ul className="space-y-2">
              <li><a href="#philosophy" className="text-red-900 hover:text-red-700">Our Privacy Philosophy</a></li>
              <li><a href="#how-it-works" className="text-red-900 hover:text-red-700">How Our System Works</a></li>
              <li><a href="#information-collection" className="text-red-900 hover:text-red-700">Information We Collect</a></li>
              <li><a href="#ai-features" className="text-red-900 hover:text-red-700">AI Features & Data Usage</a></li>
              <li><a href="#third-party" className="text-red-900 hover:text-red-700">Third-Party Services</a></li>
              <li><a href="#data-security" className="text-red-900 hover:text-red-700">Data Security & Protection</a></li>
              <li><a href="#your-rights" className="text-red-900 hover:text-red-700">Your Rights & Choices</a></li>
              <li><a href="#coppa-compliance" className="text-red-900 hover:text-red-700">COPPA Compliance & Age Verification</a></li>
              <li><a href="#contact" className="text-red-900 hover:text-red-700">Contact Information</a></li>
            </ul>
          </div>

          {/* Privacy Philosophy */}
          <div id="philosophy" className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🛡️ Our Privacy Philosophy</h2>
            <p className="text-gray-600 mb-4">
              At Sueno Tattoo, we believe that getting a tattoo is deeply personal, and your privacy should be equally protected. 
              We've built our entire system around the principle that your personal data belongs to you.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Session-Only Data:</strong> We don't store personal information beyond your active session</li>
              <li><strong>User Control:</strong> You decide what information to share and when</li>
              <li><strong>Transparency:</strong> We clearly explain how every feature works</li>
              <li><strong>Minimal Collection:</strong> We only collect what's necessary for your tattoo consultation</li>
            </ul>
          </div>

          {/* How System Works */}
          <div id="how-it-works" className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ How Our System Works</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">Session-Based Experience</h3>
                <p className="text-gray-600">Your consultation data exists only during your active session. When you close your browser, your personal information is automatically cleared.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">AI-Powered Recommendations</h3>
                <p className="text-gray-600">Our AI analyzes your preferences in real-time to suggest tattoo styles and designs, but doesn't store your personal details.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-800">Privacy-First Design</h3>
                <p className="text-gray-600">Every feature is designed with privacy as the foundation, not an afterthought.</p>
              </div>
            </div>
          </div>

          {/* Information Collection */}
          <div id="information-collection" className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Information We Collect</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Session Data (Temporary)</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Tattoo style preferences</li>
                  <li>Design consultation responses</li>
                  <li>Budget and size preferences</li>
                  <li>Contact information (if provided)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Data</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>IP address (anonymized)</li>
                  <li>Usage patterns (aggregated)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Features */}
          <div id="ai-features" className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🤖 AI Features & Data Usage</h2>
            <p className="text-gray-600 mb-4">
              Our AI features are designed to enhance your consultation experience while protecting your privacy:
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Style Recommendation Engine</h4>
                <p className="text-gray-600 text-sm">Analyzes your preferences to suggest tattoo styles without storing personal identifiers.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Design Consultation AI</h4>
                <p className="text-gray-600 text-sm">Provides personalized design suggestions based on your input during the session.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Pricing Estimation</h4>
                <p className="text-gray-600 text-sm">Calculates approximate costs based on size, complexity, and style preferences.</p>
              </div>
            </div>
          </div>

          {/* Third Party Services */}
          <div id="third-party" className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Third-Party Services</h2>
            <p className="text-gray-600 mb-4">We use select third-party services to enhance functionality while maintaining privacy:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Google Analytics</h4>
                <p className="text-gray-600 text-sm">Anonymized usage statistics (can be opted out)</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Cloudinary</h4>
                <p className="text-gray-600 text-sm">Image hosting and optimization</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Supabase</h4>
                <p className="text-gray-600 text-sm">Secure data processing (session-only)</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Anthropic AI</h4>
                <p className="text-gray-600 text-sm">AI consultation features (privacy-compliant)</p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div id="your-rights" className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔐 Your Rights & Choices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Rights</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Access your data</li>
                  <li>Correct inaccuracies</li>
                  <li>Delete your information</li>
                  <li>Opt-out of tracking</li>
                  <li>Data portability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Choices</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Disable cookies</li>
                  <li>Opt-out of analytics</li>
                  <li>Use private browsing</li>
                  <li>Contact us for data requests</li>
                </ul>
              </div>
            </div>
          </div>

          {/* COPPA Compliance */}
          <div id="coppa-compliance" className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">👶 COPPA Compliance & Age Verification</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
              <p className="text-yellow-800 font-semibold">
                Our services are intended for adults 18+ only. We do not knowingly collect information from minors.
              </p>
            </div>
            <p className="text-gray-600">
              Tattoo services require age verification. If you are under 18, please do not use our consultation services. 
              If we discover that we have collected information from a minor, we will delete it immediately.
            </p>
          </div>

          {/* Contact Information */}
          <div id="contact" className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📞 Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Questions about our privacy practices? We're here to help:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Privacy Officer</h3>
                <p className="text-gray-600">Jose</p>
                <p className="text-gray-600">Sueno Tattoo</p>
                <p className="text-gray-600">Laurel, MD</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Contact Methods</h3>
                <p className="text-gray-600">📧 Email: privacy@suenotattoo.com</p>
                <p className="text-gray-600">📱 Phone: (240) 758-3226</p>
                <p className="text-gray-600">💬 In-person consultation</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}