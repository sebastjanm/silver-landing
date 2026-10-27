/**
 * Shared HomePage component for both SL and EN
 * Uses content dictionary for all text
 */

import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { EmailCapture } from "@/components/EmailCapture";
import { TrustLegal } from "@/components/TrustLegal";
import { PriceTicker } from "@/components/PriceTicker";
import { StoryChapter } from "@/components/StoryChapter";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { StickyCta } from "@/components/StickyCta";
import { TimelineIllustration } from "@/components/TimelineIllustration";
import { PerformanceDisclaimer } from "@/components/PerformanceDisclaimer";
import type { Content } from "@/content/sl";
import type { Locale } from "@/lib/i18n";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

interface HomePageProps {
  content: Content;
  locale: Locale;
}

export function HomePage({ content, locale }: HomePageProps) {
  const c = content;

  return (
    <>
      <SchemaOrg content={c} locale={locale} />
      <StickyCta content={c} locale={locale} />
      <PriceTicker content={c} locale={locale} />
      
      {/* Chapter 1 */}
      <StoryChapter number="01" id="chapter-1" theme="dark" className="bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className={`${playfair.className} text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1]`}>
            {c.chapter1.headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
            {c.chapter1.subheadline}
          </p>
          <TimelineIllustration content={c} />
        </div>
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-silver_3aab.jpg" alt={c.chapter1.imageAlt} fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
      </StoryChapter>

      {/* Chapter 2 */}
      <StoryChapter number="02" id="chapter-2" theme="light" className="bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#0a1628] mb-8 text-center`}>
            {c.chapter2.headline}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-16">
            {c.chapter2.subheadline}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <DataCard label={c.chapter2.goldLabel} value={c.chapter2.goldValue} period={c.chapter2.goldPeriod} positive />
            <DataCard label={c.chapter2.silverLabel} value={c.chapter2.silverValue} period={c.chapter2.silverPeriod} positive />
            <DataCard label={c.chapter2.eurLabel} value={c.chapter2.eurValue} period={c.chapter2.eurPeriod} positive={false} />
          </div>

          <PerformanceDisclaimer content={c} className="mt-12" />
        </div>
      </StoryChapter>

      {/* Chapter 3 */}
      <StoryChapter number="03" id="chapter-3" theme="dark" className="bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
          <div>
            <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white mb-8 leading-tight`}>
              {c.chapter3.headline}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              {c.chapter3.body1}
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              {c.chapter3.body2}
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/saver-table_fe04.jpg" alt={c.chapter3.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </StoryChapter>

      {/* Chapter 4 */}
      <StoryChapter number="04" id="chapter-4" theme="light" className="bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#0a1628] mb-12 text-center`}>
            {c.chapter4.headline}
          </h2>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-12">
            <Image src="/images/vault_c7da.jpg" alt={c.chapter4.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <TrustPillar icon="shield" title={c.chapter4.pillar1Title} description={c.chapter4.pillar1Description} />
            <TrustPillar icon="certificate" title={c.chapter4.pillar2Title} description={c.chapter4.pillar2Description} />
            <TrustPillar icon="package" title={c.chapter4.pillar3Title} description={c.chapter4.pillar3Description} />
          </div>
        </div>
      </StoryChapter>

      {/* Chapter 5 */}
      <StoryChapter number="05" id="chapter-5" theme="dark" className="bg-gradient-to-br from-[#1a2332] to-[#0a1628]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white mb-8`}>
            {c.chapter5.headline}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            {c.chapter5.subheadline}
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <DecisionCard label={c.chapter5.whenLabel} value={c.chapter5.whenValue} />
            <DecisionCard label={c.chapter5.howMuchLabel} value={c.chapter5.howMuchValue} />
            <DecisionCard label={c.chapter5.whyLabel} value={c.chapter5.whyValue} />
          </div>

          <p className="mt-12 text-lg text-white/60">
            {c.chapter5.footer}
          </p>
        </div>
      </StoryChapter>

      {/* Chapter 6 */}
      <StoryChapter number="06" id="chapter-6" theme="light" className="bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#0a1628] mb-16 text-center`}>
            {c.chapter6.headline}
          </h2>
          
          <div className="space-y-12">
            <ProcessStep number="1" title={c.chapter6.step1Title} description={c.chapter6.step1Description} />
            <ProcessStep number="2" title={c.chapter6.step2Title} description={c.chapter6.step2Description} />
            <ProcessStep number="3" title={c.chapter6.step3Title} description={c.chapter6.step3Description} />
          </div>
        </div>
      </StoryChapter>

      {/* Chapter 7 */}
      <StoryChapter number="07" id="chapter-7" theme="dark" className="bg-gradient-to-br from-gray-900 via-[#0a1628] to-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white mb-8`}>
            {c.chapter7.headline}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            {c.chapter7.subheadline}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{c.chapter7.readyTitle}</h3>
              <p className="text-white/70 mb-8">{c.chapter7.readyDescription}</p>
              <Link href={locale === "en" ? "/en/consultation" : "/posvet"} className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors">
                {c.chapter7.readyCta}
              </Link>
              <p className="text-sm text-white/50 mt-4">{c.chapter7.readyFooter}</p>
            </div>
            
            <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{c.chapter7.notReadyTitle}</h3>
              <p className="text-white/70 mb-8">{c.chapter7.notReadyDescription}</p>
              <a href="#vodnik" className="inline-block px-8 py-4 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-colors border border-white/40">
                {c.chapter7.notReadyCta}
              </a>
              <p className="text-sm text-white/50 mt-4">{c.chapter7.notReadyFooter}</p>
            </div>
          </div>

          <div id="vodnik" className="scroll-mt-20">
            <EmailCapture content={c} locale={locale} />
          </div>
        </div>
      </StoryChapter>

      <TrustLegal />
    </>
  );
}

// Helper components
function DataCard({ label, value, period, positive }: { label: string; value: string; period: string; positive: boolean }) {
  return (
    <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
      <div className={`text-5xl font-bold mb-3 ${positive ? "text-green-600" : "text-red-600"}`}>{value}</div>
      <div className="text-sm font-medium text-gray-900 mb-2">{label}</div>
      <div className="text-xs text-gray-500">{period}</div>
    </div>
  );
}

function TrustPillar({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-8 text-center">
      <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon === "shield" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
          {icon === "certificate" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
          {icon === "package" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />}
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function DecisionCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
      <div className="text-4xl font-bold text-white mb-2">{label}</div>
      <div className="text-white/70">{value}</div>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-8 items-start">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0a1628] text-white flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <div className="flex-1 pt-3">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function SchemaOrg({ content, locale }: { content: Content; locale: Locale }) {
  const baseUrl = "https://www.nakupsrebra.com";
  const url = locale === "en" ? `${baseUrl}/en` : baseUrl;
  
  return (
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
  );
}
