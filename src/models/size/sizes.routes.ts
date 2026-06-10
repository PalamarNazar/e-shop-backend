import { Router } from "express";
import { SizesControllers } from "./size.controller.js";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import { sizeSchema, updateSizeSchema } from "./schemas/size.schema.js";
import { paginationQuerySchema } from "../../lib/schemas/pagination.schema.js";
import { checkAuthMiddleware } from "../../middlewares/auth-middlerares/auth.middleware.js";
import { isAdminMiddleware } from "../../middlewares/auth-middlerares/is-admin.middleware.js";

const router = Router();

const sizeControllers = new SizesControllers();
/**
 * @openapi
 * /api/sizes:
 *   get:
 *     summary: Get all sizes with pagination
 *     tags:
 *       - Sizes
 *     parameters:
 *       - $ref: '#/components/parameters/PageQuery'
 *       - $ref: '#/components/parameters/LimitQuery'
 *     responses:
 *       '200':
 *         description: Successful response with a paginated list of sizes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SizePaginationResponse'
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
 *     summary: Create a new size
 *     tags:
 *       - Sizes
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
 *                 description: Name of the size (e.g., XS, XL, M)
 *                 example: "XL"
 *               slug:
 *                 type: string
 *                 description: slug of the size (e.g., xs, xl, m)
 *                 example: "XL"
 *     responses:
 *       '201':
 *         description: Size successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Size'
 *       '400':
 *         description: Validation error for incoming data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       '409':
 *         description: Size with this name already exists
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
  "/sizes",
  validationRequestMiddleware(paginationQuerySchema, "query"),
  asyncHandler(sizeControllers.getAllSizes),
);
router.post(
  "/sizes",
  checkAuthMiddleware,
  isAdminMiddleware,
  validationRequestMiddleware(sizeSchema),
  asyncHandler(sizeControllers.createSize),
);

/**
 * @openapi
 * /api/sizes/{id}:
 *   get:
 *     summary: Get a size by ID
 *     tags:
 *       - Sizes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the size
 *     responses:
 *       '200':
 *         description: Size successfully found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Size'
 *       '404':
 *         description: Size not found
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
 *     summary: Delete a size by ID
 *     tags:
 *       - Sizes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the size to delete
 *     responses:
 *       '200':
 *         description: Size successfully deleted (returns the deleted object)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Size'
 *       '404':
 *         description: Size not found or does not exist
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
 *     summary: Update a size by ID
 *     tags:
 *       - Sizes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the size to update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the size (e.g., XS, XL, M)
 *                 example: "M"
 *               slug:
 *                 type: string
 *                 description: Slug of the size (e.g., xs, xl, m)
 *                 example: "m"
 *     responses:
 *       '200':
 *         description: Size successfully updated (returns the update object)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Size'
 *       '400':
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       '404':
 *         description: Size not found or does not exist
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
router.get("/sizes/:id", asyncHandler(sizeControllers.getSizeById));
router.delete(
  "/sizes/:id",
  checkAuthMiddleware,
  isAdminMiddleware,
  asyncHandler(sizeControllers.deleteSize),
);
router.patch(
  "/sizes/:id",
  checkAuthMiddleware,
  isAdminMiddleware,
  validationRequestMiddleware(updateSizeSchema),
  asyncHandler(sizeControllers.updateSize),
);

export default router;
