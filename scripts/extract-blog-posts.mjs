/**
 * Extract blog posts from legacy HTML files → JSON for Supabase import.
 *
 * Usage: node scripts/extract-blog-posts.mjs
 * Output: scripts/blog-posts.json
 */

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import * as cheerio from "cheerio";

const BLOG_DIR = join(process.cwd(), "_legacy", "blog");
const OUTPUT = join(process.cwd(), "scripts", "blog-posts.json");

const files = readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith(".html") && f !== "index.html")
  .sort();

console.log(`Found ${files.length} blog articles to extract.\n`);

const posts = [];
const warnings = [];

for (const file of files) {
  const slug = basename(file, ".html");
  const html = readFileSync(join(BLOG_DIR, file), "utf-8");
  const $ = cheerio.load(html);

  // --- Metadata ---
  const title =
    $("h1").first().text().trim() || $("title").text().trim() || slug;
  const seoTitle = $("title").text().trim() || null;
  const metaDescription =
    $('meta[name="description"]').attr("content") || "";
  const metaKeywords =
    $('meta[name="keywords"]').attr("content") || null;
  const canonicalUrl =
    $('link[rel="canonical"]').attr("href") || null;
  const ogImage =
    $('meta[property="og:image"]').attr("content") || null;

  // --- JSON-LD ---
  let datePublished = null;
  let dateModified = null;
  let schemaJson = null;

  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const data = JSON.parse($(el).html());
      if (data["@type"] === "Article") {
        datePublished = data.datePublished || null;
        dateModified = data.dateModified || null;
        schemaJson = data;
      }
    } catch {
      // skip invalid JSON-LD
    }
  });

  // --- Hero image ---
  const firstImg = $("article img, .container img, body img").first();
  const heroImage = firstImg.attr("src") || ogImage || null;
  const heroImageAlt = firstImg.attr("alt") || null;

  // --- Article body HTML ---
  let content = "";

  // Try <article> tag first
  const articleEl = $("article");
  if (articleEl.length) {
    content = articleEl.html().trim();
  } else {
    // Fallback: grab everything in body, strip nav/footer/style/script
    const body = $("body");
    if (body.length) {
      body.find("nav, footer, style, script").remove();
      content = body.html().trim();
    } else {
      // Raw HTML without structure (like the IEDC article)
      content = html;
    }
  }

  // Clean up extracted content
  const $content = cheerio.load(content);
  $content("style").remove();

  // Unwrap legacy .container divs — keep children, remove wrapper
  $content(".container").each((_, el) => {
    const inner = $content(el).html();
    $content(el).replaceWith(inner);
  });

  content = $content.html().trim();

  // --- Excerpt ---
  const $body = cheerio.load(content);
  const firstP = $body("p").first().text().trim();
  const excerpt = firstP.length > 300 ? firstP.slice(0, 297) + "..." : firstP;

  // --- Reading time ---
  const wordCount = $body.text().split(/\s+/).length;
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 200));

  // --- FAQ items ---
  const faqItems = [];
  $body("details").each((_, el) => {
    const question = $body(el).find("summary").text().trim();
    const answer = $body(el).find("p").text().trim();
    if (question && answer) {
      faqItems.push({ question, answer });
    }
  });

  // --- Sources ---
  const sources = [];
  $body(".sources li, .viri li").each((_, el) => {
    const a = $body(el).find("a");
    if (a.length) {
      sources.push({ title: a.text().trim(), url: a.attr("href") || "" });
    } else {
      sources.push({ title: $body(el).text().trim(), url: "" });
    }
  });

  // --- Internal links ---
  const internalLinks = [];
  $body('a[href^="/"]').each((_, el) => {
    const href = $body(el).attr("href");
    if (href && !internalLinks.includes(href)) {
      internalLinks.push(href);
    }
  });

  // --- Validation warnings ---
  if (!metaDescription)
    warnings.push(`${slug}: missing meta description`);
  if (!content || content.length < 100)
    warnings.push(`${slug}: content too short (${content.length} chars)`);
  if (!heroImage) warnings.push(`${slug}: no hero image found`);
  if (!datePublished) warnings.push(`${slug}: no datePublished in JSON-LD`);

  posts.push({
    slug,
    title,
    seo_title: seoTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
    excerpt,
    hero_image: heroImage,
    hero_image_alt: heroImageAlt,
    content,
    reading_time_minutes: readingTimeMinutes,
    og_image: ogImage,
    canonical_url: canonicalUrl,
    schema_type: "Article",
    schema_json: schemaJson,
    faq_items: faqItems.length > 0 ? faqItems : null,
    internal_links: internalLinks.length > 0 ? internalLinks : null,
    sources: sources.length > 0 ? sources : null,
    status: "published",
    is_published: true,
    is_pillar: false,
    published_at: datePublished
      ? new Date(datePublished).toISOString()
      : new Date().toISOString(),
    updated_at: dateModified
      ? new Date(dateModified).toISOString()
      : new Date().toISOString(),
  });
}

// Write output
writeFileSync(OUTPUT, JSON.stringify(posts, null, 2));

console.log(`Extracted ${posts.length} posts → ${OUTPUT}`);
console.log(`\nStats:`);
console.log(`  With FAQ items: ${posts.filter((p) => p.faq_items).length}`);
console.log(`  With sources: ${posts.filter((p) => p.sources).length}`);
console.log(
  `  With hero image: ${posts.filter((p) => p.hero_image).length}`
);
console.log(
  `  With datePublished: ${posts.filter((p) => p.schema_json?.datePublished).length}`
);
console.log(
  `  Avg reading time: ${Math.round(posts.reduce((s, p) => s + p.reading_time_minutes, 0) / posts.length)} min`
);

if (warnings.length) {
  console.log(`\n⚠ Warnings (${warnings.length}):`);
  warnings.forEach((w) => console.log(`  - ${w}`));
}
