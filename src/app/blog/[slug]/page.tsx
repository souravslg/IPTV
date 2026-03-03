import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/supabase';

interface Props {
    params: Promise<{ slug: string }>;
}

// Pre-generate all published post pages at build time (+ ISR for new ones)
export async function generateStaticParams() {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export const revalidate = 60;

// Dynamic SEO meta per post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.meta_title || post.title,
        description: post.meta_description || '',
        openGraph: {
            title: post.meta_title || post.title,
            description: post.meta_description || '',
            url: `https://www.iptvindia.co.in/blog/${post.slug}`,
            images: post.featured_image ? [{ url: post.featured_image }] : [],
            type: 'article',
            publishedTime: post.created_at,
            modifiedTime: post.updated_at,
        },
        alternates: {
            canonical: `https://www.iptvindia.co.in/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    const publishDate = new Date(post.created_at).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'long', year: 'numeric',
    });

    return (
        <>
            {/* Header */}
            <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#1a73e8', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <nav className="navbar">
                    <Link href="/" className="navbar-logo" style={{ color: '#ffffff', textDecoration: 'none' }}>SRV Creation IPTV</Link>
                    <ul className="navbar-links">
                        <li><Link href="/" style={{ color: 'rgba(255,255,255,0.85)' }}>Home</Link></li>
                        <li><Link href="/#features" style={{ color: 'rgba(255,255,255,0.85)' }}>Features</Link></li>
                        <li><Link href="/#plans" style={{ color: 'rgba(255,255,255,0.85)' }}>Pricing</Link></li>
                        <li><Link href="/blog" style={{ color: '#ffffff', fontWeight: 700 }}>Blog</Link></li>
                        <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.85)' }}>Contact</Link></li>
                    </ul>
                    <a href="https://api.whatsapp.com/send/?phone=919144015850&text=I+want+Free+Trial&type=phone_number&app_absent=" className="btn" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 22px', minHeight: '38px', fontSize: '0.875rem', background: '#ffffff', color: '#1a73e8', fontWeight: 700, borderRadius: '100px' }}>
                        Get Free Trial
                    </a>
                </nav>
            </header>

            {/* Article */}
            <main>

                {/* Featured Image */}
                {post.featured_image && (
                    <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden' }}>
                        <Image
                            src={post.featured_image}
                            alt={post.title}
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                            sizes="100vw"
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6))' }} />
                    </div>
                )}

                {/* Post Content */}
                <article style={{ maxWidth: '820px', margin: '0 auto', padding: '48px 24px 80px' }}>

                    {/* Breadcrumb */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '13px', color: '#6b7a99' }}>
                        <Link href="/" style={{ color: '#1a73e8', textDecoration: 'none' }}>Home</Link>
                        <span>›</span>
                        <Link href="/blog" style={{ color: '#1a73e8', textDecoration: 'none' }}>Blog</Link>
                        <span>›</span>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</span>
                    </div>

                    {/* Meta */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                        <span style={{ background: '#eef4ff', color: '#1a73e8', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '100px' }}>
                            Article
                        </span>
                        <span style={{ fontSize: '13px', color: '#6b7a99' }}>📅 {publishDate}</span>
                    </div>

                    {/* Title */}
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: '36px', color: '#0d1421', letterSpacing: '-0.5px' }}>
                        {post.title}
                    </h1>

                    {/* Rich content from Quill editor */}
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
                        style={{
                            fontSize: '1.05rem',
                            lineHeight: 1.85,
                            color: '#1f2937',
                        }}
                    />

                    {/* Back link */}
                    <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid #dce8ff' }}>
                        <Link href="/blog" className="btn btn-primary" style={{ fontSize: '0.875rem' }}>
                            ← Back to Blog
                        </Link>
                    </div>

                </article>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <span className="footer-logo">SRV Creation IPTV</span>
                    <div className="footer-links">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/blog">Blog</Link>
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
