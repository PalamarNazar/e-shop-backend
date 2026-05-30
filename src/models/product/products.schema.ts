import z from "zod";

export const productSchema = z.object({
  title: z.string().min(1, { message: "Product title is too short" }),
  description: z
    .string()
    .min(1, { message: "Product description is required" })
    .max(200),

  price: z.coerce
    .number()
    .min(0, { message: "Product price must be a positive number" }),
  discount: z.coerce
    .number()
    .min(0, { message: "Product discount must be a positive number" })
    .nullable(),

  brandId: z.uuid().optional(),

  variants: z
    .array(
      z.object({
        colorId: z.uuid(),

        images: z.array(z.url()).min(1, { message: "Choose minimum 1 image" }),

        sizes: z
          .array(
            z.object({
              sizeId: z.string().uuid(),
              stock: z.coerce
                .number()
                .min(0, { message: "Stock cannot be negative" }),
            }),
          )
          .min(1, { message: "Add at least one size" })
          .refine(
            (items) => {
              const ids = items.map((i) => i.sizeId);
              return new Set(ids).size === ids.length;
            },
            { message: "Duplicate sizes are not allowed in one variant" },
          ),
      }),
    )
    .min(1, { message: "At least one variant is required" }),

  styles: z.array(z.string()).min(1, { message: "At least one style is required" }),
  gender: z.enum(["man", "woman", "unisex"]),
});

export type ProductDto = z.infer<typeof productSchema>;
