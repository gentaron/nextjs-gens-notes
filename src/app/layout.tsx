import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GN&apos;s Notes",
  description: "A collection of thoughts and insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen`}
        suppressHydrationWarning={true}
      >
        {/* ✨ Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 -right-4 w-96 h-96 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        {/* 🌟 Header with Enhanced Glassmorphism Effect */}
        <header className="sticky top-0 z-50 w-full p-4 backdrop-blur-xl bg-[var(--card-background)]/80 border-b border-[var(--border-color)] shadow-sm">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">GN</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[var(--foreground)] to-[var(--secondary)] bg-clip-text text-transparent">
                  GN&apos;s Notes
                </h1>
                <p className="text-xs text-[var(--secondary)]">Thoughts & Insights</p>
              </div>
            </Link>
            
            <a
              href="https://note.com/gensnotes"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-base">📓</span>
              <span>Visit Note Blog</span>
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </header>

        {/* 🌈 Main Content with Enhanced Container */}
        <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-[var(--card-background)]/70 backdrop-blur-md rounded-xl shadow-lg border border-[var(--border-color)] p-6 sm:p-8 min-h-[60vh]">
            {children}
          </div>
        </main>

        {/* 🌙 Footer with Gradient */}
        <footer className="relative w-full mt-12 p-6 bg-gradient-to-r from-[var(--background)] to-[var(--background)]/50 border-t border-[var(--border-color)]">
          <div className="max-w-5xl mx-auto text-center space-y-3">
            <div className="flex items-center justify-center space-x-4 text-[var(--secondary)]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for collaboration
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-red-500">❤️</span>
                Made with passion
              </span>
            </div>
            <p className="text-xs text-[var(--secondary)]">
              © {new Date().getFullYear()} GN&apos;s Notes — Crafting ideas into reality
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}