import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvala za prijavo!",
  description:
    "Hvala za prijavo. Kmalu boste prejeli brezplačen vodnik o naložbah v srebro.",
  alternates: { canonical: "/hvala" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Hvala za prijavo! | Nakup Srebra",
    description:
      "Kmalu boste prejeli brezplačen vodnik o naložbah v srebro.",
    type: "website",
    url: "/hvala",
  },
};

export default function HvalaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hvala za prijavo",
            description:
              "Potrditev prijave na vodnik o naložbah v srebro.",
            isPartOf: {
              "@type": "WebSite",
              name: "NakupSrebra.com",
              url: "https://www.nakupsrebra.com",
            },
          }),
        }}
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16 text-center lg:px-8">
        <div className="mb-6 text-hero leading-none">🥈</div>
        <h1 className="mb-4 font-serif text-4xl text-navy">
          Vaš vodnik je pripravljen!
        </h1>
        <p className="mb-8 text-xl text-text">
          Kliknite spodaj za prenos PDF vodnika.
        </p>

        {/* Download box */}
        <div className="mb-8 w-full rounded-xl bg-bg-card p-6 text-center shadow-sm">
          <h3 className="mb-3 font-serif text-xl text-navy">
            📥 Prenesite vodnik
          </h3>
          <p className="mb-5 text-sm text-text">
            25 strani praktičnih nasvetov za začetnike
          </p>
          <a
            href="/assets/vodnik-srebro-2026.pdf"
            download
            className="inline-block rounded-lg bg-gold px-10 py-4 text-xl font-semibold text-white transition-all hover:-translate-y-px hover:bg-gold-light"
          >
            Prenesi PDF vodnik →
          </a>
        </div>

        {/* Info box */}
        <div className="mb-8 w-full rounded-xl bg-bg-card p-6 text-left shadow-sm">
          <h3 className="mb-3 font-serif text-xl text-navy">
            📖 Kaj boste izvedeli:
          </h3>
          <ul className="ml-5 list-disc text-text">
            <li className="mb-1.5">
              Zakaj je srebro zanimiva naložba v 2026
            </li>
            <li className="mb-1.5">Kako in kje kupiti fizično srebro</li>
            <li className="mb-1.5">Pravila hrambe in varnosti</li>
            <li className="mb-1.5">
              5 najpogostejših napak začetnikov
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <p className="mb-4 text-text">
            <strong>Želite osebno pomoč?</strong>
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/posvet"
              className="inline-block rounded-lg bg-gold px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-px hover:bg-gold-light"
            >
              Rezerviraj brezplačen posvet
            </Link>
            <Link
              href="/"
              className="inline-block rounded-lg border-2 border-navy bg-transparent px-8 py-3.5 font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              Nazaj na stran
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-gold no-underline hover:underline">
            ← nakupsrebra.com
          </Link>
        </div>
      </div>
    </>
  );
}
