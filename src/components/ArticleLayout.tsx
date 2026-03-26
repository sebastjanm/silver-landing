import Link from "next/link";

interface ArticleLayoutProps {
  breadcrumb: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function ArticleLayout({
  breadcrumb,
  title,
  subtitle,
  children,
}: ArticleLayoutProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 text-sm text-text-muted">
          <Link href="/" className="text-text-muted no-underline hover:underline">
            Domov
          </Link>
          {" → "}
          <span>{breadcrumb}</span>
        </nav>

        <header className="mb-12 border-b border-border pb-8">
          <h1 className="font-serif text-5xl leading-tight text-navy">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-text-muted">{subtitle}</p>
          )}
        </header>

        {children}
      </div>
    </main>
  );
}
