/**
 * Product Icons - Single Source of Truth
 * 
 * All product icons are defined here. Use theme configuration for colors.
 * Import from this file instead of defining icons elsewhere.
 */

import { Database, Zap, Brain, Search } from 'lucide-react'
import { getProductTheme, type ProductId } from '@/config/theme'

export interface ProductIconProps {
  size?: number
  className?: string
}

// Custom NeurondB icon component
export const NeurondBIcon = ({ size = 24, className }: ProductIconProps) => (
  <div className={className || 'relative flex items-center justify-center'} style={{ width: size, height: size }}>
    <Brain className="text-indigo-400" style={{ width: size * 0.7, height: size * 0.7 }} />
    <Database className="text-teal-400 absolute -bottom-1 -right-1" style={{ width: size * 0.35, height: size * 0.35 }} />
    <Zap className="text-yellow-400 absolute -top-1 -left-1" style={{ width: size * 0.3, height: size * 0.3 }} />
    <Search className="text-purple-400 absolute -top-1 -right-1" style={{ width: size * 0.25, height: size * 0.25 }} />
  </div>
)


/**
 * Get product icon component by product ID
 */
export function getProductIcon(productId: ProductId) {
  const iconMap: Record<ProductId, React.ComponentType<ProductIconProps>> = {
    neurondb: NeurondBIcon,
  }
  return iconMap[productId]
}

