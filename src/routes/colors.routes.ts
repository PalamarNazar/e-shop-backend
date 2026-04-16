import { ColorController } from "@/controllers/colors.controller.js";
import { asyncHandler } from "@/lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "@/middlewares/validation/validationRequest.middleware.js";
import { colorSchema } from "@/schemas/color-schema/color.schema.js";
import { Router } from "express";

const router = Router();

const colorControllers = new ColorController();

router.get("/colors", asyncHandler(colorControllers.getAllColors));
router.get("/colors/:id", asyncHandler(colorControllers.getColorById));
router.post(
  "/colors",
  validationRequestMiddleware(colorSchema),
  asyncHandler(colorControllers.createColor),
);
router.delete("/colors/:id", asyncHandler(colorControllers.deleteColor));

export default router;
