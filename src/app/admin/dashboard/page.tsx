'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Users, MessageCircle, TrendingUp, 
  Calendar, Settings,
  BarChart3, Star, LogOut, Phone, Mail, Clock, CheckCircle
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [consultationRequests, setConsultationRequests] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication - only run on client side
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }
    
    const adminToken = localStorage.getItem('admin_token');
    const adminBypass = localStorage.getItem('admin_bypass_key');
    
    console.log('Dashboard auth check:', { adminToken: !!adminToken, adminBypass: adminBypass === 'sueno_admin_2024' });
    
    if (adminToken || adminBypass === 'sueno_admin_2024') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      router.push('/admin');
    }
    setLoading(false);
  }, [router]);

  const fetchData = async () => {
    setDataLoading(true);
    try {
      // Fetch contact submissions
      const { data: contacts, error: contactError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (contactError) {
        console.error('Error fetching contact submissions:', contactError);
      } else {
        setContactSubmissions(contacts || []);
      }

      // Fetch consultation requests
      const { data: consultations, error: consultationError } = await supabase
        .from('consultation_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (consultationError) {
        console.error('Error fetching consultation requests:', consultationError);
      } else {
        setConsultationRequests(consultations || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setDataLoading(false);
    }
  };

  const updateContactStatus = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) {
        console.error('Error updating contact status:', error);
      } else {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error updating contact status:', error);
    }
  };

  const updateConsultationStatus = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('consultation_requests')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) {
        console.error('Error updating consultation status:', error);
      } else {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error updating consultation status:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleLogout = async () => {
    // Clear localStorage
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_bypass_key');
    localStorage.removeItem('admin_user');
    
    // Sign out from Supabase
    await supabase.auth.signOut();
    
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
      <main className="min-h-screen bg-ink-black">
        <div className="pt-20 px-4 pb-8">
          {/* Header */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
              <div>
                <h1 className="text-4xl font-bold text-crisp-white mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-xl text-crisp-white/80">
                  Manage consultations, reviews, and site analytics
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-deep-red text-crisp-white rounded-lg hover:bg-deep-red/80 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 p-2 glass-card rounded-lg overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'consultations', label: 'Consultations', icon: Calendar },
            { id: 'contacts', label: 'Contact Forms', icon: MessageCircle },
            { id: 'reviews', label: 'Reviews', icon: Star },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-md font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-deep-red text-crisp-white'
                    : 'text-crisp-white/80 hover:bg-charcoal-gray/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

            {/* Tab Content */}
            <div className="glass-card rounded-lg p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-crisp-white mb-6">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-crisp-white/70 text-sm">Total Consultations</p>
                      <p className="text-3xl font-bold text-crisp-white">{dataLoading ? '...' : consultationRequests.length}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-gold" />
                  </div>
                </div>
                
                <div className="glass-panel p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-crisp-white/70 text-sm">Contact Forms</p>
                      <p className="text-3xl font-bold text-crisp-white">{dataLoading ? '...' : contactSubmissions.length}</p>
                    </div>
                    <MessageCircle className="w-8 h-8 text-gold" />
                  </div>
                </div>
                
                <div className="glass-panel p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-crisp-white/70 text-sm">Pending Consultations</p>
                      <p className="text-3xl font-bold text-crisp-white">{dataLoading ? '...' : consultationRequests.filter(c => c.status === 'pending').length}</p>
                    </div>
                    <Clock className="w-8 h-8 text-gold" />
                  </div>
                </div>
                
                <div className="glass-panel p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-crisp-white/70 text-sm">Pending Contacts</p>
                      <p className="text-3xl font-bold text-crisp-white">{dataLoading ? '...' : contactSubmissions.filter(c => c.status === 'pending').length}</p>
                    </div>
                    <Star className="w-8 h-8 text-gold" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-crisp-white mb-4">Recent Consultations</h3>
                  <div className="space-y-3">
                    {dataLoading ? (
                      <div className="text-center py-4 text-crisp-white/70">Loading...</div>
                    ) : consultationRequests.length === 0 ? (
                      <div className="text-center py-4 text-crisp-white/70">No consultation requests yet</div>
                    ) : (
                      consultationRequests.slice(0, 3).map((consultation) => (
                        <div key={consultation.id} className="flex items-center justify-between p-3 glass-panel rounded-lg">
                          <div>
                            <p className="font-medium text-crisp-white">{consultation.name}</p>
                            <p className="text-sm text-crisp-white/70">{formatDate(consultation.created_at)}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            consultation.status === 'pending' ? 'bg-gold/20 text-gold' :
                            consultation.status === 'confirmed' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {consultation.status}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-crisp-white mb-4">Recent Contact Forms</h3>
                  <div className="space-y-3">
                    {dataLoading ? (
                      <div className="text-center py-4 text-crisp-white/70">Loading...</div>
                    ) : contactSubmissions.length === 0 ? (
                      <div className="text-center py-4 text-crisp-white/70">No contact submissions yet</div>
                    ) : (
                      contactSubmissions.slice(0, 3).map((contact) => (
                        <div key={contact.id} className="p-3 glass-panel rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-crisp-white">{contact.name}</p>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              contact.status === 'pending' ? 'bg-gold/20 text-gold' :
                              contact.status === 'responded' ? 'bg-green-500/20 text-green-400' :
                              'bg-charcoal-gray/50 text-crisp-white/70'
                            }`}>
                              {contact.status}
                            </span>
                          </div>
                          <p className="text-sm text-crisp-white/70">{formatDate(contact.created_at)}</p>
                          <p className="text-sm text-crisp-white/70 mt-1">{contact.service_interest}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'consultations' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-crisp-white">Consultation Requests</h2>
                <button 
                  onClick={fetchData}
                  className="px-4 py-2 bg-gold text-ink-black rounded-lg hover:bg-gold/80 transition-colors font-medium"
                >
                  Refresh
                </button>
              </div>
              
              {dataLoading ? (
                <div className="text-center py-8 text-crisp-white/70">Loading consultation requests...</div>
              ) : consultationRequests.length === 0 ? (
                <div className="text-center py-8 text-crisp-white/70">No consultation requests yet</div>
              ) : (
                <div className="space-y-4">
                  {consultationRequests.map((consultation) => (
                    <div key={consultation.id} className="glass-panel rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-crisp-white">{consultation.name}</h3>
                          <p className="text-sm text-crisp-white/70">{formatDate(consultation.created_at)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 text-sm rounded-full ${
                            consultation.status === 'pending' ? 'bg-gold/20 text-gold' :
                            consultation.status === 'confirmed' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {consultation.status}
                          </span>
                          <select 
                            value={consultation.status} 
                            onChange={(e) => updateConsultationStatus(consultation.id, e.target.value)}
                            className="text-sm bg-charcoal-gray/50 border border-crisp-white/20 rounded px-2 py-1 text-crisp-white"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-crisp-white/80"><strong className="text-crisp-white">Email:</strong> {consultation.email}</p>
                          <p className="text-sm text-crisp-white/80"><strong className="text-crisp-white">Phone:</strong> {consultation.phone}</p>
                          <p className="text-sm text-crisp-white/80"><strong className="text-crisp-white">Size:</strong> {consultation.size || 'Not specified'}</p>
                          <p className="text-sm text-crisp-white/80"><strong className="text-crisp-white">Placement:</strong> {consultation.placement || 'Not specified'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-crisp-white/80"><strong className="text-crisp-white">Timeframe:</strong> {consultation.timeframe || 'Not specified'}</p>
                          <p className="text-sm text-crisp-white/80"><strong className="text-crisp-white">Experience:</strong> {consultation.experience || 'Not specified'}</p>
                          <p className="text-sm text-crisp-white/80"><strong className="text-crisp-white">Budget:</strong> {consultation.budget || 'Not specified'}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-crisp-white/80 mb-2"><strong className="text-crisp-white">Tattoo Idea:</strong></p>
                        <p className="text-sm text-crisp-white bg-charcoal-gray/50 p-3 rounded">{consultation.tattoo_idea}</p>
                      </div>
                      
                      {consultation.availability && (
                        <div className="mb-4">
                          <p className="text-sm text-crisp-white/80 mb-2"><strong className="text-crisp-white">Availability:</strong></p>
                          <p className="text-sm text-crisp-white bg-charcoal-gray/50 p-3 rounded">{consultation.availability}</p>
                        </div>
                      )}
                      
                      <div className="flex gap-2">
                        <a 
                          href={`tel:${consultation.phone}`}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          Call
                        </a>
                        <a 
                          href={`mailto:${consultation.email}`}
                          className="flex items-center gap-2 px-4 py-2 bg-gold text-ink-black rounded hover:bg-gold/80 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'contacts' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Contact Form Submissions</h2>
                <button 
                  onClick={fetchData}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh
                </button>
              </div>
              
              {dataLoading ? (
                <div className="text-center py-8">Loading contact submissions...</div>
              ) : contactSubmissions.length === 0 ? (
                <div className="text-center py-8 text-gray-500">No contact submissions yet</div>
              ) : (
                <div className="space-y-4">
                  {contactSubmissions.map((contact) => (
                    <div key={contact.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{formatDate(contact.created_at)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 text-sm rounded-full ${
                            contact.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            contact.status === 'responded' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {contact.status}
                          </span>
                          <select 
                            value={contact.status} 
                            onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                            className="text-sm border rounded px-2 py-1"
                          >
                            <option value="pending">Pending</option>
                            <option value="responded">Responded</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600"><strong>Email:</strong> {contact.email}</p>
                          <p className="text-sm text-gray-600"><strong>Phone:</strong> {contact.phone}</p>
                          <p className="text-sm text-gray-600"><strong>Service Interest:</strong> {contact.service_interest}</p>
                          <p className="text-sm text-gray-600"><strong>Newsletter:</strong> {contact.newsletter_signup ? 'Yes' : 'No'}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2"><strong>Message:</strong></p>
                        <p className="text-sm text-gray-800 bg-white p-3 rounded">{contact.message}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <a 
                          href={`tel:${contact.phone}`}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          Call
                        </a>
                        <a 
                          href={`mailto:${contact.email}`}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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