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
          setUpdated(
            "Posodobljeno: " + date.toLocaleDateString("sl-SI")
          );
        }
      } catch {
        // Silently fail — prices stay as "--"
      }
    }
    fetchPrices();
  }, []);

  return (
    <div className="bg-navy py-3 text-sm text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 lg:px-8">
        <span className="text-white/70 max-sm:hidden">Trenutne cene:</span>
        <span className="flex items-center gap-2">
          <span className="font-medium">🥈 Srebro</span>
          <span className="font-serif text-lg font-bold text-gold-light">
            {silver}
          </span>
          <span className="text-xs text-white/60">€/oz</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="font-medium">🥇 Zlato</span>
          <span className="font-serif text-lg font-bold text-gold-light">
            {gold}
          </span>
          <span className="text-xs text-white/60">€/oz</span>
        </span>
        {updated && (
          <span className="text-xs text-white/50">{updated}</span>
        )}
      </div>
    </div>
  );
}
