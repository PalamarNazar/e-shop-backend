import type { NextFunction, Request, Response } from "express";
import type { ZodTypeAny } from "zod";

type ValidationType = "body" | "query" | "params";

export const validationRequestMiddleware =
  (validationSchema: ZodTypeAny, type: ValidationType = "body") =>
  (req: Request, res: Response, next: NextFunction) => {
    const validate = validationSchema.safeParse(req[type]);

    if (!validate.success) {
      const formattedErrors = validate.error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return res.status(400).json({
        success: false,
        status: 400,
        message: "Validation failed",
        errors: formattedErrors,
      });
    }

    if (type === "body") {
      req.body = validate.data;
    } else {
      Object.defineProperty(req, type, {
        value: validate.data,
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }

    next();
  };
