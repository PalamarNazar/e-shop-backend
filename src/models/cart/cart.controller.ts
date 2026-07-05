import type { CartItemRequestTypes, CartItemRequestWithQuantityTypes } from "./schemas/cart-item.schema.js";
import { CartService } from "./services/cart.service.js";
import type { Request, Response } from "express";

export class CartController {
  constructor(private cartService: CartService = new CartService()) {}

  getUserCart = async (req: Request, res: Response) => {
    const id = req.user.id;
    const cart = await this.cartService.getUserCart(id);
    res.status(200).json(cart);
  };
  addProductToCart = async (
    req: Request<{}, {}, CartItemRequestWithQuantityTypes>,
    res: Response,
  ) => {
    const id = req.user.id;
    const { productId, quantity } = req.body;
    const updatedCart = await this.cartService.addProductToCart(
      id,
      productId,
      quantity,
    );
    res.status(200).json(updatedCart);
  };
  removeFromCart = async (
    req: Request<{}, {}, CartItemRequestTypes>,
    res: Response,
  ) => {
    const id = req.user.id;
    const { productId } = req.body;
    const updatedCart = await this.cartService.removeFromCart(id, productId);
    res.status(200).json(updatedCart);
  };
  mergeCarts = async (
    req: Request<{}, {}, CartItemRequestWithQuantityTypes[]>,
    res: Response,
  ) => {
    const id = req.user.id;
    const guestItems = req.body;
    const mergedCart = await this.cartService.mergeCarts(id, guestItems);
    res.status(200).json(mergedCart);
  };
  clearCart = async (req: Request, res: Response) => {
    const id = req.user.id;
    await this.cartService.clearCart(id);
    res.status(200);
  };
}
