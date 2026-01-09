'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/config/blogPosts';

interface RelatedBlogsProps {
  currentSlug: string;
  allPosts: BlogPost[];
  maxPosts?: number;
}

export default function RelatedBlogs({ currentSlug, allPosts, maxPosts = 4 }: RelatedBlogsProps) {
  // Get current post
  const currentPost = allPosts.find(post => post.slug === currentSlug);
  
  // Filter out current post and find related posts
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      // Calculate similarity score based on shared tags
      const currentTags = new Set(currentPost?.tags || []);
      const postTags = new Set(post.tags);
      const sharedTags = [...currentTags].filter(tag => postTags.has(tag));
      const similarityScore = sharedTags.length;
      
      return { post, similarityScore };
    })
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, maxPosts)
    .map(item => item.post);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Related Articles</h3>
          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900/70 transition-all duration-200">
                  {/* Header Image */}
                  <div className="relative w-full h-32 mb-3 rounded overflow-hidden bg-slate-100 dark:bg-slate-950">
                    {post.headerImage ? (
                      <Image
                        src={post.headerImage}
                        alt={post.title}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        unoptimized
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-2xl">📄</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Read more arrow */}
                  <div className="mt-3 flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Read more</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
