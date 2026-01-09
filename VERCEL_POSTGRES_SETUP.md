# Vercel Postgres Setup for Blog Comments

## Step 1: Create Vercel Postgres Database

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project (`neurondb-www`)
3. Click on the **Storage** tab
4. Click **Create Database**
5. Select **Postgres** (or **Neon Postgres**)
6. Choose a name (e.g., `neurondb-comments`)
7. Select a region (closest to your users)
8. Click **Create**

## Step 2: Run the SQL Setup Script

1. In Vercel Dashboard, go to your database
2. Click on the **Query** tab
3. Copy and paste the SQL from `vercel-comments-setup.sql`:

```sql
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
```

4. Click **Run Query**

## Step 3: Environment Variables (Automatic)

Vercel automatically adds these environment variables when you create the database:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`

These are automatically available in your Next.js API routes.

## Step 4: Test It!

1. Deploy your site to Vercel
2. Visit any blog post
3. Scroll down to the Comments section
4. Submit a test comment

## Moderation: Approve Comments

To approve comments, run this SQL in Vercel Postgres Query tab:

```sql
-- View pending comments
SELECT id, author, content, post_slug, created_at 
FROM blog_comments 
WHERE approved = false 
ORDER BY created_at DESC;

-- Approve a comment
UPDATE blog_comments 
SET approved = true 
WHERE id = <comment_id>;
```

Or create an admin panel later!

## Features Included

✅ Persistent storage (never lost)
✅ Comment moderation (requires approval)
✅ Threaded replies (nested comments)
✅ Email validation
✅ Spam protection ready
✅ Fast queries with indexes

## Free Tier Limits

- **Storage**: 256 MB
- **Bandwidth**: 1 GB/month
- Perfect for blog comments!

Comments are now saved permanently and will load every time! 🎉


