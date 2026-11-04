/**
 * English homepage
 * Uses shared HomePage component with EN content
 */

import type { Metadata } from "next";
import { defaultOgImages } from "@/lib/og";
import { HomePage } from "@/components/home/HomePage";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.home.title,
  description: en.home.description,
  alternates: {
    canonical: "/en",
    languages: {
      "sl": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NakupSrebra.com",
    title: en.home.title,
    description: en.home.description,
    url: "/en",
    images: defaultOgImages,
  },
};

export default function Page() {
  return <HomePage content={en} locale="en" />;
}
