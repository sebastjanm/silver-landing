import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Public client — respects RLS, safe for server components and client-side */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
