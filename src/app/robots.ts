import type { MetadataRoute } from "next";

/**
 * Robots config — explicitly welcomes LLM and GenAI crawlers so the site can
 * be cited by ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews.
 * Some operators block these by default; we want the opposite.
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/", disallow: "/hvala" };

  return {
    rules: [
      // Default — search engines and any unknown crawler.
      { userAgent: "*", ...allowAll },

      // OpenAI
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },

      // Anthropic
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },

      // Perplexity
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Perplexity-User", ...allowAll },

      // Google (Gemini / Search Generative Experience uses a separate UA so
      // operators can opt out without losing classic Google indexing).
      { userAgent: "Google-Extended", ...allowAll },

      // Common Crawl — feeds many LLM training pipelines.
      { userAgent: "CCBot", ...allowAll },

      // Apple Intelligence
      { userAgent: "Applebot-Extended", ...allowAll },

      // Bytedance (Doubao etc.)
      { userAgent: "Bytespider", ...allowAll },
    ],
    sitemap: "https://www.nakupsrebra.com/sitemap.xml",
    host: "https://www.nakupsrebra.com",
  };
}
