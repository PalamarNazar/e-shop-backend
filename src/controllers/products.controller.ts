import { ProductsService } from "../services/products.service.js";
import type { CreateProductDto } from "../schemas/product-schema/products.schema.js";
import type { Request, Response } from "express";
import { ApiError } from "@/lib/utils/api-error.js";

export class ProductsController {
  constructor(
    private productsService: ProductsService = new ProductsService(),
  ) {}

  createProduct = async (req: Request, res: Response) => {
    const product: CreateProductDto = req.body;

    const newProduct = await this.productsService.createProduct(product);
    res.status(201).json(newProduct);
  };

  getAllProducts = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAllProducts();
    res.status(200).json(products);
  };

  getProductById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const product = await this.productsService.getProductById(id);

    if (!product) throw new ApiError(404, "Product Not Found");
    res.status(200).json(product);
  };
  
  deleteProduct = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const deletedProduct = await this.productsService.deleteProduct(id);

    if (!deletedProduct) throw new ApiError(404, "Product Not Found");
    res.status(204).json(deletedProduct);
  };
}
