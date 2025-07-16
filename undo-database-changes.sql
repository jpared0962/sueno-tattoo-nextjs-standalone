-- Undo Script for DreamInkAI Database Changes
-- This script removes all the tables, functions, triggers, and policies
-- that were incorrectly created for the Sueno Tattoo system

-- =============================================
-- 1. DROP TRIGGERS FIRST
-- =============================================

DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
DROP TRIGGER IF EXISTS update_consultation_requests_updated_at ON consultation_requests;
DROP TRIGGER IF EXISTS update_admin_users_updated_at ON admin_users;
DROP TRIGGER IF EXISTS notify_new_contact_submission ON contact_submissions;
DROP TRIGGER IF EXISTS notify_new_consultation_request ON consultation_requests;

-- =============================================
-- 2. DROP TABLES (CASCADE to remove dependencies)
-- =============================================

DROP TABLE IF EXISTS contact_submissions CASCADE;
DROP TABLE IF EXISTS consultation_requests CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;
DROP TABLE IF EXISTS admin_activity_log CASCADE;

-- =============================================
-- 3. DROP FUNCTIONS
-- =============================================

DROP FUNCTION IF EXISTS update_updated_at_column();
DROP FUNCTION IF EXISTS send_email_notification();

-- =============================================
-- 4. CLEAN UP ANY REMAINING POLICIES
-- =============================================

-- Note: Policies are automatically dropped when tables are dropped
-- But just in case, we'll explicitly try to drop them

DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Admin can view all contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Admin can update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can insert consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Admin can view all consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Admin can update consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Admin can view admin users" ON admin_users;
DROP POLICY IF EXISTS "Super admin can manage admin users" ON admin_users;
DROP POLICY IF EXISTS "Admin can view activity logs" ON admin_activity_log;
DROP POLICY IF EXISTS "System can insert activity logs" ON admin_activity_log;

-- =============================================
-- 5. REMOVE TEST DATA FROM NOTIFICATIONS
-- =============================================

-- Remove the test notifications we created
DELETE FROM notifications 
WHERE type = 'admin' 
AND title IN ('New Contact Form Submission', 'New Consultation Request Submission')
AND message LIKE '%Test User%' OR message LIKE '%Test Consultation%';

-- =============================================
-- 6. REVOKE PERMISSIONS (if needed)
-- =============================================

-- Note: Since we're dropping the tables, permissions are automatically revoked
-- But for completeness, we'll try to revoke them explicitly

REVOKE ALL ON contact_submissions FROM authenticated;
REVOKE ALL ON consultation_requests FROM authenticated;

-- =============================================
-- COMPLETION MESSAGE
-- =============================================

DO $$
BEGIN
    RAISE NOTICE 'Database cleanup completed successfully!';
    RAISE NOTICE 'Removed tables: contact_submissions, consultation_requests, admin_users, admin_activity_log';
    RAISE NOTICE 'Removed functions: update_updated_at_column, send_email_notification';
    RAISE NOTICE 'Removed all associated triggers and policies';
    RAISE NOTICE 'Cleaned up test notifications';
    RAISE NOTICE 'The DreamInkAI database has been restored to its original state';
END $$;