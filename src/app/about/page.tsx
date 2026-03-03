import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us | SRV Creation IPTV — India\'s Premier IPTV Provider',
    description: 'Learn about SRV Creation IPTV — India\'s top-rated IPTV service provider offering 10,000+ channels, 50,000+ VODs, and 24/7 support since 2020.',
    keywords: 'about SRV Creation, IPTV India company, best IPTV provider India, SRV Creation history',
};

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#1a73e8', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <nav className="navbar">
                    <Link href="/" className="navbar-logo" style={{ color: '#ffffff', textDecoration: 'none' }}>SRV Creation IPTV</Link>
                    <ul className="navbar-links">
                        <li><Link href="/" style={{ color: 'rgba(255,255,255,0.85)' }}>Home</Link></li>
                        <li><Link href="/#features" style={{ color: 'rgba(255,255,255,0.85)' }}>Features</Link></li>
                        <li><Link href="/#plans" style={{ color: 'rgba(255,255,255,0.85)' }}>Pricing</Link></li>
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
                    <div className="section-label" style={{ margin: '0 auto 20px' }}>About Us</div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px' }}>
                        India&apos;s Most Trusted <span className="gradient-text">IPTV Service Provider</span>
                    </h1>
                    <p style={{ maxWidth: '660px', margin: '0 auto', fontSize: '1.1rem', color: '#374151' }}>
                        Since 2020, SRV Creation has been revolutionizing how India watches television — delivering premium HD & 4K streaming to thousands of happy customers across the country.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginTop: '8px' }}>
                        {[
                            { icon: '🎯', title: 'What is IPTV?', desc: 'IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite — giving you better quality, more flexibility, and global content on any device.' },
                            { icon: '🚀', title: 'Our Mission', desc: 'We are committed to making premium television accessible and affordable for every Indian household. Our India-based CDN servers ensure buffer-free streaming even during peak hours like IPL finals.' },
                            { icon: '⭐', title: 'Why Choose Us?', desc: 'With 99.9% uptime, 24/7 WhatsApp support, and the largest content library tailored for India, we provide an unmatched streaming experience your family will love.' },
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '32px 28px', background: '#eef4ff', borderColor: '#c3d9ff' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.75 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section style={{ background: '#f0f5ff', borderTop: '1px solid #dce8ff', borderBottom: '1px solid #dce8ff' }}>
                <div className="container">
                    <div className="section-head">
                        <h2>Our Numbers <span className="gradient-text">Speak for Themselves</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '48px', textAlign: 'center' }}>
                        {[
                            { num: '10,000+', label: 'Live Channels', icon: '📡' },
                            { num: '50,000+', label: 'Movies & Series', icon: '🎬' },
                            { num: '99.9%', label: 'Uptime SLA', icon: '⚡' },
                            { num: '24/7', label: 'Customer Support', icon: '🛎️' },
                        ].map((stat, i) => (
                            <div key={i} className="card" style={{ padding: '32px 20px' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{stat.icon}</div>
                                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1a73e8', marginBottom: '6px' }}>{stat.num}</div>
                                <div style={{ fontSize: '0.9rem', color: '#6b7a99', fontWeight: 600 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How IPTV Works */}
            <section>
                <div className="container">
                    <div className="section-head">
                        <h2>How <span className="gradient-text">It Works</span></h2>
                        <p>Getting started with SRV Creation IPTV takes less than 5 minutes.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '48px' }}>
                        {[
                            { step: '1', title: 'Subscribe', desc: 'Choose a plan that fits your budget — starting at just ₹399/month.' },
                            { step: '2', title: 'Receive Credentials', desc: 'We instantly send your M3U URL and Xtream Codes to your WhatsApp or email.' },
                            { step: '3', title: 'Setup Your Device', desc: 'Enter your credentials in IPTV Smarters, TiviMate, or any IPTV player.' },
                            { step: '4', title: 'Enjoy!', desc: 'Start streaming 10,000+ channels and 50,000+ VODs immediately.' },
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: '0 auto 16px' }}>{item.step}</div>
                                <h3 style={{ marginBottom: '8px' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.875rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: '#1a73e8', borderTop: '1px solid #0d47b8', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', marginBottom: '16px' }}>Ready to Start Streaming?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>Join thousands of happy Indian families. No contract, cancel anytime.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://www.srvcreationservices.co.in/" className="btn" target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#1a73e8', fontWeight: 700 }}>🚀 Get Started Now</a>
                        <Link href="/contact" className="btn" style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.5)' }}>Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <span className="footer-logo">SRV Creation IPTV</span>
                    <div className="footer-links">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
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
