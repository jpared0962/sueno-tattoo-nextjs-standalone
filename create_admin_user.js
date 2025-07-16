// Script to create admin user in Supabase
// Run this in your browser console on the deployed site

// First, you need to sign up the user in Supabase Auth
// Then run this script to add them to admin_users table

async function createAdminUser() {
  try {
    // Import Supabase client (this assumes you have access to it on the page)
    const { supabase } = window;
    
    if (!supabase) {
      console.error('Supabase client not found. Make sure you are on a page that loads the Supabase client.');
      return;
    }

    // Check if admin_users table exists and has the user
    const { data: existingAdmin, error: checkError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', 'jpared19@outlook.com')
      .single();

    if (existingAdmin) {
      console.log('Admin user already exists:', existingAdmin);
      return;
    }

    // Insert the admin user
    const { data, error } = await supabase
      .from('admin_users')
      .insert([
        {
          email: 'jpared19@outlook.com',
          role: 'admin',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Error creating admin user:', error);
    } else {
      console.log('Admin user created successfully:', data);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Run the function
createAdminUser();