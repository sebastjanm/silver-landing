/**
 * Root layout - Editorial redesign Oct 2026
 * Added Libre Baskerville serif font for editorial headlines
 */

import type { Metadata } from "next";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Domače srebro | Varčevanje v srebrnih kovancih",
    template: "%s | NakupSrebra.com",
  },
  description:
    "Srebro kot tiha, oprijemljiva varnost za vašo družino. Shranite doma, ne v banki. Začnite z enim kovincem. Brezplačen posvet.",
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
    <html lang="sl" className={`${GeistSans.className} ${libreBaskerville.variable}`}>
      <body className="pt-16">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-white/95 py-4 shadow-nav backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-navy no-underline transition-opacity hover:opacity-70"
        >
          NakupSrebra
        </Link>
        <div className="flex items-center gap-7 max-sm:gap-4">
          <Link
            href="/cena-srebra"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-text max-sm:hidden"
          >
            Cena
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-text"
          >
            Blog
          </Link>
          <Link
            href="/vodnik/vodnik-srebro"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-text max-md:hidden"
          >
            Vodnik
          </Link>
          <Link
            href="/posvet"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-sm transition-all hover:bg-accent-light"
          >
            Posvet
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-soft py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 max-sm:flex-col max-sm:text-center">
          <div className="text-sm text-text-subtle">
            © {new Date().getFullYear()} NakupSrebra.com
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted max-sm:flex-col">
            <Link href="/cena-srebra" className="no-underline hover:text-text">
              Cena srebra
            </Link>
            <Link href="/blog" className="no-underline hover:text-text">
              Blog
            </Link>
            <Link href="/vodnik/vodnik-srebro" className="no-underline hover:text-text">
              Vodnik
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-text-subtle">
          Informacije na tej strani niso finančni nasvet. Posvetujte se s strokovnjakom.
        </p>
      </div>
    </footer>
  );
}
