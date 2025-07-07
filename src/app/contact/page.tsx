import React from 'react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Drop us a line anytime",
      contact: "hello@gensnotes.com",
      action: "Send Email"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: "📱",
      title: "Social Media",
      description: "Follow us for updates",
      contact: "@gensnotes",
      action: "Follow Us"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-gradient mb-6 heading-glow">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-[var(--gray-text)] max-w-2xl mx-auto">
            Have a question, suggestion, or want to collaborate? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8 card-hover">
            <h2 className="text-3xl font-bold text-gradient mb-8 heading-glow">
              Send us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[var(--pure-white)] text-sm font-semibold mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input w-full px-4 py-4 rounded-xl"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[var(--pure-white)] text-sm font-semibold mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input w-full px-4 py-4 rounded-xl"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[var(--pure-white)] text-sm font-semibold mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input w-full px-4 py-4 rounded-xl"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[var(--pure-white)] text-sm font-semibold mb-3">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="form-input w-full px-4 py-4 rounded-xl"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="feedback">Feedback</option>
                  <option value="support">Support</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[var(--pure-white)] text-sm font-semibold mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="form-input w-full px-4 py-4 rounded-xl resize-none"
                  placeholder="Tell us about your project, question, or how we can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-4 rounded-xl font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 card-hover pulse-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{method.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--pure-white)] mb-2">
                        {method.title}
                      </h3>
                      <p className="text-[var(--gray-text)] mb-2">
                        {method.description}
                      </p>
                      <p className="text-[var(--cyan-accent)] font-semibold mb-3">
                        {method.contact}
                      </p>
                      <button className="text-sm px-4 py-2 glass-card rounded-lg hover:text-[var(--cyan-accent)] transition-colors">
                        {method.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="glass-card rounded-2xl p-6 card-hover">
              <h3 className="text-2xl font-bold text-gradient mb-6 heading-glow">
                Quick Answers
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: "How often do you publish new content?",
                    answer: "We publish new articles 2-3 times per week."
                  },
                  {
                    question: "Can I contribute to Gens Notes?",
                    answer: "Yes! We welcome guest contributors. Contact us for guidelines."
                  },
                  {
                    question: "Do you offer content partnerships?",
                    answer: "Absolutely! We're open to collaboration opportunities."
                  }
                ].map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="cursor-pointer text-[var(--pure-white)] font-semibold py-2 hover:text-[var(--cyan-accent)] transition-colors">
                      {faq.question}
                    </summary>
                    <p className="text-[var(--gray-text)] text-sm mt-2 pl-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-card rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[var(--pure-white)] mb-2">
                Quick Response
              </h3>
              <p className="text-[var(--gray-text)] text-sm">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;