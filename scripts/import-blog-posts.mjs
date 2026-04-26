/**
 * Import extracted blog posts into Supabase blog_posts table.
 *
 * Usage: node scripts/import-blog-posts.mjs
 * Requires: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local
 */

import { readFileSync } from "fs";
import { join } from "path";
import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

// Load .env.local
config({ path: join(process.cwd(), ".env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const INPUT = join(process.cwd(), "scripts", "blog-posts.json");
const posts = JSON.parse(readFileSync(INPUT, "utf-8"));

console.log(`Importing ${posts.length} posts into Supabase...\n`);

// Batch insert in chunks of 10
const BATCH_SIZE = 10;
let imported = 0;
let skipped = 0;
let errors = 0;

for (let i = 0; i < posts.length; i += BATCH_SIZE) {
  const batch = posts.slice(i, i + BATCH_SIZE);

  const { data, error } = await supabase
    .from("blog_posts")
    .upsert(batch, { onConflict: "slug" })
    .select("slug");

  if (error) {
    console.error(`Batch ${i / BATCH_SIZE + 1} error:`, error.message);
    errors += batch.length;

    // Try inserting one by one to identify the problematic post
    for (const post of batch) {
      const { error: singleError } = await supabase
        .from("blog_posts")
        .upsert(post, { onConflict: "slug" });

      if (singleError) {
        console.error(`  ✗ ${post.slug}: ${singleError.message}`);
        errors++;
      } else {
        imported++;
        console.log(`  ✓ ${post.slug}`);
      }
    }
  } else {
    imported += data.length;
    data.forEach((d) => console.log(`  ✓ ${d.slug}`));
  }
}

// Verify count
const { count } = await supabase
  .from("blog_posts")
  .select("*", { count: "exact", head: true })
  .eq("is_published", true);

console.log(`\nDone.`);
console.log(`  Imported: ${imported}`);
console.log(`  Errors: ${errors}`);
console.log(`  Total published in DB: ${count}`);
