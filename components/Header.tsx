'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        backgroundColor: '#0d0d0f',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontSize: '18px',
          fontWeight: 700,
          color: '#f0f0f5',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            background: 'linear-gradient(135deg, #e8356d 0%, #0ea5e9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          E
        </span>
        GroupsPorn
      </Link>

      {/* Desktop Navigation */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginLeft: 'auto',
          flexShrink: 0,
        }}
      >
        {/* Groups Link */}
        <Link
          href="/groups"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: '#9898aa',
            textDecoration: 'none',
            padding: '6px 10px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            transition: 'color 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f5')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#9898aa')}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="13"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Groups
        </Link>

        {/* Bots Link */}
        <Link
          href="/bots"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: '#9898aa',
            textDecoration: 'none',
            padding: '6px 10px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            transition: 'color 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f5')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#9898aa')}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="13"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Bots
        </Link>

        {/* AI NSFW Link */}
        <Link
          href="/ainsfw"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: '#9898aa',
            textDecoration: 'none',
            padding: '6px 10px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            transition: 'color 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f5')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#9898aa')}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="13"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </svg>
          🔞 AI NSFW
        </Link>

        {/* OFsearch Button */}
        <Link
          href="/onlyfanssearch"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: '#ffffff',
            color: '#0d0d0f',
            padding: '4px 12px',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '13px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </svg>
          OFsearch
        </Link>

        {/* Articles Link */}
        <Link
          href="/#articles"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: '#9898aa',
            textDecoration: 'none',
            padding: '6px 10px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            transition: 'color 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f5')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#9898aa')}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="13"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
          </svg>
          Articles
        </Link>

        {/* Add Button */}
        <Link
          href="/add"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: '#e8356d',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: '6px',
            fontWeight: 700,
            fontSize: '13px',
            textDecoration: 'none',
          }}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Add
        </Link>

        {/* Login Button */}
        <Link
          href="/login"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            color: '#9898aa',
            fontSize: '13px',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f5')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#9898aa')}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m10 17 5-5-5-5"></path>
            <path d="M15 12H3"></path>
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          </svg>
          Login
        </Link>

        {/* Language Selector */}
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '20px',
            padding: '4px',
            color: '#9898aa',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f5')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#9898aa')}
        >
          🇺🇸 <span style={{ fontSize: '11px' }}>▾</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: '#f0f0f5',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="22"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}
