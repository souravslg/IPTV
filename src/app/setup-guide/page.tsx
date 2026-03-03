import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'IPTV Setup Guide | SRV Creation — Smart TV, Firestick, Android, iOS',
    description: 'Step-by-step IPTV setup guide for SRV Creation service. Learn how to set up IPTV on Smart TV, Amazon Firestick, Android, iPhone, Kodi, and MAG Box in minutes.',
    keywords: 'IPTV setup guide India, how to setup IPTV Smart TV, IPTV Firestick setup, IPTV Android setup, SRV Creation setup',
};

export default function SetupGuidePage() {
    const devices = [
        {
            icon: '📺',
            device: 'Samsung / LG Smart TV',
            app: 'Smart IPTV or IPTV Smarters',
            steps: [
                'Open your Smart TV\'s app store (Samsung Apps / LG Content Store)',
                'Search for "Smart IPTV" or "IPTV Smarters Pro" and install it',
                'Open the app and navigate to Add Playlist / Xtream Codes',
                'Enter your M3U URL or Xtream Codes credentials we sent you',
                'Save and refresh — all your channels will load automatically',
            ],
        },
        {
            icon: '🔥',
            device: 'Amazon Firestick / Fire TV',
            app: 'IPTV Smarters Pro or TiviMate',
            steps: [
                'On Firestick, go to Settings → My Fire TV → Developer Options → Enable Apps from Unknown Sources',
                'Download "Downloader" app from Amazon App Store',
                'Use Downloader to install IPTV Smarters Pro (search for its APK URL)',
                'Open IPTV Smarters Pro → Add User → Enter Xtream Codes login (server, username, password)',
                'Alternatively, use TiviMate from App Store and add your M3U URL',
            ],
        },
        {
            icon: '🤖',
            device: 'Android Phone / Tablet / Box',
            app: 'IPTV Smarters Pro or MX Player',
            steps: [
                'Open Google Play Store on your Android device',
                'Search and install "IPTV Smarters Pro" (free)',
                'Launch the app → tap "Add New User" → select Xtream Codes API',
                'Enter Server URL, Username, and Password from your welcome message',
                'Tap Login — your channels and VODs will be organized automatically',
            ],
        },
        {
            icon: '🍎',
            device: 'iPhone / iPad (iOS)',
            app: 'GSE Smart IPTV or Flex IPTV',
            steps: [
                'Open the Apple App Store on your iPhone or iPad',
                'Search for "GSE Smart IPTV" or "Flex IPTV" and install it',
                'Open the app → Remote Playlists → Add M3U URL',
                'Paste your M3U URL from your welcome message',
                'The app will load all channels. Navigate to Live TV to start watching',
            ],
        },
        {
            icon: '💻',
            device: 'PC / Mac / Windows',
            app: 'VLC Media Player or Kodi',
            steps: [
                'For VLC: Download VLC from videolan.org (free). Open → Media → Open Network Stream',
                'Paste your M3U URL and click Play to stream any channel',
                'For Kodi: Install Kodi from kodi.tv, then install the PVR IPTV Simple Client add-on',
                'In Kodi → Settings → PVR → PVR IPTV Simple Client → Configure → Enter M3U URL',
                'Restart Kodi and all channels will appear in the Live TV section',
            ],
        },
        {
            icon: '📦',
            device: 'MAG Box',
            app: 'Built-in Stalker Middleware Portal',
            steps: [
                'Power on your MAG Box and go to Settings → System Settings → Servers',
                'Under "Portals," enter the Portal URL we provide for your subscription',
                'Navigate to Portal 1 Name field and enter "SRV Creation"',
                'Save settings and restart the MAG Box',
                'The portal will load with all your channels and VOD content automatically',
            ],
        },
    ];

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
                    <div className="section-label" style={{ margin: '0 auto 20px' }}>Quick Setup</div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '16px' }}>
                        IPTV Setup <span className="gradient-text">Guide</span>
                    </h1>
                    <p style={{ maxWidth: '620px', margin: '0 auto', color: '#374151', fontSize: '1.05rem' }}>
                        Get streaming in under 5 minutes. Follow our step-by-step guide for your device — Smart TV, Firestick, Android, iPhone, PC, or MAG Box.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
                        {['📺 Smart TV', '🔥 Firestick', '🤖 Android', '🍎 iOS', '💻 PC/Mac', '📦 MAG Box'].map((d) => (
                            <span key={d} className="badge">{d}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Need */}
            <section style={{ background: '#f0f5ff', borderBottom: '1px solid #dce8ff' }}>
                <div className="container">
                    <div className="section-head">
                        <h2>Before You <span className="gradient-text">Begin</span></h2>
                        <p>Make sure you have these ready before starting the setup.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '40px' }}>
                        {[
                            { icon: '📋', title: 'Your Credentials', desc: 'M3U URL or Xtream Codes (Server, Username, Password) — sent via WhatsApp after purchase.' },
                            { icon: '🌐', title: 'Internet Connection', desc: 'Minimum 10 Mbps for HD, 25 Mbps+ for 4K. Wired ethernet recommended for Smart TVs.' },
                            { icon: '📱', title: 'IPTV Player App', desc: 'Download the appropriate free IPTV player app for your device (listed in each guide below).' },
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '8px' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.875rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Device Guides */}
            <section>
                <div className="container">
                    <div className="section-head">
                        <h2>Setup by <span className="gradient-text">Device</span></h2>
                        <p>Choose your device below for a tailored step-by-step guide.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '48px', maxWidth: '860px', margin: '48px auto 0' }}>
                        {devices.map((device, i) => (
                            <div key={i} className="card" style={{ padding: '32px 28px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                    <div style={{ fontSize: '2.2rem' }}>{device.icon}</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.15rem', marginBottom: '4px' }}>{device.device}</h3>
                                        <span style={{ fontSize: '0.8rem', color: '#1a73e8', fontWeight: 600, background: '#eef4ff', padding: '3px 10px', borderRadius: '100px' }}>Recommended App: {device.app}</span>
                                    </div>
                                </div>
                                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {device.steps.map((step, j) => (
                                        <li key={j} style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7 }}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section style={{ background: '#f0f5ff', borderTop: '1px solid #dce8ff' }}>
                <div className="container">
                    <div className="section-head">
                        <h2>Common <span className="gradient-text">Issues & Fixes</span></h2>
                    </div>
                    <div className="faq-list" style={{ marginTop: '48px' }}>
                        {[
                            { q: 'Channels are buffering or freezing?', a: 'Check your internet speed (needs 10+ Mbps). Try switching from WiFi to wired ethernet. Also try changing the stream format in your IPTV player settings from HLS to TS, or vice versa.' },
                            { q: 'M3U URL not loading?', a: 'Ensure you copied the full URL without extra spaces. Try opening the URL in a browser to confirm it is accessible. Contact us on WhatsApp for a fresh URL if the issue persists.' },
                            { q: 'Channels showing but no sound?', a: 'Open your IPTV player settings and change the audio decoder. In VLC, go to Tools → Preferences → Audio and toggle the audio output module. Restart the app after changes.' },
                            { q: 'Login credentials not working?', a: 'Double-check that you are entering the exact username and password we sent (case-sensitive). Ensure your subscription has not expired. Contact us on WhatsApp for immediate assistance.' },
                        ].map((faq, i) => (
                            <div key={i} className="card faq-item">
                                <h3>{faq.q}</h3>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, marginTop: '10px' }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '16px' }}>Still Need <span className="gradient-text">Help?</span></h2>
                    <p style={{ marginBottom: '32px' }}>Our 24/7 support team is just a WhatsApp message away. We will remotely guide you through setup.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://api.whatsapp.com/send/?phone=919144015850&text=I+need+help+with+IPTV+setup&type=phone_number&app_absent=" className="btn btn-primary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Support</a>
                        <Link href="/contact" className="btn btn-outline">Contact Us</Link>
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
