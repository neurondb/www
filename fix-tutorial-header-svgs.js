/**
 * Fix malformed tutorial header SVGs under public/tutorials/<slug>/header.svg
 *
 * Problem patterns (from generated SVGs):
 * - Emoji <text> ends with "📊>" instead of closing tag.
 * - Badge <text> nodes end with "Tutorial 02>" / "Beginner>" / etc.
 * - Stray "</text>" line injected before the badge group.
 * - Trailing garbage like "</g>, -apple-system, sans-serif\" ..." after closing a group.
 *
 * This script applies conservative, idempotent repairs:
 * - Replace any <text ...>...> with <text ...>...</text> for common cases.
 * - Remove stray standalone "</text>" lines.
 * - Remove trailing garbage after a proper closing </g> inside the badge area.
 */

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const TUTORIALS_DIR = path.join(ROOT, 'public', 'tutorials')

function walk(dir, cb) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, cb)
    else cb(p)
  }
}

function fixSvg(input) {
  let s = input

  // 1) Fix emoji icon text like: >📊>  (no closing tag)
  // Only touch <text ...> lines to avoid mangling other ">" usage.
  s = s.replace(
    /(<text\b[^>]*>)([^<]*?)>(\s*\r?\n\s*<\/g>)/g,
    (m, open, content, tail) => `${open}${content}</text>${tail}`
  )

  // 2) Fix any <text ...>Something> (missing </text>) within a line
  // e.g. <text ...>Tutorial 02>  or ...>Beginner>
  s = s.replace(/(<text\b[^>]*>)([^<]*?)>/g, (m, open, content) => {
    // If it already has a closing tag later in the line, leave it.
    if (m.includes('</text>')) return m
    // Avoid changing tags like <text ...> (empty)
    if (!content || /^\s*$/.test(content)) return m
    return `${open}${content}</text>`
  })

  // 3) Remove stray standalone closing tags accidentally injected.
  s = s.replace(/^\s*<\/text>\s*$/gm, '')

  // 4) Remove trailing junk fragments after a closing </g> on the same line
  // e.g. </g>, -apple-system, sans-serif" font-size="16" ...>Linear Regression></g>
  s = s.replace(/<\/g>[^<]*apple-system[^<]*<\/g>/g, '</g>\n  </g>')

  // 4b) If a closing tag has garbage after it on the same line, strip the garbage.
  // This catches patterns like: </g>apple-system, sans-serif"... and keeps valid XML.
  s = s.replace(/<\/g>[^\n<]+/g, '</g>')
  s = s.replace(/<\/text>[^\n<]+/g, '</text>')
  s = s.replace(/<\/svg>[^\n<]+/g, '</svg>')

  // 5) Cleanup: collapse excessive blank lines from removals
  s = s.replace(/\n{3,}/g, '\n\n')

  return s
}

function main() {
  if (!fs.existsSync(TUTORIALS_DIR)) {
    console.error(`Not found: ${TUTORIALS_DIR}`)
    process.exit(1)
  }

  const targets = []
  walk(TUTORIALS_DIR, (p) => {
    if (p.endsWith(`${path.sep}header.svg`)) targets.push(p)
  })

  let changed = 0
  for (const file of targets) {
    const before = fs.readFileSync(file, 'utf8')
    const after = fixSvg(before)
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8')
      changed++
      console.log(`fixed: ${path.relative(ROOT, file)}`)
    }
  }

  console.log(`done. changed ${changed}/${targets.length} files`)
}

main()


