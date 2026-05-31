import type { Request, Response } from "express";
import { BrandsService } from "./brands.service.js";
import type { BrandDto } from "./schemas/brand.schema.js";
import type { PaginationQuery } from "../../lib/types/pagination.types.js";
import type { PaginationQueryDto } from "../../lib/schemas/pagination.schema.js";

export class BrandsControllers {
  constructor(private brandsService: BrandsService = new BrandsService()) {}

  getAllBrands = async (req: Request, res: Response) => {
    const { page, limit } = req.query as unknown as PaginationQueryDto
    const brands = await this.brandsService.getAllBrands(page, limit);
    res.status(200).json(brands);
  };

  getBrandById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const brand = await this.brandsService.getBrandById(id);
    res.status(200).json(brand);
  };

  createBrand = async (req: Request, res: Response) => {
    const { name }: BrandDto = req.body;

    const newBrand = await this.brandsService.createBrand(name);
    res.status(201).json(newBrand);
  };

  deleteBrand = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const deletedBrand = await this.brandsService.deleteBrand(id);
    res.status(200).json(deletedBrand);
  };
}
