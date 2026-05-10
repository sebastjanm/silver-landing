import type { Metadata } from "next";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import {
  CertificateGlyph,
  Ornament,
  PhoneGlyph,
  ShieldGlyph,
} from "@/components/Glyphs";

export const metadata: Metadata = {
  title: "Brezplačen posvet",
  description:
    "Rezervirajte brezplačen 15-minutni posvet o naložbah v srebro in zlato. Sebastjan vas pokliče v 24 urah, brez prodajnega pritiska.",
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
      <FinancialServiceJsonLd />

      {/* Hero — mobile-first, single column. Editorial heading + form below. */}
      <section className="bg-paper border-b border-gold/15">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-8 lg:pt-20 lg:pb-16">
          <div className="hero-stagger mx-auto max-w-2xl text-center">
            <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <Ornament />
              <span>15-minutni klic, brez obveznosti</span>
              <Ornament />
            </p>
            <h1 className="font-serif text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
              Pogovorimo se o{" "}
              <em className="text-gold">strateški naložbi v srebro</em> —
              preden trg naredi to namesto vas.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base text-text-muted sm:text-lg">
              Pustite ime in telefon. Sebastjan vas v <span className="numerals">24</span> urah pokliče in v
              <span className="numerals"> 15</span> minutah razloži, kako srebro deluje v vaši situaciji — in
              zakaj je v <span className="numerals">2026</span> dostopnejše od zlata.
            </p>
          </div>
        </div>
      </section>

      {/* Booking form — primary conversion surface. Asymmetric grid-break on lg. */}
      <section className="bg-bg-warm pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="lg:grid-break-right">
            <BookingForm source="posvet" heading="Rezerviraj brezplačen posvet" />
          </div>
        </div>
      </section>

      {/* What happens after you book */}
      <section className="border-t border-gold/15 bg-bg pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Kaj se zgodi po rezervaciji
            </p>
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">
              Trije koraki <em className="text-gold">brez presenečenj</em>
            </h2>
          </div>

          <ol className="grid gap-5 sm:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="relative border border-gold/20 bg-white p-6 text-center"
              >
                <span className="serif-numerals absolute -top-4 left-1/2 -translate-x-1/2 bg-bg px-3 text-xl text-gold">
                  {s.n}
                </span>
                <div className="mt-2 mb-3 flex justify-center text-gold">
                  {s.icon}
                </div>
                <h3 className="mb-2 font-serif text-lg text-navy">{s.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Soft fallback: download guide instead. Quiet, low-priority. */}
      <section className="border-t border-gold/15 bg-paper py-12">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <p className="font-serif italic text-text-muted">
            Niste pripravljeni na klic?{" "}
            <Link
              href="/vodnik/vodnik-srebro"
              className="text-navy underline-offset-4 hover:underline"
            >
              Prenesite brezplačen 25-stranski vodnik
            </Link>{" "}
            in se odločite v miru.
          </p>
        </div>
      </section>
    </>
  );
}

const steps = [
  {
    n: 1,
    title: "Klic v 24 urah",
    text: "Sebastjan vas pokliče v izbranem časovnem oknu. Klic traja 15 minut, brez vezave.",
    icon: <PhoneGlyph className="!h-7 !w-7" />,
  },
  {
    n: 2,
    title: "Pogovor brez prodaje",
    text: "Vprašanja o vaši situaciji, pojasnila o trgu in razlagi. Brez ponudb, brez pritiska.",
    icon: <ShieldGlyph className="!h-7 !w-7" />,
  },
  {
    n: 3,
    title: "Strategija po e-pošti",
    text: "Po klicu prejmete pisni povzetek z osebno strategijo, ki ustreza vaši situaciji.",
    icon: <CertificateGlyph className="!h-7 !w-7" />,
  },
];

function FinancialServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Brezplačen posvet o naložbah v srebro in zlato",
    serviceType: "Investment consulting",
    description:
      "15-minutni brezplačen posvet o naložbah v plemenite kovine. Brez prodajnega pritiska, klic v 24 urah.",
    provider: {
      "@type": "Organization",
      name: "NakupSrebra.com",
      url: "https://www.nakupsrebra.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Slovenia",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
