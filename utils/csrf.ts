/**
 * CSRF Protection utilities
 * For Next.js API routes, we use token-based CSRF protection
 */

import { cookies } from 'next/headers';

/**
 * Constant-time string comparison to prevent timing attacks
 * Compares two strings in constant time regardless of where they differ
 */
function constantTimeEquals(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
}

const CSRF_TOKEN_NAME = 'csrf-token';
const CSRF_TOKEN_EXPIRY = 3600; // 1 hour in seconds

/**
 * Generate a random CSRF token
 */
export function generateCsrfToken(): string {
  // Generate a random token (32 bytes hex = 64 chars)
  const array = new Uint8Array(32);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(array);
  } else {
    // Fallback for environments without crypto
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Get CSRF token from cookie or generate a new one
 */
export async function getCsrfToken(): Promise<string> {
  try {
    const cookieStore = await cookies();
    const existingToken = cookieStore.get(CSRF_TOKEN_NAME);
    
    if (existingToken?.value) {
      return existingToken.value;
    }
    
    // Generate new token
    const newToken = generateCsrfToken();
    // Note: In Next.js App Router, setting cookies in API routes requires Response headers
    // This function should be called from a Server Component or route handler that can set cookies
    return newToken;
  } catch (error) {
    // Fallback if cookies are not available
    return generateCsrfToken();
  }
}

/**
 * Validate CSRF token from request
 */
export async function validateCsrfToken(request: Request, token?: string): Promise<boolean> {
  try {
    // Get token from header (preferred) or body
    const headerToken = request.headers.get('X-CSRF-Token');
    const bodyToken = token;
    const providedToken = headerToken || bodyToken;
    
    if (!providedToken) {
      return false;
    }
    
    // Get token from cookie
    const cookieStore = await cookies();
    const cookieToken = cookieStore.get(CSRF_TOKEN_NAME)?.value;
    
    if (!cookieToken) {
      return false;
    }
    
    // Constant-time comparison to prevent timing attacks
    return constantTimeEquals(providedToken, cookieToken);
  } catch (error) {
    // If cookies are not available, skip validation (development only)
    if (process.env.NODE_ENV === 'development') {
      return true;
    }
    return false;
  }
}

/**
 * Set CSRF token in response headers
 */
export function setCsrfTokenCookie(token: string): string {
  return `${CSRF_TOKEN_NAME}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${CSRF_TOKEN_EXPIRY}`;
}
