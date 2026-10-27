/**
 * Slovenian homepage (default)
 * Uses shared HomePage component with SL content
 */

import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { sl } from "@/content/sl";

export const metadata: Metadata = {
  title: "Tisočletja preizkušena shramba vrednosti",
  description: sl.home.description,
  alternates: {
    canonical: "/",
    languages: {
      "sl": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
};

export default function Page() {
  return <HomePage content={sl} locale="sl" />;
}
