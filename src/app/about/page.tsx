import React from 'react';

const AboutPage = () => {
  const timelineEvents = [
    {
      year: "2020",
      title: "Inception",
      description: "The idea for Gens Notes was conceived, driven by a passion for sharing knowledge.",
      icon: "💡"
    },
    {
      year: "2022",
      title: "Launch",
      description: "Gens Notes officially launched, bringing its first articles to the world.",
      icon: "🚀"
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Expanded content categories and reached a wider audience.",
      icon: "📈"
    },
    {
      year: "2025",
      title: "Premium Redesign",
      description: "Unveiled a modern, premium design for an enhanced user experience.",
      icon: "✨"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description: "We prioritize high-quality content that provides real value to our readers."
    },
    {
      icon: "🌟",
      title: "Innovation",
      description: "Constantly exploring new ideas and perspectives to inspire our audience."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building meaningful connections through shared knowledge and insights."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-gradient mb-6 heading-glow">
            About Gens Notes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-[var(--gray-text)] max-w-3xl mx-auto leading-relaxed">
            A premium digital space dedicated to sharing insightful articles, captivating stories, and thought-provoking ideas.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-card rounded-3xl p-12 mb-20 card-hover">
          <div className="text-center">
            <div className="text-6xl mb-8">🎯</div>
            <h2 className="text-4xl font-bold text-gradient mb-8 heading-glow">Our Mission</h2>
            <p className="text-xl text-[var(--pure-white)] leading-relaxed max-w-4xl mx-auto mb-8">
              Welcome to Gens Notes, where knowledge meets inspiration. Our mission is to provide high-quality content that inspires, educates, and entertains. We believe in the power of words to connect, inform, and spark meaningful conversations.
            </p>
            <p className="text-lg text-[var(--gray-text)] leading-relaxed max-w-3xl mx-auto">
              Founded on the principle of knowledge sharing, Gens Notes covers a wide range of topics, from technology and science to art and philosophy.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12 heading-glow">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 text-center card-hover pulse-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[var(--pure-white)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="glass-card rounded-3xl p-12 card-hover">
          <h2 className="text-4xl font-bold text-center text-gradient mb-16 heading-glow">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--electric-purple)] via-[var(--hot-pink)] to-[var(--cyan-accent)]"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative flex items-start pl-20"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] rounded-full border-4 border-[var(--deep-black)] shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="glass-card rounded-xl p-6 flex-1 card-hover">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{event.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--pure-white)]">
                          {event.year} - {event.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[var(--gray-text)] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass-card rounded-3xl p-12 card-hover">
            <h2 className="text-4xl font-bold text-gradient mb-6 heading-glow">
              Join Our Journey
            </h2>
            <p className="text-xl text-[var(--gray-text)] mb-8 max-w-2xl mx-auto">
              Be part of our growing community of readers and thinkers. Explore our latest articles and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="btn-primary px-8 py-4 rounded-full font-semibold"
              >
                Read Our Blog
              </a>
              <a
                href="/contact"
                className="px-8 py-4 glass-card rounded-full text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-all duration-300 font-semibold hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;