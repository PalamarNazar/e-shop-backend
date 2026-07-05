import z from "zod";

export const basicCartItemSchema = z.object({
  productId: z.string().min(1, { message: "Product id is too small" }),
});

export const cartItemSchemaWithQuantity = basicCartItemSchema.and(
  z.object({
    quantity: z.number().positive(),
  }),
);

export type CartItemRequestTypes = z.infer<typeof cartItemSchemaWithQuantity>;
export type CartItemRequestWithQuantityTypes = z.infer<typeof cartItemSchemaWithQuantity>;
