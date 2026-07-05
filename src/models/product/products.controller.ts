import type { Request, Response } from "express";
import { ProductsService } from "./products.service.js";
import type { ProductTypes, UpdateProductTypes } from "./schemas/products.schema.js";
import type { ProductQueries } from "./schemas/product-queries.schema.js";

export class ProductsController {
  constructor(
    private productsService: ProductsService = new ProductsService(),
  ) {}

  createProduct = async (req: Request<{}, {}, ProductTypes>, res: Response) => {
    const product = req.body;
    const newProduct = await this.productsService.createProduct(product);
    res.status(201).json(newProduct);
  };

  getAllProducts = async (req: Request, res: Response) => {
    const { page, limit, fullInfo } = req.query as unknown as ProductQueries;
    const products = await this.productsService.getAllProducts(
      page,
      limit,
      fullInfo,
    );
    res.status(200).json(products);
  };

  getProductById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const product = await this.productsService.getProductById(id);
    res.status(200).json(product);
  };

  deleteProduct = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const deletedProduct = await this.productsService.deleteProduct(id);
    res.status(200).json(deletedProduct);
  };

  updateProduct = async (
    req: Request<{ id: string }, {}, UpdateProductTypes>,
    res: Response,
  ) => {
    const { id } = req.params;
    const product = req.body
    const updateProduct = await this.productsService.updateProduct(id, product);
    res.status(200).json(updateProduct);
  };
}
