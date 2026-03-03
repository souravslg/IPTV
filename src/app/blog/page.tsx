import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'IPTV Blog | Tips, Guides & News | SRV Creation India',
    description: 'Read the latest IPTV tips, setup guides, channel news, and streaming advice from SRV Creation — India\'s top IPTV service provider.',
    keywords: 'IPTV blog India, IPTV tips, best IPTV channels India, IPTV setup tips, IPTV news 2026',
};

const posts = [
    {
        slug: 'best-iptv-apps-india-2026',
        category: 'Apps & Players',
        title: 'Best IPTV Apps for India in 2026: TiviMate vs IPTV Smarters vs GSE',
        excerpt: 'We tested every major IPTV player available in India. Here is our definitive 2026 ranking — with setup tips, pros, cons, and which app works best for your device.',
        date: 'February 28, 2026',
        readTime: '6 min read',
        icon: '📱',
    },
    {
        slug: 'how-to-watch-ipl-2026-iptv',
        category: 'Sports Streaming',
        title: 'How to Watch IPL 2026 Live in 4K Using IPTV — Complete Guide',
        excerpt: 'Don\'t miss a single boundary. Learn how to stream IPL 2026 in crystal-clear 4K on your Smart TV, mobile, or Firestick using IPTV — with zero buffering guaranteed.',
        date: 'February 20, 2026',
        readTime: '5 min read',
        icon: '🏏',
    },
    {
        slug: 'iptv-vs-ott-india',
        category: 'Comparison',
        title: 'IPTV vs OTT (Netflix/Hotstar/Prime): Which Is Better Value in India?',
        excerpt: 'Spending ₹2,000+ per month on multiple OTT subscriptions? We break down the real cost comparison between IPTV and traditional OTT platforms — the results may surprise you.',
        date: 'February 12, 2026',
        readTime: '7 min read',
        icon: '⚖️',
    },
    {
        slug: 'firestick-iptv-setup-india',
        category: 'Setup Guides',
        title: 'Amazon Firestick IPTV Setup India 2026: Step-by-Step Guide',
        excerpt: 'Turn your Firestick into the ultimate entertainment hub. This beginner-friendly guide walks you through installing IPTV Smarters and TiviMate on Firestick in under 10 minutes.',
        date: 'February 5, 2026',
        readTime: '8 min read',
        icon: '🔥',
    },
    {
        slug: 'iptv-internet-speed-requirements',
        category: 'Tips & Tricks',
        title: 'What Internet Speed Do You Actually Need for IPTV in India?',
        excerpt: 'Stop blaming your IPTV provider for buffering — it might be your connection. We explain exactly what speeds you need for SD, HD, and 4K IPTV streaming, and how to optimize your home network.',
        date: 'January 28, 2026',
        readTime: '4 min read',
        icon: '⚡',
    },
    {
        slug: 'iptv-smart-tv-india-guide',
        category: 'Setup Guides',
        title: 'How to Setup IPTV on Samsung & LG Smart TV India — 2026 Edition',
        excerpt: 'Your Smart TV can do so much more than Netflix. Learn how to install IPTV on Samsung Tizen and LG webOS TVs with step-by-step screenshots and the best app recommendations.',
        date: 'January 15, 2026',
        readTime: '6 min read',
        icon: '📺',
    },
];

const categories = ['All', 'Setup Guides', 'Sports Streaming', 'Apps & Players', 'Comparison', 'Tips & Tricks'];

export default function BlogPage() {
    return (
        <>
            {/* Header */}
            <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#1a73e8', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <nav className="navbar">
                    <Link href="/" className="navbar-logo" style={{ color: '#ffffff', textDecoration: 'none' }}>SRV Creation</Link>
                    <ul className="navbar-links">
                        <li><Link href="/" style={{ color: 'rgba(255,255,255,0.85)' }}>Home</Link></li>
                        <li><Link href="/#features" style={{ color: 'rgba(255,255,255,0.85)' }}>Features</Link></li>
                        <li><Link href="/#plans" style={{ color: 'rgba(255,255,255,0.85)' }}>Pricing</Link></li>
                        <li><Link href="/blog" style={{ color: '#ffffff', fontWeight: 700 }}>Blog</Link></li>
                        <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.85)' }}>Contact</Link></li>
                    </ul>
                    <a href="https://api.whatsapp.com/send/?phone=919144015850&text=I+want+Free+Trial&type=phone_number&app_absent=" className="btn" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 22px', minHeight: '38px', fontSize: '0.875rem', background: '#ffffff', color: '#1a73e8', fontWeight: 700, borderRadius: '100px' }}>
                        Get Free Trial
                    </a>
                </nav>
            </header>

            {/* Hero */}
            <section style={{ background: 'linear-gradient(180deg, #eef4ff 0%, #ffffff 100%)', padding: '80px 0 60px', textAlign: 'center', borderBottom: '1px solid #dce8ff' }}>
                <div className="container">
                    <div className="section-label" style={{ margin: '0 auto 20px' }}>
                        <span className="dot" />
                        IPTV Knowledge Hub
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', marginBottom: '16px' }}>
                        The IPTV <span className="gradient-text">Blog</span>
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#374151', fontSize: '1.05rem' }}>
                        Expert guides, setup tutorials, streaming tips, and IPTV news tailored for India — updated weekly by the SRV Creation team.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section style={{ padding: '32px 0 0', borderBottom: '1px solid #dce8ff' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: '32px' }}>
                        {categories.map((cat, i) => (
                            <span key={cat} style={{
                                padding: '7px 18px',
                                borderRadius: '100px',
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                border: '1px solid',
                                borderColor: i === 0 ? '#1a73e8' : '#dce8ff',
                                background: i === 0 ? '#1a73e8' : '#fff',
                                color: i === 0 ? '#fff' : '#374151',
                                cursor: 'pointer',
                            }}>
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section>
                <div className="container">
                    {/* Featured Post */}
                    <div className="card" style={{ padding: '0', overflow: 'hidden', marginBottom: '40px', display: 'grid', gridTemplateColumns: '1fr', background: '#eef4ff', borderColor: '#c3d9ff' }}>
                        <div style={{ padding: '40px 36px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                <span style={{ background: '#1a73e8', color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>⭐ Featured</span>
                                <span style={{ fontSize: '0.8rem', color: '#6b7a99' }}>{posts[0].category}</span>
                            </div>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{posts[0].icon}</div>
                            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', marginBottom: '14px', lineHeight: 1.3 }}>{posts[0].title}</h2>
                            <p style={{ marginBottom: '24px', fontSize: '1rem', lineHeight: 1.75 }}>{posts[0].excerpt}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.82rem', color: '#6b7a99' }}>📅 {posts[0].date}</span>
                                <span style={{ fontSize: '0.82rem', color: '#6b7a99' }}>⏱ {posts[0].readTime}</span>
                                <Link href={`/blog/${posts[0].slug}`} className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '10px 22px', minHeight: '40px' }}>
                                    Read Article →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Post Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {posts.slice(1).map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                                <div className="card" style={{ padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                                        <span style={{ fontSize: '0.75rem', color: '#1a73e8', fontWeight: 700, background: '#eef4ff', padding: '3px 10px', borderRadius: '100px' }}>{post.category}</span>
                                        <span style={{ fontSize: '2rem' }}>{post.icon}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.05rem', marginBottom: '12px', lineHeight: 1.45, color: '#0d1421' }}>{post.title}</h3>
                                    <p style={{ fontSize: '0.875rem', lineHeight: 1.7, flex: 1, marginBottom: '20px' }}>{post.excerpt}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '16px', borderTop: '1px solid #dce8ff' }}>
                                        <span style={{ fontSize: '0.78rem', color: '#6b7a99' }}>📅 {post.date}</span>
                                        <span style={{ fontSize: '0.78rem', color: '#6b7a99' }}>⏱ {post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section style={{ background: '#f0f5ff', borderTop: '1px solid #dce8ff', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📬</div>
                        <h2 style={{ marginBottom: '12px' }}>Get IPTV Tips on <span className="gradient-text">WhatsApp</span></h2>
                        <p style={{ marginBottom: '28px' }}>Join thousands of Indian IPTV users — get weekly setup guides, channel updates, and exclusive deals directly on WhatsApp.</p>
                        <a href="https://api.whatsapp.com/send/?phone=919144015850&text=Subscribe+me+to+IPTV+tips&type=phone_number&app_absent=" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            💬 Subscribe via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <span className="footer-logo">SRV Creation</span>
                    <div className="footer-links">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/setup-guide">Setup Guide</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </div>
                    <p className="footer-copy">© {new Date().getFullYear()} SRV Creation IPTV. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}
