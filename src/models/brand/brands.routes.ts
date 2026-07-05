import { BrandsControllers } from "./brands.controller.js";
import { brandSchema, updateBrandSchema } from "./schemas/brand.schema.js";
import { Router } from "express";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import { paginationQuerySchema } from "../../lib/schemas/pagination.schema.js";
import { checkAuthMiddleware } from "../../middlewares/auth-middlerares/auth.middleware.js";
import { isAdminMiddleware } from "../../middlewares/auth-middlerares/is-admin.middleware.js";

const router = Router();

const brandControllers = new BrandsControllers();

/**
 * @openapi
 * tags:
 *   name: Brands
 *   description: API for menegament brands
 */

/**
 * @openapi
 * /api/brands:
 *   get:
 *     summary: Get list all brands with pagination
 *     tags:
 *       - Brands
 *     parameters:
 *       - $ref: '#/components/parameters/PageQuery'
 *       - $ref: '#/components/parameters/LimitQuery'
 *     responses:
 *       '200':
 *         description: Success response with brands list and meta data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BrandPaginationResponse'
 *       '400':
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       '500':
 *         description: Inside server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   post:
 *     summary: Create new brand
 *     tags: [Brands]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Brand name
 *               slug:
 *                 type: string
 *                 description: Brand slug
 *             example:
 *               name: "Adidas"
 *               slug: "adidas"
 *     responses:
 *       201:
 *         description: Brand created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       400:
 *         description: Validation error
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ValidationErrorResponse'
 *       409:
 *         description: Brand with this name already exist
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 */
router.get(
  "/brands",
  validationRequestMiddleware(paginationQuerySchema, "query"),
  asyncHandler(brandControllers.getAllBrands),
);
router.post(
  "/brands",
  checkAuthMiddleware,
  isAdminMiddleware,
  validationRequestMiddleware(brandSchema),
  asyncHandler(brandControllers.createBrand),
);

/**
 * @openapi
 * /api/brands/{id}:
 *   get:
 *     summary: Get brand
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Brand ID
 *     responses:
 *       200:
 *         description: Brand exist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       404:
 *         description: Brand not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   delete:
 *     summary: Delete brand
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Brand ID
 *     responses:
 *       200:
 *         description: Brand deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       404:
 *         description: Brand not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   patch:
 *     summary: Update brand
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Brand ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Brand name
 *                 example: "Nike"
 *               slug:
 *                 type: string
 *                 description: Brand slug
 *                 example: "nike"
 *     responses:
 *       200:
 *         description: Brand updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       409:
 *         description: Dublicated brand name
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Brand not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/brands/:id", asyncHandler(brandControllers.getBrandById));
router.delete(
  "/brands/:id",
  checkAuthMiddleware,
  isAdminMiddleware,
  asyncHandler(brandControllers.deleteBrand),
);
router.patch(
  "/brands/:id",
  checkAuthMiddleware,
  isAdminMiddleware,
  validationRequestMiddleware(updateBrandSchema),
  asyncHandler(brandControllers.updateBrand),
);

export default router;
