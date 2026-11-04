/**
 * Slovenian homepage (default)
 * Uses shared HomePage component with SL content
 */

import type { Metadata } from "next";
import { defaultOgImages } from "@/lib/og";
import { HomePage } from "@/components/home/HomePage";
import { sl } from "@/content/sl";

export const metadata: Metadata = {
  title: sl.home.title,
  description: sl.home.description,
  alternates: {
    canonical: "/",
    languages: {
      "sl": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    siteName: "NakupSrebra.com",
    title: sl.home.title,
    description: sl.home.description,
    url: "/",
    images: defaultOgImages,
  },
};

export default function Page() {
  return <HomePage content={sl} locale="sl" />;
}
