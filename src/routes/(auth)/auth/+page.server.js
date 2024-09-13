import { redirect } from "@sveltejs/kit";
import { supabase } from "../../../lib/supabaseClient";

export const load = async ({ locals }) => {
  if (locals?.session !== null) return redirect(303, "/");
  return;
};

export const actions = {
  auth: async ({ url }) => {
    const provider = url.searchParams.get("provider");
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: `${provider}`,
    });
    if (error) {
      console.log(error);
    } else {
      return redirect(303, data.url);
    }
  },
};
