import type { TokenPayload } from "../../models/auth/types/token-payload.js";

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload; 
    }
  }
}