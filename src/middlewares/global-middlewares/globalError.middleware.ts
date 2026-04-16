import { Prisma } from "@prisma/client";
import type { Request, Response, NextFunction } from "express";

interface SpecialError {
  status: number;
  message: string;
}

const ERROR_MESSAGES: Record<string, SpecialError> = {
  P2002: { status: 409, message: "Resource with this name already exists" },
  P2025: { status: 404, message: "Not Found" },
} as const;

export const globalErrorMiddleware = (
  err: any,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  let status: number = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const knownError = ERROR_MESSAGES[err.code];

    if (knownError) {
      status = knownError.status;
      message = knownError.message;
    } else {
      status = 400;
      message = `Database error: ${err.code}`;
    }
  }

  res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
};
