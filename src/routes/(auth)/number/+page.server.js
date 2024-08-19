import { fail } from "@sveltejs/kit";
import { z } from "zod";

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
  default: async ({ request }) => {
    const data = await request.formData();
    const result = validation.safeParse(Object.fromEntries(data));
    if (!result.success) {
      return fail(400, {
        error: result.error.format(),
        ...Object.fromEntries(data),
      });
    }
    return { success: true, ...Object.fromEntries(data) };
  },
};
