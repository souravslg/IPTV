'use client';

export default function Footer() {
    return (
        <footer style={{
            background: 'rgba(10, 14, 39, 0.8)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '60px 24px 30px',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px',
                }}>
                    {/* Brand Column */}
                    <div>
                        <div style={{
                            fontSize: '24px',
                            fontWeight: '800',
                            marginBottom: '16px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            📺 SrV Creation IPTV
                        </div>
                        <p style={{
                            color: '#a0aec0',
                            fontSize: '14px',
                            lineHeight: '1.7',
                            marginBottom: '20px',
                        }}>
                            Your ultimate destination for premium IPTV streaming. Watch thousands of channels and on-demand content anywhere, anytime.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                        }}>
                            {['📘', '🐦', '📷', '▶️'].map((icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'rgba(102, 126, 234, 0.1)',
                                        border: '1px solid rgba(102, 126, 234, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '18px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.3)';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            marginBottom: '20px',
                            color: '#ffffff',
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                        }}>
                            {['Home', 'Features', 'Pricing', 'About Us', 'Contact'].map((link, idx) => (
                                <li key={idx} style={{ marginBottom: '12px' }}>
                                    <a
                                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                                        style={{
                                            color: '#a0aec0',
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#a0aec0'}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            marginBottom: '20px',
                            color: '#ffffff',
                        }}>
                            Support
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                        }}>
                            {['Help Center', 'FAQ', 'Setup Guide', 'Device Support', 'Terms of Service'].map((link, idx) => (
                                <li key={idx} style={{ marginBottom: '12px' }}>
                                    <a
                                        href="#"
                                        style={{
                                            color: '#a0aec0',
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#a0aec0'}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h4 style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            marginBottom: '20px',
                            color: '#ffffff',
                        }}>
                            Contact Us
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                        }}>
                            <li style={{
                                color: '#a0aec0',
                                fontSize: '14px',
                                marginBottom: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}>
                                <span>📧</span>
                                <a href="mailto:sourav@iptvindia.co.in" style={{
                                    color: '#a0aec0',
                                    textDecoration: 'none',
                                }}>
                                    sourav@iptvindia.co.in
                                </a>
                            </li>
                            <li style={{
                                color: '#a0aec0',
                                fontSize: '14px',
                                marginBottom: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}>
                                <span>📞</span>
                                +1 (555) 123-4567
                            </li>
                            <li style={{
                                color: '#a0aec0',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}>
                                <span>⏰</span>
                                24/7 Support Available
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: '30px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                }}>
                    <p style={{
                        color: '#a0aec0',
                        fontSize: '14px',
                    }}>
                        © 2026 SrV Creation IPTV. All rights reserved.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                    }}>
                        <a href="#" style={{
                            color: '#a0aec0',
                            textDecoration: 'none',
                            fontSize: '14px',
                            transition: 'color 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#a0aec0'}>
                            Privacy Policy
                        </a>
                        <a href="#" style={{
                            color: '#a0aec0',
                            textDecoration: 'none',
                            fontSize: '14px',
                            transition: 'color 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#a0aec0'}>
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
