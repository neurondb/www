#!/usr/bin/env node

/**
 * Verification script to ensure all blogs are present and will be included in the build
 */

const fs = require('fs');
const path = require('path');

// Read blog posts config
const blogPostsPath = path.join(__dirname, '../config/blogPosts.ts');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8');

// Extract blog slugs from config
const slugMatches = blogPostsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
const configSlugs = Array.from(slugMatches, m => m[1]);

console.log('📝 Blog Verification Script\n');
console.log(`Found ${configSlugs.length} blogs in config:\n`);

// Check each blog
const blogDir = path.join(__dirname, '../app/blog');
const missingBlogs = [];
const missingAssets = [];

configSlugs.forEach((slug, index) => {
  const blogPagePath = path.join(blogDir, slug, 'page.tsx');
  const blogAssetsPath = path.join(__dirname, '../public/blog', slug);
  
  const hasPage = fs.existsSync(blogPagePath);
  const hasAssets = fs.existsSync(blogAssetsPath);
  
  const status = hasPage && hasAssets ? '✅' : '❌';
  console.log(`${status} ${index + 1}. ${slug}`);
  
  if (!hasPage) {
    missingBlogs.push(slug);
    console.log(`   ⚠️  Missing page: ${blogPagePath}`);
  }
  
  if (!hasAssets) {
    missingAssets.push(slug);
    console.log(`   ⚠️  Missing assets: ${blogAssetsPath}`);
  } else {
    const assets = fs.readdirSync(blogAssetsPath);
    const hasHeader = assets.some(a => a.includes('header'));
    if (hasHeader) {
      console.log(`   📦 Assets: ${assets.length} files (includes header)`);
    } else {
      console.log(`   ⚠️  No header image found`);
    }
  }
});

console.log('\n' + '='.repeat(50) + '\n');

if (missingBlogs.length === 0 && missingAssets.length === 0) {
  console.log('✅ All blogs are present and ready for deployment!\n');
  console.log(`Total blogs: ${configSlugs.length}`);
  console.log('All blog pages: ✅');
  console.log('All blog assets: ✅');
  process.exit(0);
} else {
  console.log('❌ Some blogs are missing:\n');
  if (missingBlogs.length > 0) {
    console.log(`Missing pages (${missingBlogs.length}):`);
    missingBlogs.forEach(slug => console.log(`  - ${slug}`));
  }
  if (missingAssets.length > 0) {
    console.log(`\nMissing assets (${missingAssets.length}):`);
    missingAssets.forEach(slug => console.log(`  - ${slug}`));
  }
  process.exit(1);
}










