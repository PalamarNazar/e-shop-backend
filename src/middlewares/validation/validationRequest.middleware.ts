import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";

export const validationRequestMiddleware =
  (validationSchema: ZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const validate = validationSchema.safeParse(req.body);

    if (!validate.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validate.error.flatten().fieldErrors,
      });
    }

    req.body = validate.data;
    next();
  };
