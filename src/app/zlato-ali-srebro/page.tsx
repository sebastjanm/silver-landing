import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CtaBox } from "@/components/CtaBox";
import { HighlightBox } from "@/components/HighlightBox";

export const metadata: Metadata = {
  title: "Zlato ali srebro? Katera kovina je boljša naložba | NakupSrebra.com",
  description:
    "Primerjava zlata in srebra kot naložbe. Katera kovina je boljša za vas? Prednosti, slabosti in kdaj izbrati katero.",
  keywords: ["zlato ali srebro", "srebro vs zlato", "primerjava zlato srebro", "naložba zlato srebro"],
  alternates: { canonical: "/zlato-ali-srebro" },
  openGraph: {
    title: "Zlato ali srebro? Katera kovina je boljša naložba",
    description: "Primerjava zlata in srebra kot naložbe. Prednosti, slabosti in kdaj izbrati katero.",
    type: "article",
    url: "/zlato-ali-srebro",
  },
};

export default function ZlatoAliSrebroPage() {
  return (
    <ArticleLayout
      breadcrumb="Zlato ali srebro?"
      title="Zlato ali srebro?"
      subtitle="Katera plemenita kovina je boljša naložba za vas"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Zlato ali srebro — Kam vložiti?",
            description: "Primerjava zlata in srebra kot naložbenih sredstev.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: { "@type": "Organization", name: "NakupSrebra.com", url: "https://www.nakupsrebra.com" },
            publisher: { "@type": "Organization", name: "NakupSrebra.com" },
          }),
        }}
      />

      <div className="mb-12 rounded-xl bg-navy p-8 text-white">
        <h3 className="mb-4 font-serif text-xl text-gold-light">Na kratko</h3>
        <ul className="ml-5 space-y-2 text-white/90">
          <li><strong>Zlato</strong> — Stabilnejše, uveljavljeno varno zatočišče, primerno za ohranjanje vrednosti</li>
          <li><strong>Srebro</strong> — Bolj volatilno, cenejše za začetek, večji potencial (in tveganje)</li>
          <li><strong>Večina vlagateljev</strong> — Kombinira oboje (npr. 70% zlato, 30% srebro)</li>
        </ul>
      </div>

      <div className="space-y-5">
        <p>
          Vprašanje &quot;zlato ali srebro?&quot; nima enega pravega odgovora. Obe kovini imata svoje prednosti in slabosti. Prava izbira je odvisna od vaših ciljev, proračuna in odnosa do tveganja.
        </p>
      </div>

      <H2>Hitra primerjava</H2>

      <div className="my-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border border-t-4 border-t-gold-light bg-white p-7">
          <h4 className="mb-4 font-serif text-xl text-navy">🥇 Zlato</h4>
          <ul className="ml-5 space-y-2">
            <li>Bolj stabilna cena</li>
            <li>Uveljavljeno &quot;varno zatočišče&quot;</li>
            <li>Manjša volatilnost</li>
            <li>Brez DDV v Sloveniji</li>
            <li>Višja cena na gram</li>
            <li>Lažja hramba (manj prostora)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border border-t-4 border-t-silver bg-white p-7">
          <h4 className="mb-4 font-serif text-xl text-navy">🥈 Srebro</h4>
          <ul className="ml-5 space-y-2">
            <li>Bolj volatilna cena</li>
            <li>Večji potencialni dobiček</li>
            <li>Cenejše za začetek</li>
            <li>22% DDV v Sloveniji*</li>
            <li>Nižja cena na gram</li>
            <li>Industrijska uporaba</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-text-muted">
        *DDV se lahko izognete s hrambo v švicarskem carinskem skladišču.
      </p>

      <H2>Podrobna primerjava</H2>
      <ComparisonTable
        headers={["Kriterij", "🥇 Zlato", "🥈 Srebro"]}
        rows={[
          ["<strong>Cena (feb 2026)</strong>", "~€60/gram", "~€1/gram"],
          ["<strong>Volatilnost</strong>", "Nižja", "Višja (2-3x zlata)"],
          ["<strong>Donosnost (20 let)</strong>", "+450%", "+300%"],
          ["<strong>Industrijska poraba</strong>", "~10%", "~50%"],
          ["<strong>DDV v Sloveniji</strong>", "0%", "22%"],
          ["<strong>Hramba</strong>", "Enostavnejša", "Potrebuje več prostora"],
          ["<strong>Likvidnost</strong>", "Odlična", "Zelo dobra"],
        ]}
      />

      <H2>Kdaj izbrati zlato?</H2>
      <p className="mb-4">Zlato je boljša izbira, če:</p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Želite stabilnost</strong> — Zlato manj niha kot srebro</li>
        <li><strong>Imate večji proračun</strong> — Zlato je učinkovitejše za večje zneske</li>
        <li><strong>Vam je DDV pomemben</strong> — Nakup zlata v Sloveniji je brez DDV</li>
        <li><strong>Želite enostavno hrambo</strong> — Za isto vrednost zlato zavzame manj prostora</li>
        <li><strong>Iščete dolgoročno ohranjanje vrednosti</strong> — Zlato je 5.000 let merilo bogastva</li>
      </ul>

      <H2>Kdaj izbrati srebro?</H2>
      <p className="mb-4">Srebro je boljša izbira, če:</p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Imate manjši proračun</strong> — Začnete lahko že s 50-100€</li>
        <li><strong>Želite večji potencial</strong> — Srebro v bikovskih trgih pogosto raste hitreje od zlata</li>
        <li><strong>Sprejemate večje tveganje</strong> — Z večjim potencialom pride večja volatilnost</li>
        <li><strong>Verjamete v industrijski potencial</strong> — Sončne celice, elektronika, EV</li>
        <li><strong>Se lahko izognete DDV</strong> — S hrambo v Švici DDV ni</li>
      </ul>

      <H2>Razmerje zlato/srebro</H2>
      <p className="mb-5">
        Razmerje zlato/srebro (Gold-Silver Ratio) pove, kolikokrat je zlato dražje od srebra. Zgodovinsko niha med 40 in 90.
      </p>

      <HighlightBox>
        <p className="mb-3">
          <strong>Trenutno razmerje:</strong> ~55-60 (februar 2026)
        </p>
        <p>
          Zgodovinsko povprečje: ~55. Ko je razmerje visoko (nad 70), nekateri vlagatelji menijo, da je srebro podcenjeno glede na zlato.
        </p>
      </HighlightBox>

      <p className="mb-5">
        Nekateri vlagatelji uporabljajo to razmerje za menjavo med kovinami — prodajo srebro in kupijo zlato, ko je razmerje nizko, in obratno.
      </p>

      <H2>Zakaj ne oboje?</H2>
      <p className="mb-4">
        Večina izkušenih vlagateljev v plemenite kovine ima <strong>kombinacijo obeh</strong>. Tipična razdelitev:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Konzervativni:</strong> 80% zlato, 20% srebro</li>
        <li><strong>Uravnoteženi:</strong> 70% zlato, 30% srebro</li>
        <li><strong>Agresivnejši:</strong> 50% zlato, 50% srebro</li>
      </ul>
      <p className="mb-5">
        Zlato daje stabilnost, srebro potencial. Kombinacija vam daje oboje.
      </p>

      <div className="my-8 rounded-r-lg border-l-4 border-green bg-green-bg py-6 pr-6 pl-6">
        <p>
          <strong>Naše mnenje:</strong> Za večino začetnikov priporočamo začetek s srebrom (nižji vstopni prag), nato postopno dodajanje zlata. Če imate večji proračun, začnite z zlato-srebrno kombinacijo takoj.
        </p>
      </div>

      <H2>Pogosta vprašanja</H2>

      <H3>Ali je srebro &quot;poceni zlato&quot;?</H3>
      <p className="mb-5">
        Ne. Srebro ima drugačne značilnosti — večjo volatilnost, več industrijske uporabe. Je drugačna naložba, ne slabša verzija zlata.
      </p>

      <H3>Kaj je boljše za zaščito pred inflacijo?</H3>
      <p className="mb-5">
        Zlato ima daljšo zgodovino kot zaščita pred inflacijo. Srebro lahko v inflacijskih obdobjih raste hitreje, a tudi hitreje pade.
      </p>

      <H3>Kaj je lažje prodati?</H3>
      <p className="mb-5">
        Obe kovini sta visoko likvidni. Zlato je nekoliko lažje prodati zaradi višje vrednosti na enoto in širše prepoznavnosti.
      </p>

      <H3>Kaj če ne vem, kaj izbrati?</H3>
      <p className="mb-5">
        Začnite s pogovorom. Naš svetovalec vam brezplačno razloži, katera opcija je smiselna za vašo situacijo.
      </p>

      <CtaBox
        title="Potrebujete pomoč pri odločitvi?"
        text="Pogovorimo se o vaših ciljih. Pomagamo vam izbrati pravo kombinacijo za vašo situacijo — brez obveznosti."
      />
    </ArticleLayout>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-5 border-b border-border pb-3 font-serif text-3xl text-navy">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 font-serif text-xl text-navy">
      {children}
    </h3>
  );
}
