import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";

export const load = async (event) => {
  if (event?.locals?.user && event?.locals?.user[0]?.phone)
    return redirect(307, "/");
  if (!event?.locals?.session) return redirect(307, "/auth");
  return;
};

const validation = z.object({
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .length(10, { message: "Phone number length  should be 10" })
    .startsWith("07", { message: "Phone number should start with 07" })
    .refine((e) => /^\d{10}$/.test(e), {
      message: "Phone number should be only digits",
    }),
});

export const actions = {
  default: async ({ fetch, request }) => {
    const data = await request.formData();
    const result = validation.safeParse(Object.fromEntries(data));
    if (!result.success) {
      return fail(400, {
        error: result.error.format(),
        ...Object.fromEntries(data),
      });
    }
    const response = await fetch("/api/number", {
      method: "POST",
      body: JSON.stringify({ phone: result?.data?.phone }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.log(response);
      const errorMessage = await response.json();
      return fail(400, {
        ...Object.fromEntries(data),
        failed: errorMessage.message,
      });
    }
    return redirect(303, "/");
  },
};
