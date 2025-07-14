import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hqnwthvicofazfdnsati.supabase.co';
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhxbnd0aHZpY29mYXpmZG5zYXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MzYxNTEsImV4cCI6MjA2NjAxMjE1MX0.mpTZ1hGSMS8Gl-tdNq2D5NNerVbbz-q3d3DCtcGace8';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables - some features may not work');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key', 
  {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: {
      getItem: (key) => {
        if (typeof window !== 'undefined') {
          return window.localStorage.getItem(key);
        }
        return null;
      },
      setItem: (key, value) => {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, value);
        }
      },
      removeItem: (key) => {
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem(key);
        }
      }
    },
    storageKey: 'sb-auth-token',
    flowType: 'pkce'
  }
});

// Database table names
export const TABLES = {
  USERS: 'users',
  TATTOOS: 'tattoos', 
  CARE_SESSIONS: 'care_sessions',
  CARE_TASKS: 'care_tasks',
  QUIZ_PROGRESS: 'quiz_progress',
  NOTIFICATIONS: 'notifications',
  CONTACT_SUBMISSIONS: 'contact_submissions',
  CONSULTATION_REQUESTS: 'consultation_requests',
  ADMIN_USERS: 'admin_users',
  ADMIN_ACTIVITY_LOG: 'admin_activity_log'
};

// Auth helpers
export const authHelpers = {
  signUp: async (email, password, userData = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    return { data, error };
  },

  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  signOut: async () => {
    try {
      console.log('supabase.auth.signOut() starting...');
      
      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Sign out timeout after 10 seconds'));
        }, 10000);
      });
      
      // Race the sign out against the timeout
      const signOutPromise = supabase.auth.signOut();
      
      const { error } = await Promise.race([signOutPromise, timeoutPromise]);
      
      console.log('supabase.auth.signOut() completed, error:', error);
      
      // Clear any cached auth data from storage regardless of result
      try {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('sb-auth-token');
          localStorage.removeItem('supabase.auth.token');
          // Clear all supabase auth keys
          Object.keys(localStorage).forEach(key => {
            if (key.startsWith('sb-') && key.includes('auth')) {
              localStorage.removeItem(key);
            }
          });
        }
      } catch (storageError) {
        console.warn('Could not clear localStorage:', storageError);
      }
      
      return { error };
    } catch (error) {
      console.error('Sign out error:', error);
      
      // Force clear storage even on error/timeout
      try {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('sb-auth-token');
          localStorage.removeItem('supabase.auth.token');
          Object.keys(localStorage).forEach(key => {
            if (key.startsWith('sb-') && key.includes('auth')) {
              localStorage.removeItem(key);
            }
          });
        }
      } catch (storageError) {
        console.warn('Could not clear localStorage on error:', storageError);
      }
      
      return { error };
    }
  },

  getCurrentUser: () => {
    return supabase.auth.getUser();
  },

  onAuthStateChange: (callback) => {
    return supabase.auth.onAuthStateChange(callback);
  }
};

// Database helpers
export const dbHelpers = {
  // Create user profile after signup
  createUserProfile: async (userId, profileData) => {
    const { data, error } = await supabase
      .from(TABLES.USERS)
      .insert({
        id: userId,
        ...profileData,
        created_at: new Date().toISOString()
      });
    return { data, error };
  },

  // Create a new tattoo record
  createTattoo: async (userId, tattooData) => {
    const { data, error } = await supabase
      .from(TABLES.TATTOOS)
      .insert({
        user_id: userId,
        ...tattooData,
        created_at: new Date().toISOString()
      })
      .select()
      .single();
    return { data, error };
  },

  // Get user's tattoos
  getUserTattoos: async (userId) => {
    const { data, error } = await supabase
      .from(TABLES.TATTOOS)
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Create care session
  createCareSession: async (tattooId, sessionData) => {
    const { data, error } = await supabase
      .from(TABLES.CARE_SESSIONS)
      .insert({
        tattoo_id: tattooId,
        ...sessionData,
        created_at: new Date().toISOString()
      })
      .select()
      .single();
    return { data, error };
  },

  // Log care task completion
  logCareTask: async (sessionId, taskData) => {
    const { data, error } = await supabase
      .from(TABLES.CARE_TASKS)
      .insert({
        session_id: sessionId,
        ...taskData,
        completed_at: new Date().toISOString()
      });
    return { data, error };
  },

  // Save quiz progress
  saveQuizProgress: async (userId, quizData) => {
    const { data, error } = await supabase
      .from(TABLES.QUIZ_PROGRESS)
      .upsert({
        user_id: userId,
        ...quizData,
        updated_at: new Date().toISOString()
      });
    return { data, error };
  },

  // Schedule notification
  scheduleNotification: async (userId, notificationData) => {
    const { data, error } = await supabase
      .from(TABLES.NOTIFICATIONS)
      .insert({
        user_id: userId,
        ...notificationData,
        created_at: new Date().toISOString()
      });
    return { data, error };
  },

  // Create contact submission
  createContactSubmission: async (submissionData) => {
    const { data, error } = await supabase
      .from(TABLES.CONTACT_SUBMISSIONS)
      .insert({
        ...submissionData,
        created_at: new Date().toISOString()
      })
      .select()
      .single();
    
    // Send email notifications
    if (data && !error) {
      try {
        await supabase.functions.invoke('send-email', {
          body: {
            type: 'contact_submission',
            data: submissionData
          }
        });
      } catch (emailError) {
        console.warn('Email notification failed:', emailError);
        // Don't fail the submission if email fails
      }
    }
    
    return { data, error };
  },

  // Get contact submissions (admin only)
  getContactSubmissions: async (status = null) => {
    let query = supabase
      .from(TABLES.CONTACT_SUBMISSIONS)
      .select('*')
      .order('created_at', { ascending: false });
    
    if (status) {
      query = query.eq('status', status);
    }
    
    return await query;
  },

  // Update contact submission status
  updateContactSubmissionStatus: async (submissionId, status, adminNotes = '') => {
    const updateData = {
      status,
      updated_at: new Date().toISOString()
    };
    
    if (adminNotes) {
      updateData.admin_notes = adminNotes;
    }
    
    if (status === 'responded') {
      updateData.responded_at = new Date().toISOString();
      updateData.responded_by = (await supabase.auth.getUser()).data.user?.id;
    }
    
    return await supabase
      .from(TABLES.CONTACT_SUBMISSIONS)
      .update(updateData)
      .eq('id', submissionId)
      .select()
      .single();
  },

  // Create consultation request
  createConsultationRequest: async (requestData) => {
    const { data, error } = await supabase
      .from(TABLES.CONSULTATION_REQUESTS)
      .insert({
        ...requestData,
        status: 'pending',
        created_at: new Date().toISOString()
      })
      .select()
      .single();
    
    // Send email notifications
    if (data && !error) {
      try {
        await supabase.functions.invoke('send-email', {
          body: {
            type: 'consultation_request',
            data: requestData
          }
        });
      } catch (emailError) {
        console.warn('Email notification failed:', emailError);
        // Don't fail the submission if email fails
      }
    }
    
    return { data, error };
  },

  // Get all consultation requests (admin only)
  getConsultationRequests: async (status = null) => {
    let query = supabase
      .from(TABLES.CONSULTATION_REQUESTS)
      .select('*')
      .order('created_at', { ascending: false });
    
    if (status) {
      query = query.eq('status', status);
    }
    
    const { data, error } = await query;
    return { data, error };
  },

  // Update consultation request status
  updateConsultationStatus: async (requestId, status, notes = null) => {
    const updateData = {
      status,
      updated_at: new Date().toISOString()
    };
    
    if (notes) {
      updateData.admin_notes = notes;
    }
    
    const { data, error } = await supabase
      .from(TABLES.CONSULTATION_REQUESTS)
      .update(updateData)
      .eq('id', requestId)
      .select()
      .single();
    return { data, error };
  },

  // Check if user is admin
  checkAdminAccess: async (userId) => {
    const { data, error } = await supabase
      .from(TABLES.ADMIN_USERS)
      .select('role, permissions')
      .eq('user_id', userId)
      .single();
    return { data, error };
  },

  // Log admin activity
  logAdminActivity: async (adminId, action, targetType = null, targetId = null, details = {}) => {
    const { data, error } = await supabase
      .from(TABLES.ADMIN_ACTIVITY_LOG)
      .insert({
        admin_id: adminId,
        action,
        target_type: targetType,
        target_id: targetId,
        details,
        created_at: new Date().toISOString()
      });
    return { data, error };
  },

  // Create super admin (development helper)
  createSuperAdmin: async (email) => {
    try {
      const { data, error } = await supabase.rpc('create_super_admin', {
        admin_email: email
      });
      return { data, error };
    } catch (error) {
      console.error('Error creating super admin:', error);
      return { data: null, error };
    }
  }
};