import z from "zod";

export const brandSchema = z.object({
    name: z.string().trim().min(1, { message: "Brand name must be at least 1 character long" }),
})

export type BrandDto = z.infer<typeof brandSchema>