import z from "zod";

export const sizeSchema = z.object({
    size: z.string(),
})

export type SizeDto = z.infer<typeof sizeSchema>