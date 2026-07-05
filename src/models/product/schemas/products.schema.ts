import z from "zod";

const genderEnum = z.enum(["MAN", "WOMAN", "UNISEX"], {
  message: "Invalid gender type",
});

const basicProductSchema = z.object({
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

  rating: z.number().positive({ message: "Rating must be positive"}),

  brandId: z.string().min(1, { message: "Id is too small" }),

  variants: z
    .array(
      z.object({
        colorId: z.string().min(1, { message: "Id is too small" }),

        images: z.array(z.url()).min(1, { message: "Choose minimum 1 image" }),

        sizes: z
          .array(
            z.object({
              sizeId: z.string().min(1, { message: "Id is too small" }),
              stock: z.coerce
                .number()
                .min(0, { message: "Stock cannot be negative" }),
            }),
          )
          .min(1, { message: "Add at least one size" })
          .refine(
            (items) => {
              const sizes = items.map((size) => size.sizeId);
              return new Set(sizes).size === sizes.length;
            },
            { message: "Duplicate sizes are not allowed in one variant" },
          ),
      }),
    )
    .min(1, { message: "At least one variant is required" }),

  styles: z
    .array(z.string().min(1, { message: "Id is too small" }))
    .min(1, { message: "At least one style is required" })
    .refine(
      (items) => {
        return new Set(items).size === items.length;
      },
      { message: "Duplicate styles are not allowed" },
    ),
  gender: genderEnum,
});

export const productSchema = basicProductSchema

export const updateProductSchema = basicProductSchema.partial()

export type UpdateProductTypes = z.infer<typeof updateProductSchema>

export type ProductTypes = z.infer<typeof productSchema>;
