'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary hover:text-green-400 transition">
          EROgram
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/groups" className="text-sm hover:text-primary transition">
            Groups
          </Link>
          <Link href="/bots" className="text-sm hover:text-primary transition">
            Bots
          </Link>
          <Link href="/ainsfw" className="text-sm hover:text-primary transition">
            🔞 AI NSFW
          </Link>
          <Link href="/onlyfanssearch" className="text-sm hover:text-primary transition">
            OFsearch
          </Link>
          <Link href="/articles" className="text-sm hover:text-primary transition">
            Articles
          </Link>
          <Link href="/add" className="text-sm hover:text-primary transition">
            Add
          </Link>
          <Link href="/login" className="text-sm hover:text-primary transition">
            Login
          </Link>
          <button className="text-sm">🇺🇸</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary hover:text-green-400 transition"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-800 py-4 px-4 space-y-3">
          <Link href="/groups" className="block text-sm hover:text-primary transition">
            Groups
          </Link>
          <Link href="/bots" className="block text-sm hover:text-primary transition">
            Bots
          </Link>
          <Link href="/ainsfw" className="block text-sm hover:text-primary transition">
            🔞 AI NSFW
          </Link>
          <Link href="/onlyfanssearch" className="block text-sm hover:text-primary transition">
            OFsearch
          </Link>
          <Link href="/articles" className="block text-sm hover:text-primary transition">
            Articles
          </Link>
          <Link href="/add" className="block text-sm hover:text-primary transition">
            Add
          </Link>
          <Link href="/login" className="block text-sm hover:text-primary transition">
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
