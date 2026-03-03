import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pstxyaqvsohfumhnamii.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzdHh5YXF2c29oZnVtaG5hbWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NTk1ODcsImV4cCI6MjA4ODEzNTU4N30.603E87Ezb6yuoaH0IC2tADM4k-FgEH6xFkzQjBc1t4w';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON);

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    featured_image: string | null;
    meta_title: string | null;
    meta_description: string | null;
    status: 'published' | 'draft';
    created_at: string;
    updated_at: string;
}

/** Fetch all published posts (for blog listing page) */
export async function getPublishedPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabaseClient
        .from('blog_posts')
        .select('id, title, slug, featured_image, meta_description, created_at')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Supabase error fetching posts:', error.message);
        return [];
    }
    return data ?? [];
}

/** Fetch a single published post by slug (for individual post page) */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabaseClient
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

    if (error) {
        console.error('Supabase error fetching post:', error.message);
        return null;
    }
    return data;
}

/** Get all published slugs (for generateStaticParams) */
export async function getAllSlugs(): Promise<string[]> {
    const { data, error } = await supabaseClient
        .from('blog_posts')
        .select('slug')
        .eq('status', 'published');

    if (error) return [];
    return (data ?? []).map((p) => p.slug);
}
