import type { DbBlogPost, BlogPost } from "@/types/blog";

/** Convert DB row (snake_case) → frontend shape (camelCase) */
export function toFrontend(row: DbBlogPost): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    seoTitle: row.seo_title,
    metaDescription: row.meta_description,
    metaKeywords: row.meta_keywords,
    excerpt: row.excerpt,
    heroImage: row.hero_image,
    heroImageAlt: row.hero_image_alt,
    content: row.content,
    readingTimeMinutes: row.reading_time_minutes,
    authorId: row.author_id,
    categoryId: row.category_id,
    tagIds: row.tag_ids,
    ogImage: row.og_image,
    canonicalUrl: row.canonical_url,
    schemaType: row.schema_type,
    schemaJson: row.schema_json,
    faqItems: row.faq_items,
    internalLinks: row.internal_links,
    sources: row.sources,
    status: row.status,
    isPublished: row.is_published,
    isPillar: row.is_pillar,
    clusterId: row.cluster_id,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    createdAt: row.created_at,
  };
}

/** Convert frontend shape (camelCase) → DB row (snake_case) for inserts/updates */
export function toDb(post: Partial<BlogPost>): Partial<DbBlogPost> {
  const result: Record<string, unknown> = {};

  if (post.slug !== undefined) result.slug = post.slug;
  if (post.title !== undefined) result.title = post.title;
  if (post.seoTitle !== undefined) result.seo_title = post.seoTitle;
  if (post.metaDescription !== undefined)
    result.meta_description = post.metaDescription;
  if (post.metaKeywords !== undefined)
    result.meta_keywords = post.metaKeywords;
  if (post.excerpt !== undefined) result.excerpt = post.excerpt;
  if (post.heroImage !== undefined) result.hero_image = post.heroImage;
  if (post.heroImageAlt !== undefined)
    result.hero_image_alt = post.heroImageAlt;
  if (post.content !== undefined) result.content = post.content;
  if (post.readingTimeMinutes !== undefined)
    result.reading_time_minutes = post.readingTimeMinutes;
  if (post.authorId !== undefined) result.author_id = post.authorId;
  if (post.categoryId !== undefined) result.category_id = post.categoryId;
  if (post.tagIds !== undefined) result.tag_ids = post.tagIds;
  if (post.ogImage !== undefined) result.og_image = post.ogImage;
  if (post.canonicalUrl !== undefined)
    result.canonical_url = post.canonicalUrl;
  if (post.schemaType !== undefined) result.schema_type = post.schemaType;
  if (post.schemaJson !== undefined) result.schema_json = post.schemaJson;
  if (post.faqItems !== undefined) result.faq_items = post.faqItems;
  if (post.internalLinks !== undefined)
    result.internal_links = post.internalLinks;
  if (post.sources !== undefined) result.sources = post.sources;
  if (post.status !== undefined) result.status = post.status;
  if (post.isPublished !== undefined) result.is_published = post.isPublished;
  if (post.isPillar !== undefined) result.is_pillar = post.isPillar;
  if (post.clusterId !== undefined) result.cluster_id = post.clusterId;
  if (post.publishedAt !== undefined) result.published_at = post.publishedAt;

  return result as Partial<DbBlogPost>;
}
