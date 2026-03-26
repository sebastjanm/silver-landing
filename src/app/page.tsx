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
      <HeroSection />
      <ProblemSection />
      <PhysicalSection />
      <ProofSection />
      <SolutionSection />
      <TrustSection />
      <ProcessSection />
      <FaqSection />
      <EmailSection />
      <FinalCtaSection />
      <MobileCta />
    </>
  );
}

/* ── Hero ── */
function HeroSection() {
  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 max-lg:text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/20 bg-green-bg px-4 py-2 text-sm font-medium text-green">
              ✓ Brezplačen posvet
            </div>
            <h1 className="mb-6 font-serif text-4xl font-normal leading-tight text-navy lg:text-hero">
              Srebro in zlato še nikoli nista izgubila{" "}
              <em className="text-gold">vrednosti.</em>
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-lg text-text-muted lg:mx-0">
              Medtem ko valute propadajo in banke bankrotirajo, plemenite kovine
              ohranjajo vrednost — in v pravih trenutkih prinašajo dobiček.
            </p>
            <div className="flex flex-wrap gap-3 max-lg:justify-center">
              <Link
                href="/posvet"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg"
              >
                Brezplačen posvet →
              </Link>
              <a
                href="#kako"
                className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-white px-8 py-4 font-semibold text-navy transition-all hover:border-navy hover:bg-bg-warm"
              >
                Kako deluje?
              </a>
            </div>
            <div className="mt-8 flex gap-6 text-sm text-text-muted max-lg:flex-wrap max-lg:justify-center">
              <span className="flex items-center gap-1.5">
                <CheckIcon /> Brez prodajnega pritiska
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon /> Odgovor v 24 urah
              </span>
            </div>
          </div>

          {/* Hero Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-white p-9 shadow-lg">
              <div className="mb-6 flex items-center gap-3 border-b border-border pb-5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold-bg text-2xl">
                  🛡️
                </div>
                <div>
                  <div className="font-serif text-lg text-navy">
                    Kam gre vaš denar?
                  </div>
                  <div className="text-sm text-text-muted">
                    Primerjava v 20 letih
                  </div>
                </div>
              </div>
              <StatRow label="V zlatu" value="+450%" positive />
              <StatRow label="V srebru" value="+300%" positive />
              <StatRow label="Na banki" value="−35%" positive={false} last />
              <div className="mt-5 rounded-lg bg-green-bg p-4 text-center text-sm font-medium text-green">
                🏛️ Srebro in zlato: 5.000 let brez propada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({
  label,
  value,
  positive,
  last = false,
}: {
  label: string;
  value: string;
  positive: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-4 ${last ? "" : "border-b border-border"}`}
    >
      <span className="text-sm text-text-muted">{label}</span>
      <span
        className={`font-serif text-xl font-bold ${positive ? "text-green" : "text-red"}`}
      >
        {value}
      </span>
    </div>
  );
}

/* ── Problem ── */
function ProblemSection() {
  return (
    <section className="border-t border-border pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Pravo tveganje</SectionLabel>
            <SectionTitle>
              Nevarnost ni v srebru. Nevarnost je{" "}
              <em className="text-gold">v nedelovanju.</em>
            </SectionTitle>
            <p className="max-w-lg text-lg text-text-muted">
              Denar na banki ni &quot;varen&quot; — tiho izgublja vrednost.
              Plemenite kovine so preživele vsako krizo, vojno in propad valut v
              zgodovini človeštva.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-white p-8">
              {problemData.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-border py-5 first:pt-0 last:border-0"
                >
                  <span className="text-sm">{item.label}</span>
                  <span
                    className={`font-serif text-xl font-bold ${item.negative ? "text-red" : "text-green"}`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="-mx-8 -mb-8 mt-5 flex items-center justify-between rounded-b-2xl bg-gold-bg px-8 py-6">
                <span className="font-semibold text-navy">
                  Plemenite kovine v 5.000 letih
                </span>
                <span className="font-serif text-2xl font-bold text-green">
                  0 bankrotov
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Physical vs Paper ── */
function PhysicalSection() {
  return (
    <section className="border-t border-border pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionLabel>Ključna razlika</SectionLabel>
          <SectionTitle>
            Papir, koda ali <em className="text-gold">fizična kovina?</em>
          </SectionTitle>
          <p className="mx-auto text-lg text-text-muted">
            Denar in bitcoin obstajata samo na papirju in v računalnikih. Srebro
            lahko primete v roke.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {physicalCards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 ${card.highlight ? "border-2 border-gold bg-white" : "border border-border bg-white"}`}
            >
              <div className="mb-4 text-4xl">{card.icon}</div>
              <h3 className="mb-3 font-serif text-xl text-navy">
                {card.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                {card.text}
              </p>
              <span
                className={`inline-block rounded px-3 py-1.5 text-xs font-semibold ${card.tagColor}`}
              >
                {card.tag}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          Cene srebra na borzah manipulirajo z &quot;paper silver&quot; —
          papirnatimi pogodbami brez kritja.
          <br />A to ne spremeni dejstva: fizično srebro ima težo, vrednost in
          zgodovino.
        </p>
      </div>
    </section>
  );
}

/* ── Social Proof ── */
function ProofSection() {
  return (
    <section className="border-t border-border bg-navy py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="mb-6 text-sm text-white/60">
          Tisoče družin že varuje prihodnost s plemenitimi kovinami
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {audiences.map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-serif text-sm text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Solution ── */
function SolutionSection() {
  return (
    <section id="kako" className="border-t border-border pt-16 pb-20 lg:pt-24 lg:pb-28 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionLabel>Vaša zaščita</SectionLabel>
          <SectionTitle>
            Ohranite vrednost.{" "}
            <em className="text-gold">In jo povečajte.</em>
          </SectionTitle>
          <p className="mx-auto text-lg text-text-muted">
            Plemenite kovine niso špekulacija — so zavarovanje. A s pravo
            strategijo prinašajo tudi dobiček.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-gold-bg text-3xl">
                {pillar.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl font-normal text-navy">
                {pillar.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                {pillar.text}
              </p>
              <span className="inline-block rounded bg-green-bg px-3 py-1.5 text-xs font-semibold text-green">
                {pillar.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trust ── */
function TrustSection() {
  return (
    <section className="border-t border-border pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionLabel>Zakaj zaupati?</SectionLabel>
          <SectionTitle>
            Brez skritih stroškov.{" "}
            <em className="text-gold">Brez presenečenj.</em>
          </SectionTitle>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card, i) => (
            <div key={i} className="rounded-xl border border-border bg-white p-8 text-center">
              <div className="mb-4 text-4xl">{card.icon}</div>
              <h4 className="mb-2 font-serif text-lg font-normal text-navy">
                {card.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process ── */
function ProcessSection() {
  return (
    <section className="border-t border-border pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionLabel>Preprosto</SectionLabel>
          <SectionTitle>
            Kako <em className="text-gold">začeti?</em>
          </SectionTitle>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-xl border border-border bg-white p-7 text-center"
            >
              <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-full bg-navy font-bold text-white">
                {step.num}
              </div>
              <h4 className="mb-2 font-serif text-md font-normal text-navy">
                {step.title}
              </h4>
              <p className="text-sm text-text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FaqSection() {
  return (
    <section className="border-t border-border pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>Pogosta vprašanja</SectionLabel>
            <SectionTitle>
              Stvari, ki vas{" "}
              <em className="text-gold">verjetno skrbijo</em>
            </SectionTitle>
          </div>
          <div className="lg:col-span-8">
            {faqItems.map((item, i) => (
              <details key={i} className="group border-b border-border">
                <summary className="flex cursor-pointer items-center justify-between py-6 text-md font-medium text-navy [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="ml-4 text-2xl font-normal text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-6 leading-relaxed text-text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Email Capture ── */
function EmailSection() {
  return (
    <section className="border-t border-border pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <EmailCapture />
      </div>
    </section>
  );
}

/* ── Final CTA ── */
function FinalCtaSection() {
  return (
    <section className="border-t border-border bg-bg-warm pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-lg">
          <SectionLabel>Naslednji korak</SectionLabel>
          <SectionTitle>
            Pravo tveganje je <em className="text-gold">nedelovanje.</em>
          </SectionTitle>
          <p className="mb-9 text-lg text-text-muted">
            Pogovoriva se. Brezplačno, brez obveznosti. Pomagam vam razumeti,
            kako zaščititi prihranke — in jih povečati.
          </p>
          <Link
            href="/posvet"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg"
          >
            Rezerviraj brezplačen posvet →
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {guarantees.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-text-muted"
              >
                <CheckIcon /> {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Mobile Sticky CTA ── */
function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 hidden border-t border-border bg-white p-4 shadow-mobile-cta max-sm:block">
      <Link
        href="/posvet"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-white"
      >
        Brezplačen posvet →
      </Link>
    </div>
  );
}

/* ── Shared section components ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-serif text-4xl font-normal leading-tight text-navy">
      {children}
    </h2>
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
const problemData = [
  { label: "€10.000 na banki (10 let)", value: "−29%", negative: true },
  { label: "€10.000 v srebru (10 let)", value: "+85%", negative: false },
  { label: "€10.000 v zlatu (10 let)", value: "+125%", negative: false },
];

const physicalCards = [
  {
    icon: "💶",
    title: "Denar (EUR)",
    text: "Papir, ki ga tiskajo centralne banke. Vrednost temelji na zaupanju v državo. Ko zaupanje pade — pade tudi vrednost.",
    tag: "−85% od 1971",
    tagColor: "bg-red-bg text-red",
    highlight: false,
  },
  {
    icon: "₿",
    title: "Bitcoin",
    text: "Koda v računalniku. Ne morete ga prijeti. Če pozabite geslo ali vam ukradejo dostop — je za vedno izgubljen.",
    tag: "Volatilen",
    tagColor: "bg-gold-bg text-gold",
    highlight: false,
  },
  {
    icon: "🥈",
    title: "Srebro",
    text: "Fizična kovina z težo. Primete jo lahko v roke. Cene manipulirajo — a srebro samo ostaja. 5.000 let in šteje.",
    tag: "Fizično. Vaše.",
    tagColor: "bg-green-bg text-green",
    highlight: true,
  },
];

const audiences = [
  "👨‍👩‍👧 Družine",
  "👵 Stari starši",
  "👩‍💼 Podjetnice",
  "🏠 Gospodinje",
  "👩‍🏫 Učiteljice",
];

const pillars = [
  {
    icon: "🔒",
    title: "Zaščitena vrednost",
    text: "Vaše kovine so v zavarovanem švicarskem trezorju. Brez DDV, z volumskimi popusti. Fizično premoženje, ki ga nobena banka ne more zamrzniti.",
    tag: "100% vaše",
  },
  {
    icon: "📊",
    title: "Preverjena zgodovina",
    text: "Zlato in srebro sta preživela vse: rimski propad, svetovna vojna, hiperinflacije. V zadnjih 20 letih: +450% (zlato) in +300% (srebro).",
    tag: "5.000 let dokazov",
  },
  {
    icon: "💰",
    title: "Potencial za dobiček",
    text: "S strategijo menjave zlato/srebro lahko povečate količino kovin brez dodatnega denarja. Trenutno razmerje je zgodovinsko ugodno.",
    tag: "do +40% več",
  },
];

const trustCards = [
  { icon: "👀", title: "Brez majhnega tiska", text: "Veste točno, kaj plačate. Brez skritih provizij, brez presenečenj po podpisu." },
  { icon: "🇨🇭", title: "Švicarski trezor", text: "Vaše kovine so fizično v Švici — najvarnejši državi za hrambo. Zavarovano." },
  { icon: "🚪", title: "Izstopite kadarkoli", text: "Ni vezave. Potrebujete denar nazaj? V nekaj dneh je na vašem računu." },
  { icon: "💬", title: "Osebni kontakt", text: "Nisem korporacija. Sem oseba. Pokličete, dobite mene — ne klicnega centra." },
];

const steps = [
  { num: 1, title: "Pogovoriva se", text: "Kratek klic — poveste mi o svoji situaciji. Brez obveznosti." },
  { num: 2, title: "Poslušam", text: "Kaj vas skrbi? Kakšni so vaši cilji? Skupaj najdeva pot." },
  { num: 3, title: "Načrt za vas", text: "Pripravim predlog, ki ustreza vaši družini — ne generično rešitev." },
  { num: 4, title: "Ob vas sem", text: "Vodim vas skozi vsak korak. Vprašanja? Dvomi? Tu sem." },
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

const guarantees = [
  "Srebro nikoli ni šlo na 0",
  "Brez vezave",
  "Prodate kadarkoli",
];
