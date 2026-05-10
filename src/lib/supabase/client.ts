import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

function init(): SupabaseClient {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "Supabase public client missing NEXT_PUBLIC_SUPABASE_URL/ANON_KEY"
    );
  }
  cached = createClient(url, anonKey);
  return cached;
}

/**
 * Public client — respects RLS, safe for server components and client-side.
 * Lazily constructed so the module can be imported during `next build` even
 * without env vars; throws on first use, which our call-sites catch.
 */
export const supabase = new Proxy({} as SupabaseClient, {
  get(_t, prop, receiver) {
    const real = init();
    const value = Reflect.get(real, prop, receiver);
    return typeof value === "function" ? value.bind(real) : value;
  },
});
