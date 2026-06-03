import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import * as cheerio from 'cheerio';

// Configuração do Supabase (use service_role key para bypass RLS se necessário)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

async function scrapeInitialData() {
  console.log('🚀 Iniciando scraper de dados iniciais...');

  const categories = [
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
  ];

  // 1. Inserir Categorias
  console.log('📂 Inserindo categorias...');
  for (const cat of categories) {
    const { error } = await supabase.from('categories').upsert(cat, { onConflict: 'slug' });
    if (error) console.error(`Erro ao inserir categoria ${cat.name}:`, error.message);
  }

  // 2. Mock Data para Canais (Para popular o site inicialmente)
  const mockChannels = [
    {
      telegram_id: 1001,
      name: 'PORNHUB PREMIUM🔞',
      description: 'The best amateur content from Pornhub.',
      type: 'channel',
      subscribers_count: 343600,
      language: 'en',
      is_nsfw: true,
      profile_picture_url: 'https://pub-5800916b33a845e4b67e2d5be553c1e3.r2.dev/groups/pornhub-premium.webp',
    },
    {
      telegram_id: 1002,
      name: 'Tight assholes 👌🏿',
      description: 'Anal content collections.',
      type: 'group',
      subscribers_count: 5000,
      language: 'en',
      is_nsfw: true,
      profile_picture_url: 'https://pub-5800916b33a845e4b67e2d5be553c1e3.r2.dev/groups/tight-assholes.jpg',
    },
    {
      telegram_id: 1003,
      name: 'Best of Tik Tok +18',
      description: 'Tiktok amateur leaks.',
      type: 'channel',
      subscribers_count: 29400,
      language: 'en',
      is_nsfw: true,
      profile_picture_url: 'https://pub-5800916b33a845e4b67e2d5be553c1e3.r2.dev/groups/best-of-tik-tok-18.jpg',
    },
    {
      telegram_id: 1004,
      name: 'Asian World - Uncensored 🔞',
      description: 'Best of Asian content.',
      type: 'channel',
      subscribers_count: 8700,
      language: 'en',
      is_nsfw: true,
      profile_picture_url: 'https://pub-5800916b33a845e4b67e2d5be553c1e3.r2.dev/groups/asian-world-uncensored.jpg',
    },
  ];

  console.log('📱 Inserindo canais iniciais...');
  for (const channel of mockChannels) {
    const { data, error } = await supabase.from('channels').upsert(channel, { onConflict: 'telegram_id' }).select();
    if (error) {
      console.error(`Erro ao inserir canal ${channel.name}:`, error.message);
    } else if (data && data[0]) {
      // Associar a uma categoria aleatória para teste
      const randomCat = categories[Math.floor(Math.random() * categories.length)];
      const { data: catData } = await supabase.from('categories').select('id').eq('slug', randomCat.slug).single();
      if (catData) {
        await supabase.from('channel_categories').upsert({
          channel_id: data[0].id,
          category_id: catData.id
        });
      }
    }
  }

  console.log('✅ Ingestão de dados concluída!');
}

scrapeInitialData();
