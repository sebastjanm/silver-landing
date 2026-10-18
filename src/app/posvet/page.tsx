/**
 * Consultation booking page - Modern trust-first redesign
 * Lazy Calendly embed with modern fintech styling
 */

"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { CheckCircle2, Calendar, ExternalLink } from "lucide-react";
import { EmailCapture } from "@/components/EmailCapture";

export default function PosvetPage() {
  const [showCalendly, setShowCalendly] = useState(false);

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
          {/* Calendly lazy loading */}
          {!showCalendly ? (
            <div className="overflow-hidden rounded-2xl border border-border bg-white p-12 text-center shadow-card">
              <Calendar className="mx-auto mb-6 size-16 text-accent" />
              <h2 className="mb-4 text-2xl font-bold text-navy">Rezervirajte termin</h2>
              <p className="mb-8 text-text-muted">
                Kliknite za odpiranje koledarja in izbiro prostega termina
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setShowCalendly(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-accent-light hover:shadow-lg"
                >
                  <Calendar className="size-5" />
                  Izberite termin posveta
                </button>
                <a
                  href="https://calendly.com/sebom/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-navy shadow-sm transition-all hover:border-navy/30 hover:shadow-md"
                >
                  Odpri v novi zavihku
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          ) : (
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
          )}

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
