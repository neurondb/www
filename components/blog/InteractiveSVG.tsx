'use client'

import React, { useState, useEffect, useRef } from 'react'

interface InteractiveSVGProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  maxWidth?: string
  priority?: boolean
}

export default function InteractiveSVG({
  src,
  alt,
  className = '',
  style = {},
  maxWidth = '980px',
  priority = false,
}: InteractiveSVGProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [isInView, setIsInView] = useState(priority) // Load immediately if priority
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Load image when in view
  useEffect(() => {
    if (!isInView || isLoaded || hasError) return

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
  }, [isInView, src, isLoaded, hasError, retryCount])

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

  // Check if image is already loaded when component mounts or src changes
  useEffect(() => {
    if (!isInView || isLoaded) return
    
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
  }, [isInView, isLoaded, src])

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{
        minHeight: isLoaded ? 'auto' : '200px',
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

      {/* Actual Image */}
      {isInView && (
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
