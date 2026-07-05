import prisma from "../../lib/db/db.js";
import type {
  ProductTypes,
  UpdateProductTypes,
} from "./schemas/products.schema.js";
import { PrismaErrorCodes } from "../../lib/errors/prisma-error-codes.js";
import type { ResponseWithPagination } from "../../lib/types/pagination.types.js";
import { ProductRequestDto } from "./dtos/product-request.dto.js";
import { handlePrismaError } from "../../lib/utils/handle-prisma-error.js";
import type { ErrorResolver } from "../../lib/types/prisma-errors-meta.types.js";
import { PrismaErrorExtractor } from "../../lib/extractors/prisma-errors.extractore.js";
import { ApiError } from "../../lib/utils/api-error.js";
import { ProductShortResponseDto } from "./dtos/product-short-response.dto.js";
import type { UnionProductsResponse } from "./types/union-product-response.types.js";
import { Prisma } from "@prisma/client";
import { ProductResponseDto } from "./dtos/product-response.dto.js";
import {  ProductUpdateInputSchema } from '#generate'

export const errorMapping: Record<string, ErrorResolver> = {
  [PrismaErrorCodes.RecordNotFound.code]: () =>
    [404, "Product not found"] as const,

  [PrismaErrorCodes.UniqueViolation.code]: (meta) => {
    const fields = PrismaErrorExtractor.getFieldName(meta);
    if (!fields) return [409, "Duplicate unique field"] as const;
    return [409, `Duplicate unique field: [${fields}]`] as const;
  },
} as const;

const ProductRelationsInclude = {
  brand: true,
  styles: true,
  variants: {
    include: { color: true, images: true, variantStocks: true },
  },
} as const satisfies Prisma.ProductInclude;

export class ProductsService {
  async getAllProducts(
    page: number,
    limit: number,
    fullInfo: boolean,
  ): Promise<ResponseWithPagination<UnionProductsResponse>> {
    const skip = (page - 1) * limit;

    const [products, totalItems] = await Promise.all([
      prisma.product.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "asc" },
        include: ProductRelationsInclude,
      }),
      prisma.product.count(),
    ]);

    const data = fullInfo
      ? products.map((product) => new ProductResponseDto(product))
      : products.map((product) => new ProductShortResponseDto(product));

    const totalPages = Math.ceil(totalItems / limit);

    return {
      data,
      meta: {
        totalItems,
        totalPages,
        currentPage: page,
        limit,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  async createProduct(product: ProductTypes): Promise<ProductResponseDto> {
    try {
      const productDto = new ProductRequestDto(product);
      const productCreateData = productDto.toCreateInput();
      const newProduct = await prisma.product.create({
        data: productCreateData,
        include: ProductRelationsInclude,
      });

      const newProductDto = new ProductResponseDto(newProduct);
      return newProductDto;
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }

  async getProductById(id: string): Promise<ProductResponseDto> {
    const product = await prisma.product.findUnique({
      where: { id },
      include: ProductRelationsInclude,
    });

    if (!product) throw new ApiError(404, "Product not found");

    const productDto = new ProductResponseDto(product);
    return productDto;
  }

  async deleteProduct(id: string): Promise<ProductResponseDto> {
    try {
      const product = await prisma.product.delete({
        where: { id },
        include: ProductRelationsInclude,
      });

      const productDto = new ProductResponseDto(product);
      return productDto;
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }
  async updateProduct(
    id: string,
    product: UpdateProductTypes,
  ): Promise<ProductResponseDto> {
    try {
      const validUpdateProduct = ProductUpdateInputSchema.parse(product)
      const updatedProduct = await prisma.product.update({
        where: { id },
        data: validUpdateProduct,
        include: ProductRelationsInclude
      });

      const productDto = new ProductResponseDto(updatedProduct);
      return productDto;
    } catch (error) {
      handlePrismaError(error, errorMapping);
      throw error;
    }
  }
}
