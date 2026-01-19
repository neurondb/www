/**
 * Input sanitization utilities
 * Note: For HTML content sanitization, consider using DOMPurify library
 * This basic implementation is sufficient for plain text content
 */

/**
 * Sanitize HTML content by removing potentially dangerous tags and attributes
 * This is a basic implementation - for production use DOMPurify for HTML content
 * For plain text, this is sufficient
 */
export function sanitizeHtml(html: string): string {
  if (typeof html !== 'string') {
    return '';
  }

  // Remove all HTML tags (basic XSS prevention)
  // In production, use DOMPurify with specific allowed tags for HTML content
  // This function is safe for plain text that should never contain HTML
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitize plain text content
 */
export function sanitizeText(text: string, maxLength?: number): string {
  if (typeof text !== 'string') {
    return '';
  }

  // Trim whitespace
  let sanitized = text.trim();

  // Remove control characters except newlines and tabs
  sanitized = sanitized.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');

  // Apply length limit if provided
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized;
}

/**
 * Validate and sanitize email address
 */
export function sanitizeEmail(email: string): string | null {
  if (typeof email !== 'string') {
    return null;
  }

  const sanitized = email.trim().toLowerCase();

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitized)) {
    return null;
  }

  // Prevent overly long emails (RFC 5321 limit is 320 characters)
  if (sanitized.length > 320) {
    return null;
  }

  return sanitized;
}

/**
 * Content length limits
 */
export const CONTENT_LIMITS = {
  AUTHOR_MAX: 100,
  EMAIL_MAX: 320,
  CONTENT_MAX: 5000,
  POST_SLUG_MAX: 200,
  POST_TITLE_MAX: 300,
} as const;

/**
 * Validate content length
 */
export function validateLength(
  value: string,
  maxLength: number,
  fieldName: string
): { valid: boolean; error?: string } {
  if (value.length > maxLength) {
    return {
      valid: false,
      error: `${fieldName} must be less than ${maxLength} characters`,
    };
  }
  return { valid: true };
}
