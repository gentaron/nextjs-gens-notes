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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gradient mb-6 heading-glow">
            All Stories
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[var(--gray-text)] max-w-2xl mx-auto">
            Explore our complete collection of articles, insights, and stories
          </p>
        </div>

        {/* Content */}
        {error ? (
          <div className="glass-card rounded-3xl p-16 text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h2 className="text-2xl font-bold text-[var(--pure-white)] mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-red-400 text-lg">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="glass-card rounded-3xl p-16 text-center">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-bold text-[var(--pure-white)] mb-4">
              No Posts Found
            </h2>
            <p className="text-[var(--gray-text)] text-lg">
              Check back soon for amazing content!
            </p>
          </div>
        ) : (
          <>
            {/* Stats Bar */}
            <div className="glass-card rounded-2xl p-6 mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-4 md:mb-0">
                  <span className="text-3xl font-bold text-gradient">{posts.length}</span>
                  <span className="text-[var(--gray-text)] ml-2">Articles Published</span>
                </div>
                <div className="flex items-center space-x-4 text-[var(--gray-text)]">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-[var(--electric-purple)] rounded-full mr-2"></span>
                    Latest First
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-[var(--cyan-accent)] rounded-full mr-2"></span>
                    Premium Content
                  </span>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div
                  key={post._id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>

            {/* Load More Button (placeholder) */}
            <div className="text-center mt-16">
              <button className="px-8 py-4 glass-card rounded-full text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-all duration-300 font-semibold hover:scale-105 flex items-center mx-auto">
                <span>Load More Articles</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}