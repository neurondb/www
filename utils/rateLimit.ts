/**
 * Simple rate limiter for API routes
 * Uses in-memory storage (suitable for Vercel Edge Runtime)
 * For production, consider using @upstash/ratelimit or Redis
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// In-memory store (resets on serverless function restart)
const store: RateLimitStore = {};

export interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetTime: number;
}

/**
 * Check if request should be rate limited
 * @param identifier - Unique identifier (IP address, user ID, etc.)
 * @param config - Rate limit configuration
 * @returns Rate limit result
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = {
    interval: 60 * 1000, // 1 minute
    maxRequests: 5, // 5 requests per minute
  }
): RateLimitResult {
  // Validate inputs
  if (!identifier || typeof identifier !== 'string') {
    throw new Error('Invalid rate limit identifier');
  }
  
  if (config.interval <= 0 || config.maxRequests <= 0) {
    throw new Error('Invalid rate limit configuration');
  }
  
  const now = Date.now();
  const key = identifier.trim();

  // Clean up expired entries periodically (every 1000 calls)
  if (Math.random() < 0.001) {
    const keys = Object.keys(store);
    keys.forEach((k) => {
      if (store[k].resetTime < now) {
        delete store[k];
      }
    });
  }

  // Check if entry exists and is still valid
  if (store[key] && store[key].resetTime > now) {
    if (store[key].count >= config.maxRequests) {
      return {
        success: false,
        remaining: 0,
        resetTime: store[key].resetTime,
      };
    }
    store[key].count++;
    return {
      success: true,
      remaining: config.maxRequests - store[key].count,
      resetTime: store[key].resetTime,
    };
  }

  // Create new entry or reset expired entry
  store[key] = {
    count: 1,
    resetTime: now + config.interval,
  };

  return {
    success: true,
    remaining: config.maxRequests - 1,
    resetTime: store[key].resetTime,
  };
}

/**
 * Get client identifier from request
 */
export function getClientIdentifier(request: Request): string {
  // Try to get IP from various headers (Vercel adds these)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  const ip = cfConnectingIp || realIp || (forwarded ? forwarded.split(',')[0] : null) || 'unknown';

  return ip.trim();
}
