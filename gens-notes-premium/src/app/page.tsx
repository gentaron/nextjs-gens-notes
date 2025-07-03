import Link from "next/link";
import FeaturedPostsCarousel from "./components/FeaturedPostsCarousel";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const FEATURED_POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]|order(publishedAt desc)[0...3]{ _id, title, slug, publishedAt }`;

export default async function Home() {
  const featuredPosts = await client.fetch<SanityDocument[]>(FEATURED_POSTS_QUERY);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-pink-800 opacity-70 animate-gradient-move"></div>

        <div className="relative z-10 text-center p-8">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4 text-gradient animate-fade-in-up">
            Gens Notes
          </h1>
          <p className="text-xl md:text-2xl text-pure-white mb-8 animate-fade-in-up animation-delay-200">
            Your source for insightful articles and captivating stories.
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-gradient-to-r from-electric-purple to-hot-pink text-pure-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            Explore Blog
          </Link>
        </div>
      </section>

      <FeaturedPostsCarousel posts={featuredPosts} />
    </>
  );
}