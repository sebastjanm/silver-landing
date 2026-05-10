"use client";

import { useEffect, useState } from "react";
import { Ornament } from "@/components/Glyphs";

const TROY_OZ_GRAMS = 31.1034768;

type Prices = {
  silverEurPerOz: number | null;
  goldEurPerOz: number | null;
  updatedAt: string | null;
  source: "live" | "cache" | "unavailable";
};

export function LivePriceCard() {
  const [prices, setPrices] = useState<Prices>({
    silverEurPerOz: null,
    goldEurPerOz: null,
    updatedAt: null,
    source: "unavailable",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/prices")
      .then((r) => r.json())
      .then((data: Prices) => {
        if (!cancelled) {
          setPrices(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const oz = prices.silverEurPerOz;
  const perGram = oz != null ? oz / TROY_OZ_GRAMS : null;
  const perKg = oz != null ? (oz / TROY_OZ_GRAMS) * 1000 : null;

  const updated = prices.updatedAt
    ? new Date(prices.updatedAt).toLocaleDateString("sl-SI", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  return (
    <div className="bg-paper-cream relative my-10 overflow-hidden border border-gold/30 p-6 shadow-md sm:p-9">
      <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/60" />
      <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/60" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/60" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/60" />

      <header className="mb-6 flex flex-col items-center gap-1 text-center">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          <Ornament />
          <span>Spot cena srebra</span>
          <Ornament />
        </p>
        <p className="font-serif italic text-text-muted">
          {loading
            ? "Posodabljam…"
            : updated
              ? `Posodobljeno: ${updated}`
              : "Cena trenutno nedostopna."}
          {prices.source === "cache" && (
            <span className="ml-1 text-xs text-gold-light/80">(predpomnilnik)</span>
          )}
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-3">
        <PriceCell label="Na gram" value={perGram} fractionDigits={2} />
        <PriceCell label="Na unčo (31,1 g)" value={oz} fractionDigits={2} />
        <PriceCell label="Na kilogram" value={perKg} fractionDigits={0} />
      </div>
    </div>
  );
}

function PriceCell({
  label,
  value,
  fractionDigits,
}: {
  label: string;
  value: number | null;
  fractionDigits: number;
}) {
  const formatted =
    value != null
      ? new Intl.NumberFormat("sl-SI", {
          minimumFractionDigits: fractionDigits,
          maximumFractionDigits: fractionDigits,
        }).format(value)
      : "—";
  return (
    <div className="text-center">
      <div className="font-serif italic text-sm text-text-muted">{label}</div>
      <div className="mt-1 flex items-baseline justify-center gap-1">
        <span className="serif-numerals text-3xl text-navy sm:text-4xl">
          {formatted}
        </span>
        <span className="font-serif italic text-text-muted">€</span>
      </div>
    </div>
  );
}
