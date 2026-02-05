'use client';

export default function About() {
    return (
        <section id="about" style={{
            padding: '60px 20px', // Mobile padding
            position: 'relative',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Section Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                }}>
                    <h2 style={{
                        fontSize: '28px', // Mobile font size
                        fontWeight: '800',
                        marginBottom: '16px',
                    }} className="section-title">
                        About <span className="gradient-text">SrV Creation IPTV</span>
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        color: '#a0aec0',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}>
                        Leading the future of television streaming with cutting-edge technology
                    </p>
                </div>

                {/* Content Grid */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginBottom: '40px',
                    width: '100%',
                }} className="content-grid">
                    {/* What is IPTV */}
                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            fontSize: '40px',
                            marginBottom: '16px',
                        }}>
                            🎯
                        </div>
                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            marginBottom: '12px',
                            color: '#ffffff',
                        }}>
                            What is IPTV?
                        </h3>
                        <p style={{
                            color: '#a0aec0',
                            lineHeight: '1.6',
                            fontSize: '14px',
                        }}>
                            IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. This means better quality, more flexibility, and access to content from anywhere in the world.
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            fontSize: '40px',
                            marginBottom: '16px',
                        }}>
                            🚀
                        </div>
                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            marginBottom: '12px',
                            color: '#ffffff',
                        }}>
                            Our Mission
                        </h3>
                        <p style={{
                            color: '#a0aec0',
                            lineHeight: '1.6',
                            fontSize: '14px',
                        }}>
                            We're committed to revolutionizing how people consume television content by providing reliable, high-quality streaming services that are accessible, affordable, and packed with features.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            fontSize: '40px',
                            marginBottom: '16px',
                        }}>
                            ⭐
                        </div>
                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            marginBottom: '12px',
                            color: '#ffffff',
                        }}>
                            Why Choose Us?
                        </h3>
                        <p style={{
                            color: '#a0aec0',
                            lineHeight: '1.6',
                            fontSize: '14px',
                        }}>
                            With 99.9% uptime, 24/7 support, and the largest content library in the industry, we provide an unmatched streaming experience that keeps our customers coming back.
                        </p>
                    </div>
                </div>

                {/* Key Benefits */}
                <div className="glass-card benefits-card" style={{
                    padding: '30px 20px',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                }}>
                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        marginBottom: '30px',
                        textAlign: 'center',
                        color: '#ffffff',
                    }} className="benefits-title">
                        How IPTV Works
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns for steps on mobile looks ok
                        gap: '20px',
                    }} className="steps-grid">
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
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '20px',
                                    fontWeight: '800',
                                    margin: '0 auto 12px',
                                }}>
                                    {item.step}
                                </div>
                                <h4 style={{
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    marginBottom: '4px',
                                    color: '#ffffff',
                                }}>
                                    {item.title}
                                </h4>
                                <p style={{
                                    fontSize: '12px',
                                    color: '#a0aec0',
                                }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                /* FORCE MOBILE ONLY: No desktop media queries */
                .section-title {
                    font-size: 28px;
                }
                .content-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    width: 100%;
                }
                .benefits-card {
                    padding: 30px 20px;
                    width: 100%;
                }
                .benefits-title {
                    font-size: 24px;
                }
                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr); /* Keep 2 cols for steps as it fits mobile */
                    gap: 20px;
                    width: 100%;
                }
                .glass-card {
                    padding: 24px;
                    width: 100%;
                }

                /* DESKTOP RESTORATION */
                @media (min-width: 1024px) {
                    .section-title {
                        font-size: 48px !important;
                    }
                    .content-grid {
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 40px !important;
                    }
                    .benefits-card {
                        padding: 60px !important;
                    }
                    .benefits-title {
                        font-size: 36px !important;
                    }
                    .steps-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                        gap: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
}
