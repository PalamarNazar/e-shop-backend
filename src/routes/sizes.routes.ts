import { SizesControllers } from "@/controllers/size.controller.js";
import { asyncHandler } from "@/lib/utils/asyncHandler.js";
import { validationRequestMiddleware } from "@/middlewares/validation/validationRequest.middleware.js";
import { CreateSizeSchema } from "@/schemas/size-schema/size-create.schema.js";
import { Router } from "express";

const router = Router();

const sizeControllers = new SizesControllers();

router.get("/sizes", asyncHandler(sizeControllers.getAllSizes));
router.post(
  "/sizes",
  validationRequestMiddleware(CreateSizeSchema),
  asyncHandler(sizeControllers.createSize),
);
router.get("/sizes/:id", asyncHandler(sizeControllers.getSizeById));
router.delete("/sizes/:id", asyncHandler(sizeControllers.deleteSize));
