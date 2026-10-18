import type { Metadata } from "next";
import Link from "next/link";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const serif = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NakupSrebra.com | Naložbe v Srebro in Zlato",
    template: "%s | NakupSrebra.com",
  },
  description:
    "Srebro in zlato še nikoli nista izgubila vrednosti. Brezplačen posvet za varne naložbe v plemenite kovine.",
  metadataBase: new URL("https://www.nakupsrebra.com"),
  openGraph: {
    type: "website",
    locale: "sl_SI",
    siteName: "NakupSrebra.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" className={`${serif.variable} ${sans.variable}`}>
      <body className="pt-16">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-rule/40 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-serif text-lg text-ink no-underline tracking-tight transition-colors hover:text-navy"
        >
          NakupSrebra.com
        </Link>
        <div className="flex items-center gap-8 max-sm:gap-4">
          <Link
            href="/cena-srebra"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-ink max-sm:hidden"
          >
            Cena srebra
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-ink"
          >
            Blog
          </Link>
          <Link
            href="/posvet"
            className="rounded bg-gold px-5 py-2 text-sm font-semibold text-white no-underline shadow-nav-cta transition-all hover:bg-gold-light hover:shadow-nav-cta-hover"
          >
            Brezplačen posvet
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rule bg-bg-warm">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 font-serif text-lg text-ink">NakupSrebra.com</div>
            <p className="text-sm leading-relaxed text-text-muted">
              Posvetovanje za naložbe v fizično srebro in zlato. Strategija Elementum.
            </p>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">Povezave</div>
            <div className="space-y-2 text-sm">
              <div><Link href="/cena-srebra" className="text-text-muted no-underline transition-colors hover:text-ink">Cena srebra</Link></div>
              <div><Link href="/blog" className="text-text-muted no-underline transition-colors hover:text-ink">Blog</Link></div>
              <div><Link href="/vodnik/vodnik-srebro" className="text-text-muted no-underline transition-colors hover:text-ink">Vodnik</Link></div>
            </div>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">Kontakt</div>
            <p className="text-sm text-text-muted">
              {/* TODO: Add real contact info (email, phone, company registration) */}
              Email: info@nakupsrebra.com
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-rule pt-8 text-center">
          <p className="text-xs text-text-light">
            © {new Date().getFullYear()} NakupSrebra.com. Informacije na tej strani niso finančni nasvet.
          </p>
        </div>
      </div>
    </footer>
  );
}
