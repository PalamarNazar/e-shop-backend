import prisma from "@/lib/db/db.js";
import { PrismaErrorCodes } from "@/lib/errors/prisma-error-codes.js";
import { Prisma, type Style } from "@prisma/client";

export class StylesServices {
  async getAllStyles(): Promise<Style[]> {
    return await prisma.style.findMany({ orderBy: { createdAt: "asc" } });
  }

  async createStyle(name: string): Promise<Style> {
    return await prisma.style.create({ data: { name } });
  }

  async getStyleById(id: string): Promise<Style | null> {
    return await prisma.style.findUnique({ where: { id } });
  }

  async deleteStyle(id: string): Promise<Style | null> {
    try {
      return await prisma.style.delete({ where: { id } });
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
