import z from "zod";
import { paginationQuerySchema } from "../../../lib/schemas/pagination.schema.js";

export const productQueriesSchema = paginationQuerySchema.merge(
  z.object({
    fullInfo: z
      .preprocess((val) => {
        if (val === "true") return true;
        if (val === "false") return false;
        return val;
      }, z.boolean())
      .default(false),
  }),
);

export type ProductQueries = z.infer<typeof productQueriesSchema>;
