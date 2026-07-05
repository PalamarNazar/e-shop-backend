import type { Prisma } from "@prisma/client";

export type UserWithCart = Prisma.UserGetPayload<{ include: { cart: true }}>