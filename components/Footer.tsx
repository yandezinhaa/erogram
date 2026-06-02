'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-primary font-bold mb-3">Browse</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/groups" className="hover:text-primary transition">
                  Telegram Groups
                </Link>
              </li>
              <li>
                <Link href="/bots" className="hover:text-primary transition">
                  Telegram Bots
                </Link>
              </li>
              <li>
                <Link href="/ainsfw" className="hover:text-primary transition">
                  AI NSFW Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles" className="hover:text-primary transition">
                  Articles & Guides
                </Link>
              </li>
              <li>
                <Link href="/add" className="hover:text-primary transition">
                  Get Listed
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="hover:text-primary transition">
                  Advertise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact & Support
                </Link>
              </li>
              <li>
                <a href="https://t.me/erogram" className="hover:text-primary transition" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Erogram. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-red-500">🔴</span> RTA ® - Restricted To Adults
          </p>
        </div>
      </div>
    </footer>
  );
}
