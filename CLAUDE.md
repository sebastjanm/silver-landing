# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NakupSrebra.com** — Slovenian-language marketing site for silver/gold investment consulting (domain: nakupsrebra.com, locale: `sl_SI`). All user-facing copy is in Slovenian.

Originally a static HTML site (now archived under `_legacy/`). The live codebase is **Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + Supabase**, deployed on Vercel. The full migration plan and rationale live in `MIGRATION-SOP.md` — read it when working on architecture-level changes (data model, routing strategy, content import).

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # next build
npm start        # next start
npm run lint     # next lint (eslint-config-next, flat config)
```

There are no tests in this repo. There is no `typecheck` script — `next build` is the source of truth for type errors (`tsc --noEmit` also works since `tsconfig.json` has `noEmit: true`).

### Content scripts (one-off, not part of the build)

```bash
node scripts/extract-blog-posts.mjs   # _legacy/blog/*.html → scripts/blog-posts.json (cheerio)
node scripts/import-blog-posts.mjs    # blog-posts.json → Supabase (needs .env.local)
```

`import-blog-posts.mjs` requires `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` and upserts on `slug`.

## Architecture

### Routing (App Router)

- One folder per marketing page under `src/app/` (`posvet`, `cena-srebra`, `vrednost-srebra`, `zlato-ali-srebro`, `srebro-vs-bitcoin`, `srebro-vs-etf`, `srebrni-kovanci`, `statistika-srebra-2026`, `hvala`, `vodnik/[slug]`). Marketing pages today are mostly hard-coded JSX, not block-rendered from the DB — `MIGRATION-SOP.md`'s `pages` table and `<ContentRenderer>` are aspirational and not yet wired up.
- `src/app/blog/page.tsx` — listing, ISR.
- `src/app/blog/[slug]/page.tsx` — article. Fetches via Server Action, sanitizes HTML, renders via `dangerouslySetInnerHTML`. `generateStaticParams` pulls slugs from Supabase.
- `src/app/nakup-srebra/[slug]/page.tsx` — location landing pages (Ljubljana, Maribor, Celje).
- `src/app/sitemap.ts` and `src/app/robots.ts` — generated, not static. Sitemap queries `blog_posts` and `locations`.
- `middleware.ts` — 301-redirects any `/foo.html` → `/foo` (legacy backlink safety net). Matcher excludes `_next`, `api`, `_vercel`, `favicon.ico`.

### Supabase clients (two clients, choose carefully)

- `src/lib/supabase/client.ts` — **anon key**, respects RLS. Use for all public reads (Server Components, sitemap, public Server Actions).
- `src/lib/supabase/admin.ts` — **service role key**, bypasses RLS, **server-only**. Use for writes and any read that intentionally needs to ignore RLS (e.g., subscriber dedupe in `/api/capture`).

Never import `admin.ts` from a Client Component or expose the service role key to the browser.

### Blog system

The blog is a small custom CMS on Supabase (no Sanity, no MDX). Content is **stored as raw HTML** in `blog_posts.content` and sanitized on render — there is no Markdown pipeline despite some docs mentioning one.

Layered structure:

- `src/types/blog.ts` — `DbBlogPost` (snake_case, mirrors DB) and `BlogPost` (camelCase, frontend).
- `src/lib/blog/data-mapper.ts` — `toFrontend()` / `toDb()` between the two shapes. **Always go through these mappers** instead of hand-converting fields; `toDb()` skips `undefined` so partial updates work.
- `src/lib/blog/schemas.ts` — Zod schemas for API request bodies (`createPostHtmlSchema`, `updatePostSchema`, `deletePostSchema`).
- `src/lib/blog/sanitize.ts` — `sanitize-html` config. Allowlist includes `iframe` (YouTube/Vimeo only), `details/summary`, `table`, plus class attributes for legacy article CSS hooks (`highlight-box`, `warning-box`, `stat-grid`, `comparison-table`, `sources`, etc.). Extend the allowlist here when imported HTML uses a tag/attr that gets stripped.
- `src/lib/blog/actions.ts` — `"use server"` actions: `getPublishedPosts`, `getPostBySlug`, `getAllPublishedSlugs` (public client, RLS); `createPost`, `updatePost`, `deletePost` (admin client). Mutations call `revalidatePath('/blog')` and `revalidatePath('/blog/${slug}')`. **Auto-publish rule:** when `is_published` flips to `true`, status is forced to `'published'` and `published_at` is set if not already populated — preserve this in any new write path.
- `src/lib/auth.ts` — `withApiAuth(request)` validates a `Bearer ${API_SECRET_KEY}` header for the JSON API.

### Public API routes

| Method | Route | Auth | Notes |
|--------|-------|------|-------|
| GET | `/api/blog` | none | All published posts (camelCase). |
| POST | `/api/blog` | Bearer | Create post (validated by `createPostHtmlSchema`). |
| PUT | `/api/blog` | Bearer | Update; auto-publishes on `is_published: true`. |
| DELETE | `/api/blog` | Bearer | Delete by id. |
| POST | `/api/blog-html` | Bearer | HTML-content variant of create. |
| POST | `/api/capture` | none (CORS open) | Email capture: dedupe in `subscribers`, send welcome via AgentMail, fire-and-forget legacy VPS webhook. |

`/api/capture` is intentionally non-blocking on AgentMail/VPS failures — it logs and still returns success so the user flow doesn't stall. Keep that behavior.

### Build resilience to a missing DB

`getPublishedPosts`, `getAllPublishedSlugs`, and `sitemap()` all swallow Supabase errors and return empty arrays so `next build` works without live DB credentials (CI, fresh checkouts). Preserve this when adding new build-time data fetches; throw only in request-time code (e.g., `getPostBySlug`).

### Styling — Tailwind CSS 4

- Tailwind 4 uses **CSS-first config**. There is no `tailwind.config.ts`. The theme (colors, fonts, font sizes, shadows, breakpoints) is defined in an `@theme { ... }` block at the top of `src/app/globals.css`. Add new tokens there, not in a JS config.
- Fonts (`Libre Baskerville` serif, `Source Sans 3` sans) are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as `--font-serif` / `--font-sans`. Don't hand-link Google Fonts.
- Imported blog HTML still relies on legacy class names (`.highlight-box`, `.warning-box`, `.stat-grid`, `.comparison-table`, `.sources`, `details`). These are styled via article-scoped CSS (`.article-prose`) in `globals.css` — keep the names stable when modifying article content.

### Database

`supabase/migrations/001_initial_schema.sql` is the canonical schema. Tables: `blog_posts`, `categories`, `authors`, `locations`, `subscribers`, `guides` (and `pages` per the SOP). Notable: `blog_posts` has an `update_updated_at` trigger and a public-read RLS policy gated on `is_published = true AND status = 'published'`. New migrations go in `supabase/migrations/` with the next sequential prefix.

## Conventions

- `_legacy/` is excluded from `tsconfig.json` and contains the pre-migration static site — useful as a content reference, but don't import from it or modify it as part of normal work.
- Path alias `@/*` → `src/*`.
- Server Actions are marked with `"use server"` at the top of the file (see `src/lib/blog/actions.ts`); don't sprinkle `"use server"` per function in this codebase.
- New blog HTML content must round-trip through `sanitizeBlogContent()` before reaching the DOM. If a needed tag/class is being stripped, update `src/lib/blog/sanitize.ts` rather than bypassing the sanitizer.
- After any blog mutation, call `revalidatePath` for both `/blog` and the affected `/blog/${slug}`.
- All new pages need `generateMetadata` (title, description, canonical, OG) and, where applicable, JSON-LD via the `JsonLd` component in `src/components/`.
- Sitemap and robots are code (`app/sitemap.ts`, `app/robots.ts`) — do not add a static `sitemap.xml` or `robots.txt` at the project root.

## Environment Variables

See `.env.local.example`. Required for full functionality:

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — public client.
- `SUPABASE_SERVICE_ROLE_KEY` — admin client (server-only).
- `API_SECRET_KEY` — Bearer token for `/api/blog*` mutations.
- `AGENTMAIL_API_KEY`, `AGENTMAIL_INBOX` — outbound welcome email.
- `VPS_WEBHOOK_URL`, `VPS_WEBHOOK_SECRET` — legacy drip-sequence forwarder (non-blocking).
