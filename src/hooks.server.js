import "$lib/supabaseClient";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";

export async function handle({ event, resolve }) {
  const { session, supabaseClient } = await getSupabase(event);
  event.locals.session = session;
  event.locals.client = supabaseClient;
  return resolve(event);
}
