import type { Metadata } from "next";
import Link from "next/link";
import { EmailCapture } from "@/components/EmailCapture";
import { HighlightBox, WarningBox } from "@/components/HighlightBox";

export const metadata: Metadata = {
  title: "Kako začeti z naložbo v srebro — Brezplačen vodnik",
  description:
    "Brezplačen vodnik za začetnike: kako kupiti srebro, kje hraniti, koliko vložiti. Praktični nasveti za varne naložbe v plemenite kovine.",
  alternates: { canonical: "/vodnik/vodnik-srebro" },
  openGraph: {
    title: "Kako začeti z naložbo v srebro — Brezplačen vodnik",
    description:
      "Brezplačen vodnik za začetnike: kako kupiti srebro, kje hraniti, koliko vložiti.",
    type: "article",
    url: "/vodnik/vodnik-srebro",
  },
};

const tocItems = [
  { chapter: "1. Zakaj srebro v letu 2026", page: "3" },
  { chapter: "2. Osnove plemenitih kovin", page: "5" },
  { chapter: "3. Kdaj je pravi čas za nakup", page: "8" },
  { chapter: "4. Kako kupiti srebro", page: "10" },
  { chapter: "5. Hramba in varnost", page: "13" },
  { chapter: "6. Davki in zakonodaja v Sloveniji", page: "15" },
  { chapter: "7. Pet napak začetnikov", page: "17" },
  { chapter: "8. Vaši naslednji koraki", page: "19" },
];

export default function VodnikSrebroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kako začeti z naložbo v srebro",
            description: "Brezplačen vodnik za začetnike.",
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
              "@id": "https://www.nakupsrebra.com/vodnik/vodnik-srebro",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy to-navy-light py-20 text-center text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-5xl">🥈</div>
          <h1 className="mb-4 font-serif text-5xl font-normal leading-tight text-white">
            Kako začeti
            <br />z naložbo v srebro
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Praktičen vodnik za začetnike
          </p>
          <p className="text-sm text-white/60">nakupsrebra.com · 2026</p>
        </div>
        </div>
      </div>

      {/* Content Preview */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl text-navy">
            Kaj boste izvedeli
          </h2>
          <p className="text-text-muted">
            Vse kar morate vedeti, preden kupite prvo unčo.
          </p>
        </div>

        {/* TOC */}
        <div className="mb-12 rounded-lg bg-bg-warm p-8">
          <div className="space-y-3">
            {tocItems.map((item) => (
              <div
                key={item.chapter}
                className="flex items-center justify-between border-b border-dotted border-border py-2 last:border-b-0"
              >
                <span className="font-semibold text-navy">{item.chapter}</span>
                <span className="text-text-muted">{item.page}</span>
              </div>
            ))}
          </div>
        </div>

        {/* About box */}
        <HighlightBox>
          <p className="mb-2 font-semibold text-navy">O tem vodniku</p>
          <p>
            Ta vodnik je napisan za ljudi, ki razmišljajo o nakupu srebra, a ne
            vedo, kje začeti. Brez prodajnega pritiska. Brez skritih namenov.
            Samo informacije, ki bi jih želel imeti, ko sem sam začenjal.
          </p>
        </HighlightBox>

        {/* Key highlights */}
        <h2 className="mt-12 mb-5 border-b border-border pb-3 font-serif text-3xl text-navy">
          Zakaj srebro v letu 2026
        </h2>

        <p className="mb-5">
          Centralne banke po vsem svetu so v zadnjih letih natisnile več
          denarja kot kadarkoli v zgodovini. Srebro je hranilo vrednost več
          kot <strong>5.000 let</strong>.
        </p>

        <HighlightBox>
          <p>
            <strong>Dejstvo:</strong> Od leta 1971, ko je Nixon ukinil zlati
            standard, je ameriški dolar izgubil več kot 85% svoje kupne moči.
            Srebro? Še vedno tukaj.
          </p>
        </HighlightBox>

        <h2 className="mt-12 mb-5 border-b border-border pb-3 font-serif text-3xl text-navy">
          Za koga je ta vodnik
        </h2>

        <p className="mb-4">Srebro je odlična izbira za ljudi, ki:</p>

        <ul className="mb-5 ml-6 space-y-2">
          <li>
            Želijo <strong>diverzificirati</strong> prihranke izven bančnega
            sistema
          </li>
          <li>
            Iščejo <strong>zaščito pred inflacijo</strong>
          </li>
          <li>
            Razmišljajo <strong>dolgoročno</strong> (5+ let)
          </li>
          <li>
            Cenijo <strong>fizično lastništvo</strong> premoženja
          </li>
          <li>
            Želijo <strong>preprosto</strong> naložbo brez zapletenih
            finančnih produktov
          </li>
        </ul>

        <WarningBox>
          <p>
            <strong>Pomembno opozorilo:</strong> Srebro ni shema za hitro
            bogastvo. Cena niha — včasih močno. Nikoli ne vlagajte denarja, ki
            ga potrebujete na kratki rok.
          </p>
        </WarningBox>

        {/* CTA to download */}
        <div className="my-16 rounded-xl bg-gradient-to-br from-navy to-navy-light p-10 text-center text-white">
          <h3 className="mb-3 font-serif text-2xl text-white">
            Prenesite brezplačen vodnik (PDF)
          </h3>
          <p className="mb-6 text-white/85">
            25 strani praktičnih nasvetov za začetnike. Brez spama, brez
            obveznosti.
          </p>
        </div>

        <EmailCapture />

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-text-muted">
            Že pripravljeni na naslednji korak?
          </p>
          <Link
            href="/posvet"
            className="inline-block rounded-lg bg-navy px-8 py-4 font-semibold text-white transition-all hover:bg-navy-light"
          >
            Rezerviraj brezplačen posvet →
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
