import { type Brand } from "@prisma/client";
import prisma from "../../lib/db/db.js";
import { PrismaErrorCodes } from "../../lib/errors/prisma-error-codes.js";
import { ApiError } from "../../lib/utils/api-error.js";
import type { ResponseWithPagination } from "../../lib/types/pagination.types.js";
import { handlePrismaError } from "../../lib/utils/handle-prisma-error.js";
import type { UpdateBrandPayload } from "./schemas/brand.schema.js";
import { BrandUpdateInputSchema } from "#generate";

const errorMapping = {
  [PrismaErrorCodes.RecordNotFound.code]: [404, "Brand not found"],
  [PrismaErrorCodes.UniqueViolation.code]: [409, "Dublicated brand"],
} as const;
export class BrandsService {
  async getAllBrands(
    page: number,
    limit: number,
  ): Promise<ResponseWithPagination<Brand[]>> {
    const skip = (page - 1) * limit;

    const [brands, totalItems] = await Promise.all([
      prisma.brand.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "asc" },
      }),
      prisma.brand.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: brands,
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

  async createBrand(name: string, slug: string): Promise<Brand> {
    try {
      const newBrand = await prisma.brand.create({ data: { name, slug } });
      return newBrand;
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }

  async updateBrand(id: string, payload: UpdateBrandPayload): Promise<Brand> {
    try {
      const brand = BrandUpdateInputSchema.parse(payload)
      const newBrand = await prisma.brand.update({
        where: { id },
        data: brand,
      });
      return newBrand;
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }

  async getBrandById(id: string): Promise<Brand> {
    const brand = await prisma.brand.findUnique({ where: { id } });

    if (!brand) throw new ApiError(404, "Brand not found");
    return brand;
  }

  async deleteBrand(id: string): Promise<Brand> {
    try {
      return await prisma.brand.delete({
        where: { id },
      });
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }
}
