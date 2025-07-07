import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import BlogPostCard from "../components/BlogPostCard";

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]|order(publishedAt desc){ _id, title, slug, publishedAt }`;

export default async function BlogPage() {
  let posts: SanityDocument[] = [];
  let error: string | null = null;

  try {
    posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
  } catch (err: unknown) {
    console.error("Sanity fetch error (all posts):", err);
    let errorMessage = "An unknown error occurred.";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }
    error = `Failed to load posts: ${errorMessage}`;
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gradient">
          All Blog Posts
        </h1>
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-[var(--pure-white)]">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}