/**
 * Shared HomePage component for both SL and EN
 * Uses content dictionary for all text
 */

import Link from "next/link";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import { EmailCapture } from "@/components/EmailCapture";
import { TrustLegal } from "@/components/TrustLegal";
import { PriceTicker } from "@/components/PriceTicker";
import { StickyCta } from "@/components/StickyCta";
import { PerformanceDisclaimer } from "@/components/PerformanceDisclaimer";
import { KeepUnits } from "@/components/KeepUnits";
import type { Content } from "@/content/sl";
import type { Locale } from "@/lib/i18n";

// latin-ext is required: č, š and ž are not in the latin subset
const inter = Inter({ subsets: ["latin", "latin-ext"] });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["400", "700"] });

interface HomePageProps {
  content: Content;
  locale: Locale;
}

const h2 = `${playfair.className} lining-nums text-3xl md:text-5xl font-bold leading-tight`;

export function HomePage({ content, locale }: HomePageProps) {
  const c = content;
  const consultationPath = locale === "en" ? "/en/consultation" : "/posvet";

  return (
    <div className={`${inter.className} pt-[69px]`}>
      <SchemaOrg content={c} locale={locale} />
      <StickyCta content={c} locale={locale} />
      <PriceTicker content={c} locale={locale} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a1628] text-white">
        <Image
          src="/images/hero-silver_3aab.jpg"
          alt={c.hero.imageAlt}
          fill
          priority
          className="object-cover object-right opacity-25 lg:opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/85 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-24">
          <div className="max-w-2xl">
            <h1 className={`${playfair.className} lining-nums text-[2.5rem] md:text-6xl font-bold leading-[1.1]`}>
              <span className="block">
                <KeepUnits>{c.hero.headlineLead}</KeepUnits>
              </span>{" "}
              <span className="mt-2 block text-[1.75rem] md:text-4xl font-normal leading-snug text-white/80">
                {c.hero.headlineRest}
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/85">{c.hero.subheadline}</p>
            <div className="mt-8">
              <Link
                href={consultationPath}
                className="block rounded-full bg-white px-8 py-4 text-center text-lg font-semibold text-[#0a1628] transition-colors hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-block"
              >
                {c.hero.cta}
              </Link>
              <p className="mt-3 text-base text-white/75">{c.hero.ctaNote}</p>
            </div>
            <ul className="mt-8 space-y-2 border-t border-white/20 pt-6 text-base md:text-lg text-white/90">
              {c.hero.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <CheckMark />
                  {fact}
                </li>
              ))}
            </ul>
            <a href="#vodnik" className="mt-6 inline-block text-base text-white/85 underline underline-offset-4 hover:text-white">
              {c.hero.guideLink}
            </a>
          </div>
        </div>
      </section>

      {/* DDV mechanism and worked example */}
      <section id="ddv" className="bg-[#faf8f5] py-16 md:py-24 text-[#0a1628]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <div>
            <h2 className={h2}>{c.ddv.headline}</h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-800">
              <KeepUnits>{c.ddv.body1}</KeepUnits>
            </p>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-800">{c.ddv.body2}</p>
            <div className="mt-8 border-l-4 border-[#b7791f] pl-5">
              <h3 className="text-lg font-bold">{c.ddv.catchTitle}</h3>
              <p className="mt-1 text-lg leading-relaxed text-gray-800">
                <KeepUnits>{c.ddv.catchBody}</KeepUnits>
              </p>
            </div>
          </div>
          <WorkedExample content={c} consultationPath={consultationPath} />
        </div>
      </section>

      {/* Commission disclosure */}
      <section id="provizija" className="bg-[#0a1628] py-16 md:py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <h2 className={h2}>{c.earning.headline}</h2>
          <div className="text-lg md:text-xl leading-relaxed">
            <p className="text-white/85">{c.earning.body1}</p>
            <p className="mt-4 font-medium">{c.earning.body2}</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24 text-[#0a1628]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={h2}>{c.steps.headline}</h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
            <ProcessStep number="1" title={c.steps.step1Title} description={c.steps.step1Description} />
            <ProcessStep number="2" title={c.steps.step2Title} description={c.steps.step2Description} />
            <ProcessStep number="3" title={c.steps.step3Title} description={c.steps.step3Description} />
          </ol>
          <div className="mt-12">
            <Cta href={consultationPath}>{c.hero.cta}</Cta>
          </div>
        </div>
      </section>

      {/* Storage */}
      <section className="bg-[#faf8f5] py-16 md:py-24 text-[#0a1628]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg md:h-[28rem]">
            <Image src="/images/vault_c7da.jpg" alt={c.storage.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className={h2}>{c.storage.headline}</h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-800">{c.storage.body}</p>
            <dl className="mt-8 divide-y divide-gray-300 border-y border-gray-300">
              <StorageFact title={c.storage.pillar1Title} description={c.storage.pillar1Description} />
              <StorageFact title={c.storage.pillar2Title} description={c.storage.pillar2Description} />
              <StorageFact title={c.storage.pillar3Title} description={c.storage.pillar3Description} />
            </dl>
          </div>
        </div>
      </section>

      {/* Past performance */}
      <section className="bg-white py-16 md:py-24 text-[#0a1628]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={h2}>{c.performance.headline}</h2>
          <p className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-800">{c.performance.subheadline}</p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            <DataPoint label={c.performance.silverLabel} value={c.performance.silverValue} period={c.performance.silverPeriod} />
            <DataPoint label={c.performance.goldLabel} value={c.performance.goldValue} period={c.performance.goldPeriod} />
            <DataPoint label={c.performance.eurLabel} value={c.performance.eurValue} period={c.performance.eurPeriod} />
          </dl>
          <PerformanceDisclaimer content={c} className="mt-10" />
        </div>
      </section>

      {/* When it is not worth it */}
      <section id="kdaj-ne" className="bg-[#1a2332] py-16 md:py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <h2 className={h2}>{c.notWorth.headline}</h2>
          <div>
            <ul className="divide-y divide-white/20 border-y border-white/20">
              {c.notWorth.items.map((item) => (
                <li key={item.title} className="py-5">
                  <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                  <p className="mt-1 text-lg leading-relaxed text-white/85">
                    <KeepUnits>{item.body}</KeepUnits>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg md:text-xl font-medium">{c.notWorth.closing}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="vprasanja" className="bg-[#faf8f5] py-16 md:py-24 text-[#0a1628]">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={h2}>{c.faq.headline}</h2>
          <div className="mt-8 divide-y divide-gray-300 border-y border-gray-300">
            {c.faq.items.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-lg md:text-xl font-semibold [&::-webkit-details-marker]:hidden">
                  <span>
                    <KeepUnits>{item.question}</KeepUnits>
                  </span>
                  <span aria-hidden="true" className="text-2xl leading-none text-gray-600 group-open:hidden">+</span>
                  <span aria-hidden="true" className="hidden text-2xl leading-none text-gray-600 group-open:inline">−</span>
                </summary>
                <p className="pb-6 text-lg leading-relaxed text-gray-800">
                  <KeepUnits>{item.answer}</KeepUnits>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing: call first, guide as the lower-commitment route */}
      <section className="bg-[#0a1628] py-16 md:py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={h2}>{c.closing.headline}</h2>
          <p className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-white/85">{c.closing.subheadline}</p>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[5fr_6fr] lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold">{c.closing.readyTitle}</h3>
              <p className="mt-2 mb-6 text-lg text-white/85">{c.closing.readyDescription}</p>
              <Link
                href={consultationPath}
                className="block rounded-full bg-white px-8 py-4 text-center text-lg font-semibold text-[#0a1628] transition-colors hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-block"
              >
                {c.hero.cta}
              </Link>
            </div>
            <div id="vodnik" className="scroll-mt-24">
              <h3 className="text-2xl font-bold">{c.closing.notReadyTitle}</h3>
              <p className="mt-2 mb-6 text-lg text-white/85">{c.closing.notReadyDescription}</p>
              <div className="text-left text-gray-900">
                <EmailCapture content={c} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustLegal />
    </div>
  );
}

// Helper components
function WorkedExample({ content, consultationPath }: { content: Content; consultationPath: string }) {
  const c = content.example;

  return (
    <div className="rounded-lg bg-white p-6 md:p-10 shadow-[0_1px_0_#d9d4cb,0_12px_32px_-20px_rgba(10,22,40,0.35)]">
      <h3 className={`${playfair.className} lining-nums text-2xl md:text-3xl font-bold`}>
        <KeepUnits>{c.headline}</KeepUnits>
      </h3>

      <div className="mt-8">
        <p className="text-base font-semibold">
          <KeepUnits>{c.withDdvLabel}</KeepUnits>
        </p>
        {/* Bars share one scale: 8.197 + 1.803 = 10.000 */}
        <div aria-hidden="true" className="mt-2 flex h-5 gap-0.5">
          <div className="rounded-l bg-[#2a5a9c]" style={{ width: "81.97%" }} />
          <div className="rounded-r bg-[#b7791f]" style={{ width: "18.03%" }} />
        </div>
        <dl className="mt-3 flex justify-between gap-4">
          <ExampleAmount amount={c.withDdvMetal} label={c.withDdvMetalLabel} />
          <ExampleAmount amount={c.withDdvTax} label={c.withDdvTaxLabel} alignEnd />
        </dl>
      </div>

      <div className="mt-8">
        <p className="text-base font-semibold">{c.withoutDdvLabel}</p>
        <div aria-hidden="true" className="mt-2 flex h-5">
          <div className="w-full rounded bg-[#2a5a9c]" />
        </div>
        <dl className="mt-3 flex">
          <ExampleAmount amount={c.withoutDdvMetal} label={c.withoutDdvMetalLabel} />
        </dl>
      </div>

      <p className={`${playfair.className} lining-nums mt-8 text-xl md:text-2xl font-bold leading-snug`}>
        <KeepUnits>{c.takeaway}</KeepUnits>
      </p>
      <p className="mt-3 text-base leading-relaxed text-gray-700">{c.note}</p>
      <div className="mt-6">
        <Cta href={consultationPath}>{content.hero.cta}</Cta>
      </div>
    </div>
  );
}

function ExampleAmount({ amount, label, alignEnd = false }: { amount: string; label: string; alignEnd?: boolean }) {
  return (
    <div className={`flex flex-col ${alignEnd ? "text-right" : ""}`}>
      <dt className="order-2 text-base text-gray-700">{label}</dt>
      <dd className={`${playfair.className} lining-nums order-1 text-2xl md:text-3xl font-bold whitespace-nowrap`}>{amount}</dd>
    </div>
  );
}

function Cta({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="block rounded-full bg-[#0a1628] px-4 py-4 text-center text-base font-semibold sm:px-8 sm:text-lg text-white transition-colors hover:bg-[#1a2332] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628] sm:inline-block"
    >
      {children}
    </Link>
  );
}

function CheckMark() {
  return (
    <svg aria-hidden="true" className="mt-1 size-5 flex-shrink-0 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DataPoint({ label, value, period }: { label: string; value: string; period: string }) {
  return (
    <div className="flex flex-col border-t-2 border-[#0a1628] pt-4">
      <dt className="order-2 mt-2 text-lg font-semibold">{label}</dt>
      <dd className={`${playfair.className} lining-nums order-1 text-4xl md:text-5xl font-bold whitespace-nowrap`}>{value}</dd>
      <dd className="order-3 text-sm text-gray-600">{period}</dd>
    </div>
  );
}

function StorageFact({ title, description }: { title: string; description: string }) {
  return (
    <div className="py-4">
      <dt className="text-lg font-bold">{title}</dt>
      <dd className="text-lg leading-relaxed text-gray-800">
        <KeepUnits>{description}</KeepUnits>
      </dd>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <li className="flex gap-5 md:block">
      <div className={`${playfair.className} lining-nums flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0a1628] text-xl font-bold text-white md:mb-5`}>
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-lg leading-relaxed text-gray-800">{description}</p>
      </div>
    </li>
  );
}

function SchemaOrg({ content, locale }: { content: Content; locale: Locale }) {
  const baseUrl = "https://www.nakupsrebra.com";
  const url = locale === "en" ? `${baseUrl}/en` : baseUrl;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NakupSrebra.com",
            url,
            description: content.schema.description,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: locale === "sl" ? "Slovenian" : "English",
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
            inLanguage: locale,
            mainEntity: content.faq.items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
