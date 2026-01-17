#!/usr/bin/env node

/**
 * SVG Scanner - Deep scan for missing, overlapping, and display issues
 * Scans all SVG references in blog posts, tutorials, and components
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const appDir = path.join(projectRoot, 'app');

// Results storage
const results = {
  missing: [],
  displayIssues: [],
  overlapping: [],
  valid: [],
  totalScanned: 0
};

/**
 * Extract SVG references from a file
 */
function extractSvgReferences(filePath, content) {
  const svgRefs = [];
  
  // Match markdown image syntax: ![alt](/path/to/image.svg)
  const markdownMatches = content.matchAll(/!\[[^\]]*\]\(([^)]+\.svg[^)]*)\)/g);
  for (const match of markdownMatches) {
    let svgPath = match[1];
    // Remove query params
    svgPath = svgPath.split('?')[0];
    svgRefs.push({ path: svgPath, source: filePath, type: 'markdown' });
  }
  
  // Match HTML img tags: <img src="/path/to/image.svg" />
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+\.svg[^"']*)["'][^>]*>/gi);
  for (const match of imgMatches) {
    let svgPath = match[1];
    svgPath = svgPath.split('?')[0];
    svgRefs.push({ path: svgPath, source: filePath, type: 'html' });
  }
  
  // Match Next.js Image component: src="/path/to/image.svg"
  const imageMatches = content.matchAll(/src=["']([^"']+\.svg[^"']*)["']/g);
  for (const match of imageMatches) {
    let svgPath = match[1];
    svgPath = svgPath.split('?')[0];
    // Skip if already captured
    if (!svgRefs.some(ref => ref.path === svgPath)) {
      svgRefs.push({ path: svgPath, source: filePath, type: 'component' });
    }
  }
  
  // Match metadata references (og-image, etc.)
  const metadataMatches = content.matchAll(/['"]([^'"]+\.svg)['"]/g);
  for (const match of metadataMatches) {
    let svgPath = match[1];
    if (svgPath.startsWith('http')) continue; // Skip full URLs
    svgPath = svgPath.split('?')[0];
    if (!svgRefs.some(ref => ref.path === svgPath)) {
      svgRefs.push({ path: svgPath, source: filePath, type: 'metadata' });
    }
  }
  
  return svgRefs;
}

/**
 * Normalize SVG path to actual file path
 */
function normalizeSvgPath(svgPath) {
  // Remove leading slash if present
  if (svgPath.startsWith('/')) {
    svgPath = svgPath.substring(1);
  }
  return path.join(publicDir, svgPath);
}

/**
 * Validate SVG file structure
 */
function validateSvgFile(filePath) {
  const issues = [];
  
  if (!fs.existsSync(filePath)) {
    return { valid: false, issues: ['File does not exist'] };
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if file is empty
    if (content.trim().length === 0) {
      issues.push('File is empty');
      return { valid: false, issues };
    }
    
    // Check for XML declaration
    if (!content.trim().startsWith('<?xml') && !content.trim().startsWith('<svg')) {
      issues.push('Missing XML declaration or SVG root');
    }
    
    // Check for SVG root element (handle both <svg> and namespaced <ns0:svg>)
    const hasSvgTag = content.includes('<svg') || content.match(/<[^:>]+:svg[^>]*>/);
    if (!hasSvgTag) {
      issues.push('Missing <svg> root element');
      return { valid: false, issues };
    }
    
    // Extract SVG element (handle namespaced)
    const svgMatch = content.match(/<[^:>]*:?svg[^>]*>/);
    if (!svgMatch) {
      issues.push('Cannot find SVG opening tag');
      return { valid: false, issues };
    }
    
    const svgTag = svgMatch[0];
    
    // Check for viewBox or width/height
    const hasViewBox = svgTag.includes('viewBox');
    const hasWidth = svgTag.includes('width=');
    const hasHeight = svgTag.includes('height=');
    
    if (!hasViewBox && (!hasWidth || !hasHeight)) {
      issues.push('Missing viewBox and width/height attributes');
    }
    
    // Check for namespace
    if (!svgTag.includes('xmlns') && !svgTag.includes('xmlns:')) {
      issues.push('Missing xmlns namespace declaration');
    }
    
    // Check for malformed XML (basic check)
    // Count self-closing tags separately
    const selfClosingTags = (content.match(/<[^/!?][^>]*\/\s*>/g) || []).length;
    const openTags = (content.match(/<[^/!?][^>]*>/g) || []).length - selfClosingTags;
    const closeTags = (content.match(/<\/[^>]+>/g) || []).length;
    // Rough check - should be close (allow some variance for complex SVGs)
    const diff = Math.abs(openTags - closeTags);
    if (diff > 10) {
      issues.push(`Possible malformed XML (tag mismatch: ${openTags} open, ${closeTags} close, ${selfClosingTags} self-closing)`);
    }
    
    // Check for broken paths (paths with invalid characters)
    const pathMatches = content.matchAll(/<path[^>]+d=["']([^"']+)["']/g);
    for (const match of pathMatches) {
      const pathData = match[1];
      // Basic validation - paths should contain valid commands
      if (!/[mMzZlLhHvVcCsSqQtTaA]/.test(pathData)) {
        issues.push('Found path with potentially invalid path data');
        break;
      }
    }
    
    return {
      valid: issues.length === 0,
      issues,
      hasViewBox,
      hasWidth,
      hasHeight,
      content
    };
    
  } catch (error) {
    return {
      valid: false,
      issues: [`Error reading file: ${error.message}`]
    };
  }
}

/**
 * Check for overlapping elements in SVG
 */
function checkOverlapping(svgContent, filePath) {
  const overlaps = [];
  
  try {
    // Extract all rect elements with coordinates
    const rectMatches = svgContent.matchAll(/<rect[^>]+x=["']([^"']+)["'][^>]+y=["']([^"']+)["'][^>]+width=["']([^"']+)["'][^>]+height=["']([^"']+)["']/g);
    const rects = [];
    for (const match of rectMatches) {
      const x = parseFloat(match[1]);
      const y = parseFloat(match[2]);
      const w = parseFloat(match[3]);
      const h = parseFloat(match[4]);
      if (!isNaN(x) && !isNaN(y) && !isNaN(w) && !isNaN(h)) {
        rects.push({ x, y, w, h, element: 'rect' });
      }
    }
    
    // Check for overlapping rects (ignore intentional container overlaps)
    for (let i = 0; i < rects.length; i++) {
      for (let j = i + 1; j < rects.length; j++) {
        const r1 = rects[i];
        const r2 = rects[j];
        
        // Skip if one is clearly a container for the other (one is much larger and contains the other)
        const r1Area = r1.w * r1.h;
        const r2Area = r2.w * r2.h;
        const areaRatio = Math.max(r1Area, r2Area) / Math.min(r1Area, r2Area);
        
        // If one rect is 4x larger in area and contains the other, it's likely a container
        if (areaRatio > 4) {
          const larger = r1Area > r2Area ? r1 : r2;
          const smaller = r1Area > r2Area ? r2 : r1;
          // Check if smaller is inside larger (with some margin)
          if (smaller.x >= larger.x - 5 && smaller.y >= larger.y - 5 &&
              smaller.x + smaller.w <= larger.x + larger.w + 5 &&
              smaller.y + smaller.h <= larger.y + larger.h + 5) {
            continue; // Skip this overlap - it's intentional
          }
        }
        
        // Check if rectangles overlap (with small tolerance for rounding)
        const tolerance = 2;
        if (!(r1.x + r1.w < r2.x - tolerance || r2.x + r2.w < r1.x - tolerance || 
              r1.y + r1.h < r2.y - tolerance || r2.y + r2.h < r1.y - tolerance)) {
          // Only report if overlap is significant (more than 10% of smaller rect)
          const overlapX = Math.max(0, Math.min(r1.x + r1.w, r2.x + r2.w) - Math.max(r1.x, r2.x));
          const overlapY = Math.max(0, Math.min(r1.y + r1.h, r2.y + r2.h) - Math.max(r1.y, r2.y));
          const overlapArea = overlapX * overlapY;
          const minArea = Math.min(r1Area, r2Area);
          
          if (overlapArea > minArea * 0.1) {
            overlaps.push({
              type: 'rect-overlap',
              element1: r1,
              element2: r2,
              message: `Rectangles overlap: (${r1.x},${r1.y}) ${r1.w}x${r1.h} and (${r2.x},${r2.y}) ${r2.w}x${r2.h}`
            });
          }
        }
      }
    }
    
    // Extract text elements and check for overlap with rects
    const textMatches = svgContent.matchAll(/<text[^>]+x=["']([^"']+)["'][^>]+y=["']([^"']+)["']/g);
    const texts = [];
    for (const match of textMatches) {
      const x = parseFloat(match[1]);
      const y = parseFloat(match[2]);
      if (!isNaN(x) && !isNaN(y)) {
        texts.push({ x, y, element: 'text' });
      }
    }
    
    // Check text overlapping with rects (ignore if text is clearly inside a container)
    for (const text of texts) {
      for (const rect of rects) {
        // Text inside a rect is usually intentional (labels, etc.)
        // Only flag if text is very close to rect edge (potential collision)
        const margin = 5;
        const isInside = text.x >= rect.x + margin && text.x <= rect.x + rect.w - margin &&
                         text.y >= rect.y + margin && text.y <= rect.y + rect.h - margin;
        
        if (!isInside && text.x >= rect.x - 2 && text.x <= rect.x + rect.w + 2 &&
            text.y >= rect.y - 2 && text.y <= rect.y + rect.h + 2) {
          overlaps.push({
            type: 'text-rect-overlap',
            text,
            rect,
            message: `Text at (${text.x},${text.y}) may overlap with rect at (${rect.x},${rect.y})`
          });
        }
      }
    }
    
  } catch (error) {
    // Silently fail overlap detection
  }
  
  return overlaps;
}

/**
 * Scan all files in a directory recursively
 */
function scanDirectory(dir, filePattern = /\.(tsx|ts|jsx|js)$/) {
  const files = [];
  
  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      
      if (entry.isDirectory()) {
        // Skip node_modules and .next
        if (!['node_modules', '.next', '.git', 'dist', 'build'].includes(entry.name)) {
          walk(fullPath);
        }
      } else if (entry.isFile() && filePattern.test(entry.name)) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

/**
 * Main scanning function
 */
function scanAllSvgs() {
  console.log('🔍 Starting SVG Deep Scan...\n');
  console.log('='.repeat(60) + '\n');
  
  // Scan blog posts
  console.log('📝 Scanning blog posts...');
  const blogFiles = scanDirectory(path.join(appDir, 'blog'));
  let blogSvgRefs = [];
  blogFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const refs = extractSvgReferences(file, content);
    blogSvgRefs.push(...refs);
  });
  console.log(`   Found ${blogSvgRefs.length} SVG references in ${blogFiles.length} blog files`);
  
  // Scan tutorials
  console.log('📚 Scanning tutorials...');
  const tutorialFiles = scanDirectory(path.join(appDir, 'tutorials'));
  let tutorialSvgRefs = [];
  tutorialFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const refs = extractSvgReferences(file, content);
    tutorialSvgRefs.push(...refs);
  });
  console.log(`   Found ${tutorialSvgRefs.length} SVG references in ${tutorialFiles.length} tutorial files`);
  
  // Scan components
  console.log('🧩 Scanning components...');
  const componentFiles = scanDirectory(path.join(projectRoot, 'components'));
  let componentSvgRefs = [];
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const refs = extractSvgReferences(file, content);
    componentSvgRefs.push(...refs);
  });
  console.log(`   Found ${componentSvgRefs.length} SVG references in ${componentFiles.length} component files`);
  
  // Combine all references
  const allSvgRefs = [...blogSvgRefs, ...tutorialSvgRefs, ...componentSvgRefs];
  
  // Deduplicate by path
  const uniqueRefs = [];
  const seenPaths = new Set();
  for (const ref of allSvgRefs) {
    if (!seenPaths.has(ref.path)) {
      seenPaths.add(ref.path);
      uniqueRefs.push(ref);
    }
  }
  
  console.log(`\n📊 Total unique SVG references: ${uniqueRefs.length}\n`);
  console.log('='.repeat(60) + '\n');
  
  // Validate each SVG
  console.log('🔎 Validating SVG files...\n');
  
  for (const ref of uniqueRefs) {
    results.totalScanned++;
    const filePath = normalizeSvgPath(ref.path);
    const relativePath = path.relative(projectRoot, filePath);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      results.missing.push({
        path: ref.path,
        filePath: relativePath,
        source: ref.source,
        type: ref.type
      });
      continue;
    }
    
    // Validate structure
    const validation = validateSvgFile(filePath);
    
    if (!validation.valid || validation.issues.length > 0) {
      results.displayIssues.push({
        path: ref.path,
        filePath: relativePath,
        issues: validation.issues,
        source: ref.source
      });
    }
    
    // Check for overlapping
    if (validation.content) {
      const overlaps = checkOverlapping(validation.content, filePath);
      if (overlaps.length > 0) {
        results.overlapping.push({
          path: ref.path,
          filePath: relativePath,
          overlaps,
          source: ref.source
        });
      }
    }
    
    // If valid, add to valid list
    if (validation.valid && (!validation.content || checkOverlapping(validation.content, filePath).length === 0)) {
      results.valid.push({
        path: ref.path,
        filePath: relativePath
      });
    }
  }
  
  // Print results
  console.log('📋 SCAN RESULTS\n');
  console.log('='.repeat(60) + '\n');
  
  console.log(`✅ Valid SVGs: ${results.valid.length}`);
  console.log(`❌ Missing SVGs: ${results.missing.length}`);
  console.log(`⚠️  Display Issues: ${results.displayIssues.length}`);
  console.log(`🔀 Overlapping Issues: ${results.overlapping.length}`);
  console.log(`📊 Total Scanned: ${results.totalScanned}\n`);
  
  if (results.missing.length > 0) {
    console.log('\n❌ MISSING SVGs:\n');
    results.missing.forEach((item, idx) => {
      console.log(`${idx + 1}. ${item.path}`);
      console.log(`   Referenced in: ${path.relative(projectRoot, item.source)}`);
      console.log(`   Expected at: ${item.filePath}\n`);
    });
  }
  
  if (results.displayIssues.length > 0) {
    console.log('\n⚠️  DISPLAY ISSUES:\n');
    results.displayIssues.forEach((item, idx) => {
      console.log(`${idx + 1}. ${item.path}`);
      console.log(`   File: ${item.filePath}`);
      item.issues.forEach(issue => {
        console.log(`   - ${issue}`);
      });
      console.log(`   Referenced in: ${path.relative(projectRoot, item.source)}\n`);
    });
  }
  
  if (results.overlapping.length > 0) {
    console.log('\n🔀 OVERLAPPING ISSUES:\n');
    results.overlapping.forEach((item, idx) => {
      console.log(`${idx + 1}. ${item.path}`);
      console.log(`   File: ${item.filePath}`);
      item.overlaps.slice(0, 3).forEach(overlap => {
        console.log(`   - ${overlap.message}`);
      });
      if (item.overlaps.length > 3) {
        console.log(`   ... and ${item.overlaps.length - 3} more overlaps`);
      }
      console.log(`   Referenced in: ${path.relative(projectRoot, item.source)}\n`);
    });
  }
  
  // Save results to JSON file
  const resultsPath = path.join(projectRoot, 'svg-scan-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`\n💾 Results saved to: ${path.relative(projectRoot, resultsPath)}\n`);
  
  // Exit with error code if issues found
  if (results.missing.length > 0 || results.displayIssues.length > 0 || results.overlapping.length > 0) {
    console.log('❌ Issues found! Please review and fix.\n');
    process.exit(1);
  } else {
    console.log('✅ All SVGs are valid!\n');
    process.exit(0);
  }
}

// Run the scan
scanAllSvgs();
