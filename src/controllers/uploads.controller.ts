import { ApiError } from "../lib/utils/api-error.js";
import { UploadsServices } from "../services/uploads.service.js";
import type { Request, Response } from "express";

export class UploadsController {
  constructor(private uploadsService = new UploadsServices()) {}

  uploadImages = async (req: Request, res: Response) => {
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0)
      throw new ApiError(404, "Files Not Found");

    const filenames = files.map((f) => f.filename);
    const savedImages = await this.uploadsService.saveImages(filenames);

    res.status(201).json(savedImages);
  };
}
