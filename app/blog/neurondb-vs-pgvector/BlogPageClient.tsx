'use client'

import { useMemo } from 'react'
import ReadingProgress from '../../../components/blog/ReadingProgress'
import TableOfContents from '../../../components/blog/TableOfContents'
import { extractHeadings } from '@/utils/extractHeadings'

interface BlogPageClientProps {
  markdown: string
  showTOC?: boolean
}

export default function BlogPageClient({ markdown, showTOC = false }: BlogPageClientProps) {
  // Extract headings for table of contents
  const headings = useMemo(() => extractHeadings(markdown), [markdown])

  return (
    <>
      <ReadingProgress />
      {showTOC && headings.length > 0 && (
        <TableOfContents headings={headings} />
      )}
    </>
  )
}
