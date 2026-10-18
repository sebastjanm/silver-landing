import type { Metadata } from "next";
import Link from "next/link";
import { PriceTicker } from "@/components/PriceTicker";
import { EmailCapture } from "@/components/EmailCapture";
import { CheckIcon } from "@/components/CheckIcon";

export const metadata: Metadata = {
  title: "NakupSrebra.com | Posvetovanje za Naložbe v Srebro in Zlato",
  description:
    "Srebro in zlato še nikoli nista izgubila vrednosti. Brezplačen posvet za varne naložbe v plemenite kovine. Brez DDV, švicarska hramba.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg />
      <PriceTicker />
      <main className="min-h-screen">
        <HeroSection />
        <WhySilverSection />
        <StrategySection />
        <ComparisonSection />
        <GuideSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <MobileCta />
    </>
  );
}

/* ── Hero ── */
function HeroSection() {
  return (
    <section className="border-b border-rule bg-bg py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mb-6 inline-block border-b border-gold pb-2 text-xs font-semibold uppercase tracking-wider text-gold">
            Posvetovanje za naložbe v srebro
          </div>
          <h1 className="mb-6 font-serif text-5xl font-normal leading-tight tracking-tight text-ink lg:text-hero">
            Srebro in zlato še nikoli{" "}
            <span className="italic">nista izgubila</span> vrednosti
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-text-muted">
            Medtem ko valute propadajo in banke bankrotirajo, plemenite kovine ohranjajo vrednost. Brezplačen posvet za varne naložbe po strategiji Elementum: fizično srebro in zlato, brez DDV, v zavarovanem švicarskem trezorju.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/posvet"
              className="inline-flex items-center gap-2 bg-gold px-8 py-3 font-semibold text-white shadow-nav-cta transition-all hover:bg-gold-light hover:shadow-nav-cta-hover"
            >
              Brezplačen posvet
            </Link>
            <a
              href="#vodnik"
              className="inline-flex items-center gap-2 border border-rule bg-white px-8 py-3 font-semibold text-ink transition-all hover:border-ink"
            >
              Brezplačen vodnik
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <CheckIcon className="text-metal" /> Brez prodajnega pritiska
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="text-metal" /> Brez vezave
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="text-metal" /> Prodate kadarkoli
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Why Silver (Editorial Essay) ── */
function WhySilverSection() {
  return (
    <section className="border-b border-rule bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 border-l-4 border-gold pl-8">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">I.</div>
          <h2 className="mb-6 font-serif text-3xl font-normal leading-tight text-ink lg:text-4xl">
            Zakaj fizično srebro?
          </h2>
        </div>
        <div className="prose-editorial space-y-6 text-md leading-relaxed text-text">
          <p>
            Denar na banki ni varen. Tiho izgublja vrednost. V zadnjih 10 letih je 10.000 evrov na banki izgubilo približno 29% realne vrednosti zaradi inflacije. Isti denar, vložen v srebro, je pridobil 85%. V zlatu 125%.
          </p>
          <p>
            Srebro je fizična kovina. Primete jo lahko v roke. Ne temelji na zaupanju v državo, banko ali algoritem. Obstaja. Ima težo. Vrednost. In zgodovino — 5.000 let zgodovine, v kateri srebro in zlato še nikoli nista šla na nič.
          </p>
          <div className="my-10 border-y border-rule py-8 text-center">
            <blockquote className="font-serif text-xl italic leading-relaxed text-navy">
              "Plemenite kovine so preživele vsako krizo, vojno in propad valut v zgodovini človeštva."
            </blockquote>
          </div>
          <p>
            Denar in bitcoin obstajata samo na papirju in v računalnikih. Srebro lahko primete v roke. To je ključna razlika med spekulacijo in zaščito premoženja.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Strategy (Numbered Editorial) ── */
function StrategySection() {
  return (
    <section className="border-b border-rule bg-bg-warm py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 border-l-4 border-gold pl-8">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">II.</div>
          <h2 className="mb-6 font-serif text-3xl font-normal leading-tight text-ink lg:text-4xl">
            Kako deluje strategija Elementum
          </h2>
        </div>
        <div className="space-y-12">
          {strategySteps.map((step) => (
            <div key={step.num} className="relative pl-16">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center border-2 border-gold font-serif text-xl font-bold text-gold">
                {step.num}
              </div>
              <h3 className="mb-3 font-serif text-xl text-ink">{step.title}</h3>
              <p className="leading-relaxed text-text-muted">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-rule pt-8 text-center">
          <Link
            href="/posvet"
            className="inline-flex items-center gap-2 bg-gold px-8 py-3 font-semibold text-white shadow-nav-cta transition-all hover:bg-gold-light hover:shadow-nav-cta-hover"
          >
            Pogovoriva se
          </Link>
          <p className="mt-4 text-sm text-text-muted">Brezplačno, brez obveznosti</p>
        </div>
      </div>
    </section>
  );
}

/* ── Comparison (Facts Only) ── */
function ComparisonSection() {
  return (
    <section className="border-b border-rule bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 border-l-4 border-gold pl-8">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">III.</div>
          <h2 className="mb-6 font-serif text-3xl font-normal leading-tight text-ink lg:text-4xl">
            Primerjava: Kam gre vaš denar?
          </h2>
        </div>
        <div className="overflow-hidden border border-rule">
          <table className="w-full">
            <thead className="bg-ink text-white">
              <tr>
                <th className="px-6 py-4 text-left font-sans text-sm font-semibold uppercase tracking-wider">Naložba</th>
                <th className="px-6 py-4 text-right font-sans text-sm font-semibold uppercase tracking-wider">10 let</th>
                <th className="px-6 py-4 text-right font-sans text-sm font-semibold uppercase tracking-wider">20 let</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule bg-white">
              {comparisonData.map((row, i) => (
                <tr key={i} className="transition-colors hover:bg-subtle">
                  <td className="px-6 py-4 text-sm font-medium text-ink">{row.asset}</td>
                  <td className={`px-6 py-4 text-right font-serif text-lg font-bold ${row.positive10 ? 'text-green' : 'text-red'}`}>
                    {row.years10}
                  </td>
                  <td className={`px-6 py-4 text-right font-serif text-lg font-bold ${row.positive20 ? 'text-green' : 'text-red'}`}>
                    {row.years20}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 border-l-4 border-green bg-green-bg px-6 py-5">
          <p className="text-sm font-semibold text-green">
            Plemenite kovine v 5.000 letih: 0 bankrotov
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Guide Lead Magnet ── */
function GuideSection() {
  return (
    <section id="vodnik" className="scroll-mt-24 border-b border-rule bg-bg-warm py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}



/* ── FAQ ── */
function FaqSection() {
  return (
    <section className="border-b border-rule bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 border-l-4 border-gold pl-8">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">IV.</div>
          <h2 className="mb-6 font-serif text-3xl font-normal leading-tight text-ink lg:text-4xl">
            Pogosta vprašanja
          </h2>
        </div>
        <div className="divide-y divide-rule">
          {faqItems.map((item, i) => (
            <details key={i} className="group py-6">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{item.q}</span>
                <span className="mt-0.5 text-lg text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ── Final CTA ── */
function FinalCtaSection() {
  return (
    <section className="border-b border-rule bg-ink py-16 text-center lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="mb-6 font-serif text-3xl font-normal leading-tight text-white lg:text-4xl">
          Pravo tveganje je nedelovanje
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-white/80">
          Pogovoriva se. Brezplačno, brez obveznosti. Pomagam vam razumeti, kako zaščititi prihranke — in jih povečati.
        </p>
        <Link
          href="/posvet"
          className="inline-flex items-center gap-2 bg-gold px-8 py-3 font-semibold text-white shadow-nav-cta transition-all hover:bg-gold-light hover:shadow-nav-cta-hover"
        >
          Rezerviraj brezplačen posvet
        </Link>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <span>Brez vezave</span>
          <span>·</span>
          <span>Prodate kadarkoli</span>
          <span>·</span>
          <span>Srebro nikoli ni šlo na 0</span>
        </div>
      </div>
    </section>
  );
}

/* ── Mobile Sticky CTA ── */
function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 hidden border-t border-rule bg-white/95 p-4 shadow-mobile-cta backdrop-blur-sm max-sm:block">
      <Link
        href="/posvet"
        className="flex w-full items-center justify-center gap-2 bg-gold px-8 py-3 font-semibold text-white shadow-nav-cta"
      >
        Brezplačen posvet
      </Link>
    </div>
  );
}


/* ── Schema.org ── */
function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NakupSrebra.com",
            url: "https://www.nakupsrebra.com",
            description:
              "Posvetovanje za naložbe v srebro in zlato. Brezplačen posvet, švicarska hramba, brez DDV.",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: "Slovenian",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </>
  );
}

/* ── Data ── */
const strategySteps = [
  { num: 1, title: "Pogovor", text: "Kratek 15-minutni klic. Poveste mi o svoji situaciji, ciljih in skrbeh. Brez obveznosti, brez prodajnega pritiska." },
  { num: 2, title: "Načrt", text: "Pripravim predlog, ki ustreza vaši družini. Fizično srebro in zlato, brez DDV, v zavarovanem švicarskem trezorju." },
  { num: 3, title: "Izvedba", text: "Vodim vas skozi vsak korak. Kovine so vaše, zavarovane, in prodate jih kadarkoli brez vezave." },
];

const comparisonData = [
  { asset: "10.000 € v zlatu", years10: "+125%", positive10: true, years20: "+450%", positive20: true },
  { asset: "10.000 € v srebru", years10: "+85%", positive10: true, years20: "+300%", positive20: true },
  { asset: "10.000 € na banki", years10: "−29%", positive10: false, years20: "−35%", positive20: false },
];

const faqItems = [
  {
    q: "Ali mi res lahko zaupate? Ne poznam vas.",
    a: "Razumem. Zato je prvi pogovor brezplačen in brez obveznosti. Spoznajte me najprej. Nič ne podpišete, nič ne vložite — dokler niste prepričani, da je to prava pot za vašo družino.",
  },
  {
    q: "Nimam veliko denarja. Je to sploh zame?",
    a: "Začnete lahko že s 50€ mesečno. Ni pomembno, koliko — pomembno je, da začnete. Tudi majhni zneski se seštejejo. In za razliko od banke, tu vaš denar raste.",
  },
  {
    q: "Kaj pa, če bom nekoč nujno potrebovala ta denar?",
    a: "Prodate kadarkoli. Brez vezave, brez kazni, brez čakanja. V nekaj dneh je denar na vašem računu. Vaše srebro je vaše — in do njega imate dostop, ko ga potrebujete.",
  },
  {
    q: "Kako prodam srebro nazaj?",
    a: "Pri Elementumu je odkupna cena 2 % pod borzno, izplačilo pa v tednu dni. Brez vezave — prodate, ko vam ustreza.",
  },
  {
    q: "Zakaj srebro namesto zlata?",
    a: "Srebro je bolj dostopno — lahko začnete z manj denarja in kupujete manjše količine. Zlato je dražje. Večina mojih strank kombinira oboje — več srebra, malo zlata za razpršitev.",
  },
  {
    q: "Kje je moje srebro? Kako vem, da obstaja?",
    a: "Vaše kovine so fizično v švicarskem trezorju, zavarovane. Dobite certifikat lastništva in lahko kadarkoli preverite stanje. Če želite, vam lahko kovine tudi pošljemo domov.",
  },
  {
    q: "Ali me boste pritiskali, da kupim več?",
    a: 'Ne. Kupite toliko, kolikor vam ustreza, ko vam ustreza. Brez prodajnega pritiska, brez "omejenih ponudb". Sem tu za dolgoročno svetovanje — ne za enkratno prodajo.',
  },
];
