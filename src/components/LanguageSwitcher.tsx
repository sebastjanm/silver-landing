/**
 * Language switcher component (SL | EN)
 * Small, unobtrusive, keyboard accessible
 * Maps pages explicitly to avoid 404 links
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

// Explicit page mappings (only pages that exist in both languages)
const pageMap: Record<string, { sl: string; en: string }> = {
  // Homepage
  "/": { sl: "/", en: "/en" },
  "/en": { sl: "/", en: "/en" },
  // Consultation
  "/posvet": { sl: "/posvet", en: "/en/consultation" },
  "/en/consultation": { sl: "/posvet", en: "/en/consultation" },
};

export function LanguageSwitcher({ currentLocale, className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale: Locale = currentLocale === "sl" ? "en" : "sl";
  
  // Get the mapped path for the target locale, or default to homepage if no mapping
  const mapping = pageMap[pathname];
  const targetPath = mapping ? mapping[targetLocale] : (targetLocale === "en" ? "/en" : "/");

  // On SL-only pages (blog, cena-srebra, vodnik), hide EN or link to /en home
  const isSlOnlyPage = pathname.startsWith("/blog") || 
                       pathname.startsWith("/cena-srebra") || 
                       pathname.startsWith("/vodnik") ||
                       pathname.startsWith("/nakup-srebra") ||
                       pathname.startsWith("/hvala") ||
                       pathname.startsWith("/srebro-vs-") ||
                       pathname.startsWith("/zlato-ali-") ||
                       pathname === "/srebrni-kovanci" ||
                       pathname === "/vrednost-srebra" ||
                       pathname === "/statistika-srebra-2026" ||
                       pathname.startsWith("/nalozbe");

  // On SL-only pages from SL side, link EN to homepage
  const finalTargetPath = (currentLocale === "sl" && isSlOnlyPage) ? "/en" : targetPath;

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`} role="navigation" aria-label="Language">
      {currentLocale === "sl" ? (
        <>
          <span className="font-semibold text-gray-900" aria-current="true">SL</span>
          <span className="text-gray-400">|</span>
          <Link
            href={finalTargetPath}
            className="text-gray-600 hover:text-gray-900 transition-colors"
            hrefLang="en"
            aria-label="Switch to English"
          >
            EN
          </Link>
        </>
      ) : (
        <>
          <Link
            href={finalTargetPath}
            className="text-gray-600 hover:text-gray-900 transition-colors"
            hrefLang="sl"
            aria-label="Preklopi na slovenščino"
          >
            SL
          </Link>
          <span className="text-gray-400">|</span>
          <span className="font-semibold text-gray-900" aria-current="true">EN</span>
        </>
      )}
    </div>
  );
}
