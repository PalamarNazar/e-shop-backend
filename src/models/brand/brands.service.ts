import { Prisma, type Brand } from "@prisma/client";
import prisma from "../../lib/db/db.js";
import { PrismaErrorCodes } from "../../lib/errors/prisma-error-codes.js";
import { ApiError } from "../../lib/utils/api-error.js";
import type { ResponseWithPagination } from "../../lib/types/pagination.types.js";

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

  async createBrand(name: string): Promise<Brand> {
    try {
      const newBrand = await prisma.brand.create({ data: { name } });
      return newBrand;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaErrorCodes.UniqueViolation.code
      ) {
        throw new ApiError(409, `Brand with name "${name}" already exist`);
      }
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
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaErrorCodes.RecordNotFound.code
      ) {
        throw new ApiError(404, "Brand not exist");
      }

      throw error;
    }
  }
}
