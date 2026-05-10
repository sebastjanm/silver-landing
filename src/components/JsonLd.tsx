import type { BlogPost } from "@/types/blog";

/**
 * Schema.org JSON-LD components.
 *
 * Each export emits a single (or multiple) `<script type="application/ld+json">`
 * tag(s). LLM crawlers and search engines lift these for citation surfaces
 * (Google AI Overviews, Perplexity, ChatGPT, Gemini), so every public page
 * should mount the appropriate component.
 *
 * Site-wide:  OrganizationJsonLd            (mounted once, in layout.tsx)
 * Per-page:   ArticleJsonLd | WebPageJsonLd | FinancialServiceJsonLd
 *             FAQJsonLd, BreadcrumbJsonLd, HowToJsonLd as needed
 * Blog only:  BlogArticleJsonLd             (BlogPost-shape adapter)
 */

const SITE_NAME = "NakupSrebra.com";
const SITE_URL = "https://www.nakupsrebra.com";

function ldScript(schema: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function absoluteUrl(url: string) {
  return url.startsWith("http") ? url : `${SITE_URL}${url}`;
}

/* ────────────────── Organization ────────────────── */

type OrganizationJsonLdProps = {
  legalName: string;
  registration?: string;
  vatId?: string;
  address?: string;
  description?: string;
};

export function OrganizationJsonLd({
  legalName,
  registration,
  vatId,
  address,
  description,
}: OrganizationJsonLdProps) {
  const identifiers: Record<string, unknown>[] = [];
  if (registration) {
    identifiers.push({
      "@type": "PropertyValue",
      propertyID: "Matična številka",
      value: registration,
    });
  }
  if (vatId) {
    identifiers.push({
      "@type": "PropertyValue",
      propertyID: "Davčna številka",
      value: vatId,
    });
  }

  return ldScript({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: legalName,
    alternateName: SITE_NAME,
    url: SITE_URL,
    description:
      description ??
      "Posvetovanje za nakup naložbenega srebra. Brezplačen 15-minutni posvet, EU carinsko skladišče brez DDV, švicarska hramba.",
    ...(address && {
      address: {
        "@type": "PostalAddress",
        addressLocality: address,
        addressCountry: "SI",
      },
    }),
    ...(identifiers.length > 0 && { identifier: identifiers }),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Slovenian",
      areaServed: "SI",
    },
  });
}

/* ────────────────── Article (generic) ────────────────── */

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  type?: "Article" | "NewsArticle" | "BlogPosting";
};

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
  keywords,
  type = "Article",
}: ArticleJsonLdProps) {
  return ldScript({
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    url: absoluteUrl(url),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(image && { image }),
    ...(keywords && { keywords: keywords.join(", ") }),
    inLanguage: "sl-SI",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(url),
    },
  });
}

/* ────────────────── BlogPost adapter ────────────────── */

export function BlogArticleJsonLd({ post }: { post: BlogPost }) {
  const url = `${SITE_URL}/blog/${post.slug}`;

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": post.schemaType || "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url,
    inLanguage: "sl-SI",
    ...(post.publishedAt && { datePublished: post.publishedAt }),
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    ...(post.heroImage && { image: post.heroImage }),
    ...(post.metaKeywords && { keywords: post.metaKeywords }),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(post.schemaJson ?? {}),
  };

  return (
    <>
      {ldScript(article)}
      {post.faqItems && post.faqItems.length > 0 && (
        <FAQJsonLd
          items={post.faqItems.map((f) => ({
            question: f.question,
            answer: f.answer,
          }))}
        />
      )}
    </>
  );
}

/* ────────────────── FAQPage ────────────────── */

type FAQItem = { question: string; answer: string };

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  return ldScript({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  });
}

/* ────────────────── BreadcrumbList ────────────────── */

type BreadcrumbItem = { name: string; url: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return ldScript({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  });
}

/* ────────────────── HowTo ────────────────── */

type HowToStep = { name: string; text: string; url?: string };

type HowToJsonLdProps = {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
};

export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
}: HowToJsonLdProps) {
  return ldScript({
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: "sl-SI",
    ...(totalTime && { totalTime }),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url && { url: absoluteUrl(s.url) }),
    })),
  });
}

/* ────────────────── FinancialService (advisory offer) ────────────────── */

type FinancialServiceJsonLdProps = {
  name?: string;
  description?: string;
  url?: string;
};

export function FinancialServiceJsonLd({
  name = "Brezplačen posvet o naložbah v srebro",
  description = "15-minutni brezplačen posvet o nakupu naložbenega srebra. Brez prodajnega pritiska, klic v 24 urah.",
  url = "/posvet",
}: FinancialServiceJsonLdProps = {}) {
  return ldScript({
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name,
    serviceType: "Investment consulting",
    description,
    url: absoluteUrl(url),
    inLanguage: "sl-SI",
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: { "@type": "Country", name: "Slovenia" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  });
}

/* ────────────────── WebPage (generic page) ────────────────── */

type WebPageJsonLdProps = {
  name: string;
  description: string;
  url: string;
  type?: "WebPage" | "ContactPage" | "AboutPage";
};

export function WebPageJsonLd({
  name,
  description,
  url,
  type = "WebPage",
}: WebPageJsonLdProps) {
  return ldScript({
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(url),
    inLanguage: "sl-SI",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  });
}
