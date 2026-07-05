import { Prisma, type Color } from "@prisma/client";
import prisma from "../../lib/db/db.js";
import type { ColorDto, UpdateColorPayload } from "./schemas/color.schema.js";
import { PrismaErrorCodes } from "../../lib/errors/prisma-error-codes.js";
import { ApiError } from "../../lib/utils/api-error.js";
import { handlePrismaError } from "../../lib/utils/handle-prisma-error.js";
import type { ResponseWithPagination } from "../../lib/types/pagination.types.js";
import { ColorUpdateInputSchema } from "@generate";

const errorMapping = {
  [PrismaErrorCodes.RecordNotFound.code]: [404, "Color not found"],
  [PrismaErrorCodes.UniqueViolation.code]: [409, "Dublicated color"],
} as const;

export class ColorsServices {
  async getAllColors(
    page: number,
    limit: number,
  ): Promise<ResponseWithPagination<Color[]>> {
    const skip = (page - 1) * limit;

    const [colors, totalItems] = await Promise.all([
      prisma.color.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "asc" },
      }),
      prisma.color.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: colors,
      meta: {
        totalItems,
        totalPages,
        currentPage: page,
        limit,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  async createColor(color: ColorDto): Promise<Color> {
    try {
      const { hex, name, slug } = color;
      return await prisma.color.create({ data: { hex, name, slug } });
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }

  async updateColor(id: string, payload: UpdateColorPayload): Promise<Color> {
    try {
      const color = ColorUpdateInputSchema.parse(payload)
      return await prisma.color.update({ where: { id }, data: color });
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }

  async getColorById(id: string): Promise<Color> {
    const color = await prisma.color.findUnique({ where: { id } });
    if (!color) throw new ApiError(404, "Color not found");
    return color;
  }

  async deleteColor(id: string): Promise<Color> {
    try {
      return await prisma.color.delete({ where: { id } });
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }
}
