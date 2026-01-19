'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Loader2, Calendar, User } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface Comment {
  id: string;
  author: string;
  emailHash?: string; // Email is now hashed for privacy
  content: string;
  created_at: string;
  approved: boolean;
  parent_id?: string | null;
  replies?: Comment[];
}

interface BlogCommentsProps {
  postSlug: string;
  postTitle: string;
}

export default function BlogComments({ postSlug, postTitle }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadComments();
  }, [postSlug]);

  const loadComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/comments?postSlug=${encodeURIComponent(postSlug)}`);
      if (response.ok) {
        const data = await response.json();
        // Organize comments into threads (parent comments with replies)
        const organized = organizeComments(data.comments || []);
        setComments(organized);
      }
    } catch (error) {
      console.error('Failed to load comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const organizeComments = (allComments: Comment[]): Comment[] => {
    const parentComments = allComments.filter(c => !c.parent_id);
    const replies = allComments.filter(c => c.parent_id);
    
    // Attach replies to their parents
    const organized = parentComments.map(parent => ({
      ...parent,
      replies: replies
        .filter(reply => reply.parent_id === parent.id)
        .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    }));

    return organized.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !content.trim()) {
      setError('Please fill in all required fields.');
      errorRef.current?.focus();
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      errorRef.current?.focus();
      return;
    }

    // Validate content length
    if (content.trim().length > 5000) {
      setError('Comment must be less than 5000 characters.');
      errorRef.current?.focus();
      return;
    }

    // Validate name length
    if (name.trim().length > 100) {
      setError('Name must be less than 100 characters.');
      errorRef.current?.focus();
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postSlug,
          postTitle,
          author: name.trim(),
          email: email.trim(),
          content: content.trim(),
          parentId: replyTo || null,
          honeypot: honeypotRef.current?.value || '', // Honeypot field
        }),
      });

      if (response.ok) {
        // Clear form
        setName('');
        setEmail('');
        setContent('');
        setReplyTo(null);
        setShowForm(false);
        setError(null);
        setSuccess('Thank you! Your comment has been submitted and will appear after moderation.');

        // Reload comments after a short delay
        setTimeout(() => {
          loadComments();
        }, 1000);

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      } else {
        const errorData = await response.json();
        if (response.status === 429) {
          const retryAfter = errorData.retryAfter || 60;
          setError(
            `Too many requests. Please wait ${retryAfter} seconds before trying again.`
          );
        } else {
          setError(errorData.error || 'Failed to submit comment. Please try again.');
        }
        errorRef.current?.focus();
      }
    } catch (error) {
      console.error('Failed to submit comment:', error);
      setError('Failed to submit comment. Please check your connection and try again.');
      errorRef.current?.focus();
    } finally {
      setSubmitting(false);
    }
  };

  const handleReply = (commentId: string, authorName: string) => {
    setReplyTo(commentId);
    setShowForm(true);
    setContent(`@${authorName} `);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const CommentItem = ({ comment, depth = 0 }: { comment: Comment; depth?: number }) => (
    <div className={`mb-6 ${depth > 0 ? 'ml-8 border-l-2 border-slate-700 pl-4' : ''}`}>
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
              <User className="w-4 h-4 text-yellow-400" />
            </div>
            <div>
              <div className="font-semibold text-white">{comment.author}</div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(comment.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap ml-11">
          {comment.content}
        </div>
        {depth < 2 && (
          <button
            onClick={() => handleReply(comment.id, comment.author)}
            className="mt-3 ml-11 text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
            aria-label={`Reply to ${comment.author}`}
          >
            Reply
          </button>
        )}
      </div>
      
      {/* Render replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-12 border-t border-white/10 pt-8">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="w-6 h-6 text-yellow-400" />
        <h3 className="text-2xl font-bold text-white">Comments</h3>
        {comments.length > 0 && (
          <span className="text-slate-400 text-sm">({comments.length})</span>
        )}
      </div>

      {/* Comment Form */}
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
            setError(null);
            setSuccess(null);
          }}
          className="mb-6 px-4 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
          aria-label="Open comment form"
        >
          Add a Comment
        </button>
      )}

      {showForm && (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mb-8 bg-slate-800/50 rounded-lg p-6 border border-slate-700"
          aria-labelledby="comment-form-title"
        >
          <h4 id="comment-form-title" className="sr-only">
            Comment Form
          </h4>

          {/* Success Message */}
          {success && (
            <div
              ref={successRef}
              role="alert"
              aria-live="polite"
              className="mb-4 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300"
            >
              {success}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div
              ref={errorRef}
              role="alert"
              aria-live="assertive"
              className="mb-4 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300"
            >
              {error}
            </div>
          )}

          {replyTo && (
            <div className="mb-4 p-3 bg-slate-900/50 rounded border border-slate-700">
              <p className="text-sm text-slate-400">
                Replying to: <span className="text-yellow-400">{comments.find(c => c.id === replyTo)?.author}</span>
              </p>
              <button
                type="button"
                onClick={() => {
                  setReplyTo(null);
                  setContent('');
                  setError(null);
                }}
                className="text-xs text-yellow-400 hover:text-yellow-300 mt-1"
                aria-label="Cancel reply"
              >
                Cancel reply
              </button>
            </div>
          )}

          {/* Honeypot field - hidden from users */}
          <input
            ref={honeypotRef}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name <span aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError(null);
                  }}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Your name"
                  required
                  aria-required="true"
                  aria-invalid={error && error.includes('name') ? 'true' : 'false'}
                  aria-describedby={error && error.includes('name') ? 'name-error' : undefined}
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email <span aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                  aria-required="true"
                  aria-invalid={error && error.includes('email') ? 'true' : 'false'}
                  aria-describedby={error && error.includes('email') ? 'email-error' : undefined}
                  maxLength={320}
                />
              </div>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-white mb-2">
                Comment <span aria-label="required">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  setError(null);
                }}
                rows={5}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                placeholder="Write your comment here..."
                required
                aria-required="true"
                aria-invalid={error && error.includes('comment') ? 'true' : 'false'}
                aria-describedby={error && error.includes('comment') ? 'content-error' : undefined}
                maxLength={5000}
              />
              <div className="mt-1 text-xs text-slate-400">
                {content.length}/5000 characters
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                aria-label={submitting ? 'Submitting comment' : 'Submit comment'}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Submit Comment</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setReplyTo(null);
                  setName('');
                  setEmail('');
                  setContent('');
                  setError(null);
                  setSuccess(null);
                }}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Cancel comment form"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Comments List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-yellow-400" />
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No comments yet. Be the first to comment!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}



