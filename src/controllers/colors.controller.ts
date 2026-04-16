import { ApiError } from "../lib/utils/api-error.js";
import type { ColorDto } from "../schemas/color-schema/color.schema.js";
import { ColorsServices } from "../services/colors.service.js";
import type { Request, Response } from "express";

export class ColorController {
  constructor(private colorsServices: ColorsServices = new ColorsServices()) {}

  getAllColors = async (req: Request, res: Response) => {
    const colors = await this.colorsServices.getAllColors();
    res.status(200).json(colors);
  };

  getColorById = async (req: Request<{ id: string }>, res: Response) => {
    const color = await this.colorsServices.getColorById(req.params.id);

    if (!color) throw new ApiError(404, "Color Not Found");

    res.status(200).json(color);
  };

  createColor = async (req: Request<null, null, ColorDto>, res: Response) => {
    const color = req.body;
    const newColor = await this.colorsServices.createColor(color);
    res.status(201).json(newColor);
  };
  deleteColor = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const color = await this.colorsServices.deleteColor(id);

    if (!color) throw new ApiError(404, "Color Not Found");

    res.status(200).json(color);
  };
}
