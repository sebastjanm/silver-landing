/**
 * English root layout (route group (en))
 * The only layout that emits <html>/<body> for /en/* (no app/layout.tsx exists)
 */

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Physical silver held in your name | NakupSrebra.com",
    template: "%s | NakupSrebra.com",
  },
  description:
    "Physical silver in your name, in an insured Swiss vault. Free consultation.",
  metadataBase: new URL("https://www.nakupsrebra.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NakupSrebra.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Nav />
        <ProgressIndicator />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/en"
          className="text-lg font-bold tracking-tight text-gray-900 no-underline transition-opacity hover:opacity-70"
        >
          NakupSrebra
        </Link>
        <div className="flex items-center gap-6 max-sm:gap-4">
          <div className="flex items-center gap-6 max-sm:gap-3">
            <Link
              href="/en/consultation"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white no-underline transition-all hover:bg-gray-800"
            >
              Consultation
            </Link>
          </div>
          <LanguageSwitcher currentLocale="en" />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 max-sm:flex-col max-sm:text-center">
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} NakupSrebra.com
            </div>
            <LanguageSwitcher currentLocale="en" className="max-sm:hidden" />
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          Information on this page is not financial advice. Consult a professional.
        </p>
        <div className="mt-4 text-center sm:hidden">
          <LanguageSwitcher currentLocale="en" />
        </div>
      </div>
    </footer>
  );
}
