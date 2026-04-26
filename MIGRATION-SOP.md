# Migration SOP: Static HTML → Next.js + Supabase + Tailwind CSS 4

## 1. Recommended Target Architecture

### Stack

| Layer | Technology | Role |
|-------|-----------|------|
| Framework | Next.js 16.x (App Router) | Rendering, routing, metadata, sitemap |
| Styling | Tailwind CSS 4.x (CSS-first config, `@import "tailwindcss"`) | Design system, utility classes |
| Database | Supabase (Postgres + Auth + Storage + Edge Functions) | Content, subscribers, assets, auth |
| Deployment | Vercel (zero-config Next.js) | Hosting, serverless, preview deploys |
| Image CDN | Supabase Storage + Next.js `<Image>` | Optimized delivery |
| Email | Existing AgentMail API + Supabase Edge Functions | Lead capture, drip sequences |
| PDF | Supabase Storage (pre-generated) or on-demand via Edge Function | Lead magnet delivery |

### What Lives Where

**In Supabase (DB + Storage):**
- All page content (marketing pages, blog posts, location pages)
- Authors, categories, tags
- SEO metadata per page
- Schema markup configuration per page
- Lead capture entries (subscribers)
- PDF/asset metadata and files (Storage buckets)
- Email drip sequence state
- Slugs, publish status, dates

**In Code (Next.js repo):**
- Layout system (`app/layout.tsx`, nested layouts)
- Reusable UI components (nav, footer, CTA blocks, email capture form, FAQ accordion, stat grid, comparison table, highlight/warning/info boxes)
- Design tokens via Tailwind CSS 4 theme (colors, fonts, spacing — migrated from current CSS custom properties)
- Blog system: `DbBlogPost` ↔ `BlogPost` data mapper, Zod schemas, `sanitize-html` config, `withAdminAuth()`, Server Actions, REST API Route Handlers
- Article HTML stylesheet (scoped CSS for rendering raw HTML blog content with existing class names)
- Content rendering engine for marketing/location pages (maps structured content blocks → React components)
- Metadata generation logic (`generateMetadata` functions)
- Sitemap generation (`app/sitemap.ts`)
- Schema.org JSON-LD generation utilities
- Route definitions and data fetching (Public + Admin Supabase Clients)
- Internal linking logic

### Vercel Deployment Structure

- Production branch: `main` → nakupsrebra.com
- Preview deploys on every PR
- Environment variables for Supabase URL, anon key, AgentMail key, VPS webhook
- No custom build config needed — Vercel auto-detects Next.js
- Middleware for redirect rules (legacy URL preservation)
- ISR (Incremental Static Regeneration) with `revalidate` for content pages — pages are static at build time, revalidated on demand or on a timer

---

## 2. Dynamic Data Model

### Supabase Tables

#### `pages`
Core marketing pages (homepage, posvet, cena-srebra, vrednost-srebra, zlato-ali-srebro, srebro-vs-bitcoin, srebro-vs-etf, srebrni-kovanci, statistika-srebra-2026, hvala, vodnik landing page).

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | |
| slug | text (unique) | e.g. `posvet`, `cena-srebra` |
| page_type | enum | `marketing`, `comparison`, `tool`, `thankyou`, `guide` |
| title | text | Page title |
| seo_title | text | `<title>` override |
| meta_description | text | |
| og_image | text | URL or Storage path |
| canonical_url | text | Nullable, defaults to slug |
| schema_type | text | `WebPage`, `FAQPage`, `Article`, etc. |
| schema_json | jsonb | Additional schema.org properties |
| content_blocks | jsonb | Ordered array of typed content blocks (see Content Block Schema below) |
| status | enum | `draft`, `published`, `archived` |
| published_at | timestamptz | |
| updated_at | timestamptz | Auto-updated |
| created_at | timestamptz | |

#### `blog_posts`
Blog articles. 43 existing articles + listing page generated from query. Content stored as **HTML** (not structured blocks), sanitized on display.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | |
| slug | text (unique) | Current filename without `.html` |
| title | text | `<h1>` content |
| seo_title | text | `<title>` override, nullable |
| meta_description | text | `<meta name="description">` |
| meta_keywords | text | Nullable |
| excerpt | text | First paragraph or custom intro |
| hero_image | text | URL |
| hero_image_alt | text | |
| content | text | **Full HTML body** — sanitized with `sanitize-html` on render (allows YouTube/Vimeo iframes) |
| reading_time_minutes | int | Computed from word count |
| author_id | uuid (FK → authors) | |
| category_id | uuid (FK → categories) | Primary category |
| tag_ids | uuid[] | Array of tag references |
| og_image | text | |
| canonical_url | text | |
| schema_type | text | `Article`, `FAQPage`, `HowTo` |
| schema_json | jsonb | datePublished, dateModified, author, etc. |
| faq_items | jsonb | Array of `{question, answer}` for FAQ schema |
| internal_links | text[] | Array of slugs this post links to (for cluster tracking) |
| sources | jsonb | Array of `{title, url}` |
| status | text | `draft`, `published` |
| is_published | boolean | Convenience flag; when set to `true` via PUT, auto-sets status + published_at |
| is_pillar | boolean | Marks topical pillar pages |
| cluster_id | uuid (FK → categories) | Topical cluster grouping |
| published_at | timestamptz | Auto-set when is_published flips to true |
| updated_at | timestamptz | Last content update |
| created_at | timestamptz | |

**Blog system architecture (no Sanity, pure Supabase CMS):**

REST API:

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/blog` | None | List all published posts (camelCase JSON) |
| POST | `/api/blog` | Bearer `API_SECRET_KEY` | Create post (Markdown content) |
| POST | `/api/blog-html` | Bearer `API_SECRET_KEY` | Create post (HTML content) |
| PUT | `/api/blog` | Bearer `API_SECRET_KEY` | Update post (auto-publishes if `is_published: true`) |
| DELETE | `/api/blog` | Bearer `API_SECRET_KEY` | Delete post |

Data flow:

- **Types:** `DbBlogPost` (snake_case DB columns) ↔ `data-mapper` ↔ `BlogPost` (camelCase frontend) — a mapping layer converts between DB and frontend shapes
- **Admin:** Form → Zod validation → Server Action → Admin Supabase Client → `revalidatePath` / `revalidateTag`
- **Public:** Page → Server Action → Public Supabase Client (RLS enforced) → ISR cache
- **API:** Bearer auth against `API_SECRET_KEY` env var → Zod validation → Admin Supabase Client → revalidate → JSON response

Key implementation details:

- Content stored as HTML in `content` column, **sanitized with `sanitize-html` on display** (allowlist includes YouTube/Vimeo iframes)
- PUT auto-publishes: if request includes `is_published: true`, sets `status = 'published'` and `published_at = now()` if not already set
- Admin auth uses `withAdminAuth()` role check; API auth uses Bearer token against `API_SECRET_KEY` env var
- All request bodies validated with Zod schemas before DB operations

#### `categories`
Topical clusters for blog organization.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | |
| slug | text (unique) | |
| name | text | Slovenian name |
| description | text | For category listing pages |
| parent_id | uuid (FK → categories) | Nullable, for subcategories |
| seo_title | text | |
| meta_description | text | |

Seed categories based on existing content clusters:
- `cene-in-trg` (prices & market)
- `nakup-in-prodaja` (buying & selling)
- `davki-in-zakonodaja` (taxes & regulation)
- `primerjave` (comparisons — vs bitcoin, vs ETF, vs real estate)
- `strategije` (strategies — DCA, portfolio)
- `zgodbe-in-zgodovine` (stories & history)
- `zaloge-in-ponudba` (supply & reserves)
- `zacetniki` (beginners)

#### `authors`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | |
| slug | text (unique) | |
| name | text | |
| bio | text | |
| avatar_url | text | |
| credentials | text | Trust signals |
| schema_json | jsonb | Person schema properties |

#### `locations`
Location landing pages (Ljubljana, Maribor, Celje + future cities).

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | |
| slug | text (unique) | `ljubljana`, `maribor`, `celje` |
| city_name | text | |
| seo_title | text | |
| meta_description | text | |
| content_blocks | jsonb | |
| schema_json | jsonb | LocalBusiness or Service schema |
| status | enum | `draft`, `published` |
| published_at | timestamptz | |
| updated_at | timestamptz | |

#### `subscribers`
Replaces `/tmp` file storage and VPS webhook.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | |
| email | text (unique) | |
| source | text | `lead_magnet`, `posvet`, `blog` |
| signup_at | timestamptz | |
| emails_sent | jsonb | Array of `{email_id, sent_at}` |
| drip_status | enum | `active`, `completed`, `unsubscribed` |
| last_email_at | timestamptz | |

#### `guides`
PDF lead magnets and downloadable resources.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid (PK) | |
| slug | text (unique) | |
| title | text | |
| description | text | |
| file_url | text | Supabase Storage URL |
| landing_page_id | uuid (FK → pages) | Nullable |
| download_count | int | |
| created_at | timestamptz | |

### Content Block Schema (pages and locations only)

The `content_blocks` JSONB column on `pages` and `locations` tables stores an ordered array of typed blocks. Each block has a `type` and `data` field. This is used for marketing pages and location pages only — **blog posts store raw HTML in the `content` column instead**.

```
Block types:
- paragraph: { text: string (with inline HTML: <strong>, <em>, <a>) }
- heading: { level: 2|3, text: string, id: string (auto-generated anchor) }
- image: { src: string, alt: string, caption?: string }
- list: { ordered: boolean, items: string[] }
- table: { headers: string[], rows: string[][], highlight_column?: number }
- highlight_box: { title?: string, paragraphs: string[] }
- warning_box: { paragraphs: string[] }
- info_box: { paragraphs: string[] }
- stat_grid: { items: { number: string, label: string }[] }
- cta: { title: string, text: string, button_text: string, button_url: string }
- faq: { items: { question: string, answer: string }[] }
- sources: { items: { title: string, url: string }[] }
- html: { content: string } — escape hatch for complex one-off blocks
```

---

## 3. Routing and Rendering

### Route Map

| Current URL | Next.js Route | Data Source |
|-------------|--------------|-------------|
| `/` | `app/page.tsx` | `pages` table (slug: `homepage`) |
| `/posvet` | `app/posvet/page.tsx` | `pages` table (slug: `posvet`) |
| `/cena-srebra` | `app/cena-srebra/page.tsx` | `pages` table |
| `/vrednost-srebra` | `app/vrednost-srebra/page.tsx` | `pages` table |
| `/zlato-ali-srebro` | `app/zlato-ali-srebro/page.tsx` | `pages` table |
| `/srebro-vs-bitcoin` | `app/srebro-vs-bitcoin/page.tsx` | `pages` table |
| `/srebro-vs-etf` | `app/srebro-vs-etf/page.tsx` | `pages` table |
| `/srebrni-kovanci` | `app/srebrni-kovanci/page.tsx` | `pages` table |
| `/statistika-srebra-2026` | `app/statistika-srebra-2026/page.tsx` | `pages` table |
| `/hvala` | `app/hvala/page.tsx` | `pages` table |
| `/nalozbe/nalozeno-srebro` | `app/nalozbe/[slug]/page.tsx` | `pages` table (page_type: `marketing`) |
| `/blog` | `app/blog/page.tsx` | Query all published `blog_posts` (ordered by date). Server component, ISR revalidate 5 min. Renders `BlogContent` (featured post + card grid) |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | `blog_posts` table. Dynamic route, generates SEO metadata via `generateMetadata`, sanitizes HTML content before rendering |
| `/api/blog` | `app/api/blog/route.ts` | GET: list published posts (camelCase). POST: create post (Markdown). PUT: update post. DELETE: delete post. Bearer auth on mutations |
| `/api/blog-html` | `app/api/blog-html/route.ts` | POST: create post (HTML content). Bearer auth |
| `/nakup-srebra/[slug]` | `app/nakup-srebra/[slug]/page.tsx` | `locations` table |
| `/vodnik/vodnik-srebro` | `app/vodnik/[slug]/page.tsx` | `pages` table + `guides` table |
| `/api/capture` | `app/api/capture/route.ts` | `subscribers` table, AgentMail API |

**Decision: static routes vs dynamic catch-all.** The root marketing pages (`/posvet`, `/cena-srebra`, etc.) have fixed URLs that must not change. Use individual route files per page, each fetching from the `pages` table by slug. This keeps URLs explicit and avoids accidental route conflicts. The blog and locations use dynamic `[slug]` segments.

### Rendering Strategy

- Marketing/location pages: **ISR** with `revalidate: 3600` (1 hour) or on-demand revalidation via Supabase webhook → Vercel revalidation API
- Blog listing (`/blog`): Server component, **ISR with `revalidate: 300`** (5 min). Renders `BlogContent` component with featured post + card grid
- Blog article (`/blog/[slug]`): Dynamic route with `generateStaticParams`. Fetches post from `blog_posts`, **sanitizes HTML content with `sanitize-html`** before rendering via `dangerouslySetInnerHTML`
- `/api/capture`: Route Handler (POST only, replaces current serverless function)
- `/api/blog` and `/api/blog-html`: Route Handlers with Bearer auth for CMS operations
- `generateStaticParams` on `app/blog/[slug]` and `app/nakup-srebra/[slug]` to pre-render all known slugs at build time

### Blog Content Rendering

Blog posts store full HTML in the `content` column. On the frontend:

1. Fetch `DbBlogPost` (snake_case) from Supabase via Server Action using Public Supabase Client (RLS enforced)
2. Run through data-mapper to produce `BlogPost` (camelCase) — this is a type-safe conversion layer
3. Sanitize `content` HTML with `sanitize-html` (configured to allow: standard HTML tags, `<iframe>` for YouTube/Vimeo embeds, existing CSS classes for highlight-box/warning-box/stat-grid/etc.)
4. Render sanitized HTML in the article template

The article template wraps the HTML content with:
- Breadcrumb navigation
- Article header (title, meta, hero image)
- `<article>` body with sanitized HTML
- Related posts section
- CTA section
- Footer

**Styling for HTML content:** Define a `.prose` / article-scoped CSS that styles raw HTML elements (h2, h3, p, ul, ol, table, details, img) plus the existing custom classes (`.highlight-box`, `.warning-box`, `.info-box`, `.stat-grid`, `.comparison-table`, `.cta-section`, `.sources`). This preserves existing article formatting without needing to restructure content.

### Content Rendering Engine (pages and locations only)

Build a `<ContentRenderer blocks={content_blocks} />` component for marketing pages and location pages that maps each block type to a React component:
- `<HighlightBox>` → current `.highlight-box`
- `<WarningBox>` → current `.warning-box`
- `<InfoBox>` → current `.info-box`
- `<StatGrid>` → current `.stat-grid`
- `<ComparisonTable>` → current `.comparison-table`
- `<CTASection>` → current `.cta-section`
- `<FAQAccordion>` → current `<details>` blocks
- `<SourceList>` → current `.sources`
- `<ArticleImage>` → `next/image` with current styling

### URL Preservation and Redirects

Current site uses Vercel `cleanUrls: true` (`.html` extension stripped). New Next.js routes will produce the exact same clean URLs. No redirects needed for existing URLs as long as slugs are preserved exactly.

Add `middleware.ts` with a redirect map for any legacy paths that may have been indexed differently (e.g., if any URL ever had `.html` suffix in backlinks):

```
/blog/article-slug.html → /blog/article-slug (301)
/nakup-srebra/ljubljana.html → /nakup-srebra/ljubljana (301)
```

Also handle the current PDF URL:
```
/assets/vodnik-srebro-2026.pdf → Supabase Storage URL (301 or proxy)
```

---

## 4. SEO and GenAI Discoverability

### Automated Metadata

Every route exports `generateMetadata()` that:
1. Fetches the page/post record from Supabase
2. Returns `title`, `description`, `openGraph`, `twitter`, `alternates.canonical`
3. Falls back to site-wide defaults from a shared config

No manual meta tag insertion. All metadata is derived from DB fields.

### Automated Sitemap

`app/sitemap.ts` exports a function that:
1. Queries all published pages, posts, locations from Supabase
2. Returns URLs with `lastModified` from `updated_at`, `changeFrequency`, and `priority`
3. Replaces the current manually maintained `sitemap.xml`
4. Next.js generates `/sitemap.xml` automatically

### Automated robots.txt

`app/robots.ts` exports the robots config. Replaces the static file.

### Schema.org JSON-LD Generation

Build a `<JsonLd>` server component that:
1. Accepts the page/post record
2. Generates the appropriate schema based on `schema_type`:
   - `Article` → headline, datePublished, dateModified, author (Person), publisher (Organization), image
   - `FAQPage` → from `faq_items` field
   - `WebPage` → basic page schema
   - `LocalBusiness` → for location pages
   - `Organization` → site-wide (in root layout)
   - `BreadcrumbList` → generated from URL path
3. Renders as `<script type="application/ld+json">` in `<head>`

This replaces all manually embedded JSON-LD blocks.

### Internal Linking Model

Track `internal_links` (array of slugs) on each post. Use this to:
1. Auto-generate "Related articles" sections at the bottom of each post
2. Build topical cluster maps (pillar page → supporting articles)
3. Surface orphaned content (posts with no inbound internal links)

At render time, a `<RelatedPosts>` component queries posts that share the same `cluster_id` or appear in the current post's `internal_links`.

### Topical Clustering

Categories double as cluster definitions. Each category has one `is_pillar` post that serves as the hub. Supporting posts link back to the pillar. The pillar post links to all supporting posts.

Current content maps to these clusters:

| Cluster | Pillar Candidate | Supporting Articles |
|---------|-----------------|---------------------|
| Nakup in prodaja | `prvi-nakup-srebra-vodnik` | `5-napak-pri-nakupu-srebra`, `kje-kupiti-srebro-brez-ddv`, `srebrne-palice-ali-kovanci-nalozba`, `kako-preveriti-pristnost-srebra`, `kdaj-prodati-srebro-izstopna-strategija`, `elementum-odkup-kako-prodate-srebro-nazaj` |
| Cene in trg | `cena-srebra` (page) | `dva-trga-srebra-2026`, `srebro-padec-januar-2026`, `srebro-pomanjkanje-2026`, `primanjkljaj-srebra-2026`, `mesecni-pregled-dogajanj-na-trgu-srebra` |
| Primerjave | `zlato-ali-srebro` (page) | `srebro-vs-bitcoin-vs-nepremicnine`, `razmerje-zlato-srebro-85`, `razmerje-zlato-srebro-kdaj-kupiti`, `zlato-5000-ali-je-prepozno-za-srebro` |
| Strategije | `mesecno-varcevanje-srebro-strategija` | `30-odstotkov-prihrankov-v-srebro`, `koliko-srebra-za-mini-pokojnino`, `ali-se-splaca-kupiti-srebro-izracun-slovenija` |
| Davki in zakonodaja | `davki-na-srebro-slovenija` | `kje-kupiti-srebro-brez-ddv` |
| Zaloge in ponudba | `kaksne-so-svetovne-zaloge-srebra-na-svetu` | `kje-vse-so-rudniki-srebra-in-kaksne-so-zaloge`, `kitajska-omejuje-izvoz-srebra-cena-evropa` |

### Article Structure for GenAI Discoverability

The current articles already follow strong patterns for AI discoverability. Preserve and formalize these in the content model:

1. **Direct question-answer format** in headings (H2s that are questions AI can extract)
2. **FAQ sections** with structured `<details>` blocks → mapped to FAQPage schema
3. **Stat grids** with concrete numbers (AI extracts factual claims)
4. **Comparison tables** with clear winners marked
5. **Sources section** with cited references (AI trusts sourced content)
6. **Highlight boxes** for key takeaways (AI extracts summary statements)

Enforce in the content model:
- Every post must have `faq_items` (minimum 3)
- Every post must have `sources` (minimum 2)
- Every post should have at least one `stat_grid` or `table` block
- `excerpt` must be a factual, self-contained answer (not a teaser) — this is what AI models cite

### Content Freshness Workflow

- `updated_at` is exposed in schema.org `dateModified`
- Dashboard view in Supabase: posts sorted by `updated_at` descending, flag any post older than 90 days for review
- When content is refreshed, update `updated_at` (triggers sitemap update and schema dateModified)

---

## 5. Existing Blog Import Plan

Content is stored as HTML in the DB and sanitized with `sanitize-html` on display. The import extracts metadata fields from each HTML file and stores the `<article>` body HTML directly — no conversion to structured blocks or Markdown.

### Step 1: Audit

Inventory all 43 blog articles in `/blog/` (excluding `index.html`). For each file, catalog:
- Filename (= slug)
- `<title>` content
- `<meta name="description">` content
- `<meta name="keywords">` content
- Canonical URL
- OG image URL
- JSON-LD schema data (datePublished, dateModified, headline, image)
- H1
- Hero image URL and alt text
- First `<p>` in `<article>` (= excerpt)
- `<details>` blocks (= faq_items)
- `.sources ol li` items (= sources)
- All internal links (`href` values starting with `/`)
- Approximate word count

Automate with a Node.js script using `cheerio` — parse each file, extract the metadata fields above, and extract the `<article>` innerHTML verbatim as the `content` value.

### Step 2: Define Import Mapping

| HTML Source | DB Column |
|-------------|-----------|
| Filename minus `.html` | `slug` |
| `<title>` | `seo_title` |
| `<h1>` | `title` |
| `<meta name="description">` | `meta_description` |
| `<meta name="keywords">` | `meta_keywords` |
| JSON-LD `datePublished` | `published_at` |
| JSON-LD `dateModified` | `updated_at` |
| JSON-LD `image` or first `<img>` | `hero_image` |
| First `<img>` alt | `hero_image_alt` |
| First `<p>` in `<article>` | `excerpt` |
| Word count / 200 | `reading_time_minutes` |
| `<details>` blocks | `faq_items` (JSONB) |
| `.sources ol li` | `sources` (JSONB) |
| All internal `<a href="/...">` | `internal_links` (text[]) |
| **`<article>` innerHTML** | **`content`** (stored as-is, HTML) |

### Step 3: Extract and Store

For each of the 43 articles:

1. Parse the HTML file with cheerio
2. Extract all metadata fields per the mapping above
3. Extract the `<article>` innerHTML — **store it directly as the `content` value without conversion**. The HTML goes into the DB exactly as it exists in the source file. `sanitize-html` handles safety on display.
4. Strip only the wrapping page chrome (nav, footer, `<head>`, `<style>` blocks) — everything inside `<article>` stays untouched

No CSS class normalization, no image URL rewriting, no block conversion. The existing HTML is the content.

### Step 4: Batch Import

1. Run the extraction script on all 43 articles → JSON array of `DbBlogPost` objects (snake_case)
2. Spot-check 5 articles manually (one from each template pattern, one short, one long, one with tables)
3. Batch insert into `blog_posts` via the `/api/blog-html` endpoint (Bearer auth) or direct Supabase INSERT
4. Assign categories and cluster IDs (manually or by keyword matching)
5. Set all imported posts: `is_published: true`, `status: 'published'`

### Step 5: Validate

For each imported post:
1. Compare rendered Next.js page vs original HTML page side-by-side
2. Verify: title, meta description, OG tags, canonical URL match exactly
3. Verify: all headings present in correct order
4. Verify: all images render (no broken URLs)
5. Verify: all internal links work
6. Verify: FAQ section renders with same questions and answers
7. Verify: JSON-LD output matches original schema data
8. Verify: sources section complete
9. Run Lighthouse on 5 sample pages — compare scores to original

### Step 6: Redirect Safety

Since all current blog URLs are `/blog/{slug}` and the new routes will produce identical paths, no redirects needed for blog content.

Add `.html` suffix redirects in middleware as a safety net (in case any external backlink points to `/blog/slug.html`).

Preserve the current `/assets/vodnik-srebro-2026.pdf` URL — either serve from Supabase Storage via proxy or add a redirect.

---

## 6. Phased Implementation SOP

### Phase 0: Discovery and Setup (1 session)

1. Initialize Next.js 16.x project with App Router
2. Install Tailwind CSS 4.x — use the new CSS-first config (`@import "tailwindcss"` in `app/globals.css`), define theme in `@theme` block
3. Map current CSS custom properties to Tailwind theme:
   - `--navy: #1a365d` → `--color-navy: #1a365d` in `@theme`
   - `--gold: #b7791f` → `--color-gold: #b7791f` in `@theme`
   - `--serif` and `--sans` → `--font-serif` and `--font-sans` in `@theme`
4. Set up Supabase project, configure environment variables
5. Set up Vercel project linked to repo

### Phase 1: Database Schema (1 session)

1. Create all tables in Supabase (`pages`, `blog_posts`, `categories`, `authors`, `locations`, `subscribers`, `guides`)
2. Set up Row Level Security policies:
   - `blog_posts`: public read for `is_published = true`, admin write
   - `subscribers`: no public read, admin write
   - `pages`, `locations`: public read for `status = 'published'`, admin write
3. Create indexes on: `blog_posts.slug`, `blog_posts.status`, `blog_posts.is_published`, `blog_posts.published_at`, `pages.slug`, `locations.slug`, `subscribers.email`
4. Create the default author record (Organization: NakupSrebra.com)
5. Seed categories from the cluster list above
6. Set up `API_SECRET_KEY` environment variable for blog API Bearer auth

### Phase 2: Layout and Components (2-3 sessions)

1. Build root layout: nav (glass effect), footer, font loading (Libre Baskerville + Source Sans 3)
2. Build blog system:
   - `DbBlogPost` type (snake_case) and `BlogPost` type (camelCase) with data-mapper between them
   - Zod schemas for blog API request validation (create, update, delete)
   - `withAdminAuth()` middleware for admin role checks
   - Blog API Route Handlers (`/api/blog`, `/api/blog-html`) with Bearer auth
   - Server Actions for public reads (via Public Supabase Client with RLS) and admin writes (via Admin Supabase Client)
   - `sanitize-html` configuration (allowlist for YouTube/Vimeo iframes + article CSS classes)
3. Build `BlogContent` component (featured post hero + card grid for blog listing)
4. Build article page template (breadcrumb, header, sanitized HTML content, related posts, CTA, footer)
5. Build article stylesheet — `.prose`-style scoped CSS for rendering raw HTML content with existing classes (`.highlight-box`, `.warning-box`, `.info-box`, `.stat-grid`, `.comparison-table`, `.cta-section`, `.sources`, `details`)
6. Build `<ContentRenderer>` for marketing/location pages — the block-to-component mapper
7. Build all content block components: HighlightBox, WarningBox, InfoBox, StatGrid, ComparisonTable, CTASection, FAQAccordion, SourceList, ArticleImage
8. Build email capture form component (replaces inline JS in current pages)
9. Build `<JsonLd>` component
10. Build location page template

### Phase 3: Content Import (1-2 sessions)

1. Write metadata extraction script (Node.js + cheerio) — extracts SEO fields and `<article>` innerHTML from each HTML file
2. Run against all 43 blog articles — produces JSON array of `DbBlogPost` objects
3. Spot-check 5 extracted posts, verify metadata and content HTML are correct
4. Batch insert into `blog_posts` via `/api/blog-html` or direct Supabase INSERT
5. Assign categories and cluster IDs
6. Manually insert marketing pages (10 pages — these have unique structures, partial automation at best)
7. Insert location pages (3 pages)
8. Insert guide record for vodnik-srebro-2026.pdf

### Phase 4: Routes and Data Fetching (1-2 sessions)

1. Wire up all routes with Supabase queries (Public Client for reads, Admin Client for writes)
2. Implement `generateMetadata` on every route (blog articles pull from `blog_posts` SEO fields)
3. Implement `generateStaticParams` on dynamic routes (`/blog/[slug]`, `/nakup-srebra/[slug]`)
4. Implement `app/sitemap.ts` — query `blog_posts` (where `is_published = true`), `pages`, `locations`
5. Implement `app/robots.ts`
6. Implement `/api/capture` Route Handler (migrate from current `api/capture.js`)
7. Verify blog API endpoints work: test GET, POST (Markdown), POST HTML, PUT (with auto-publish), DELETE with Bearer auth
8. Verify on-demand revalidation: blog mutations trigger `revalidatePath('/blog')` and `revalidatePath('/blog/[slug]')`
9. Add redirect middleware for `.html` suffix and legacy paths

### Phase 5: SEO Validation (1 session)

1. Deploy to Vercel preview
2. Compare every URL's rendered output to the original static page:
   - Title tag
   - Meta description
   - Canonical URL
   - OG tags
   - JSON-LD schema
   - Heading structure
   - Content completeness
   - Image rendering
3. Run `site:nakupsrebra.com` in Google to catalog all indexed URLs
4. Verify every indexed URL has a working route in the new site
5. Compare Lighthouse scores (Performance, SEO, Accessibility) on 10 sample pages
6. Test email capture flow end-to-end

### Phase 6: Launch

1. Merge to `main`
2. Vercel deploys automatically
3. Verify DNS and domain settings unchanged
4. Submit updated sitemap in Google Search Console
5. Monitor Search Console for crawl errors over 48 hours
6. Monitor Vercel analytics for 404s

### Phase 7: Post-Launch (first 2 weeks)

1. Check Google Search Console daily for:
   - Index coverage drops
   - Crawl errors
   - Impressions/clicks changes
2. Check for 404s in Vercel logs
3. Verify all email capture still works (test signups)
4. Verify PDF download link works
5. Check AI search engines (Perplexity, ChatGPT) for continued citation
6. Decommission VPS webhook if subscriber storage is fully migrated to Supabase
7. Remove old static HTML files from repo once confident

---

## 7. Risks and QA Checklist

### SEO Risks

| Risk | Mitigation |
|------|-----------|
| Slug mismatch causes 404 for indexed page | Automated test: query all slugs from DB, compare against sitemap.xml from old site |
| Missing meta description on imported post | Extraction script validates all required fields are non-empty |
| JSON-LD schema changes format | Diff old vs new schema output per page before launch |
| Canonical URL points to wrong domain or path | Automated check: every canonical must start with `https://www.nakupsrebra.com/` |
| OG image URLs break | Validate all image URLs return 200 before launch |
| Sitemap missing pages | Compare new generated sitemap URL count vs old static sitemap URL count |
| Google sees new page structure as different content | Keep all visible text content identical — do not rewrite during migration |
| Temporary indexing drop after migration | Expected. Monitor for 2 weeks. Do not make content changes during this period |

### Content Risks

| Risk | Mitigation |
|------|-----------|
| `sanitize-html` strips needed HTML tags/attributes | Configure allowlist carefully — test with articles containing iframes, tables, details, custom CSS classes before launch |
| Image URLs break (external host goes down or path changes) | Verify all image URLs in imported content return 200 before launch |
| Image alt text lost during metadata extraction | Parser must extract `alt` attribute — validate none are empty |
| Two template patterns have different inline styles | Not a problem — HTML is stored as-is. The article stylesheet must support both patterns (CSS variable classes and hardcoded-color classes). Test rendering of articles from both template patterns |
| Metadata extraction misses a field (e.g., missing JSON-LD) | Run extractor against all 43 articles, log warnings for any file where a required field is empty or missing |

### Technical Risks

| Risk | Mitigation |
|------|-----------|
| ISR cache serves stale content | Blog listing: 5 min revalidate. Marketing pages: 1 hour. All mutations trigger `revalidatePath` |
| Supabase cold start slows TTFB | Use ISR — pages are pre-rendered, DB is only hit on revalidation |
| Blog API Bearer token leaked | Store `API_SECRET_KEY` in Vercel env vars only, never in code. Rotate if compromised |
| Data mapper type mismatch (snake_case ↔ camelCase) | Zod validates both DB and API shapes; mapper has explicit type assertions |
| Email capture breaks during migration | Test the `/api/capture` Route Handler independently before launch |
| PDF download URL changes | Add redirect from old path to new Storage URL |
| XSS via stored HTML content | `sanitize-html` runs on every render; allowlist is restrictive; no user-generated content in blog (admin-only writes) |

### Pre-Launch QA Checklist

- [ ] All 43 blog posts render correctly on preview deploy (sanitized HTML matches original visual output)
- [ ] All 10+ marketing pages render correctly
- [ ] All 3 location pages render correctly
- [ ] Blog listing page shows all published posts in correct date order (featured post + grid)
- [ ] Blog API: GET returns all published posts in camelCase JSON
- [ ] Blog API: POST (Markdown), POST HTML, PUT, DELETE all work with Bearer auth
- [ ] Blog API: PUT with `is_published: true` auto-sets status and published_at
- [ ] Blog API: requests without/with invalid Bearer token are rejected
- [ ] Zod validation rejects malformed blog API requests
- [ ] `sanitize-html` correctly allows YouTube/Vimeo iframes, tables, details, custom CSS classes
- [ ] `sanitize-html` correctly strips `<script>`, `<style>`, event handlers
- [ ] Email capture form works end-to-end (submit → AgentMail sends email → subscriber stored in Supabase)
- [ ] PDF download link works
- [ ] Every page has correct `<title>`, meta description, canonical, OG tags
- [ ] Every blog post has correct JSON-LD Article schema
- [ ] FAQ pages have correct FAQPage schema
- [ ] Sitemap.xml contains all published URLs
- [ ] robots.txt blocks `/hvala`
- [ ] No 404s when visiting all URLs from old sitemap
- [ ] `.html` suffix redirects work (301)
- [ ] Mobile responsive on all page types
- [ ] Lighthouse SEO score >= 95 on 5 sample pages
- [ ] Lighthouse Performance score >= 85 on 5 sample pages
- [ ] Google Search Console can fetch and render the homepage
- [ ] Internal links between articles work
- [ ] Nav and footer links work on all pages

### Post-Launch Monitoring Checklist

- [ ] Day 1-3: Check Search Console for crawl errors
- [ ] Day 1-7: Monitor impressions in Search Console (expect temporary fluctuation)
- [ ] Day 1-14: Check Vercel logs for 404 patterns
- [ ] Day 7: Test AI search engines for continued citations
- [ ] Day 14: Compare organic traffic vs pre-migration baseline
- [ ] Day 30: Full SEO audit — compare rankings for tracked keywords
