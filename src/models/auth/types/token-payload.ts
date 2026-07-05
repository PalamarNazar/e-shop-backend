import type { User } from "@prisma/client";

export interface TokenPayload {
  email: string;
  id: string;
  isActivated: boolean;
  roles: User["roles"];
}