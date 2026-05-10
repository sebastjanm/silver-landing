import type { Metadata } from "next";
import Link from "next/link";
import { PriceTicker } from "@/components/PriceTicker";
import { EmailCapture } from "@/components/EmailCapture";
import { CheckIcon } from "@/components/CheckIcon";
import { TrackedLink } from "@/components/TrackedLink";
import {
  CertificateGlyph,
  CoinGlyph,
  IngotGlyph,
  Ornament,
  PhoneGlyph,
  ScaleGlyph,
  ShieldGlyph,
  VaultGlyph,
} from "@/components/Glyphs";

export const metadata: Metadata = {
  title:
    "NakupSrebra.com | Strateška naložba v srebro — brezplačen posvet",
  description:
    "Srebro je najbolj dostopna pot do varnih prihrankov. Brezplačen 15-minutni posvet z izkušenim svetovalcem, švicarska hramba, brez DDV.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <FaqSchema />
      <PriceTicker />
      <HeroSection />
      <ProblemSection />
      <ResourcesSection />
      <PhysicalSection />
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

/* ── Hero — silver-first thesis, educational framing ── */
function HeroSection() {
  return (
    <section className="bg-paper border-b border-gold/15 pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="hero-stagger lg:col-span-7 max-lg:text-center">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold max-lg:justify-center">
              <Ornament />
              <span>Strateška naložba v srebro</span>
              <Ornament />
            </p>
            <h1 className="mt-4 font-serif text-3xl font-normal leading-[1.1] text-navy sm:text-4xl lg:text-hero">
              Srebro je najbolj dostopna pot do{" "}
              <em className="text-gold">varnih prihrankov.</em>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base text-text-muted sm:text-lg lg:mx-0">
              Brezplačen <span className="numerals">15</span>-minutni posvet
              z izkušenim svetovalcem: kaj kupiti, kje hraniti, kako se
              izogniti <span className="numerals">22%</span> DDV — brez
              prodajnega pritiska.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 max-lg:justify-center">
              <TrackedLink
                id="cta_posvet"
                location="hero"
                href="/posvet"
                className="inline-flex min-h-[56px] items-center gap-2 bg-navy px-8 py-4 font-serif text-base text-white transition-all hover:bg-navy-light hover:shadow-lg max-sm:w-full max-sm:justify-center"
              >
                Rezerviraj posvet
                <span aria-hidden="true" className="text-gold-light">→</span>
              </TrackedLink>
              <a
                href="#kako"
                className="inline-flex min-h-[56px] items-center gap-2 border border-navy/25 bg-transparent px-8 py-4 font-serif text-base text-navy transition-all hover:border-navy hover:bg-bg-warm max-sm:w-full max-sm:justify-center"
              >
                Kako deluje?
              </a>
            </div>
            <div className="mt-7 flex gap-6 text-sm text-text-muted max-lg:flex-wrap max-lg:justify-center">
              <span className="flex items-center gap-1.5">
                <CheckIcon /> Brez prodajnega pritiska
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon /> Klic v <span className="numerals">24</span> urah
              </span>
            </div>
          </div>

          {/* Hero card — silver-first thesis, three educational data points */}
          <div className="lg:col-span-5 lg:grid-break-right">
            <figure className="bg-paper-cream relative border border-gold/30 p-7 shadow-md sm:p-9">
              <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/60" />
              <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/60" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/60" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/60" />

              <figcaption className="mb-4 flex items-center gap-3">
                <ShieldGlyph className="!h-9 !w-9 text-gold" />
                <div>
                  <div className="font-serif text-lg text-navy">
                    Zakaj srebro, zakaj zdaj
                  </div>
                  <div className="font-serif text-sm italic text-text-muted">
                    Trije podatki, ki jih morate poznati
                  </div>
                </div>
              </figcaption>
              <div className="gold-rule-solid mb-1" />
              <ThesisRow
                label="Razmerje zlato / srebro"
                value="85"
                hint="Zgodovinsko povprečje: ~60. Visoko razmerje pomeni, da je srebro relativno poceni."
                cite="¹"
              />
              <ThesisRow
                label="Letna industrijska poraba"
                value="50%"
                hint="Sončne celice, EV, elektronika. Strukturno povpraševanje raste."
                cite="²"
              />
              <ThesisRow
                label="EUR prihranki, 10 let"
                value="−29%"
                negative
                hint="Realna izguba zaradi inflacije."
                cite="³"
                last
              />
              <p className="mt-4 border-t border-gold/15 pt-3 font-serif text-[11px] italic leading-snug text-text-muted">
                <span className="numerals">¹</span>{" "}
                <a
                  href="https://www.kitco.com/charts/livegoldsilver.html"
                  className="underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kitco
                </a>
                , 2025 · <span className="numerals">²</span>{" "}
                <a
                  href="https://www.silverinstitute.org/silver-supply-demand/"
                  className="underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Silver Institute, World Silver Survey 2025
                </a>{" "}
                · <span className="numerals">³</span>{" "}
                <a
                  href="https://www.ecb.europa.eu/stats/ecb_statistics/escb/html/index.en.html"
                  className="underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ECB HICP
                </a>
                , 2015–2025
              </p>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThesisRow({
  label,
  value,
  hint,
  cite,
  negative = false,
  last = false,
}: {
  label: string;
  value: string;
  hint: string;
  cite?: string;
  negative?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`py-3 ${last ? "" : "border-b border-gold/15"}`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-serif italic text-text-muted">
          {label}
          {cite && (
            <sup className="ml-0.5 not-italic text-gold numerals">{cite}</sup>
          )}
        </span>
        <span
          className={`serif-numerals text-xl ${negative ? "text-red" : "text-navy"}`}
        >
          {value}
        </span>
      </div>
      <p className="mt-1 text-xs leading-snug text-text-muted">{hint}</p>
    </div>
  );
}

/* ── Problem — pedagogic question + cited comparison ── */
function ProblemSection() {
  return (
    <section className="bg-bg pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel>Lekcija 01 · Tveganje</SectionLabel>
            <SectionTitle>
              Kaj se je zgodilo z{" "}
              <em className="text-gold numerals">€10.000</em> v{" "}
              <span className="numerals">10</span> letih?
            </SectionTitle>
            <p className="max-w-lg text-base text-text-muted sm:text-lg">
              Denar na banki ne miruje — tiho izgublja kupno moč. Plemenite
              kovine so v istem obdobju zaščitile vrednost, srebro tudi
              povečalo. Številke spodaj so povprečja, ne napoved.
            </p>
            <p className="mt-6 font-serif italic text-text-muted">
              Vir: ECB HICP, LBMA, Kitco — januar 2015 do januar 2025.
            </p>
          </div>
          <div className="lg:col-span-5 lg:grid-break-left">
            <figure className="bg-paper-cream relative border border-gold/30 p-7 shadow-sm sm:p-8">
              <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/60" />
              <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/60" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/60" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/60" />
              {problemData.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-baseline justify-between py-3.5 ${i === problemData.length - 1 ? "" : "border-b border-gold/15"}`}
                >
                  <span className="font-serif italic text-text-muted">
                    {item.label}
                  </span>
                  <span
                    className={`serif-numerals text-xl ${item.negative ? "text-red" : "text-green"}`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="mt-4 border-t border-gold/15 pt-4 text-center font-serif italic text-sm text-navy">
                <span className="numerals">5.000</span> let zgodovine ·{" "}
                <span className="numerals">0</span> bankrotov
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Resources — replaces the old emoji audience strip with an educational
   block. Reinforces the "education as marketing" thesis and surfaces the
   PDF guide + cena-srebra + blog (internal-link juice for SEO). ── */
function ResourcesSection() {
  return (
    <section className="bg-paper border-y border-gold/15 py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <SectionLabel>Najprej se naučite</SectionLabel>
          <SectionTitle>
            Brezplačni viri pred{" "}
            <em className="text-gold">prvim nakupom</em>
          </SectionTitle>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {resources.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group bg-paper-cream relative block border border-gold/25 p-7 transition-shadow hover:shadow-md"
            >
              <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-gold/60" />
              <span className="pointer-events-none absolute right-2 top-2 h-2 w-2 border-r border-t border-gold/60" />
              <div className="mb-4 text-gold">
                <r.Glyph className="!h-7 !w-7" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {r.kicker}
              </p>
              <h3 className="mb-2 font-serif text-lg text-navy">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {r.text}
              </p>
              <p className="mt-4 font-serif text-sm italic text-navy underline-offset-4 group-hover:underline">
                {r.cta} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Lesson 02: Three forms of saving (physical vs paper vs code) ── */
function PhysicalSection() {
  return (
    <section className="bg-bg pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionLabel>Lekcija 02 · Tri vrste denarja</SectionLabel>
          <SectionTitle>
            Papir, koda ali <em className="text-gold">fizična kovina?</em>
          </SectionTitle>
          <p className="mx-auto text-base text-text-muted sm:text-lg">
            Razlika med njimi je velika. Pojasnimo na kratko, brez žargona.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {physicalCards.map((card) => (
            <article
              key={card.title}
              className={`bg-paper-cream relative border p-7 ${card.highlight ? "border-gold/60 shadow-md" : "border-gold/20"}`}
            >
              {card.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bg px-3 font-serif text-xs italic text-gold">
                  ✦ priporočamo
                </span>
              )}
              <div className="mb-4 text-gold">
                <card.Glyph className="!h-8 !w-8" />
              </div>
              <h3 className="mb-3 font-serif text-xl text-navy">
                {card.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                {card.text}
              </p>
              <span
                className={`inline-block border-t border-gold/30 pt-2 font-serif text-xs italic ${card.highlight ? "text-green" : "text-red"}`}
              >
                {card.tag}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center font-serif italic text-sm text-text-muted">
          Več o manipulacijah s »paper silver« —{" "}
          <Link
            href="/blog"
            className="text-navy underline-offset-4 hover:underline"
          >
            preberite na blogu
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/* ── Solution — questions, not pillars ── */
function SolutionSection() {
  return (
    <section
      id="kako"
      className="bg-paper border-y border-gold/15 pt-16 pb-20 scroll-mt-24 lg:pt-24 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionLabel>Vprašanja, na katera vam odgovorimo</SectionLabel>
          <SectionTitle>
            Zakaj <em className="text-gold">srebro</em>?
          </SectionTitle>
          <p className="mx-auto text-base text-text-muted sm:text-lg">
            Tri ključna vprašanja, na katera dobite konkretne odgovore že v
            prvem klicu.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {questions.map((q) => (
            <article
              key={q.title}
              className="bg-paper-cream relative border border-gold/25 p-7"
            >
              <span className="absolute -top-4 left-7 bg-paper px-2 font-serif text-sm italic text-gold">
                {q.num}
              </span>
              <div className="mt-2 mb-4 text-gold">
                <q.Glyph className="!h-7 !w-7" />
              </div>
              <h3 className="mb-3 font-serif text-lg text-navy">{q.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                {q.text}
              </p>
              <span className="inline-block border-t border-gold/30 pt-2 font-serif text-xs italic text-navy">
                {q.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trust — how we work, transparency-first ── */
function TrustSection() {
  return (
    <section className="bg-bg pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionLabel>Kako delamo</SectionLabel>
          <SectionTitle>
            Brez skritih stroškov.{" "}
            <em className="text-gold">Brez presenečenj.</em>
          </SectionTitle>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="bg-paper-cream relative border border-gold/25 p-7 text-center"
            >
              <div className="mb-4 flex justify-center text-gold">
                <card.Glyph className="!h-8 !w-8" />
              </div>
              <h4 className="mb-2 font-serif text-base text-navy">
                {card.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process — four steps with serif numerals ── */
function ProcessSection() {
  return (
    <section className="bg-paper border-y border-gold/15 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionLabel>Pot do prvega nakupa</SectionLabel>
          <SectionTitle>
            Kako <em className="text-gold">začeti?</em>
          </SectionTitle>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.num}
              className="bg-paper-cream relative border border-gold/25 p-7 text-center"
            >
              <span className="serif-numerals absolute -top-4 left-1/2 -translate-x-1/2 bg-paper px-3 text-xl text-gold">
                {step.num}
              </span>
              <h4 className="mt-3 mb-2 font-serif text-lg text-navy">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── FAQ — heritage details/summary with ornament markers ── */
function FaqSection() {
  return (
    <section className="bg-bg pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Pogosta vprašanja</SectionLabel>
            <SectionTitle>
              Stvari, ki vas{" "}
              <em className="text-gold">verjetno skrbijo</em>
            </SectionTitle>
          </div>
          <div className="lg:col-span-8">
            <div className="gold-rule-solid mb-1" />
            {faqItems.map((item, i) => (
              <details key={i} className="group border-b border-gold/20">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-serif text-base text-navy transition-colors hover:text-gold sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="select-none font-normal text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Email capture — secondary conversion. Already self-styled in EmailCapture. ── */
function EmailSection() {
  return (
    <section className="bg-paper border-t border-gold/15 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <SectionLabel>Brezplačen vodnik</SectionLabel>
          <SectionTitle>
            Naučite se{" "}
            <em className="text-gold">v miru, doma</em>
          </SectionTitle>
          <p className="mt-3 text-base text-text-muted sm:text-lg">
            <span className="numerals">25</span>-stranski PDF: kako, kje in
            koliko srebra kupiti — brez napak začetnikov.
          </p>
        </div>
        <EmailCapture />
      </div>
    </section>
  );
}

/* ── Final CTA ── */
function FinalCtaSection() {
  return (
    <section className="bg-paper-cream border-t border-gold/15 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-lg">
          <SectionLabel>Naslednji korak</SectionLabel>
          <SectionTitle>
            Pravo tveganje je <em className="text-gold">nedelovanje.</em>
          </SectionTitle>
          <p className="mb-9 text-base text-text-muted sm:text-lg">
            Pogovorimo se. Brezplačno, brez obveznosti. Pomagamo vam razumeti,
            kako zaščititi prihranke s srebrom.
          </p>
          <TrackedLink
            id="cta_posvet"
            location="final"
            href="/posvet"
            className="inline-flex min-h-[56px] items-center gap-3 bg-navy px-8 py-4 font-serif text-lg text-white transition-all hover:bg-navy-light hover:shadow-lg max-sm:w-full max-sm:justify-center"
          >
            Rezerviraj posvet
            <span aria-hidden="true" className="text-gold-light">→</span>
          </TrackedLink>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
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
    <div className="fixed inset-x-0 bottom-0 z-50 hidden bg-bg-card/95 pt-px shadow-mobile-cta backdrop-blur-md max-sm:block">
      <div className="gold-rule-solid" />
      <div className="px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <TrackedLink
          id="cta_posvet"
          location="sticky"
          href="/posvet"
          className="flex min-h-[52px] w-full items-center justify-center gap-2 bg-navy px-6 py-3 font-serif text-base text-white"
        >
          Brezplačen posvet
          <span aria-hidden="true" className="text-gold-light">→</span>
        </TrackedLink>
      </div>
    </div>
  );
}

/* ── Shared ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-serif text-2xl font-normal leading-tight text-navy sm:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}

/* ── FAQ schema only — Organization is emitted in layout.tsx ── */
function FaqSchema() {
  return (
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
  );
}

/* ── Data ── */
const problemData = [
  { label: "€10.000 na banki", value: "−29%", negative: true },
  { label: "€10.000 v srebru", value: "+85%", negative: false },
  { label: "€10.000 v zlatu", value: "+125%", negative: false },
];

const resources = [
  {
    Glyph: CertificateGlyph,
    kicker: "Vodnik · PDF",
    title: "Kako začeti z naložbo v srebro",
    text:
      "25-stranski brezplačen vodnik za začetnike. Kaj kupiti, kje hraniti, kako se izogniti DDV.",
    cta: "Prenesi PDF",
    href: "/vodnik/vodnik-srebro",
  },
  {
    Glyph: ScaleGlyph,
    kicker: "Aktualno",
    title: "Cena srebra danes",
    text:
      "Trenutna spot cena v EUR — na gram, unčo in kilogram. Posodobljeno vsakih 5 minut.",
    cta: "Preveri ceno",
    href: "/cena-srebra",
  },
  {
    Glyph: CoinGlyph,
    kicker: "Blog",
    title: "Članki za radovedne",
    text:
      "Davki, primerjave, strategije, zgodovina. Brez prodajnega žargona, samo dejstva.",
    cta: "Prebrskaj blog",
    href: "/blog",
  },
];

const physicalCards = [
  {
    Glyph: ScaleGlyph,
    title: "Denar (EUR)",
    text:
      "Papirno obljubo tiskajo centralne banke. Vrednost temelji na zaupanju v državo. Ko zaupanje pade, pade tudi vrednost.",
    tag: "−85% kupne moči od 1971",
    highlight: false,
  },
  {
    Glyph: CoinGlyph,
    title: "Bitcoin",
    text:
      "Koda v računalniku. Ne morete je prijeti. Če pozabite geslo ali izgubite dostop, je za vedno izgubljena.",
    tag: "Volatilen, brez fizične oblike",
    highlight: false,
  },
  {
    Glyph: IngotGlyph,
    title: "Srebro",
    text:
      "Fizična kovina z težo. Primete jo lahko v roko. Cene manipulirajo na borzah — a srebro samo ostaja. 5.000 let in šteje.",
    tag: "Fizično. Vaše. Brez tretje strani.",
    highlight: true,
  },
];

const questions = [
  {
    num: "01",
    Glyph: VaultGlyph,
    title: "Kako srebro varuje vrednost?",
    text:
      "V švicarskem trezorju, brez DDV, z volumskimi popusti. Fizično premoženje, ki ga banka ne more zamrzniti.",
    tag: "Hramba: Heraeus, MKS PAMP",
  },
  {
    Glyph: CertificateGlyph,
    num: "02",
    title: "Zakaj zdaj?",
    text:
      "Razmerje zlato/srebro je 85 — zgodovinsko ~60. Strukturna industrijska poraba (sončne celice, EV) raste.",
    tag: "Vir: The Silver Institute, 2025",
  },
  {
    Glyph: PhoneGlyph,
    num: "03",
    title: "Koliko za začetek?",
    text:
      "Že €50 mesečno. Ni minimalnega zneska. Pogovor pojasni, kateri pristop ustreza vaši situaciji.",
    tag: "Brez vezave, brez obveznosti",
  },
];

const trustCards = [
  {
    Glyph: CertificateGlyph,
    title: "Brez majhnega tiska",
    text: "Veste točno, kaj plačate. Brez skritih provizij, brez presenečenj.",
  },
  {
    Glyph: VaultGlyph,
    title: "Švicarski trezor",
    text: "Vaše kovine so fizično v Švici, zavarovane. Lahko vam jih tudi pošljemo domov.",
  },
  {
    Glyph: ShieldGlyph,
    title: "Izstopite kadarkoli",
    text: "Ni vezave. Potrebujete denar nazaj? V nekaj dneh je na vašem računu.",
  },
  {
    Glyph: PhoneGlyph,
    title: "Resničen svetovalec",
    text: "Govorite z izkušenim svetovalcem, ne s klicnim centrom. En kontakt, od posveta do nakupa.",
  },
];

const steps = [
  {
    num: 1,
    title: "Pogovorimo se",
    text: "Kratek klic — povejte nam o svoji situaciji. Brez obveznosti.",
  },
  {
    num: 2,
    title: "Poslušamo",
    text: "Kaj vas skrbi? Kakšni so vaši cilji? Skupaj najdemo pot.",
  },
  {
    num: 3,
    title: "Načrt za vas",
    text: "Pripravimo predlog, ki ustreza vaši družini — ne generično rešitev.",
  },
  {
    num: 4,
    title: "Ob vas smo",
    text: "Vodimo vas skozi vsak korak. Vprašanja? Dvomi? Tu smo.",
  },
];

const faqItems = [
  {
    q: "Ali vam res lahko zaupam? Ne poznam vas.",
    a: "Razumemo. Zato je prvi pogovor brezplačen in brez obveznosti. Spoznajte naš pristop najprej. Nič ne podpišete, nič ne vložite — dokler niste prepričani, da je to prava pot za vašo družino.",
  },
  {
    q: "Nimam veliko denarja. Je srebro sploh zame?",
    a: "Začnete lahko že s 50 € mesečno. Ni pomembno, koliko — pomembno je, da začnete. Tudi majhni zneski se seštejejo. In za razliko od banke, tu vaš denar raste.",
  },
  {
    q: "Kaj pa, če bom nekoč nujno potrebovala ta denar?",
    a: "Prodate kadarkoli. Brez vezave, brez kazni, brez čakanja. V nekaj dneh je denar na vašem računu. Vaše srebro je vaše — in do njega imate dostop, ko ga potrebujete.",
  },
  {
    q: "Zakaj srebro namesto zlata?",
    a: "Srebro je bolj dostopno — lahko začnete z manj denarja in kupujete manjše količine. Razmerje zlato/srebro je trenutno zgodovinsko ugodno. Večina naših strank kombinira oboje — več srebra, malo zlata za razpršitev.",
  },
  {
    q: "Kje je moje srebro? Kako vem, da obstaja?",
    a: "Vaše kovine so fizično v švicarskem trezorju, zavarovane. Dobite certifikat lastništva in lahko kadarkoli preverite stanje. Če želite, vam lahko kovine tudi pošljemo domov.",
  },
  {
    q: "Ali me boste pritiskali, da kupim več?",
    a: 'Ne. Kupite toliko, kolikor vam ustreza, ko vam ustreza. Brez prodajnega pritiska, brez "omejenih ponudb". Tu smo za dolgoročno svetovanje — ne za enkratno prodajo.',
  },
];

const guarantees = [
  "Srebro nikoli ni šlo na 0",
  "Brez vezave",
  "Prodate kadarkoli",
];
