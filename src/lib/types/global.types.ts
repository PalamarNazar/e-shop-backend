import type { UserPayload } from "../../models/auth/middlewares/auth.middleware.js";

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload; 
    }
  }
}