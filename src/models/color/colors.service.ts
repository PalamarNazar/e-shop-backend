
import { Prisma, type Color } from "@prisma/client";
import prisma from "../../lib/db/db.js";
import type { ColorDto } from "./color.schema.js";
import { PrismaErrorCodes } from "../../lib/errors/prisma-error-codes.js";

export class ColorsServices {
  async getAllColors(): Promise<Color[]> {
    return await prisma.color.findMany({ orderBy: { createdAt: "asc" } });
  }

  async createColor(data: ColorDto): Promise<Color> {
    return await prisma.color.create({ data });
  }

  async getColorById(id: string): Promise<Color | null> {
    return await prisma.color.findUnique({ where: { id } });
  }

  async deleteColor(id: string): Promise<Color | null> {
    try {
      return await prisma.color.delete({ where: { id } });
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
