/**
 * Slovenian consultation page
 * Uses shared ConsultationPage component with SL content
 */

import type { Metadata } from "next";
import { defaultOgImages } from "@/lib/og";
import { ConsultationPage } from "@/components/ConsultationPage";
import { sl } from "@/content/sl";

export const metadata: Metadata = {
  title: sl.consultation.title,
  description: sl.consultation.description,
  alternates: {
    canonical: "/posvet",
    languages: {
      "sl": "/posvet",
      "en": "/en/consultation",
      "x-default": "/posvet",
    },
  },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    siteName: "NakupSrebra.com",
    title: sl.consultation.title,
    description: sl.consultation.description,
    url: "/posvet",
    images: defaultOgImages,
  },
};

export default function Page() {
  return <ConsultationPage content={sl} locale="sl" />;
}
