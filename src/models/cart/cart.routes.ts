import { Router } from "express";
import { CartController } from "./cart.controller.js";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { checkAuthMiddleware } from "../../middlewares/auth-middlerares/auth.middleware.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import {
  cartItemSchemaWithQuantity,
  basicCartItemSchema,
} from "./schemas/cart-item.schema.js";
import z from "zod";

const router = Router();
const cartController = new CartController();

router.get(
  "/cart",
  checkAuthMiddleware,
  asyncHandler(cartController.getUserCart),
);
router.delete(
  "/cart",
  checkAuthMiddleware,
  asyncHandler(cartController.clearCart),
);
router.post(
  "/cart/items",
  checkAuthMiddleware,
  validationRequestMiddleware(cartItemSchemaWithQuantity),
  asyncHandler(cartController.addProductToCart),
);
router.post(
  "/cart/merge",
  checkAuthMiddleware,
  validationRequestMiddleware(z.array(cartItemSchemaWithQuantity)),
  asyncHandler(cartController.mergeCarts),
);
router.delete(
  "/cart/items",
  checkAuthMiddleware,
  validationRequestMiddleware(basicCartItemSchema),
  asyncHandler(cartController.removeFromCart),
);

export default router;
