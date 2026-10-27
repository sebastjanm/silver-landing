/**
 * English consultation page
 * Uses shared ConsultationPage component with EN content
 */

import type { Metadata } from "next";
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
};

export default function Page() {
  return <ConsultationPage content={en} locale="en" />;
}
