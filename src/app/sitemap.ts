import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.nakupsrebra.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/posvet`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cena-srebra`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: "daily", priority: 0.8 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  let locationPages: MetadataRoute.Sitemap = [];

  try {
    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, updated_at")
      .eq("is_published", true)
      .eq("status", "published");

    blogPages = (posts ?? []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    const { data: locations } = await supabase
      .from("locations")
      .select("slug, updated_at")
      .eq("status", "published");

    locationPages = (locations ?? []).map((loc) => ({
      url: `${baseUrl}/nakup-srebra/${loc.slug}`,
      lastModified: new Date(loc.updated_at),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch {
    console.warn("Supabase unreachable — sitemap will only include static pages");
  }

  return [...staticPages, ...blogPages, ...locationPages];
}
