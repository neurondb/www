const fs = require('fs');
const path = require('path');

// Function to process a single SVG file
function fixSVGOverflow(svgPath) {
  let content = fs.readFileSync(svgPath, 'utf8');
  const originalContent = content;

  // Check if defs section exists, if not add it
  if (!content.includes('<defs>')) {
    content = content.replace(
      /(<svg[^>]*>)/,
      `$1\n  <defs>\n  </defs>`
    );
  }

  let clipPathCounter = 0;
  let modified = false;

  // Skip if already processed (has clipPath with our pattern)
  if (content.includes('clip-path="url(#clip-')) {
    return false;
  }

  // Process groups that contain both rect and text
  // We'll use a more careful regex that handles nested structures
  const groupRegex = /<g\s+([^>]*?)>([\s\S]*?)<\/g>/g;
  let match;
  const replacements = [];

  // First pass: collect all groups with rect and text
  while ((match = groupRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const attributes = match[1];
    const innerContent = match[2];

    // Skip if this group doesn't have both rect and text, or already has clip-path
    if (!innerContent.includes('<rect') || !innerContent.includes('<text') || 
        innerContent.includes('clip-path=')) {
      continue;
    }

    // Extract rect dimensions
    const rectMatch = innerContent.match(/<rect\s+([^>]*?)\/>/);
    if (!rectMatch) continue;

    const rectAttrs = rectMatch[1];
    const xMatch = rectAttrs.match(/x="([^"]+)"/);
    const yMatch = rectAttrs.match(/y="([^"]+)"/);
    const widthMatch = rectAttrs.match(/width="([^"]+)"/);
    const heightMatch = rectAttrs.match(/height="([^"]+)"/);
    const rxMatch = rectAttrs.match(/rx="([^"]+)"/);

    if (!xMatch || !yMatch || !widthMatch || !heightMatch) continue;

    const x = xMatch[1];
    const y = yMatch[1];
    const width = widthMatch[1];
    const height = heightMatch[1];
    const rx = rxMatch ? rxMatch[1] : '0';

    // Create clipPath ID
    const clipPathId = `clip-${clipPathCounter++}`;

    // Store replacement info
    replacements.push({
      fullMatch,
      attributes,
      innerContent,
      clipPathId,
      x,
      y,
      width,
      height,
      rx,
      index: match.index
    });
  }

  // Sort by index in reverse order for safe replacement
  replacements.sort((a, b) => b.index - a.index);

  // Apply replacements
  for (const rep of replacements) {
    // Add clipPath definition to defs
    const clipPathDef = `    <clipPath id="${rep.clipPathId}">\n      <rect x="${rep.x}" y="${rep.y}" width="${rep.width}" height="${rep.height}"${rep.rx !== '0' ? ` rx="${rep.rx}"` : ''}/>\n    </clipPath>\n`;
    content = content.replace('</defs>', clipPathDef + '  </defs>');

    // Extract all text elements from inner content
    const textRegex = /<text[^>]*>[\s\S]*?<\/text>/g;
    const texts = [];
    let textMatch;

    while ((textMatch = textRegex.exec(rep.innerContent)) !== null) {
      texts.push(textMatch[0]);
    }

    if (texts.length > 0) {
      // Remove original text elements from inner content
      let textInner = rep.innerContent;
      texts.forEach(text => {
        textInner = textInner.replace(text, '');
      });

      // Clean up extra whitespace
      textInner = textInner.replace(/\n\s*\n\s*\n/g, '\n');

      // Create clipped group with all texts
      const textsContent = texts.map(t => '    ' + t).join('\n');
      const clippedGroup = `    <g clip-path="url(#${rep.clipPathId})">\n${textsContent}\n    </g>`;

      // Insert clipped group after rect
      textInner = textInner.replace(/(<rect[^>]*\/>)/, `$1\n${clippedGroup}`);

      // Reconstruct the group
      const newGroup = `<g ${rep.attributes}>\n${textInner}\n  </g>`;
      
      // Replace at the specific index
      content = content.substring(0, rep.index) + newGroup + 
                content.substring(rep.index + rep.fullMatch.length);
      modified = true;
    }
  }

  // Clean up empty clipped groups
  content = content.replace(/<g\s+clip-path="url\(#[^"]+\)">\s*<\/g>/g, '');

  if (modified && content !== originalContent) {
    fs.writeFileSync(svgPath, content, 'utf8');
    console.log(`✓ Fixed: ${path.relative(process.cwd(), svgPath)}`);
    return true;
  }
  
  return false;
}

// Main function to process all SVG files
function main() {
  const tutorialsDir = path.join(__dirname, 'public', 'tutorials');
  
  if (!fs.existsSync(tutorialsDir)) {
    console.error(`Directory not found: ${tutorialsDir}`);
    return;
  }

  // Find all SVG files recursively
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
  console.log(`Found ${svgFiles.length} SVG files to process\n`);

  let fixedCount = 0;
  svgFiles.forEach(svgPath => {
    try {
      if (fixSVGOverflow(svgPath)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`✗ Error processing ${svgPath}:`, error.message);
    }
  });

  console.log(`\n✓ Processed ${svgFiles.length} files, fixed ${fixedCount} files`);
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { fixSVGOverflow };
