import Link from 'next/link';
import ChannelCard from '@/components/ChannelCard';
import FAQ from '@/components/FAQ';
import { getChannels } from '@/lib/supabase';

export const revalidate = 3600;

export default async function HomePage() {
  let channels: any[] = [];
  try {
    channels = await getChannels(8);
  } catch (error) {
    console.error('Error fetching channels:', error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 text-center">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            <span className="text-white">The #1 NSFW & Porn</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 bg-clip-text text-transparent">Telegram and AI</span>
            <br />
            <span className="text-white">Directory</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your #1 hub for NSFW Telegram groups & bots, AI companions & tools, and 1.8M+ OnlyFans creators. Explore and save your favorites all in one place.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 flex-wrap">
            <Link
              href="/groups"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black px-8 py-3.5 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 active:scale-95"
            >
              📱 Explore Groups
            </Link>
            <Link
              href="/bots"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black px-8 py-3.5 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 active:scale-95"
            >
              🤖 Explore Bots
            </Link>
            <Link
              href="/ainsfw"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black px-8 py-3.5 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 active:scale-95"
            >
              🔞 Explore AI NSFW
            </Link>
            <Link
              href="/onlyfanssearch"
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-3.5 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-pink-600/40 hover:shadow-pink-600/60 hover:scale-105 active:scale-95"
            >
              ONLYFANS SEARCH +1.8M
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 backdrop-blur-xl">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">+5K</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-bold mt-2">Groups</div>
            </div>
            <div className="glass rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400">0</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-bold mt-2">Visiting</div>
            </div>
            <div className="glass rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 backdrop-blur-xl">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">4.9M</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-bold mt-2">Views</div>
            </div>
            <div className="glass rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400">+1.8M</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-bold mt-2">OnlyFans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh New Additions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="text-white">Fresh </span>
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">New Additions</span>
          </h2>
          <Link href="/groups" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-bold whitespace-nowrap">
            Browse All Groups →
          </Link>
        </div>

        <p className="text-gray-400 text-sm mb-8 font-medium">The latest groups added to Erogram — updated daily</p>

        {channels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {channels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} isNew={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No channels available yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Curated Top Lists Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-12">Curated Top Lists</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
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
              className="glass rounded-2xl p-4 sm:p-6 hover:border-pink-500/50 border border-white/10 transition-all duration-300 text-center group backdrop-blur-xl hover:shadow-2xl hover:shadow-pink-600/20"
            >
              <h3 className="font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                Best {category.name} Groups
              </h3>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Top 10 Collections</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/best-telegram-groups" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-bold">
            View all categories →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-transparent via-pink-600/5 to-transparent py-16 sm:py-20">
        <FAQ />
      </section>
    </div>
  );
}
