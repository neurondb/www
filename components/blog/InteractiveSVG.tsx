'use client'

import React, { useState, useEffect, useRef } from 'react'
import { animateFromAttributes, resetAnimations } from '@/utils/svgAnimations'

interface InteractiveSVGProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  maxWidth?: string
  priority?: boolean
  animated?: boolean
}

export default function InteractiveSVG({
  src,
  alt,
  className = '',
  style = {},
  maxWidth = '980px',
  priority = false,
  animated = false,
}: InteractiveSVGProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [isInView, setIsInView] = useState(priority) // Load immediately if priority
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationTriggered = useRef(false)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
        threshold: 0.01,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority, isInView])

  // Load SVG content for animated SVGs
  useEffect(() => {
    if (!animated || !isInView) return
    // Reset state when switching to animated mode
    if (animated && !svgContent && !hasError) {
      setSvgContent(null)
      setIsLoaded(false)
      setHasError(false)
    }
    if (svgContent || hasError) return

    const loadSvgContent = async () => {
      try {
        // Ensure src is an absolute path (starts with /) for proper resolution
        const fetchSrc = src.startsWith('/') ? src : `/${src}`
        const response = await fetch(fetchSrc)
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.statusText} (${response.status})`)
        }
        const text = await response.text()
        // Basic validation - ensure it's actually SVG content
        if (!text.trim().startsWith('<') || !text.includes('<svg')) {
          throw new Error('Response does not appear to be valid SVG content')
        }
        setSvgContent(text)
        setIsLoaded(true)
        setHasError(false)
      } catch (error) {
        console.error('Error loading SVG content:', error, 'for src:', src)
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount((prev) => prev + 1)
            setHasError(false)
          }, 1000 * (retryCount + 1))
        } else {
          setHasError(true)
        }
      }
    }

    loadSvgContent()
  }, [animated, isInView, src, svgContent, hasError, retryCount])

  // Load image when in view (for non-animated SVGs)
  useEffect(() => {
    if (animated || !isInView) return
    // Reset error state when switching to non-animated mode
    if (!animated && hasError) {
      setHasError(false)
    }
    if (isLoaded || hasError) return

    const img = new Image()
    img.onload = () => {
      setIsLoaded(true)
      setHasError(false)
    }
    img.onerror = () => {
      if (retryCount < 3) {
        // Retry up to 3 times
        setTimeout(() => {
          setRetryCount((prev) => prev + 1)
          setHasError(false)
        }, 1000 * (retryCount + 1))
      } else {
        setHasError(true)
      }
    }
    // For SVGs, set complete check after setting src
    img.src = src
    // If image is already cached, onload might not fire
    // For SVGs, check both width and height as either might be valid
    if (img.complete && (img.naturalWidth > 0 || img.naturalHeight > 0)) {
      setIsLoaded(true)
      setHasError(false)
    }
  }, [animated, isInView, src, isLoaded, hasError, retryCount])

  const handleImageError = () => {
    if (retryCount < 3) {
      setTimeout(() => {
        setRetryCount((prev) => prev + 1)
        if (imgRef.current) {
          imgRef.current.src = `${src}?retry=${retryCount + 1}&t=${Date.now()}`
        }
      }, 1000 * (retryCount + 1))
    } else {
      setHasError(true)
    }
  }

  const handleImageLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  // Check if image is already loaded when component mounts or src changes (non-animated only)
  useEffect(() => {
    if (animated || !isInView || isLoaded) return
    
    // Use multiple check intervals to catch cached images
    const checkTimer1 = setTimeout(() => {
      if (imgRef.current && !isLoaded) {
        const img = imgRef.current
        if (img.complete && (img.naturalWidth > 0 || img.naturalHeight > 0)) {
          setIsLoaded(true)
          setHasError(false)
        }
      }
    }, 10) // First check after 10ms
    
    const checkTimer2 = setTimeout(() => {
      if (imgRef.current && !isLoaded) {
        const img = imgRef.current
        if (img.complete && (img.naturalWidth > 0 || img.naturalHeight > 0)) {
          setIsLoaded(true)
          setHasError(false)
        }
      }
    }, 50) // Second check after 50ms
    
    const checkTimer3 = setTimeout(() => {
      if (imgRef.current && !isLoaded) {
        const img = imgRef.current
        if (img.complete && (img.naturalWidth > 0 || img.naturalHeight > 0)) {
          setIsLoaded(true)
          setHasError(false)
        }
      }
    }, 200) // Third check after 200ms
    
    return () => {
      clearTimeout(checkTimer1)
      clearTimeout(checkTimer2)
      clearTimeout(checkTimer3)
    }
  }, [animated, isInView, isLoaded, src])

  // Trigger animations when SVG is in view and loaded (animated SVGs only)
  useEffect(() => {
    if (!animated || !isLoaded || !svgContent || animationTriggered.current) return

    // Find SVG element in the container after it's rendered
    const findAndAnimate = () => {
      if (!containerRef.current) return

      const svgElement = containerRef.current.querySelector('svg') as SVGSVGElement | null
      if (!svgElement || animationTriggered.current) return

      svgRef.current = svgElement

      // Use IntersectionObserver to trigger animations when SVG enters viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animationTriggered.current) {
              animationTriggered.current = true
              // Small delay to ensure SVG is fully rendered
              setTimeout(() => {
                animateFromAttributes(svgElement)
              }, 100)
              observer.disconnect()
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      )

      observer.observe(svgElement)

      return () => {
        observer.disconnect()
        // Cleanup animations on unmount
        if (svgElement) {
          resetAnimations(svgElement)
        }
      }
    }

    // Small delay to ensure DOM is updated after dangerouslySetInnerHTML
    const timeoutId = setTimeout(() => {
      findAndAnimate()
      // Also ensure SVG styling is applied immediately for proper responsive sizing
      if (containerRef.current) {
        const svgElement = containerRef.current.querySelector('svg') as SVGSVGElement | null
        if (svgElement) {
          // Apply responsive styles
          svgElement.style.width = '100%'
          svgElement.style.height = 'auto'
          svgElement.style.maxWidth = maxWidth
          svgElement.style.display = 'block'
          // Ensure viewBox is set for proper scaling (should already be there)
          // Remove fixed width/height attributes to allow CSS to control sizing
          const hasViewBox = svgElement.getAttribute('viewBox')
          if (hasViewBox) {
            svgElement.removeAttribute('width')
            svgElement.removeAttribute('height')
          }
        }
      }
    }, 50)

    return () => {
      clearTimeout(timeoutId)
      // Cleanup animations on unmount
      if (svgRef.current) {
        resetAnimations(svgRef.current)
      }
    }
  }, [animated, isLoaded, svgContent, maxWidth])

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{
        minHeight: isLoaded ? 'auto' : '200px',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg"
          style={{
            backgroundSize: '200% 100%',
            backgroundPosition: '0% 0%',
            animation: 'shimmer 2s ease-in-out infinite',
          }}
          aria-hidden="true"
        />
      )}

      {/* Error State */}
      {hasError && (
        <div
          className="flex items-center justify-center p-8 border-2 border-red-500/50 bg-red-500/10 rounded-lg"
          style={{ minHeight: '200px' }}
        >
          <div className="text-center">
            <svg
              className="w-12 h-12 text-red-400 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-red-400 text-sm">Failed to load image</p>
            <button
              onClick={() => {
                setHasError(false)
                setRetryCount(0)
                setIsLoaded(false)
              }}
              className="mt-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded text-sm transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Animated SVG (inline) */}
      {isInView && animated && svgContent && (
        <div
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: '100%',
            maxWidth: maxWidth,
            margin: '0 auto',
            overflow: 'hidden',
            ...style,
          }}
          dangerouslySetInnerHTML={{
            __html: svgContent,
          }}
          aria-label={alt}
        />
      )}

      {/* Static Image (non-animated SVGs and other images) */}
      {isInView && !animated && (
        <img
          ref={(node) => {
            imgRef.current = node
            // Check if image is already loaded (cached) - use setTimeout to ensure state updates work
            if (node && node.complete && !isLoaded) {
              // For SVGs, check both width and height as either might be valid
              if (node.naturalWidth > 0 || node.naturalHeight > 0) {
                setTimeout(() => {
                  setIsLoaded(true)
                  setHasError(false)
                }, 0)
              }
            }
          }}
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: maxWidth,
            display: 'block',
            margin: '0 auto',
            objectFit: 'contain',
            ...style,
          }}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
          aria-label={alt}
        />
      )}
    </div>
  )
}
