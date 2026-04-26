import type { BlogPost } from "@/types/blog";

interface JsonLdProps {
  post: BlogPost;
}

export function ArticleJsonLd({ post }: JsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": post.schemaType || "Article",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "NakupSrebra.com",
    },
    publisher: {
      "@type": "Organization",
      name: "NakupSrebra.com",
    },
    ...(post.heroImage && { image: post.heroImage }),
    ...(post.schemaJson ?? {}),
  };

  // Add FAQ schema if faq_items present
  const schemas = [schema];
  if (post.faqItems && post.faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
