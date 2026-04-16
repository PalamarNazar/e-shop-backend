import z from "zod";

export const CreateSizeSchema = z.object({
    size: z.string(),
})

export type SizeDto = z.infer<typeof CreateSizeSchema>