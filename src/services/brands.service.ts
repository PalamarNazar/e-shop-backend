import prisma from "@/lib/db/db.js";
import { PrismaErrorCodes } from "@/lib/errors/prisma-error-codes.js";
import { Prisma, type Brand } from "@prisma/client";

export class BrandsService {
  async getAllBrands(): Promise<Brand[]> {
    return await prisma.brand.findMany({ orderBy: { createdAt: "asc" } });
  }

  async createBrand(name: string): Promise<Brand> {
    return await prisma.brand.create({ data: { name } });
  }

  async getBrandById(id: string): Promise<Brand | null> {
    return await prisma.brand.findUnique({ where: { id } });
  }

  async deleteBrand(id: string): Promise<Brand | null> {
    try {
      return await prisma.brand.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaErrorCodes.RecordNotFound.code
      ) {
        return null;
      }

      throw error;
    }
  }
}
