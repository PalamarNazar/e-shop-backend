import type { FullProduct } from "../types/full-product.types.js";

export class ProductResponseDto {
  id: string;
  title: string;
  price: number;
  discount: number | null;
  gender: string;
  rating: number;
  brand: { name: string; slug: string };
  styles: { name: string; slug: string }[];
  
  variants: {
    id: string;
    color: { name: string; hex: string; slug: string };
    images: string[];
    stocks: { sizeId: string; stock: number }[];
  }[];

  constructor(product: FullProduct) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.discount = product.discount;
    this.gender = product.gender;
    this.rating = product.rating;
    this.brand = { name: product.brand.name, slug: product.brand.slug };
    this.styles = product.styles.map((style) => ({
      name: style.name,
      slug: style.slug,
    }));
    this.variants = product.variants.map((variant) => ({
      id: variant.id,
      color: {
        name: variant.color.name,
        hex: variant.color.hex,
        slug: variant.color.slug,
      },
      images: variant.images.map((img) => img.url),

      stocks: variant.variantStocks.map((size) => ({
        sizeId: size.sizeId,
        stock: size.stock,
      })),
    }));
  }
}
