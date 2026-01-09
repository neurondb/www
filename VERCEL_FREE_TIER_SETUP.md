# Blog Comments Setup - Vercel Free Tier ✅

Perfect for open source projects! Vercel Postgres is **FREE** and included in the free tier.

## Quick Setup (5 minutes)

### Step 1: Create Postgres Database (Free)

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click **Storage** tab → **Create Database**
4. Choose **Postgres**
5. Name it: `neurondb-comments`
6. Select region
7. Click **Create** (FREE! 🎉)

### Step 2: Create Table

1. In your database, click **Query** tab
2. Copy/paste this SQL and run:

```sql
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

CREATE INDEX IF NOT EXISTS idx_blog_comments_post_slug ON blog_comments(post_slug);
CREATE INDEX IF NOT EXISTS idx_blog_comments_approved ON blog_comments(approved);
```

### Step 3: Deploy

1. Push your code to GitHub
2. Vercel auto-deploys
3. Environment variables are **automatically** set by Vercel
4. Done! ✅

## Free Tier Limits (More than enough!)

- ✅ **256 MB storage** (thousands of comments)
- ✅ **1 GB/month bandwidth** (plenty for comments)
- ✅ **Unlimited databases**
- ✅ **Automatic backups**
- ✅ **No credit card required**

## Features Included

✅ **Persistent storage** - Comments never lost
✅ **Moderation** - Approve before showing
✅ **Threaded replies** - Nested conversations
✅ **Free forever** - No cost for open source!

## Approve Comments

Run this in Vercel Postgres Query tab:

```sql
-- View pending
SELECT id, author, LEFT(content, 50) as preview 
FROM blog_comments 
WHERE approved = false;

-- Approve
UPDATE blog_comments SET approved = true WHERE id = 123;
```

## Troubleshooting

**If comments don't save:**
1. Check Vercel dashboard → Storage → Your database is active
2. Make sure table was created (run the CREATE TABLE SQL)
3. Check Vercel deployment logs for errors

**Environment variables are automatic** - Vercel sets them when you create the database.

That's it! Your comments system is ready and **100% free**! 🚀


