import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { UploadsController } from "@/controllers/uploads.controller.js";

const router = Router();

const uploadDir = path.resolve(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

const uploadsController = new UploadsController();

router.post(
  "/uploads/images",
  upload.array("images"),
  uploadsController.uploadImages,
);

export default router;
