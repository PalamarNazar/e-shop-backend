import type { RefreshToken, User } from "@prisma/client";
import prisma from "../../../lib/db/db.js";
import type { TokenPayload } from "../types/token-payload.js";
import jwt, { type JwtPayload } from "jsonwebtoken";

export class TokenService {
  generateTokens = async (payload: TokenPayload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  };

  saveToken = async (userId: string, refreshToken: string) => {
    const daysToLive = 30;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + daysToLive);

    return await prisma.refreshToken.upsert({
      where: { userId },
      update: {
        refreshToken,
        expiresAt: expiresAt,
      },
      create: {
        userId: userId,
        refreshToken,
        expiresAt: expiresAt,
      },
    });
  };

  removeToken = async (refreshToken: string): Promise<{ count: number }> => {
    return await prisma.refreshToken.deleteMany({
      where: { refreshToken },
    });
  };

  findToken = async (refreshToken: string): Promise<RefreshToken | null> => {
    return await prisma.refreshToken.findUnique({
      where: { refreshToken },
    });
  };

  validateAccessToken = (token: string): TokenPayload | null => {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as TokenPayload;
      return userData;
    } catch (error) {
      return null;
    }
  };

  validateRefreshToken = (token: string): TokenPayload | null => {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as TokenPayload;
      return userData
    } catch (error) {
      return null;
    }
  };
}
