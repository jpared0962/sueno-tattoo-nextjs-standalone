'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminSetup() {
  const [email, setEmail] = useState('jpared19@outlook.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create the auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (authError) {
        // If user already exists, try to sign in
        if (authError.message.includes('already registered')) {
          const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });
          
          if (signInError) {
            throw signInError;
          }
          
          setMessage('User already exists. Signed in successfully. Now adding to admin table...');
        } else {
          throw authError;
        }
      } else {
        setMessage('Auth user created successfully. Now adding to admin table...');
      }

      // Step 2: Add to admin_users table
      const { data: adminData, error: adminError } = await supabase
        .from('admin_users')
        .insert([
          {
            email: email,
            role: 'admin',
          }
        ]);

      if (adminError && !adminError.message.includes('duplicate key')) {
        throw adminError;
      }

      setMessage('Admin user setup completed successfully! You can now log in.');
      
      // Clear form
      setPassword('');
      setConfirmPassword('');
      
    } catch (error: any) {
      console.error('Setup error:', error);
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Admin Setup (One-time only)
      </h2>
      
      <form onSubmit={handleSetup} className="space-y-4">
        {message && (
          <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-sm">
            {message}
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Admin Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:border-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:border-red-500 focus:outline-none"
            placeholder="Minimum 6 characters"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-900 bg-white focus:border-red-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-lg text-white font-bold transition-all ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-red-900 hover:bg-red-800 cursor-pointer'
          }`}
        >
          {loading ? 'Setting up...' : 'Setup Admin Account'}
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        <p>This will create both the Supabase auth user and admin database entry.</p>
        <p className="mt-2 font-semibold">Remove this component after setup is complete.</p>
      </div>
    </div>
  );
}