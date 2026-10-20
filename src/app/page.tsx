/**
 * Homepage - Editorial redesign with "home silver" positioning
 * 
 * Changes from v2.0 (Oct 2026):
 * - Rearchitected as story: recognition → home silver concept → why physical → 
 *   how it works → what you get → trust & buy-back → affordable entry → FAQ → CTA
 * - Added price transparency section with breakdown
 * - Added visible buy-back guarantee
 * - Added home storage safety guidance
 * - Added accountability / "who we are" section
 * - Editorial imagery with proper licensing (see /public/images/CREDITS.md)
 * - Kept sourced figures from PR #6 accurate
 * - Calm, premium tone; no fear, no hype, no fake scarcity
 * - Swiss watchmaker editorial aesthetic
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  TrendingUp, 
  Lock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown,
  Package,
  FileCheck,
  Truck,
  Home,
  Vault,
  Euro,
  Clock,
  User,
  Mail,
  Phone
} from "lucide-react";
import { PriceTicker } from "@/components/PriceTicker";
import { EmailCapture } from "@/components/EmailCapture";
import { TrustLegal } from "@/components/TrustLegal";

export const metadata: Metadata = {
  title: "Domače srebro | Varčevanje v srebrnih kovancih za vašo družino",
  description:
    "Srebro kot tiha, oprijemljiva varnost za vašo družino. Shranite doma, ne v banki. Začnite z enim kovincem. Brezplačen posvet.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg />
      <PriceTicker />
      <HeroSection />
      <RecognitionSection />
      <HomeSilverConceptSection />
      <WhyPhysicalSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <PriceTransparencySection />
      <TrustAndBuybackSection />
      <HomeStorageSection />
      <AffordableEntrySection />
      <FaqSection />
      <FinalCtaSection />
      <AccountabilitySection />
      <TrustLegal />
      <MobileCta />
    </>
  );
}

/* ── Hero ── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-bg/30 to-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <div className="mb-5 inline-block rounded-full border border-silver/30 bg-white px-4 py-1.5 text-sm font-medium tracking-wide text-navy shadow-xs">
              Domače srebro za vašo družino
            </div>
            <h1 className="mb-6 font-serif text-5xl font-normal leading-[1.15] tracking-tight text-navy lg:text-6xl">
              Tiha varnost,<br/>
              ki jo lahko primete<br/>
              v roke
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-text-muted">
              Medtem ko elektronski računi izgubljajo vrednost, srebro mirno čaka — doma, v vaši omari, 
              za vašo družino. Fizično premoženje, ki ga nobena banka ne more zamrzniti.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/posvet"
                className="group inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-4 text-base font-medium text-white shadow-sm transition-all hover:bg-navy-light hover:shadow-md"
              >
                Brezplačen posvet
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#vodnik"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-8 py-4 text-base font-medium text-navy transition-all hover:border-navy/30 hover:shadow-sm"
              >
                Vodnik: Domače srebro
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-text-subtle">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-green" />
                Brez obveznosti
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-green" />
                Začnite z enim kovincem
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-green" />
                Prodate kadarkoli
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-silver/20 shadow-lg">
              <Image
                src="/images/hero-silver-coins-hand.jpg"
                alt="Srebrni kovanci v rokah"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 max-lg:hidden">
              <div className="rounded-xl border border-border bg-white p-6 shadow-lg">
                <div className="text-sm font-medium uppercase tracking-wider text-text-subtle">
                  Zadnjih 20 let
                </div>
                <div className="mt-2 text-3xl font-bold text-green">+489%</div>
                <div className="mt-1 text-xs text-text-muted">Srebro v EUR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Recognition: Your Savings Quietly Lose Value ── */
function RecognitionSection() {
  return (
    <section className="border-t border-border-subtle bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
            Morda ste že opazili
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-text-muted">
            Prihranki na banki tiho izgubljajo moč. Cene rastejo hitreje, kot obrestne mere. 
            In vedno več ljudi išče nekaj drugega — nekaj oprijemljivega.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-bg-soft shadow-sm">
          <div className="border-b border-border bg-navy px-6 py-4 text-center">
            <h3 className="text-base font-medium text-white">
              Kaj se je zgodilo z 10.000 € v zadnjih 20 letih?
            </h3>
          </div>
          <div className="divide-y divide-border">
            <ComparisonRow label="Shranjeno v zlatu" value="+6.990 €" change="+699%" positive />
            <ComparisonRow label="Shranjeno v srebru" value="+4.890 €" change="+489%" positive />
            <ComparisonRow label="Na bančnem računu" value="−3.500 €" change="−35%" positive={false} />
          </div>
          <div className="border-t border-border bg-white px-6 py-4 text-center text-xs text-text-subtle">
            Vir: LBMA cene v EUR, okt. 2006–okt. 2026 (zlato in srebro); HICP inflacija izguba kupne moči, 
            okt. 2006–sep. 2026. Podatki na dan 19. 10. 2026.
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({ label, value, change, positive }: { label: string; value: string; change: string; positive: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-5 max-sm:flex-col max-sm:items-start">
      <span className="font-medium text-text">{label}</span>
      <div className="flex items-baseline gap-3 max-sm:w-full max-sm:justify-between">
        <span className="text-xl font-semibold text-navy">{value}</span>
        <span className={`text-sm font-medium ${positive ? "text-green" : "text-red"}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

/* ── Home Silver Concept ── */
function HomeSilverConceptSection() {
  return (
    <section className="border-t border-border-subtle bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-silver/20 shadow-md">
              <Image
                src="/images/home-silver-wood.jpg"
                alt="Srebrni kovanci na leseni površini - domača hramba"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
              Domače srebro
            </div>
            <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
              Varčevanje, ki ga vidite in otipate
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-text-muted">
              Ne prodajamo kovine. Prodajamo mir. Predstavljajte si: namesto številke na zaslonu 
              imate v omari nekaj, kar lahko primete v roke. Nekaj, kar ohranja vrednost. 
              Nekaj, kar lahko nekoč predate svojim otrokom.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-text-muted">
              To je domače srebro. Fizično. Vaše. Doma.
            </p>
            <div className="space-y-4">
              {[
                { icon: Home, text: "Shranite doma, ne v banki" },
                { icon: Shield, text: "Nihče vam ne more zamrzniti dostopa" },
                { icon: Lock, text: "Brez gesel, brez možnosti za krajo računa" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-bg">
                    <item.icon className="size-4 text-green" />
                  </div>
                  <p className="text-base text-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Why Physical, Why Now ── */
function WhyPhysicalSection() {
  return (
    <section className="border-t border-border-subtle bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
          Zakaj prav zdaj
        </div>
        <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
          Fizično srebro ni spekulacija
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-text-muted">
          Medtem ko digitalne investicije nihajo in banke propadajo, fizično srebro mirno 
          ohranja vrednost že 5.000 let. Brez dramatike. Brez strahu. Preprosto — tam je.
        </p>

        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Oprijemljivo",
              text: "Primete ga lahko v roke. Vidite ga. Shranite ga. Ni koda v računalniku."
            },
            {
              title: "Zgodovinsko preizkušeno",
              text: "Preživelo je propad rimskega cesarstva, svetovne vojne, hiperinflacije. 5.000 let. Nič nič."
            },
            {
              title: "Vaše",
              text: "Nobena banka ne more zamrzniti. Nobena vlada ne more zabrisati. Je tam, kjer ste ga pustili."
            }
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-bg-soft p-8 text-left">
              <h3 className="mb-3 text-lg font-semibold text-navy">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works in 3 Steps ── */
function HowItWorksSection() {
  return (
    <section className="border-t border-border-subtle bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
          Kako deluje
        </div>
        <h2 className="mb-16 font-serif text-4xl font-normal text-navy lg:text-5xl">
          Tri koraki do domačega srebra
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              num: "1",
              title: "Pogovor",
              text: "Pogovoriva se o vaših ciljih. Koliko lahko varčujete? Kaj vas skrbi? Brezplačno, brez pritiska."
            },
            {
              num: "2",
              title: "Nakup",
              text: "Če se odločite, kupite kovance ali palice. Plačate, dobite certifikat lastništva. Vse jasno."
            },
            {
              num: "3",
              title: "Shranite doma",
              text: "Srebro pride k vam domov. Zavarovano. Shranite ga na varno mesto. Tam je, kadar ga potrebujete."
            }
          ].map((step) => (
            <div key={step.num} className="relative">
              <div className="mb-6 inline-flex size-16 items-center justify-center rounded-full bg-navy text-2xl font-bold text-white">
                {step.num}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-navy">{step.title}</h3>
              <p className="text-base leading-relaxed text-text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── What You Get: Product, Quality, Packaging, Delivery ── */
function WhatYouGetSection() {
  return (
    <section className="border-t border-border-subtle bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            Kaj dobite
          </div>
          <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
            Švicarska kakovost v vseh podrobnostih
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Award,
              title: "Certificirano srebro",
              text: "Kovanci in palice od priznanih proizvajalcev. Čistost 99,9%. Certifikat pristnosti."
            },
            {
              icon: Package,
              title: "Primerna embalaža",
              text: "Vsak kovanec pride zaščiten. Profesionalna embalaža, ki ohranja vrednost."
            },
            {
              icon: Truck,
              title: "Zavarovana dostava",
              text: "Pošiljamo z zavarovanimi kurirji. Sledite pošiljki. Podpišete ob prevzemu."
            },
            {
              icon: FileCheck,
              title: "Dokumenti",
              text: "Certifikat lastništva, račun, dokumentacija za morebitno preprodajo."
            }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-accent-bg">
                <item.icon className="size-7 text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-navy">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Price Transparency ── */
function PriceTransparencySection() {
  return (
    <section className="border-t border-border-subtle bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            Transparentnost
          </div>
          <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
            Točno veste, za kaj plačujete
          </h2>
          <p className="text-lg text-text-muted">
            Brez skritih stroškov. Tukaj je, kako se sestavi cena enega kovanca.
          </p>
        </div>

        {/* TODO: Use real pricing data when available */}
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md">
          <div className="border-b border-border bg-navy px-6 py-4 text-center">
            <h3 className="text-base font-medium text-white">
              Primer: 1 oz srebrni kovanec
            </h3>
          </div>
          <div className="divide-y divide-border">
            <PriceRow label="Spot cena srebra" value="TODO €" note="Tržna cena kovine" />
            <PriceRow label="Premija" value="TODO %" note="Predelava, transport" />
            <PriceRow label="DDV" value="0 %" note="Hramba v Švici" />
            <PriceRow label="Skupaj" value="TODO €" bold />
          </div>
          <div className="border-t border-border bg-bg-soft px-6 py-4 text-center text-sm text-text-muted">
            TODO: Owner to provide real pricing breakdown (spot + premium + VAT structure)
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-green-bg bg-green-bg p-6 text-center">
          <p className="text-sm font-medium text-green">
            <CheckCircle2 className="mr-2 inline size-4" />
            Nakup s hrambo v Švici: brez DDV (prihranek 22%)
          </p>
        </div>
      </div>
    </section>
  );
}

function PriceRow({ label, value, note, bold }: { label: string; value: string; note?: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div>
        <div className={`${bold ? "font-semibold" : "font-medium"} text-navy`}>{label}</div>
        {note && <div className="mt-0.5 text-xs text-text-subtle">{note}</div>}
      </div>
      <div className={`${bold ? "text-2xl font-bold" : "text-xl font-semibold"} text-navy`}>
        {value}
      </div>
    </div>
  );
}

/* ── Trust & Buy-back Guarantee ── */
function TrustAndBuybackSection() {
  return (
    <section className="border-t border-border-subtle bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            Zaupanje in izhod
          </div>
          <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
            Garancije, ki veljajo
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Buy-back guarantee */}
          <div className="rounded-2xl border-2 border-green/20 bg-green-bg/50 p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green text-white">
                <TrendingUp className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-navy">Odkupna garancija</h3>
            </div>
            <p className="mb-6 text-base leading-relaxed text-text-muted">
              Potrebujete denar nazaj? Odkupimo vaše srebro. Brez zavez, brez kazni.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Odkup po <strong className="text-navy">TODO %</strong> spot cene</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Denar na računu v <strong className="text-navy">TODO dni</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Brez skritih stroškov</span>
              </div>
            </div>
            <div className="mt-6 rounded-lg border border-green/30 bg-white p-4 text-xs text-text-subtle">
              TODO: Owner to provide exact buy-back percentage and payout timeline
            </div>
          </div>

          {/* Trust points */}
          <div className="space-y-6">
            {[
              {
                icon: Shield,
                title: "Zavarovana dostava",
                text: "Vsaka pošiljka je zavarovana do polne vrednosti. Če kaj gre narobe, ste zavarovani."
              },
              {
                icon: Lock,
                title: "Varna plačila",
                text: "TODO: Owner to specify payment methods and security measures (bank transfer, escrow, etc.)"
              },
              {
                icon: FileCheck,
                title: "Pravna skladnost",
                text: "TODO: Owner to provide details on regulatory compliance, licenses, registration"
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-border bg-bg-soft p-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white">
                  <item.icon className="size-5 text-navy" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-navy">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Home Storage Safety ── */
function HomeStorageSection() {
  return (
    <section className="border-t border-border-subtle bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
              Hramba doma
            </div>
            <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
              Kako varno shraniti srebro doma
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-text-muted">
              Domače srebro pomeni tudi odgovornost. Tukaj je, kako poskrbeti, da je vaše srebro varno.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Diskreten prostor",
                  text: "Ne razkazujte. Shranite na mestu, ki ni očitno. Ni treba, da vsi vedo."
                },
                {
                  title: "Zavarovanje premoženja",
                  text: "Preverite hišno zavarovanje. Mnoga kritja vključujejo plemenite kovine. Vprašajte."
                },
                {
                  title: "Primeren sef ali omarica",
                  text: "Za večje količine razmislite o malem sefu ali zaklenjeni omarici. Ne zapleteno — le varno."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 rounded-lg border border-border bg-white p-5">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                    <div className="size-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-navy">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-bg">
                <Home className="size-6 text-green" />
              </div>
              <h3 className="text-lg font-semibold text-navy">Alternativa: Švicarska hramba</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-text-muted">
              Če vam domača hramba ne ustreza, lahko srebro ostane v švicarskem trezorju. 
              Fizično obstaja, je vaše, a ga ne nosite domov. Brez DDV.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              Kdaj želite, lahko zahtevate dostavo. Vaša izbira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Affordable Entry: Your First Piece ── */
function AffordableEntrySection() {
  return (
    <section className="border-t border-border-subtle bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
          Začnite danes
        </div>
        <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
          Vaš prvi kovanec
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-text-muted">
          Ne potrebujete veliko. En kovanec. Ena unča. To je vse, kar potrebujete za začetek. 
          Ostalo pride s časom.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-navy/10 bg-bg-soft p-8 text-left">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
              En kovanec
            </div>
            <div className="mb-2 text-3xl font-bold text-navy">
              TODO €
            </div>
            <div className="mb-6 text-sm text-text-muted">
              1 oz srebrni kovanec
            </div>
            <ul className="mb-8 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Certificiran, z dokumenti</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Zavarovana dostava</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Odkupna garancija</span>
              </li>
            </ul>
            <div className="text-xs text-text-subtle">
              TODO: Owner to provide real pricing for 1 oz silver coin
            </div>
          </div>

          <div className="rounded-2xl border-2 border-green/20 bg-green-bg/50 p-8 text-left">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider text-green">
              Mesečno varčevanje
            </div>
            <div className="mb-2 text-3xl font-bold text-navy">
              Že od 50 €/mesec
            </div>
            <div className="mb-6 text-sm text-text-muted">
              Redno kupujte, povprečite ceno
            </div>
            <ul className="mb-8 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Dollar-cost averaging pristop</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Gradite zaloge sčasoma</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span className="text-text">Brez velikih zneskov naenkrat</span>
              </li>
            </ul>
            <div className="text-xs text-text-subtle">
              Priporočen pristop za dolgoročno gradnjo premoženja
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/posvet"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-10 py-4 text-base font-medium text-white shadow-sm transition-all hover:bg-navy-light hover:shadow-md"
          >
            Pogovoriva se o vašem prvem kovincu
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FaqSection() {
  return (
    <section id="faq" className="border-t border-border-subtle bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            Pogosta vprašanja
          </div>
          <h2 className="font-serif text-4xl font-normal text-navy lg:text-5xl">
            Stvari, ki jih sprašujejo
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Ali mi res lahko zaupate?",
              a: "Razumem. Zato je prvi pogovor brezplačen in brez obveznosti. Spoznajte me. Preverite, kaj delam. Nič ne podpišete, nič ne vložite — dokler niste prepričani."
            },
            {
              q: "Nimam veliko denarja. Je to sploh zame?",
              a: "Začnete lahko z enim kovincem. Ali s 50 € mesečno. Ni pomembno, koliko — pomembno je, da začnete. Majhni zneski se seštejejo."
            },
            {
              q: "Kaj pa, če bom nekoč potreboval/-a ta denar nazaj?",
              a: "Prodate kadarkoli. Brez vezave, brez kazni. Odkupimo vaše srebro po tržni ceni. V nekaj dneh je denar na vašem računu."
            },
            {
              q: "Kako vem, da je srebro resnično?",
              a: "Dobite certifikat pristnosti od proizvajalca. Vsak kovanec ali palica ima oznako čistosti (99,9%). Vse je dokumentirano."
            },
            {
              q: "Kaj če mi ukradejo srebro doma?",
              a: "Preverite hišno zavarovanje — mnoga kritja vključujejo plemenite kovine. Lahko tudi izberete hrambo v Švici namesto doma."
            },
            {
              q: "Zakaj srebro, ne zlato?",
              a: "Srebro je dostopnejše. Lahko začnete z manj. Večina ljudi kombinira oboje — več srebra, nekaj zlata za razpršitev."
            }
          ].map((item, i) => (
            <details key={i} className="group rounded-xl border border-border bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-medium text-navy [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="size-5 text-text-muted transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-border-subtle px-6 py-5 leading-relaxed text-text-muted">
                {item.a}
              </div>
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
    <section className="border-t border-border-subtle bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="mb-6 font-serif text-4xl font-normal text-navy lg:text-5xl">
          Naslednji korak je pogovor
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-muted">
          Brezplačno. Brez obveznosti. Povem vam, kako deluje, odgovorim na vprašanja, 
          pomagam najti pravo pot za vašo družino.
        </p>
        <Link
          href="/posvet"
          className="inline-flex items-center gap-2 rounded-lg bg-navy px-10 py-4 text-base font-medium text-white shadow-sm transition-all hover:bg-navy-light hover:shadow-md"
        >
          Rezerviraj brezplačen posvet
          <ArrowRight className="size-4" />
        </Link>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-text-muted">
          {["15 minut vašega časa", "Brez prodajnega pritiska", "Odgovor v 24 urah"].map((text, i) => (
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

/* ── Guide Lead Magnet ── */
function GuideSection() {
  return (
    <section id="vodnik" className="scroll-mt-20 border-t border-border-subtle bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <EmailCapture />
      </div>
    </section>
  );
}

/* ── Accountability: Who We Are ── */
function AccountabilitySection() {
  return (
    <section className="border-t border-border-subtle bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-xl font-semibold text-navy">Kdo smo</h2>
          <p className="text-sm text-text-muted">
            Transparentnost in odgovornost sta pomembni
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Advisor contact */}
          <div className="rounded-xl border border-border bg-bg-soft p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-navy text-white">
                <User className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Svetovalec</h3>
                <p className="text-sm text-text-muted">Vaša kontaktna oseba</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-text">
                <strong className="text-navy">Ime:</strong> TODO (owner name)
              </p>
              <p className="flex items-center gap-2 text-text">
                <Mail className="size-3.5" />
                TODO (owner email)
              </p>
              <p className="flex items-center gap-2 text-text">
                <Phone className="size-3.5" />
                TODO (owner phone)
              </p>
            </div>
          </div>

          {/* Company details */}
          <div className="rounded-xl border border-border bg-bg-soft p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-navy text-white">
                <Shield className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Podjetje</h3>
                <p className="text-sm text-text-muted">Pravni podatki</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-text">
              <p><strong className="text-navy">Naziv:</strong> TODO (company name)</p>
              <p><strong className="text-navy">Matična št.:</strong> TODO</p>
              <p><strong className="text-navy">Davčna št.:</strong> TODO</p>
              <p><strong className="text-navy">Naslov:</strong> TODO</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-accent-bg bg-accent-bg p-4 text-center text-sm text-accent">
          <strong>TODO:</strong> Owner to fill in company details in{" "}
          <code className="rounded bg-white px-2 py-0.5">src/config/company.ts</code> — 
          data will appear automatically here and in footer
        </div>
      </div>
    </section>
  );
}

/* ── Mobile Sticky CTA ── */
function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border-subtle bg-white/95 p-4 shadow-mobile-cta backdrop-blur-md sm:hidden">
      <Link
        href="/posvet"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 font-medium text-white shadow-sm"
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
      q: "Ali mi res lahko zaupate?",
      a: "Razumem. Zato je prvi pogovor brezplačen in brez obveznosti. Spoznajte me. Preverite, kaj delam. Nič ne podpišete, nič ne vložite — dokler niste prepričani."
    },
    {
      q: "Nimam veliko denarja. Je to sploh zame?",
      a: "Začnete lahko z enim kovincem. Ali s 50 € mesečno. Ni pomembno, koliko — pomembno je, da začnete. Majhni zneski se seštejejo."
    },
    {
      q: "Kaj pa, če bom nekoč potreboval/-a ta denar nazaj?",
      a: "Prodate kadarkoli. Brez vezave, brez kazni. Odkupimo vaše srebro po tržni ceni. V nekaj dneh je denar na vašem računu."
    }
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
              "Domače srebro — varčevanje v srebrnih kovancih za vašo družino. Fizično premoženje, ki ga shranite doma.",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: "Slovenian"
            }
          })
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
              acceptedAnswer: { "@type": "Answer", text: item.a }
            }))
          })
        }}
      />
    </>
  );
}
