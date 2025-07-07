"use client";

import { useEffect, useState } from 'react';
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";

const POST_QUERY = `*[ _type == "post" && slug.current == $slug ][0]`;

interface PostContentProps {
  slug: string;
}

export default function PostContent({ slug }: PostContentProps) {
  const [post, setPost] = useState<SanityDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await client.fetch<SanityDocument>(POST_QUERY, { slug });
        setPost(fetchedPost);
      } catch (err: unknown) {
        console.error("Sanity fetch error:", err);
        let errorMessage = "An unknown error occurred.";
        if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === 'string') {
          errorMessage = err;
        }
        setError(`Failed to load post: ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="glass-card rounded-3xl p-16 text-center card-hover">
        <div className="animate-pulse">
          <div className="text-6xl mb-6">📖</div>
          <div className="h-8 bg-[var(--glass-bg)] rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-4 bg-[var(--glass-bg)] rounded mb-2 max-w-sm mx-auto"></div>
          <div className="h-4 bg-[var(--glass-bg)] rounded mb-8 max-w-xs mx-auto"></div>
          <div className="space-y-3">
            <div className="h-4 bg-[var(--glass-bg)] rounded"></div>
            <div className="h-4 bg-[var(--glass-bg)] rounded"></div>
            <div className="h-4 bg-[var(--glass-bg)] rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card rounded-3xl p-16 text-center">
        <div className="text-6xl mb-6">⚠️</div>
        <h2 className="text-2xl font-bold text-[var(--pure-white)] mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="glass-card rounded-3xl p-16 text-center">
        <div className="text-6xl mb-6">📄</div>
        <h2 className="text-2xl font-bold text-[var(--pure-white)] mb-4">
          Post Not Found
        </h2>
        <p className="text-[var(--gray-text)] text-lg">
          The article you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="glass-card rounded-3xl p-12 mb-8 text-center card-hover">
        <div className="text-5xl mb-6">📖</div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gradient heading-glow leading-tight">
          {post.title}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] mx-auto rounded-full mb-6"></div>
        <div className="flex items-center justify-center text-[var(--gray-text)] text-lg">
          <span className="w-2 h-2 bg-[var(--cyan-accent)] rounded-full mr-3"></span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      {/* Article Content */}
      <article className="glass-card rounded-3xl p-12 card-hover">
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-[var(--pure-white)] leading-relaxed">
            <PortableText 
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-6 text-lg leading-relaxed text-[var(--pure-white)]">
                      {children}
                    </p>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold text-gradient mb-6 heading-glow">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-[var(--pure-white)] mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-[var(--cyan-accent)] mb-4 mt-6">
                      {children}
                    </h3>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[var(--electric-purple)] pl-6 my-8 italic text-[var(--gray-text)] text-xl">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside mb-6 space-y-2 text-[var(--pure-white)]">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside mb-6 space-y-2 text-[var(--pure-white)]">
                      {children}
                    </ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="text-lg leading-relaxed">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="text-lg leading-relaxed">{children}</li>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold text-[var(--cyan-accent)]">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-[var(--hot-pink)]">
                      {children}
                    </em>
                  ),
                  code: ({ children }) => (
                    <code className="bg-[var(--glass-bg)] px-2 py-1 rounded text-[var(--cyan-accent)] font-mono text-sm">
                      {children}
                    </code>
                  ),
                },
              }}
            />
          </div>
        </div>
      </article>

      {/* Article Footer */}
      <footer className="glass-card rounded-3xl p-8 mt-8 text-center card-hover">
        <h3 className="text-2xl font-bold text-gradient mb-4">
          Enjoyed this article?
        </h3>
        <p className="text-[var(--gray-text)] mb-6">
          Share it with others and explore more of our content
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary px-6 py-3 rounded-full">
            Share Article
          </button>
          <Link
            href="/blog"
            className="px-6 py-3 glass-card rounded-full text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-all duration-300 font-semibold hover:scale-105"
          >
            Read More Articles
          </Link>
        </div>
      </footer>
    </div>
  );
}