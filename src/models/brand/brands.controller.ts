import type { Request, Response } from "express";
import { BrandsService } from "./brands.service.js";
import type { BrandDto, UpdateBrandPayload } from "./schemas/brand.schema.js";
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

  createBrand = async (req: Request<{}, {}, BrandDto>, res: Response) => {
    const { name, slug } = req.body;
    const newBrand = await this.brandsService.createBrand(name, slug);
    res.status(201).json(newBrand);
  };

  deleteBrand = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const deletedBrand = await this.brandsService.deleteBrand(id);
    res.status(200).json(deletedBrand);
  };

  updateBrand = async (req: Request<{ id: string }, {}, UpdateBrandPayload>, res: Response) => {
    const { id } = req.params;
    const payload = req.body;
    const deletedBrand = await this.brandsService.updateBrand(id, payload);
    res.status(200).json(deletedBrand);
  };
}
