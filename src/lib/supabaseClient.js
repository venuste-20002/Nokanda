import { createClient } from "@supabase/supabase-js";
import { PROJECT_URL, PROJECT_ANNON_KEY } from "$env/static/private";

export const supabase = createClient(PROJECT_URL, PROJECT_ANNON_KEY);

export const handle = async ({ event, resolve }) => {
  event.locals.supabase = supabase;
  return resolve(event);
};
