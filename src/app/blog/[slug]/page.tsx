import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPublishedSlugs } from "@/lib/blog/actions";
import { sanitizeBlogContent } from "@/lib/blog/sanitize";
import { ArticleJsonLd } from "@/components/JsonLd";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle ?? post.title,
    description: post.metaDescription,
    keywords: post.metaKeywords ?? undefined,
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.metaDescription,
      type: "article",
      url: `/blog/${post.slug}`,
      ...(post.ogImage && { images: [post.ogImage] }),
    },
    alternates: {
      canonical: post.canonicalUrl ?? `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const sanitizedContent = sanitizeBlogContent(post.content);

  return (
    <>
      <ArticleJsonLd post={post} />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-text-muted">
          <Link href="/" className="text-text-muted no-underline hover:underline">
            Domov
          </Link>
          {" › "}
          <Link
            href="/blog"
            className="text-text-muted no-underline hover:underline"
          >
            Blog
          </Link>
          {" › "}
          <span className="text-text">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="font-serif text-4xl leading-tight text-navy">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            {post.readingTimeMinutes} min branja
            {post.publishedAt &&
              ` · ${new Date(post.publishedAt).toLocaleDateString("sl-SI", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}`}
          </p>
        </header>

        {/* Hero image */}
        {post.heroImage && (
          <img
            src={post.heroImage}
            alt={post.heroImageAlt ?? post.title}
            className="mb-10 w-full rounded-xl"
          />
        )}

        {/* Article body — raw HTML from DB, sanitized */}
        <article
          className="article-prose"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />

        {/* Footer */}
        <footer className="mt-12 border-t border-border pt-8 text-center text-sm text-text-muted">
          <p>
            © {new Date().getFullYear()} NakupSrebra.com |{" "}
            <Link href="/" className="text-navy">Domov</Link>{" "}
            |{" "}
            <Link href="/blog" className="text-navy">Blog</Link>{" "}
            |{" "}
            <Link href="/posvet" className="text-navy">Posvet</Link>
          </p>
        </footer>
      </div>
      </main>
    </>
  );
}
