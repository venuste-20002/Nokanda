import { supabase, supabaseAdmin } from "$lib/supabaseClient";
import { redirect } from "@sveltejs/kit";

export const POST = async ({ locals, cookies }) => {
  const { error: err } = await supabaseAdmin.auth.admin.deleteUser(
    locals?.session?.user?.id,
  );

  const { error } = await supabase
    .from("user")
    .delete()
    .eq("providerId", locals?.session?.user?.id);

  if (error || err) {
    console.log(error || err);
  }
  cookies.set("supabase-auth-token", "", {
    path: "/",
    expires: new Date(0),
  });
  return redirect(303, "/auth");
};
