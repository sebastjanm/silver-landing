import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CtaBox } from "@/components/CtaBox";
import { HighlightBox } from "@/components/HighlightBox";

export const metadata: Metadata = {
  title: "Cena srebra danes — Aktualna cena v EUR",
  description:
    "Trenutna cena srebra v evrih na gram in unčo. Zgodovinski podatki, kaj vpliva na ceno srebra in napovedi.",
  keywords: [
    "cena srebra",
    "cena srebra danes",
    "srebro cena",
    "cena srebra na gram",
    "cena srebra EUR",
  ],
  alternates: { canonical: "/cena-srebra" },
  openGraph: {
    title: "Cena srebra danes — Aktualna cena v EUR",
    description:
      "Trenutna cena srebra v evrih. Zgodovinski podatki in analiza.",
    type: "article",
    url: "/cena-srebra",
  },
};

export default function CenaSrebraPage() {
  return (
    <ArticleLayout
      breadcrumb="Cena srebra"
      title="Cena srebra danes"
      subtitle="Nazadnje posodobljeno: Februar 2026"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cena srebra danes — Aktualna cena v EUR",
            description: "Trenutna cena srebra v evrih na gram in unčo.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: { "@type": "Organization", name: "NakupSrebra.com", url: "https://www.nakupsrebra.com" },
            publisher: { "@type": "Organization", name: "NakupSrebra.com" },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.nakupsrebra.com/cena-srebra" },
          }),
        }}
      />

      {/* Live Price Display */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-navy to-navy-light p-10 text-white">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <span className="font-serif text-xl">Aktualna cena srebra</span>
          <span className="text-sm text-white/70">Posodabljam...</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-sm text-white/70">Na gram</div>
            <div className="font-serif text-4xl font-bold text-gold-light">&mdash;</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-sm text-white/70">Na unčo (31,1g)</div>
            <div className="font-serif text-4xl font-bold text-gold-light">&mdash;</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-sm text-white/70">Na kilogram</div>
            <div className="font-serif text-4xl font-bold text-gold-light">&mdash;</div>
          </div>
        </div>
      </div>

      <HighlightBox>
        <p>
          <strong>Pomembno:</strong> Prikazana je &quot;spot&quot; cena srebra — tržna cena
          na borzah. Pri dejanskem nakupu fizičnega srebra plačate tudi premijo (5-25%)
          in morebitni DDV.
        </p>
      </HighlightBox>

      <H2>Kaj je spot cena srebra?</H2>
      <p className="mb-5">
        Spot cena je trenutna tržna cena, po kateri se srebro trguje na svetovnih
        borzah (COMEX, LBMA). Cena se spreminja vsako sekundo med trgovalnimi urami.
      </p>
      <p className="mb-5">
        Spot cena je izhodišče za vse nakupe fizičnega srebra. Prodajalci nanjo dodajo
        premijo, ki pokriva stroške predelave, prevoza in marže.
      </p>

      <H2>Kaj vpliva na ceno srebra?</H2>

      <H3>1. Industrijska poraba</H3>
      <p className="mb-4">
        Približno 50% letne proizvodnje srebra gre v industrijo. Največji porabniki:
      </p>
      <ul className="mb-4 ml-6 space-y-2">
        <li><strong>Sončne celice</strong> — Hitro rastoče povpraševanje zaradi prehoda na obnovljive vire</li>
        <li><strong>Elektronika</strong> — Srebro je najboljši prevodnik elektrike</li>
        <li><strong>Medicina</strong> — Antibakterijske lastnosti</li>
        <li><strong>Avtomobilska industrija</strong> — Električni avtomobili</li>
      </ul>
      <p className="mb-5 text-sm italic text-text-muted">
        Vir: The Silver Institute — World Silver Survey
      </p>

      <H3>2. Naložbeno povpraševanje</H3>
      <p className="mb-4">
        V negotovih časih vlagatelji kupujejo srebro kot &quot;varno zatočišče&quot;.
        Povpraševanje naraste v obdobjih:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li>Visoke inflacije</li>
        <li>Geopolitičnih napetosti</li>
        <li>Nestabilnosti finančnih trgov</li>
        <li>Padanja zaupanja v valute</li>
      </ul>

      <H3>3. Razmerje do zlata</H3>
      <p className="mb-5">
        Razmerje zlato/srebro (kolikokrat je zlato dražje od srebra) zgodovinsko niha
        med 40 in 90. Ko je razmerje visoko, nekateri vlagatelji menijo, da je srebro
        podcenjeno.
      </p>

      <H3>4. Ponudba (rudniki)</H3>
      <p className="mb-5">
        Večina srebra se pridobi kot stranski produkt pri rudarjenju cinka, svinca in
        bakra. Težave v rudarstvu lahko vplivajo na ceno.
      </p>

      <H2>Zgodovinski pregled cen</H2>
      <ComparisonTable
        headers={["Leto", "Povprečna cena (USD/oz)", "Opomba"]}
        rows={[
          ["2020", "$20,55", "COVID-19, začetek rasti"],
          ["2021", "$25,14", "Inflacijski strahovi, Reddit/WSB"],
          ["2022", "$21,76", "Dvig obrestnih mer"],
          ["2023", "$23,35", "Stabilizacija"],
          ["2024", "$28,27", "Rast povpraševanja"],
          ["2011 (vrh)", "$35,12", "Zgodovinski vrh (povp.)"],
        ]}
      />
      <p className="mb-5 text-sm italic text-text-muted">
        Vir: Kitco, LBMA — Povprečne letne cene
      </p>

      <H2>Cena srebra v evrih</H2>
      <p className="mb-5">
        Mednarodna cena srebra je vedno v ameriških dolarjih (USD). Za ceno v evrih
        morate upoštevati tudi tečaj EUR/USD.
      </p>
      <p className="mb-5">
        To pomeni, da lahko cena srebra v evrih raste tudi, če cena v dolarjih
        stagnira — če evro oslabi proti dolarju.
      </p>

      <H2>Razlika med spot ceno in nakupno ceno</H2>
      <p className="mb-4">
        Ko kupujete fizično srebro, plačate več kot je spot cena:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Premija</strong> — 5-25% nad spot ceno (odvisno od oblike)</li>
        <li><strong>DDV</strong> — V Sloveniji 22% (pri določenih načinih nakupa se lahko izognete)</li>
      </ul>
      <p className="mb-5">
        Primer: Če je spot cena 25€/oz, lahko za 1 oz kovanec plačate 25€ + 20%
        premija + 22% DDV = ~36€.
      </p>

      <HighlightBox>
        <p>
          <strong>Nasvet:</strong> Pri nakupu s hrambo v švicarskem carinskem skladišču
          DDV ne plačate. To lahko predstavlja 22% prihranka.
        </p>
      </HighlightBox>

      <H2>Ali je zdaj pravi čas za nakup?</H2>
      <p className="mb-4">
        Nihče — niti najboljši analitiki — ne more zanesljivo napovedati kratkoročnih
        gibanj cene. Nekateri pristopi:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Dollar-cost averaging</strong> — Kupujte vsak mesec enako količino, ne glede na ceno. Povprečite ceno skozi čas.</li>
        <li><strong>Razmerje zlato/srebro</strong> — Nekateri kupujejo srebro, ko je razmerje visoko (srebro relativno poceni).</li>
        <li><strong>Dolgoročni pogled</strong> — Če verjamete v dolgoročno vrednost srebra, je kratkoročna cena manj pomembna.</li>
      </ul>

      <CtaBox
        title="Želite kupiti srebro?"
        text="Pojasnim vam možnosti, stroške in vam pomagam izbrati najboljšo pot za vašo situacijo."
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
