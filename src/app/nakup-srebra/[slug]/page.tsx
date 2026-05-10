import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CtaBox } from "@/components/CtaBox";
import { HighlightBox, WarningBox } from "@/components/HighlightBox";

interface CityContent {
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  canonical: string;
  breadcrumbLabel: string;
  subtitle: string;
  localInfoTitle: string;
  localInfoStats: string;
  cityNameLocative: string;
  demonym: string;
  introText: string;
  highlightDemonym: string;
  purchaseLocationText: string;
  storageLocationText: string;
  investorLocationText: string;
  investorReasonText: string;
  faqLocationText: string;
  ctaCityText: string;
  schemaHeadline: string;
  schemaDescription: string;
  schemaUrl: string;
}

const cityData: Record<string, CityContent> = {
  ljubljana: {
    title: "Nakup srebra v Ljubljani",
    metaTitle: "Nakup srebra v Ljubljani — Vodnik za Ljubljančane",
    description:
      "Kako kupiti naložbeno srebro v Ljubljani? Možnosti, na kaj paziti, stroški. Vodnik za prebivalce Ljubljane in okolice.",
    keywords: [
      "nakup srebra ljubljana",
      "srebro ljubljana",
      "naložbeno srebro ljubljana",
      "kje kupiti srebro ljubljana",
    ],
    canonical: "/nakup-srebra/ljubljana",
    breadcrumbLabel: "Ljubljana",
    subtitle: "Vodnik za prebivalce Ljubljane in osrednje Slovenije",
    localInfoTitle: "Ljubljana — osnovni podatki",
    localInfoStats:
      "Prebivalcev: ~295.000 | Regija: Osrednjeslovenska | Največje mesto v Sloveniji",
    cityNameLocative: "Ljubljani",
    demonym: "Ljubljančane",
    introText:
      "Ljubljana kot glavno mesto ponuja več možnosti za nakup naložbenega srebra. V tem vodniku pojasnjujemo, kako se lotiti nakupa, na kaj paziti in katero možnost izbrati.",
    highlightDemonym: "Ljubljančane",
    purchaseLocationText: "Ljubljani",
    storageLocationText: "Ljubljani",
    investorLocationText: "Ljubljane",
    investorReasonText:
      "Ljubljana ima nadpovprečen delež ljudi z višjimi dohodki in zanimanjem za naložbe.",
    faqLocationText: "Ljubljani",
    ctaCityText: "Ljubljani in okolici",
    schemaHeadline: "Nakup srebra v Ljubljani",
    schemaDescription: "Kje in kako kupiti srebro v Ljubljani.",
    schemaUrl: "https://www.nakupsrebra.com/nakup-srebra/ljubljana",
  },
  maribor: {
    title: "Nakup srebra v Mariboru",
    metaTitle: "Nakup srebra v Mariboru — Vodnik za Mariborčane",
    description:
      "Kako kupiti naložbeno srebro v Mariboru? Možnosti, na kaj paziti, stroški. Vodnik za prebivalce Maribora in okolice.",
    keywords: [
      "nakup srebra maribor",
      "srebro maribor",
      "naložbeno srebro maribor",
      "kje kupiti srebro maribor",
    ],
    canonical: "/nakup-srebra/maribor",
    breadcrumbLabel: "Maribor",
    subtitle: "Vodnik za prebivalce Maribora in severovzhodne Slovenije",
    localInfoTitle: "Maribor — osnovni podatki",
    localInfoStats:
      "Prebivalcev: ~112.000 | Regija: Podravska | Drugo največje mesto",
    cityNameLocative: "Mariboru",
    demonym: "Mariborčane",
    introText:
      "Maribor kot drugo največje slovensko mesto ponuja več možnosti za nakup naložbenega srebra. V tem vodniku pojasnjujemo, kako se lotiti nakupa, na kaj paziti in katero možnost izbrati.",
    highlightDemonym: "Mariborčane",
    purchaseLocationText: "Mariboru",
    storageLocationText: "Mariboru",
    investorLocationText: "Maribora",
    investorReasonText:
      "Maribor ima nadpovprečen delež ljudi z višjimi dohodki in zanimanjem za naložbe.",
    faqLocationText: "Mariboru",
    ctaCityText: "Mariboru in okolici",
    schemaHeadline: "Nakup srebra v Mariboru",
    schemaDescription: "Kje in kako kupiti srebro v Mariboru.",
    schemaUrl: "https://www.nakupsrebra.com/nakup-srebra/maribor",
  },
  celje: {
    title: "Nakup srebra v Celju",
    metaTitle: "Nakup srebra v Celju — Vodnik za Celjane",
    description:
      "Kako kupiti naložbeno srebro v Celju? Možnosti, na kaj paziti, stroški. Vodnik za prebivalce Celja in okolice.",
    keywords: [
      "nakup srebra celje",
      "srebro celje",
      "naložbeno srebro celje",
      "kje kupiti srebro celje",
    ],
    canonical: "/nakup-srebra/celje",
    breadcrumbLabel: "Celje",
    subtitle: "Vodnik za prebivalce Celja in Savinjske regije",
    localInfoTitle: "Celje — osnovni podatki",
    localInfoStats:
      "Prebivalcev: ~50.000 | Regija: Savinjska | Tretje največje mesto",
    cityNameLocative: "Celju",
    demonym: "Celjane",
    introText:
      "Celje kot tretje največje slovensko mesto ponuja možnosti za nakup naložbenega srebra. V tem vodniku pojasnjujemo, kako se lotiti nakupa, na kaj paziti in katero možnost izbrati.",
    highlightDemonym: "Celjane",
    purchaseLocationText: "Celju",
    storageLocationText: "Celju",
    investorLocationText: "Celja",
    investorReasonText:
      "Celje ima nadpovprečen delež ljudi z višjimi dohodki in zanimanjem za naložbe.",
    faqLocationText: "Celju",
    ctaCityText: "Celju in okolici",
    schemaHeadline: "Nakup srebra v Celju",
    schemaDescription: "Kje in kako kupiti srebro v Celju.",
    schemaUrl: "https://www.nakupsrebra.com/nakup-srebra/celje",
  },
};

export function generateStaticParams() {
  return [
    { slug: "ljubljana" },
    { slug: "maribor" },
    { slug: "celje" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = cityData[slug];
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.description,
    keywords: city.keywords,
    alternates: { canonical: city.canonical },
    openGraph: {
      title: city.title,
      description: city.description,
      type: "article",
      url: city.canonical,
    },
  };
}

export default async function NakupSrebraPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cityData[slug];

  if (!city) {
    notFound();
  }

  return (
    <ArticleLayout
      breadcrumb={city.breadcrumbLabel}
      title={city.title}
      subtitle={city.subtitle}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: city.schemaHeadline,
            description: city.schemaDescription,
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
              "@id": city.schemaUrl,
            },
          }),
        }}
      />

      <p className="mb-5">{city.introText}</p>

      <div className="my-7 rounded-xl bg-green-bg p-6">
        <h4 className="mb-3 font-semibold text-green">
          {city.localInfoTitle}
        </h4>
        <p className="text-text">{city.localInfoStats}</p>
      </div>

      <H2>Možnosti nakupa v {city.cityNameLocative}</H2>

      <H3>1. Fizične trgovine</H3>
      <p className="mb-5">
        V {city.cityNameLocative} obstaja nekaj trgovin s plemenitimi kovinami. Prednost: lahko vidite in primete izdelek. Slabost: pogosto višje cene in omejena ponudba.
      </p>

      <H3>2. Spletni nakup z dostavo</H3>
      <p className="mb-5">
        Naročite pri slovenskem ali tujem prodajalcu, dostava na vaš naslov. Prednost: več izbire, pogosto boljše cene. Slabost: ne vidite izdelka pred nakupom.
      </p>

      <H3>3. Nakup s hrambo v tujini</H3>
      <p className="mb-5">
        Kupite srebro, ki ostane shranjeno v švicarskem carinskem skladišču. Prednost: brez DDV (22% prihranka). Slabost: ne morete fizično prijeti srebra, razen če ga izvzamete.
      </p>

      <HighlightBox>
        <p>
          <strong>Priporočilo za {city.highlightDemonym}:</strong> Če želite prihraniti DDV in ne potrebujete fizičnega dostopa, je hramba v Švici smiselna. Če želite srebro doma — primerjajte cene med fizičnimi trgovinami in spletnimi prodajalci.
        </p>
      </HighlightBox>

      <H2>Na kaj paziti</H2>

      <H3>Preverite ceno</H3>
      <p className="mb-5">
        Primerjajte ceno s trenutno spot ceno srebra. Razumna premija za kovance je 15-25%, za palice 5-15%. Če je premija bistveno višja — vprašajte zakaj.
      </p>

      <H3>Preverite prodajalca</H3>
      <p className="mb-5">
        Ali je podjetje registrirano? Ali ima preverljive kontaktne podatke? Ali obstajajo ocene drugih kupcev? Ponaredki srebra obstajajo — kupujte pri zaupanja vrednih virih.
      </p>

      <H3>Razumite stroške</H3>
      <p className="mb-3">Poleg cene srebra upoštevajte:</p>
      <ul className="mb-5 ml-6 space-y-2">
        <li>DDV (22%) — razen pri nakupu s hrambo v Švici</li>
        <li>Premija nad spot ceno</li>
        <li>Morebitni stroški dostave</li>
        <li>Stroški hrambe (če ne hranite doma)</li>
      </ul>

      <H2>Hramba v {city.cityNameLocative}</H2>

      <H3>Doma</H3>
      <p className="mb-5">
        Domač sef, pritrjen v tla ali steno. Preverite, ali vaše zavarovanje pokriva plemenite kovine. Ne govorite o tem, kje hranite kovine.
      </p>

      <H3>Bančni sef</H3>
      <p className="mb-5">
        Slovenske banke ponujajo najem sefov. Varno, a omejen dostop (med delovnim časom). Mesečni najem.
      </p>

      <H3>Profesionalni trezor v Švici</H3>
      <p className="mb-5">
        Zavarovano, ločeno od bank, brez DDV dokler srebro ostane tam. Stroški hrambe ~0,5-1% vrednosti letno.
      </p>

      <WarningBox>
        <p>
          <strong>Opozorilo:</strong> Ne kupujte srebra od neznanih prodajalcev na sejmih, bolšjih trgih ali preko sumljivih oglasov. Ponaredki obstajajo in jih je težko prepoznati brez izkušenj.
        </p>
      </WarningBox>

      <H2>DDV v Sloveniji</H2>
      <p className="mb-5">
        Nakup naložbenega srebra v Sloveniji je obdavčen z 22% DDV. To bistveno poveča vstopni strošek.
      </p>
      <p className="mb-5">
        <strong>Kako se izogniti DDV:</strong> Kupite srebro s hrambo v švicarskem carinskem skladišču. DDV plačate šele, ko srebro izvzamete (dostavite v Slovenijo). Če srebro prodate nazaj, ga lahko prodate direktno iz skladišča — brez DDV.
      </p>

      <H2>Zakaj vlagatelji iz {city.investorLocationText} kupujejo srebro?</H2>
      <p className="mb-5">{city.investorReasonText} Pogosti razlogi za nakup srebra:</p>
      <ul className="mb-5 ml-6 space-y-2">
        <li>Razpršitev premoženja zunaj bank in borze</li>
        <li>Zaščita pred inflacijo</li>
        <li>Dolgoročno varčevanje za otroke</li>
        <li>Fizično premoženje, ki ga nobena banka ne more zamrzniti</li>
      </ul>

      <H2>Pogosta vprašanja</H2>

      <H3>Kje v {city.faqLocationText} kupiti srebro?</H3>
      <p className="mb-5">
        Obstaja nekaj fizičnih trgovin, toda pogosto priporočamo spletni nakup — več izbire, boljše cene, možnost primerjave. Za osebno svetovanje smo vam na voljo za pogovor.
      </p>

      <H3>Koliko srebra naj kupim?</H3>
      <p className="mb-5">
        Odvisno od vaših ciljev in proračuna. Začnete lahko že s 50-100&euro; mesečno. Za enkratni nakup: razmislite o delu prihodkov, ki ga lahko zamrznete za 5+ let.
      </p>

      <H3>Ali potrebujem osebni prevzem?</H3>
      <p className="mb-5">
        Ne nujno. Dostava na dom je varna pri uveljavljenih prodajalcih. Lahko pa tudi obiščete fizično trgovino, če vam je to ljubše.
      </p>

      <CtaBox
        title="Potrebujete pomoč?"
        text={`Brezplačno vam pojasnimo možnosti za nakup srebra v ${city.ctaCityText}.`}
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
