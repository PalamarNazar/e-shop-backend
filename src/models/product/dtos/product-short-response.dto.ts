import type { FullProduct } from "../types/full-product.types.js";

export class ProductShortResponseDto {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly gender: string;
  readonly price: number;
  readonly discount: number | null;
  readonly rating: number;
  readonly generalImg: string | undefined;
  readonly styles: string[];
  readonly brandId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(product: FullProduct) {
    this.id = product.id
    this.title = product.title
    this.description = product.description
    this.gender = product.gender
    this.price = product.price
    this.discount = product.discount
    this.rating = product.rating
    this.styles = product.styles.map(style => style.name)
    this.generalImg = product.variants[0]?.images[0]?.url
    this.brandId = product.brandId
    this.createdAt = product.createdAt
    this.updatedAt = product.updatedAt
  }
}
