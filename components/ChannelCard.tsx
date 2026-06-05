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
      <div className="bg-dark-bg rounded-lg overflow-hidden hover:border-primary border border-gray-700 transition transform hover:scale-105 cursor-pointer h-full">
        {/* Image Container */}
        <div className="relative w-full h-40 bg-gray-800 flex items-center justify-center overflow-hidden">
          {channel.profile_picture_url ? (
            <Image
              src={channel.profile_picture_url}
              alt={channel.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-3xl">📱</span>
            </div>
          )}
          
          {/* Badges */}
          <div className="absolute top-2 right-2 flex gap-2">
            {isNew && (
              <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                NEW
              </div>
            )}
            {channel.is_nsfw && (
              <div className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                NSFW
              </div>
            )}
          </div>

          {channel.is_vip && (
            <div className="absolute top-2 left-2 bg-primary text-dark text-xs px-2 py-1 rounded font-bold">
              VIP
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-sm truncate mb-1 text-white group-hover:text-primary">
            {channel.name}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2 mb-3">
            {channel.description || 'No description'}
          </p>

          {/* Category and Stats */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <span className="text-primary font-semibold">{channel.type.toUpperCase()}</span>
            <span>{channel.subscribers_count.toLocaleString()} members</span>
          </div>

          {/* Join Button */}
          <button className="w-full bg-accent hover:bg-blue-400 text-dark font-bold py-2 px-3 rounded transition text-sm">
            🚀 Join
          </button>
        </div>
      </div>
    </Link>
  );
}
