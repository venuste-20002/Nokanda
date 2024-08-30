import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
  if (!event?.locals.session) return redirect(303, "/auth");
  if (!event?.locals?.user[0]?.phone) return redirect(307, "/number");
  return;
};
