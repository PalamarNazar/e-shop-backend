import type { ProductResponseDto } from "../dtos/product-response.dto.js";
import type { ProductShortResponseDto } from "../dtos/product-short-response.dto.js";

export type UnionProductResponse = ProductResponseDto | ProductShortResponseDto

export type UnionProductsResponse = ProductResponseDto[] | ProductShortResponseDto[]