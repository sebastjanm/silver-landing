import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CtaBox } from "@/components/CtaBox";
import { HighlightBox } from "@/components/HighlightBox";

export const metadata: Metadata = {
  title: "Vrednost srebra — Zakaj ima srebro vrednost?",
  description:
    "Zakaj ima srebro vrednost že 5.000 let? Zgodovina, industrijska uporaba in zakaj bo srebro ohranilo vrednost tudi v prihodnosti.",
  keywords: [
    "vrednost srebra",
    "zakaj ima srebro vrednost",
    "srebro naložba",
    "srebro zgodovina",
  ],
  alternates: { canonical: "/vrednost-srebra" },
  openGraph: {
    title: "Vrednost srebra skozi čas | NakupSrebra.com",
    description:
      "Kako se je vrednost srebra spreminjala skozi zgodovino in zakaj je pomembna naložba.",
    type: "article",
    url: "/vrednost-srebra",
  },
};

export default function VrednostSrebraPage() {
  return (
    <ArticleLayout
      breadcrumb="Vrednost srebra"
      title="Zakaj ima srebro vrednost?"
      subtitle="5.000 let zgodovine in sodobna industrijska poraba"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vrednost srebra skozi čas",
            description: "Kako se je vrednost srebra spreminjala skozi zgodovino.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: { "@type": "Organization", name: "NakupSrebra.com", url: "https://www.nakupsrebra.com" },
            publisher: { "@type": "Organization", name: "NakupSrebra.com" },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.nakupsrebra.com/vrednost-srebra" },
          }),
        }}
      />

      <div className="space-y-5">
        <p>
          Srebro je imelo vrednost od začetka civilizacije. Za razliko od papirnatega denarja, ki ga lahko tiskajo v neomejenih količinah, je srebro fizično omejeno — na Zemlji ga je le toliko, kolikor ga je.
        </p>
        <p>
          Toda vrednost srebra ne temelji samo na redkosti. Temelji na tisočletni zgodovini, edinstvenih fizikalnih lastnostih in vse večji industrijski porabi.
        </p>
      </div>

      <div className="my-8 grid gap-5 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-white p-6 text-center">
          <div className="font-serif text-4xl font-bold text-navy">5.000</div>
          <div className="mt-2 text-sm text-text-muted">let kot merilo vrednosti</div>
        </div>
        <div className="rounded-xl border border-border bg-white p-6 text-center">
          <div className="font-serif text-4xl font-bold text-navy">50%</div>
          <div className="mt-2 text-sm text-text-muted">porabe gre v industrijo</div>
        </div>
        <div className="rounded-xl border border-border bg-white p-6 text-center">
          <div className="font-serif text-4xl font-bold text-navy">0</div>
          <div className="mt-2 text-sm text-text-muted">bankrotov v zgodovini</div>
        </div>
      </div>

      <H2>Kratka zgodovina srebra</H2>

      <div className="my-8 border-l-4 border-gold pl-6">
        <TimelineItem date="3000 pr.n.š.">
          Prvo rudarjenje srebra v Anatoliji (današnja Turčija). Srebro postane simbol bogastva.
        </TimelineItem>
        <TimelineItem date="700 pr.n.š.">
          Lidijci izdelajo prve srebrne kovance. Začetek srebra kot denarja.
        </TimelineItem>
        <TimelineItem date="1500-1800">
          Španska Amerika proizvede 85% svetovnega srebra. Srebro postane globalna valuta.
        </TimelineItem>
        <TimelineItem date="1971">
          ZDA zapusti zlati standard. Začetek obdobja fiat valut (denarja brez kritja).
        </TimelineItem>
        <TimelineItem date="2020+">
          Eksplozija povpraševanja zaradi sončnih celic, elektronike in elektrifikacije prometa.
        </TimelineItem>
      </div>

      <H2>Edinstvene lastnosti srebra</H2>
      <p className="mb-4">
        Srebro ni dragoceno samo zato, ker je redko. Ima edinstvene fizikalne lastnosti, ki ga delajo nezamenljivega:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Najboljši prevodnik elektrike</strong> — Boljši od bakra, nenadomestljiv v elektroniki</li>
        <li><strong>Najboljši prevodnik toplote</strong> — Ključno za industrijske procese</li>
        <li><strong>Najvišja odbojnost svetlobe</strong> — Uporablja se v ogledaIih in sončnih celicah</li>
        <li><strong>Antibakterijske lastnosti</strong> — Uporaba v medicini, tekstilu, čiščenju vode</li>
        <li><strong>Kovno in raztegljivo</strong> — Lahko ga oblikujete v tanke žice ali folije</li>
      </ul>

      <HighlightBox>
        <p>
          <strong>Zakaj je to pomembno?</strong> Te lastnosti pomenijo, da industrija POTREBUJE srebro. Ni ga mogoče zamenjati s cenejšimi materiali v mnogih aplikacijah. Povpraševanje ni samo naložbeno — je strukturno.
        </p>
      </HighlightBox>

      <H2>Industrijska poraba</H2>
      <p className="mb-5">
        Približno polovica letne proizvodnje srebra gre v industrijo. Glavni sektorji:
      </p>

      <H3>Sončne celice (fotovoltaika)</H3>
      <p className="mb-3">
        Sončna industrija je najhitreje rastoči porabnik srebra. Tipična sončna plošča vsebuje približno 20 gramov srebra. S prehajanjem na obnovljive vire bo povpraševanje še naraščalo.
      </p>
      <p className="mb-5 text-sm italic text-text-muted">
        Vir: The Silver Institute — povpraševanje za fotovoltaiko raste 15-20% letno
      </p>

      <H3>Elektronika</H3>
      <p className="mb-5">
        Vsak pametni telefon, računalnik, televizor vsebuje srebro. Kot najboljši prevodnik elektrike je ključna komponenta v vezjih.
      </p>

      <H3>Električni avtomobili</H3>
      <p className="mb-5">
        Električni avtomobil vsebuje približno 25-50 gramov srebra — več kot klasični avtomobil. Z elektrifikacijo prometa raste povpraševanje.
      </p>

      <H3>Medicina</H3>
      <p className="mb-5">
        Srebrove antibakterijske lastnosti se uporabljajo v obližih, prevlekah medicinskih pripomočkov, čiščenju vode.
      </p>

      <H2>Srebro vs. fiat denar</H2>
      <p className="mb-4">
        Ključna razlika med srebrom in papirnatim denarjem:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Srebro je omejeno</strong> — Količina je fizično omejena. Ni ga mogoče &quot;natisniti&quot;.</li>
        <li><strong>Fiat denar je neomejen</strong> — Centralne banke lahko tiskajo poljubne količine.</li>
      </ul>
      <p className="mb-5">
        Ko centralne banke tiskajo denar, njegova vrednost pada (inflacija). Srebro — kot fizična dobrina — ohranja kupno moč skozi čas.
      </p>

      <HighlightBox>
        <p>
          <strong>Primer:</strong> Leta 1964 je srebrnik (1 USD) kupil 4 litre bencina. Danes bi ta isti srebrnik kupil približno 8 litrov bencina. Papirnati dolar iz 1964 danes kupi manj kot pol litra.
        </p>
      </HighlightBox>

      <H2>Zakaj srebro nikoli ni šlo na nič</H2>
      <p className="mb-5">
        V zgodovini so propadle tisočere valute, banke in podjetja. Srebro — nikoli.
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li>Je fizično — ne more izginiti v stečaju</li>
        <li>Je nezamenljivo — industrija ga potrebuje</li>
        <li>Je globalno — vrednost ima povsod po svetu</li>
        <li>Je časovno preizkušeno — 5.000 let</li>
      </ul>
      <p className="mb-5">
        To ne pomeni, da cena srebra ne more pasti. Lahko — in občasno tudi za 30-50%. Toda <strong>vrednost srebra nikoli ni šla na nič</strong>, za razliko od mnogih delnic, obveznic ali valut.
      </p>

      <H2>Tveganja</H2>
      <p className="mb-4">
        Pošteno je omeniti tudi tveganja:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Kratkoročna volatilnost</strong> — Cena lahko močno niha</li>
        <li><strong>Ni donosov</strong> — Srebro ne plačuje dividend ali obresti</li>
        <li><strong>Stroški hrambe</strong> — Fizično srebro potrebuje varno hrambo</li>
        <li><strong>Ni garancije za prihodnost</strong> — Zgodovina ni obljuba</li>
      </ul>
      <p className="mb-5">
        Srebro je smiselno kot del razpršenega portfelja, ne kot edina naložba.
      </p>

      <CtaBox
        title="Želite izvedeti več?"
        text="Brezplačno vam pojasnimo, kako vključiti plemenite kovine v vaš naložbeni načrt."
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

function TimelineItem({ date, children }: { date: string; children: React.ReactNode }) {
  return (
    <div className="relative mb-6">
      <div className="absolute -left-9 top-1.5 h-3 w-3 rounded-full bg-gold" />
      <div className="mb-1 font-semibold text-navy">{date}</div>
      <p>{children}</p>
    </div>
  );
}
