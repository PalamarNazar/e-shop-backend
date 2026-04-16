import { BrandsControllers } from "@/controllers/brands.controller.js";
import { asyncHandler } from "@/lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "@/middlewares/validation/validationRequest.middleware.js";
import { CreateBrandSchema } from "@/schemas/brand-schema/brand-create.schema.js";
import { Router } from "express";

const router = Router();

const brandControllers = new BrandsControllers();

/**
 * @openapi
 * tags:
 *   name: Brands
 *   description: API для управления брендами
 */

/**
 * @openapi
 * /api/brands:
 *   get:
 *     summary: Получить список всех брендов
 *     tags: [Brands]
 *     responses:
 *       200:
 *         description: Список брендов успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brand'
 *       500:
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *
 *   post:
 *     summary: Создать новый бренд
 *     tags: [Brands]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             example: "Adidas"
 *     responses:
 *       201:
 *         description: Бренд успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       400:
 *         description: Ошибка валидации
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *       409:
 *         description: Бренд с таким именем уже существует
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
router.get("/brands", asyncHandler(brandControllers.getAllBrands));
router.post(
  "/brands",
  validationRequestMiddleware(CreateBrandSchema),
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
 *               $ref: '#/components/schemas/ErrorResponse'
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
