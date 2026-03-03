import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact Us | SRV Creation IPTV — 24/7 Support India',
    description: 'Contact SRV Creation IPTV\'s 24/7 customer support team for free trials, setup help, billing queries, or any IPTV service questions. Reach us on WhatsApp or email.',
    keywords: 'contact SRV Creation IPTV, IPTV India support, SRV Creation WhatsApp, IPTV customer service India',
};

export default function ContactPage() {
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
                        <li><Link href="/setup-guide" style={{ color: 'rgba(255,255,255,0.85)' }}>Setup Guide</Link></li>
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
                        We&apos;re Here for You
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '16px' }}>
                        Contact <span className="gradient-text">SRV Creation</span>
                    </h1>
                    <p style={{ maxWidth: '580px', margin: '0 auto', color: '#374151', fontSize: '1.05rem' }}>
                        Our support team is available <strong>24/7</strong> — whether you need a free trial, help with setup, or have a billing question, we&apos;re just a message away.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '8px' }}>
                        {/* WhatsApp */}
                        <a
                            href="https://api.whatsapp.com/send/?phone=919144015850&text=Hello+SRV+Creation,+I+need+help&type=phone_number&app_absent="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card"
                            style={{ padding: '36px 28px', textAlign: 'center', textDecoration: 'none', display: 'block', background: '#eef4ff', borderColor: '#c3d9ff', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💬</div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#0d1421' }}>WhatsApp Support</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>Fastest response — typically within minutes. Best for setup help, free trials, and quick queries.</p>
                            <span className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '10px 22px', minHeight: '40px' }}>
                                Open WhatsApp →
                            </span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:sourav@iptvindia.co.in?subject=SRV Creation IPTV Enquiry"
                            className="card"
                            style={{ padding: '36px 28px', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📧</div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#0d1421' }}>Email Support</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>For detailed queries, billing issues, or formal requests. We respond within 24 hours.</p>
                            <span className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '10px 22px', minHeight: '40px' }}>
                                Send Email →
                            </span>
                        </a>

                        {/* Free Trial */}
                        <a
                            href="https://api.whatsapp.com/send/?phone=919144015850&text=I+want+Free+Trial&type=phone_number&app_absent="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card"
                            style={{ padding: '36px 28px', textAlign: 'center', textDecoration: 'none', display: 'block', background: '#1a73e8', borderColor: '#0d47b8', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚀</div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#ffffff' }}>Request Free Trial</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: '20px', color: 'rgba(255,255,255,0.85)' }}>Try before you buy — get a 24-hour free trial and experience our service with zero commitment.</p>
                            <span className="btn" style={{ fontSize: '0.875rem', padding: '10px 22px', minHeight: '40px', background: '#fff', color: '#1a73e8', fontWeight: 700 }}>
                                Get Free Trial →
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section style={{ background: '#f0f5ff', borderTop: '1px solid #dce8ff', borderBottom: '1px solid #dce8ff' }}>
                <div className="container">
                    <div className="section-head">
                        <h2>Contact <span className="gradient-text">Information</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '48px', maxWidth: '800px', margin: '48px auto 0' }}>
                        {[
                            { icon: '📞', label: 'Phone / WhatsApp', value: '+91 91440 15850', href: 'tel:+919144015850' },
                            { icon: '📧', label: 'Email', value: 'sourav@iptvindia.co.in', href: 'mailto:sourav@iptvindia.co.in' },
                            { icon: '⏰', label: 'Support Hours', value: '24/7 — Always Available', href: null },
                            { icon: '🌐', label: 'Website', value: 'iptvindia.co.in', href: 'https://iptvindia.co.in' },
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                                <div style={{ fontSize: '0.78rem', color: '#6b7a99', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{item.label}</div>
                                {item.href ? (
                                    <a href={item.href} style={{ color: '#1a73e8', fontWeight: 600, fontSize: '0.95rem' }}>{item.value}</a>
                                ) : (
                                    <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.95rem' }}>{item.value}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section>
                <div className="container">
                    <div className="section-head">
                        <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
                        <p>Quick answers to the most common queries we receive.</p>
                    </div>
                    <div className="faq-list">
                        {[
                            { q: 'How quickly can I get started after payment?', a: 'Instantly! After payment confirmation, we send your M3U URL and Xtream Codes to your WhatsApp within 5 minutes — even at midnight.' },
                            { q: 'Do you offer a free trial before I buy?', a: 'Yes! Message us on WhatsApp with "I want a Free Trial" and we will set up a 24-hour trial for you — no credit card required.' },
                            { q: 'What if channels stop working during my subscription?', a: 'Contact us on WhatsApp immediately. We resolve 95% of issues within 30 minutes. Our 99.9% uptime guarantee means extended downtime is extremely rare.' },
                            { q: 'Can I use the service on multiple devices?', a: 'Standard plans support 1 simultaneous device connection. Contact us about multi-connection plans if you need more screens.' },
                        ].map((faq, i) => (
                            <div key={i} className="card faq-item">
                                <h3>{faq.q}</h3>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, marginTop: '10px' }}>{faq.a}</p>
                            </div>
                        ))}
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
