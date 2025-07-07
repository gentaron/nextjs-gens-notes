import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-[var(--dark-card)] backdrop-blur-md rounded-xl p-8 shadow-glass border border-[var(--dark-border)]">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gradient">
          About Gens Notes
        </h1>
        <p className="text-[var(--pure-white)] text-lg mb-8 leading-relaxed">
          Welcome to Gens Notes, a digital space dedicated to sharing insightful articles, captivating stories, and thought-provoking ideas. Our mission is to provide high-quality content that inspires, educates, and entertains.
        </p>
        <p className="text-[var(--pure-white)] text-lg mb-8 leading-relaxed">
          Founded on the principle of knowledge sharing, Gens Notes covers a wide range of topics, from technology and science to art and philosophy. We believe in the power of words to connect, inform, and spark meaningful conversations.
        </p>

        {/* Interactive Timeline Placeholder */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient">
            Our Journey
          </h2>
          <div className="relative border-l-2 border-[var(--cyan-accent)] pl-8">
            <div className="mb-8 relative">
              <div className="absolute w-4 h-4 bg-[var(--cyan-accent)] rounded-full -left-2 top-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-semibold text-[var(--pure-white)] mb-2">2020 - Inception</h3>
              <p className="text-[var(--gray-text)]">The idea for Gens Notes was conceived, driven by a passion for sharing knowledge.</p>
            </div>
            <div className="mb-8 relative">
              <div className="absolute w-4 h-4 bg-[var(--cyan-accent)] rounded-full -left-2 top-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-semibold text-[var(--pure-white)] mb-2">2022 - Launch</h3>
              <p className="text-[var(--gray-text)]">Gens Notes officially launched, bringing its first articles to the world.</p>
            </div>
            <div className="mb-8 relative">
              <div className="absolute w-4 h-4 bg-[var(--cyan-accent)] rounded-full -left-2 top-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-semibold text-[var(--pure-white)] mb-2">2024 - Expansion</h3>
              <p className="text-[var(--gray-text)]">Expanded content categories and reached a wider audience.</p>
            </div>
            <div className="mb-8 relative">
              <div className="absolute w-4 h-4 bg-[var(--cyan-accent)] rounded-full -left-2 top-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-semibold text-[var(--pure-white)] mb-2">2025 - Premium Redesign</h3>
              <p className="text-[var(--gray-text)]">Unveiled a modern, premium design for an enhanced user experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); // Added a comment to trigger re-processing
};

export default AboutPage;