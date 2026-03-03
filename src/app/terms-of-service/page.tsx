import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | SRV Creation IPTV India',
    description: 'Read the Terms of Service for SRV Creation IPTV. Understand your rights, obligations, and our service policies for India\'s premier IPTV provider.',
    keywords: 'SRV Creation terms of service, IPTV terms, IPTV India terms and conditions',
};

export default function TermsOfServicePage() {
    const sections = [
        {
            title: '1. Acceptance of Terms',
            content: 'By purchasing a subscription or using any service provided by SRV Creation IPTV ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. We reserve the right to update these terms at any time without prior notice. Continued use of the service constitutes your acceptance of any revised terms.',
        },
        {
            title: '2. Service Description',
            content: 'SRV Creation IPTV provides Internet Protocol Television (IPTV) streaming services including live television channels, video-on-demand (VOD) content, and related features. Access is provided via M3U playlists and Xtream Codes compatible with third-party IPTV player applications. We do not manufacture or distribute any IPTV player applications.',
        },
        {
            title: '3. Subscription & Payments',
            content: 'Subscriptions are available on a monthly, 6-month, or annual basis. All payments are final and non-refundable unless the service is demonstrably unavailable for more than 72 consecutive hours due to our fault. Prices are displayed in Indian Rupees (INR) and are subject to change. Payments are accepted via UPI, Paytm, Google Pay, PhonePe, Visa, Mastercard, and Cryptocurrency.',
        },
        {
            title: '4. Acceptable Use',
            content: 'Your subscription is for personal, non-commercial use only and is limited to the number of simultaneous connections specified in your plan (typically 1 device). You may not resell, redistribute, share, or sublicense your account credentials. Attempting to circumvent security measures, reverse-engineer our services, or use the service for illegal activities is strictly prohibited and will result in immediate account termination without refund.',
        },
        {
            title: '5. Content & Intellectual Property',
            content: 'SRV Creation IPTV acts as an intermediary technical service provider and does not own, produce, or control the content streams accessible through our platform. All content is subject to the copyright and intellectual property rights of their respective owners. Users are solely responsible for ensuring their use of the service complies with applicable laws in their jurisdiction.',
        },
        {
            title: '6. Service Availability & SLA',
            content: 'We target a 99.9% service uptime. Scheduled maintenance will be communicated via WhatsApp. We are not liable for service disruptions caused by third-party network outages, force majeure events, or issues with your internet connection or device. In the event of extended downtime (>72 hours) attributable to us, we will provide a service extension equivalent to the downtime period.',
        },
        {
            title: '7. Account Termination',
            content: 'We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any breach of these Terms of Service. Upon termination, your right to use the service will immediately cease. Provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.',
        },
        {
            title: '8. Disclaimer of Warranties',
            content: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY.',
        },
        {
            title: '9. Limitation of Liability',
            content: 'To the maximum extent permitted by applicable law, SRV Creation IPTV shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill. Our total liability to you for any claims arising from these terms shall not exceed the total amount you paid us in the 30 days preceding the claim.',
        },
        {
            title: '10. Governing Law',
            content: 'These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in India. If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full effect.',
        },
    ];

    return (
        <>
            {/* Header */}
            <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#1a73e8', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <nav className="navbar">
                    <Link href="/" className="navbar-logo" style={{ color: '#ffffff', textDecoration: 'none' }}>SRV Creation IPTV</Link>
                    <ul className="navbar-links">
                        <li><Link href="/" style={{ color: 'rgba(255,255,255,0.85)' }}>Home</Link></li>
                        <li><Link href="/#plans" style={{ color: 'rgba(255,255,255,0.85)' }}>Pricing</Link></li>
                        <li><Link href="/setup-guide" style={{ color: 'rgba(255,255,255,0.85)' }}>Setup Guide</Link></li>
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
                    <div className="section-label" style={{ margin: '0 auto 20px' }}>Legal</div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '16px' }}>Terms of <span className="gradient-text">Service</span></h1>
                    <p style={{ maxWidth: '560px', margin: '0 auto', color: '#374151' }}>
                        Last updated: March 2026. Please read these terms carefully before using our service.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ marginBottom: '40px', padding: '20px 24px', background: '#eef4ff', borderLeft: '4px solid #1a73e8', borderRadius: '8px', color: '#374151' }}>
                            <strong>Summary:</strong> By using SRV Creation IPTV, you agree to these terms. Your subscription is for personal use only (1 device). Payments are non-refundable. Account sharing is not permitted. We aim for 99.9% uptime.
                        </p>

                        <div className="faq-list" style={{ marginTop: 0 }}>
                            {sections.map((section, i) => (
                                <div key={i} className="card faq-item">
                                    <h3 style={{ fontSize: '1.05rem', marginBottom: '12px', color: '#1a73e8' }}>{section.title}</h3>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>{section.content}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '48px', padding: '28px', background: '#f0f5ff', borderRadius: '16px', border: '1px solid #dce8ff', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '12px' }}>Questions about our Terms?</h3>
                            <p style={{ marginBottom: '20px' }}>Our team is available 24/7 to clarify any doubts.</p>
                            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <span className="footer-logo">SRV Creation IPTV</span>
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
