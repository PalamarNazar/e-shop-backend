import type { Request, Response } from "express";
import { AuthService } from "./services/auth.service.js";
import type { AuthTypes } from "./schemas/auth.schema.js";

const REFRESH_COOKIE_NAME = process.env.JWT_REFRESH_NAME || "refreshToken";

export class AuthController {
  constructor(private authService: AuthService = new AuthService()) {}

  registration = async (req: Request<{}, {}, AuthTypes>, res: Response) => {
    const { email, password, role } = req.body;

    const userData = await this.authService.registration(email, password, role);
    res.cookie(REFRESH_COOKIE_NAME, userData?.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.status(200).json(userData);
  };

  login = async (req: Request<{}, {}, AuthTypes>, res: Response) => {
    const { email, password, role } = req.body;
    const userData = await this.authService.login(email, password, role);

    res.cookie(REFRESH_COOKIE_NAME, userData?.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.status(200).json(userData);
  };

  logout = async (req: Request, res: Response) => {
    const refreshToken = req.cookies[REFRESH_COOKIE_NAME];
    await this.authService.logout(refreshToken);
    res.clearCookie(REFRESH_COOKIE_NAME);
    res.status(200).json({ success: true, message: "Logged out successfully" });
  };

  refresh = async (req: Request, res: Response) => {
    const refreshToken = req.cookies[REFRESH_COOKIE_NAME];
    const userData = await this.authService.refresh(refreshToken);

    res.cookie(REFRESH_COOKIE_NAME, userData?.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.status(200).json(userData);
  };

  activate = async (req: Request<{ link: string }>, res: Response) => {
    const activationLink = req.params.link;
    await this.authService.activate(activationLink);

    return res.redirect(process.env.CLIENT_URL!);
  };

  delete = async (req: Request, res: Response) => {
    const userData = req.user
    const deletedUser = await this.authService.deleteUser(userData)
    res.clearCookie(REFRESH_COOKIE_NAME);

    return res.status(200).json(deletedUser);
  }
}
