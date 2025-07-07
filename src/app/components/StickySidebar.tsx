import React from 'react';
import Link from 'next/link';

const StickySidebar = () => {
  const sidebarItems = [
    { icon: '🔍', label: 'Search', href: '#' },
    { icon: '📂', label: 'Categories', href: '#' },
    { icon: '🏷️', label: 'Tags', href: '#' },
    { icon: '📅', label: 'Archives', href: '#' },
  ];

  const recentComments = [
    { text: "Absolutely brilliant insights!", author: "Alex Chen" },
    { text: "This changed my perspective completely.", author: "Sarah Johnson" },
    { text: "Looking forward to more content like this.", author: "Mike Rodriguez" },
  ];

  return (
    <aside className="hidden lg:block sticky top-24 h-[calc(100vh-120px)] w-80 space-y-6">
      {/* Tools & Navigation */}
      <div className="glass-card rounded-2xl p-6 card-hover">
        <h3 className="text-2xl font-bold text-gradient mb-6 heading-glow">
          Explore
        </h3>
        <nav>
          <ul className="space-y-4">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href} 
                  className="flex items-center p-3 rounded-xl hover:bg-[var(--glass-bg)] transition-all duration-300 group"
                >
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[var(--pure-white)] group-hover:text-[var(--cyan-accent)] transition-colors font-medium">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Recent Comments */}
      <div className="glass-card rounded-2xl p-6 card-hover">
        <h4 className="text-xl font-bold text-[var(--pure-white)] mb-6 flex items-center">
          <span className="text-2xl mr-3">💬</span>
          Recent Comments
        </h4>
        <ul className="space-y-4">
          {recentComments.map((comment, index) => (
            <li key={index} className="p-4 bg-[var(--glass-bg)] rounded-xl border border-[var(--dark-border)] hover:border-[var(--cyan-accent)]/30 transition-colors">
              <p className="text-[var(--gray-text)] text-sm mb-2 italic">
                "{comment.text}"
              </p>
              <p className="text-[var(--cyan-accent)] text-xs font-semibold">
                — {comment.author}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className="glass-card rounded-2xl p-6 card-hover">
        <h4 className="text-xl font-bold text-gradient mb-4 flex items-center">
          <span className="text-2xl mr-3">📧</span>
          Stay Connected
        </h4>
        <p className="text-[var(--gray-text)] text-sm mb-4">
          Get the latest articles delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="form-input w-full px-4 py-3 rounded-xl text-sm"
          />
          <button className="w-full btn-primary py-3 text-sm rounded-xl">
            Subscribe
          </button>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="glass-card rounded-2xl p-6 card-hover">
        <h4 className="text-xl font-bold text-[var(--pure-white)] mb-6 flex items-center">
          <span className="text-2xl mr-3">🔥</span>
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {['Technology', 'Design', 'Innovation', 'AI', 'Future', 'Insights'].map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[var(--glass-bg)] border border-[var(--dark-border)] rounded-full text-xs text-[var(--gray-text)] hover:text-[var(--cyan-accent)] hover:border-[var(--cyan-accent)]/30 transition-all cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default StickySidebar;