/**
 * StickyCta - Quiet sticky CTA button
 * Supports both SL and EN via content prop
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Content } from "@/content/sl";
import type { Locale } from "@/lib/i18n";

interface StickyCtaProps {
  content: Content;
  locale: Locale;
}

export function StickyCta({ content, locale }: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false);
  const c = content.stickyCta;

  useEffect(() => {
    function handleScroll() {
      // Show after the hero, hide near the end where the closing CTA and footer sit
      const nearEnd = window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 700;
      setIsVisible(window.scrollY > window.innerHeight * 0.5 && !nearEnd);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const consultationPath = locale === "en" ? "/en/consultation" : "/posvet";

  return (
    <div
      className={`fixed z-40 transition-all duration-300 max-sm:inset-x-0 max-sm:bottom-0 max-sm:border-t max-sm:border-gray-200 max-sm:bg-white max-sm:p-3 sm:bottom-8 sm:right-8 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        href={consultationPath}
        className="block px-6 py-3 bg-gray-900 text-center text-white text-base sm:text-sm font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors backdrop-blur-sm"
      >
        {c.text}
      </Link>
    </div>
  );
}
