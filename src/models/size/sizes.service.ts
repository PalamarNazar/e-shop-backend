import { type Size } from "@prisma/client";
import prisma from "../../lib/db/db.js";
import { PrismaErrorCodes } from "../../lib/errors/prisma-error-codes.js";
import type { ResponseWithPagination } from "../../lib/types/pagination.types.js";
import { ApiError } from "../../lib/utils/api-error.js";
import { handlePrismaError } from "../../lib/utils/handle-prisma-error.js";
import type { UpdateSizePayload } from "./schemas/size.schema.js";
import { SizeUpdateInputSchema } from "#generate";

const errorMapping = {
  [PrismaErrorCodes.RecordNotFound.code]: [404, "Size not found"],
  [PrismaErrorCodes.UniqueViolation.code]: [409, "Dublicated size"],
} as const

export class SizesService {
  async getAllSizes(
    page: number,
    limit: number,
  ): Promise<ResponseWithPagination<Size[]>> {
    const skip = (page - 1) * limit;

    const [sizes, totalItems] = await Promise.all([
      prisma.size.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "asc" },
      }),
      prisma.size.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: sizes,
      meta: {
        currentPage: page,
        limit,
        totalItems,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  async createSize(name: string, slug: string): Promise<Size> {
    try {
      return await prisma.size.create({ data: { name, slug } });
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }

  async updateSize(id: string, payload: UpdateSizePayload): Promise<Size> {
    try {
      const size = SizeUpdateInputSchema.parse(payload)
      return await prisma.size.update({ where: { id }, data: size });
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }

  async getSizeById(id: string): Promise<Size> {
    const size = await prisma.size.findUnique({ where: { id } });
    if (!size) throw new ApiError(404, "Size not found");
    return size;
  }

  async deleteSize(id: string): Promise<Size> {
    try {
      return await prisma.size.delete({
        where: { id },
      });
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }
}
