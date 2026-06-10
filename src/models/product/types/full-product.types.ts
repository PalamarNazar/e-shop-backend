import type { Prisma } from "@prisma/client";

export interface FullProduct extends Prisma.ProductGetPayload<{
  include: {
    brand: true;
    styles: true;
    variants: {
      include: { color: true; images: true; variantStocks: true };
    };
  };
}> {}