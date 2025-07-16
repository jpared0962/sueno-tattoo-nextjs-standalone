'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rateLimitCount, setRateLimitCount] = useState(0);
  const [rateLimitTimeout, setRateLimitTimeout] = useState(0);
  const router = useRouter();

  // Rate limiting - max 5 attempts per 15 minutes
  useEffect(() => {
    const attempts = localStorage.getItem('admin_login_attempts');
    const lastAttempt = localStorage.getItem('admin_last_attempt');
    
    if (attempts && lastAttempt) {
      const attemptCount = parseInt(attempts);
      const lastAttemptTime = parseInt(lastAttempt);
      const now = Date.now();
      const timeDiff = now - lastAttemptTime;
      
      // Reset after 15 minutes
      if (timeDiff > 15 * 60 * 1000) {
        localStorage.removeItem('admin_login_attempts');
        localStorage.removeItem('admin_last_attempt');
        setRateLimitCount(0);
      } else if (attemptCount >= 5) {
        const remainingTime = Math.ceil((15 * 60 * 1000 - timeDiff) / 1000);
        setRateLimitTimeout(remainingTime);
        setRateLimitCount(attemptCount);
      } else {
        setRateLimitCount(attemptCount);
      }
    }
  }, []);

  // Update rate limit timeout countdown
  useEffect(() => {
    if (rateLimitTimeout > 0) {
      const timer = setTimeout(() => {
        setRateLimitTimeout(rateLimitTimeout - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (rateLimitTimeout === 0 && rateLimitCount >= 5) {
      // Reset after timeout
      localStorage.removeItem('admin_login_attempts');
      localStorage.removeItem('admin_last_attempt');
      setRateLimitCount(0);
    }
  }, [rateLimitTimeout, rateLimitCount]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Check rate limiting
    if (rateLimitCount >= 5) {
      setError(`Too many failed attempts. Please try again in ${Math.ceil(rateLimitTimeout / 60)} minutes.`);
      setLoading(false);
      return;
    }

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    // Track login attempt
    const currentAttempts = parseInt(localStorage.getItem('admin_login_attempts') || '0');
    localStorage.setItem('admin_login_attempts', String(currentAttempts + 1));
    localStorage.setItem('admin_last_attempt', String(Date.now()));
    setRateLimitCount(currentAttempts + 1);

    try {
      // Authenticate with Supabase
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (authError) {
        console.error('Auth error:', authError);
        setError('Invalid email or password. Please check your credentials.');
        return;
      }

      // Check if user is an admin using the authenticated user's ID
      let { data: adminData, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('user_id', authData.user.id)
        .single();

      if (adminError || !adminData) {
        console.error('Admin check error:', adminError);
        console.log('Auth user ID:', authData.user.id);
        console.log('Looking for admin with user_id:', authData.user.id);
        
        // Also try by email as fallback
        const { data: adminByEmail, error: emailError } = await supabase
          .from('admin_users')
          .select('*')
          .eq('email', email)
          .single();
          
        if (emailError || !adminByEmail) {
          console.error('Admin email check error:', emailError);
          setError('This account does not have admin access.');
          
          // Sign out the user since they're not an admin
          await supabase.auth.signOut();
          return;
        } else {
          // Found by email, update user_id if missing
          if (!adminByEmail.user_id) {
            await supabase
              .from('admin_users')
              .update({ user_id: authData.user.id })
              .eq('email', email);
          }
          // Use the email-found data
          adminData = adminByEmail;
        }
      }

      // Reset rate limiting on successful login
      localStorage.removeItem('admin_login_attempts');
      localStorage.removeItem('admin_last_attempt');
      setRateLimitCount(0);
      
      // Store admin session
      localStorage.setItem('admin_token', authData.session?.access_token || 'authenticated');
      localStorage.setItem('admin_user', JSON.stringify(adminData));
      
      router.push('/admin/dashboard');
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

            {rateLimitCount > 0 && rateLimitCount < 5 && (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-3 rounded-lg mb-6 text-sm">
                Login attempts: {rateLimitCount}/5. {5 - rateLimitCount} attempts remaining.
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
                className="w-full p-3 border-2 border-gray-200 rounded-lg text-base text-gray-900 bg-white focus:border-red-500 focus:outline-none"
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
                className="w-full p-3 border-2 border-gray-200 rounded-lg text-base text-gray-900 bg-white focus:border-red-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading || rateLimitCount >= 5}
              className={`w-full p-3 rounded-lg text-base font-bold transition-all ${
                loading || rateLimitCount >= 5
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-900 hover:bg-red-800 cursor-pointer'
              } text-white`}
            >
              {loading ? 'Signing In...' : rateLimitCount >= 5 ? `Try again in ${Math.ceil(rateLimitTimeout / 60)} min` : 'Sign In'}
            </button>
          </form>


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