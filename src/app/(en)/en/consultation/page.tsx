/**
 * English consultation page
 * Uses shared ConsultationPage component with EN content
 */

import type { Metadata } from "next";
import { defaultOgImages } from "@/lib/og";
import { ConsultationPage } from "@/components/ConsultationPage";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.consultation.title,
  description: en.consultation.description,
  alternates: {
    canonical: "/en/consultation",
    languages: {
      "sl": "/posvet",
      "en": "/en/consultation",
      "x-default": "/posvet",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NakupSrebra.com",
    title: en.consultation.title,
    description: en.consultation.description,
    url: "/en/consultation",
    images: defaultOgImages,
  },
};

export default function Page() {
  return <ConsultationPage content={en} locale="en" />;
}
