export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Fixed nav header area */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#1a73e8', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
        <nav className="navbar">
          <div className="navbar-logo" style={{ color: '#ffffff' }}>SRV Creation</div>
          <ul className="navbar-links">
            <li><a href="#features" style={{ color: 'rgba(255,255,255,0.85)' }}>Features</a></li>
            <li><a href="#plans" style={{ color: 'rgba(255,255,255,0.85)' }}>Pricing</a></li>
            <li><a href="#reviews" style={{ color: 'rgba(255,255,255,0.85)' }}>Reviews</a></li>
            <li><a href="#faq" style={{ color: 'rgba(255,255,255,0.85)' }}>FAQ</a></li>
          </ul>
          <a href="https://api.whatsapp.com/send/?phone=919144015850&text=I+want+Free+Trial&type=phone_number&app_absent=" className="btn" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 22px', minHeight: '38px', fontSize: '0.875rem', background: '#ffffff', color: '#1a73e8', fontWeight: 700, borderRadius: '100px' }}>
            Get Free Trial
          </a>
        </nav>
      </header>

      {/* ============================
          HERO SECTION
          ============================ */}
      <div className="hero-wrapper">
        <div className="orb orb-blue" aria-hidden="true" />
        <div className="orb orb-pink" aria-hidden="true" />
        <section className="hero" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <div className="section-label">
              <span className="dot" />
              #1 Rated IPTV in India 2026
            </div>

            <h1>
              The <span className="gradient-text">Best IPTV Service Provider</span> in India 2026
            </h1>

            <p className="hero-sub">
              <strong>10,000+ HD/4K channels</strong>, 50,000+ VODs & 24/7 support — zero buffering, instant setup.
            </p>

            <div className="hero-cta">
              <a href="https://www.srvcreationservices.co.in/" className="btn btn-primary" target="_blank" rel="noopener noreferrer" aria-label="Join now and start streaming IPTV">
                🚀 Join Now — Instant Setup
              </a>
              <a href="#features" className="btn btn-outline" aria-label="See IPTV features">
                Explore Features
              </a>
            </div>

            <div className="trust-badges">
              <div className="badge"><span className="badge-icon">📺</span> 4K UHD Quality</div>
              <div className="badge"><span className="badge-icon">⚡</span> 99.9% Uptime</div>
              <div className="badge"><span className="badge-icon">🕒</span> 24/7 Support</div>
              <div className="badge"><span className="badge-icon">📱</span> All Devices</div>
              <div className="badge"><span className="badge-icon">🔒</span> Secure Payments</div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================
          FEATURES SECTION
          ============================ */}
      <section id="features">
        <div className="container">
          <div className="section-head">
            <div className="section-label" style={{ margin: '0 auto 16px' }}>Why Choose Us</div>
            <h2>Why We Are the <span className="gradient-text">Top IPTV Provider</span></h2>
            <p>Don&apos;t settle for freezing streams and missing channels. Upgrade to the ultimate viewing experience built for India.</p>
          </div>

          <div className="features-grid">
            {[
              { icon: '📡', title: '10,000+ Live Channels', desc: 'Premium sports, regional Indian networks, news & entertainment in native HD quality.' },
              { icon: '⚡', title: 'Anti-Freeze Technology', desc: 'Our powerful Indian servers guarantee 99.9% uptime — no buffering during cricket or live events.' },
              { icon: '🎬', title: '50,000+ VOD Library', desc: 'Latest Bollywood, Hollywood movies and TV series updated weekly, available on demand.' },
              { icon: '📱', title: 'Works on Any Device', desc: 'Smart TVs, Android, iOS, Firestick, MAG boxes, Kodi, PC and more — all supported.' },
            ].map((f, i) => (
              <div key={i} className="card feature-card">
                <span className="feature-icon" role="img" aria-label={f.title}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          PRICING SECTION
          ============================ */}
      <section id="plans" className="pricing-section">
        <div className="container">
          <div className="section-head">
            <div className="section-label" style={{ margin: '0 auto 16px' }}>Pricing</div>
            <h2>Affordable <span className="gradient-text">IPTV Plans</span> for Every Screen</h2>
            <p>No contracts, no hidden fees. Cancel anytime. Best IPTV service 2026 deals in India.</p>
          </div>

          <div className="pricing-grid">
            {/* 1 Month */}
            <div className="card pricing-card">
              <div className="pricing-name">1 Month</div>
              <div className="pricing-price">₹399<span>/mo</span></div>
              <div className="pricing-save">&nbsp;</div>
              <ul className="pricing-features">
                <li className="active"><span className="check">✓</span> 1 Device Connection</li>
                <li className="active"><span className="check">✓</span> HD Channels</li>
                <li className="active"><span className="check">✓</span> VOD Library</li>
                <li><span className="cross">✗</span> Priority Support</li>
                <li><span className="cross">✗</span> 4K Channels</li>
              </ul>
              <a href="https://www.srvcreationservices.co.in/" className="btn btn-outline btn-full" target="_blank" rel="noopener noreferrer">
                Get 1 Month
              </a>
            </div>

            {/* 6 Months — Featured */}
            <div className="card pricing-card featured">
              <div className="popular-badge">⭐ Most Popular</div>
              <div className="pricing-name" style={{ color: '#93c5fd' }}>6 Months</div>
              <div className="pricing-price">₹1,999<span>/6mo</span></div>
              <div className="pricing-save">Save 16% — Best Seller!</div>
              <ul className="pricing-features">
                <li className="active"><span className="check">✓</span> 1 Device Connection</li>
                <li className="active"><span className="check">✓</span> HD + 4K Channels</li>
                <li className="active"><span className="check">✓</span> Full VOD Library</li>
                <li className="active"><span className="check">✓</span> Priority 24/7 Support</li>
                <li className="active"><span className="check">✓</span> Anti-Freeze Tech</li>
              </ul>
              <a href="https://www.srvcreationservices.co.in/" className="btn btn-primary btn-full" target="_blank" rel="noopener noreferrer">
                🚀 Start Streaming
              </a>
            </div>

            {/* 12 Months */}
            <div className="card pricing-card">
              <div className="pricing-name">12 Months</div>
              <div className="pricing-price">₹3,499<span>/yr</span></div>
              <div className="pricing-save" style={{ color: '#4ade80' }}>Save 26% — Best Value!</div>
              <ul className="pricing-features">
                <li className="active"><span className="check">✓</span> 1 Device Connection</li>
                <li className="active"><span className="check">✓</span> HD + 4K Channels</li>
                <li className="active"><span className="check">✓</span> Full VOD Library</li>
                <li className="active"><span className="check">✓</span> Priority 24/7 Support</li>
                <li className="active"><span className="check">✓</span> Anti-Freeze Tech</li>
              </ul>
              <a href="https://www.srvcreationservices.co.in/" className="btn btn-outline btn-full" target="_blank" rel="noopener noreferrer">
                Get 1 Year
              </a>
            </div>
          </div>

          {/* Payment methods */}
          <div className="text-center" style={{ marginTop: '36px' }}>
            <p style={{ fontSize: '0.875rem', marginBottom: '16px' }}>Secure Payment Methods Accepted</p>
            <div className="payment-methods">
              {['UPI', 'Paytm', 'GPay', 'PhonePe', 'Visa', 'Mastercard', 'Crypto'].map(m => (
                <span key={m} className="pay-chip">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          REVIEWS SECTION
          ============================ */}
      <section id="reviews">
        <div className="container">
          <div className="section-head">
            <div className="section-label" style={{ margin: '0 auto 16px' }}>Testimonials</div>
            <h2>What India Says About Our <span className="gradient-text">IPTV Service</span></h2>
          </div>
          <div className="reviews-grid">
            {[
              { stars: '★★★★★', text: 'Best IPTV service in India hands down. Zero buffering during the IPL final, and the 4K quality is genuinely stunning.', author: 'Rahul M., Mumbai' },
              { stars: '★★★★★', text: 'Instant setup on my Samsung Smart TV. The VOD library is insane — way better than paying for multiple OTT subscriptions.', author: 'Priya S., Delhi' },
              { stars: '★★★★★', text: 'Customer service is incredibly fast on WhatsApp. Flawless streaming. Definitely the best IPTV provider I have used in 2026.', author: 'Vikram R., Bangalore' },
            ].map((r, i) => (
              <div key={i} className="card review-card">
                <div className="stars">{r.stars}</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          FAQ SECTION
          ============================ */}
      <section id="faq">
        <div className="container">
          <div className="section-head">
            <div className="section-label" style={{ margin: '0 auto 16px' }}>FAQ</div>
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Everything you need to know about India&apos;s top IPTV service provider.</p>
          </div>
          <div className="faq-list">
            {[
              { q: 'What is the best IPTV service in India for 2026?', a: 'SRV Creation is rated the top IPTV service provider in India due to our 99.9% uptime, localised Indian servers, 10,000+ live channels, massive VOD library, and affordable pricing.' },
              { q: 'How do I setup SRV Creation IPTV on my Smart TV?', a: 'Setup takes just minutes. Once you purchase a plan you receive an M3U link and Xtream Codes. Enter these into IBO Player, IPTV Smarters Pro, or TiviMate on your Smart TV, Fire Stick, or any device.' },
              { q: 'Does this IPTV provider buffer during live cricket or sports?', a: 'Absolutely not. Our anti-freeze technology and high-bandwidth Indian CDN servers ensure smooth, buffer-free streaming even during peak events like IPL, World Cup, or Champions League.' },
              { q: 'What internet speed do I need for IPTV?', a: 'We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps+ for a flawless 4K experience. Our streams are optimised to perform well even on modest connections.' },
            ].map((f, i) => (
              <div key={i} className="card faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          FOOTER
          ============================ */}
      <footer className="footer">
        <div className="container">
          <span className="footer-logo">SRV Creation</span>
          <p className="footer-desc">
            SRV Creation is the premier <strong>IPTV service provider</strong> in India, offering top-tier digital streaming tailored for the Indian audience. Discover why we are the <strong>best IPTV service India</strong> has to offer — premium HD/4K channels, massive VOD library, and unbeatable 2026 pricing.
          </p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Setup Guide</a>
            <a href="#">Contact Us</a>
          </div>
          <p className="footer-copy">© {currentYear} SRV Creation IPTV. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="sticky-cta" role="complementary" aria-label="Sticky call to action">
        <span className="sticky-cta-label">Start Streaming Today</span>
        <a href="#plans" className="btn btn-primary" style={{ padding: '10px 20px', minHeight: '40px', fontSize: '0.875rem' }}>
          Check Plans
        </a>
      </div>
    </>
  )
}
