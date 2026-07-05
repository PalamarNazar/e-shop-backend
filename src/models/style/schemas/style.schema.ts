import z from "zod";
import slugify from "slugify";

const baseStyleShema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Style name must be at least 1 character long" }),
  slug: z
    .string()
    .toLowerCase()
    .trim()
    .min(1, { message: "slug is too small" })
    .optional(),
});

export const styleSchema = baseStyleShema.transform((data) => {
  return {
    ...data,
    slug:
      data.slug ||
      slugify(data.name, { lower: true, strict: true, trim: true }),
  };
});

export const updateStyleSchema = baseStyleShema.partial();

export type UpdateStylePayload = z.infer<typeof updateStyleSchema>;

export type StylesDto = z.infer<typeof styleSchema>;
