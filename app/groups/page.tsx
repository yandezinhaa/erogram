'use client';

import { useEffect, useState } from 'react';
import ChannelCard from '@/components/ChannelCard';
import { getChannels, type Channel } from '@/lib/supabase';

export default function GroupsPage() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        setLoading(true);
        const data = await getChannels(20, offset);
        setChannels((prev) => (offset === 0 ? data : [...prev, ...data]));
      } catch (error) {
        console.error('Error fetching channels:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, [offset]);

  return (
    <div className="min-h-screen bg-dark py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Telegram Groups</h1>

        {channels.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {channels.map((channel) => (
                <ChannelCard key={channel.id} channel={channel} />
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setOffset((prev) => prev + 20)}
                disabled={loading}
                className="bg-primary text-dark px-8 py-3 rounded font-bold hover:bg-green-400 transition disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No groups available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
