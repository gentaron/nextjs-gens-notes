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
      className="group block bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-pure-white group-hover:text-cyan-accent transition-colors">
        {post.title}
      </h3>
      <p className="text-secondary text-sm mb-4">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <span className="text-cyan-accent group-hover:underline">
        Read more →
      </span>
    </Link>
  );
};

export default BlogPostCard;
