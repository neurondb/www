const fs = require('fs');
const path = require('path');

// Function to clean up empty clipped groups and duplicate clipPaths
function cleanupSVG(svgPath) {
  let content = fs.readFileSync(svgPath, 'utf8');
  const originalContent = content;

  // Remove empty clipped groups
  content = content.replace(/<g\s+clip-path="url\(#[^"]+\)">\s*<\/g>/g, '');
  content = content.replace(/<g\s+clip-path="url\(#[^"]+\)">\s*\n\s*<\/g>/g, '');

  // Find all clipPath IDs that are actually used
  const usedClipPathIds = new Set();
  const clipPathUsageRegex = /clip-path="url\(#([^"]+)\)"/g;
  let usageMatch;
  while ((usageMatch = clipPathUsageRegex.exec(content)) !== null) {
    usedClipPathIds.add(usageMatch[1]);
  }

  // Remove unused clipPaths
  const clipPathRegex = /<clipPath\s+id="([^"]+)">[\s\S]*?<\/clipPath>/g;
  const clipPaths = new Map();
  let match;

  while ((match = clipPathRegex.exec(content)) !== null) {
    const id = match[1];
    const fullMatch = match[0];
    // Only keep clipPaths that are actually used
    if (usedClipPathIds.has(id) && !clipPaths.has(id)) {
      clipPaths.set(id, fullMatch);
    }
  }

  // Replace all clipPaths in defs with only the used ones
  if (clipPaths.size > 0) {
    // Remove all existing clipPaths from defs
    content = content.replace(/<clipPath\s+id="[^"]+">[\s\S]*?<\/clipPath>\s*/g, '');
    
    // Add used clipPaths before </defs>
    const usedClipPaths = Array.from(clipPaths.values())
      .map(cp => '    ' + cp)
      .join('\n');
    content = content.replace('</defs>', usedClipPaths + '\n  </defs>');
  } else {
    // Remove all clipPaths if none are used
    content = content.replace(/<clipPath\s+id="[^"]+">[\s\S]*?<\/clipPath>\s*/g, '');
  }

  // Clean up extra blank lines
  content = content.replace(/\n\s*\n\s*\n+/g, '\n\n');

  if (content !== originalContent) {
    fs.writeFileSync(svgPath, content, 'utf8');
    console.log(`Cleaned: ${path.relative(process.cwd(), svgPath)}`);
    return true;
  }
  
  return false;
}

// Main function
function main() {
  const tutorialsDir = path.join(__dirname, 'public', 'tutorials');
  
  if (!fs.existsSync(tutorialsDir)) {
    console.error(`Directory not found: ${tutorialsDir}`);
    return;
  }

  function findSVGFiles(dir) {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...findSVGFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith('.svg')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  const svgFiles = findSVGFiles(tutorialsDir);
  console.log(`Found ${svgFiles.length} SVG files to clean\n`);

  let cleanedCount = 0;
  svgFiles.forEach(svgPath => {
    try {
      if (cleanupSVG(svgPath)) {
        cleanedCount++;
      }
    } catch (error) {
      console.error(`Error cleaning ${svgPath}:`, error.message);
    }
  });

  console.log(`\nCleaned ${cleanedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { cleanupSVG };
