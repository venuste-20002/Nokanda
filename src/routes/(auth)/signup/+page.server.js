import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";
import { supabase } from "../../../lib/supabaseClient";
import { URL } from "$env/static/private";

const validation = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid email" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  lang: z.string().min(1, { message: "Language is required" }),
});

export const load = async () => {
  // const { data } = await supabase.from("user").select();
  // console.log(data);
  // return { data };
};

export const actions = {
  signup: async ({ request }) => {
    const { email, gender, lang } = Object.fromEntries(
      await request.formData(),
    );
    let data = { email, gender, lang };
    const result = validation.safeParse(data);

    if (!result.success) {
      return fail(400, {
        error: result.error.format(),
        ...data,
        isLoading: false,
      });
    }
    return { success: true, ...data };
  },
  github: async ({ cookies }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${URL}/callback`,
      },
    });
    if (error) {
      return fail(400, {
        message: "somewent wrong",
      });
    }
    return redirect(303, data.url);
  },
};
