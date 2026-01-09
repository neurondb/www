'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function InteractiveCodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {title && (
        <div 
          className="px-4 py-2 text-xs font-semibold rounded-t-lg border-b"
          style={{ 
            backgroundColor: 'var(--gray-900)',
            borderColor: 'var(--border-dark)',
            color: 'var(--gray-400)'
          }}
        >
          {title}
        </div>
      )}
      <div 
        className="relative rounded-lg overflow-hidden"
        style={{ 
          backgroundColor: 'var(--gray-950)',
          border: '1px solid var(--border-dark)'
        }}
      >
        <pre className="p-4 overflow-x-auto">
          <code 
            className="text-sm font-mono"
            style={{ color: 'var(--gray-200)' }}
          >
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ 
            backgroundColor: 'var(--gray-800)',
            color: copied ? 'var(--secondary-400)' : 'var(--gray-400)'
          }}
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  )
}



