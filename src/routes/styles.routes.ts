import { StylesControllers } from "@/controllers/styles.controller.js";
import { asyncHandler } from "@/lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "@/middlewares/validation/validationRequest.middleware.js";
import { createStyleSchema } from "@/schemas/styles-schema/style-create.schema.js";
import { Router } from "express";

const router = Router();

const stylesControllers = new StylesControllers();

//  vynesti povtoriauszyjsia code v lib

/**
 * @openapi
 * /api/styles:
 *   get:
 *     summary: Get all Styles
 *     tags: [Styles]
 *     responses:
 *       200:
 *         description: All styles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Style'
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
 *             required: [name]
 *             example: "Vintage"
 *     responses:
 *       201:
 *         description: Product created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Style'
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
router.get("/styles", asyncHandler(stylesControllers.getStyles));

router.get("/styles/:id", asyncHandler(stylesControllers.getStyleById));

router.post(
  "/styles",
  validationRequestMiddleware(createStyleSchema),
  asyncHandler(stylesControllers.createStyle),
);

router.delete("/styles/:id", asyncHandler(stylesControllers.deleteStyle));

export default router;
