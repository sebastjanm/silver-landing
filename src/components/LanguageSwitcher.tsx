/**
 * Language switcher component (SL | EN)
 * Small, unobtrusive, keyboard accessible
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternatePath, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale: Locale = currentLocale === "sl" ? "en" : "sl";
  const targetPath = getAlternatePath(pathname, targetLocale);

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`} role="navigation" aria-label="Language">
      {currentLocale === "sl" ? (
        <>
          <span className="font-semibold text-gray-900" aria-current="true">SL</span>
          <span className="text-gray-400">|</span>
          <Link
            href={targetPath}
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
            href={targetPath}
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
