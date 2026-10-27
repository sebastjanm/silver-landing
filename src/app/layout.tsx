/**
 * Root layout - Creative story-led redesign
 * Modern editorial aesthetic with refined typography
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tisočletja preizkušena shramba vrednosti | NakupSrebra.com",
    template: "%s | NakupSrebra.com",
  },
  description:
    "Srebro shranjuje vrednost že tisočletja. Fizično, oprijemljivo, vaše. Zavarovan švicarski trezor, brez DDV, brez vezave. Brezplačen posvet.",
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
  // Detect locale from path (simple approach: check if path starts with /en)
  // In a real app, this would use middleware or a context
  const locale: Locale = "sl"; // Default, overridden by segment layout

  return (
    <html lang={locale} className={inter.className}>
      <body className="antialiased">
        <Nav locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

function Nav({ locale }: { locale: Locale }) {
  const isEn = locale === "en";
  const pathPrefix = isEn ? "/en" : "";
  
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href={pathPrefix || "/"}
          className="text-lg font-bold tracking-tight text-gray-900 no-underline transition-opacity hover:opacity-70"
        >
          NakupSrebra
        </Link>
        <div className="flex items-center gap-6 max-sm:gap-4">
          <div className="flex items-center gap-6 max-sm:gap-3">
            {!isEn && (
              <Link
                href="/cena-srebra"
                className="text-sm font-medium text-gray-600 no-underline transition-colors hover:text-gray-900 max-sm:hidden"
              >
                Cena
              </Link>
            )}
            {!isEn && (
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-600 no-underline transition-colors hover:text-gray-900"
              >
                Blog
              </Link>
            )}
            <Link
              href={isEn ? "/en/consultation" : "/posvet"}
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white no-underline transition-all hover:bg-gray-800"
            >
              {isEn ? "Consultation" : "Posvet"}
            </Link>
          </div>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </nav>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const isEn = locale === "en";
  const pathPrefix = isEn ? "/en" : "";
  
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 max-sm:flex-col max-sm:text-center">
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} NakupSrebra.com
            </div>
            <LanguageSwitcher currentLocale={locale} className="max-sm:hidden" />
          </div>
          {!isEn && (
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 max-sm:flex-col">
              <Link href="/cena-srebra" className="no-underline hover:text-gray-900 transition-colors">
                Cena srebra
              </Link>
              <Link href="/blog" className="no-underline hover:text-gray-900 transition-colors">
                Blog
              </Link>
            </div>
          )}
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          {isEn ? "Information on this page is not financial advice. Consult a professional." : "Informacije na tej strani niso finančni nasvet. Posvetujte se s strokovnjakom."}
        </p>
        <div className="mt-4 text-center sm:hidden">
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </footer>
  );
}
