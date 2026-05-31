import { Prisma, type Style } from "@prisma/client";
import prisma from "../../lib/db/db.js";
import { PrismaErrorCodes } from "../../lib/errors/prisma-error-codes.js";
import { ApiError } from "../../lib/utils/api-error.js";
import type { ResponseWithPagination } from "../../lib/types/pagination.types.js";

export class StylesServices {
  async getAllStyles(
    page: number,
    limit: number,
  ): Promise<ResponseWithPagination<Style[]>> {
    const skip = (page - 1) * limit;

    const [styles, totalItems] = await Promise.all([
      prisma.style.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "asc" },
      }),
      prisma.style.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: styles,
      meta: {
        currentPage: page,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        limit,
        totalItems,
        totalPages,
      },
    };
  }

  async createStyle(name: string): Promise<Style> {
    try {
      const newStyle = await prisma.style.create({ data: { name } });
      return newStyle;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaErrorCodes.UniqueViolation.code
      ) {
        throw new ApiError(409, `Style "${name}" already exist`);
      }
      throw error;
    }
  }

  async getStyleById(id: string): Promise<Style> {
    const style = await prisma.style.findUnique({ where: { id } });

    if (!style) throw new ApiError(404, "Style not found");
    return style;
  }

  async deleteStyle(id: string): Promise<Style> {
    try {
      return await prisma.style.delete({ where: { id } });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaErrorCodes.RecordNotFound.code
      ) {
        throw new ApiError(404, "Style not exist");
      }

      throw error;
    }
  }
}
