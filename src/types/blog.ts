/** Database row shape (snake_case) — matches Supabase blog_posts table */
export interface DbBlogPost {
  id: string;
  slug: string;
  title: string;
  seo_title: string | null;
  meta_description: string;
  meta_keywords: string | null;
  excerpt: string;
  hero_image: string | null;
  hero_image_alt: string | null;
  content: string;
  reading_time_minutes: number;
  author_id: string | null;
  category_id: string | null;
  tag_ids: string[] | null;
  og_image: string | null;
  canonical_url: string | null;
  schema_type: string;
  schema_json: Record<string, unknown> | null;
  faq_items: FaqItem[] | null;
  internal_links: string[] | null;
  sources: SourceItem[] | null;
  status: "draft" | "published";
  is_published: boolean;
  is_pillar: boolean;
  cluster_id: string | null;
  published_at: string | null;
  updated_at: string;
  created_at: string;
}

/** Frontend shape (camelCase) */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seoTitle: string | null;
  metaDescription: string;
  metaKeywords: string | null;
  excerpt: string;
  heroImage: string | null;
  heroImageAlt: string | null;
  content: string;
  readingTimeMinutes: number;
  authorId: string | null;
  categoryId: string | null;
  tagIds: string[] | null;
  ogImage: string | null;
  canonicalUrl: string | null;
  schemaType: string;
  schemaJson: Record<string, unknown> | null;
  faqItems: FaqItem[] | null;
  internalLinks: string[] | null;
  sources: SourceItem[] | null;
  status: "draft" | "published";
  isPublished: boolean;
  isPillar: boolean;
  clusterId: string | null;
  publishedAt: string | null;
  updatedAt: string;
  createdAt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SourceItem {
  title: string;
  url: string;
}
