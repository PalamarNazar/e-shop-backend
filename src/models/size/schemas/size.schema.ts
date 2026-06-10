import z from "zod";
import slugify from "slugify";

const baseSizeSchema = z.object({
  name: z.string().trim().min(1, "Size name must be at least 1 character long"),
  slug: z
    .string()
    .toLowerCase()
    .trim()
    .min(1, { message: "slug is too small" })
    .optional(),
});

export const sizeSchema = baseSizeSchema.transform((data) => {
  return {
    ...data,
    slug:
      data.slug ||
      slugify(data.name, { lower: true, strict: true, trim: true }),
  };
});

export const updateSizeSchema = baseSizeSchema.partial();

export type UpdateSizePayload = z.infer<typeof updateSizeSchema>;

export type SizeDto = z.infer<typeof sizeSchema>;
