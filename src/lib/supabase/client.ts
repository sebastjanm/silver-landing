import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ||
  // Placeholder lets `next build` succeed without env; queries fail and are caught (blog shows empty state).
  "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "missing-anon-key";

/** Public client — respects RLS, safe for server components and client-side */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
