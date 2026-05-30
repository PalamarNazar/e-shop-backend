import type { Request, Response, NextFunction } from "express";
import { authSchema } from "../schemas/auth.schema.js";

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const requestData = req.body;

  const validation = authSchema.safeParse(requestData);

  if (validation.error) {
    return res.status(400).json({ 
      success: false,
      message: "Validation failed",
      errors: validation.error.issues
    });
  }

  req.body = validation.data;

  next()
};
