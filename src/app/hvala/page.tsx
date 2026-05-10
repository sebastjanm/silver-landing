import type { Metadata } from "next";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { WebPageJsonLd } from "@/components/JsonLd";
import { CertificateGlyph, Ornament } from "@/components/Glyphs";

export const metadata: Metadata = {
  title: "Hvala za prijavo!",
  description:
    "Hvala za prijavo. Kmalu boste prejeli brezplačen vodnik o naložbah v srebro.",
  alternates: { canonical: "/hvala" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Hvala za prijavo! | NakupSrebra.com",
    description: "Kmalu boste prejeli brezplačen vodnik o naložbah v srebro.",
    type: "website",
    url: "/hvala",
  },
};

export default function HvalaPage() {
  return (
    <>
      <WebPageJsonLd
        name="Hvala za prijavo"
        description="Potrditev prijave na vodnik o naložbah v srebro."
        url="/hvala"
      />

      {/* Confirmation + download */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center lg:px-8 lg:pt-24">
          <div className="hero-stagger">
            <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <Ornament />
              <span>Vodnik je pripravljen</span>
              <Ornament />
            </p>
            <h1 className="font-serif text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
              Hvala. Vaš{" "}
              <em className="text-gold">brezplačen vodnik</em> vas čaka.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base text-text-muted sm:text-lg">
              25 strani praktičnih nasvetov za začetnike — kako, kje in koliko
              srebra kupiti, brez napak.
            </p>

            <div className="mx-auto mt-9 max-w-lg border border-gold/25 bg-white p-7 text-left shadow-md sm:p-9">
              <div className="mb-4 flex items-center gap-3 text-gold">
                <CertificateGlyph className="!h-7 !w-7" />
                <span className="font-serif italic text-text-muted">
                  Kako začeti z naložbo v srebro
                </span>
              </div>
              <a
                href="/assets/vodnik-srebro-2026.pdf"
                download
                className="flex min-h-[56px] w-full items-center justify-center gap-3 bg-navy px-6 py-4 font-serif text-lg text-white transition-all hover:bg-navy-light"
              >
                <span>Prenesi PDF vodnik</span>
                <span aria-hidden="true" className="text-gold-light">↓</span>
              </a>
              <p className="mt-3 text-center text-xs text-text-muted">
                <span className="numerals">25</span> strani · PDF · brezplačno
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell to consultation — primary next action, single CTA */}
      <section className="border-t border-gold/15 bg-bg-warm pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Naslednji korak
            </p>
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">
              Želite{" "}
              <em className="text-gold">osebni klic?</em>
            </h2>
            <p className="mt-3 text-text-muted">
              Pustite številko — v <span className="numerals">24</span> urah
              vas pokliče naš svetovalec in razloži, kaj točno ustreza vaši
              situaciji. Brezplačno, brez obveznosti.
            </p>
          </div>

          <BookingForm source="hvala_upsell" heading="Pustite številko za klic" compact />

          <p className="mt-8 text-center text-sm text-text-muted">
            Ali se vrnite na <Link href="/" className="text-navy underline-offset-4 hover:underline">domačo stran</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
