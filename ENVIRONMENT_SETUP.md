# Environment Variables Setup Guide

## Required Environment Variables

Your site needs these environment variables to enable Google Search Console verification and Analytics.

### 1. Create .env.local file

Create a file named `.env.local` in the project root with these variables:

```bash
# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code-here

# Google Analytics (optional but recommended)
NEXT_PUBLIC_GA_ID=your-ga-id-here
```

### 2. Get Google Search Console Verification Code

**Steps:**

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter: `neurondb.ai`
4. Choose verification method: **"HTML tag"**
5. You'll see something like:
   ```html
   <meta name="google-site-verification" content="google1234567890abcdef" />
   ```
6. Copy ONLY the content value: `google1234567890abcdef`
7. Add to your `.env.local`:
   ```bash
   NEXT_PUBLIC_GOOGLE_VERIFICATION=google1234567890abcdef
   ```

### 3. Get Google Analytics ID (Optional)

**Steps:**

1. Go to https://analytics.google.com/
2. Create a property for neurondb.ai
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to your `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 4. Verify It Works

After creating `.env.local`:

```bash
# 1. Check status
./check-seo-status.sh

# 2. Start development server
npm run dev

# 3. View page source (http://localhost:3000)
# Look for:
# <meta name="google-site-verification" content="your-code" />

# 4. Deploy to production
git add .env.local  # Only if not in .gitignore
git commit -m "Add Google verification"
git push

# Note: For Vercel, add these in the dashboard:
# Settings → Environment Variables
```

### 5. Complete Verification

1. Go back to Google Search Console
2. Click "Verify"
3. If successful, you'll see: ✅ "Ownership verified"
4. Submit sitemap: `sitemap.xml`

## Example .env.local File

```bash
# .env.local
# DO NOT commit this file to version control

# Google Analytics
NEXT_PUBLIC_GA_ID=G-ABC123DEF456

# Google Search Console
NEXT_PUBLIC_GOOGLE_VERIFICATION=google1234567890abcdef
```

## Deploying to Vercel

If deploying to Vercel, add these variables in the dashboard:

1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add both variables:
   - `NEXT_PUBLIC_GOOGLE_VERIFICATION`
   - `NEXT_PUBLIC_GA_ID`
4. Redeploy

## Troubleshooting

### Issue: Verification meta tag not appearing

**Check:**
1. Is `.env.local` in the project root?
2. Did you restart the dev server?
3. Is the variable name correct? (case-sensitive)
4. View page source to confirm the tag is there

### Issue: Verification failing in Search Console

**Check:**
1. Wait 1-2 minutes after deployment
2. Clear browser cache
3. Verify the meta tag is visible in page source
4. Try verification again

### Issue: Variable not working in production

**For Vercel:**
1. Add variables in Vercel dashboard
2. Redeploy the site
3. Check deployment logs

## Security Notes

- ✅ `.env.local` should be in `.gitignore`
- ✅ These variables are safe to expose (public-facing)
- ✅ They start with `NEXT_PUBLIC_` so they're bundled in client code
- ✅ Never commit sensitive API keys or secrets

## Next Steps

After setting up environment variables:

1. ✅ Verify Search Console
2. ✅ Submit sitemap
3. ✅ Request indexing
4. ✅ Start building backlinks

See `SEO_README.md` for complete next steps.

