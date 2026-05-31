import { Router } from "express";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import { styleSchema } from "./schemas/style.schema.js";
import { StylesControllers } from "./styles.controller.js";
import { paginationQuerySchema } from "../../lib/schemas/pagination.schema.js";

const router = Router();

const stylesControllers = new StylesControllers();

/**
 * @openapi
 * /api/styles:
 *   get:
 *     summary: Get all Styles
 *     tags: [Styles]
 *     parameters:
 *       - $ref: '#/components/parameters/PageQuery'
 *       - $ref: '#/components/parameters/LimitQuery'
 *     responses:
 *       200:
 *         description: All styles
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StylesPaginationResponse'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   post:
 *     summary: Create style
 *     tags: [Styles]
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
 *                 description: Style name
 *             example:
 *               name: "Vintage"
 *     responses:
 *       201:
 *         description: Product created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Style'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       409:
 *         description: Duplicated style
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 * /api/styles/{id}:
 *   get:
 *     summary: Get style by id
 *     tags: [Styles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique id
 *     responses:
 *       200:
 *         description: Style by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Style'
 *       500:
 *         description: Server error
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Style not found
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   delete:
 *     summary: Delete style by id
 *     tags: [Styles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique id
 *     responses:
 *       200:
 *         description: deleted style
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Style'
 *       500:
 *         description: Server error
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Style not found
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 */
router.get(
  "/styles",
  validationRequestMiddleware(paginationQuerySchema, "query"),
  asyncHandler(stylesControllers.getStyles),
);

router.get("/styles/:id", asyncHandler(stylesControllers.getStyleById));

router.post(
  "/styles",
  validationRequestMiddleware(styleSchema),
  asyncHandler(stylesControllers.createStyle),
);

router.delete("/styles/:id", asyncHandler(stylesControllers.deleteStyle));

export default router;
