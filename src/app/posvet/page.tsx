/**
 * Consultation booking page - Modern trust-first redesign
 * Lazy Calendly embed with modern fintech styling
 */

import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Brezplačen posvet",
  description:
    "Rezervirajte brezplačen 15-minutni posvet o naložbah v srebro in zlato. Brez obveznosti, brez prodajnega pritiska.",
  alternates: { canonical: "/posvet" },
  openGraph: {
    title: "Brezplačen posvet | NakupSrebra.com",
    description:
      "Rezervirajte brezplačen 15-minutni posvet o naložbah v srebro in zlato.",
    type: "website",
    url: "/posvet",
  },
};

export default function PosvetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Brezplačen posvet o naložbah v srebro",
            description: "Rezervirajte brezplačen 15-minutni posvet.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: {
              "@type": "Organization",
              name: "NakupSrebra.com",
              url: "https://www.nakupsrebra.com",
            },
            publisher: {
              "@type": "Organization",
              name: "NakupSrebra.com",
              url: "https://www.nakupsrebra.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.nakupsrebra.com/posvet",
            },
          }),
        }}
      />

      {/* Header */}
      <div className="border-b border-border-subtle bg-gradient-to-b from-white to-bg py-16 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Začnite zdaj
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-navy lg:text-5xl">
            Brezplačen posvet
          </h1>
          <p className="mx-auto max-w-xl text-lg text-text-muted">
            Izberite termin za 15-minutni pogovor o vaših ciljih in strategiji varčevanja v
            plemenitih kovinah.
          </p>
        </div>
      </div>

      {/* Calendly section */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Calendly iframe */}
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <iframe
              src="https://calendly.com/sebom/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="700"
              frameBorder="0"
              title="Rezervirajte posvet"
              className="block"
            />
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-green" />
              Brez obveznosti
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-green" />
              Brez prodajnega pritiska
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-green" />
              15 minut vašega časa
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 text-center text-sm text-text-subtle">ali</div>

          {/* Email capture */}
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
