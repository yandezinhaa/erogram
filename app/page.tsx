import Link from 'next/link';

export const revalidate = 3600;

export default async function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      {/* Breadcrumb/Tagline */}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '32px',
          paddingBottom: '16px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(232, 53, 109, 0.1)',
            border: '1px solid rgba(232, 53, 109, 0.2)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            color: '#e8356d',
          }}
        >
          <span style={{ fontSize: '10px' }}>●</span>
          The #1 NSFW & Porn Telegram and AI Directory
        </div>
      </div>

      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          paddingTop: '32px',
          paddingBottom: '64px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '24px',
            color: '#ffffff',
            maxWidth: '1000px',
            margin: '0 auto 24px',
            letterSpacing: '-1px',
          }}
        >
          Discover NSFW & Porn{' '}
          <span style={{ color: '#e8356d' }}>Telegram groups, bots & AI</span>
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#999999',
            marginBottom: '48px',
            maxWidth: '800px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}
        >
          Your #1 hub for NSFW Telegram groups & bots, AI companions & tools,
          and 1.8M+ OnlyFans creators. Explore and save your favorites all in
          one place.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {/* Top 3 Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/groups"
              style={{
                background: '#0ea5e9',
                color: '#ffffff',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3"></path>
              </svg>
              Explore Groups
            </Link>

            <Link
              href="/bots"
              style={{
                background: '#0ea5e9',
                color: '#ffffff',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Explore Bots
            </Link>

            <Link
              href="/ainsfw"
              style={{
                background: '#0ea5e9',
                color: '#ffffff',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="5" r="1"></circle>
                <circle cx="5" cy="19" r="1"></circle>
              </svg>
              Explore AI NSFW
            </Link>
          </div>

          {/* Large Pink Button */}
          <Link
            href="/onlyfanssearch"
            style={{
              background: '#e8356d',
              color: '#ffffff',
              padding: '14px 48px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            ONLYFANS SEARCH +1.8M
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '24px',
            marginTop: '64px',
            maxWidth: '800px',
            margin: '64px auto 0',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              +5K
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#666666',
                marginTop: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Groups
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#0ea5e9',
              }}
            >
              312
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#666666',
                marginTop: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Visiting Now
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#0ea5e9',
              }}
            >
              9,097,995
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#666666',
                marginTop: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Views
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              +1.8M
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#666666',
                marginTop: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              OnlyFans Creators
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
