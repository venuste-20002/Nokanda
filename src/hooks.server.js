import "$lib/supabaseClient";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { supabase } from "$lib/supabaseClient";
import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  const { session, supabaseClient } = await getSupabase(event);

  const { data, error } = await supabase
    .from("user")
    .select()
    .eq("providerId", session?.user?.id);

  if (error) console.log(error);
  if (event?.route.id.includes("(dash)") && !session) return redirect(303, "/auth");
  event.locals.user = data;
  event.locals.session = session;
  event.locals.client = supabaseClient;

  return resolve(event);
}
