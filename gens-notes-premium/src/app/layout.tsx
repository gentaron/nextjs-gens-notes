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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-deep-black text-pure-white`}
        suppressHydrationWarning={true}
      >
        {/* Animated Particle Background Mesh */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-900 opacity-20 animate-gradient-pulse"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Floating Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-lg bg-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gradient flex flex-col">
              <span>Gens Notes</span>
              <span className="text-sm text-secondary">For Thoughts & Insights, just Gens Notes.</span>
            </Link>
            <div className="space-x-4">
              <Link href="/blog" className="text-pure-white hover:text-cyan-accent transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-pure-white hover:text-cyan-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-pure-white hover:text-cyan-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content Wrapper with Sidebar */}
        <div className="flex max-w-7xl mx-auto pt-20">
          <main className="relative z-10 flex-grow min-h-screen">
            {children}
          </main>
          <StickySidebar />
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-secondary">
          <p>&copy; {new Date().getFullYear()} Gens Notes. For Thoughts & Insights, just Gens Notes.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-pure-white hover:text-cyan-accent transition-colors">
              Facebook
            </a>
            <a href="#" className="text-pure-white hover:text-cyan-accent transition-colors">
              Twitter
            </a>
            <a href="#" className="text-pure-white hover:text-cyan-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
