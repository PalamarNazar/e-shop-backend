import { ApiError } from "@/lib/utils/api-error.js";
import type { SizeDto } from "@/schemas/size-schema/size-create.schema.js";
import { SizesService } from "@/services/sizes.service.js";
import type { Request, Response } from "express";

export class SizesControllers {
  constructor(private sizesService: SizesService = new SizesService()) {}

  getAllSizes = async (_: Request, res: Response) => {
    const sizes = await this.sizesService.getAllSizes();
    res.status(200).json(sizes);
  };

  getSizeById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const size = await this.sizesService.getSizeById(id);

    if (!size) throw new ApiError(404, "Size Not Found");

    res.status(200).json(size);
  };

  createSize = async (req: Request, res: Response) => {
    const { size }: SizeDto = req.body;

    const newSize = await this.sizesService.createSize(size);
    res.status(201).json(newSize);
  };

  deleteSize = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const deletedSize = await this.sizesService.deleteSize(id);

    if (!deletedSize) throw new ApiError(404, "Size Not Found");
    res.status(200).json(deletedSize);
  };
}
