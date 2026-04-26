import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CtaBox } from "@/components/CtaBox";
import { HighlightBox, WarningBox } from "@/components/HighlightBox";

export const metadata: Metadata = {
  title: "Fizično srebro vs ETF — Katera naložba je boljša?",
  description:
    "Primerjava fizičnega srebra in srebrnih ETF skladov. Prednosti, slabosti, stroški. Katera oblika naložbe v srebro je primerna za vas?",
  keywords: ["srebro vs ETF", "srebrni ETF", "fizično srebro", "SLV", "iShares Silver"],
  alternates: { canonical: "/srebro-vs-etf" },
  openGraph: {
    title: "Fizično srebro ali ETF: Kaj je boljša naložba?",
    description: "Primerjava fizičnega srebra in ETF skladov. Prednosti in slabosti obeh pristopov.",
    type: "article",
    url: "/srebro-vs-etf",
  },
};

export default function SrebroVsEtfPage() {
  return (
    <ArticleLayout
      breadcrumb="Fizično srebro vs ETF"
      title="Fizično srebro vs ETF"
      subtitle="Katera oblika naložbe v srebro je primerna za vas?"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Fizično srebro ali ETF?",
            description: "Primerjava fizičnega srebra in ETF skladov.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: { "@type": "Organization", name: "NakupSrebra.com", url: "https://www.nakupsrebra.com" },
            publisher: { "@type": "Organization", name: "NakupSrebra.com" },
          }),
        }}
      />

      <div className="space-y-5">
        <p>
          Če želite vlagati v srebro, imate dve osnovni možnosti: kupite fizično
          srebro (kovance, palice) ali kupite delnice srebrnega ETF sklada (npr.
          SLV, SIVR).
        </p>
        <p>
          Obe možnosti vam dajeta izpostavljenost ceni srebra — toda z
          različnimi prednostmi, tveganji in stroški.
        </p>
      </div>

      {/* Comparison cards */}
      <div className="my-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border border-t-4 border-t-silver bg-white p-7">
          <h4 className="mb-4 font-serif text-xl text-navy">🥈 Fizično srebro</h4>
          <ul className="ml-5 space-y-2">
            <li>Dejansko lastništvo kovine</li>
            <li>Zunaj finančnega sistema</li>
            <li>Ni nasprotne stranke</li>
            <li>Potrebuje hrambo</li>
            <li>DDV pri nakupu (22%)*</li>
            <li>Premija nad spot ceno</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border border-t-4 border-t-blue bg-white p-7">
          <h4 className="mb-4 font-serif text-xl text-navy">📈 Srebrni ETF</h4>
          <ul className="ml-5 space-y-2">
            <li>Papirno lastništvo</li>
            <li>Del finančnega sistema</li>
            <li>Odvisno od upravljavca</li>
            <li>Ni potrebe po hrambi</li>
            <li>Brez DDV</li>
            <li>Nizki stroški upravljanja</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-text-muted">
        *DDV se lahko izognete s hrambo v švicarskem carinskem skladišču
      </p>

      <H2>Kaj je srebrni ETF?</H2>
      <p className="mb-5">
        ETF (Exchange-Traded Fund) je sklad, ki se trguje na borzi kot delnica.
        Srebrni ETF naj bi bil podprt s fizičnim srebrom v trezorjih. Ko kupite
        delnico ETF, posredno &quot;imate&quot; delež tega srebra.
      </p>
      <p className="mb-3">Najpopularnejši srebrni ETF skladi:</p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>SLV</strong> — iShares Silver Trust (največji, ~14 mrd USD)</li>
        <li><strong>SIVR</strong> — Aberdeen Standard Physical Silver Shares</li>
        <li><strong>PSLV</strong> — Sprott Physical Silver Trust</li>
      </ul>

      <H2>Podrobna primerjava</H2>
      <ComparisonTable
        headers={["Kriterij", "Fizično srebro", "Srebrni ETF"]}
        rows={[
          ["<strong>Lastništvo</strong>", "Dejansko (vaše ime)", "Posredno (delež sklada)"],
          ["<strong>Nasprotna stranka</strong>", "Ni je", "Upravljavec sklada"],
          ["<strong>Vstopni stroški</strong>", "Premija + DDV (5-25% + 22%)", "Borzna provizija (~0,1%)"],
          ["<strong>Tekoči stroški</strong>", "Hramba (0,5-1%/leto)*", "TER (0,4-0,5%/leto)"],
          ["<strong>Likvidnost</strong>", "Srednja (potreben prodajalec)", "Visoka (borza)"],
          ["<strong>Minimalni nakup</strong>", "~30€ (1 oz kovanec)", "Cena 1 delnice (~25€)"],
        ]}
      />
      <p className="text-sm text-text-muted">
        *Pri hrambi doma stroški odvisni od vaše rešitve (sef, zavarovanje)
      </p>

      <H2>Kdaj izbrati fizično srebro?</H2>
      <p className="mb-4">Fizično srebro je boljša izbira, če:</p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Želite dejansko lastništvo</strong> — Srebro je vaše, ne delež sklada</li>
        <li><strong>Ne zaupate finančnemu sistemu</strong> — Fizično srebro je zunaj bank in skladov</li>
        <li><strong>Želite zaščito pred sistemskim tveganjem</strong> — Če propadejo banke, ETF skladi, borze... fizično srebro ostane</li>
        <li><strong>Imate dolgoročni horizont</strong> — Višji vstopni stroški se sčasoma izničijo</li>
        <li><strong>Cenite zasebnost</strong> — Fizično srebro ni vezano na borzni račun</li>
      </ul>

      <H2>Kdaj izbrati ETF?</H2>
      <p className="mb-4">ETF je boljša izbira, če:</p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Želite nizke stroške</strong> — Brez DDV, brez premije, nizka provizija</li>
        <li><strong>Potrebujete likvidnost</strong> — Prodate v sekundi na borzi</li>
        <li><strong>Imate kratek horizont</strong> — Za kratkoročno trgovanje je ETF cenejši</li>
        <li><strong>Že imate borzni račun</strong> — Enostavno dodate v obstoječi portfelj</li>
        <li><strong>Ne želite skrbeti za hrambo</strong> — Ni sefov, zavarovanja, prostora</li>
      </ul>

      <H2>Ključna razlika: tveganje nasprotne stranke</H2>
      <WarningBox>
        <p className="mb-3">
          <strong>Pri ETF imate nasprotno stranko.</strong> Zaupate upravljavcu
          sklada, da ima dejansko srebro, da je varno, da bo sklad deloval tudi
          v krizi. Če upravljavec goljufa ali propade — lahko izgubite.
        </p>
        <p>
          Pri fizičnem srebru ni nasprotne stranke. Če imate srebro v sefu — ga
          imate. Nihče drug ni vpleten.
        </p>
      </WarningBox>
      <p className="mb-5">
        To je glavni razlog, zakaj mnogi vlagatelji v plemenite kovine
        preferirajo fizično srebro — zlasti tisti, ki kovine kupujejo kot
        zaščito pred sistemskim tveganjem.
      </p>

      <H2>Stroški: podrobna primerjava</H2>
      <H3>Fizično srebro — primer</H3>
      <p className="mb-3">Nakup 100 oz srebra (spot cena 2.500€):</p>
      <ul className="mb-4 ml-6 space-y-2">
        <li>Premija 15%: +375€</li>
        <li>DDV 22%: +632€ (na 2.875€)</li>
        <li><strong>Skupaj: 3.507€</strong> (40% nad spot)</li>
      </ul>
      <p className="mb-5">
        Toda: z nakupom s hrambo v Švici izpustite DDV → 2.875€ (15% nad spot)
      </p>

      <H3>ETF — primer</H3>
      <p className="mb-3">Nakup za 2.500€ srebra preko ETF:</p>
      <ul className="mb-4 ml-6 space-y-2">
        <li>Borzna provizija: ~3€</li>
        <li>TER letno: ~12€/leto</li>
        <li><strong>Skupaj leto 1: ~2.515€</strong></li>
      </ul>

      <HighlightBox>
        <p>
          <strong>Kdaj se fizično srebro izplača?</strong> Pri daljšem obdobju
          (5+ let) in z izogibom DDV (švicarska hramba) fizično srebro postane
          konkurenčno ali cenejše od ETF — hkrati pa imate dejansko lastništvo
          in nobene nasprotne stranke.
        </p>
      </HighlightBox>

      <H2>Ali zakaj ne oboje?</H2>
      <p className="mb-4">Nekateri vlagatelji kombinirajo:</p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Fizično srebro</strong> — Jedro portfelja, dolgoročna zaščita</li>
        <li><strong>ETF</strong> — Za kratkoročno trgovanje ali dodaten del</li>
      </ul>
      <p className="mb-5">To vam daje prednosti obeh pristopov.</p>

      <H2>Pogosta vprašanja</H2>
      <H3>Ali ETF res ima srebro?</H3>
      <p className="mb-5">
        Večji ETF skladi (SLV, PSLV) objavljajo sezname palic. Toda revizije
        niso popolne. PSLV (Sprott) ima najboljšo preglednost — omogoča celo
        odkup fizičnega srebra.
      </p>
      <H3>Kaj se zgodi z ETF v krizi?</H3>
      <p className="mb-5">
        V finančni krizi lahko pride do zamrznitve trgovanja, likvidnostnih
        težav ali celo propada sklada. Fizično srebro teh tveganj nima.
      </p>
      <H3>Kateri ETF je najboljši?</H3>
      <p className="mb-5">
        Za fizično kritje: PSLV (Sprott). Za likvidnost: SLV (iShares). Za
        evropske vlagatelje: preverite dostopnost in davčno obravnavo v vaši
        državi.
      </p>

      <CtaBox
        title="Razmišljate o fizičnem srebru?"
        text="Pomagam vam razumeti možnosti in izbrati pravo pot. Brezplačen posvet."
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
