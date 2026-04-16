import prisma from "@/lib/db/db.js";
import type { CreateProductDto } from "../schemas/product-schema/products.schema.js";
import { Prisma, type Product, type Style } from "@prisma/client";
import { PrismaErrorCodes } from "@/lib/errors/prisma-error-codes.js";

export class ProductsService {
  async getAllProducts() {
    return await prisma.product.findMany({
      include: {
        styles: true,
        brand: true,
        variants: {
          include: {
            color: true,
            images: true,
            variantStocks: true,
          },
        },
      },
    });
  }

  async createProduct(data: CreateProductDto) {
    return await prisma.product.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        discount: data.discount,
        brandId: data.brandId || null,
        gender: data.gender,
        rating: 0,

        styles: {
          connect: data.styles.map((id) => ({ id })),
        },

        variants: {
          create: data.variants.map((variant) => ({
            color: { connect: { id: variant.colorId } },

            images: {
              create: variant.images.map((url) => ({ url })),
            },

            variantStocks: {
              create: variant.sizes.map((size) => ({
                size: { connect: { id: size.sizeId } },
                stock: size.stock,
              })),
            },
          })),
        },
      },
      include: {
        styles: true,
        variants: {
          include: {
            color: true,
            images: true,
            variantStocks: true,
          },
        },
      },
    });
  }

  async getProductById(id: string) {
    return await prisma.product.findUnique({
      where: { id },
      include: {
        styles: true,
        brand: true,
        variants: {
          include: {
            color: true,
            images: true,
            variantStocks: true,
          },
        },
      },
    });
  }

  async deleteProduct(id: string) {
    try {
      return await prisma.product.delete({
        where: { id },
        include: {
          styles: true,
          brand: true,
          variants: {
            include: {
              color: true,
              images: true,
              variantStocks: true,
            },
          },
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaErrorCodes.RecordNotFound.code
      ) {
        return null;
      }
      throw error;
    }
  }
}
