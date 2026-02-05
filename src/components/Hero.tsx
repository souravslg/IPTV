export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(80px, 15vh, 100px) clamp(16px, 5vw, 24px) clamp(40px, 10vh, 60px)',
            position: 'relative',
        }}>
            <div style={{
                maxWidth: '1200px',
                textAlign: 'center',
            }} className="fade-in-up">
                {/* Badge */}
                <div style={{
                    display: 'inline-block',
                    background: 'rgba(102, 126, 234, 0.1)',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '50px',
                    padding: '8px 20px',
                    marginBottom: '30px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#667eea',
                }}>
                    🚀 Next Generation Streaming
                </div>

                {/* Main Heading */}
                <h1 style={{
                    fontSize: 'clamp(32px, 7vw, 72px)',
                    fontWeight: '800',
                    lineHeight: '1.15',
                    marginBottom: '24px',
                    letterSpacing: '-0.02em',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                }}>
                    Stream Your Favorite
                    <br />
                    <span className="gradient-text">TV Channels Anywhere</span>
                </h1>

                {/* Subheading */}
                <p style={{
                    fontSize: 'clamp(14px, 3.5vw, 20px)',
                    color: '#a0aec0',
                    maxWidth: '700px',
                    margin: '0 auto 40px',
                    lineHeight: '1.6',
                    padding: '0 8px',
                }}>
                    Experience crystal-clear IPTV streaming with thousands of channels,
                    on-demand content, and seamless playback across all your devices.
                </p>

                {/* Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                    gap: 'clamp(16px, 3vw, 30px)',
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 8px',
                }}>
                    <div className="glass-card" style={{
                        padding: '30px',
                        textAlign: 'center',
                    }}>
                        <div style={{
                            fontSize: '36px',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '8px',
                        }}>
                            10,000+
                        </div>
                        <div style={{
                            color: '#a0aec0',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}>
                            Live Channels
                        </div>
                    </div>

                    <div className="glass-card" style={{
                        padding: '30px',
                        textAlign: 'center',
                    }}>
                        <div style={{
                            fontSize: '36px',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '8px',
                        }}>
                            50,000+
                        </div>
                        <div style={{
                            color: '#a0aec0',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}>
                            VOD Content
                        </div>
                    </div>

                    <div className="glass-card" style={{
                        padding: '30px',
                        textAlign: 'center',
                    }}>
                        <div style={{
                            fontSize: '36px',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '8px',
                        }}>
                            99.9%
                        </div>
                        <div style={{
                            color: '#a0aec0',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}>
                            Uptime
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
