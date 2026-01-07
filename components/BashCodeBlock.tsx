'use client'

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { trackCodeBlockAction } from '@/lib/analytics';

interface BashCodeBlockProps {
  code: string;
  title?: string;
}

export default function BashCodeBlock({ code, title }: BashCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const trimmedCode = code.trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(trimmedCode);
      setCopied(true);
      trackCodeBlockAction('copy', 'bash', title || 'docs');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Custom dark theme matching your terminal aesthetic
  const customStyle = {
    ...vscDarkPlus,
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: '#000000',
      color: '#00ff00',
    },
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: '#000000',
      padding: '1rem',
      borderRadius: '0.375rem',
      overflow: 'auto',
    },
  };

  return (
    <div className="bg-gray-800/50 rounded-lg mb-6 relative group">
      <div className="flex items-center justify-between px-6 pt-6 pb-3">
        {title && (
          <h3 className="text-lg font-semibold text-cyan-400">{title}</h3>
        )}
        <button
          onClick={handleCopy}
          className="ml-auto flex items-center gap-2 px-3 py-1.5 text-sm text-white/70 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="px-6 pb-6">
        <SyntaxHighlighter
          language="bash"
          style={customStyle}
          customStyle={{
            background: '#000000',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            margin: 0,
          }}
          showLineNumbers={false}
        >
          {trimmedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
