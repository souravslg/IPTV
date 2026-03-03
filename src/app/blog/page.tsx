import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts } from '@/lib/supabase';

export const metadata: Metadata = {
    title: 'IPTV Blog | Tips, Guides & News | SRV Creation India',
    description: 'Read the latest IPTV tips, setup guides, channel news, and streaming advice from SRV Creation — India\'s top IPTV service provider.',
    keywords: 'IPTV blog India, IPTV tips, best IPTV channels India, IPTV setup tips, IPTV news 2026',
};

// Revalidate every 60 seconds so new posts appear without redeploying
export const revalidate = 60;

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'long', year: 'numeric',
    });
}

type Post = Awaited<ReturnType<typeof getPublishedPosts>>[number];

function getExcerpt(post: Post) {
    if (post.meta_description) return post.meta_description;
    return 'Read this article on the SRV Creation blog…';
}

export default async function BlogPage() {
    const posts = await getPublishedPosts();

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

            {/* Blog Grid */}
            <section style={{ padding: '60px 0 80px' }}>
                <div className="container">

                    {/* No posts yet */}
                    {posts.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '80px 0', color: '#6b7a99' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
                            <h2 style={{ marginBottom: '8px' }}>No articles yet</h2>
                            <p>Check back soon — we are cooking up some great content!</p>
                        </div>
                    )}

                    {/* Vertical post list — all posts */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '820px', margin: '0 auto' }}>
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                                <div className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'row', gap: 0 }}>
                                    {post.featured_image && (
                                        <div style={{ position: 'relative', width: '220px', minWidth: '220px', minHeight: '160px', flexShrink: 0 }}>
                                            <Image
                                                src={post.featured_image}
                                                alt={post.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="220px"
                                            />
                                        </div>
                                    )}
                                    <div style={{ padding: '28px 32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.4, color: '#0d1421' }}>
                                            {post.title}
                                        </h2>
                                        <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#6b7a99', marginBottom: '20px' }}>
                                            {getExcerpt(post)}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <span style={{ fontSize: '0.78rem', color: '#6b7a99' }}>📅 {formatDate(post.created_at)}</span>
                                            <span style={{ marginLeft: 'auto', fontSize: '0.85rem', color: '#1a73e8', fontWeight: 600 }}>Read Article →</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
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
