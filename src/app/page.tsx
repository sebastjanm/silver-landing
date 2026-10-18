/**
 * Homepage - Modern trust-first redesign
 * Contemporary fintech aesthetic with Geist Sans, confident typography,
 * generous whitespace, soft shadows, and trust-building messaging.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Shield, TrendingUp, Lock, Award, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { PriceTicker } from "@/components/PriceTicker";
import { EmailCapture } from "@/components/EmailCapture";
import { TrustLegal } from "@/components/TrustLegal";

export const metadata: Metadata = {
  title: "NakupSrebra.com | Varne naložbe v srebro in zlato",
  description:
    "Zaščitite svojo prihodnost s fizičnim srebrom in zlatom. Brezplačen posvet, švicarska hramba, brez DDV. Resno, transparentno, zaupanja vredno.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg />
      <PriceTicker />
      <HeroSection />
      <TrustStrip />
      <WhyPhysicalSection />
      <HowItWorksSection />
      <SecuritySection />
      <DataCardSection />
      <GuideSection />
      <FaqSection />
      <FinalCtaSection />
      <TrustLegal />
      <MobileCta />
    </>
  );
}

/* ── Hero ── */
function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-navy lg:text-6xl">
            Zaščitite vrednost. Gradite premoženje.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-muted">
            Srebro in zlato sta preživela vsako krizo, vojno in propad valut v zgodovini človeštva.
            Medtem ko banke propadajo in valute izgubljajo vrednost, plemenite kovine ohranjajo moč.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/posvet"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-accent-light hover:shadow-lg"
            >
              Brezplačen posvet
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#vodnik"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-navy shadow-sm transition-all hover:border-navy/30 hover:shadow-md"
            >
              Brezplačen vodnik
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-green" />
              Brez obveznosti
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-green" />
              Brez prodajnega pritiska
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-green" />
              Odgovor v 24 urah
            </span>
          </div>
        </div>

        {/* Live price card */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-card">
            <div className="mb-6 text-center">
              <div className="text-sm font-medium uppercase tracking-wider text-text-subtle">
                Kam gre vaš denar?
              </div>
              <div className="mt-1 text-text-muted">Primerjava zadnjih 20 let</div>
            </div>
            <div className="space-y-4">
              <ComparisonRow label="💰 V zlatu" value="+450%" positive />
              <ComparisonRow label="🥈 V srebru" value="+300%" positive />
              <ComparisonRow label="🏦 Na banki" value="−35%" positive={false} />
            </div>
            <div className="mt-6 rounded-xl border border-green-bg bg-green-bg p-4 text-center">
              <div className="text-sm font-semibold text-green">
                🏛️ Srebro in zlato: 5.000 let brez bankrota
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({ label, value, positive }: { label: string; value: string; positive: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border-subtle bg-bg-soft px-5 py-4">
      <span className="font-medium text-text">{label}</span>
      <span className={`text-2xl font-bold tracking-tight ${positive ? "text-green" : "text-red"}`}>
        {value}
      </span>
    </div>
  );
}

/* ── Trust Strip ── */
function TrustStrip() {
  return (
    <section className="border-y border-border-subtle bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-text-muted">
          <span className="flex items-center gap-2">
            <Shield className="size-4 text-green" />
            Zavarovana švicarska hramba
          </span>
          <span className="flex items-center gap-2">
            <Lock className="size-4 text-green" />
            Brez DDV
          </span>
          <span className="flex items-center gap-2">
            <Award className="size-4 text-green" />
            Lastništvo v vašem imenu
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── Why Physical ── */
function WhyPhysicalSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Ključna razlika
          </div>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-navy lg:text-5xl">
            Zakaj fizične kovine?
          </h2>
          <p className="text-lg text-text-muted">
            Denar in Bitcoin obstajata samo na papirju in v računalnikih. Srebro lahko primete v roke.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "💶",
              title: "Fiat denar (EUR)",
              text: "Papir, ki ga tiskajo centralne banke. Vrednost temelji na zaupanju v državo. Ko zaupanje pade — pade tudi vrednost.",
              badge: "−85% od 1971",
              badgeColor: "border-red-bg bg-red-bg text-red",
            },
            {
              icon: "₿",
              title: "Bitcoin",
              text: "Digitalna koda v računalniku. Ne morete ga prijeti. Če pozabite geslo ali vam ukradejo dostop — je za vedno izgubljen.",
              badge: "Volatilen",
              badgeColor: "border-accent-bg bg-accent-bg text-accent",
            },
            {
              icon: "🥈",
              title: "Fizično srebro",
              text: "Oprijemljiva kovina z maso in zgodovino. Primete jo lahko v roke. Cene nihajo, a srebro ostaja. 5.000 let brez bankrota.",
              badge: "Fizično. Vaše.",
              badgeColor: "border-green-bg bg-green-bg text-green",
              highlight: true,
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-2xl border bg-white p-8 shadow-card transition-all hover:shadow-card-hover ${
                card.highlight ? "border-green/20 ring-2 ring-green/10" : "border-border"
              }`}
            >
              <div className="mb-5 text-5xl">{card.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-navy">{card.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-text-muted">{card.text}</p>
              <span
                className={`inline-block rounded-full border px-3 py-1.5 text-xs font-semibold ${card.badgeColor}`}
              >
                {card.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ── */
function HowItWorksSection() {
  return (
    <section id="kako" className="scroll-mt-20 border-t border-border-subtle bg-bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Preprosto in transparentno
          </div>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-navy lg:text-5xl">
            Kako deluje Elementum?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Shield,
              num: "01",
              title: "Zaščitena vrednost",
              text: "Vaše kovine so v zavarovanem švicarskem trezorju. Brez DDV, z volumskimi popusti. Fizično premoženje, ki ga nobena banka ne more zamrzniti.",
            },
            {
              icon: TrendingUp,
              num: "02",
              title: "Preverjena zgodovina",
              text: "Zlato in srebro sta preživela vse: rimski propad, svetovne vojne, hiperinflacije. V zadnjih 20 letih: +450% (zlato) in +300% (srebro).",
            },
            {
              icon: Lock,
              num: "03",
              title: "Strategija menjave",
              text: "S strategijo menjave zlato/srebro lahko povečate količino kovin brez dodatnega denarja. Trenutno razmerje je zgodovinsko ugodno.",
            },
          ].map((step, i) => (
            <div key={i} className="rounded-2xl border border-border bg-white p-8 shadow-card">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent-bg">
                  <step.icon className="size-6 text-accent" />
                </div>
                <div className="text-3xl font-bold tracking-tighter text-silver">{step.num}</div>
              </div>
              <h3 className="mb-3 text-lg font-bold text-navy">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Security & Legitimacy ── */
function SecuritySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Varnost in transparentnost
          </div>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-navy lg:text-5xl">
            Zakaj lahko zaupate?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "🇨🇭",
              title: "Švicarska hramba",
              text: "Vaše kovine so fizično v Švici — najvarnejši državi za hrambo. Zavarovano.",
            },
            {
              icon: "📄",
              title: "Lastništvo na vaše ime",
              text: "Dobite certifikat lastništva. Kadarkoli preverite stanje. Če želite, vam kovine pošljemo domov.",
            },
            {
              icon: "🚪",
              title: "Brez vezave",
              text: "Potrebujete denar nazaj? V nekaj dneh je na vašem računu. Brez kazni, brez skritih stroškov.",
            },
            {
              icon: "💬",
              title: "Osebni kontakt",
              text: "Nisem korporacija. Sem oseba. Pokličete, dobite mene — ne klicnega centra.",
            },
          ].map((card, i) => (
            <div key={i} className="rounded-xl border border-border bg-white p-6 text-center shadow-card">
              <div className="mb-4 text-4xl">{card.icon}</div>
              <h4 className="mb-2 text-base font-bold text-navy">{card.title}</h4>
              <p className="text-sm leading-relaxed text-text-muted">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Data Card ── */
function DataCardSection() {
  return (
    <section className="border-t border-border-subtle bg-bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
          <div className="bg-navy px-8 py-6 text-center">
            <h3 className="text-2xl font-bold text-white">Zakaj zdaj?</h3>
            <p className="mt-2 text-white/80">Ključna dejstva o plemenitih kovinah</p>
          </div>
          <div className="divide-y divide-border">
            {[
              { label: "Srebro nikoli ni šlo na 0", value: "5.000 let" },
              { label: "Zlato v zadnjih 20 letih", value: "+450%" },
              { label: "Srebro v zadnjih 10 letih", value: "+85%" },
              { label: "EUR izguba kupne moči (1971-danes)", value: "−85%" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-8 py-5">
                <span className="font-medium text-text">{item.label}</span>
                <span className="text-2xl font-bold tracking-tight text-green">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Guide Lead Magnet ── */
function GuideSection() {
  return (
    <section id="vodnik" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <EmailCapture />
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FaqSection() {
  return (
    <section className="border-t border-border-subtle bg-bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Pogosta vprašanja
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-navy lg:text-4xl">
            Stvari, ki vas verjetno skrbijo
          </h2>
        </div>

        <div className="space-y-4">
          {[
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
          ].map((item, i) => (
            <details key={i} className="group rounded-xl border border-border bg-white shadow-card">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="size-5 text-text-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="border-t border-border-subtle px-6 py-5 leading-relaxed text-text-muted">
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
    <section className="border-t border-border-subtle py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
          Naslednji korak
        </div>
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-navy lg:text-5xl">
          Pravo tveganje je nedelovanje
        </h2>
        <p className="mb-10 text-lg text-text-muted">
          Pogovoriva se. Brezplačno, brez obveznosti. Pomagam vam razumeti, kako zaščititi
          prihranke — in jih povečati.
        </p>
        <Link
          href="/posvet"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-accent-light hover:shadow-lg"
        >
          Rezerviraj brezplačen posvet
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-text-muted">
          {["Srebro nikoli ni šlo na 0", "Brez vezave", "Prodate kadarkoli"].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-green" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Mobile Sticky CTA ── */
function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 hidden border-t border-border-subtle bg-white/95 p-4 shadow-mobile-cta backdrop-blur-md max-sm:block">
      <Link
        href="/posvet"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-white shadow-sm"
      >
        Brezplačen posvet
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

/* ── Schema.org ── */
function SchemaOrg() {
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
  ];

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
              "Varne naložbe v fizično srebro in zlato. Švicarska hramba, brez DDV, brezplačen posvet.",
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
