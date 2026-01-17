'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  animationType?: 'fadeIn' | 'slideUp' | 'slideDown' | 'scaleIn' | 'slideLeft' | 'slideRight'
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
    animationType = 'fadeIn',
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (triggerOnce && !hasAnimated) {
              setHasAnimated(true)
            }
          } else if (!triggerOnce) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasAnimated])

  const getAnimationClass = () => {
    if (!isVisible) {
      const baseClasses = {
        fadeIn: 'opacity-0 translate-y-4',
        slideUp: 'opacity-0 translate-y-8',
        slideDown: 'opacity-0 -translate-y-8',
        scaleIn: 'opacity-0 scale-95',
        slideLeft: 'opacity-0 translate-x-8',
        slideRight: 'opacity-0 -translate-x-8',
      }
      return baseClasses[animationType] || baseClasses.fadeIn
    }

    return 'opacity-100 translate-y-0 translate-x-0 scale-100'
  }

  return {
    ref: elementRef,
    isVisible,
    animationClass: `transition-all duration-700 ease-out ${getAnimationClass()}`,
  }
}
