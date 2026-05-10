import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

function init(): SupabaseClient {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Supabase admin client missing NEXT_PUBLIC_SUPABASE_URL/SERVICE_ROLE_KEY"
    );
  }
  cached = createClient(url, serviceKey);
  return cached;
}

/**
 * Admin client — bypasses RLS, server-side only.
 * Lazily constructed so the module can be imported during `next build` even
 * without env vars; throws on first use.
 */
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_t, prop, receiver) {
    const real = init();
    const value = Reflect.get(real, prop, receiver);
    return typeof value === "function" ? value.bind(real) : value;
  },
});
