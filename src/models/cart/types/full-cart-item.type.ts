import type { CartItem, Product } from "@prisma/client";

export type FullCartItem = CartItem & { product: Product };