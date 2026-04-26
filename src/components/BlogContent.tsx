import type { BlogPost } from "@/types/blog";
import Link from "next/link";

interface BlogContentProps {
  posts: BlogPost[];
}

export function BlogContent({ posts }: BlogContentProps) {
  if (posts.length === 0) {
    return (
      <p className="py-20 text-center text-text-muted">
        Trenutno ni objavljenih člankov.
      </p>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <div>
      {/* Featured post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group mb-12 block overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
      >
        {featured.heroImage && (
          <img
            src={featured.heroImage}
            alt={featured.heroImageAlt ?? featured.title}
            className="h-72 w-full object-cover"
          />
        )}
        <div className="p-8">
          <h2 className="font-serif text-3xl text-navy group-hover:text-navy-light">
            {featured.title}
          </h2>
          <p className="mt-3 text-text-muted">{featured.excerpt}</p>
          <div className="mt-4 text-sm text-text-muted">
            {featured.readingTimeMinutes} min branja
            {featured.publishedAt &&
              ` · ${new Date(featured.publishedAt).toLocaleDateString("sl-SI")}`}
          </div>
        </div>
      </Link>

      {/* Grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              {post.heroImage && (
                <img
                  src={post.heroImage}
                  alt={post.heroImageAlt ?? post.title}
                  className="h-48 w-full bg-bg-warm object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-serif text-lg leading-snug text-navy">
                  {post.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm text-text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-xs text-text-muted">
                  {post.readingTimeMinutes} min branja
                  {post.publishedAt &&
                    ` · ${new Date(post.publishedAt).toLocaleDateString("sl-SI")}`}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
