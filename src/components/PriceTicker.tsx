"use client";

import { useEffect, useState } from "react";

type PriceState = {
  silver: string;
  gold: string;
  updated: string;
  stale: boolean;
};

export function PriceTicker() {
  const [state, setState] = useState<PriceState>({
    silver: "—",
    gold: "—",
    updated: "",
    stale: false,
  });

  useEffect(() => {
    let cancelled = false;
    async function fetchPrices() {
      try {
        const resp = await fetch("/api/prices");
        if (!resp.ok) return;
        const data = await resp.json();
        if (cancelled) return;
        if (data.silverEurPerOz != null && data.goldEurPerOz != null) {
          const updated = data.updatedAt
            ? new Date(data.updatedAt).toLocaleDateString("sl-SI", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : "";
          setState({
            silver: Number(data.silverEurPerOz).toFixed(2),
            gold: Number(data.goldEurPerOz).toFixed(0),
            updated,
            stale: data.source === "cache",
          });
        }
      } catch {
        // keep "—" placeholders silently
      }
    }
    fetchPrices();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="border-b border-white/10 bg-navy py-2.5 text-sm text-white/85">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-1 px-6 lg:px-8">
        <span className="font-serif italic text-white/50 max-sm:hidden">
          Trenutne cene
        </span>
        <Quote
          metal="Srebro"
          value={state.silver}
          unit="€/oz"
        />
        <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
        <Quote metal="Zlato" value={state.gold} unit="€/oz" />
        {state.updated && (
          <span className="text-xs text-white/45">
            <span className="font-serif italic">posod.</span>{" "}
            <span className="numerals">{state.updated}</span>
            {state.stale && (
              <span className="ml-1 text-gold-light/70" title="Iz predpomnilnika">
                (cache)
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  );
}

function Quote({
  metal,
  value,
  unit,
}: {
  metal: string;
  value: string;
  unit: string;
}) {
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-serif italic text-white/65">{metal}</span>
      <span className="serif-numerals text-lg leading-none text-gold-light">
        {value}
      </span>
      <span className="text-[11px] uppercase tracking-wider text-white/40">
        {unit}
      </span>
    </span>
  );
}
