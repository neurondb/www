'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Lightbulb, Info, CheckCircle, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface TipProps {
  children: React.ReactNode
  type?: 'tip' | 'info' | 'success' | 'warning'
  title?: string
  className?: string
}

const tipConfig = {
  tip: {
    icon: Lightbulb,
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/30',
    iconColor: 'text-yellow-400',
    titleColor: 'text-yellow-300',
    defaultTitle: '💡 Pro Tip',
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    iconColor: 'text-blue-400',
    titleColor: 'text-blue-300',
    defaultTitle: 'ℹ️ Info',
  },
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/30',
    iconColor: 'text-green-400',
    titleColor: 'text-green-300',
    defaultTitle: '✅ Success',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-orange-400/10',
    borderColor: 'border-orange-400/30',
    iconColor: 'text-orange-400',
    titleColor: 'text-orange-300',
    defaultTitle: '⚠️ Warning',
  },
}

export default function Tip({ 
  children, 
  type = 'tip', 
  title,
  className 
}: TipProps) {
  const config = tipConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        'my-6 p-5 rounded-xl border-l-4',
        config.bgColor,
        config.borderColor,
        'backdrop-blur-sm',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn('flex-shrink-0 mt-0.5', config.iconColor)}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={cn('font-semibold mb-2', config.titleColor)}>
              {title}
            </h4>
          )}
          {!title && (
            <h4 className={cn('font-semibold mb-2', config.titleColor)}>
              {config.defaultTitle}
            </h4>
          )}
          <div className="text-white/90 prose prose-invert max-w-none">
            {typeof children === 'string' ? (
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                  code: ({ children }) => <code className="bg-slate-700/50 text-yellow-300 px-1.5 py-0.5 rounded text-sm">{children}</code>,
                }}
              >
                {children}
              </ReactMarkdown>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

