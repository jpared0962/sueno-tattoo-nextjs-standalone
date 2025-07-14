'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    try {
      // Simulate login for now
      // In a real app, you'd integrate with your auth service
      if (email === 'admin@suenotattoo.com' && password === 'admin123') {
        localStorage.setItem('admin_token', 'sample_token');
        router.push('/admin/dashboard');
      } else {
        setError('Invalid email or password. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="sueno-main-area">
        <div className="sueno-content-wrapper" style={{ paddingTop: '120px' }}>
          <section className="sueno-philosophy-section">
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔐</div>
                <h1 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Admin Login
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Access the consultation admin panel
                </p>
              </div>

              <form onSubmit={handleLogin} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '2px solid rgba(28, 37, 38, 0.1)'
              }}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:border-red-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:border-red-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-lg text-base font-bold transition-all ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-900 hover:bg-red-800 cursor-pointer'
              } text-white`}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Development Quick Access */}
          {process.env.NODE_ENV === 'development' && (
            <div className="text-center mt-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <p className="text-yellow-800 mb-2 text-sm">
                <strong>🔑 Quick Admin Access</strong>
              </p>
              <p className="text-gray-600 mb-4 text-xs">
                For testing and development purposes
              </p>
              <button
                onClick={() => {
                  localStorage.setItem('admin_bypass_key', 'sueno_admin_2024');
                  router.push('/admin/dashboard');
                }}
                className="bg-yellow-500 text-black px-5 py-2 rounded font-semibold text-sm hover:bg-yellow-400 transition-colors"
              >
                🚀 Enable Admin Access
              </button>
            </div>
          )}

          <div className="text-center mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-sm">
              <strong>Need access?</strong> Contact the site administrator to set up your admin account.
            </p>
          </div>

          <div className="text-center mt-4">
            <Link 
              href="/"
              className="text-red-900 hover:text-red-700 text-sm"
            >
              ← Back to Homepage
            </Link>
          </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}