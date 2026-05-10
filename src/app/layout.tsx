import type { Metadata } from "next";
import Link from "next/link";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Ornament } from "@/components/Glyphs";
import { OrganizationJsonLd } from "@/components/JsonLd";

const serif = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NakupSrebra.com | Naložbe v Srebro in Zlato",
    template: "%s | NakupSrebra.com",
  },
  description:
    "Srebro in zlato še nikoli nista izgubila vrednosti. Brezplačen posvet za varne naložbe v plemenite kovine.",
  metadataBase: new URL("https://www.nakupsrebra.com"),
  openGraph: {
    type: "website",
    locale: "sl_SI",
    siteName: "NakupSrebra.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" className={`${serif.variable} ${sans.variable}`}>
      <body className="pt-16">
        <OrganizationJsonLd
          legalName={COMPANY.legalName}
          registration={COMPANY.registration}
          vatId={COMPANY.vatId}
          address={COMPANY.address}
        />
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/80 py-3.5 shadow-xs backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-base text-navy no-underline transition-opacity hover:opacity-70"
        >
          NakupSrebra<span className="text-gold">.</span>com
        </Link>
        <div className="flex items-center gap-6 max-sm:gap-3">
          <Link
            href="/cena-srebra"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-navy max-sm:hidden"
          >
            Cena srebra
          </Link>
          <Link
            href="/zlato-ali-srebro"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-navy max-md:hidden"
          >
            Zlato ali srebro
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-navy"
          >
            Blog
          </Link>
          <Link
            href="/vodnik/vodnik-srebro"
            className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-navy max-md:hidden"
          >
            Vodnik
          </Link>
          <Link
            href="/posvet"
            className="rounded-none border border-navy bg-navy px-5 py-2.5 text-xs font-semibold tracking-wide text-white no-underline shadow-nav-cta transition-all hover:bg-navy-light hover:shadow-nav-cta-hover"
          >
            Brezplačen posvet
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* TODO(user): Replace placeholder fields below with real company registration
   data once provided. The structure is what matters — these fields are the
   single highest-leverage trust signal we can ship. */
const COMPANY = {
  legalName: "NakupSrebra (s.p.)",
  registration: "0000000000",
  vatId: "SI00000000",
  address: "Ljubljana, Slovenija",
  partners: ["Heraeus", "Argor-Heraeus", "MKS PAMP"],
};

function Footer() {
  return (
    <footer className="bg-navy pt-14 pb-10 text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="gold-rule mb-12" />

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-serif text-base text-white">
              <Ornament className="text-gold-light" />
              <span>Podjetje</span>
            </h3>
            <dl className="space-y-2 text-sm text-white/75">
              <Row label="Ime" value={COMPANY.legalName} />
              <Row label="Matična" value={<span className="numerals">{COMPANY.registration}</span>} />
              <Row label="Davčna" value={<span className="numerals">{COMPANY.vatId}</span>} />
              <Row label="Naslov" value={COMPANY.address} />
            </dl>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-serif text-base text-white">
              <Ornament className="text-gold-light" />
              <span>Partnerji za hrambo</span>
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              {COMPANY.partners.map((p) => (
                <li key={p} className="font-serif italic">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-white/50">
              Vse fizične kovine hranimo v zavarovanih trezorjih partnerskih
              talilnic in carinskih skladišč.
            </p>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-serif text-base text-white">
              <Ornament className="text-gold-light" />
              <span>Povezave</span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/posvet" className="text-white/75 hover:text-gold-light">
                  Brezplačen posvet
                </Link>
              </li>
              <li>
                <Link href="/cena-srebra" className="text-white/75 hover:text-gold-light">
                  Trenutna cena srebra
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/75 hover:text-gold-light">
                  Blog in vodniki
                </Link>
              </li>
              <li>
                <Link href="/vodnik/vodnik-srebro" className="text-white/75 hover:text-gold-light">
                  Vodnik za začetnike (PDF)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-12 mb-6" />

        <p className="mb-4 text-xs leading-relaxed text-white/50">
          Pri sklenitvi posla prejmemo provizijo od certificiranega
          mednarodnega partnerja za nakup in hrambo plemenitih kovin. Cena za
          vas se zaradi tega ne spremeni. Več o partnerju izveste v posvetu,
          pred kakršno koli odločitvijo.
        </p>

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/55 sm:flex-row">
          <p>
            © <span className="numerals">{new Date().getFullYear()}</span>{" "}
            {COMPANY.legalName}. Vse pravice pridržane.
          </p>
          <p className="text-center sm:text-right">
            Vsebina ni finančni nasvet. Posvetujte se s strokovnjakom.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="font-serif italic text-white/45">{label}</dt>
      <dd className="text-right text-white/80">{value}</dd>
    </div>
  );
}
