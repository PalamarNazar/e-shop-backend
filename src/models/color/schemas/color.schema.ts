import z from "zod";
import slugify from "slugify";

const baseColorSchema = z.object({
  name: z.string().min(1, { message: "Color name is too small" }),
  hex: z
    .string()
    .toLowerCase()
    .min(3, { message: "Hex is too small" })
    .max(8, { message: "Hex is too large" })
    .regex(/^[0-9a-f]+$/, { message: "Invalid hex character format" })
    .transform((val) => (val.startsWith("#") ? val.slice(1) : val))
    .refine((val) => [3, 4, 6, 8].includes(val.length), {
      message: "Hex format must be 3, 4, 6, or 8 characters long",
    }),
  slug: z
    .string()
    .toLowerCase()
    .trim()
    .min(1, { message: "slug is too small" })
    .optional(),
});

export const colorSchema = baseColorSchema.transform((data) => {
  return {
    ...data,
    slug:
      data.slug ||
      slugify(data.name, { lower: true, strict: true, trim: true }),
  };
});

export const updateColorSchema = baseColorSchema.partial();

export type UpdateColorPayload = z.infer<typeof updateColorSchema>;

export type ColorDto = z.infer<typeof colorSchema>;
