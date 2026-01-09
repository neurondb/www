#!/usr/bin/env node

/**
 * Link Scanner and Fixer for NeuronDB Website
 * 
 * Scans all internal links across the Next.js website and:
 * 1. Discovers all links in TSX/TS files, config files, and markdown
 * 2. Validates routes exist
 * 3. Detects broken links
 * 4. Auto-fixes common issues
 * 5. Generates comprehensive report
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

class LinkScanner {
  constructor() {
    this.routes = {
      static: new Set(),
      dynamic: {
        blog: new Set(),
        tutorials: new Set(),
      },
      docs: new Set(),
    };
    this.allLinks = [];
    this.brokenLinks = [];
    this.fixes = new Map(); // file -> newContent
  }

  async scan() {
    console.log('🔍 Starting link scan...\n');
    
    // Phase 1: Build route map
    await this.buildRouteMap();
    console.log(`✓ Built route map: ${this.routes.static.size} static routes, ${this.routes.docs.size} docs routes`);
    console.log(`  Blog posts: ${this.routes.dynamic.blog.size}, Tutorials: ${this.routes.dynamic.tutorials.size}\n`);
    
    // Phase 2: Extract links
    await this.extractLinks();
    console.log(`✓ Extracted ${this.allLinks.length} links from codebase\n`);
    
    // Phase 3: Validate links
    this.validateLinks();
    console.log(`✓ Validated links: ${this.brokenLinks.length} broken links found\n`);
    
    // Phase 4: Generate fixes
    this.generateFixes();
    
    // Phase 5: Generate report
    await this.generateReport();
    
    // Phase 6: Apply fixes
    if (this.fixes.size > 0) {
      console.log(`\n🔧 Applying ${this.fixes.size} automatic fixes...`);
      this.applyFixes();
      console.log('✓ Fixes applied\n');
    }
    
    console.log('✨ Link scan complete!');
    console.log(`\nSummary: ${this.allLinks.length} links scanned, ${this.brokenLinks.length} broken, ${this.fixes.size} auto-fixed`);
  }

  async buildRouteMap() {
    // Scan app directory for routes
    await this.scanDirectory('app', (filePath, isDirectory) => {
      if (!isDirectory && filePath.endsWith('page.tsx')) {
        const relativePath = path.relative(path.join(rootDir, 'app'), filePath);
        const route = this.filePathToRoute(relativePath);
        
        if (route.startsWith('/docs/')) {
          this.routes.docs.add(route);
        } else if (route.startsWith('/blog/')) {
          // Dynamic route, will validate against config
        } else if (route.startsWith('/tutorials/')) {
          // Dynamic route, will validate against config
        } else {
          this.routes.static.add(route);
        }
      }
    });

    // Load blog slugs from config
    const blogPostsPath = path.join(rootDir, 'config', 'blogPosts.ts');
    if (fs.existsSync(blogPostsPath)) {
      const content = fs.readFileSync(blogPostsPath, 'utf-8');
      const slugMatches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
      for (const match of slugMatches) {
        this.routes.dynamic.blog.add(`/blog/${match[1]}`);
      }
    }

    // Load tutorial slugs
    const tutorialsPath = path.join(rootDir, 'app', 'tutorials', 'page.tsx');
    if (fs.existsSync(tutorialsPath)) {
      const content = fs.readFileSync(tutorialsPath, 'utf-8');
      const slugMatches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
      for (const match of slugMatches) {
        this.routes.dynamic.tutorials.add(`/tutorials/${match[1]}`);
      }
    }
  }

  async scanDirectory(dir, callback) {
    const fullPath = path.join(rootDir, dir);
    if (!fs.existsSync(fullPath)) return;

    try {
      const entries = fs.readdirSync(fullPath, { withFileTypes: true });
      for (const entry of entries) {
        const entryPath = path.join(fullPath, entry.name);
        
        // Skip node_modules, .next, etc.
        if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === '.next') {
          continue;
        }

        if (entry.isDirectory()) {
          callback(entryPath, true);
          await this.scanDirectory(path.relative(rootDir, entryPath), callback);
        } else {
          callback(entryPath, false);
        }
      }
    } catch (err) {
      // Skip files we can't read
    }
  }

  filePathToRoute(filePath) {
    // Convert app/docs/vector-engine/page.tsx -> /docs/vector-engine
    let route = filePath
      .replace(/\\/g, '/')
      .replace(/\/page\.tsx$/, '')
      .replace(/^app/, '');
    
    if (!route.startsWith('/')) {
      route = '/' + route;
    }
    
    // Handle index routes
    if (route === '' || route === '/') {
      return '/';
    }
    
    return route;
  }

  async extractLinks() {
    // Scan all TSX/TS files
    await this.scanFiles(['app', 'components', 'config'], (filePath) => {
      this.extractLinksFromFile(filePath);
    });

    // Also check sitemap.ts specifically for URL validation
    const sitemapPath = path.join(rootDir, 'app', 'sitemap.ts');
    if (fs.existsSync(sitemapPath)) {
      this.extractLinksFromSitemap(sitemapPath);
    }
  }

  extractLinksFromSitemap(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');
      const relativePath = path.relative(rootDir, filePath);

      // Extract URLs from sitemap: url: `${baseUrl}/path` or url: 'https://domain.com/path'
      const urlRegex = /url:\s*[`'"]?https?:\/\/[^/]+([^`'"]+)/g;
      let match;
      while ((match = urlRegex.exec(content)) !== null) {
        const line = content.substring(0, match.index).split('\n').length;
        const pathPart = match[1]; // Extract just the path part
        if (this.isInternalLink(pathPart)) {
          this.allLinks.push({
            file: relativePath,
            line,
            href: pathPart,
            type: 'sitemap',
            context: lines[line - 1]?.trim(),
          });
        }
      }

      // Also match template literals: url: `${baseUrl}/docs/...`
      const templateUrlRegex = /url:\s*`\$\{baseUrl\}([^`]+)`/g;
      while ((match = templateUrlRegex.exec(content)) !== null) {
        const line = content.substring(0, match.index).split('\n').length;
        const pathPart = match[1];
        if (this.isInternalLink(pathPart)) {
          this.allLinks.push({
            file: relativePath,
            line,
            href: pathPart,
            type: 'sitemap',
            context: lines[line - 1]?.trim(),
          });
        }
      }
    } catch (err) {
      // Skip if can't read
    }
  }

  async scanFiles(dirs, callback) {
    for (const dir of dirs) {
      await this.scanDirectory(dir, (filePath, isDirectory) => {
        if (!isDirectory && /\.(tsx?|jsx?)$/.test(filePath)) {
          callback(filePath);
        }
      });
    }
  }

  extractLinksFromFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');
      const relativePath = path.relative(rootDir, filePath);

      // Extract Next.js Link components: <Link href="...">
      const linkRegex = /<Link\s+[^>]*href\s*=\s*{?['"]([^'"]+)['"]/g;
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        const line = content.substring(0, match.index).split('\n').length;
        const href = match[1];
        if (this.isInternalLink(href)) {
          this.allLinks.push({
            file: relativePath,
            line,
            href,
            type: 'link',
            context: lines[line - 1]?.trim(),
          });
        }
      }

      // Extract href attributes: href="..." or href={'...'} (not already captured as Link)
      const hrefRegex = /href\s*=\s*{?['"]([^'"]+)['"]/g;
      while ((match = hrefRegex.exec(content)) !== null) {
        // Skip if already captured as Link component
        const beforeMatch = content.substring(0, match.index);
        if (beforeMatch.includes('<Link')) continue;
        
        const line = content.substring(0, match.index).split('\n').length;
        const href = match[1];
        if (this.isInternalLink(href)) {
          this.allLinks.push({
            file: relativePath,
            line,
            href,
            type: 'href',
            context: lines[line - 1]?.trim(),
          });
        }
      }

      // Extract markdown links: [text](/path) - but skip image markdown ![alt](/path)
      // First, find all image markdown to exclude them
      const imageMarkdownRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
      const imagePaths = new Set();
      while ((match = imageMarkdownRegex.exec(content)) !== null) {
        imagePaths.add(match[2]);
      }
      
      // Now extract regular markdown links (not images)
      const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      while ((match = markdownLinkRegex.exec(content)) !== null) {
        // Skip if this is an image (starts with !)
        const beforeMatch = content.substring(Math.max(0, match.index - 1), match.index);
        if (beforeMatch === '!') continue;
        
        const line = content.substring(0, match.index).split('\n').length;
        const href = match[2];
        // Skip if it's an image path we already found
        if (imagePaths.has(href)) continue;
        
        if (this.isInternalLink(href) && !href.startsWith('http')) {
          this.allLinks.push({
            file: relativePath,
            line,
            href,
            type: 'markdown',
            context: lines[line - 1]?.trim(),
          });
        }
      }

      // Extract template literal hrefs: href={`/path`}
      const templateHrefRegex = /href\s*=\s*\{`([^`${]+)`\}/g;
      while ((match = templateHrefRegex.exec(content)) !== null) {
        const line = content.substring(0, match.index).split('\n').length;
        const href = match[1];
        if (this.isInternalLink(href)) {
          this.allLinks.push({
            file: relativePath,
            line,
            href,
            type: 'link',
            context: lines[line - 1]?.trim(),
          });
        }
      }
    } catch (err) {
      // Skip files we can't read
    }
  }

  isInternalLink(href) {
    // Internal links start with / and don't start with http/https/mailto
    if (!href || !href.startsWith('/') || href.startsWith('//') || href.startsWith('http') || href.startsWith('mailto')) {
      return false;
    }
    
    // Skip static asset files (images, fonts, etc.)
    const assetExtensions = ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
    const lowerHref = href.toLowerCase();
    // Check if href ends with an asset extension (but allow query params)
    const hrefWithoutQuery = lowerHref.split('?')[0].split('#')[0];
    if (assetExtensions.some(ext => hrefWithoutQuery.endsWith(ext))) {
      return false;
    }
    
    return true;
  }

  validateLinks() {
    const seen = new Set();
    for (const link of this.allLinks) {
      // Deduplicate identical links from same file/line
      const key = `${link.file}:${link.line}:${link.href}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const normalized = this.normalizePath(link.href);
      const [pathPart] = normalized.split('#');
      
      // Check if route exists
      if (!this.routeExists(pathPart)) {
        this.brokenLinks.push({
          link,
          issue: this.detectIssue(pathPart),
          suggestedFix: this.suggestFix(pathPart),
          severity: 'error',
        });
      }
    }
  }

  normalizePath(href) {
    // Remove trailing slash for consistency (except root)
    let normalized = href.trim();
    if (normalized.length > 1 && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }
    return normalized;
  }

  routeExists(route) {
    // Root route
    if (route === '/' || route === '') {
      return true;
    }

    // Check static routes
    if (this.routes.static.has(route)) {
      return true;
    }

    // Check docs routes
    if (this.routes.docs.has(route)) {
      return true;
    }

    // Check dynamic blog routes
    if (route.startsWith('/blog/')) {
      // If it's a subpath of a blog post (e.g., /blog/xyz/header.svg), 
      // check if the parent blog route exists
      const parts = route.replace('/blog/', '').split('/');
      const blogSlug = parts[0];
      const blogRoute = `/blog/${blogSlug}`;
      
      // If it's exactly a blog post route
      if (parts.length === 1 && this.routes.dynamic.blog.has(blogRoute)) {
        return true;
      }
      
      // If it's a subpath, check if it's a valid asset in public folder
      if (parts.length > 1) {
        const publicPath = path.join(rootDir, 'public', route);
        if (fs.existsSync(publicPath)) {
          return true;
        }
        // Also check without query params
        const routeWithoutQuery = route.split('?')[0];
        const publicPathWithoutQuery = path.join(rootDir, 'public', routeWithoutQuery);
        if (fs.existsSync(publicPathWithoutQuery)) {
          return true;
        }
      }
    }

    // Check dynamic tutorial routes
    if (route.startsWith('/tutorials/')) {
      const parts = route.replace('/tutorials/', '').split('/');
      const tutorialSlug = parts[0];
      const tutorialRoute = `/tutorials/${tutorialSlug}`;
      
      // If it's exactly a tutorial route
      if (parts.length === 1 && this.routes.dynamic.tutorials.has(tutorialRoute)) {
        return true;
      }
      
      // If it's a subpath, check if it's a valid asset in public folder
      if (parts.length > 1) {
        const publicPath = path.join(rootDir, 'public', route);
        if (fs.existsSync(publicPath)) {
          return true;
        }
        // Also check without query params
        const routeWithoutQuery = route.split('?')[0];
        const publicPathWithoutQuery = path.join(rootDir, 'public', routeWithoutQuery);
        if (fs.existsSync(publicPathWithoutQuery)) {
          return true;
        }
      }
    }

    // Check other public asset routes
    const publicPath = path.join(rootDir, 'public', route);
    if (fs.existsSync(publicPath)) {
      return true;
    }
    // Also check without query params
    const routeWithoutQuery = route.split('?')[0];
    const publicPathWithoutQuery = path.join(rootDir, 'public', routeWithoutQuery);
    if (fs.existsSync(publicPathWithoutQuery)) {
      return true;
    }

    return false;
  }

  detectIssue(route) {
    // Check for common typos
    if (route.startsWith('/doc') && !route.startsWith('/docs')) {
      return 'typo';
    }
    if (route.startsWith('/tutorial') && !route.startsWith('/tutorials')) {
      return 'typo';
    }
    
    // Check case sensitivity
    const lowerRoute = route.toLowerCase();
    for (const validRoute of [...this.routes.static, ...this.routes.docs]) {
      if (validRoute.toLowerCase() === lowerRoute && validRoute !== route) {
        return 'case_mismatch';
      }
    }

    // Check if it's a missing slug
    if (route.startsWith('/blog/') || route.startsWith('/tutorials/')) {
      return 'invalid_slug';
    }

    return 'missing_route';
  }

  suggestFix(route) {
    // Fix common typos
    if (route.startsWith('/doc') && !route.startsWith('/docs')) {
      return route.replace('/doc', '/docs');
    }
    if (route.startsWith('/tutorial') && !route.startsWith('/tutorials')) {
      return route.replace('/tutorial', '/tutorials');
    }

    // Fix case sensitivity
    const lowerRoute = route.toLowerCase();
    for (const validRoute of [...this.routes.static, ...this.routes.docs]) {
      if (validRoute.toLowerCase() === lowerRoute && validRoute !== route) {
        return validRoute;
      }
    }

    // Try to find similar routes
    const suggestions = this.findSimilarRoutes(route);
    if (suggestions.length > 0) {
      return suggestions[0];
    }

    return undefined;
  }

  findSimilarRoutes(route) {
    const suggestions = [];
    const routeParts = route.split('/').filter(Boolean);
    const lastPart = routeParts[routeParts.length - 1] || '';

    // Search in all routes
    for (const validRoute of [...this.routes.static, ...this.routes.docs]) {
      const validParts = validRoute.split('/').filter(Boolean);
      const validLastPart = validParts[validParts.length - 1] || '';

      // Check if last part is similar
      if (validLastPart && lastPart && 
          (validLastPart.includes(lastPart) || lastPart.includes(validLastPart))) {
        suggestions.push(validRoute);
      }
    }

    return suggestions.slice(0, 3); // Return top 3 suggestions
  }

  generateFixes() {
    const fileFixes = new Map(); // file -> Array of {line, oldHref, newHref}

    for (const broken of this.brokenLinks) {
      if (broken.suggestedFix && broken.severity === 'error') {
        const file = broken.link.file;
        if (!fileFixes.has(file)) {
          fileFixes.set(file, []);
        }
        fileFixes.get(file).push({
          line: broken.link.line,
          oldHref: broken.link.href,
          newHref: broken.suggestedFix,
          type: broken.link.type,
        });
      }
    }

    // Prepare file content changes
    for (const [file, fixes] of fileFixes.entries()) {
      const filePath = path.join(rootDir, file);
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf-8');
          const lines = content.split('\n');
          let modified = false;

          // Apply fixes in reverse line order to maintain line numbers
          const sortedFixes = fixes.sort((a, b) => b.line - a.line);

          for (const fix of sortedFixes) {
            const lineIndex = fix.line - 1;
            if (lineIndex >= 0 && lineIndex < lines.length) {
              let oldLine = lines[lineIndex];
              let fixedLine = oldLine;

              // Handle different link types
              if (fix.type === 'sitemap') {
                // For sitemap: replace in template literals like `${baseUrl}/old` -> `${baseUrl}/new`
                fixedLine = fixedLine.replace(
                  new RegExp(`(\\$\\{baseUrl\\})${fix.oldHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'),
                  `$1${fix.newHref}`
                );
                // Also handle full URLs in sitemap
                fixedLine = fixedLine.replace(
                  new RegExp(`(url:\\s*['"\`]https?://[^/]+)${fix.oldHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'),
                  `$1${fix.newHref}`
                );
              } else {
                // For regular links: replace href="old" -> href="new"
                fixedLine = fixedLine.replace(
                  new RegExp(`(href\\s*=\\s*{?['"\`])${fix.oldHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(['"\`])`, 'g'),
                  `$1${fix.newHref}$2`
                );
                // Also handle template literals: href={`${old}`} -> href={`${new}`}
                fixedLine = fixedLine.replace(
                  new RegExp(`(href\\s*=\\s*\{\`[^\`]*\`)${fix.oldHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\`\})`, 'g'),
                  `$1${fix.newHref}$2`
                );
              }
              
              if (fixedLine !== oldLine) {
                lines[lineIndex] = fixedLine;
                modified = true;
              }
            }
          }

          if (modified) {
            const newContent = lines.join('\n');
            this.fixes.set(file, newContent);
          }
        } catch (err) {
          console.warn(`  ⚠ Could not fix ${file}: ${err.message}`);
        }
      }
    }
  }

  applyFixes() {
    for (const [file, newContent] of this.fixes.entries()) {
      const filePath = path.join(rootDir, file);
      if (typeof newContent === 'string' && fs.existsSync(filePath)) {
        try {
          fs.writeFileSync(filePath, newContent, 'utf-8');
          console.log(`  ✓ Fixed: ${file}`);
        } catch (err) {
          console.warn(`  ⚠ Could not write ${file}: ${err.message}`);
        }
      }
    }
  }

  async generateReport() {
    const reportPath = path.join(rootDir, 'LINK_SCAN_REPORT.md');
    const report = [];

    report.push('# Link Scan Report');
    report.push(`\nGenerated: ${new Date().toISOString()}\n`);
    report.push(`## Summary\n`);
    report.push(`- **Total Links Scanned:** ${this.allLinks.length}`);
    report.push(`- **Broken Links Found:** ${this.brokenLinks.length}`);
    report.push(`- **Auto-Fixed:** ${this.fixes.size}\n`);

    // Group by severity
    const errors = this.brokenLinks.filter(b => b.severity === 'error');
    const warnings = this.brokenLinks.filter(b => b.severity === 'warning');
    const infos = this.brokenLinks.filter(b => b.severity === 'info');

    report.push(`## Broken Links by Severity\n`);
    report.push(`- **Errors:** ${errors.length}`);
    report.push(`- **Warnings:** ${warnings.length}`);
    report.push(`- **Info:** ${infos.length}\n`);

    if (errors.length > 0) {
      report.push(`## Errors (${errors.length})\n`);
      for (const broken of errors) {
        report.push(`### \`${broken.link.href}\` in ${broken.link.file}:${broken.link.line}`);
        report.push(`- **Issue:** ${broken.issue}`);
        if (broken.suggestedFix) {
          report.push(`- **Suggested Fix:** \`${broken.suggestedFix}\``);
        }
        report.push(`- **Context:** \`${broken.link.context || 'N/A'}\`\n`);
      }
    }

    if (warnings.length > 0) {
      report.push(`## Warnings (${warnings.length})\n`);
      for (const broken of warnings) {
        report.push(`- \`${broken.link.href}\` in ${broken.link.file}:${broken.link.line} - ${broken.issue}\n`);
      }
    }

    if (this.fixes.size > 0) {
      report.push(`## Auto-Fixed Links (${this.fixes.size})\n`);
      const fixedLinks = this.brokenLinks.filter(b => 
        b.suggestedFix && this.fixes.has(b.link.file)
      );
      for (const broken of fixedLinks) {
        report.push(`- \`${broken.link.href}\` → \`${broken.suggestedFix}\` in ${broken.link.file}:${broken.link.line}\n`);
      }
    }

    report.push(`\n## Route Map Summary\n`);
    report.push(`- Static routes: ${this.routes.static.size}`);
    report.push(`- Docs routes: ${this.routes.docs.size}`);
    report.push(`- Blog posts: ${this.routes.dynamic.blog.size}`);
    report.push(`- Tutorials: ${this.routes.dynamic.tutorials.size}\n`);

    fs.writeFileSync(reportPath, report.join('\n'), 'utf-8');
    console.log(`\n📄 Report generated: LINK_SCAN_REPORT.md`);
  }
}

// Run the scanner
const scanner = new LinkScanner();
scanner.scan().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

