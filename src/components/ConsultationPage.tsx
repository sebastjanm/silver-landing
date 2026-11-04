/**
 * Shared consultation page component
 * Supports both SL and EN via content prop
 */

import { Inter, Playfair_Display } from "next/font/google";
import { CalendlyBooking } from "@/components/CalendlyBooking";
import { EmailCapture } from "@/components/EmailCapture";
import { KeepUnits } from "@/components/KeepUnits";
import type { Content } from "@/content/sl";
import type { Locale } from "@/lib/i18n";

// latin-ext is required: č, š and ž are not in the latin subset
const inter = Inter({ subsets: ["latin", "latin-ext"] });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["400", "700"] });

interface ConsultationPageProps {
  content: Content;
  locale: Locale;
}

export function ConsultationPage({ content, locale }: ConsultationPageProps) {
  const c = content.consultation;

  return (
    <div className={inter.className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.schema.consultationHeadline,
            description: content.schema.consultationDescription,
            datePublished: "2026-02-01",
            dateModified: "2026-11-04",
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
      <div className="bg-[#0a1628] pt-28 pb-12 md:pt-36 md:pb-16 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className={`${playfair.className} lining-nums text-[2.5rem] md:text-6xl font-bold leading-[1.1]`}>
            <span className="block">
              <KeepUnits>{c.headlineLead}</KeepUnits>
            </span>{" "}
            <span className="mt-2 block text-[1.75rem] md:text-4xl font-normal leading-snug text-white/80">
              {c.headlineRest}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/85">{c.subheadline}</p>
        </div>
      </div>

      {/* Calendly section */}
      <section className="bg-[#faf8f5] py-10 md:py-16 text-[#0a1628]">
        <div className="mx-auto max-w-4xl px-6">
          <CalendlyBooking content={content} headingClassName={playfair.className} />

          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2">
            {/* What happens on the call */}
            <div>
              <h2 className={`${playfair.className} lining-nums text-3xl font-bold leading-tight`}>{c.agendaHeadline}</h2>
              <ol className="mt-6 space-y-5">
                {c.agenda.map((item, i) => (
                  <li key={item} className="flex gap-4">
                    <span className={`${playfair.className} lining-nums flex size-9 flex-shrink-0 items-center justify-center rounded-full bg-[#0a1628] font-bold text-white`}>
                      {i + 1}
                    </span>
                    <span className="text-lg leading-relaxed text-gray-800">
                      <KeepUnits>{item}</KeepUnits>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Commission disclosure and terms */}
            <div>
              <h2 className={`${playfair.className} lining-nums text-3xl font-bold leading-tight`}>{c.termsHeadline}</h2>
              <dl className="mt-6 divide-y divide-gray-300 border-y border-gray-300">
                {c.terms.map((term) => (
                  <div key={term.title} className="py-4">
                    <dt className="text-lg font-bold">{term.title}</dt>
                    <dd className="text-lg leading-relaxed text-gray-800">{term.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Email capture */}
          <div className="mt-14 md:mt-20">
            <p className="mb-6 text-center text-lg font-medium">{c.guideIntro}</p>
            <EmailCapture content={content} locale={locale} />
          </div>
        </div>
      </section>
    </div>
  );
}
