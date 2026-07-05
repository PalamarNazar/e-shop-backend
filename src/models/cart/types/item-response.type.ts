import type { FullCartItem } from "./full-cart-item.type.js";

export interface CartResponse {
  cartId: string;
  items: FullCartItem[];
  totalQuantity: number;
  totalPrice: number;
}