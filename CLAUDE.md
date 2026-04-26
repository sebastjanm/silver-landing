# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NakupSrebra.com** — A Slovenian-language static marketing site for silver/gold investment consulting. Deployed on **Vercel** as a static site with one serverless function.

- **Domain:** nakupsrebra.com
- **Language:** All content is in **Slovenian** (sl_SI locale)
- **No build step** — pure HTML/CSS, no framework, no bundler

## Architecture

- **Static HTML pages** at root level: `index.html` (homepage), `posvet.html` (consultation booking), `cena-srebra.html` (silver price), `hvala.html` (thank you), and several SEO comparison pages (`srebro-vs-bitcoin.html`, `zlato-ali-srebro.html`, etc.)
- **`/blog/`** — 44 standalone HTML article pages + `blog/index.html` listing
- **`/nakup-srebra/`** — Location-specific landing pages (Ljubljana, Maribor, Celje)
- **`/vodnik/`** — PDF guide generator using Puppeteer (`generate-pdf.js` converts `vodnik-srebro.html` → PDF). Has its own `package.json` with `html-pdf-node` and `puppeteer` deps.
- **`/api/capture.js`** — Vercel serverless function for email capture. Sends welcome email via AgentMail API, stores subscriber in `/tmp`, and forwards to VPS webhook for persistent storage + drip sequence.
- **`/styles/shared.css`** — Shared design system (CSS custom properties)
- **`/emails/`** — Email follow-up sequence templates (Markdown)
- **`/research/`** — Research documents backing blog articles
- **`/marketing/`** — Social content strategy docs

## Design System

CSS variables defined in `styles/shared.css` and repeated in page `<style>` blocks:
- Fonts: `--serif: 'Libre Baskerville'`, `--sans: 'Source Sans 3'`
- Colors: `--navy: #1a365d`, `--gold: #b7791f`, `--text: #2d3748`, `--bg: #fdfcfa`
- All pages load Google Fonts (Libre Baskerville + Source Sans 3) and `/styles/shared.css`

## Deployment

- **Vercel** — static hosting with `cleanUrls: true` and `trailingSlash: false` (see `vercel.json`)
- The serverless function at `api/capture.js` has 128MB memory, 10s max duration
- No CI/CD pipeline beyond Vercel's git integration

## SEO Structure

Every page has: `<meta>` description, canonical URL, Open Graph tags, Twitter cards, and JSON-LD structured data (FAQPage, Article, or Organization schema). The `sitemap.xml` and `robots.txt` are manually maintained at root.

## Key Conventions

- Blog articles follow a consistent HTML template structure — check any existing article as reference
- Research docs in `/research/` follow the naming pattern `{slug}-research.md`
- When adding new pages, update `sitemap.xml` manually
- The root `package.json` is minimal (name + version only) — the only real npm project is in `/vodnik/`



Document does not have a main landmark.
One main landmark helps screen reader users navigate a web page. Learn more about landmarks.
Failing Elements
html.libre_baskerville_2a17638f-module__q6JoQW__variable
<html lang="sl" class="libre_baskerville_2a17638f-module__q6JoQW__variable source_sans_3_4947b95a…">