
import { Router } from "express";
import { SizesControllers } from "./size.controller.js";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "../../middlewares/validation/validationRequest.middleware.js";
import { sizeSchema } from "./size.schema.js";

const router = Router();

const sizeControllers = new SizesControllers();

router.get("/sizes", asyncHandler(sizeControllers.getAllSizes));
router.post(
  "/sizes",
  validationRequestMiddleware(sizeSchema),
  asyncHandler(sizeControllers.createSize),
);
router.get("/sizes/:id", asyncHandler(sizeControllers.getSizeById));
router.delete("/sizes/:id", asyncHandler(sizeControllers.deleteSize));
