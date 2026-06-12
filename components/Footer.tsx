import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-2xl font-black bg-gradient-to-r from-white via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Erogram
              </h3>
            </div>
            <p className="text-[#666] text-sm leading-relaxed mb-4">
              The #1 NSFW & Porn Telegram and AI Directory. Discover the best communities and bots.
            </p>
            <a
              href="https://t.me/erogram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0ea5e9] text-sm font-medium hover:opacity-80 transition-opacity"
            >
              <svg
                fill="currentColor"
                height="16"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.02 9.532c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.21 14.238l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.606.348z" />
              </svg>
              Telegram
            </a>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Directory
            </h4>
            <ul className="space-y-2 text-[#999] text-sm">
              <li>
                <Link href="/groups" className="hover:text-white transition-colors">
                  Telegram Groups
                </Link>
              </li>
              <li>
                <Link href="/bots" className="hover:text-white transition-colors">
                  Telegram Bots
                </Link>
              </li>
              <li>
                <Link href="/ainsfw" className="hover:text-white transition-colors">
                  AI NSFW Tools
                </Link>
              </li>
              <li>
                <Link href="/onlyfanssearch" className="hover:text-white transition-colors">
                  OnlyFans Search
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white transition-colors">
                  Articles & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Advertise */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Advertise
            </h4>
            <ul className="space-y-2 text-[#999] text-sm">
              <li>
                <Link href="/add" className="hover:text-white transition-colors">
                  Get Listed
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="hover:text-white transition-colors">
                  Advertise
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-[#999] text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-xs">
            © Erogram 2026. All rights reserved. For adults 18+ only.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.rtalabel.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 border border-[#444] text-[#444] text-[10px] font-bold rounded hover:border-[#666] hover:text-[#666] transition-colors"
            >
              RTA ®
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
