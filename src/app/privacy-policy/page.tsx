import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | SRV Creation IPTV India',
    description: 'Read the Privacy Policy for SRV Creation IPTV. We are committed to protecting your personal data and privacy in compliance with Indian data protection laws.',
    keywords: 'SRV Creation privacy policy, IPTV India privacy, data protection IPTV India',
};

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: '1. Information We Collect',
            content: 'We collect minimal personal information necessary to provide our service. This includes: (a) Account information — your name, email address, phone number (WhatsApp), and payment transaction reference; (b) Device information — device type and IP address used to access the service, for security and troubleshooting purposes; (c) Usage data — anonymous analytics about channel and VOD usage to improve service quality. We do NOT collect or store payment card details — all transactions are processed by third-party payment gateways.',
        },
        {
            title: '2. How We Use Your Information',
            content: 'Your information is used exclusively to: deliver and manage your IPTV subscription; send service-related communications via WhatsApp or email (activation, renewal reminders, maintenance alerts); troubleshoot technical issues; prevent fraud and unauthorized account sharing; and improve service quality through anonymized analytics. We do not use your data for advertising purposes or sell it to third parties.',
        },
        {
            title: '3. Data Sharing & Third Parties',
            content: 'We do not sell, trade, rent, or otherwise transfer your personal information to third parties, except: (a) Payment processors (UPI platforms, card networks) who process transactions under their own privacy policies; (b) Cloud hosting providers who store data under strict confidentiality agreements; (c) When required by Indian law, court orders, or government authorities. All third-party service providers are contractually obligated to protect your data.',
        },
        {
            title: '4. Data Storage & Security',
            content: 'Your personal data is stored on secure servers with industry-standard encryption. We implement appropriate technical and organizational measures including SSL/TLS encryption, access controls, and regular security audits to protect against unauthorized access, disclosure, alteration, or destruction. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.',
        },
        {
            title: '5. Data Retention',
            content: 'We retain your personal data for as long as your account is active or as needed to provide services. After account cancellation, basic account records are retained for 12 months for legal and fraud-prevention purposes, then securely deleted. Payment transaction references are retained for 7 years as required by Indian financial regulations. You may request deletion of your personal data at any time, subject to legal retention requirements.',
        },
        {
            title: '6. Cookies & Tracking',
            content: 'Our website uses minimal, essential cookies necessary for functionality (session management, security). We do not use advertising or tracking cookies. We use anonymous analytics (non-personally identifiable) to understand website traffic and improve user experience. You may disable cookies in your browser settings, but this may affect website functionality.',
        },
        {
            title: '7. Your Rights',
            content: 'You have the right to: (a) Access — request a copy of the personal data we hold about you; (b) Correction — request correction of inaccurate data; (c) Deletion — request deletion of your personal data (subject to legal requirements); (d) Portability — receive your data in a structured, machine-readable format; (e) Objection — object to specific processing of your data. To exercise these rights, contact us at sourav@iptvindia.co.in or via WhatsApp.',
        },
        {
            title: '8. Children\'s Privacy',
            content: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected personal information from a child under 18, we will take steps to delete that information promptly. Parents or guardians who believe their child has provided us personal information should contact us immediately.',
        },
        {
            title: '9. Changes to This Policy',
            content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make significant changes, we will notify you via WhatsApp or email at least 7 days before the changes take effect. The "Last Updated" date at the top of this page will always reflect the most recent revision. Your continued use of our services after any changes constitutes acceptance of the updated policy.',
        },
        {
            title: '10. Contact Us',
            content: 'If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us: Email: sourav@iptvindia.co.in | WhatsApp: +91 91440 15850 | Support: Available 24/7. We will respond to all legitimate privacy requests within 30 days.',
        },
    ];

    return (
        <>
            {/* Header */}
            <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#1a73e8', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <nav className="navbar">
                    <Link href="/" className="navbar-logo" style={{ color: '#ffffff', textDecoration: 'none' }}>SRV Creation</Link>
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
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '16px' }}>Privacy <span className="gradient-text">Policy</span></h1>
                    <p style={{ maxWidth: '560px', margin: '0 auto', color: '#374151' }}>
                        Last updated: March 2026. Your privacy is our priority. We collect minimal data and never sell it.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ marginBottom: '40px', padding: '20px 24px', background: '#eef4ff', borderLeft: '4px solid #1a73e8', borderRadius: '8px', color: '#374151' }}>
                            <strong>Quick Summary:</strong> We collect only essential info (name, phone, email) to run your subscription. We never sell your data. Payments are processed by third-party gateways — we never store card details. You can request data deletion at any time.
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
                            <h3 style={{ marginBottom: '12px' }}>Privacy Questions?</h3>
                            <p style={{ marginBottom: '20px' }}>Contact us anytime — we respond within 24 hours.</p>
                            <Link href="/contact" className="btn btn-primary">Contact Our Team</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <span className="footer-logo">SRV Creation</span>
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
