import prisma from "../lib/db/db.js";
import { PrismaErrorCodes } from "../lib/errors/prisma-error-codes.js";
import { Prisma, type Size } from "@prisma/client";

export class SizesService {
  async getAllSizes(): Promise<Size[]> {
    return await prisma.size.findMany({ orderBy: { createdAt: "asc" } });
  }

  async createSize(name: string): Promise<Size> {
    return await prisma.size.create({ data: { name } });
  }

  async getSizeById(id: string): Promise<Size | null> {
    return await prisma.size.findUnique({ where: { id } });
  }

  async deleteSize(id: string): Promise<Size | null> {
    try {
      return await prisma.size.delete({
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
