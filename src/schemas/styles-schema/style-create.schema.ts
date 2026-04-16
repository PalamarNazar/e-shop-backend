import z from "zod";

export const createStyleSchema = z.object({
    name: z.string().min(1, { message: 'No Validate Style'})
})

export type CreateStylesDto = z.infer<typeof createStyleSchema>