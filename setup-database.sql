-- Sueno Tattoo Database Setup Script
-- This script creates all necessary tables, functions, policies, and triggers
-- for the consultation and contact form system

-- =============================================
-- 1. CREATE FUNCTIONS FIRST
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to send email notifications (logs to notifications table)
CREATE OR REPLACE FUNCTION send_email_notification()
RETURNS TRIGGER AS $$
BEGIN
    -- Insert notification for admin users
    INSERT INTO notifications (user_id, title, message, type)
    VALUES (
        '93b03375-be14-4340-b4da-aec8e60919ad'::uuid, -- Admin user ID
        'New ' || 
        CASE 
            WHEN TG_TABLE_NAME = 'contact_submissions' THEN 'Contact Form'
            WHEN TG_TABLE_NAME = 'consultation_requests' THEN 'Consultation Request'
            ELSE TG_TABLE_NAME
        END || ' Submission',
        'A new ' || 
        CASE 
            WHEN TG_TABLE_NAME = 'contact_submissions' THEN 'contact form submission'
            WHEN TG_TABLE_NAME = 'consultation_requests' THEN 'consultation request'
            ELSE 'submission'
        END || ' has been received from ' || NEW.name || ' (' || NEW.email || ')',
        'admin'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- 2. CREATE TABLES
-- =============================================

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    preferred_contact_method TEXT DEFAULT 'email' CHECK (preferred_contact_method IN ('email', 'phone', 'text')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'responded', 'closed')),
    admin_notes TEXT,
    responded_at TIMESTAMP WITH TIME ZONE,
    responded_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Consultation Requests Table
CREATE TABLE IF NOT EXISTS consultation_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    tattoo_idea TEXT NOT NULL,
    tattoo_size TEXT,
    tattoo_placement TEXT,
    has_tattoos BOOLEAN DEFAULT false,
    reference_images TEXT[], -- Array of image URLs
    budget_range TEXT,
    preferred_date DATE,
    preferred_time TEXT,
    additional_notes TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    admin_notes TEXT,
    scheduled_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
    permissions JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE(user_id)
);

-- Admin Activity Log Table
CREATE TABLE IF NOT EXISTS admin_activity_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    action TEXT NOT NULL,
    target_type TEXT,
    target_id UUID,
    details JSONB DEFAULT '{}',
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- =============================================
-- 3. CREATE INDEXES FOR PERFORMANCE
-- =============================================

-- Contact Submissions Indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Consultation Requests Indexes
CREATE INDEX IF NOT EXISTS idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON consultation_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_preferred_date ON consultation_requests(preferred_date);

-- Admin Users Indexes
CREATE INDEX IF NOT EXISTS idx_admin_users_user_id ON admin_users(user_id);
CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);

-- Admin Activity Log Indexes
CREATE INDEX IF NOT EXISTS idx_admin_activity_log_admin_id ON admin_activity_log(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_activity_log_action ON admin_activity_log(action);
CREATE INDEX IF NOT EXISTS idx_admin_activity_log_created_at ON admin_activity_log(created_at DESC);

-- =============================================
-- 4. ENABLE ROW LEVEL SECURITY
-- =============================================

-- Contact Submissions RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Consultation Requests RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Admin Users RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Admin Activity Log RLS
ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;

-- =============================================
-- 5. CREATE RLS POLICIES
-- =============================================

-- Contact Submissions Policies
CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can view all contact submissions" ON contact_submissions
    FOR SELECT USING (
        auth.uid() = '93b03375-be14-4340-b4da-aec8e60919ad'::uuid OR
        auth.uid() IN (SELECT user_id FROM admin_users) OR
        auth.role() = 'service_role'
    );

CREATE POLICY "Admin can update contact submissions" ON contact_submissions
    FOR UPDATE USING (
        auth.uid() = '93b03375-be14-4340-b4da-aec8e60919ad'::uuid OR
        auth.uid() IN (SELECT user_id FROM admin_users) OR
        auth.role() = 'service_role'
    );

-- Consultation Requests Policies
CREATE POLICY "Anyone can insert consultation requests" ON consultation_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can view all consultation requests" ON consultation_requests
    FOR SELECT USING (
        auth.uid() = '93b03375-be14-4340-b4da-aec8e60919ad'::uuid OR
        auth.uid() IN (SELECT user_id FROM admin_users) OR
        auth.role() = 'service_role'
    );

CREATE POLICY "Admin can update consultation requests" ON consultation_requests
    FOR UPDATE USING (
        auth.uid() = '93b03375-be14-4340-b4da-aec8e60919ad'::uuid OR
        auth.uid() IN (SELECT user_id FROM admin_users) OR
        auth.role() = 'service_role'
    );

-- Admin Users Policies
CREATE POLICY "Admin can view admin users" ON admin_users
    FOR SELECT USING (
        auth.uid() = '93b03375-be14-4340-b4da-aec8e60919ad'::uuid OR
        auth.uid() IN (SELECT user_id FROM admin_users WHERE role = 'super_admin') OR
        auth.role() = 'service_role'
    );

CREATE POLICY "Super admin can manage admin users" ON admin_users
    FOR ALL USING (
        auth.uid() = '93b03375-be14-4340-b4da-aec8e60919ad'::uuid OR
        auth.uid() IN (SELECT user_id FROM admin_users WHERE role = 'super_admin') OR
        auth.role() = 'service_role'
    );

-- Admin Activity Log Policies
CREATE POLICY "Admin can view activity logs" ON admin_activity_log
    FOR SELECT USING (
        auth.uid() = '93b03375-be14-4340-b4da-aec8e60919ad'::uuid OR
        auth.uid() IN (SELECT user_id FROM admin_users) OR
        auth.role() = 'service_role'
    );

CREATE POLICY "System can insert activity logs" ON admin_activity_log
    FOR INSERT WITH CHECK (true);

-- =============================================
-- 6. CREATE TRIGGERS
-- =============================================

-- Update timestamp triggers
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_consultation_requests_updated_at
    BEFORE UPDATE ON consultation_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
    BEFORE UPDATE ON admin_users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Email notification triggers
CREATE TRIGGER notify_new_contact_submission
    AFTER INSERT ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION send_email_notification();

CREATE TRIGGER notify_new_consultation_request
    AFTER INSERT ON consultation_requests
    FOR EACH ROW
    EXECUTE FUNCTION send_email_notification();

-- =============================================
-- 7. INSERT INITIAL ADMIN USER
-- =============================================

-- Insert the main admin user (if not exists)
INSERT INTO admin_users (user_id, role, permissions)
VALUES (
    '93b03375-be14-4340-b4da-aec8e60919ad'::uuid,
    'super_admin',
    '{"all": true, "manage_users": true, "manage_consultations": true, "manage_contacts": true}'::jsonb
)
ON CONFLICT (user_id) DO UPDATE SET
    role = 'super_admin',
    permissions = '{"all": true, "manage_users": true, "manage_consultations": true, "manage_contacts": true}'::jsonb,
    updated_at = now();

-- =============================================
-- 8. GRANT NECESSARY PERMISSIONS
-- =============================================

-- Grant permissions to authenticated users
GRANT SELECT, INSERT ON contact_submissions TO authenticated;
GRANT SELECT, INSERT ON consultation_requests TO authenticated;

-- Grant permissions to service role
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO service_role;

-- =============================================
-- SCRIPT COMPLETION MESSAGE
-- =============================================

DO $$
BEGIN
    RAISE NOTICE 'Database setup completed successfully!';
    RAISE NOTICE 'Created tables: contact_submissions, consultation_requests, admin_users, admin_activity_log';
    RAISE NOTICE 'Created functions: update_updated_at_column, send_email_notification';
    RAISE NOTICE 'Created policies for Row Level Security';
    RAISE NOTICE 'Created triggers for automated notifications';
    RAISE NOTICE 'Setup admin user with ID: 93b03375-be14-4340-b4da-aec8e60919ad';
END $$;