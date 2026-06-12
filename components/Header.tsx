'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass border-b border-white/10 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-white hover:to-cyan-300 transition-all duration-300">
          Erogram
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/groups" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group">
            Groups
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/bots" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group">
            Bots
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/ainsfw" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group">
            🔞 AI NSFW
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/onlyfanssearch" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group">
            OFsearch
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/articles" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group">
            Articles
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/add"
            className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-pink-600/50 hover:shadow-pink-600/70 hover:scale-105 active:scale-95"
          >
            + Add
          </Link>
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
            Login
          </Link>
          <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
            🇺🇸 ▾
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-pink-400 hover:text-pink-300 transition-colors duration-300 text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10 backdrop-blur-xl py-4 px-4 space-y-3 animate-slideInUp">
          <Link href="/groups" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2">
            Groups
          </Link>
          <Link href="/bots" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2">
            Bots
          </Link>
          <Link href="/ainsfw" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2">
            🔞 AI NSFW
          </Link>
          <Link href="/onlyfanssearch" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2">
            OFsearch
          </Link>
          <Link href="/articles" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2">
            Articles
          </Link>
          <div className="pt-3 border-t border-white/10 space-y-2">
            <Link href="/add" className="block text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors duration-300 py-2">
              + Add
            </Link>
            <Link href="/login" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
