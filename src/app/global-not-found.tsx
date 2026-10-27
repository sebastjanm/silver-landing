/**
 * Global 404 for unmatched URLs.
 *
 * The app has two root layouts ((sl)/layout.tsx and (en)/layout.tsx) and no
 * app/layout.tsx, so there is no single layout to compose a root not-found.tsx
 * from (Next wraps such a file in a default <html>/<body>, which nested a
 * second <html>). global-not-found bypasses layouts and must own html/body.
 * Enabled via experimental.globalNotFound in next.config.ts.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Stran ni najdena / Page Not Found | NakupSrebra.com",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="sl" className={inter.className}>
      <body className="antialiased">
        <main className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            404 - Stran ni najdena / Page Not Found
          </h1>
          <p className="mt-6 text-gray-600">
            <Link href="/">Domov</Link> · <Link href="/en">Home (EN)</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
