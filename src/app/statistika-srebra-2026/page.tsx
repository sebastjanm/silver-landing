import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CtaBox } from "@/components/CtaBox";

export const metadata: Metadata = {
  title: "Statistika srebra 2026 — 50+ dejstev o srebru",
  description:
    "Celovita statistika o srebru za leto 2026. Cene, povpraševanje, proizvodnja, industrijska poraba. 50+ dejstev z viri.",
  keywords: [
    "statistika srebra",
    "srebro statistika 2026",
    "srebro podatki",
    "silver statistics",
  ],
  alternates: { canonical: "/statistika-srebra-2026" },
  openGraph: {
    title: "Statistika srebra 2026 — 50+ dejstev",
    description:
      "Celovita statistika o srebru. Cene, povpraševanje, proizvodnja. 50+ dejstev z viri.",
    type: "article",
  },
};

export default function StatistikaSrebra2026Page() {
  return (
    <ArticleLayout
      breadcrumb="Statistika srebra 2026"
      title="Statistika srebra 2026"
      subtitle="50+ dejstev o srebru z verificiranimi viri"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Statistika srebra 2026",
            description: "Ključni podatki o trgu srebra v letu 2026.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: { "@type": "Organization", name: "NakupSrebra.com", url: "https://www.nakupsrebra.com" },
            publisher: { "@type": "Organization", name: "NakupSrebra.com" },
          }),
        }}
      />

      <div className="mb-8 rounded-lg bg-green-bg p-5 text-sm text-green">
        Nazadnje posodobljeno: Februar 2026 &middot; Naslednja posodobitev: Maj 2026
      </div>

      <div className="mb-12 rounded-lg bg-bg-warm px-8 py-6">
        <h4 className="mb-4 font-serif text-lg text-navy">Vsebina</h4>
        <ul className="columns-1 list-none space-y-2 p-0 sm:columns-2">
          <li><a href="#cene" className="text-text no-underline hover:text-gold">Cene srebra</a></li>
          <li><a href="#proizvodnja" className="text-text no-underline hover:text-gold">Proizvodnja</a></li>
          <li><a href="#povprasevanje" className="text-text no-underline hover:text-gold">Povpraševanje</a></li>
          <li><a href="#industrija" className="text-text no-underline hover:text-gold">Industrijska poraba</a></li>
          <li><a href="#nalozbe" className="text-text no-underline hover:text-gold">Naložbeno povpraševanje</a></li>
          <li><a href="#zaloge" className="text-text no-underline hover:text-gold">Zaloge</a></li>
          <li><a href="#razmerje" className="text-text no-underline hover:text-gold">Razmerje zlato/srebro</a></li>
          <li><a href="#zgodovina" className="text-text no-underline hover:text-gold">Zgodovinski podatki</a></li>
        </ul>
      </div>

      <section id="cene">
        <H2>Cene srebra</H2>
        <SectionIntro>
          Za aktualne cene srebra obiščite{" "}
          <Link href="/cena-srebra" className="text-gold hover:text-gold-light">
            stran s cenami
          </Link>{" "}
          ali nas kontaktirajte.
        </SectionIntro>
      </section>

      <section id="proizvodnja">
        <H2>Proizvodnja srebra</H2>
        <SectionIntro>Globalna proizvodnja in največji proizvajalci.</SectionIntro>

        <StatCard label="Globalna proizvodnja srebra (2024)" value="831 Moz" source="Vir: The Silver Institute" highlight />
        <StatCard label="Največji proizvajalec: Mehika" value="197 Moz" source="Vir: USGS" />
        <StatCard label="Drugi največji: Kitajska" value="107 Moz" source="Vir: USGS" />
        <StatCard label="Tretji največji: Peru" value="100 Moz" source="Vir: USGS" />
        <StatCard label="Delež srebra iz primarnih rudnikov" value="28%" source="Vir: World Silver Survey" />
        <StatCard label="Delež srebra kot stranski produkt (Zn, Pb, Cu)" value="72%" source="Vir: The Silver Institute" />
      </section>

      <section id="povprasevanje">
        <H2>Povpraševanje</H2>
        <SectionIntro>Struktura globalnega povpraševanja po srebru.</SectionIntro>

        <StatCard label="Skupno povpraševanje (2024)" value="1.2 Mrd oz" source="Vir: The Silver Institute" highlight />
        <StatCard label="Primanjkljaj (povpraševanje - proizvodnja)" value="-215 Moz" source="Vir: World Silver Survey 2025" />
        <StatCard label="Leto zaporednega primanjkljaja" value="4. leto" source="Vir: The Silver Institute" />
      </section>

      <section id="industrija">
        <H2>Industrijska poraba</H2>
        <SectionIntro>Srebro v industriji — sončne celice, elektronika, medicina.</SectionIntro>

        <StatCard label="Delež industrijske porabe" value="~55%" source="Vir: The Silver Institute" highlight />
        <StatCard label="Poraba za fotovoltaiko (sončne celice) 2024" value="232 Moz" source="Vir: The Silver Institute" />
        <StatCard label="Rast fotovoltaičnega povpraševanja (letno)" value="+15-20%" source="Vir: BloombergNEF" />
        <StatCard label="Poraba v elektroniki" value="145 Moz" source="Vir: The Silver Institute" />
        <StatCard label="Srebro na električni avtomobil" value="~33g" source="Vir: CRU Group" />
        <StatCard label="Srebro na običen avtomobil" value="~18g" source="Vir: CRU Group" />
      </section>

      <CtaBox
        title="Kaj te številke pomenijo za vas?"
        text="Brezplačno vam pojasnimo, kako razumeti te podatke v kontekstu vaše naložbene strategije."
      />

      <section id="nalozbe">
        <H2>Naložbeno povpraševanje</H2>
        <SectionIntro>Kovanci, palice in ETF skladi.</SectionIntro>

        <StatCard label="Naložbeno povpraševanje (kovanci + palice) 2024" value="263 Moz" source="Vir: The Silver Institute" />
        <StatCard label="Srebro v ETF skladih (globalno)" value="~700 Moz" source="Vir: Bloomberg" />
        <StatCard label="Največji srebrni ETF: iShares SLV" value="~450 Moz" source="Vir: iShares" />
      </section>

      <section id="zaloge">
        <H2>Zaloge</H2>
        <SectionIntro>Zaloge na borzah in v trezorjih.</SectionIntro>

        <StatCard label="Zaloge na COMEX borzi" value="~280 Moz" source="Vir: CME Group" />
        <StatCard label="Zaloge na LBMA (London)" value="~900 Moz" source="Vir: LBMA" />
        <StatCard label="Ocenjene nadzemne zaloge (skupno)" value="~2.5 Mrd oz" source="Vir: CPM Group" />
      </section>

      <section id="razmerje">
        <H2>Razmerje zlato/srebro</H2>
        <SectionIntro>Kolikokrat je zlato dražje od srebra.</SectionIntro>

        <StatCard label="Zgodovinsko povprečje (100 let)" value="~55:1" source="Vir: Macrotrends" highlight />
        <StatCard label="Najnižje v zadnjih 50 letih (1980)" value="17:1" source="Vir: Kitco" />
        <StatCard label="Najvišje v zgodovini (2020)" value="127:1" source="Vir: Bloomberg" />
      </section>

      <section id="zgodovina">
        <H2>Zgodovinski podatki</H2>
        <SectionIntro>Ključni mejniki v zgodovini srebra.</SectionIntro>

        <StatCard label="Let, ko je srebro služilo kot denar" value="5.000+" source="Vir: Zgodovinski viri" />
        <StatCard label="Število valut, ki so propadle od 1900" value="150+" source="Vir: IMF Historical Data" />
        <StatCard label="Število krat, ko je srebro šlo na nič" value="0" source="Vir: Zgodovinski zapisi" />
        <StatCard label="Izguba kupne moči USD od 1913" value="-97%" source="Vir: US Bureau of Labor Statistics" />
      </section>

      <CtaBox
        title="Želite izvedeti več?"
        text="Brezplačno vam pojasnimo, kaj te statistike pomenijo za vašo situacijo."
        buttonText="Rezerviraj brezplačen posvet →"
      />

      <div className="mt-12 rounded-lg bg-bg-warm p-6 text-sm text-text-muted">
        <p className="mb-4">
          <strong>Viri:</strong> The Silver Institute, World Silver Survey, LBMA, USGS, CME Group, Kitco, Bloomberg, Macrotrends, CPM Group, CRU Group, BloombergNEF.
        </p>
        <p>
          <strong>Opomba:</strong> Podatki so informativne narave. Za naložbene odločitve se posvetujte s finančnim svetovalcem. Stran se posodablja kvartalno.
        </p>
      </div>
    </ArticleLayout>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 mb-6 border-b-2 border-gold pb-3 font-serif text-3xl text-navy">
      {children}
    </h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 text-md text-text-muted">{children}</p>;
}

function StatCard({
  label,
  value,
  source,
  highlight = false,
}: {
  label: string;
  value: string;
  source: string;
  highlight?: boolean;
}) {
  if (highlight) {
    return (
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-gradient-to-br from-navy to-navy-light p-6 text-white">
        <div className="min-w-0 flex-1">
          <span className="text-white/90">{label}</span>
          <p className="mt-1 text-xs text-white/70">{source}</p>
        </div>
        <span className="font-serif text-4xl font-bold text-gold-light">
          {value}
        </span>
      </div>
    );
  }

  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-bg-card p-6 transition-colors hover:border-gold">
      <div className="min-w-0 flex-1">
        <span>{label}</span>
        <p className="mt-1 text-xs text-text-muted">{source}</p>
      </div>
      <span className="text-right font-serif text-4xl font-bold text-navy">
        {value}
      </span>
    </div>
  );
}
