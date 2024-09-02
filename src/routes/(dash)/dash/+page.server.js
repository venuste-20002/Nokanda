import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  if (!locals.session) return redirect(303, "/auth");
};
