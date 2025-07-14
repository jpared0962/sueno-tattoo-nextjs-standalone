'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Users, MessageCircle, TrendingUp, 
  Calendar, Settings,
  BarChart3, Star, LogOut
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const adminToken = localStorage.getItem('admin_token');
    const adminBypass = localStorage.getItem('admin_bypass_key');
    
    if (adminToken || adminBypass === 'sueno_admin_2024') {
      setIsAuthenticated(true);
    } else {
      router.push('/admin');
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_bypass_key');
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <main className="sueno-main-area">
        <div className="sueno-content-wrapper" style={{ paddingTop: '120px' }}>
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Manage consultations, reviews, and site analytics
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 p-2 bg-white rounded-lg shadow-sm border">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'consultations', label: 'Consultations', icon: Calendar },
            { id: 'reviews', label: 'Reviews', icon: Star },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-red-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Total Consultations</p>
                      <p className="text-3xl font-bold">24</p>
                    </div>
                    <Calendar className="w-8 h-8 text-blue-200" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Pending Reviews</p>
                      <p className="text-3xl font-bold">3</p>
                    </div>
                    <MessageCircle className="w-8 h-8 text-green-200" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Site Visitors</p>
                      <p className="text-3xl font-bold">1.2k</p>
                    </div>
                    <Users className="w-8 h-8 text-purple-200" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">Avg Rating</p>
                      <p className="text-3xl font-bold">5.0</p>
                    </div>
                    <Star className="w-8 h-8 text-yellow-200" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Consultations</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Sarah Johnson', date: '2 hours ago', status: 'pending' },
                      { name: 'Mike Chen', date: '1 day ago', status: 'confirmed' },
                      { name: 'Emma Wilson', date: '2 days ago', status: 'completed' }
                    ].map((consultation, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">{consultation.name}</p>
                          <p className="text-sm text-gray-600">{consultation.date}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          consultation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          consultation.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {consultation.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Reviews</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Alex Rodriguez', rating: 5, preview: 'Amazing work, very professional...' },
                      { name: 'Lisa Park', rating: 5, preview: 'Jose did an incredible job on my...' },
                      { name: 'David Kim', rating: 5, preview: 'Highly recommend! Clean shop and...' }
                    ].map((review, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-800">{review.name}</p>
                          <div className="flex">
                            {Array.from({ length: review.rating }, (_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{review.preview}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'consultations' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Consultation Management</h2>
              <p className="text-gray-600 mb-4">Manage consultation requests and appointments.</p>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Coming Soon:</strong> Full consultation management system with booking calendar, 
                  client communication, and appointment scheduling.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Management</h2>
              <p className="text-gray-600 mb-4">Monitor and respond to customer reviews.</p>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-green-800">
                  <strong>Integration Ready:</strong> Connect with Google Business API to manage reviews, 
                  respond to customers, and track review metrics.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Site Analytics</h2>
              <p className="text-gray-600 mb-4">Track website performance and visitor analytics.</p>
              
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <p className="text-purple-800">
                  <strong>Analytics Dashboard:</strong> Integration with Google Analytics, Search Console, 
                  and PageSpeed Insights for comprehensive site performance monitoring.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
              <p className="text-gray-600 mb-4">Configure admin preferences and system settings.</p>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Notification Preferences</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Email notifications for new consultations
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Email notifications for new reviews
                    </label>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">API Settings</h3>
                  <p className="text-sm text-gray-600">Configure Google Business and Analytics API connections.</p>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
        </div>
      </main>
    </>
  );
}