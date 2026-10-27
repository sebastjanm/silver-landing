/**
 * Live price ticker
 * Supports both SL and EN via content prop
 * Formats numbers correctly per locale (SL: 47,78 and 3.589; EN: 47.78 and 3,589)
 */

"use client";

import { useEffect, useState } from "react";
import type { Content } from "@/content/sl";
import type { Locale } from "@/lib/i18n";

interface PriceTickerProps {
  content: Content;
  locale: Locale;
}

export function PriceTicker({ content, locale }: PriceTickerProps) {
  const [silver, setSilver] = useState("--");
  const [gold, setGold] = useState("--");
  const [updated, setUpdated] = useState("");
  const c = content.priceTicker;

  useEffect(() => {
    async function fetchPrices() {
      try {
        const resp = await fetch(
          "https://api.metalpriceapi.com/v1/latest?api_key=13b3c9c49ccc9fecf61aff15e5626b95&base=EUR&currencies=XAG,XAU"
        );
        const data = await resp.json();
        if (data.success) {
          const silverValue = 1 / data.rates.XAG;
          const goldValue = Math.round(1 / data.rates.XAU);
          
          // Slovenian: 47,78 and 3.589; English: 47.78 and 3,589
          setSilver(locale === "sl" 
            ? silverValue.toFixed(2).replace(".", ",")
            : silverValue.toFixed(2)
          );
          setGold(locale === "sl"
            ? goldValue.toLocaleString("sl-SI")
            : goldValue.toLocaleString("en-US")
          );
          
          // Slovenian: 27. 10. 2026; English: 27 Oct 2026
          const date = new Date(data.timestamp * 1000);
          const dateFormatter = locale === "sl"
            ? new Intl.DateTimeFormat("sl-SI", { day: "numeric", month: "numeric", year: "numeric" })
            : new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });
          setUpdated(dateFormatter.format(date));
        }
      } catch {
        // Silently fail — prices stay as "--"
      }
    }
    fetchPrices();
  }, [locale]);

  return (
    <div className="border-b border-gray-200 bg-gray-900 py-3 text-sm text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 lg:px-8">
        <span className="text-white/60 max-sm:hidden">{c.label}</span>
        <span className="flex items-center gap-2.5">
          <span className="font-medium">{c.silver}</span>
          <span className="text-xl font-bold tracking-tight text-white">{silver}</span>
          <span className="text-xs text-white/60">{c.unit}</span>
        </span>
        <span className="flex items-center gap-2.5">
          <span className="font-medium">{c.gold}</span>
          <span className="text-xl font-bold tracking-tight text-white">{gold}</span>
          <span className="text-xs text-white/60">{c.unit}</span>
        </span>
        {updated && <span className="text-xs text-white/60">{c.updated.replace("{date}", updated)}</span>}
      </div>
    </div>
  );
}
