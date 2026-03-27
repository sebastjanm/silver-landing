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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/72 py-3.5 shadow-xs backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-base text-navy no-underline transition-opacity hover:opacity-70"
        >
          NakupSrebra.com
        </Link>
        <div className="flex items-center gap-6 max-sm:gap-3">
          <Link
            href="/cena-srebra"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-navy max-sm:hidden"
          >
            Cena srebra
          </Link>
          <Link
            href="/zlato-ali-srebro"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-navy max-md:hidden"
          >
            Zlato ali srebro
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-navy"
          >
            Blog
          </Link>
          <Link
            href="/vodnik/vodnik-srebro"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-navy max-md:hidden"
          >
            Vodnik
          </Link>
          <Link
            href="/posvet"
            className="rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-white no-underline shadow-nav-cta transition-all hover:scale-105 hover:bg-navy-light hover:shadow-nav-cta-hover"
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
    <footer className="bg-navy py-10 text-center text-sm text-white/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p>© {new Date().getFullYear()} NakupSrebra.com</p>
        <p className="mt-2">
          Informacije na tej strani niso finančni nasvet. Posvetujte se s
          strokovnjakom.
        </p>
      </div>
    </footer>
  );
}
