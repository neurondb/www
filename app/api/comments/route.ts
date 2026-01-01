import { NextRequest, NextResponse } from 'next/server';

// Vercel Postgres - works on free tier!
// If database not set up, this will gracefully fail
let sql: any;
try {
  const { sql: vercelSql } = require('@vercel/postgres');
  sql = vercelSql;
} catch (error) {
  console.warn('Vercel Postgres not configured. Set up database in Vercel dashboard.');
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const postSlug = searchParams.get('postSlug');

  if (!postSlug) {
    return NextResponse.json(
      { error: 'postSlug is required' },
      { status: 400 }
    );
  }

  try {
    // Check if database is configured
    if (!sql) {
      return NextResponse.json({ comments: [] }, { status: 200 });
    }

    // Use Vercel Postgres (FREE tier works great!)
    const { rows } = await sql`
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

    const comments = rows.map((row: any) => ({
      id: row.id.toString(),
      postSlug: row.postSlug,
      postTitle: row.postTitle,
      author: row.author,
      email: row.email,
      content: row.content,
      created_at: row.created_at.toISOString(),
      approved: row.approved,
      parent_id: row.parentId ? row.parentId.toString() : null,
    }));

    return NextResponse.json({ comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postSlug, postTitle, author, email, content, parentId } = body;

    // Validation
    if (!postSlug || !postTitle || !author || !email || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if database is configured
    if (!sql) {
      return NextResponse.json(
        { error: 'Database not configured. Please set up Vercel Postgres in your dashboard.' },
        { status: 503 }
      );
    }

    // Use Vercel Postgres (FREE tier works great!)
    const parentIdInt = parentId ? parseInt(parentId, 10) : null;
    
    const { rows } = await sql`
      INSERT INTO blog_comments (
        post_slug,
        post_title,
        author,
        email,
        content,
        approved,
        parent_id
      ) VALUES (
        ${postSlug},
        ${postTitle},
        ${author.trim()},
        ${email.trim().toLowerCase()},
        ${content.trim()},
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

    const row = rows[0];
    const newComment = {
      id: row.id.toString(),
      postSlug: row.postSlug,
      postTitle: row.postTitle,
      author: row.author,
      email: row.email,
      content: row.content,
      created_at: row.created_at.toISOString(),
      approved: row.approved,
      parent_id: row.parentId ? row.parentId.toString() : null,
    };

    return NextResponse.json(
      { message: 'Comment submitted successfully', comment: newComment },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
