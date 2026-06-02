import Link from 'next/link';
import ChannelCard from '@/components/ChannelCard';
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
      <section className="bg-gradient-to-b from-secondary to-dark py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          The #1 NSFW & Porn Telegram and AI Directory
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover NSFW & Porn Telegram groups, bots & AI. Your #1 hub for NSFW Telegram groups & bots, AI companions & tools, and 1.8M+ OnlyFans creators.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <Link
            href="/groups"
            className="bg-primary text-dark px-8 py-3 rounded font-bold hover:bg-green-400 transition"
          >
            Explore Groups
          </Link>
          <Link
            href="/bots"
            className="bg-primary text-dark px-8 py-3 rounded font-bold hover:bg-green-400 transition"
          >
            Explore Bots
          </Link>
          <Link
            href="/ainsfw"
            className="bg-primary text-dark px-8 py-3 rounded font-bold hover:bg-green-400 transition"
          >
            🔞 Explore AI NSFW
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-sm md:text-base">
          <div>
            <div className="text-2xl font-bold text-primary">+5K</div>
            <div className="text-gray-400">Groups</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">299</div>
            <div className="text-gray-400">Visiting Now</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">+1.8M</div>
            <div className="text-gray-400">OnlyFans Creators</div>
          </div>
        </div>
      </section>

      {/* Fresh New Additions Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Fresh New Additions</h2>
          <Link href="/groups" className="text-primary hover:text-green-400 transition text-sm">
            Browse All Groups →
          </Link>
        </div>

        {channels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
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
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Curated Top Lists</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              href={`/category/${category.slug}`}
              className="bg-secondary border border-gray-700 rounded-lg p-4 hover:border-primary transition text-center"
            >
              <h3 className="font-bold text-primary mb-1">Best {category.name} Groups</h3>
              <p className="text-xs text-gray-400">Top 10 Collections</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/categories" className="text-primary hover:text-green-400 transition">
            View all categories →
          </Link>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Articles</h2>
          <Link href="/articles" className="text-primary hover:text-green-400 transition text-sm">
            View All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'AI Girlfriend & Chatbots VS Dating Apps',
              date: 'May 13, 2026',
              excerpt: 'AI girlfriend chat has quietly gone mainstream in 2026...',
            },
            {
              title: 'Why Men Are Creating AI Girlfriends Instead of Dating',
              date: 'May 11, 2026',
              excerpt: 'Explore the growing trend of AI girlfriends and virtual relationships...',
            },
            {
              title: "A Deep Dive Into Telegram's 'Undress AI' Bots: How They Work",
              date: 'Feb 11, 2026',
              excerpt: 'Go beyond the surface of Undress AI bots...',
            },
            {
              title: "The Best of the Best: A Guide to 'Big Ass' NSFW Groups on Telegram",
              date: 'Feb 6, 2026',
              excerpt: 'Your ultimate guide to the top-rated Big Ass NSFW groups...',
            },
          ].map((article, idx) => (
            <article
              key={idx}
              className="bg-secondary border border-gray-700 rounded-lg p-6 hover:border-primary transition"
            >
              <h3 className="text-lg font-bold text-primary mb-2">{article.title}</h3>
              <p className="text-sm text-gray-400 mb-3">By erogram • {article.date}</p>
              <p className="text-gray-300 text-sm">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
