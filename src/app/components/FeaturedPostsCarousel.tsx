import React from 'react';
import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';

interface FeaturedPostsCarouselProps {
  posts: SanityDocument[];
}

const FeaturedPostsCarousel: React.FC<FeaturedPostsCarouselProps> = ({ posts }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 heading-glow">
            Featured Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] mx-auto rounded-full"></div>
          <p className="text-xl text-[var(--gray-text)] mt-6 max-w-2xl mx-auto">
            Discover our most captivating articles and thought-provoking insights
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="glass-card rounded-3xl p-16 text-center">
            <div className="text-6xl mb-6">📝</div>
            <h3 className="text-2xl font-bold text-[var(--pure-white)] mb-4">
              No Featured Posts Yet
            </h3>
            <p className="text-[var(--gray-text)] text-lg">
              Check back soon for amazing content!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block"
              >
                <article className="glass-card rounded-2xl p-8 h-full card-hover pulse-glow relative overflow-hidden">
                  {/* Card Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-4xl mb-6">
                      {index === 0 ? '🌟' : index === 1 ? '🚀' : '💡'}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-[var(--pure-white)] group-hover:text-gradient transition-all duration-300 leading-tight">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center text-[var(--gray-text)] text-sm mb-6">
                      <span className="w-2 h-2 bg-[var(--cyan-accent)] rounded-full mr-3"></span>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    
                    <div className="flex items-center text-[var(--cyan-accent)] group-hover:text-[var(--hot-pink)] transition-colors font-semibold">
                      <span>Read Article</span>
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-purple)]/10 to-[var(--hot-pink)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* View All Posts Button */}
        {posts.length > 0 && (
          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 glass-card rounded-full text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-all duration-300 font-semibold hover:scale-105"
            >
              <span>View All Posts</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPostsCarousel;