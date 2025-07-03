import React from 'react';
import Link from 'next/link';

const StickySidebar = () => {
  return (
    <aside className="hidden lg:block sticky top-20 h-[calc(100vh-80px)] w-64 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-y-auto">
      <h3 className="text-2xl font-bold text-gradient mb-6">Tools & Widgets</h3>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="#" className="block text-pure-white hover:text-cyan-accent transition-colors text-lg">
              Search
            </Link>
          </li>
          <li>
            <Link href="#" className="block text-pure-white hover:text-cyan-accent transition-colors text-lg">
              Categories
            </Link>
          </li>
          <li>
            <Link href="#" className="block text-pure-white hover:text-cyan-accent transition-colors text-lg">
              Tags
            </Link>
          </li>
          <li>
            <Link href="#" className="block text-pure-white hover:text-cyan-accent transition-colors text-lg">
              Archives
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-8 pt-8 border-t border-white/20">
        <h4 className="text-xl font-bold text-pure-white mb-4">Recent Comments</h4>
        <ul className="space-y-3 text-secondary text-sm">
          <li>&quot;Great article!&quot; - John Doe</li>
          <li>&quot;Very insightful.&quot; - Jane Smith</li>
        </ul>
      </div>
    </aside>
  );
};

export default StickySidebar;
