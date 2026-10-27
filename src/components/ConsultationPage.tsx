/**
 * Shared consultation page component
 * Supports both SL and EN via content prop
 */

"use client";

import { useState } from "react";
import { EmailCapture } from "@/components/EmailCapture";
import type { Content } from "@/content/sl";
import type { Locale } from "@/lib/i18n";

interface ConsultationPageProps {
  content: Content;
  locale: Locale;
}

export function ConsultationPage({ content, locale }: ConsultationPageProps) {
  const [showCalendly, setShowCalendly] = useState(false);
  const c = content.consultation;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.schema.consultationHeadline,
            description: content.schema.consultationDescription,
            datePublished: "2026-02-01",
            dateModified: "2026-10-27",
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
              "@id": `https://www.nakupsrebra.com${locale === "en" ? "/en/consultation" : "/posvet"}`,
            },
          }),
        }}
      />

      {/* Header */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-4 text-xs font-mono uppercase tracking-widest text-gray-500">
            {c.eyebrow}
          </div>
          <h1 className="mb-6 text-5xl lg:text-6xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {c.headline}
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-600 leading-relaxed">
            {c.subheadline}
          </p>
        </div>
      </div>

      {/* Calendly section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Calendly lazy loading */}
          {!showCalendly ? (
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-16 text-center shadow-sm">
              <svg className="mx-auto mb-8 size-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h2 className="mb-4 text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {c.widgetHeadline}
              </h2>
              <p className="mb-10 text-gray-600 max-w-md mx-auto">
                {c.widgetDescription}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button onClick={() => setShowCalendly(true)} className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800">
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {c.cta1}
                </button>
                <a href="https://calendly.com/sebom/new-meeting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:border-gray-400">
                  {c.cta2}
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <iframe src="https://calendly.com/sebom/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1" width="100%" height="700" frameBorder="0" title={c.iframeTitle} className="block" />
            </div>
          )}

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="size-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {c.trustPoint1}
            </div>
            <div className="flex items-center gap-2">
              <svg className="size-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {c.trustPoint2}
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 text-center">
            <div className="inline-block px-8 py-2 rounded-full bg-gray-200 text-xs font-medium text-gray-600 uppercase tracking-wider">
              {c.divider}
            </div>
          </div>

          {/* Email capture */}
          <EmailCapture content={content} locale={locale} />
        </div>
      </section>
    </>
  );
}
