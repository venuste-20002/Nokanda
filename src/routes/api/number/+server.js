import { supabase } from "$lib/supabaseClient";

export const POST = async ({ locals, request }) => {
  try {
    const { phone } = await request.json();
    const data = await locals.session;
    await supabase.from("user").insert({
      phone,
      username: data.user.user_metadata.name,
      email: data.user.email,
      providerId: data.user.id,
    });
    return new Response(JSON.stringify({ message: "Successfully done" }), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};
