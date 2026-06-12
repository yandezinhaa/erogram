'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0d0d0d]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-xl font-bold">
            <span className="text-white">ERO</span>
            <span className="text-red-500">gram</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {/* Groups */}
          <Link 
            href="/groups" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-[#4ab3f4] bg-[#0088cc]/[0.10] border border-[#0088cc]/25 hover:bg-[#0088cc]/[0.18] hover:text-[#6ec6f7] transition-all whitespace-nowrap"
          >
            <svg className="shrink-0 opacity-80" fill="currentColor" height="13" viewBox="0 0 24 24" width="13">
              <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
            </svg>
            Groups
          </Link>

          {/* Bots */}
          <Link 
            href="/bots" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-[#4ab3f4] bg-[#0088cc]/[0.10] border border-[#0088cc]/25 hover:bg-[#0088cc]/[0.18] hover:text-[#6ec6f7] transition-all whitespace-nowrap"
          >
            <svg className="shrink-0 opacity-80" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13">
              <rect height="10" rx="2" width="18" x="3" y="11"></rect>
              <circle cx="9" cy="16" r="1"></circle>
              <circle cx="15" cy="16" r="1"></circle>
              <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
            </svg>
            Bots
          </Link>

          {/* AI NSFW */}
          <Link 
            href="/ainsfw" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-[#4ab3f4] bg-[#0088cc]/[0.10] border border-[#0088cc]/25 hover:bg-[#0088cc]/[0.18] hover:text-[#6ec6f7] transition-all whitespace-nowrap"
          >
            <span className="shrink-0 opacity-80 text-[13px]">🔞</span>
            AI NSFW
          </Link>

          {/* OFsearch */}
          <Link 
            href="/onlyfanssearch" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold bg-white text-black border border-white hover:bg-white/90 transition-all whitespace-nowrap"
          >
            <svg className="shrink-0 opacity-80" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            OFsearch
          </Link>

          <div className="w-px h-4 bg-white/10 mx-1"></div>

          {/* Articles */}
          <Link 
            href="/articles" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
          >
            <svg className="shrink-0 opacity-60" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="13">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" x2="8" y1="13" y2="13"></line>
              <line x1="16" x2="8" y1="17" y2="17"></line>
              <line x1="10" x2="8" y1="9" y2="9"></line>
            </svg>
            Articles
          </Link>

          {/* Add */}
          <Link 
            href="/add" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-bold bg-[#b31b1b] text-white border border-[#b31b1b]/20 hover:bg-[#b31b1b]/90 transition-all whitespace-nowrap"
          >
            <svg className="shrink-0" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="13">
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
            Add
          </Link>

          {/* Login */}
          <Link 
            href="/login" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-[#4ab3f4] bg-[#0088cc]/[0.10] border border-[#0088cc]/25 hover:bg-[#0088cc]/[0.18] hover:text-[#6ec6f7] transition-all whitespace-nowrap"
          >
            Login
          </Link>

          {/* Language Selector */}
          <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[15px] hover:bg-white/5 transition-colors">
            🇺🇸
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
        >
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d0d0d] border-b border-white/[0.06] p-4 flex flex-col gap-3">
          <Link href="/groups" className="text-white py-2 border-b border-white/5">Groups</Link>
          <Link href="/bots" className="text-white py-2 border-b border-white/5">Bots</Link>
          <Link href="/ainsfw" className="text-white py-2 border-b border-white/5">AI NSFW</Link>
          <Link href="/onlyfanssearch" className="text-white py-2 border-b border-white/5">OFsearch</Link>
          <Link href="/articles" className="text-white py-2 border-b border-white/5">Articles</Link>
          <Link href="/add" className="text-red-500 py-2 font-bold">Add</Link>
          <Link href="/login" className="text-blue-400 py-2">Login</Link>
        </div>
      )}
    </nav>
  );
}
