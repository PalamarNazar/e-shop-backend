import { Router } from "express";
import { ProductsController } from "./products.controller.js";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import { productSchema, updateProductSchema } from "./schemas/products.schema.js";
import { productQueriesSchema } from "./schemas/product-queries.schema.js";
import { checkAuthMiddleware } from "../../middlewares/auth-middlerares/auth.middleware.js";
import { isAdminMiddleware } from "../../middlewares/auth-middlerares/is-admin.middleware.js";

const router = Router();

const productsController = new ProductsController();

router.get(
  "/products",
  validationRequestMiddleware(productQueriesSchema, "query"),
  asyncHandler(productsController.getAllProducts),
);
router.get("/products/:id", asyncHandler(productsController.getProductById));
router.post(
  "/products",
  checkAuthMiddleware,
  isAdminMiddleware,
  validationRequestMiddleware(productSchema),
  asyncHandler(productsController.createProduct),
);
router.delete(
  "/products/:id",
  checkAuthMiddleware,
  isAdminMiddleware,
  asyncHandler(productsController.deleteProduct),
);
router.patch(
  "/products/:id",
  checkAuthMiddleware,
  isAdminMiddleware,
  validationRequestMiddleware(updateProductSchema),
  asyncHandler(productsController.updateProduct),
);

export default router;
