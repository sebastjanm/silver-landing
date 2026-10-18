import type { Metadata } from "next";
import { defaultOgImages } from "@/lib/og";
import { CheckIcon } from "@/components/CheckIcon";
import { EmailCapture } from "@/components/EmailCapture";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Brezplačen posvet",
  description:
    "Rezervirajte brezplačen 15-minutni posvet o naložbah v srebro in zlato.",
  alternates: { canonical: "/posvet" },
  openGraph: {
    images: defaultOgImages,
    title: "Brezplačen posvet | Nakup Srebra",
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

      <main>
      {/* Page header */}
      <div className="border-b border-rule bg-bg py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-block border-b border-gold pb-2 text-xs font-semibold uppercase tracking-wider text-gold">
            15-minutni klic
          </div>
          <h1 className="mb-4 font-serif text-4xl font-normal text-ink lg:text-5xl">
            Brezplačen posvet
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-text-muted">
            Izberite termin za kratek pogovor o vaših ciljih in strategiji varčevanja v plemenitih kovinah. Brez obveznosti, brez prodajnega pritiska.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-1.5"><CheckIcon className="text-metal" /> Fizično srebro in zlato</span>
            <span className="flex items-center gap-1.5"><CheckIcon className="text-metal" /> Brez DDV</span>
            <span className="flex items-center gap-1.5"><CheckIcon className="text-metal" /> Švicarska hramba</span>
          </div>
        </div>
      </div>

      {/* Calendly section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <CalendlyEmbed />

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-text-light">
            <span>Brez obveznosti</span>
            <span>·</span>
            <span>Brez prodajnega pritiska</span>
            <span>·</span>
            <span>15 minut</span>
          </div>

          <div className="my-12 border-t border-rule"></div>

          <div className="text-center">
            <p className="mb-6 text-text-muted">Ali prenesite brezplačen vodnik</p>
            <EmailCapture />
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
