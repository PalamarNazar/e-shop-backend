import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../../lib/utils/api-error.js";

export const isAdminMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      return next(new ApiError(401, "Unauthorized"));
    }

    if (!req.user.roles.includes("ADMIN")) {
      return next(new ApiError(403, "Access denied"));
    }

    return next();
  } catch (error) {
    return next(new ApiError(500, "Internal Server Error"));
  }
};
