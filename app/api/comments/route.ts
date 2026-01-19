import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIdentifier } from '@/utils/rateLimit';
import {
  sanitizeText,
  sanitizeEmail,
  validateLength,
  CONTENT_LIMITS,
} from '@/utils/sanitize';

// Note: Edge Runtime doesn't support @vercel/postgres directly
// Switching back to Node.js runtime for database compatibility
// For better latency, consider using Vercel Postgres REST API with Edge Runtime
export const runtime = 'nodejs';

// Note: Edge Runtime doesn't support @vercel/postgres directly
// For Edge Runtime, we need to use Vercel Postgres REST API or switch to Node.js runtime
// For now, we'll use dynamic import which works in both environments
import type { QueryResultRow } from '@vercel/postgres';

let sql: any | null = null;

// Initialize SQL client (only in Node.js runtime)
// Edge Runtime will need to use REST API instead
async function getSql() {
  if (sql) return sql;
  
  try {
    // Dynamic import for compatibility
    const { sql: vercelSql } = await import('@vercel/postgres');
    sql = vercelSql;
    return sql;
  } catch (error) {
    // Database not configured - will handle gracefully
    return null;
  }
}

interface CommentRow {
  id: number;
  postSlug: string;
  postTitle: string;
  author: string;
  email: string;
  content: string;
  created_at: Date;
  approved: boolean;
  parentId: number | null;
}

interface Comment {
  id: string;
  postSlug: string;
  postTitle: string;
  author: string;
  emailHash?: string; // Hashed email for privacy
  content: string;
  created_at: string;
  approved: boolean;
  parent_id: string | null;
}

/**
 * Hash email address for privacy using cryptographic hash
 * Uses SHA-256 for secure hashing
 */
async function hashEmail(email: string): Promise<string> {
  try {
    // Convert email to Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(email.toLowerCase().trim());
    
    // Hash using SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    // Convert to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    // Return first 16 characters for display (8 was too short, 16 provides better uniqueness)
    return hashHex.substring(0, 16);
  } catch (error) {
    // Fallback to simple hash if crypto.subtle is not available (shouldn't happen in Node.js)
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      const char = email.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).substring(0, 16);
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const postSlug = searchParams.get('postSlug');

  if (!postSlug) {
    return NextResponse.json({ error: 'postSlug is required' }, { status: 400 });
  }

  // Validate postSlug length
  const slugValidation = validateLength(postSlug, CONTENT_LIMITS.POST_SLUG_MAX, 'postSlug');
  if (!slugValidation.valid) {
    return NextResponse.json({ error: slugValidation.error }, { status: 400 });
  }

  try {
    // Get SQL client
    const db = await getSql();
    if (!db) {
      return NextResponse.json({ comments: [] }, { status: 200 });
    }

    // Use Vercel Postgres
    const { rows } = await db`
      SELECT 
        id,
        post_slug as "postSlug",
        post_title as "postTitle",
        author,
        email,
        content,
        created_at as "created_at",
        approved,
        parent_id as "parentId"
      FROM blog_comments
      WHERE post_slug = ${postSlug} AND approved = true
      ORDER BY created_at DESC
    `;

    // Map rows and hide email addresses (only include hash)
    const comments: Comment[] = await Promise.all(
      (rows as CommentRow[]).map(async (row) => ({
        id: row.id.toString(),
        postSlug: row.postSlug,
        postTitle: row.postTitle,
        author: sanitizeText(row.author),
        emailHash: await hashEmail(row.email), // Don't expose actual email
        content: sanitizeText(row.content),
        created_at: row.created_at.toISOString(),
        approved: row.approved,
        parent_id: row.parentId ? row.parentId.toString() : null,
      }))
    );

    return NextResponse.json({ comments });
  } catch (error) {
    // Log error but don't expose details to client
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching comments:', error);
    }
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // CSRF Protection - Validate Origin and Referer headers
  // This provides defense-in-depth against CSRF attacks
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');
  
  // Allow requests from same origin or from the site's domain
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL,
    `https://${host}`,
    `http://${host}`,
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ].filter(Boolean);
  
  // Check if origin is allowed (same-origin or whitelisted)
  // Same-origin requests may not include Origin header, so we also check Referer
  const isOriginAllowed =
    !origin || // Allow requests without origin (same-origin from browser)
    (origin !== null ? allowedOrigins.some((allowed) => origin.startsWith(allowed)) : false) ||
    (referer !== null ? allowedOrigins.some((allowed) => referer.startsWith(allowed)) : false);
  
  if (!isOriginAllowed && process.env.NODE_ENV === 'production') {
    // Log potential CSRF attempt in production
    console.warn('Potential CSRF attempt blocked', { origin, referer, host });
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  // Rate limiting - 5 requests per minute per IP
  const clientId = getClientIdentifier(request);
  const rateLimit = checkRateLimit(clientId, {
    interval: 60 * 1000, // 1 minute
    maxRequests: 5, // 5 requests per minute
  });

  if (!rateLimit.success) {
    const resetSeconds = Math.ceil((rateLimit.resetTime - Date.now()) / 1000);
    return NextResponse.json(
      {
        error: 'Too many requests. Please try again later.',
        retryAfter: resetSeconds,
      },
      {
        status: 429,
        headers: {
          'Retry-After': resetSeconds.toString(),
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': rateLimit.resetTime.toString(),
        },
      }
    );
  }

  // Check Content-Length header (max 50KB for request body)
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > 50 * 1024) {
    return NextResponse.json({ error: 'Request body too large' }, { status: 413 });
  }

  try {
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    const { postSlug, postTitle, author, email, content, parentId, honeypot } = body;

    // Honeypot spam protection (should be empty)
    if (honeypot && honeypot.trim() !== '') {
      // Silently reject - looks like spam
      return NextResponse.json({ message: 'Comment submitted successfully' }, { status: 201 });
    }

    // Validation
    if (!postSlug || !postTitle || !author || !email || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Sanitize and validate all inputs
    const sanitizedSlug = sanitizeText(String(postSlug), CONTENT_LIMITS.POST_SLUG_MAX);
    const slugValidation = validateLength(sanitizedSlug, CONTENT_LIMITS.POST_SLUG_MAX, 'postSlug');
    if (!slugValidation.valid) {
      return NextResponse.json({ error: slugValidation.error }, { status: 400 });
    }

    const sanitizedTitle = sanitizeText(String(postTitle), CONTENT_LIMITS.POST_TITLE_MAX);
    const titleValidation = validateLength(
      sanitizedTitle,
      CONTENT_LIMITS.POST_TITLE_MAX,
      'postTitle'
    );
    if (!titleValidation.valid) {
      return NextResponse.json({ error: titleValidation.error }, { status: 400 });
    }

    const sanitizedAuthor = sanitizeText(author, CONTENT_LIMITS.AUTHOR_MAX);
    const authorValidation = validateLength(
      sanitizedAuthor,
      CONTENT_LIMITS.AUTHOR_MAX,
      'author'
    );
    if (!authorValidation.valid) {
      return NextResponse.json({ error: authorValidation.error }, { status: 400 });
    }

    const sanitizedEmail = sanitizeEmail(email);
    if (!sanitizedEmail) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const sanitizedContent = sanitizeText(content, CONTENT_LIMITS.CONTENT_MAX);
    const contentValidation = validateLength(
      sanitizedContent,
      CONTENT_LIMITS.CONTENT_MAX,
      'content'
    );
    if (!contentValidation.valid) {
      return NextResponse.json({ error: contentValidation.error }, { status: 400 });
    }

    // Get SQL client
    const db = await getSql();
    if (!db) {
      return NextResponse.json(
        { error: 'Database not configured. Please set up Vercel Postgres in your dashboard.' },
        { status: 503 }
      );
    }

    // Validate parentId if provided
    let parentIdInt: number | null = null;
    if (parentId) {
      const parsed = parseInt(String(parentId), 10);
      if (!isNaN(parsed) && parsed > 0) {
        parentIdInt = parsed;
      }
    }

    // Insert into database with sanitized values
    const { rows } = await db`
      INSERT INTO blog_comments (
        post_slug,
        post_title,
        author,
        email,
        content,
        approved,
        parent_id
      ) VALUES (
        ${sanitizedSlug},
        ${sanitizedTitle},
        ${sanitizedAuthor},
        ${sanitizedEmail},
        ${sanitizedContent},
        false,
        ${parentIdInt}
      )
      RETURNING 
        id,
        post_slug as "postSlug",
        post_title as "postTitle",
        author,
        email,
        content,
        created_at as "created_at",
        approved,
        parent_id as "parentId"
    `;

    const row = rows[0] as CommentRow;
    const newComment: Comment = {
      id: row.id.toString(),
      postSlug: row.postSlug,
      postTitle: row.postTitle,
      author: row.author,
      emailHash: await hashEmail(row.email), // Don't expose actual email
      content: row.content,
      created_at: row.created_at.toISOString(),
      approved: row.approved,
      parent_id: row.parentId ? row.parentId.toString() : null,
    };

    return NextResponse.json(
      { message: 'Comment submitted successfully', comment: newComment },
      {
        status: 201,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString(),
        },
      }
    );
  } catch (error) {
    // Log error but don't expose details to client
    if (process.env.NODE_ENV === 'development') {
      console.error('Error creating comment:', error);
    }
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
  }
}
