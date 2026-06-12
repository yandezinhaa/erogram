'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Channel } from '@/lib/supabase';

interface ChannelCardProps {
  channel: Channel;
  isNew?: boolean;
}

export default function ChannelCard({ channel, isNew = true }: ChannelCardProps) {
  return (
    <Link href={`/channel/${channel.id}`}>
      <div className="glass rounded-2xl sm:rounded-3xl overflow-hidden h-full flex flex-col backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 group hover:shadow-2xl hover:shadow-black/50">
        {/* Image Container */}
        <div className="relative w-full h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
          {channel.profile_picture_url ? (
            <Image
              src={channel.profile_picture_url}
              alt={channel.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-cyan-600/20 flex items-center justify-center">
              <span className="text-5xl opacity-50">📱</span>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex gap-2 z-10">
            {isNew && (
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg shadow-blue-500/50">
                NEW
              </div>
            )}
            {channel.is_nsfw && (
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-2.5 py-1 rounded font-bold shadow-lg shadow-red-600/50">
                NSFW
              </div>
            )}
          </div>

          {channel.is_vip && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg shadow-pink-600/50 z-10">
              ⭐ VIP
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-sm leading-tight line-clamp-2 text-white drop-shadow-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-2">
            {channel.name}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2 mb-auto group-hover:text-gray-300 transition-colors duration-300">
            {channel.description || 'Sem descrição'}
          </p>

          {/* Category and Stats */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3 mt-3">
            <span className="text-pink-400 font-bold uppercase tracking-wider">{channel.type}</span>
            <span className="text-cyan-400 font-semibold">{(channel.subscribers_count / 1000).toFixed(1)}k</span>
          </div>

          {/* Join Button */}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold py-2.5 px-3 rounded-lg transition-all duration-300 text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
            🚀 Join
          </button>
        </div>
      </div>
    </Link>
  );
}
