import React from 'react';
import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';

interface BlogPostCardProps {
  post: SanityDocument;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group block h-full"
    >
      <article className="glass-card rounded-2xl p-8 h-full card-hover relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--electric-purple)]/20 to-[var(--hot-pink)]/20 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[var(--cyan-accent)]/20 to-transparent rounded-tr-3xl"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <div className="text-3xl mb-4">📖</div>
          
          {/* Title */}
          <h3 className="text-xl font-bold mb-4 text-[var(--pure-white)] group-hover:text-gradient transition-all duration-300 leading-tight flex-grow">
            {post.title}
          </h3>
          
          {/* Date */}
          <div className="flex items-center text-[var(--gray-text)] text-sm mb-6">
            <div className="w-2 h-2 bg-[var(--cyan-accent)] rounded-full mr-3"></div>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          
          {/* Read More Link */}
          <div className="flex items-center text-[var(--cyan-accent)] group-hover:text-[var(--hot-pink)] transition-colors font-semibold">
            <span>Read More</span>
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-purple)]/5 to-[var(--hot-pink)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </article>
    </Link>
  );
};

export default BlogPostCard;