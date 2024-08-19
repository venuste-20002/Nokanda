import { redirect } from "@sveltejs/kit";

export const GET = async (event) => {
  const { locals } = event;
  const { supabase } = locals;

  if (!supabase) {
    return new Response("Supabase not initialized", { status: 500 });
  }

  const {
    data: { session },
  } = await supabase.auth.session();

  if (session) {
    event.locals.session = session;
    return redirect(307, "/");
  }
  return redirect(307, "/signup");
};
