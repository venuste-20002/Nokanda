import { redirect } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";

export const load = async (event) => {
  // if (!event.locals.session) return redirect(303, "/signup");
  if (event.locals.session.user.phone.length <= 0)
    return redirect(307, "/number");
  return;
};
