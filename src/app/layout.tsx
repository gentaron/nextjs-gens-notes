import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 min-h-screen`}
      >
        {/* ✨ Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        {/* 🌟 Header with Glassmorphism Effect */}
        <header className="relative w-full p-6 backdrop-blur-lg bg-white/70 border-b border-gray-200/50 shadow-lg">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">GN</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  GN&apos;s Notes
                </h1>
                <p className="text-sm text-gray-500">Thoughts & Insights</p>
              </div>
            </div>
            
            <a
              href="https://note.com/gensnotes"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="text-lg">📓</span>
              <span>Visit Note Blog</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </header>

        {/* 🌈 Main Content with Enhanced Container */}
        <main className="relative max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 min-h-[60vh]">
            {children}
          </div>
        </main>

        {/* 🌙 Footer with Gradient */}
        <footer className="relative w-full mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200/50">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for collaboration
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">❤️</span>
                Made with passion
              </span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GN&apos;s Notes — Crafting ideas into reality
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}