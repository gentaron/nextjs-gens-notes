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
    return <div className="text-center text-[var(--pure-white)] py-16">Loading post...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-16">{error}</div>;
  }

  if (!post) {
    return <div className="text-center text-[var(--pure-white)] py-16">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-[var(--dark-card)] backdrop-blur-md rounded-xl p-8 shadow-glass border border-[var(--dark-border)]">
      <h1 className="text-5xl font-extrabold mb-4 text-gradient">
        {post.title}
      </h1>
      <p className="text-[var(--gray-text)] text-sm mb-8">
        Published on {" "}
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="prose prose-invert max-w-none text-[var(--pure-white)]">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
