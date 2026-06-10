import type { Request, Response } from "express";
import { ColorsServices } from "./colors.service.js";
import type { ColorDto, UpdateColorPayload } from "./schemas/color.schema.js";
import type { PaginationQueryDto } from "../../lib/schemas/pagination.schema.js";

export class ColorController {
  constructor(private colorsServices: ColorsServices = new ColorsServices()) {}

  getAllColors = async (req: Request, res: Response) => {
    const { page, limit } = req.query as unknown as PaginationQueryDto;
    const colors = await this.colorsServices.getAllColors(page, limit);
    res.status(200).json(colors);
  };

  getColorById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const color = await this.colorsServices.getColorById(id);
    res.status(200).json(color);
  };

  createColor = async (req: Request<{}, {}, ColorDto>, res: Response) => {
    const color = req.body;
    const newColor = await this.colorsServices.createColor(color);
    res.status(201).json(newColor);
  };

  deleteColor = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const color = await this.colorsServices.deleteColor(id);
    res.status(200).json(color);
  };

  updateColor = async (req: Request<{ id: string }, {}, UpdateColorPayload>, res: Response) => {
    const { id } = req.params;
    const payload = req.body
    const updatedColor = await this.colorsServices.updateColor(id, payload);
    res.status(200).json(updatedColor);
  };
}
