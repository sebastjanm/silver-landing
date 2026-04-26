import { z } from "zod";

const faqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const sourceItemSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
});

/** Schema for creating a blog post via API (HTML content) */
export const createPostHtmlSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  content: z.string().min(1),
  metaDescription: z.string().min(1),
  excerpt: z.string().min(1),
  seoTitle: z.string().optional(),
  metaKeywords: z.string().optional(),
  heroImage: z.string().url().optional(),
  heroImageAlt: z.string().optional(),
  readingTimeMinutes: z.number().int().positive().optional(),
  categoryId: z.string().uuid().optional(),
  tagIds: z.array(z.string().uuid()).optional(),
  ogImage: z.string().url().optional(),
  canonicalUrl: z.string().url().optional(),
  schemaType: z.string().default("Article"),
  schemaJson: z.record(z.string(), z.unknown()).optional(),
  faqItems: z.array(faqItemSchema).optional(),
  internalLinks: z.array(z.string()).optional(),
  sources: z.array(sourceItemSchema).optional(),
  isPublished: z.boolean().default(false),
  isPillar: z.boolean().default(false),
  clusterId: z.string().uuid().optional(),
  publishedAt: z.string().datetime().optional(),
});

/** Schema for updating a blog post via API */
export const updatePostSchema = z.object({
  id: z.string().uuid(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/)
    .optional(),
  title: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  metaDescription: z.string().min(1).optional(),
  excerpt: z.string().min(1).optional(),
  seoTitle: z.string().optional(),
  metaKeywords: z.string().optional(),
  heroImage: z.string().url().nullable().optional(),
  heroImageAlt: z.string().nullable().optional(),
  readingTimeMinutes: z.number().int().positive().optional(),
  categoryId: z.string().uuid().nullable().optional(),
  tagIds: z.array(z.string().uuid()).nullable().optional(),
  ogImage: z.string().url().nullable().optional(),
  canonicalUrl: z.string().url().nullable().optional(),
  schemaType: z.string().optional(),
  schemaJson: z.record(z.string(), z.unknown()).nullable().optional(),
  faqItems: z.array(faqItemSchema).nullable().optional(),
  internalLinks: z.array(z.string()).nullable().optional(),
  sources: z.array(sourceItemSchema).nullable().optional(),
  isPublished: z.boolean().optional(),
  isPillar: z.boolean().optional(),
  clusterId: z.string().uuid().nullable().optional(),
});

/** Schema for deleting a blog post via API */
export const deletePostSchema = z.object({
  id: z.string().uuid(),
});

export type CreatePostHtmlInput = z.infer<typeof createPostHtmlSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
export type DeletePostInput = z.infer<typeof deletePostSchema>;
