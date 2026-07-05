import type { Request, Response } from "express";
import { SizesService } from "./sizes.service.js";
import type { SizeDto, UpdateSizePayload } from "./schemas/size.schema.js";
import type { PaginationQueryDto } from "../../lib/schemas/pagination.schema.js";

export class SizesControllers {
  constructor(private sizesService: SizesService = new SizesService()) {}

  getAllSizes = async (req: Request, res: Response) => {
    const { limit, page } = req.query as unknown as PaginationQueryDto;
    const sizes = await this.sizesService.getAllSizes(page, limit);
    res.status(200).json(sizes);
  };

  getSizeById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const size = await this.sizesService.getSizeById(id);
    res.status(200).json(size);
  };

  createSize = async (req: Request<{}, {}, SizeDto>, res: Response) => {
    const { name, slug } = req.body;
    const newSize = await this.sizesService.createSize(name, slug);
    res.status(201).json(newSize);
  };

  deleteSize = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const deletedSize = await this.sizesService.deleteSize(id);
    res.status(200).json(deletedSize);
  };
  updateSize = async (
    req: Request<{ id: string }, {}, UpdateSizePayload>,
    res: Response,
  ) => {
    const { id } = req.params;
    const payload = req.body;
    const updatedSize = await this.sizesService.updateSize(id, payload);
    res.status(200).json(updatedSize);
  };
}
