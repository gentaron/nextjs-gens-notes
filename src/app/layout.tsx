import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import StickySidebar from "./components/StickySidebar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gens Notes - Premium Blog Experience",
  description: "For Thoughts & Insights, just Gens Notes. A premium digital space for captivating stories and thought-provoking ideas.",
  keywords: ["blog", "articles", "insights", "thoughts", "premium", "modern"],
  authors: [{ name: "Gens Notes" }],
  openGraph: {
    title: "Gens Notes - Premium Blog Experience",
    description: "For Thoughts & Insights, just Gens Notes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[var(--deep-black)] text-[var(--pure-white)] overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-purple)]/10 via-[var(--deep-black)] to-[var(--hot-pink)]/10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--electric-purple)]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--hot-pink)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Enhanced Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-2xl px-6 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="group flex flex-col">
                  <span className="text-2xl font-bold text-gradient heading-glow">
                    Gens Notes
                  </span>
                  <span className="text-xs text-[var(--gray-text)] group-hover:text-[var(--cyan-accent)] transition-colors">
                    For Thoughts & Insights
                  </span>
                </Link>
                
                <div className="hidden md:flex space-x-8">
                  {[
                    { href: "/blog", label: "Blog" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-all duration-300 text-lg font-medium group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--electric-purple)] to-[var(--hot-pink)] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ))}
                </div>

                {/* Enhanced Mobile Menu */}
                <div className="md:hidden">
                  <button className="text-[var(--pure-white)] hover:text-[var(--cyan-accent)] focus:outline-none transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 gap-8">
          <main className="relative z-10 flex-grow min-h-screen w-full lg:w-3/4">
            {children}
          </main>
          <StickySidebar />
        </div>

        {/* Enhanced Footer */}
        <footer className="relative z-10 mt-20">
          <div className="glass-card mx-4 rounded-t-3xl">
            <div className="max-w-7xl mx-auto py-12 px-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gradient mb-4">Gens Notes</h3>
                <p className="text-[var(--gray-text)] mb-8 max-w-2xl mx-auto">
                  For Thoughts & Insights, just Gens Notes. Your premium destination for captivating stories and thought-provoking ideas.
                </p>
                
                <div className="flex justify-center space-x-6 mb-8">
                  {[
                    { name: "Facebook", icon: "📘" },
                    { name: "Twitter", icon: "🐦" },
                    { name: "LinkedIn", icon: "💼" },
                    { name: "Instagram", icon: "📸" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl hover:scale-110 transition-all duration-300 hover:neon-glow"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                
                <div className="border-t border-[var(--dark-border)] pt-8">
                  <p className="text-[var(--gray-text)] text-sm">
                    &copy; {new Date().getFullYear()} Gens Notes. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}