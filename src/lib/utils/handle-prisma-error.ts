import { Prisma } from "@prisma/client";
import { ApiError } from "./api-error.js";
import type { ErrorResolver } from "../types/prisma-errors-meta.types.js";

interface HandlrePrismaErrorOptions {
  customMessage?: string;
}

type MappingValue = readonly [number, string] | ErrorResolver;

export const handlePrismaError = <T extends Record<string, MappingValue>>(
  error: unknown,
  errorMapping: T,
  options?: HandlrePrismaErrorOptions,
): void => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const code = error.code as keyof T;

    if (errorMapping[code]) {
      const mapper = errorMapping[code];

      const [status, message] =
        typeof mapper === "function" ? mapper(error.meta) : mapper;

      if (!options?.customMessage) throw new ApiError(status, message);
      throw new ApiError(status, options.customMessage);
    }
  }
};
