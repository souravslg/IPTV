export default function Pricing() {
    const plans = [
        {
            name: 'Basic',
            price: '₹120',
            period: '/month',
            features: [
                '5,000+ Live Channels',
                'HD Quality Streaming',
                '2 Device Connections',
                'VOD Library Access',
                'Email Support',
            ],
            popular: false,
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            name: 'Premium',
            price: '₹240',
            period: '/month',
            features: [
                '10,000+ Live Channels',
                '4K Quality Streaming',
                '5 Device Connections',
                'Full VOD Library',
                'Priority Support',
                'EPG Guide',
            ],
            popular: true,
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            name: 'Ultimate',
            price: '₹360',
            period: '/month',
            features: [
                'All Channels Available',
                '4K & 8K Streaming',
                'Unlimited Devices',
                'Complete VOD Library',
                '24/7 VIP Support',
                'Advanced EPG',
                'Catch-up TV',
            ],
            popular: false,
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
    ];

    return (
        <section id="pricing" style={{
            padding: '100px 24px',
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
                        Simple, <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#a0aec0',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}>
                        Choose the perfect plan for your streaming needs
                    </p>
                </div>

                {/* Pricing Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                }}>
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{
                                padding: '40px',
                                position: 'relative',
                                border: plan.popular ? '2px solid rgba(240, 147, 251, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
                                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: plan.gradient,
                                    padding: '6px 20px',
                                    borderRadius: '50px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <div style={{
                                textAlign: 'center',
                                marginBottom: '30px',
                            }}>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: '700',
                                    marginBottom: '16px',
                                    color: '#ffffff',
                                }}>
                                    {plan.name}
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    justifyContent: 'center',
                                    marginBottom: '8px',
                                }}>
                                    <span style={{
                                        fontSize: '48px',
                                        fontWeight: '800',
                                        background: plan.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>
                                        {plan.price}
                                    </span>
                                    <span style={{
                                        fontSize: '16px',
                                        color: '#a0aec0',
                                        marginLeft: '4px',
                                    }}>
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                marginBottom: '30px',
                            }}>
                                {plan.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        style={{
                                            padding: '12px 0',
                                            color: '#a0aec0',
                                            fontSize: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                        }}
                                    >
                                        <span style={{
                                            color: '#667eea',
                                            fontSize: '18px',
                                        }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    background: plan.popular ? plan.gradient : 'rgba(102, 126, 234, 0.2)',
                                    border: plan.popular ? 'none' : '2px solid rgba(102, 126, 234, 0.5)',
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                {/* Money Back Guarantee */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '60px',
                    padding: '30px',
                    background: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '20px',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                }}>
                    <p style={{
                        fontSize: '18px',
                        color: '#ffffff',
                        fontWeight: '600',
                    }}>
                        🛡️ 30-Day Money-Back Guarantee
                    </p>
                    <p style={{
                        fontSize: '14px',
                        color: '#a0aec0',
                        marginTop: '8px',
                    }}>
                        Try risk-free. If you're not satisfied, get a full refund within 30 days.
                    </p>
                </div>
            </div>
        </section>
    );
}
