import z from "zod";
import slugify from "slugify";

const baseBrandSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Brand name must be at least 1 character long" }),
  slug: z
    .string()
    .toLowerCase()
    .trim()
    .min(1, { message: "slug is too small" })
    .optional(),
});

export const brandSchema = baseBrandSchema.transform((data) => {
  return {
    ...data,
    slug:
      data.slug ||
      slugify(data.name, { lower: true, strict: true, trim: true }),
  };
});

export const updateBrandSchema = baseBrandSchema.partial();
export type UpdateBrandPayload = z.infer<typeof updateBrandSchema>;

export type BrandDto = z.infer<typeof brandSchema>;
