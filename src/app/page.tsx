import Link from "next/link";
import FeaturedPostsCarousel from "./components/FeaturedPostsCarousel";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const FEATURED_POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]|order(publishedAt desc)[0...3]{ _id, title, slug, publishedAt }`;

export default async function Home() {
  let featuredPosts: SanityDocument[] = [];
  let error: string | null = null;

  try {
    featuredPosts = await client.fetch<SanityDocument[]>(FEATURED_POSTS_QUERY);
  } catch (err: unknown) {
    console.error("Sanity fetch error (featured posts):", err);
    let errorMessage = "An unknown error occurred.";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }
    error = `Failed to load featured posts: ${errorMessage}`;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--electric-purple)]/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--hot-pink)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--cyan-accent)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10 text-center p-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight mb-6 text-gradient heading-glow animate-fade-in-up">
              Gens Notes
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] mx-auto mb-8 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-3xl text-[var(--pure-white)] mb-12 animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Your premium source for 
            <span className="text-gradient font-semibold"> insightful articles </span>
            and 
            <span className="text-gradient font-semibold"> captivating stories</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/blog"
              className="btn-primary px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              Explore Blog
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 text-lg font-semibold rounded-full border-2 border-[var(--cyan-accent)] text-[var(--cyan-accent)] hover:bg-[var(--cyan-accent)] hover:text-[var(--deep-black)] transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--cyan-accent)] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--cyan-accent)] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Articles Published", icon: "📝" },
              { number: "50K+", label: "Monthly Readers", icon: "👥" },
              { number: "95%", label: "Reader Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 text-center card-hover pulse-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-[var(--gray-text)] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {error ? (
        <div className="text-center text-red-500 py-16 glass-card mx-4 rounded-2xl">
          <div className="text-6xl mb-4">⚠️</div>
          <p className="text-xl">{error}</p>
        </div>
      ) : (
        <FeaturedPostsCarousel posts={featuredPosts} />
      )}

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gradient mb-6 heading-glow">
              Stay Updated
            </h2>
            <p className="text-xl text-[var(--gray-text)] mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss our latest insights and stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1 px-6 py-4 rounded-full text-[var(--pure-white)] placeholder-[var(--gray-text)]"
              />
              <button className="btn-primary px-8 py-4 rounded-full whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}