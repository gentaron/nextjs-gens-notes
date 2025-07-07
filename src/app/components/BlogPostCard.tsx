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
      className="group block bg-[var(--dark-card)] backdrop-blur-md rounded-xl p-6 shadow-glass border border-[var(--dark-border)] transform hover:scale-105 transition-all duration-300 hover:shadow-card-glow"
    >
      <h3 className="text-xl font-semibold mb-2 text-[var(--pure-white)] group-hover:text-[var(--cyan-accent)] transition-colors">
        {post.title}
      </h3>
      <p className="text-[var(--gray-text)] text-sm mb-4">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <span className="text-[var(--cyan-accent)] group-hover:underline">
        Read more →
      </span>
    </Link>
  );
};

export default BlogPostCard;
