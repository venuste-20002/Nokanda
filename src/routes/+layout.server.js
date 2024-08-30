import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
  return {
    session: event.locals.session,
    user: event.locals.user,
  };
};
