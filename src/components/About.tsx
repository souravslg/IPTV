export default function About() {
    return (
        <section id="about" style={{
            padding: 'clamp(60px, 10vh, 100px) clamp(16px, 5vw, 24px)',
            position: 'relative',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Section Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                }}>
                    <h2 style={{
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontWeight: '800',
                        marginBottom: '16px',
                    }}>
                        About <span className="gradient-text">SrV Creation IPTV</span>
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#a0aec0',
                        maxWidth: '700px',
                        margin: '0 auto',
                    }}>
                        Leading the future of television streaming with cutting-edge technology
                    </p>
                </div>

                {/* Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: 'clamp(20px, 4vw, 40px)',
                    marginBottom: '60px',
                }}>
                    {/* What is IPTV */}
                    <div className="glass-card" style={{
                        padding: 'clamp(24px, 4vw, 40px)',
                    }}>
                        <div style={{
                            fontSize: '48px',
                            marginBottom: '20px',
                        }}>
                            🎯
                        </div>
                        <h3 style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            marginBottom: '16px',
                            color: '#ffffff',
                        }}>
                            What is IPTV?
                        </h3>
                        <p style={{
                            color: '#a0aec0',
                            lineHeight: '1.8',
                            fontSize: '15px',
                        }}>
                            IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. This means better quality, more flexibility, and access to content from anywhere in the world.
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div className="glass-card" style={{
                        padding: 'clamp(24px, 4vw, 40px)',
                    }}>
                        <div style={{
                            fontSize: '48px',
                            marginBottom: '20px',
                        }}>
                            🚀
                        </div>
                        <h3 style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            marginBottom: '16px',
                            color: '#ffffff',
                        }}>
                            Our Mission
                        </h3>
                        <p style={{
                            color: '#a0aec0',
                            lineHeight: '1.8',
                            fontSize: '15px',
                        }}>
                            We're committed to revolutionizing how people consume television content by providing reliable, high-quality streaming services that are accessible, affordable, and packed with features.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="glass-card" style={{
                        padding: 'clamp(24px, 4vw, 40px)',
                    }}>
                        <div style={{
                            fontSize: '48px',
                            marginBottom: '20px',
                        }}>
                            ⭐
                        </div>
                        <h3 style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            marginBottom: '16px',
                            color: '#ffffff',
                        }}>
                            Why Choose Us?
                        </h3>
                        <p style={{
                            color: '#a0aec0',
                            lineHeight: '1.8',
                            fontSize: '15px',
                        }}>
                            With 99.9% uptime, 24/7 support, and the largest content library in the industry, we provide an unmatched streaming experience that keeps our customers coming back.
                        </p>
                    </div>
                </div>

                {/* Key Benefits */}
                <div className="glass-card" style={{
                    padding: 'clamp(30px, 5vw, 50px)',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                }}>
                    <h3 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        marginBottom: '30px',
                        textAlign: 'center',
                        color: '#ffffff',
                    }}>
                        How IPTV Works
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
                        gap: 'clamp(20px, 3vw, 30px)',
                    }}>
                        {[
                            { step: '1', title: 'Subscribe', desc: 'Choose your plan' },
                            { step: '2', title: 'Connect', desc: 'Setup on your device' },
                            { step: '3', title: 'Stream', desc: 'Enjoy unlimited content' },
                            { step: '4', title: 'Relax', desc: 'We handle the rest' },
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                textAlign: 'center',
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    margin: '0 auto 16px',
                                }}>
                                    {item.step}
                                </div>
                                <h4 style={{
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    marginBottom: '8px',
                                    color: '#ffffff',
                                }}>
                                    {item.title}
                                </h4>
                                <p style={{
                                    fontSize: '14px',
                                    color: '#a0aec0',
                                }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
