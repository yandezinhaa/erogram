import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AgeGateModal from '@/components/AgeGateModal';

export const metadata: Metadata = {
  title: 'Erogram | Best NSFW Telegram Groups, Bots & AI Tools Directory',
  description: 'Your #1 hub for NSFW Telegram groups & bots, AI companions & tools, and 1.8M+ OnlyFans creators.',
  keywords: 'telegram, nsfw, porn, groups, bots, ai, directory',
  openGraph: {
    title: 'Erogram | Best NSFW Telegram Directory',
    description: 'Your #1 hub for NSFW Telegram groups & bots, AI companions & tools.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark text-white">
        <AgeGateModal />
        <Header />
        <main className="min-h-screen pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
