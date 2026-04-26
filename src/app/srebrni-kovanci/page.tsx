import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CtaBox } from "@/components/CtaBox";
import { HighlightBox, WarningBox } from "@/components/HighlightBox";

export const metadata: Metadata = {
  title: "Srebrni kovanci — Vodnik za nakup srebrnih kovancev",
  description:
    "Vse o srebrnih kovancih: vrste, premije, na kaj paziti pri nakupu. American Eagle, Maple Leaf, Wiener Philharmoniker in drugi.",
  keywords: [
    "srebrni kovanci",
    "nakup srebrnih kovancev",
    "investicijski kovanci",
    "silver eagle",
    "maple leaf",
  ],
  alternates: { canonical: "/srebrni-kovanci" },
  openGraph: {
    title: "Srebrni kovanci za naložbo | NakupSrebra.com",
    description:
      "Vse o srebrnih kovancih: kateri so najboljši za naložbo, kje kupiti, na kaj paziti.",
    type: "article",
    url: "/srebrni-kovanci",
  },
};

export default function SrebrniKovanciPage() {
  return (
    <ArticleLayout
      breadcrumb="Srebrni kovanci"
      title="Srebrni kovanci"
      subtitle="Vodnik za nakup naložbenih srebrnih kovancev"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Srebrni kovanci za naložbo",
            description: "Kateri srebrni kovanci so najboljši za naložbo.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: { "@type": "Organization", name: "NakupSrebra.com", url: "https://www.nakupsrebra.com" },
            publisher: { "@type": "Organization", name: "NakupSrebra.com" },
          }),
        }}
      />

      <div className="space-y-5">
        <p>
          Srebrni kovanci so ena najpopularnejših oblik naložbenega srebra.
          Izdajajo jih državne kovnice, imajo garantirano čistost in so
          prepoznavni po vsem svetu.
        </p>
        <p>
          V tem vodniku pojasnjujem razlike med kovanci, na kaj paziti pri
          nakupu in kateri kovanci so najprimernejši za vas.
        </p>
      </div>

      <H2>Zakaj kovanci?</H2>
      <p className="mb-4">
        Srebrni kovanci imajo nekaj prednosti pred palicami:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Prepoznavnost</strong> — Priznani po vsem svetu, lažje prodati</li>
        <li><strong>Garantirana čistost</strong> — Državna kovnica jamči za vsebino</li>
        <li><strong>Manjše enote</strong> — Lažje deliti premoženje (1 oz vs. 1 kg palica)</li>
        <li><strong>Zbirateljska vrednost</strong> — Nekateri kovanci pridobijo dodatno vrednost</li>
      </ul>
      <p className="mb-5">
        Slabost: višja premija nad spot ceno (15-25% vs. 5-10% za palice).
      </p>

      <H2>Najpopularnejši kovanci</H2>
      <div className="my-8 grid gap-5 sm:grid-cols-2">
        <CoinCard
          flag="🇺🇸"
          name="American Silver Eagle"
          description="Najbolj prodajan srebrni kovanec na svetu. Izdan s strani U.S. Mint od leta 1986."
          specs="Čistost: 999 | Teža: 1 oz (31,1g)"
        />
        <CoinCard
          flag="🇨🇦"
          name="Canadian Maple Leaf"
          description="Znan po izjemni čistosti (9999). Royal Canadian Mint ga izdaja od 1988."
          specs="Čistost: 9999 | Teža: 1 oz (31,1g)"
        />
        <CoinCard
          flag="🇦🇹"
          name="Wiener Philharmoniker"
          description="Evropski favorit. Avstrijska kovnica (Münze Österreich) ga izdaja od 2008."
          specs="Čistost: 999 | Teža: 1 oz (31,1g)"
        />
        <CoinCard
          flag="🇬🇧"
          name="Britannia"
          description="Britanski klasik. Royal Mint ga izdaja od 1997. Od 2013 naprej 999 čistost."
          specs="Čistost: 999 | Teža: 1 oz (31,1g)"
        />
      </div>

      <H2>Primerjava kovancev</H2>
      <ComparisonTable
        headers={["Kovanec", "Čistost", "Premija", "Likvidnost"]}
        rows={[
          ["American Eagle", "999", "Visoka", "Najvišja"],
          ["Maple Leaf", "9999", "Srednja", "Zelo visoka"],
          ["Philharmoniker", "999", "Srednja", "Visoka (EU)"],
          ["Britannia", "999", "Srednja", "Visoka"],
        ]}
      />

      <H2>Kovanci vs. palice vs. runde</H2>

      <H3>Kovanci (Coins)</H3>
      <p className="mb-5">
        Izdani s strani državnih kovnic. Imajo nominalno vrednost (npr. 1 USD za
        Eagle). Najvišja premija, a tudi najvišja likvidnost in prepoznavnost.
      </p>

      <H3>Palice (Bars)</H3>
      <p className="mb-5">
        Izdelane s strani zasebnih rafinerij (npr. PAMP, Valcambi). Nižja
        premija, a manj prepoznavne. Primerne za večje nakupe.
      </p>

      <H3>Runde (Rounds)</H3>
      <p className="mb-5">
        Okrogle, podobne kovancem, a izdane s strani zasebnih kovnic. Nimajo
        nominalne vrednosti. Najnižja premija, a tudi najnižja likvidnost.
      </p>

      <HighlightBox>
        <p>
          <strong>Priporočilo za začetnike:</strong> Začnite s kovanci (Eagle,
          Maple, Philharmoniker). So najlažje za prodajo nazaj in najprej
          prepoznavni. Ko imate več izkušenj, lahko dodate palice za nižje
          premije.
        </p>
      </HighlightBox>

      <H2>Na kaj paziti pri nakupu</H2>

      <H3>1. Kupujte samo od zaupanja vrednih prodajalcev</H3>
      <p className="mb-5">
        Ponaredki obstajajo. Kupujte pri uveljavljenih trgovcih s preverljivim
        poreklom.
      </p>

      <H3>2. Preverite premijo</H3>
      <p className="mb-5">
        Primerjajte ceno z aktualno spot ceno. Premija 15-25% je normalna za
        kovance. Če je bistveno višja — vprašajte zakaj.
      </p>

      <H3>3. Stanje kovanca</H3>
      <p className="mb-5">
        Za naložbene namene stanje ni ključno — srebro je srebro. Toda za
        zbirateljske kovance stanje močno vpliva na vrednost.
      </p>

      <H3>4. Originalna embalaža</H3>
      <p className="mb-5">
        Kovanci v tubi (tipično 20-25 kosov) so običajno cenejši na enoto kot
        posamezni v kapsulah.
      </p>

      <WarningBox>
        <p>
          <strong>Opozorilo:</strong> Ne kupujte srebrnih kovancev na
          &quot;spletu&quot; po sumljivo nizkih cenah. Če je cena predobra, da bi
          bila resnična — verjetno ni resnična.
        </p>
      </WarningBox>

      <H2>DDV in kovanci</H2>
      <p className="mb-5">
        V Sloveniji je nakup srebrnih kovancev obdavčen z 22% DDV. To bistveno
        poveča vstopni strošek.
      </p>
      <p className="mb-5">
        <strong>Možnost brez DDV:</strong> Če kupite kovance s hrambo v
        švicarskem carinskem skladišču, DDV ne plačate, dokler kovanci ostanejo
        tam. Ob izvozu (dostavi domov) plačate DDV.
      </p>

      <H2>Pogosta vprašanja</H2>

      <H3>Kateri kovanec je najboljši za začetek?</H3>
      <p className="mb-5">
        Za Evropo priporočam Wiener Philharmoniker — evropski, široko
        prepoznaven, dobra premija. American Eagle je dober, a ima pogosto višjo
        premijo v EU.
      </p>

      <H3>Ali se premija povrne pri prodaji?</H3>
      <p className="mb-5">
        Delno. Odkupne cene kovancev so višje od odkupnih cen palic. Toda polno
        premijo redko dobite nazaj — računajte na spread.
      </p>

      <H3>Koliko kovancev naj kupim?</H3>
      <p className="mb-5">
        Odvisno od vašega proračuna in ciljev. Za redno varčevanje: 1-5
        kovancev mesečno. Za enkratni nakup: tube (20-25 kosov) imajo nižjo
        premijo.
      </p>

      <CtaBox
        title="Potrebujete pomoč pri izbiri?"
        text="Pomagam vam izbrati prave kovance za vašo situacijo. Brezplačen posvet, brez obveznosti."
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

function CoinCard({
  flag,
  name,
  description,
  specs,
}: {
  flag: string;
  name: string;
  description: string;
  specs: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-6">
      <h4 className="mb-3 flex items-center gap-2 font-serif text-lg text-navy">
        {flag} {name}
      </h4>
      <p className="mb-3 text-sm">{description}</p>
      <p className="text-xs text-text-muted">{specs}</p>
    </div>
  );
}
