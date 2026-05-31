import type { Response, Request } from "express";
import { StylesServices } from "./styles.service.js";
import type { StylesDto } from "./schemas/style.schema.js";
import type { PaginationQueryDto } from "../../lib/schemas/pagination.schema.js";

export class StylesControllers {
  constructor(private stylesService: StylesServices = new StylesServices()) {}

  getStyles = async (req: Request, res: Response) => {
    const { page, limit } = req.query as unknown as PaginationQueryDto;
    const styles = await this.stylesService.getAllStyles(page, limit);
    res.status(200).json(styles);
  };

  createStyle = async (req: Request<{}, {}, StylesDto>, res: Response) => {
    const { name } = req.body;
    const newStyle = await this.stylesService.createStyle(name);
    res.status(201).json(newStyle);
  };

  getStyleById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const style = await this.stylesService.getStyleById(id);
    res.status(200).json(style);
  };

  deleteStyle = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const style = await this.stylesService.deleteStyle(id);
    res.status(200).json(style);
  };
}
