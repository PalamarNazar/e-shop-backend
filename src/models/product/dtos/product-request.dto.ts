import type { Prisma } from "@prisma/client";
import type { ProductTypes } from "../schemas/products.schema.js";

export class ProductRequestDto {
  constructor(private readonly product: ProductTypes) {}

  public toCreateInput(): Prisma.ProductCreateInput {
    const { product } = this;

    const data: Prisma.ProductCreateInput = {
      title: product.title,
      description: product.description,
      price: product.price,
      discount: product.discount,
      gender: product.gender,
      brand: { connect: { id: product.brandId } },
      rating: 0,

      styles: {
        connect: product.styles.map((id) => ({ id })),
      },

      variants: {
        create: product.variants.map((variant) => ({
          color: { connect: { id: variant.colorId } },
          images: { create: variant.images.map((url) => ({ url })) },
          variantStocks: {
            create: variant.sizes.map((size) => ({
              stock: size.stock,
              size: {
                connect: {
                  id: size.sizeId,
                },
              },
            })),
          },
        })),
      },
    };
    return data;
  }
}
