import type { TokenPayload } from "./token-payload.js";

export interface UserResponse {
  accessToken: string;
  refreshToken: string;
  user: TokenPayload;
}
