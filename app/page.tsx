import Link from 'next/link';
import ChannelCard from '@/components/ChannelCard';
import FAQ from '@/components/FAQ';
import { getChannels } from '@/lib/supabase';

export const revalidate = 3600; // ISR: revalidate every hour

export default async function HomePage() {
  let channels = [];
  try {
    channels = await getChannels(8);
  } catch (error) {
    console.error('Error fetching channels:', error);
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-bg to-dark py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          The #1 NSFW & Porn Telegram and AI Directory
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-white">Discover NSFW & Porn Telegram groups,</span>
          <br />
          <span className="text-primary">bots & AI</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Your #1 hub for NSFW Telegram groups & bots, AI companions & tools, and 1.8M+ OnlyFans creators. Explore and save your favorites all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 flex-wrap">
          <Link
            href="/groups"
            className="bg-accent hover:bg-blue-400 text-dark px-8 py-3 rounded font-bold transition inline-flex items-center justify-center gap-2"
          >
            📱 Explore Groups
          </Link>
          <Link
            href="/bots"
            className="bg-accent hover:bg-blue-400 text-dark px-8 py-3 rounded font-bold transition inline-flex items-center justify-center gap-2"
          >
            🤖 Explore Bots
          </Link>
          <Link
            href="/ainsfw"
            className="bg-accent hover:bg-blue-400 text-dark px-8 py-3 rounded font-bold transition inline-flex items-center justify-center gap-2"
          >
            🔞 Explore AI NSFW
          </Link>
          <Link
            href="/onlyfanssearch"
            className="bg-primary hover:bg-pink-600 text-white px-8 py-3 rounded font-bold transition inline-flex items-center justify-center gap-2"
          >
            ONLYFANS SEARCH +1.8M creators
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-dark-bg border border-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">+5K</div>
            <div className="text-gray-400 text-sm">GROUPS</div>
          </div>
          <div className="bg-dark-bg border border-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-accent">0</div>
            <div className="text-gray-400 text-sm">VISITING NOW</div>
          </div>
          <div className="bg-dark-bg border border-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">4.9M</div>
            <div className="text-gray-400 text-sm">VIEWS</div>
          </div>
          <div className="bg-dark-bg border border-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-accent">+1.8M</div>
            <div className="text-gray-400 text-sm">ONLYFANS CREATORS</div>
          </div>
        </div>
      </section>

      {/* Fresh New Additions Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Fresh <span className="text-primary">New Additions</span>
          </h2>
          <Link href="/groups" className="text-accent hover:text-blue-300 transition text-sm">
            Browse All Groups →
          </Link>
        </div>

        <p className="text-gray-400 text-sm mb-6">The latest groups added to Erogram — updated daily</p>

        {channels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} isNew={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No channels available yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Curated Top Lists Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Curated Top Lists</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {[
            { name: 'Amateur', slug: 'amateur' },
            { name: 'Anime', slug: 'anime' },
            { name: 'OnlyFans', slug: 'onlyfans' },
            { name: 'Asian', slug: 'asian' },
            { name: 'Anal', slug: 'anal' },
            { name: 'Roleplay', slug: 'roleplay' },
            { name: 'Fetish', slug: 'fetish' },
            { name: 'Lesbian', slug: 'lesbian' },
            { name: 'MILF', slug: 'milf' },
            { name: 'BDSM', slug: 'bdsm' },
            { name: 'Cosplay', slug: 'cosplay' },
          ].map((category) => (
            <Link
              key={category.slug}
              href={`/best-telegram-groups/${category.slug}`}
              className="bg-dark-bg border border-gray-700 rounded-lg p-4 hover:border-primary transition text-center"
            >
              <h3 className="font-bold text-white mb-1">Best {category.name} Groups</h3>
              <p className="text-xs text-gray-400">Top 10 Collections</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/best-telegram-groups" className="text-accent hover:text-blue-300 transition">
            View all categories →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-dark-bg py-12">
        <FAQ />
      </section>
    </div>
  );
}
