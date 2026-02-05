'use client';

export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 20px 60px', // Fixed padding for mobile base
            position: 'relative',
        }}>
            <div style={{
                maxWidth: '1200px',
                textAlign: 'center',
                width: '100%', // Ensure it takes full width
            }} className="fade-in-up">
                {/* Badge */}
                <div style={{
                    display: 'inline-block',
                    background: 'rgba(102, 126, 234, 0.1)',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '50px',
                    padding: '8px 16px',
                    marginBottom: '24px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#667eea',
                }}>
                    🚀 Next Generation Streaming
                </div>

                {/* Main Heading */}
                <h1 style={{
                    fontSize: '32px', // Base size for mobile
                    fontWeight: '800',
                    lineHeight: '1.2',
                    marginBottom: '20px',
                    letterSpacing: '-0.02em',
                    maxWidth: '100%',
                }} className="hero-heading">
                    Stream Your Favorite
                    <br />
                    <span className="gradient-text">TV Channels Anywhere</span>
                </h1>

                {/* Subheading */}
                <p style={{
                    fontSize: '16px', // Base size for mobile
                    color: '#a0aec0',
                    maxWidth: '90%',
                    margin: '0 auto 40px',
                    lineHeight: '1.6',
                }} className="hero-subheading">
                    Experience crystal-clear IPTV streaming with thousands of channels,
                    on-demand content, and seamless playback across all your devices.
                </p>

                {/* Stats - MOBILE VERTICAL STACK */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    maxWidth: '100%',
                    margin: '0 auto',
                    width: '100%',
                    boxSizing: 'border-box',
                }}>
                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            fontSize: '32px',
                            fontWeight: '800',
                            marginBottom: '4px',
                        }} className="gradient-text-1 stat-number">
                            800+
                        </div>
                        <div style={{ color: '#a0aec0', fontSize: '14px', fontWeight: '500' }}>
                            Live HD/SD TV Channels
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            fontSize: '20px', // Smaller font for text list
                            fontWeight: '800',
                            marginBottom: '4px',
                            lineHeight: '1.4',
                        }} className="gradient-text-2 stat-number">
                            Android TV / Box / Mobile / PC
                        </div>
                        <div style={{ color: '#a0aec0', fontSize: '14px', fontWeight: '500' }}>
                            Supported Devices
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            fontSize: '32px',
                            fontWeight: '800',
                            marginBottom: '4px',
                        }} className="gradient-text-3 stat-number">
                            99.9%
                        </div>
                        <div style={{ color: '#a0aec0', fontSize: '14px', fontWeight: '500' }}>
                            Uptime
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hero-heading {
                    font-size: 32px;
                }
                .hero-subheading {
                    font-size: 16px;
                }
                .gradient-text-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .gradient-text-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .gradient-text-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                
                /* DESKTOP RESTORATION */
                @media (min-width: 1024px) {
                    .hero-heading {
                        font-size: 64px !important;
                    }
                    .hero-subheading {
                        font-size: 20px !important;
                    }
                    .stats-grid {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 30px !important;
                        max-width: 900px !important;
                    }
                }
            `}</style>
        </section>
    );
}
