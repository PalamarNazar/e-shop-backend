import type { Product } from "@prisma/client";

export interface ProductShortInfo extends Product {
    generalImage? : string | null;
}