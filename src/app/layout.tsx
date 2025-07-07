import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import StickySidebar from "./components/StickySidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gens Notes",
  description: "For Thoughts & Insights, just Gens Notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[var(--deep-black)] text-[var(--pure-white)]`}
        suppressHydrationWarning={true}
      >
        {/* Animated Particle Background Mesh */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-purple)]/20 to-[var(--hot-pink)]/20 animate-gradient-pulse"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Floating Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-xl bg-[var(--deep-black)]/60 shadow-glass">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gradient flex flex-col">
              <span>Gens Notes</span>
              <span className="text-sm text-[var(--gray-text)]">For Thoughts & Insights, just Gens Notes.</span>
            </Link>
            <div className="space-x-4 hidden md:flex">
              <Link href="/blog" className="text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-colors text-lg font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-colors text-lg font-medium">
                About
              </Link>
              <Link href="/contact" className="text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-colors text-lg font-medium">
                Contact
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-[var(--pure-white)] focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content Wrapper with Sidebar */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 gap-8">
          <main className="relative z-10 flex-grow min-h-screen w-full lg:w-3/4">
            {children}
          </main>
          <StickySidebar />
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-[var(--gray-text)]">
          <p>&copy; {new Date().getFullYear()} Gens Notes. For Thoughts & Insights, just Gens Notes.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-colors">
              Facebook
            </a>
            <a href="#" className="text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-[var(--pure-white)] hover:text-[var(--cyan-accent)] transition-colors">
              LinkedIn
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
