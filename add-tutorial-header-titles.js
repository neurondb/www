/**
 * Ensure tutorial header SVGs under public/tutorials/<slug>/header.svg have a consistent main title.
 *
 * After the SVG syntax repair, many headers render but are missing the main title line.
 * Tutorial 01 has it; others often have an empty "Main Title" section.
 *
 * This script:
 * - Reads tutorial slugs + titles from app/tutorials/page.tsx (simple regex parse)
 * - For each public/tutorials/<slug>/header.svg:
 *   - Ensures a <text> node exists immediately after the "<!-- Main Title -->" marker.
 *   - Normalizes its text + styling (including half-size font).
 */

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const TUTORIALS_PAGE = path.join(ROOT, 'app', 'tutorials', 'page.tsx')
const PUBLIC_TUTORIALS_DIR = path.join(ROOT, 'public', 'tutorials')

function xmlEscape(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function wrapTwoLines(prefix, title, maxLine1 = 42) {
  // Goal:
  // - Line 1 starts with `${prefix}:` and then as many words as fit.
  // - Line 2 is the remainder.
  const words = title.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return [`${prefix}`]

  let i = 0
  let line1Words = []
  while (i < words.length) {
    const candidateWords = [...line1Words, words[i]]
    const candidate = `${prefix}: ${candidateWords.join(' ')}`
    if (candidate.length > maxLine1 && line1Words.length > 0) break
    line1Words = candidateWords
    i++
  }

  const line1 = `${prefix}: ${line1Words.join(' ')}`
  const line2 = words.slice(i).join(' ')
  return line2 ? [line1, line2] : [line1]
}

function buildTitleNode(order, title) {
  const n = String(order).padStart(2, '0')
  const prefix = `AI Tutorial ${n}`

  // Prefer a single line if it's short enough.
  const single = `${prefix}: ${title}`
  if (single.length <= 48) {
    return {
      fontSize: 32,
      strokeWidth: 1,
      inner: xmlEscape(single),
      isMultiline: false,
    }
  }

  const [l1, l2] = wrapTwoLines(prefix, title, 44)
  const longest = Math.max(l1.length, l2.length)
  // User request: larger font + larger line gap.
  const fontSize = longest > 56 ? 28 : 32
  const lineGap = fontSize + 14

  return {
    fontSize,
    strokeWidth: fontSize === 24 ? 0.9 : 1,
    inner:
      `<tspan x="600" dy="0">${xmlEscape(l1)}</tspan>` +
      `\n    <tspan x="600" dy="${lineGap}">${xmlEscape(l2)}</tspan>`,
    isMultiline: true,
  }
}

function parseTutorialsFromPageTsx(contents) {
  // Very small/robust-enough parser for objects shaped like:
  // { slug: 'ai-tutorial-01-introduction', title: 'Introduction to Machine Learning', ... order: 1, }
  const re = /slug:\s*'([^']+)'\s*,[\s\S]*?title:\s*'([^']+)'\s*,[\s\S]*?order:\s*(\d+)\s*,/g
  const out = []
  let m
  while ((m = re.exec(contents)) !== null) {
    out.push({ slug: m[1], title: m[2], order: Number(m[3]) })
  }
  return out
}

function normalizeTitle(svg, titleLine) {
  const marker = '<!-- Main Title -->'
  const idx = svg.indexOf(marker)
  if (idx === -1) return { changed: false, svg }

  // titleLine is still accepted for backward compatibility, but we now generate from parsed data.
  const normalizedTitleNode = `\n  <text x="600" y="160" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="700" fill="#facc15" text-anchor="middle" stroke="#0f172a" stroke-width="1" paint-order="stroke fill" stroke-linejoin="round" dominant-baseline="middle">${xmlEscape(
    titleLine
  )}</text>\n`

  const afterMarker = svg.slice(idx + marker.length)

  // If a <text> immediately follows the marker (allowing whitespace), replace it.
  const replaced = afterMarker.replace(
    /^\s*<text\b[\s\S]*?<\/text>\s*/m,
    (m) => normalizedTitleNode
  )

  // If we replaced something, reassemble.
  if (replaced !== afterMarker) {
    return { changed: true, svg: svg.slice(0, idx + marker.length) + replaced }
  }

  // Otherwise, insert right after marker.
  return {
    changed: true,
    svg: svg.slice(0, idx + marker.length) + normalizedTitleNode + afterMarker,
  }
}

function main() {
  if (!fs.existsSync(TUTORIALS_PAGE)) {
    console.error(`Not found: ${TUTORIALS_PAGE}`)
    process.exit(1)
  }
  if (!fs.existsSync(PUBLIC_TUTORIALS_DIR)) {
    console.error(`Not found: ${PUBLIC_TUTORIALS_DIR}`)
    process.exit(1)
  }

  const page = fs.readFileSync(TUTORIALS_PAGE, 'utf8')
  const tutorials = parseTutorialsFromPageTsx(page)
  if (tutorials.length === 0) {
    console.error('Failed to parse tutorials from app/tutorials/page.tsx')
    process.exit(1)
  }

  let changed = 0
  let skipped = 0
  let missing = 0

  for (const t of tutorials) {
    const svgPath = path.join(PUBLIC_TUTORIALS_DIR, t.slug, 'header.svg')
    if (!fs.existsSync(svgPath)) {
      missing++
      continue
    }
    const before = fs.readFileSync(svgPath, 'utf8')
    const built = buildTitleNode(t.order, t.title)
    const normalizedTitleNode = `\n  <text x="600" y="${built.isMultiline ? 140 : 170}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${built.fontSize}" font-weight="700" fill="#facc15" text-anchor="middle" stroke="#0f172a" stroke-width="${built.strokeWidth}" paint-order="stroke fill" stroke-linejoin="round" dominant-baseline="middle">${built.inner}</text>\n`

    // Replace/insert using the same marker strategy as normalizeTitle (but avoid double-escaping).
    const marker = '<!-- Main Title -->'
    const idx = before.indexOf(marker)
    if (idx === -1) {
      skipped++
      continue
    }
    const afterMarker = before.slice(idx + marker.length)
    const replaced = afterMarker.replace(/^\s*<text\b[\s\S]*?<\/text>\s*/m, normalizedTitleNode)
    let after = before.slice(0, idx + marker.length) + (replaced === afterMarker ? normalizedTitleNode + afterMarker : replaced)

    // Remove any extra duplicate main-title <text> blocks that might remain (common in previously broken SVGs),
    // but only before the badge group starts.
    const badgeStart = after.indexOf('<g transform="translate(600, 275)"')
    const markerPos = after.indexOf(marker)
    if (badgeStart !== -1 && markerPos !== -1 && badgeStart > markerPos) {
      const head = after.slice(0, markerPos + marker.length)
      let mid = after.slice(markerPos + marker.length, badgeStart)
      const tail = after.slice(badgeStart)
      // Keep the first <text> ... </text> and drop subsequent ones.
      const m = mid.match(/^\s*<text\b[\s\S]*?<\/text>\s*/m)
      if (m) {
        const first = m[0]
        const rest = mid.slice(m.index + first.length)
        mid = first + rest.replace(/<text\b[\s\S]*?<\/text>\s*/g, '')
        after = head + mid + tail
      }
    }
    const didChange = after !== before
    if (didChange) {
      fs.writeFileSync(svgPath, after, 'utf8')
      changed++
      console.log(`titled: ${path.relative(ROOT, svgPath)}`)
    } else {
      skipped++
    }
  }

  console.log(`done. titled ${changed} files, skipped ${skipped}, missing ${missing}`)
}

main()


