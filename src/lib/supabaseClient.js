import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_SERVICE,
} from "$env/static/public";
import { createClient } from "@supabase/auth-helpers-sveltekit";

export const supabase = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
);

export const supabaseAdmin = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_SERVICE,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
);
