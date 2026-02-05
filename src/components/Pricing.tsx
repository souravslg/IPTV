'use client';

export default function Pricing() {
    const plans = [
        {
            name: 'Basic',
            price: '₹120',
            period: '/month',
            features: [
                '800+ Live Channels',
                'HD Quality Streaming',
                '1 Device Connection',
                '99% Uptime',
                '24x7 Email Support',
            ],
            popular: false,
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            name: 'Popular',
            price: '₹299',
            period: '/90 days',
            features: [
                '800+ Live Channels',
                'HD Quality Streaming',
                '1 Device Connection',
                '99% Uptime',
                '24x7 Email Support',
            ],
            popular: true,
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            name: 'Yearly',
            price: '₹1200',
            period: '/year',
            features: [
                '800+ Live Channels',
                'HD Quality Streaming',
                '1 Device Connection',
                '99% Uptime',
                '24x7 Email Support',
            ],
            popular: false,
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
    ];

    return (
        <section id="pricing" style={{
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
                        fontSize: '28px', // Mobile size
                        fontWeight: '800',
                        marginBottom: '16px',
                    }} className="section-title">
                        Choose Your Perfect
                        <span className="gradient-text"> Plan</span>
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        color: '#a0aec0',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}>
                        Flexible plans to fit your streaming needs.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    width: '100%',
                }} className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{
                                padding: '30px 20px', // Mobile padding for cards
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative',
                                border: plan.popular ? '2px solid rgba(240, 147, 251, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
                                transform: plan.popular ? 'scale(1)' : 'scale(1)', // No scale on mobile
                            }}
                        >
                            {plan.popular && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    right: '20px',
                                    background: plan.gradient,
                                    padding: '6px 14px',
                                    borderRadius: '50px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: 'white',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                }}>
                                    Most Popular
                                </span>
                            )}

                            <div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '20px',
                                }}>
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontWeight: '800',
                                        color: '#ffffff',
                                    }}>
                                        {plan.name}
                                    </h3>
                                </div>
                                <div style={{ marginBottom: '24px' }}>
                                    <span style={{
                                        fontSize: '40px',
                                        fontWeight: '800',
                                        color: '#ffffff',
                                        marginRight: '8px',
                                    }}>
                                        {plan.price}
                                    </span>
                                    <span style={{
                                        fontSize: '16px',
                                        color: '#a0aec0',
                                        fontWeight: '500',
                                    }}>
                                        {plan.period}
                                    </span>
                                </div>
                                <ul style={{
                                    listStyle: 'none',
                                    marginBottom: '30px',
                                    color: '#a0aec0',
                                }}>
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            marginBottom: '12px',
                                            fontSize: '14px',
                                        }}>
                                            <span style={{ color: '#667eea' }}>✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href="https://www.srvcreationservices.co.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    marginTop: 'auto',
                                    display: 'block',
                                    textDecoration: 'none',
                                }}>
                                Get Started
                            </a>

                            {/* Contact Info */}
                            <div style={{
                                textAlign: 'center',
                                marginTop: '20px',
                                padding: '16px',
                                background: 'rgba(102, 126, 234, 0.1)',
                                borderRadius: '12px',
                                border: '1px solid rgba(102, 126, 234, 0.2)',
                            }}>
                                <p style={{
                                    fontSize: '14px',
                                    color: '#ffffff',
                                    fontWeight: '600',
                                }}>
                                    📧 Contact us
                                </p>
                                <p style={{
                                    fontSize: '13px',
                                    color: '#a0aec0',
                                    marginTop: '4px',
                                }}>
                                    <a href="mailto:sourav@iptvindia.co.in" style={{
                                        color: '#667eea',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                    }}>
                                        sourav@iptvindia.co.in
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                /* FORCE MOBILE ONLY: No desktop grid */
                .section-title {
                    font-size: 28px;
                }
                .pricing-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    width: 100%;
                }
                .glass-card {
                    padding: 30px 20px;
                    width: 100%;
                }
            `}</style>
        </section>
    );
}
