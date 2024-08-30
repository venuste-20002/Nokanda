import { error, redirect } from "@sveltejs/kit";

export const POST = async ({ locals }) => {
  const { error: err } = await locals.client.auth.signOut();

  if (err) {
    throw error(500, "Something went wrong logging you out.");
  }

  return redirect(303, "/auth");
};
