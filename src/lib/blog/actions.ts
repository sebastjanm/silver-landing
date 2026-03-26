"use server";

import { supabase } from "@/lib/supabase/client";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { toFrontend, toDb } from "@/lib/blog/data-mapper";
import type { DbBlogPost, BlogPost } from "@/types/blog";
import { revalidatePath } from "next/cache";

/** Fetch all published posts, ordered by published_at desc. Public client (RLS). */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("is_published", true)
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) {
      console.warn(`Failed to fetch posts: ${error.message}`);
      return [];
    }
    return (data as DbBlogPost[]).map(toFrontend);
  } catch {
    console.warn("Supabase unreachable — returning empty posts");
    return [];
  }
}

/** Fetch a single published post by slug. Public client (RLS). */
export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .eq("status", "published")
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // not found
    throw new Error(`Failed to fetch post: ${error.message}`);
  }
  return toFrontend(data as DbBlogPost);
}

/** Fetch all published slugs for generateStaticParams. Returns [] on DB error (allows build without live DB). */
export async function getAllPublishedSlugs(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("is_published", true)
      .eq("status", "published");

    if (error) {
      console.warn(`Failed to fetch slugs: ${error.message}`);
      return [];
    }
    return (data ?? []).map((row) => row.slug);
  } catch {
    console.warn("Supabase unreachable — returning empty slugs for build");
    return [];
  }
}

/** Create a post. Admin client (bypasses RLS). */
export async function createPost(
  postData: Partial<BlogPost>
): Promise<BlogPost> {
  const dbData = toDb(postData);

  // Auto-publish logic
  if (dbData.is_published && !dbData.published_at) {
    dbData.published_at = new Date().toISOString();
    dbData.status = "published";
  }

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .insert(dbData)
    .select()
    .single();

  if (error) throw new Error(`Failed to create post: ${error.message}`);

  revalidatePath("/blog");
  return toFrontend(data as DbBlogPost);
}

/** Update a post. Admin client (bypasses RLS). */
export async function updatePost(
  id: string,
  postData: Partial<BlogPost>
): Promise<BlogPost> {
  const dbData = toDb(postData);

  // Auto-publish: if is_published flips to true, set status + published_at
  if (dbData.is_published === true) {
    dbData.status = "published";
    if (!dbData.published_at) {
      // Only set published_at if not already set in DB
      const { data: existing } = await supabaseAdmin
        .from("blog_posts")
        .select("published_at")
        .eq("id", id)
        .single();

      if (!existing?.published_at) {
        dbData.published_at = new Date().toISOString();
      }
    }
  }

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .update(dbData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(`Failed to update post: ${error.message}`);

  revalidatePath("/blog");
  revalidatePath(`/blog/${data.slug}`);
  return toFrontend(data as DbBlogPost);
}

/** Delete a post. Admin client (bypasses RLS). */
export async function deletePost(id: string): Promise<void> {
  // Get slug first for revalidation
  const { data: existing } = await supabaseAdmin
    .from("blog_posts")
    .select("slug")
    .eq("id", id)
    .single();

  const { error } = await supabaseAdmin
    .from("blog_posts")
    .delete()
    .eq("id", id);

  if (error) throw new Error(`Failed to delete post: ${error.message}`);

  revalidatePath("/blog");
  if (existing?.slug) {
    revalidatePath(`/blog/${existing.slug}`);
  }
}
