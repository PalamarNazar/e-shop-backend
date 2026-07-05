import { ItemsCartService } from "./item-cart.service.js";
import type { FullCartItem } from "../types/full-cart-item.type.js";
import type { CartResponse } from "../types/item-response.type.js";
import prisma from "../../../lib/db/db.js";
import { ApiError } from "../../../lib/utils/api-error.js";

export class CartService {
  constructor(
    private cartItemsService: ItemsCartService = new ItemsCartService(),
  ) {}

  // end
  private formatCartResponse(
    cartId: string,
    items: FullCartItem[],
  ): CartResponse {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0,
    );

    return {
      cartId,
      items,
      totalQuantity,
      totalPrice,
    };
  }

  // end
  private async getCartId(userId: string): Promise<string> {
    const cart = await prisma.userCart.findUnique({
      where: { userId },
      select: { id: true },
    });
    if (!cart) throw new ApiError(404, "Cart not found");

    return cart.id;
  }

  // end
  getUserCart = async (userId: string): Promise<CartResponse> => {
    const cartId = await this.getCartId(userId);
    const items = await this.cartItemsService.getItems(cartId);
    return this.formatCartResponse(cartId, items);
  };

  // end
  addProductToCart = async (
    userId: string,
    productId: string,
    quantity: number,
  ): Promise<CartResponse> => {
    const cartId = await this.getCartId(userId);
    await this.cartItemsService.updateItems(cartId, productId, quantity);
    const items = await this.cartItemsService.getItems(cartId);
    return this.formatCartResponse(cartId, items);
  };

  removeFromCart = async (
    userId: string,
    itemId: string,
  ): Promise<CartResponse> => {
    await this.cartItemsService.deleteItem(itemId);
    return await this.getUserCart(userId);
  };

  // end
  mergeCarts = async (
    userId: string,
    guestItems: { productId: string; quantity: number }[],
  ) => {
    const cartId = await this.getCartId(userId);
    await Promise.all(
      guestItems.map(item => 
        this.cartItemsService.updateItems(cartId, item.productId, item.quantity)
      )
    );
    const items = await this.cartItemsService.getItems(cartId);
    return this.formatCartResponse(cartId, items);
  };

  // end
  clearCart = async (userId: string): Promise<void> => {
    const cartId = await this.getCartId(userId);
    await prisma.cartItem.deleteMany({ where: { cartId } });
  };
}
