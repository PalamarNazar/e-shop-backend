import type { CartItem } from "@prisma/client";
import prisma from "../../../lib/db/db.js";
import { ApiError } from "../../../lib/utils/api-error.js";
import { PrismaErrorCodes } from "../../../lib/errors/prisma-error-codes.js";
import { handlePrismaError } from "../../../lib/utils/handle-prisma-error.js";
import type { FullCartItem } from "../types/full-cart-item.type.js";

const errorMapping = {
  [PrismaErrorCodes.RecordNotFound.code]: [404, "Item not found"],
} as const;

export class ItemsCartService {
  getItems = async (cartId: string): Promise<FullCartItem[]> => {
    return await prisma.cartItem.findMany({
      where: { cartId },
      include: { product: true },
      orderBy: { createdAt: "desc" },
    });
  };

  getItemById = async (itemId: string): Promise<CartItem> => {
    const item = await prisma.cartItem.findUnique({ where: { id: itemId } });
    if (!item) throw new ApiError(404, "Cart item not found");
    return item;
  };

  updateItems = async (cartId: string, productId: string, quantity: number) => {
    return await prisma.cartItem.upsert({
      where: {
        cartId_productId: { cartId, productId },
      },
      create: {
        quantity,
        cartId,
        productId,
      },
      update: {
        quantity: { increment: quantity },
      },
      include: { product: true },
    });
  };

  deleteItem = async (itemId: string): Promise<CartItem> => {
    try {
      return await prisma.cartItem.delete({ where: { id: itemId } });
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  };
}
