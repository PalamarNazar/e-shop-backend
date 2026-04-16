import { ProductsController } from "@/controllers/products.controller.js";
import { asyncHandler } from "@/lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "@/middlewares/validation/validationRequest.middleware.js";
import { createProductSchema } from "@/schemas/product-schema/products.schema.js";
import { Router } from "express";

const router = Router();

const productsController = new ProductsController();

router.get("/products", asyncHandler(productsController.getAllProducts));
router.get("/products/:id", asyncHandler(productsController.getProductById));
router.post("/products", validationRequestMiddleware(createProductSchema), asyncHandler(productsController.createProduct));
router.delete("/products/:id", asyncHandler(productsController.deleteProduct));

export default router;
