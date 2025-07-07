import React from 'react';

const ContactPage = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto bg-[var(--dark-card)] backdrop-blur-md rounded-xl p-8 shadow-glass border border-[var(--dark-border)]">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gradient">
          Contact Us
        </h1>
        <p className="text-[var(--pure-white)] text-lg mb-8 text-center">
          Have a question or want to collaborate? Send us a message!
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-[var(--pure-white)] text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-[var(--pure-white)] leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--cyan-accent)] bg-[var(--dark-card)] border-[var(--dark-border)]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[var(--pure-white)] text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-[var(--pure-white)] leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--cyan-accent)] bg-[var(--dark-card)] border-[var(--dark-border)]"
              placeholder="your@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[var(--pure-white)] text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-[var(--pure-white)] leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--cyan-accent)] bg-[var(--dark-card)] border-[var(--dark-border)]"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] text-[var(--pure-white)] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
