'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, GraduationCap } from 'lucide-react';

interface Tutorial {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  level: string;
  order: number;
}

interface RelatedTutorialsProps {
  currentSlug: string;
  allTutorials: Tutorial[];
  maxPosts?: number;
}

export default function RelatedTutorials({ currentSlug, allTutorials, maxPosts = 4 }: RelatedTutorialsProps) {
  // Get current tutorial
  const currentTutorial = allTutorials.find(t => t.slug === currentSlug);
  
  // Filter out current tutorial and find related tutorials
  const relatedTutorials = allTutorials
    .filter(t => t.slug !== currentSlug)
    .map(t => {
      // Calculate similarity score based on:
      // 1. Same level (high priority)
      // 2. Adjacent order numbers (sequential tutorials)
      const sameLevel = t.level === currentTutorial?.level ? 10 : 0;
      const orderDiff = Math.abs((t.order || 0) - (currentTutorial?.order || 0));
      const sequentialBonus = orderDiff <= 2 ? (3 - orderDiff) * 3 : 0; // Bonus for nearby tutorials
      
      return { tutorial: t, similarityScore: sameLevel + sequentialBonus };
    })
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, maxPosts)
    .map(item => item.tutorial);

  if (relatedTutorials.length === 0) {
    return null;
  }

  const levelColors: Record<string, string> = {
    'Beginner': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Intermediate': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Advanced': 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Related Tutorials</h3>
          <div className="space-y-4">
            {relatedTutorials.map((tutorial) => (
              <Link
                key={tutorial.slug}
                href={`/tutorials/${tutorial.slug}`}
                className="block group"
              >
                <article className="bg-slate-900/50 rounded-lg border border-slate-800 p-4 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-200">
                  {/* Header Image */}
                  <div className="relative w-full h-32 mb-3 rounded overflow-hidden bg-slate-950">
                    <Image
                      src={`/tutorials/${tutorial.slug}/header.svg`}
                      alt={tutorial.title}
                      fill
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      unoptimized
                    />
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold border ${levelColors[tutorial.level] || 'bg-slate-800/90 text-slate-300'}`}>
                      {tutorial.level}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {tutorial.title}
                  </h4>
                  <p className="text-xs text-slate-300 mb-3 line-clamp-2">
                    {tutorial.excerpt}
                  </p>
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(tutorial.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{tutorial.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Read more arrow */}
                  <div className="mt-3 flex items-center gap-1 text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
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

