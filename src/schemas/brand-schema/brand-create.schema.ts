import z from "zod";

export const CreateBrandSchema = z.object({
    brand: z.string(),
})

export type CreateBrandDto = z.infer<typeof CreateBrandSchema>