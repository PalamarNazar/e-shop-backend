import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../../../lib/utils/api-error.js";
import { TokenService } from "../services/token.service.js";

const tokenService = new TokenService()

export const checkAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(new ApiError(401, "Unauthorized"));
    }
  
    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
      return next(new ApiError(401, "Unauthorized"));
    }
  
    const userData = tokenService.validateAccessToken(accessToken);
  
    if (!userData) {
      return next(new ApiError(401, "Unauthorized"));
    }
  
    req.user = userData;
  
    next();
  } catch (error) {
    throw new ApiError(401, 'Unauthorized')
  }
};
