-- Safe Cleanup Script - Only removes what we added
-- This only removes the send_email_notification function that we created

-- =============================================
-- 1. REMOVE ONLY THE FUNCTION WE CREATED
-- =============================================

-- Remove only the send_email_notification function (this was created by us)
-- The update_updated_at_column function already existed in DreamInkAI
DROP FUNCTION IF EXISTS send_email_notification();

-- =============================================
-- 2. VERIFICATION
-- =============================================

-- Verify the tables we created are gone
SELECT COUNT(*) as remaining_tables 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('contact_submissions', 'consultation_requests', 'admin_users', 'admin_activity_log');

-- Verify only our function is removed
SELECT routine_name, routine_type 
FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_name IN ('update_updated_at_column', 'send_email_notification');

-- =============================================
-- COMPLETION MESSAGE
-- =============================================

DO $$
BEGIN
    RAISE NOTICE 'Safe cleanup completed!';
    RAISE NOTICE 'Removed our send_email_notification function';
    RAISE NOTICE 'Left the existing update_updated_at_column function intact for DreamInkAI';
    RAISE NOTICE 'All Sueno Tattoo tables and triggers were successfully removed';
END $$;