import { BrandsControllers } from "./brands.controller.js";
import { brandSchema } from "./schemas/brand.schema.js";
import { Router } from "express";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import { paginationQuerySchema } from "../../lib/schemas/pagination.schema.js";

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
 *             example:
 *               name: "Adidas"
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
  validationRequestMiddleware(brandSchema),
  asyncHandler(brandControllers.createBrand),
);

/**
 * @openapi
 * /api/brands/{id}:
 *   get:
 *     summary: Получить бренд по ID
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: ID бренда
 *     responses:
 *       200:
 *         description: Бренд найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       404:
 *         description: Бренд не найден
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
 *     summary: Удалить бренд
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: ID бренда
 *     responses:
 *       200:
 *         description: Бренд успешно удален
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       404:
 *         description: Бренд не найден
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
router.delete("/brands/:id", asyncHandler(brandControllers.deleteBrand));

export default router;
