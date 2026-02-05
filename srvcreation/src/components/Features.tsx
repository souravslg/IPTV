export default function Features() {
    const features = [
        {
            icon: '📺',
            title: 'HD & 4K Streaming',
            description: 'Enjoy crystal-clear picture quality with support for HD, Full HD, and 4K resolution channels.',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            icon: '🌍',
            title: 'Global Coverage',
            description: 'Access channels from around the world including sports, news, entertainment, and more.',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            icon: '📱',
            title: 'Multi-Device Support',
            description: 'Watch on any device - Smart TV, smartphone, tablet, computer, or streaming box.',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Experience instant channel switching and minimal buffering with our optimized servers.',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        },
        {
            icon: '🎬',
            title: 'VOD Library',
            description: 'Access thousands of movies and TV shows on-demand, available anytime you want.',
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        },
        {
            icon: '🔒',
            title: 'Secure & Private',
            description: 'Your streaming activity is protected with enterprise-grade encryption and privacy.',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        },
    ];

    return (
        <section id="features" style={{
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
                        Why Choose <span className="gradient-text">IPTV Stream</span>
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#a0aec0',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}>
                        Cutting-edge technology meets exceptional entertainment
                    </p>
                </div>

                {/* Features Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{
                                padding: '40px',
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div
                                className="feature-icon"
                                style={{
                                    background: feature.gradient,
                                }}
                            >
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontSize: '22px',
                                fontWeight: '700',
                                marginBottom: '12px',
                                color: '#ffffff',
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                color: '#a0aec0',
                                lineHeight: '1.7',
                                fontSize: '15px',
                            }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
