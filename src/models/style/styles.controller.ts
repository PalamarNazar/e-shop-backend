
import type { Response, Request } from "express";
import { StylesServices } from "./styles.service.js";
import type { StylesDto } from "./style.schema.js";
import { ApiError } from "../../lib/utils/api-error.js";

export class StylesControllers {
  constructor(private stylesService: StylesServices = new StylesServices()) {}

  getStyles = async (_: Request, res: Response) => {
    const styles = await this.stylesService.getAllStyles();
    res.status(200).json(styles);
  };

  createStyle = async (req: Request, res: Response) => {
    const { name }: StylesDto = req.body;

    try {
      const newStyle = await this.stylesService.createStyle(name);
      res.status(201).json(newStyle);
    } catch (error) {
      if (error instanceof Error && error.message === "DuplicateName") {
        return res
          .status(409)
          .json({ message: "Стиль с таким названием уже существует" });
      }

      throw error;
    }
  };

  getStyleById = async (req: Request<{ id: string }>, res: Response) => {
    const style = await this.stylesService.getStyleById(req.params.id);
    if (!style) {
      return res.status(404).json({ message: "Style Not Found" });
    }
    res.status(200).json(style);
  };

  deleteStyle = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const style = await this.stylesService.deleteStyle(id);

    if (!style) throw new ApiError(404, "Style Not Found");

    res.status(200).json(style);
  };
}
