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
      // Show after scrolling past first chapter (roughly 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const consultationPath = locale === "en" ? "/en/consultation" : "/posvet";

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        href={consultationPath}
        className="block px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors backdrop-blur-sm"
      >
        {c.text}
      </Link>
    </div>
  );
}
