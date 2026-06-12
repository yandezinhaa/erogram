import Link from 'next/link';

export const revalidate = 3600;

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#b31b1b]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0088cc]/[0.05] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Tagline */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[13px] font-bold tracking-tight text-white/80 uppercase">
              The #1 NSFW & Porn Telegram and AI Directory
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            Discover NSFW & Porn <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b31b1b] to-[#ff3366]">
              Telegram groups, bots & AI
            </span>
          </h1>
          
          <p className="text-[#999] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            Your #1 hub for NSFW Telegram groups & bots, AI companions & tools, and 1.8M+ OnlyFans creators. Explore and save your favorites all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-8 py-4 bg-[#111] border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2 group">
                <span className="text-blue-400 group-hover:scale-110 transition-transform">📱</span>
                Explore Groups
              </button>
              <button className="px-8 py-4 bg-[#111] border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2 group">
                <span className="text-blue-400 group-hover:scale-110 transition-transform">🤖</span>
                Explore Bots
              </button>
              <button className="px-8 py-4 bg-[#111] border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2 group">
                <span className="text-pink-500 group-hover:scale-110 transition-transform">🔞</span>
                Explore AI NSFW
              </button>
            </div>
            
            <button className="w-full max-w-[600px] px-8 py-5 bg-[#b31b1b] hover:bg-[#b31b1b]/90 text-white font-black text-xl rounded-2xl transition-all shadow-[0_0_40px_rgba(179,27,27,0.3)] hover:shadow-[0_0_60px_rgba(179,27,27,0.4)] flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              ONLYFANS SEARCH +1.8M creators
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto pt-10 border-t border-white/5">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tighter">+5K</div>
            <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-white/30">Groups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-[#22c55e] mb-1 tracking-tighter">326</div>
            <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-white/30">Visiting Now</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tighter">9,101,037</div>
            <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-white/30">Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tighter">+1.8M</div>
            <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-white/30">OnlyFans Creators</div>
          </div>
        </div>
      </div>
    </main>
  );
}
