import type { Metadata } from "next";
import Script from "next/script";
import { CheckIcon } from "@/components/CheckIcon";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Brezplačen posvet",
  description:
    "Rezervirajte brezplačen 15-minutni posvet o naložbah v srebro in zlato.",
  alternates: { canonical: "/posvet" },
  openGraph: {
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

      {/* Page header */}
      <div className="bg-bg-warm py-16 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="mb-3 font-serif text-4xl text-navy">
            Brezplačen posvet
          </h1>
          <p className="mx-auto max-w-md text-lg text-text-muted">
            Izberite termin za 15-minutni pogovor o vaših ciljih in strategiji
            varčevanja v plemenitih kovinah.
          </p>
        </div>
      </div>

      {/* Calendly section */}
      <section className="bg-bg py-10 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Calendly inline widget */}
          <div className="overflow-hidden rounded-xl shadow-md">
            <iframe
              src="https://calendly.com/sebom/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="700"
              frameBorder="0"
              title="Rezervirajte posvet"
            />
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <CheckIcon />
              Brez obveznosti
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <CheckIcon />
              Brez prodajnega pritiska
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <CheckIcon />
              15 minut vašega časa
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 text-center text-text-muted">ali</div>

          {/* Email capture */}
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
