# Erogram

🚀 Mobile-first application built with Next.js 14+ and optimized for performance and SEO.

## ✨ Features

- ✨ Next.js 14+ with App Router
- 📱 Mobile-first responsive design
- 🔍 SEO optimized
- ⚡ High performance (Core Web Vitals)
- 🎨 Modern UI/UX
- 🔐 Supabase authentication
- 📊 Real-time database
- 🔄 Server & Client components
- 📦 TypeScript support
- 🌙 Dark mode support

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git

## 🚀 Getting Started

### 1. Installation

```bash
git clone https://github.com/yandezinhaa/erogram.git
cd erogram
npm install
```

### 2. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
erogram/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # Primitive components
│   └── shared/            # Shared components
├── lib/                    # Utilities & integrations
│   ├── supabase/          # Supabase config
│   └── utils/             # Helper functions
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript definitions
├── public/                 # Static assets
├── docs/                   # Technical documentation
└── README.md              # This file
```

## 📚 Documentation

Check the `docs/` folder:

- [Setup Guide](./docs/SETUP.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Performance](./docs/PERFORMANCE.md)
- [SEO](./docs/SEO.md)
- [API](./docs/API.md)
- [Deployment](./docs/DEPLOYMENT.md)

## 🛠️ Available Scripts

```bash
npm run dev      # Development
npm run build    # Build
npm run start    # Production
npm run lint     # Linting
npm run format   # Format code
npm run test     # Testing
```

## 🎨 Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: CSS Modules / Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel

## 📱 Mobile Optimization

- Responsive design
- Fast loading times
- Optimized images (WebP, AVIF)
- Touch-friendly UI
- Mobile-first CSS
- PWA ready

## 🔍 SEO Features

- Dynamic metadata
- Open Graph tags
- Twitter Cards
- Structured data (Schema.org)
- Sitemap
- Robots.txt
- Mobile-first indexing

## 📝 License

MIT License

## 🤝 Contributing

Contributions are welcome!

---

**Built with ❤️ using Next.js 14+**
