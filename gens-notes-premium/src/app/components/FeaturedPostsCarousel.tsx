import React from 'react';

const FeaturedPostsCarousel = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for featured post cards */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-pure-white">Placeholder Post Title {item}</h3>
              <p className="text-secondary text-sm mb-4">A short description of the featured post.</p>
              <button className="px-4 py-2 bg-gradient-to-r from-electric-purple to-hot-pink text-pure-white rounded-full text-sm font-semibold hover:shadow-md transition-all duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsCarousel;
