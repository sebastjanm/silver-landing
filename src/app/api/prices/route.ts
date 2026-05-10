import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const revalidate = 300;

type PriceResponse = {
  silverEurPerOz: number | null;
  goldEurPerOz: number | null;
  updatedAt: string | null;
  source: "live" | "cache" | "unavailable";
};

export async function GET() {
  const apiKey = process.env.METALPRICE_API_KEY;

  if (apiKey) {
    try {
      const upstream = await fetch(
        `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=EUR&currencies=XAG,XAU`,
        { next: { revalidate: 300 } }
      );
      if (upstream.ok) {
        const data = await upstream.json();
        if (data?.success && data.rates?.XAG && data.rates?.XAU) {
          const silver = Number((1 / data.rates.XAG).toFixed(2));
          const gold = Number((1 / data.rates.XAU).toFixed(0));
          const updatedAt = new Date(
            (data.timestamp ?? Date.now() / 1000) * 1000
          ).toISOString();

          // Best-effort write-through to cache. Never block response on cache failure.
          try {
            supabaseAdmin
              .from("market_prices_cache")
              .upsert({
                id: 1,
                silver_eur_per_oz: silver,
                gold_eur_per_oz: gold,
                updated_at: updatedAt,
                source: "metalpriceapi",
              })
              .then(({ error }) => {
                if (error)
                  console.warn("Price cache write failed:", error.message);
              });
          } catch (err) {
            console.warn(
              "Price cache write skipped:",
              (err as Error).message
            );
          }

          return jsonResponse({
            silverEurPerOz: silver,
            goldEurPerOz: gold,
            updatedAt,
            source: "live",
          });
        }
      }
    } catch (err) {
      console.warn("Live price fetch failed:", (err as Error).message);
    }
  }

  // Fall back to cache.
  try {
    const { data, error } = await supabaseAdmin
      .from("market_prices_cache")
      .select("silver_eur_per_oz, gold_eur_per_oz, updated_at")
      .eq("id", 1)
      .single();

    if (!error && data) {
      return jsonResponse({
        silverEurPerOz: data.silver_eur_per_oz,
        goldEurPerOz: data.gold_eur_per_oz,
        updatedAt: data.updated_at,
        source: "cache",
      });
    }
  } catch (err) {
    console.warn("Price cache read failed:", (err as Error).message);
  }

  return jsonResponse({
    silverEurPerOz: null,
    goldEurPerOz: null,
    updatedAt: null,
    source: "unavailable",
  });
}

function jsonResponse(payload: PriceResponse) {
  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
