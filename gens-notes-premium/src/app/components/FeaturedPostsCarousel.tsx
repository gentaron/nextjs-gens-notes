import React from 'react';
import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';

interface FeaturedPostsCarouselProps {
  posts: SanityDocument[];
}

const FeaturedPostsCarousel: React.FC<FeaturedPostsCarouselProps> = ({ posts }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Featured Posts
        </h2>
        {posts.length === 0 ? (
          <p className="text-center text-pure-white">No featured posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPostsCarousel;
