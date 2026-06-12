import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Somente cria o cliente se as variáveis estiverem presentes
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (null as any);

export type Channel = {
  id: string;
  telegram_id: number;
  name: string;
  description: string | null;
  invite_link: string | null;
  type: 'channel' | 'group' | 'bot';
  subscribers_count: number;
  language: string;
  is_nsfw: boolean;
  profile_picture_url: string | null;
  created_at: string;
  updated_at: string;
  last_scraped_at: string | null;
  is_vip: boolean;
  vip_expires_at: string | null;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
  updated_at: string;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export async function getChannels(limit = 20, offset = 0) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('channels')
    .select('*')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) throw error;
  return data as Channel[];
}

export async function getChannelsByCategory(categorySlug: string, limit = 20, offset = 0) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('channels')
    .select('*, channel_categories(categories(slug))')
    .eq('channel_categories.categories.slug', categorySlug)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) throw error;
  return data as Channel[];
}

export async function getCategories() {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) throw error;
  return data as Category[];
}

export async function getTags() {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name', { ascending: true });

  if (error) throw error;
  return data as Tag[];
}

export async function searchChannels(query: string, limit = 20) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('channels')
    .select('*')
    .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
    .order('subscribers_count', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as Channel[];
}
