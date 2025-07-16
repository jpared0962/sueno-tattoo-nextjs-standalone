'use client';

import AdminSetup from '@/components/admin/AdminSetup';

export default function AdminSetupPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Account Setup</h1>
          <p className="text-gray-600 mt-2">One-time setup for admin access</p>
        </div>
        
        <AdminSetup />
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            After setup is complete, you can{' '}
            <a href="/admin" className="text-red-600 hover:text-red-700 underline">
              go to admin login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}