import { ApiError } from "@/lib/utils/api-error.js";
import type { CreateBrandDto } from "@/schemas/brand-schema/brand-create.schema.js";
import { BrandsService } from "@/services/brands.service.js";
import type { Request, Response } from "express";

export class BrandsControllers {
  constructor(private brandsService: BrandsService = new BrandsService()) {}

  getAllBrands = async (_: Request, res: Response) => {
    const brands = await this.brandsService.getAllBrands();
    res.status(200).json(brands);
  };

  getBrandById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const brand = await this.brandsService.getBrandById(id);

    if (!brand) throw new ApiError(404, "Brand Not Found");

    res.status(200).json(brand);
  };

  createBrand = async (req: Request, res: Response) => {
    const { brand }: CreateBrandDto = req.body;

    const newBrand = await this.brandsService.createBrand(brand);
    res.status(201).json(newBrand);
  };

  deleteBrand = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const deletedBrand = await this.brandsService.deleteBrand(id);

    if (!deletedBrand) throw new ApiError(404, "Brand Not Found");
    res.status(200).json(deletedBrand);
  };
}
