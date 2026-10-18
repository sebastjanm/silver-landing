/**
 * Live price ticker - Modern trust-first redesign
 * Displays current silver and gold prices via API
 */

"use client";

import { useEffect, useState } from "react";

export function PriceTicker() {
  const [silver, setSilver] = useState("--");
  const [gold, setGold] = useState("--");
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    async function fetchPrices() {
      try {
        const resp = await fetch(
          "https://api.metalpriceapi.com/v1/latest?api_key=13b3c9c49ccc9fecf61aff15e5626b95&base=EUR&currencies=XAG,XAU"
        );
        const data = await resp.json();
        if (data.success) {
          setSilver((1 / data.rates.XAG).toFixed(2));
          setGold((1 / data.rates.XAU).toFixed(0));
          const date = new Date(data.timestamp * 1000);
          setUpdated(date.toLocaleDateString("sl-SI"));
        }
      } catch {
        // Silently fail — prices stay as "--"
      }
    }
    fetchPrices();
  }, []);

  return (
    <div className="border-b border-border-subtle bg-navy py-3.5 text-sm text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 lg:px-8">
        <span className="text-white/60 max-sm:hidden">Trenutne cene:</span>
        <span className="flex items-center gap-2.5">
          <span className="font-medium">Srebro</span>
          <span className="text-xl font-bold tracking-tight text-accent-light">{silver}</span>
          <span className="text-xs text-white/60">€/oz</span>
        </span>
        <span className="flex items-center gap-2.5">
          <span className="font-medium">Zlato</span>
          <span className="text-xl font-bold tracking-tight text-accent-light">{gold}</span>
          <span className="text-xs text-white/60">€/oz</span>
        </span>
        {updated && <span className="text-xs text-white/60">Posodobljeno: {updated}</span>}
      </div>
    </div>
  );
}
