"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Highlight, themes } from 'prism-react-renderer';
import Tip from '@/components/Tip';

// Deterministic, render-safe hash for stable DOM ids (avoids hydration issues)
const stableHash = (input: string): string => {
  let hash = 2166136261; // FNV-1a 32-bit offset basis
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  // Convert to unsigned and base36 to keep it short
  return (hash >>> 0).toString(36);
};

// Helper function to style arrows and numbered items in text
const styleSpecialChars = (text: string): React.ReactNode => {
  if (typeof text !== 'string') return text;
  
  // Check if text contains special characters
  if (!text.includes('→') && !/\[[0-9]+\]/.test(text)) {
    return text;
  }
  
  const parts = text.split(/(→|\[[0-9]+\])/);
  if (parts.length === 1) return text;
  
  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;
        if (part === '→') {
          return <span key={`arrow-${index}`} className="text-cyan-400 font-bold">{part}</span>;
        }
        if (/^\[[0-9]+\]$/.test(part)) {
          return <span key={`num-${index}`} className="text-cyan-400 font-bold">{part}</span>;
        }
        return part;
      })}
    </>
  );
};

// Helper function to check if a node or its children contain links
const hasLinkNode = (node: any): boolean => {
  if (!node) return false;
  if (node.type === 'element' && node.tagName === 'a') return true;
  if (node.children && Array.isArray(node.children)) {
    return node.children.some((child: any) => hasLinkNode(child));
  }
  return false;
};

// Helper function to extract text content from a node
const extractTextFromNode = (node: any): string => {
  if (!node) return '';
  if (node.type === 'text') return node.value || '';
  if (node.children && Array.isArray(node.children)) {
    return node.children.map((child: any) => extractTextFromNode(child)).join(' ');
  }
  return '';
};

// Usage: <BlogMarkdown>{markdown}</BlogMarkdown>
export function BlogMarkdown({ children }: { children: string }) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const articleRef = React.useRef<HTMLElement>(null);
  
  // Post-process to ensure inline list items are styled correctly and add colored bullets
  React.useEffect(() => {
    if (!articleRef.current) return;
    
    // Find all inline lists and ensure their items have proper styling
    const inlineLists = articleRef.current.querySelectorAll('[data-inline-list="true"]');
    inlineLists.forEach((list) => {
      const items = list.querySelectorAll('li');
      items.forEach((item) => {
        if (!item.classList.contains('inline-list-item')) {
          item.classList.add('inline-list-item');
        }
      });
    });
    
    // Add colored bullets to Key Concepts section
    const h3Headings = articleRef.current.querySelectorAll('h3');
    h3Headings.forEach((h3) => {
      const text = h3.textContent || '';
      const nextUl = h3.nextElementSibling;
      if (nextUl && nextUl.tagName === 'UL') {
        const listItems = nextUl.querySelectorAll('li');
        let color = '';
        if (text.includes('Features')) color = 'rgb(34, 197, 94)';
        else if (text.includes('Labels')) color = 'rgb(251, 146, 60)';
        else if (text.includes('Training')) color = 'rgb(168, 85, 247)';
        else if (text.includes('Testing')) color = 'rgb(248, 113, 113)';
        else if (text.includes('Overfitting')) color = 'rgb(234, 179, 8)';
        
        if (color) {
          (nextUl as HTMLElement).style.setProperty('--bullet-color', color);
          listItems.forEach((li) => {
            (li as HTMLElement).style.setProperty('--bullet-color', color);
            
            // Style bullet headings with section-appropriate colors
            const strongElement = li.querySelector('strong');
            if (strongElement) {
              const strongText = strongElement.textContent || '';
              // Check if this is a main bullet item (ends with colon) - use green
              if (strongText.trim().endsWith(':')) {
                strongElement.style.color = 'rgb(34, 197, 94)'; // green-500
              } else if (strongText.includes('Feature Engineering')) {
                strongElement.style.color = 'rgb(59, 130, 246)'; // blue-500
              } else if (strongText.includes('Feature Selection')) {
                strongElement.style.color = 'rgb(236, 72, 153)'; // pink-500
              } else {
                // Use section color for all other headings
                strongElement.style.color = color; // Match section bullet color
              }
              strongElement.style.fontWeight = '700'; // Ensure bold
            }
          });
        }
      }
    });
  }, [children]);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* Figure numbering (CSS counters) — avoids JS counters during render (prevents hydration mismatch) */
        article {
          counter-reset: figure;
        }
        article figure {
          counter-increment: figure;
        }
        article figure figcaption a.figure-link::after {
          content: " " counter(figure);
        }

        article [data-inline-list="true"] li:not(:last-child)::after {
          content: ' • ';
          color: rgb(234 179 8);
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
        /* Colored bullets for Key Concepts section using CSS custom properties */
        article ul li::marker {
          color: var(--bullet-color, rgb(96 165 250));
        }
        /* Clean table styling */
        article table {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .dark article table {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        article table thead th {
          position: relative;
        }
        article table thead th::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(0, 0, 0, 0.1);
        }
        .dark article table thead th::after {
          background: rgba(255, 255, 255, 0.1);
        }
        article table tbody tr {
          transition: background-color 0.15s ease;
        }
        article table tbody tr:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }
        .dark article table tbody tr:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        article table td:first-child {
          font-weight: 600;
          color: rgb(15, 23, 42);
        }
        .dark article table td:first-child {
          color: rgb(234, 179, 8);
        }
        article table td:not(:first-child) {
          color: rgb(51, 65, 85);
        }
        .dark article table td:not(:first-child) {
          color: rgba(255, 255, 255, 0.95);
        }

        /* Half-size diagrams (PNG) */
        article img.blog-diagram-half {
          display: block;
          margin: 0 auto;
          max-width: 50%;
          width: 100%;
          height: auto;
        }
        @media (max-width: 768px) {
          article img.blog-diagram-half {
            max-width: 100%;
          }
        }

        /* Ensure list items keep content inline */
        article ul li,
        article ol li {
          display: list-item;
        }
        article ul li > *,
        article ol li > * {
          display: inline !important;
        }
        article ul li > p,
        article ol li > p {
          display: inline !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        article ul li p,
        article ol li p {
          display: inline !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        article ul li span,
        article ol li span {
          display: inline !important;
        }
        article ul li strong,
        article ol li strong {
          display: inline !important;
        }
        /* Force all content in list items to be inline, including nested elements */
        article ul li *,
        article ol li * {
          display: inline !important;
        }
        /* Exception: keep images and code blocks as block */
        article ul li img,
        article ol li img,
        article ul li code,
        article ol li code,
        article ul li pre,
        article ol li pre {
          display: block !important;
        }
        /* Figure styling */
        article figure {
          margin: 2rem 0;
        }
        article figure figcaption {
          margin-top: 0.75rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
          text-align: center;
        }
        article figure figcaption a {
          color: #60a5fa;
          text-decoration: none;
          font-weight: 600;
        }
        article figure figcaption a:hover {
          text-decoration: underline;
          color: #93c5fd;
        }
      `}} />
      <article ref={articleRef} className="prose dark:prose-invert w-full py-8 overflow-hidden">
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Headings with proper sizing and styling
          h1({ node, children, ...props }: any) {
            return <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 mt-12 first:mt-0 leading-tight" {...props}>{children}</h1>;
          },
          h2({ node, children, ...props }: any) {
            const text = typeof children === 'string' ? children : children?.toString() || '';
            const isKeyConcepts = text.includes('Key Concepts');
            const colorClass = isKeyConcepts ? 'text-yellow-400' : 'text-cyan-400';
            return <h2 className={`text-3xl md:text-4xl font-semibold ${colorClass} mb-6 mt-10 leading-tight`} {...props}>{children}</h2>;
          },
          h3({ node, children, ...props }: any) {
            const text = typeof children === 'string' ? children : children?.toString() || '';
            let colorClass = 'text-white';
            if (text.includes('Features')) colorClass = 'text-green-400';
            else if (text.includes('Labels')) colorClass = 'text-orange-400';
            else if (text.includes('Training')) colorClass = 'text-purple-400';
            else if (text.includes('Testing')) colorClass = 'text-red-400';
            else if (text.includes('Overfitting')) colorClass = 'text-yellow-400';
            return <h3 className={`text-2xl md:text-3xl font-semibold ${colorClass} mb-4 mt-8 leading-tight`} {...props}>{children}</h3>;
          },
          h4({ node, children, ...props }: any) {
            return <h4 className="text-xl md:text-2xl font-semibold text-white mb-3 mt-6 leading-tight" {...props}>{children}</h4>;
          },
          h5({ node, children, ...props }: any) {
            return <h5 className="text-lg md:text-xl font-semibold text-white mb-3 mt-5 leading-tight" {...props}>{children}</h5>;
          },
          h6({ node, children, ...props }: any) {
            return <h6 className="text-base md:text-lg font-semibold text-white mb-2 mt-4 leading-tight" {...props}>{children}</h6>;
          },

          // Paragraphs with better spacing and readability
          p({ node, children, ...props }: any) {
            // Check if paragraph only contains an image - if so, unwrap it
            const hasOnlyImage = node?.children?.length === 1 && 
                                 node.children[0]?.type === 'element' && 
                                 node.children[0]?.tagName === 'img';
            
            if (hasOnlyImage) {
              // Return the image directly without paragraph wrapper
              return <>{children}</>;
            }
            
            // Check if paragraph is inside a list item
            let parentElement = node?.parent;
            let isInsideListItem = false;
            while (parentElement) {
              if (parentElement.type === 'element' && parentElement.tagName === 'li') {
                isInsideListItem = true;
                break;
              }
              parentElement = parentElement.parent;
            }
            
            // Process children to style special characters - only process string children
            const processChildren = (children: any): any => {
              if (typeof children === 'string') {
                return styleSpecialChars(children);
              }
              if (Array.isArray(children)) {
                return children.map((child, idx) => {
                  if (typeof child === 'string') {
                    const styled = styleSpecialChars(child);
                    return <React.Fragment key={`p-${idx}`}>{styled}</React.Fragment>;
                  }
                  // Don't process React elements, just return them
                  return child;
                });
              }
              // Don't process if it's already a React element
              return children;
            };
            
            // If inside list item, render as inline span instead of block paragraph
            if (isInsideListItem) {
              return <span className="inline" {...props}>{processChildren(children)}</span>;
            }
            
            return <p className="text-slate-200 text-lg leading-relaxed mb-6" {...props}>{processChildren(children)}</p>;
          },

          // Lists with proper styling
          ul({ node, children, ...props }: any) {
            // Check if list items contain links (common in "Related Tutorials" sections)
            const hasLinks = node?.children?.some((child: any) => hasLinkNode(child));
            
            // Check if this is a Related Resources list by checking item content
            const listItemCount = node?.children?.length || 0;
            let isRelatedResources = false;
            if (hasLinks && listItemCount >= 4) {
              // Check if items contain Related Resources keywords
              const itemTexts: string[] = [];
              node?.children?.forEach((child: any) => {
                if (child.children) {
                  const text = extractTextFromNode(child);
                  if (text) itemTexts.push(text);
                }
              });
              
              const hasNeuronDB = itemTexts.some(t => t.includes('NeuronDB Documentation'));
              const hasNeuronAgent = itemTexts.some(t => t.includes('NeuronAgent Documentation'));
              const hasSemanticSearch = itemTexts.some(t => t.includes('Semantic Search Guide'));
              const hasRAG = itemTexts.some(t => t.includes('RAG Complete Guide'));
              
              if (hasNeuronDB && hasNeuronAgent && (hasSemanticSearch || hasRAG)) {
                isRelatedResources = true;
              }
            }
            
            // Check if this is in Related Resources section - always render as block list
            let parentElement = node;
            let inRelatedResources = false;
            while (parentElement && parentElement.parent) {
              parentElement = parentElement.parent;
              if (parentElement.children) {
                const hasRelatedResourcesHeading = parentElement.children.some((child: any) => {
                  if (child.type === 'element' && child.tagName === 'h2') {
                    const text = child.children?.[0]?.value || '';
                    return text.includes('Related Resources');
                  }
                  return false;
                });
                if (hasRelatedResourcesHeading) {
                  inRelatedResources = true;
                  break;
                }
              }
            }
            
            // Check if this is an inline list (contains links or short items)
            // But NOT if it's Related Resources
            const isInlineList = (hasLinks || listItemCount <= 5) && !inRelatedResources && !isRelatedResources;
            
            // Check if parent is in Key Concepts section
            parentElement = node;
            let inKeyConcepts = false;
            while (parentElement && parentElement.parent) {
              parentElement = parentElement.parent;
              if (parentElement.children) {
                const hasKeyConceptsHeading = parentElement.children.some((child: any) => {
                  if (child.type === 'element' && child.tagName === 'h2') {
                    const text = child.children?.[0]?.value || '';
                    return text.includes('Key Concepts');
                  }
                  return false;
                });
                if (hasKeyConceptsHeading) {
                  inKeyConcepts = true;
                  break;
                }
              }
            }
            
            if (isInlineList) {
              return (
                <ul data-inline-list="true" className="flex flex-wrap gap-x-4 gap-y-2 text-slate-200 text-lg leading-relaxed mb-6 list-none" {...props}>
                  {children}
                </ul>
              );
            }
            
            // Add colored bullets for Key Concepts section
            const bulletClass = inKeyConcepts ? '[&>li]:list-disc [&>li]:marker:text-cyan-400' : '';
            return <ul className={`list-disc list-outside text-slate-200 text-lg leading-relaxed mb-6 space-y-2 ml-8 md:ml-12 pl-4 ${bulletClass}`} {...props}>{children}</ul>;
          },
          ol({ node, children, ...props }: any) {
            // Check if list items contain links (common in "Related Tutorials" sections)
            const hasLinks = node?.children?.some((child: any) => hasLinkNode(child));
            
            // Check if this is an inline list (contains links or short items)
            const listItemCount = node?.children?.length || 0;
            const isInlineList = hasLinks || listItemCount <= 5;
            
            if (isInlineList) {
              return (
                <ol data-inline-list="true" className="flex flex-wrap gap-x-4 gap-y-2 text-slate-200 text-lg leading-relaxed mb-6 list-none" {...props}>
                  {children}
                </ol>
              );
            }
            
            return <ol className="list-decimal list-outside text-slate-200 text-lg leading-relaxed mb-6 space-y-2 ml-8 md:ml-12 pl-4" {...props}>{children}</ol>;
          },
          li({ node, children, ...props }: any) {
            // Regular list items - ensure bullet and text stay on same line
            // Always unwrap paragraphs inside list items to keep content inline
            const unwrapParagraphs = (children: any): any => {
              if (!children) return children;
              
              // Handle arrays
              if (Array.isArray(children)) {
                return children.flatMap((child: any) => {
                  if (!child) return child;
                  if (React.isValidElement(child) && child.type === 'p') {
                    return unwrapParagraphs((child.props as any).children);
                  }
                  if (React.isValidElement(child) && child.type === 'span' && (child.props as any).className === 'inline') {
                    return unwrapParagraphs((child.props as any).children);
                  }
                  return child;
                });
              }
              
              // Handle single child
              if (React.isValidElement(children)) {
                if (children.type === 'p') {
                  return unwrapParagraphs((children.props as any).children);
                }
                if (children.type === 'span' && (children.props as any).className === 'inline') {
                  return unwrapParagraphs((children.props as any).children);
                }
              }
              
              return React.Children.map(children, (child: any) => {
                if (!child) return child;
                
                // If it's a paragraph element, return its children directly
                if (React.isValidElement(child) && child.type === 'p') {
                  return unwrapParagraphs((child.props as any).children);
                }
                
                // If it's an inline span (from paragraph conversion), unwrap it
                if (React.isValidElement(child) && child.type === 'span' && (child.props as any).className === 'inline') {
                  return unwrapParagraphs((child.props as any).children);
                }
                
                // If it's an array, recursively process
                if (Array.isArray(child)) {
                  return unwrapParagraphs(child);
                }
                
                return child;
              });
            };
            
            const processedChildren = unwrapParagraphs(children);
            return <li className="mb-2 drop-shadow-sm leading-relaxed" style={{ display: 'list-item', lineHeight: '1.75', listStylePosition: 'outside' }} {...props}>{processedChildren || children}</li>;
          },

          // Code blocks with syntax highlighting
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const codeText = String(children).replace(/\n$/, '');

            // Check if this contains both query and output (has "Output:" or table-like content)
            const hasOutput = codeText.includes('Output:') || codeText.includes('---') ||
              (codeText.includes('SELECT') && codeText.includes('log_size'));
            const isLongContent = codeText.split('\n').length > 10;

            return match ? (
              <div className="my-8 relative group w-full" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                {/* Copy button */}
                <button
                  onClick={() => copyToClipboard(codeText)}
                  className="absolute top-3 right-3 z-10 p-2 bg-gray-700/80 hover:bg-gray-600/90 rounded-md transition-all duration-200 opacity-0 group-hover:opacity-100"
                  title="Copy code"
                >
                  {copiedCode === codeText ? (
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
                <Highlight
                  theme={themes.vsDark}
                  code={codeText}
                  language={match[1]}
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <div className="w-full overflow-x-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)', maxWidth: '100%', boxSizing: 'border-box' }}>
                      <pre className={`${className} rounded-lg text-sm shadow-2xl ${hasOutput ? 'min-h-[72px]' : 'min-h-[48px]'} flex flex-col justify-start border border-gray-600/30`} style={{ ...style, maxWidth: '100%', boxSizing: 'border-box', overflowX: 'auto', overflowY: 'visible' }}>
                        <div className="flex-1 p-4" style={{ minWidth: 'max-content', boxSizing: 'border-box' }}>
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })} className="min-h-[1.5rem] whitespace-pre">
                              {line.map((token, tokenKey) => (
                                <span key={tokenKey} {...getTokenProps({ token })} />
                              ))}
                            </div>
                          ))}
                        </div>
                        {/* Fill remaining space if content is short */}
                        {tokens.length < (hasOutput ? 5 : 2) && !isLongContent && (
                          <div className="flex-1" style={{ minHeight: `${((hasOutput ? 5 : 2) - tokens.length) * 1.5}rem` }}></div>
                        )}
                      </pre>
                    </div>
                  )}
                </Highlight>
              </div>
            ) : (
              <code className="bg-slate-800 text-cyan-300 px-2 py-1 rounded text-sm font-mono inline-block" {...props}>
                {children}
              </code>
            );
          },

          // Tables with proper styling
          table({ node, ...props }) {
            return (
              <div
                className="overflow-x-auto my-8 w-full"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1)',
                  maxWidth: '100%'
                }}
              >
                <table
                  className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm overflow-hidden"
                  style={{
                    width: '100%',
                    minWidth: '100%',
                    borderCollapse: 'separate',
                    borderSpacing: 0,
                    tableLayout: 'auto'
                  }}
                  {...props}
                />
              </div>
            );
          },
          thead({ node, ...props }) {
            return (
              <thead 
                className="bg-slate-900 border-b border-slate-700" 
                {...props} 
              />
            );
          },
          tbody({ node, ...props }) {
            return <tbody className="divide-y divide-slate-700" {...props} />;
          },
          tr({ node, ...props }) {
            return (
              <tr 
                className="even:bg-slate-900/50" 
                {...props} 
              />
            );
          },
          th({ node, ...props }) {
            return (
              <th 
                className="px-6 py-4 text-left text-sm font-semibold text-slate-100 uppercase tracking-wider break-words" 
                style={{ 
                  wordWrap: 'break-word', 
                  overflowWrap: 'break-word', 
                  whiteSpace: 'normal', 
                  minWidth: '120px',
                  letterSpacing: '0.05em'
                }} 
                {...props} 
              />
            );
          },
          td({ node, ...props }) {
            return (
              <td 
                className="px-6 py-4 text-sm text-slate-300 break-words leading-relaxed" 
                style={{ 
                  wordWrap: 'break-word', 
                  overflowWrap: 'break-word', 
                  whiteSpace: 'normal', 
                  minWidth: '200px', 
                  maxWidth: '500px',
                  lineHeight: '1.7'
                }} 
                {...props} 
              />
            );
          },

          // Images with proper styling (use Next/Image to avoid lint warnings)
          // Note: Images are block-level elements, so we use a div wrapper
          img({ node, ...props }) {
            const src = (props as any).src as string | undefined
            const alt = ((props as any).alt as string | undefined) || 'Blog image'
            if (!src) return null
            
            // Skip figure numbering for header images
            const isHeader = src.includes('header.svg') || src.includes('header.png')
            // Deterministic figure id (stable across server/client)
            const figureId = !isHeader ? `figure-${stableHash(src)}` : ''
            
            // For SVGs, use regular img tag for better compatibility
            const isSVG = src.toLowerCase().endsWith('.svg')
            
            // Check if this is one of the specific PNG diagrams that should be smaller
            const isSmallDiagram = src.includes('agent-main.png') || 
                                   src.includes('agent-mcp-ndb.png') || 
                                   src.includes('mcp-main.png')
            
            // Check if this is a diagram that should be half size (architecture or onprem-cloud comparison)
            const isHalfSizeDiagram = src.includes('architecture.png') || src.includes('onprem-cloud-comparison.png')
            
            // IMPORTANT: Do not add non-deterministic cache-busting params here (causes hydration mismatch).
            // If you need cache busting, version the URL in markdown (e.g. /path.svg?v=2).
            const finalSrc = src

            // SVG sizing:
            // Many diagrams are authored at large artboard sizes (e.g. 1200px wide). Rendering them at 100% width
            // makes them feel oversized on wide screens. Cap their max width while keeping them responsive.
            const isSvgDiagram = isSVG && !isHeader && (src.includes('/blog/') || src.includes('/tutorials/'))
            const svgMaxWidth = isSvgDiagram ? '980px' : '100%'
            
            // Return as a block-level element to prevent nesting in paragraphs
            const wrapperStyle: React.CSSProperties = { 
              borderRadius: 12, 
              marginBottom: 40, 
              marginTop: 20, 
              maxWidth: '100%', 
              width: '100%', 
              overflow: 'visible', 
              display: 'block', 
              textAlign: 'center', 
              backgroundColor: 'transparent', 
              scrollMarginTop: '100px',
              padding: '0'
            }
            
            const imageContent = (
              <>
                {isSVG ? (
                  <img
                    key={finalSrc}
                    src={finalSrc}
                    alt={alt}
                    style={{ width: '100%', height: 'auto', maxWidth: svgMaxWidth, display: 'block', margin: '0 auto', visibility: 'visible', objectFit: 'contain' }}
                    loading="eager"
                    decoding="async"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      console.error('❌ Failed to load SVG:', src);
                      console.error('Final src used:', finalSrc);
                      const target = e.target as HTMLImageElement;
                      // Retry loading once after a short delay
                      if (!target.dataset.retried) {
                        target.dataset.retried = 'true';
                        setTimeout(() => {
                          if (typeof window !== 'undefined') {
                            const img = new window.Image();
                            img.onload = () => {
                              target.src = finalSrc;
                              target.style.border = '';
                              target.style.backgroundColor = '';
                            };
                            img.onerror = () => {
                              target.style.border = '2px solid red';
                              target.style.backgroundColor = '#ff000020';
                              target.style.minHeight = '200px';
                            };
                            img.src = finalSrc;
                          } else {
                            target.style.border = '2px solid red';
                            target.style.backgroundColor = '#ff000020';
                            target.style.minHeight = '200px';
                          }
                        }, 500);
                      } else {
                        target.style.border = '2px solid red';
                        target.style.backgroundColor = '#ff000020';
                        target.style.minHeight = '200px';
                      }
                    }}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.border = '';
                      target.style.backgroundColor = '';
                    }}
                  />
                ) : (
                  <Image
                    src={src}
                    alt={alt}
                    width={isHalfSizeDiagram ? 640 : (isSmallDiagram ? 1000 : 1280)}
                    height={isHalfSizeDiagram ? 375 : (isSmallDiagram ? 600 : 750)}
                    className={isHalfSizeDiagram ? 'blog-diagram-half' : undefined}
                    style={{ width: '100%', height: 'auto', maxWidth: isHalfSizeDiagram ? undefined : (isSmallDiagram ? '700px' : '100%'), margin: '0 auto', display: 'block' }}
                    unoptimized
                  />
                )}
              </>
            )
            
            // If header, return without figure wrapper
            if (isHeader) {
              return (
                <div style={wrapperStyle}>
                  {imageContent}
                </div>
              )
            }
            
            // Otherwise, wrap in figure tag with caption and number
            return (
              <figure id={figureId} style={wrapperStyle}>
                {imageContent}
                <figcaption style={{ marginTop: '12px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', fontStyle: 'italic', textAlign: 'center' }}>
                  <strong>
                    <a
                      href={`#${figureId}`}
                      className="figure-link"
                      style={{ color: '#60a5fa', textDecoration: 'none' }}
                    >
                      Figure
                    </a>
                    :
                  </strong>{' '}
                  {alt}
                </figcaption>
              </figure>
            )
          },

          // Blockquotes with styling - support for tips, hints, warnings, etc.
          blockquote({ node, children, ...props }: any) {
            // Check if this is a callout blockquote (starts with [!TIP], [!HINT], [!INFO], [!SUCCESS], or [!WARNING])
            const text = extractTextFromNode(node);
            const tipMatch = text.match(/^\[!(TIP|HINT|INFO|SUCCESS|WARNING)\]\s*([\s\S]*)/i);
            
            if (tipMatch) {
              const tipType = tipMatch[1].toLowerCase() as 'tip' | 'hint' | 'info' | 'success' | 'warning';
              let tipContent = tipMatch[2].trim();
              
              // Extract title if present (format: **Title**: or Title:)
              const titleMatch = tipContent.match(/^(?:\*\*)?(.+?)(?:\*\*)?:\s*([\s\S]+)$/);
              let title: string | undefined;
              let content: string;
              
              if (titleMatch) {
                title = titleMatch[1].trim();
                content = titleMatch[2].trim();
              } else {
                content = tipContent;
              }
              
              return (
                <Tip type={tipType} title={title}>
                  {content}
                </Tip>
              );
            }
            
            // Regular blockquote
            return <blockquote className="border-l-4 border-yellow-400 pl-6 py-2 my-6 bg-white/5 rounded-r-lg italic text-slate-300" {...props}>{children}</blockquote>;
          },

          // Strong and emphasis
          strong({ node, children, ...props }: any) {
            // Process children to style special characters - only process string children
            const processChildren = (children: any): any => {
              if (typeof children === 'string') {
                return styleSpecialChars(children);
              }
              if (Array.isArray(children)) {
                return children.map((child, idx) => {
                  if (typeof child === 'string') {
                    const styled = styleSpecialChars(child);
                    return <React.Fragment key={`strong-${idx}`}>{styled}</React.Fragment>;
                  }
                  // Don't process React elements, just return them
                  return child;
                });
              }
              // Don't process if it's already a React element
              return children;
            };
            
            // Check if this is within a list item (bullet heading)
            const isInListItem = node?.parent?.tagName === 'li' || 
                                 node?.parent?.parent?.tagName === 'li' ||
                                 node?.parent?.parent?.parent?.tagName === 'li';
            
            if (isInListItem) {
              // Check if text ends with colon (main bullet item) - use orange color
              const text = typeof children === 'string' ? children : 
                          Array.isArray(children) ? children.join('') : 
                          children?.toString() || '';
              const isMainBulletItem = text.trim().endsWith(':');
              
              if (isMainBulletItem) {
                // Style main bullet items with orange color
                return <strong className="font-bold text-orange-400" {...props}>{processChildren(children)}</strong>;
              }
              
              // Style other bullet headings with slate color
              return <strong className="font-bold text-cyan-300" {...props}>{processChildren(children)}</strong>;
            }
            
            return <strong className="font-semibold text-white" {...props}>{processChildren(children)}</strong>;
          },
          em({ node, ...props }) {
            return <em className="italic text-slate-200" {...props} />;
          },

          // Links with proper styling
          a({ node, className, ...props }: any) {
            const href = props.href || '';
            
            return (
              <a
                className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2 transition-colors duration-200"
                target={href && (href.startsWith('http') || href.startsWith('mailto')) && !href.includes('neurondb.ai') ? '_blank' : undefined}
                rel={href && (href.startsWith('http') || href.startsWith('mailto')) && !href.includes('neurondb.ai') ? 'noopener noreferrer' : undefined}
                {...props}
              />
            );
          }
        }}
      >
        {children}
      </ReactMarkdown>
      </article>
    </>
  );
}
