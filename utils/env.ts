/**
 * Environment variable validation and type-safe access
 * Validates required environment variables at startup
 */

interface EnvConfig {
  NEXT_PUBLIC_SITE_URL?: string
  NEXT_PUBLIC_GA_ID?: string
  NEXT_PUBLIC_GOOGLE_VERIFICATION?: string
  NODE_ENV: 'development' | 'production' | 'test'
}

/**
 * Validates environment variables
 * Throws error if required variables are missing in production
 */
export function validateEnv(): void {
  const errors: string[] = []
  const warnings: string[] = []

  // Required in production
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      errors.push('NEXT_PUBLIC_SITE_URL is required in production')
    } else {
      try {
        new URL(process.env.NEXT_PUBLIC_SITE_URL)
      } catch {
        errors.push('NEXT_PUBLIC_SITE_URL must be a valid URL')
      }
    }
  }

  // Optional but recommended
  if (!process.env.NEXT_PUBLIC_GA_ID && process.env.NODE_ENV === 'production') {
    warnings.push('NEXT_PUBLIC_GA_ID is not set - analytics will be disabled')
  }

  // Log warnings
  if (warnings.length > 0 && process.env.NODE_ENV === 'production') {
    console.warn('Environment variable warnings:', warnings)
  }

  // Throw errors in production
  if (errors.length > 0) {
    const errorMessage = `Environment variable validation failed:\n${errors.join('\n')}`
    if (process.env.NODE_ENV === 'production') {
      throw new Error(errorMessage)
    } else {
      console.error(errorMessage)
    }
  }
}

/**
 * Get validated environment variables
 */
export function getEnv(): EnvConfig {
  return {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_GOOGLE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    NODE_ENV: (process.env.NODE_ENV || 'development') as 'development' | 'production' | 'test',
  }
}

// Validate on module load (only in Node.js runtime, not in browser)
if (typeof window === 'undefined') {
  validateEnv()
}
