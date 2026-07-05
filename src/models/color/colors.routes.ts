import { Router } from "express";
import { ColorController } from "./colors.controller.js";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import { colorSchema, updateColorSchema } from "./schemas/color.schema.js";
import { paginationQuerySchema } from "../../lib/schemas/pagination.schema.js";
import { checkAuthMiddleware } from "../../middlewares/auth-middlerares/auth.middleware.js";
import { isAdminMiddleware } from "../../middlewares/auth-middlerares/is-admin.middleware.js";

const router = Router();

const colorControllers = new ColorController();
/**
 * @openapi
 * /api/colors:
 *   get:
 *     summary: Get all colors with pagination
 *     tags:
 *       - Colors
 *     parameters:
 *       - $ref: '#/components/parameters/PageQuery'
 *       - $ref: '#/components/parameters/LimitQuery'
 *     responses:
 *       '200':
 *         description: Successful response with a paginated list of colors
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ColorPaginationResponse'
 *       '400':
 *         description: Validation error for incoming data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   post:
 *     summary: Create a new color
 *     tags:
 *       - Colors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - hex
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the color
 *                 example: "White"
 *               slug:
 *                 type: string
 *                 description: slug of the color
 *                 example: "white"
 *               hex:
 *                 type: string
 *                 description: hex of the color
 *                 example: "fff"
 *     responses:
 *       '201':
 *         description: Color successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Color'
 *       '400':
 *         description: Validation error for incoming data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       '409':
 *         description: Color with this name or hex already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get(
  "/colors",
  validationRequestMiddleware(paginationQuerySchema, "query"),
  asyncHandler(colorControllers.getAllColors),
);
router.post(
  "/colors",
  checkAuthMiddleware,
  isAdminMiddleware,
  validationRequestMiddleware(colorSchema),
  asyncHandler(colorControllers.createColor),
);

/**
 * @openapi
 * /api/colors/{id}:
 *   get:
 *     summary: Get a Color by ID
 *     tags:
 *       - Colors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the color
 *     responses:
 *       '200':
 *         description: Color successfully found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Color'
 *       '404':
 *         description: Color not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   delete:
 *     summary: Delete a Color by ID
 *     tags:
 *       - Colors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the color to delete
 *     responses:
 *       '200':
 *         description: Color successfully deleted (returns the deleted object)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Color'
 *       '404':
 *         description: Color not found or does not exist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   patch:
 *     summary: Update a color by ID
 *     tags:
 *       - Colors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the color to update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the color
 *                 example: "Slate Gray"
 *               hex:
 *                 type: string
 *                 description: Hex of the color
 *                 example: "585b70"
 *               slug:
 *                 type: string
 *                 description: Slug of the color
 *                 example: "slate-gray"
 *     responses:
 *       '200':
 *         description: Color successfully updated (returns the update object)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Color'
 *       '400':
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       '404':
 *         description: Color not found or does not exist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/colors/:id", asyncHandler(colorControllers.getColorById));
router.delete(
  "/colors/:id",
  checkAuthMiddleware,
  isAdminMiddleware,
  asyncHandler(colorControllers.deleteColor),
);
router.patch(
  "/colors/:id",
  checkAuthMiddleware,
  isAdminMiddleware,
  validationRequestMiddleware(updateColorSchema),
  asyncHandler(colorControllers.updateColor),
);

export default router;
