/**
 * Product Icons - Single Source of Truth
 * 
 * All product icons are defined here. Use theme configuration for colors.
 * Import from this file instead of defining icons elsewhere.
 */

import { Database, Zap, Brain, Search, Bot, Plug, Monitor } from 'lucide-react'
import { getProductTheme, type ProductId } from '@/config/theme'

export interface ProductIconProps {
  size?: number
  className?: string
}

// Custom NeuronDB icon component
export const NeurondBIcon = ({ size = 24, className }: ProductIconProps) => (
  <div className={className || 'relative flex items-center justify-center'} style={{ width: size, height: size }}>
    <Brain className="text-indigo-400" style={{ width: size * 0.7, height: size * 0.7 }} />
    <Database className="text-teal-400 absolute -bottom-1 -right-1" style={{ width: size * 0.35, height: size * 0.35 }} />
    <Zap className="text-yellow-400 absolute -top-1 -left-1" style={{ width: size * 0.3, height: size * 0.3 }} />
    <Search className="text-purple-400 absolute -top-1 -right-1" style={{ width: size * 0.25, height: size * 0.25 }} />
  </div>
)

// Preferred export (correct casing). Keep NeurondBIcon for backward compatibility.
export const NeuronDBIcon = NeurondBIcon

// NeuronAgent icon component
export const NeuronAgentIcon = ({ size = 24, className }: ProductIconProps) => (
  <div className={className || 'relative flex items-center justify-center'} style={{ width: size, height: size }}>
    <Bot className="text-blue-400" style={{ width: size * 0.8, height: size * 0.8 }} />
    <Zap className="text-yellow-400 absolute -top-1 -right-1" style={{ width: size * 0.3, height: size * 0.3 }} />
  </div>
)

// NeuronMCP icon component
export const NeuronMCPIcon = ({ size = 24, className }: ProductIconProps) => (
  <div className={className || 'relative flex items-center justify-center'} style={{ width: size, height: size }}>
    <Plug className="text-green-400" style={{ width: size * 0.8, height: size * 0.8 }} />
  </div>
)

// NeuronDesktop icon component
export const NeuronDesktopIcon = ({ size = 24, className }: ProductIconProps) => (
  <div className={className || 'relative flex items-center justify-center'} style={{ width: size, height: size }}>
    <Monitor className="text-purple-400" style={{ width: size * 0.8, height: size * 0.8 }} />
  </div>
)


/**
 * Get product icon component by product ID
 */
export function getProductIcon(productId: ProductId) {
  const iconMap: Record<ProductId, React.ComponentType<ProductIconProps>> = {
    neurondb: NeurondBIcon,
    neuronagent: NeuronAgentIcon,
    neuronmcp: NeuronMCPIcon,
    neurondesktop: NeuronDesktopIcon,
  }
  return iconMap[productId]
}

