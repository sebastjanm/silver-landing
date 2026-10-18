"use client";

import { useEffect, useState } from "react";

const GRAMS_PER_OZ = 31.1035;

/** Live spot price for /cena-srebra — same data source as PriceTicker (home price bar). */
export function LiveSilverPrice() {
  const [oz, setOz] = useState<number | null>(null);
  const [status, setStatus] = useState("Posodabljam...");

  useEffect(() => {
    async function load() {
      try {
        const resp = await fetch(
          "https://api.metalpriceapi.com/v1/latest?api_key=13b3c9c49ccc9fecf61aff15e5626b95&base=EUR&currencies=XAG,XAU"
        );
        const data = await resp.json();
        if (data.success && data.rates?.XAG) {
          setOz(1 / data.rates.XAG);
          setStatus(
            "Posodobljeno: " +
              new Date(data.timestamp * 1000).toLocaleDateString("sl-SI")
          );
        } else {
          setStatus("Cena trenutno ni na voljo");
        }
      } catch {
        setStatus("Cena trenutno ni na voljo");
      }
    }
    load();
  }, []);

  const fmt = (n: number, d = 2) =>
    "€" + n.toLocaleString("sl-SI", { minimumFractionDigits: d, maximumFractionDigits: d });

  const cells = [
    { label: "Na gram", value: oz ? fmt(oz / GRAMS_PER_OZ) : "—" },
    { label: "Na unčo (31,1g)", value: oz ? fmt(oz) : "—" },
    { label: "Na kilogram", value: oz ? fmt((oz / GRAMS_PER_OZ) * 1000, 0) : "—" },
  ];

  return (
    <div className="mb-12 rounded-2xl bg-gradient-to-br from-navy to-navy-light p-10 text-white">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <span className="font-serif text-xl">Aktualna cena srebra</span>
        <span className="text-sm text-white/70" aria-live="polite">{status}</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {cells.map((c) => (
          <div key={c.label} className="text-center">
            <div className="mb-2 text-sm text-white/70">{c.label}</div>
            <div className="font-serif text-4xl font-bold text-gold-light">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
