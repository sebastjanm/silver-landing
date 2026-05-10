import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CtaBox } from "@/components/CtaBox";
import { HighlightBox } from "@/components/HighlightBox";

export const metadata: Metadata = {
  title: "Srebro vs Bitcoin — Primerjava naložb | NakupSrebra.com",
  description:
    "Primerjava srebra in bitcoina kot naložbe. Prednosti, slabosti, tveganja. Katera naložba je primerna za vas?",
  keywords: ["srebro vs bitcoin", "bitcoin ali srebro", "primerjava srebro bitcoin", "naložba bitcoin srebro"],
  alternates: { canonical: "/srebro-vs-bitcoin" },
  openGraph: {
    title: "Srebro ali Bitcoin: Primerjava naložb | NakupSrebra.com",
    description: "Podrobna primerjava srebra in Bitcoina kot naložbenih sredstev.",
    type: "article",
    url: "/srebro-vs-bitcoin",
  },
};

export default function SrebroVsBitcoinPage() {
  return (
    <ArticleLayout
      breadcrumb="Srebro vs Bitcoin"
      title="Srebro vs Bitcoin"
      subtitle="Poštena primerjava dveh različnih naložb"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Srebro ali Bitcoin — Primerjava naložb",
            description: "Podrobna primerjava srebra in Bitcoina.",
            datePublished: "2026-02-01",
            dateModified: "2026-02-01",
            author: { "@type": "Organization", name: "NakupSrebra.com", url: "https://www.nakupsrebra.com" },
            publisher: { "@type": "Organization", name: "NakupSrebra.com" },
          }),
        }}
      />

      <div className="space-y-5">
        <p>
          Srebro in bitcoin sta oba predstavljena kot alternativa tradicionalnemu finančnemu sistemu. Toda to sta zelo različni naložbi — z različnimi prednostmi, tveganji in nameni.
        </p>
        <p>
          Ta primerjava je napisana pošteno. Predstavljam prednosti in slabosti obeh, brez da bi eno prikazoval kot objektivno boljše.
        </p>
      </div>

      <div className="my-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border border-t-4 border-t-silver bg-white p-7">
          <h4 className="mb-4 font-serif text-xl text-navy">🥈 Srebro</h4>
          <ul className="ml-5 space-y-2">
            <li>Fizična kovina</li>
            <li>5.000 let zgodovine</li>
            <li>Industrijska uporaba</li>
            <li>Nizka volatilnost*</li>
            <li>Brez tehnološkega tveganja</li>
            <li>Potrebuje hrambo</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border border-t-4 border-t-bitcoin bg-white p-7">
          <h4 className="mb-4 font-serif text-xl text-navy">&#8383; Bitcoin</h4>
          <ul className="ml-5 space-y-2">
            <li>Digitalna valuta</li>
            <li>15 let zgodovine</li>
            <li>Pretežno naložbena uporaba</li>
            <li>Visoka volatilnost</li>
            <li>Tehnološko tveganje</li>
            <li>Enostavna hramba (digitalna)</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-text-muted">
        *V primerjavi z bitcoinom — srebro je bolj volatilno od zlata
      </p>

      <H2>Podrobna primerjava</H2>
      <ComparisonTable
        headers={["Kriterij", "🥈 Srebro", "₿ Bitcoin"]}
        rows={[
          ["<strong>Obstoj</strong>", "Fizičen (kovina)", "Digitalen (koda)"],
          ["<strong>Zgodovina</strong>", "5.000 let", "Od 2009"],
          ["<strong>Volatilnost (letna)</strong>", "~20-30%", "~60-80%"],
          ["<strong>Donosnost (10 let)</strong>", "~+100%", "~+10.000%+"],
          ["<strong>Max padec</strong>", "-70% (2011→2015)", "-85% (2017→2018)"],
          ["<strong>Industrijska uporaba</strong>", "Da (50%)", "Ne"],
          ["<strong>Regulacija</strong>", "Jasna", "V razvoju"],
          ["<strong>Hramba</strong>", "Fizična (sef, trezor)", "Digitalna (wallet)"],
        ]}
      />

      <H2>Prednosti srebra</H2>

      <H3>Fizični obstoj</H3>
      <p className="mb-5">
        Srebro je fizična kovina, ki jo lahko primete v roke. Ne more izginiti zaradi tehnične napake, pozabljenega gesla ali hakerskega napada. Če imate srebro v sefu — ga imate.
      </p>

      <H3>Časovno preizkušeno</H3>
      <p className="mb-5">
        Srebro je imelo vrednost 5.000 let. Je preživelo propad imperijev, svetovni vojni, hiperinflacije. Bitcoin obstaja 15 let — kratko obdobje za dolgoročno naložbo.
      </p>

      <H3>Industrijska vrednost</H3>
      <p className="mb-5">
        Približno polovica srebra gre v industrijo (elektronika, sončne celice, medicina). To daje srebru temeljno vrednost — industrija ga potrebuje, ne glede na naložbene trende.
      </p>

      <H3>Nižja volatilnost</H3>
      <p className="mb-5">
        Srebro je volatilno — a bistveno manj kot bitcoin. Za vlagatelje, ki ne prenesejo 50%+ padcev, je srebro lažje psihološko prenašati.
      </p>

      <H2>Prednosti bitcoina</H2>

      <H3>Višji potencialni donos</H3>
      <p className="mb-5">
        Bitcoin je v zadnjem desetletju bistveno prekosil srebro. Kdor je kupil bitcoin leta 2014 in držal, ima danes stokratni donos. Srebro v istem obdobju: ~+100%.
      </p>

      <H3>Enostavnejša hramba</H3>
      <p className="mb-5">
        Bitcoin hranite na digitalnem &quot;walletu&quot; — ni potrebe po sefu, trezorju, zavarovanju. Za majhne zneske je to bistveno enostavneje.
      </p>

      <H3>Prenosljivost</H3>
      <p className="mb-5">
        Bitcoin lahko pošljete kamorkoli na svetu v minutah. Srebro morate fizično prenesti ali zaupati tretji osebi.
      </p>

      <H3>Delljivost</H3>
      <p className="mb-5">
        Bitcoin lahko kupite v poljubnih zneskih (tudi 10€). Za srebro potrebujete vsaj znesek za najmanjšo enoto (1 oz ~ 30€).
      </p>

      <H2>Tveganja srebra</H2>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Stroški hrambe</strong> — Sef, zavarovanje, ali plačljiva hramba</li>
        <li><strong>DDV v Sloveniji</strong> — 22% pri nakupu (izjema: švicarska hramba)</li>
        <li><strong>Nižji potencialni donos</strong> — Verjetno ne bo 10x v 5 letih</li>
        <li><strong>Likvidnost</strong> — Prodaja fizičnega srebra zahteva nekaj truda</li>
      </ul>

      <H2>Tveganja bitcoina</H2>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Ekstremna volatilnost</strong> — 50-80% padci so normalni</li>
        <li><strong>Tehnološko tveganje</strong> — Pozabljeno geslo = izgubljen bitcoin</li>
        <li><strong>Regulatorno tveganje</strong> — Države lahko omejijo uporabo</li>
        <li><strong>Brez temeljne vrednosti</strong> — Vrednost temelji izključno na povpraševanju</li>
        <li><strong>Krajša zgodovina</strong> — 15 let ni dolgoročni test</li>
      </ul>

      <HighlightBox>
        <p>
          <strong>Poštena ocena:</strong> Bitcoin je imel v zadnjih 10 letih višji donos. Toda s tem je prišlo bistveno višje tveganje. Za vlagatelje, ki želijo stabilnost in dolgoročno ohranjanje vrednosti, je srebro bolj konzervativna izbira. Za tiste, ki sprejmejo visoko tveganje za visok potencialni donos, je bitcoin možnost.
        </p>
      </HighlightBox>

      <H2>Ali zakaj ne oboje?</H2>
      <p className="mb-4">
        Srebro in bitcoin nista medsebojno izključujoča. Nekateri vlagatelji imajo oboje:
      </p>
      <ul className="mb-5 ml-6 space-y-2">
        <li><strong>Srebro</strong> — Kot &quot;zavarovanje&quot; in stabilni del portfelja</li>
        <li><strong>Bitcoin</strong> — Kot špekulativni del z višjim potencialom</li>
      </ul>
      <p className="mb-5">
        Razmerje je odvisno od vašega odnosa do tveganja. Konzervativnejši: več srebra. Agresivnejši: več bitcoina.
      </p>

      <H2>Pogosta vprašanja</H2>

      <H3>Katera naložba je boljša?</H3>
      <p className="mb-5">
        &quot;Boljša&quot; je odvisna od vaših ciljev. Če iščete stabilnost — srebro. Če sprejmete visoko tveganje za visok potencialni donos — bitcoin. Če ne veste — začnite konzervativno.
      </p>

      <H3>Ali bo bitcoin nadomestil srebro?</H3>
      <p className="mb-5">
        Verjetno ne. Srebro ima industrijsko uporabo, ki je bitcoin nima. Industrija potrebuje fizično srebro za elektroniko, sončne celice, medicino. Bitcoin te funkcije ne more opravljati.
      </p>

      <H3>Kaj če ne razumem bitcoina?</H3>
      <p className="mb-5">
        Potem verjetno ni za vas — vsaj ne še. Zlatno pravilo vlaganja: ne vlagajte v nekaj, česar ne razumete. Srebro je enostavnejše za razumeti.
      </p>

      <CtaBox
        title="Razmišljate o srebru?"
        text="Pomagamo vam razumeti, ali je srebro primerno za vašo situacijo. Brez obveznosti."
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
