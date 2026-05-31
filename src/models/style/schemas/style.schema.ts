import z from "zod";

export const styleSchema = z.object({
    name: z.string().min(1, { message: 'No Validate Style'})
})

export type StylesDto = z.infer<typeof styleSchema>