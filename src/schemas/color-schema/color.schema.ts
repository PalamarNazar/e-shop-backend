import z from "zod";

export const colorSchema = z.object({
  name: z.string().min(1, { message: "No Validate Name" }),
  hex: z.string().startsWith("#", { message: "Is no hex format color" }),
});

export type ColorDto = z.infer<typeof colorSchema>;
