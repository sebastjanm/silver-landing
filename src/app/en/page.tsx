/**
 * English homepage
 * Uses shared HomePage component with EN content
 */

import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: "Physical Silver Investment",
  description: en.home.description,
  alternates: {
    canonical: "/en",
    languages: {
      "sl": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
};

export default function Page() {
  return <HomePage content={en} locale="en" />;
}
