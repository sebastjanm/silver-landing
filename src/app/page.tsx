/**
 * Homepage - Story-led chapter narrative
 * Creative redesign: silver as timeless anchor, storytelling scroll
 * 
 * REGULATORY COMPLIANCE:
 * - Replaced "še nikoli nista izgubila vrednosti" with safer wording
 * - All performance figures clearly labelled with periods
 * - Past performance disclaimer included
 * - No absolute outcome promises
 */

import type { Metadata } from "next";
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

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Tisočletja preizkušena shramba vrednosti | NakupSrebra.com",
  description:
    "Srebro shranjuje vrednost že tisočletja. Fizično, oprijemljivo, vaše. Zavarovan švicarski trezor, brez DDV, brez vezave. Brezplačen posvet.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg />
      <ProgressIndicator />
      <StickyCta />
      <PriceTicker />
      
      {/* Chapter 1: Od kamna do kovanca */}
      <StoryChapter
        number="01"
        id="chapter-1"
        theme="dark"
        className="bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]"
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className={`${playfair.className} text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1]`}>
            Od kamna<br />do kovanca
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
            Srebro je služilo kot denar že tisočletja. Od antičnih civilizacij do današnjih dni.
            Ni modna naložba. Je časovno preizkušena shramba vrednosti.
          </p>
          <TimelineIllustration />
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-silver_3aab.jpg"
            alt="Ilustracija: srebrne palice"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
      </StoryChapter>

      {/* Chapter 2: Kaj ste prihranili? */}
      <StoryChapter
        number="02"
        id="chapter-2"
        theme="light"
        className="bg-[#faf8f5]"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#0a1628] mb-8 text-center`}>
            Kaj ste<br className="md:hidden" /> prihranili?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-16">
            Denar na bančnem računu izgublja kupno moč. Vsako leto, tiho, neopazno.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-green-600 mb-3">+699%</div>
              <div className="text-sm font-medium text-gray-900 mb-2">Zlato v EUR</div>
              <div className="text-xs text-gray-500">okt. 2006 – okt. 2026</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-green-600 mb-3">+489%</div>
              <div className="text-sm font-medium text-gray-900 mb-2">Srebro v EUR</div>
              <div className="text-xs text-gray-500">okt. 2006 – okt. 2026</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-red-600 mb-3">−35%</div>
              <div className="text-sm font-medium text-gray-900 mb-2">Kupna moč EUR</div>
              <div className="text-xs text-gray-500">Inflacija, 1999–sep. 2026</div>
            </div>
          </div>

          <PerformanceDisclaimer className="mt-12" />
        </div>
      </StoryChapter>

      {/* Chapter 3: Nekaj, kar lahko primete */}
      <StoryChapter
        number="03"
        id="chapter-3"
        theme="dark"
        className="bg-gradient-to-br from-gray-900 to-gray-800"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
          <div>
            <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white mb-8 leading-tight`}>
              Nekaj, kar lahko primete
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              Denar je številka v računalniku. Delnice so vpis v registru. Kriptovalute so koda.
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              Srebro lahko primete v roke. Je fizično. Je vaše. V vašem imenu.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/saver-table_fe04.jpg"
              alt="Ilustracija: srebrni kovanec ob miru"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </StoryChapter>

      {/* Chapter 4: Varno shranjeno */}
      <StoryChapter
        number="04"
        id="chapter-4"
        theme="light"
        className="bg-white"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#0a1628] mb-12 text-center`}>
            Varno shranjeno
          </h2>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-12">
            <Image
              src="/images/vault_c7da.jpg"
              alt="Ilustracija: varnostni trezor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Švicarski trezor</h3>
              <p className="text-sm text-gray-600">Zavarovan, nadzorovan, varen</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certifikat lastništva</h3>
              <p className="text-sm text-gray-600">Na vaše ime, preverljivo</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Brez DDV</h3>
              <p className="text-sm text-gray-600">Investicijsko srebro, brez davka</p>
            </div>
            <div className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dostava na zahtevo</h3>
              <p className="text-sm text-gray-600">Fizična dostava na dom po želji</p>
            </div>
          </div>
        </div>
      </StoryChapter>

      {/* Chapter 5: Kdaj bi prodali? */}
      <StoryChapter
        number="05"
        id="chapter-5"
        theme="dark"
        className="bg-gradient-to-br from-[#1a2332] to-[#0a1628]"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white mb-8`}>
            Kdaj bi prodali?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Ko potrebujete denar. Brez vprašanj, brez kazni, brez čakanja.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">Kdaj</div>
              <div className="text-white/70">Vi odločate</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">Koliko</div>
              <div className="text-white/70">Vi odločate</div>
            </div>
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">Zakaj</div>
              <div className="text-white/70">Brez obrazložitve</div>
            </div>
          </div>

          <p className="mt-12 text-lg text-white/60">
            Nekaj dni za prodajo. Denar na vašem računu. Brez skritih stroškov.
          </p>
        </div>
      </StoryChapter>

      {/* Chapter 6: Kako začnete */}
      <StoryChapter
        number="06"
        id="chapter-6"
        theme="light"
        className="bg-[#faf8f5]"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#0a1628] mb-16 text-center`}>
            Kako začnete
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0a1628] text-white flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Brezplačen pogovor</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  15 minut. Brez pritiska, brez prodaje. Spoznajte me, povejte mi o svojih ciljih,
                  vprašajte vse, kar vas zanima.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0a1628] text-white flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Prilagojen predlog</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Na podlagi pogovora pripravim predlog: koliko, zakaj, kako. Transparentno, brez skritih stroškov.
                  Vi odločite, ali želite nadaljevati.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0a1628] text-white flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Varno lastništvo</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ko se odločite, uredimo nakup. Kovine gredo v švicarski trezor na vaše ime.
                  Dobite certifikat. Lahko preverite stanje kadarkoli.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StoryChapter>

      {/* Chapter 7: Začnite danes */}
      <StoryChapter
        number="07"
        id="chapter-7"
        theme="dark"
        className="bg-gradient-to-br from-gray-900 via-[#0a1628] to-gray-900"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white mb-8`}>
            Začnite danes
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Dva načina: pogovor za tiste, ki ste pripravljeni. Vodnik za tiste, ki potrebujete še čas.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Za pripravljene</h3>
              <p className="text-white/70 mb-8">Brezplačen posvet, 15 minut, brez obveznosti</p>
              <Link
                href="/posvet"
                className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Rezervirajte posvet
              </Link>
              <p className="text-sm text-white/50 mt-4">Brezplačen, nezavezujoč</p>
            </div>
            
            <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Za tiste, ki potrebujejo čas</h3>
              <p className="text-white/70 mb-8">Preberite vodnik v miru, brez pritiska</p>
              <a
                href="#vodnik"
                className="inline-block px-8 py-4 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-colors border border-white/40"
              >
                Brezplačen vodnik
              </a>
              <p className="text-sm text-white/50 mt-4">Email, brez spama</p>
            </div>
          </div>

          <div id="vodnik" className="scroll-mt-20">
            <EmailCapture />
          </div>
        </div>
      </StoryChapter>

      <TrustLegal />
    </>
  );
}

/* ── Schema.org ── */
function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NakupSrebra.com",
          url: "https://www.nakupsrebra.com",
          description:
            "Fizično srebro in zlato. Švicarska hramba, brez DDV, brezplačen posvet.",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: "Slovenian",
          },
        }),
      }}
    />
  );
}
