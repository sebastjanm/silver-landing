import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CtaBox } from "@/components/CtaBox";
import { HighlightBox, WarningBox } from "@/components/HighlightBox";

export const metadata: Metadata = {
  title: "Naložbeno srebro: Popoln vodnik za začetnike",
  description:
    "Vse o naložbenem srebru: kaj je, kako kupiti, kje hraniti, kakšni so stroški. Nepristranski vodnik za informirano odločitev.",
  keywords: [
    "naložbeno srebro",
    "nakup srebra",
    "investicijsko srebro",
    "srebro naložba",
    "fizično srebro",
  ],
  alternates: { canonical: "/nalozbe/nalozeno-srebro" },
  openGraph: {
    title: "Naložbeno srebro: Popoln vodnik za začetnike",
    description:
      "Vse o naložbenem srebru: kaj je, kako kupiti, kje hraniti. Nepristranski vodnik.",
    type: "article",
    url: "/nalozbe/nalozeno-srebro",
  },
};

export default function NalozenoSrebroPage() {
  return (
    <ArticleLayout
      breadcrumb="Naložbeno srebro"
      title="Naložbeno srebro: Popoln vodnik za začetnike"
      subtitle="Nazadnje posodobljeno: Februar 2026 · Branje: 12 minut"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Naložbeno srebro: Popoln vodnik za začetnike",
            description: "Vse o naložbenem srebru: kaj je, kako kupiti, kje hraniti, kakšni so stroški.",
            datePublished: "2026-02-04",
            dateModified: "2026-02-04",
            author: { "@type": "Organization", name: "NakupSrebra.com", url: "https://www.nakupsrebra.com" },
            publisher: { "@type": "Organization", name: "NakupSrebra.com" },
          }),
        }}
      />

      <nav className="mb-12 rounded-lg bg-bg-warm px-8 py-6">
        <h4 className="mb-4 font-serif text-navy">Vsebina</h4>
        <ul className="space-y-2">
          <li><a href="#kaj-je" className="text-text no-underline hover:text-gold">Kaj je naložbeno srebro?</a></li>
          <li><a href="#oblike" className="text-text no-underline hover:text-gold">Oblike naložbenega srebra</a></li>
          <li><a href="#prednosti" className="text-text no-underline hover:text-gold">Prednosti in tveganja</a></li>
          <li><a href="#kako-kupiti" className="text-text no-underline hover:text-gold">Kako kupiti naložbeno srebro</a></li>
          <li><a href="#hramba" className="text-text no-underline hover:text-gold">Hramba in varnost</a></li>
          <li><a href="#davki" className="text-text no-underline hover:text-gold">Davki v Sloveniji</a></li>
          <li><a href="#koliko" className="text-text no-underline hover:text-gold">Koliko vložiti?</a></li>
          <li><a href="#pogosta-vprasanja" className="text-text no-underline hover:text-gold">Pogosta vprašanja</a></li>
        </ul>
      </nav>

      <div className="space-y-5">
        <p>
          Naložbeno srebro je fizično srebro, ki ga kupite z namenom ohranjanja ali povečanja vrednosti. Za razliko od nakita ali industrijskega srebra, gre za standardizirane izdelke z znano čistočo (tipično 999/1000), ki jih lahko kadarkoli prodate nazaj na trgu.
        </p>
        <p>
          Ta vodnik pojasni vse, kar morate vedeti, preden se odločite — vključno s tveganji in stroški, ki jih nekateri prodajalci raje zamolčijo.
        </p>
      </div>

      <section id="kaj-je">
        <H2>Kaj je naložbeno srebro?</H2>
        <p className="mb-5">
          Naložbeno srebro je fizična kovina v obliki palic, ploščic ali kovancev, izdelana za namen varčevanja. Ključne lastnosti:
        </p>
        <ul className="mb-5 ml-6 space-y-2">
          <li><strong>Čistost 999/1000</strong> — Vsebuje 99,9% čistega srebra</li>
          <li><strong>Standardizirane teže</strong> — Od 1 unče (31,1g) do 1 kg ali več</li>
          <li><strong>Certificirano poreklo</strong> — Priznane rafinerije (LBMA, LPPM)</li>
          <li><strong>Likvidnost</strong> — Lahko prodate kadarkoli po tržni ceni</li>
        </ul>
        <HighlightBox>
          <p>
            <strong>Zakaj srebro?</strong> Srebro je hkrati plemenita kovina (varno zatočišče) in industrijska surovina (povpraševanje). Ta dvojna narava mu daje edinstveno pozicijo med naložbami.
          </p>
        </HighlightBox>
      </section>

      <section id="oblike">
        <H2>Oblike naložbenega srebra</H2>

        <H3>Srebrne palice in ploščice</H3>
        <p className="mb-5">
          Najcenejši način nakupa glede na gram srebra. Premija (razlika med ceno in spot ceno) je tipično 5-15% nad spot ceno. Primerne za večje nakupe.
        </p>

        <H3>Srebrni kovanci</H3>
        <p className="mb-3">
          Državne kovnice izdelujejo kovance z garantirano čistočo. Najbolj znani:
        </p>
        <ul className="mb-5 ml-6 space-y-2">
          <li><strong>American Silver Eagle</strong> (ZDA) — 1 unča</li>
          <li><strong>Canadian Maple Leaf</strong> (Kanada) — 1 unča</li>
          <li><strong>Wiener Philharmoniker</strong> (Avstrija) — 1 unča</li>
          <li><strong>Britannia</strong> (Velika Britanija) — 1 unča</li>
        </ul>
        <p className="mb-5">
          Premija je višja (15-25%), a kovanci so bolj likvidni in prepoznavni.
        </p>

        <H3>Srebrne runde</H3>
        <p className="mb-5">
          Podobne kovancem, a jih izdelujejo zasebne kovnice. Nižja premija, a manj prepoznavne.
        </p>

        <ComparisonTable
          headers={["Oblika", "Premija", "Likvidnost", "Primerno za"]}
          rows={[
            ["Palice (1kg+)", "5-10%", "Srednja", "Večje nakupe"],
            ["Ploščice (100g-1kg)", "8-15%", "Dobra", "Redno varčevanje"],
            ["Kovanci (1 oz)", "15-25%", "Odlična", "Manjše nakupe, darila"],
          ]}
        />
      </section>

      <section id="prednosti">
        <H2>Prednosti in tveganja</H2>

        <H3>Prednosti</H3>
        <ul className="mb-5 ml-6 space-y-2">
          <li><strong>Fizično lastništvo</strong> — Ni odvisno od bank ali finančnega sistema</li>
          <li><strong>Zgodovinska vrednost</strong> — Srebro je bilo denar 5.000 let</li>
          <li><strong>Zaščita pred inflacijo</strong> — Dolgoročno ohranja kupno moč</li>
          <li><strong>Industrijska rast</strong> — Povpraševanje narašča (sončne celice, elektronika, medicina)</li>
          <li><strong>Dostopnost</strong> — Cenejše od zlata, primerno za manjše vlagatelje</li>
        </ul>

        <H3>Tveganja</H3>
        <WarningBox>
          <p>
            <strong>Nihanje cen:</strong> Srebro je volatilno. V letu 2011 je doseglo 49 USD/oz, nato padlo na 14 USD/oz (2015). Če potrebujete denar v napačnem trenutku, lahko izgubite.
          </p>
        </WarningBox>
        <ul className="mb-5 ml-6 space-y-2">
          <li><strong>Stroški hrambe</strong> — Potrebujete varno hrambo (sef, trezor)</li>
          <li><strong>Premija pri nakupu</strong> — Plačate več kot je spot cena</li>
          <li><strong>Spread pri prodaji</strong> — Prodate pod spot ceno</li>
          <li><strong>Nima donosov</strong> — Za razliko od delnic ne prinaša dividend</li>
        </ul>

        <div className="my-8 rounded-r-lg border-l-4 border-green bg-green-bg py-6 pr-6 pl-6">
          <p>
            <strong>Naše mnenje:</strong> Naložbeno srebro ni za vsakogar. Primerno je za dolgoročne vlagatelje (5+ let), ki želijo del premoženja v fizični obliki, zunaj finančnega sistema. Ni za kratkoročne špekulacije.
          </p>
        </div>
      </section>

      <section id="kako-kupiti">
        <H2>Kako kupiti naložbeno srebro</H2>

        <H3>1. Kupite pri zaupanja vrednem prodajalcu</H3>
        <p className="mb-3">
          Kupujte samo pri prodajalcih z dokazljivim poreklom blaga in transparentnimi cenami. Preverite:
        </p>
        <ul className="mb-5 ml-6 space-y-2">
          <li>Ali navajajo premijo nad spot ceno?</li>
          <li>Kakšne so odkupne cene (spread)?</li>
          <li>Ali je podjetje registrirano in preverljivo?</li>
        </ul>

        <H3>2. Razumite stroške</H3>
        <p className="mb-3">Celotni strošek nakupa vključuje:</p>
        <ul className="mb-5 ml-6 space-y-2">
          <li><strong>Spot cena</strong> — Tržna cena srebra</li>
          <li><strong>Premija</strong> — Dodatek prodajalca (5-25%)</li>
          <li><strong>DDV</strong> — V Sloveniji 22% (razen pri določenih pogojih)</li>
          <li><strong>Dostava/hramba</strong> — Dodatni stroški</li>
        </ul>

        <H3>3. Odločite se za hrambo</H3>
        <p className="mb-3">Kam boste shranili srebro? Možnosti:</p>
        <ul className="mb-5 ml-6 space-y-2">
          <li><strong>Doma</strong> — Sef, skrito mesto. Tveganje kraje.</li>
          <li><strong>Bančni sef</strong> — Varneje, a omejen dostop. Mesečni najem.</li>
          <li><strong>Profesionalni trezor</strong> — Zavarovano, ločeno od bank. Plačate hrambo.</li>
        </ul>
      </section>

      <CtaBox
        title="Potrebujete pomoč pri odločitvi?"
        text="Brezplačno vam pojasnimo možnosti, stroške in tveganja. Brez obveznosti, brez pritiska."
        buttonText="Rezerviraj brezplačen posvet →"
      />

      <section id="hramba">
        <H2>Hramba in varnost</H2>

        <H3>Hramba v Švici — Brez DDV</H3>
        <p className="mb-3">
          Ena od možnosti je hramba v švicarskem carinskem skladišču. Prednosti:
        </p>
        <ul className="mb-5 ml-6 space-y-2">
          <li><strong>Brez DDV</strong> — Dokler srebro ostane v skladišču, DDV ne plačate</li>
          <li><strong>Zavarovano</strong> — Profesionalni trezorji z zavarovanjem</li>
          <li><strong>Ločeno od bank</strong> — Ni del bančnega sistema</li>
          <li><strong>Likvidno</strong> — Prodaja možna kadarkoli</li>
        </ul>
        <p className="mb-5">
          Slabost: stroški hrambe (tipično 0,5-1% vrednosti letno) in ne morete fizično prijeti svojega srebra, razen če ga izvzamete (takrat plačate DDV).
        </p>

        <H3>Hramba doma</H3>
        <p className="mb-3">Če hranite doma, upoštevajte:</p>
        <ul className="mb-5 ml-6 space-y-2">
          <li>Kakovosten sef, pritrjen v tla ali steno</li>
          <li>Ne govorite o tem, kje hranite kovine</li>
          <li>Preverite, ali zavarovanje pokriva plemenite kovine</li>
        </ul>
      </section>

      <section id="davki">
        <H2>Davki v Sloveniji</H2>

        <H3>DDV pri nakupu</H3>
        <p className="mb-5">
          V Sloveniji je nakup naložbenega srebra obdavčen z 22% DDV. To pomeni, da pri nakupu 100g srebra po spot ceni 100&euro; plačate 122&euro; + premija prodajalca.
        </p>
        <p className="mb-5">
          <strong>Izjema:</strong> Če kupite srebro s hrambo v švicarskem carinskem skladišču, DDV ne plačate, dokler srebro ostane tam.
        </p>

        <H3>Davek na kapitalski dobiček</H3>
        <p className="mb-3">
          Če srebro prodate z dobičkom, je ta obdavčen kot kapitalski dobiček. Stopnja se znižuje z obdobjem lastništva:
        </p>
        <ul className="mb-4 ml-6 space-y-2">
          <li>Do 5 let: 25%</li>
          <li>5-10 let: 15%</li>
          <li>10-15 let: 10%</li>
          <li>Nad 15 let: 0%</li>
        </ul>
        <p className="text-sm italic text-text-muted">
          Vir: FURS — Za aktualne informacije se posvetujte z davčnim svetovalcem.
        </p>
      </section>

      <section id="koliko">
        <H2>Koliko vložiti?</H2>
        <p className="mb-5">
          Splošno priporočilo finančnih svetovalcev: 5-15% premoženja v plemenitih kovinah. To ni pravilo — odvisno od vaše situacije:
        </p>
        <ul className="mb-5 ml-6 space-y-2">
          <li><strong>Konzervativni vlagatelji:</strong> 5-10%</li>
          <li><strong>Zmerni vlagatelji:</strong> 10-15%</li>
          <li><strong>Prepričani v kovine:</strong> 15-25%</li>
        </ul>

        <WarningBox>
          <p>
            <strong>Nikoli ne vlagajte denarja, ki ga potrebujete.</strong>{" "}Srebro je dolgoročna naložba. Če boste morali prodati v napačnem trenutku (recesija, osebna kriza), lahko izgubite.
          </p>
        </WarningBox>

        <H3>Redna mesečna vlaganja</H3>
        <p className="mb-3">
          Namesto enkratnega nakupa lahko vsak mesec kupite manjšo količino. Prednosti:
        </p>
        <ul className="mb-5 ml-6 space-y-2">
          <li>Povprečenje cene skozi čas (dollar-cost averaging)</li>
          <li>Manjši enkratni izdatek</li>
          <li>Disciplina varčevanja</li>
        </ul>
        <p className="mb-5">Začnete lahko že s 50-100&euro; mesečno.</p>
      </section>

      <section id="pogosta-vprasanja">
        <H2>Pogosta vprašanja</H2>

        <H3>Ali je srebro boljše od zlata?</H3>
        <p className="mb-5">
          Odvisno od vaših ciljev. Srebro je cenejše (dostopnejše), bolj volatilno (večji potencial, večje tveganje) in ima več industrijske uporabe. Zlato je stabilnejše in bolj uveljavljeno kot varno zatočišče. Mnogi vlagatelji imajo oboje.
        </p>

        <H3>Kdaj je pravi čas za nakup?</H3>
        <p className="mb-5">
          Nihče ne more zanesljivo napovedati kratkoročnih gibanj cene. Namesto da čakate na &quot;pravi trenutek&quot;, razmislite o rednih mesečnih nakupih, ki povprečijo ceno skozi čas.
        </p>

        <H3>Kako prodam srebro?</H3>
        <p className="mb-5">
          Prodate pri prodajalcu, ki odkupuje nazaj, ali na platformah za plemenite kovine. Upoštevajte spread — odkupna cena je nižja od prodajne. Pri fizičnem srebru, shranjenem v trezorju, je prodaja tipično možna z nekaj kliki.
        </p>

        <H3>Ali lahko srebro izgubi vrednost?</H3>
        <p className="mb-5">
          Kratkoročno da — cena lahko pade tudi za 30-50% v krizi. Dolgoročno (desetletja) srebro nikoli ni šlo na ničlo, za razliko od posameznih delnic ali valut. Toda zgodovina ni garancija za prihodnost.
        </p>
      </section>

      <CtaBox
        title="Imate vprašanja?"
        text="Pogovorimo se. Brezplačno, brez obveznosti. Pojasnimo vam možnosti in pomagamo pri odločitvi — tudi če ta odločitev je &quot;ne&quot;."
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
