import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";
import { supabase } from "../../../lib/supabaseClient";

const validation = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid email" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  lang: z.string().min(1, { message: "Language is required" }),
});

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
