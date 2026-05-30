import z from "zod";

export const brandSchema = z.object({
    brand: z.string(),
})

export type BrandDto = z.infer<typeof brandSchema>