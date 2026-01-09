-- Vercel Postgres Database Setup for Blog Comments
-- Run this SQL in your Vercel Postgres database

-- Create the blog_comments table
CREATE TABLE IF NOT EXISTS blog_comments (
  id SERIAL PRIMARY KEY,
  post_slug VARCHAR(255) NOT NULL,
  post_title VARCHAR(500) NOT NULL,
  author VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  approved BOOLEAN DEFAULT false,
  parent_id INTEGER REFERENCES blog_comments(id) ON DELETE CASCADE
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_comments_post_slug ON blog_comments(post_slug);
CREATE INDEX IF NOT EXISTS idx_blog_comments_approved ON blog_comments(approved);
CREATE INDEX IF NOT EXISTS idx_blog_comments_created_at ON blog_comments(created_at);
CREATE INDEX IF NOT EXISTS idx_blog_comments_parent_id ON blog_comments(parent_id);

-- Optional: Create a view for approved comments only
CREATE OR REPLACE VIEW approved_comments AS
SELECT 
  id,
  post_slug,
  post_title,
  author,
  email,
  content,
  created_at,
  parent_id
FROM blog_comments
WHERE approved = true
ORDER BY created_at DESC;



