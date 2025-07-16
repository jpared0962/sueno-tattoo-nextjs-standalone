-- Check if admin user exists
SELECT * FROM admin_users WHERE email = 'jpared19@outlook.com';

-- If no results, insert the admin user
INSERT INTO admin_users (email, role, created_at, updated_at)
VALUES ('jpared19@outlook.com', 'admin', NOW(), NOW())
ON CONFLICT (email) DO NOTHING;

-- Verify the admin user was created
SELECT * FROM admin_users WHERE email = 'jpared19@outlook.com';