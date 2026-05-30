
import { Router } from "express";
import { ProductsController } from "./products.controller.js";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import { productSchema } from "./products.schema.js";

const router = Router();

const productsController = new ProductsController();

router.get("/products", asyncHandler(productsController.getAllProducts));
router.get("/products/:id", asyncHandler(productsController.getProductById));
router.post(
  "/products",
  validationRequestMiddleware(productSchema),
  asyncHandler(productsController.createProduct),
);
router.delete("/products/:id", asyncHandler(productsController.deleteProduct));

export default router;
