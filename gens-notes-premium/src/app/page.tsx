import Link from "next/link";
import FeaturedPostsCarousel from "./components/FeaturedPostsCarousel";

export default function Home() {
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

      <FeaturedPostsCarousel />

      {/* Blog Post Grid Placeholder */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            All Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for blog post cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-pure-white">Blog Post Title {item}</h3>
                <p className="text-secondary text-sm mb-4">A short description of the blog post.</p>
                <button className="px-4 py-2 bg-gradient-to-r from-electric-purple to-hot-pink text-pure-white rounded-full text-sm font-semibold hover:shadow-md transition-all duration-300">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
