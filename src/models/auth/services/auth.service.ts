import { type RefreshToken, type User } from "@prisma/client";
import prisma from "../../../lib/db/db.js";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import { MailService } from "./mail.service.js";
import { TokenService } from "./token.service.js";
import { UserDto } from "../dtos/user.dto.js";
import type { UserResponse } from "../types/user.types.js";
import { ApiError } from "../../../lib/utils/api-error.js";
import type { TokenPayload } from "../types/token-payload.js";

export class AuthService {
  constructor(
    private mailService: MailService = new MailService(),
    private tokenService: TokenService = new TokenService(),
  ) {}

  registration = async (
    email: string,
    password: string,
    role: User["roles"][number],
  ): Promise<UserResponse> => {
    const userExist = await prisma.user.findUnique({ where: { email } });
    let user;

    if (userExist) {
      const isPasswordValid = await bcrypt.compare(
        password,
        userExist.password,
      );

      if (!isPasswordValid) {
        throw new ApiError(400, "User with this email already exists");
      }

      const hasNewRoles = !userExist.roles.includes(role);

      if (!hasNewRoles) {
        throw new ApiError(400, "User with this email already exists");
      }

      user = await this.updateRoles(userExist, role);
    } else {
      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = v4();

      user = await prisma.user.create({
        data: {
          email,
          password: hashPassword,
          roles: [role],
          activationLink,
          isActivated: false,
        },
      });

      await this.mailService.sendActivationMail(email, activationLink);
    }

    const userDto = new UserDto(user);
    const tokens = await this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  };

  login = async (
    email: string,
    password: string,
    role: User["roles"][number],
  ): Promise<UserResponse> => {
    const existUser = await prisma.user.findUnique({ where: { email } });

    if (!existUser) throw new ApiError(401, "Unauthorized");
    if (!existUser.roles.includes(role))
      throw new ApiError(401, "User with this email already exists");
    const isPassEquals = await bcrypt.compare(password, existUser.password);

    if (!isPassEquals) throw new ApiError(400, "User with this email already exists ");

    const userDto = new UserDto(existUser);
    const tokens = await this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  };

  activate = async (activationLink: string): Promise<void> => {
    const user = await prisma.user.findUnique({ where: { activationLink } });

    if (!user) throw new ApiError(400, "Invalid or expired activation link");

    await prisma.user.update({
      where: { id: user.id },
      data: { isActivated: true },
    });
  };

  logout = async (refreshToken: string | undefined): Promise<void> => {
    if (!refreshToken) throw new ApiError(401, "Unauthorized");
    await this.tokenService.removeToken(refreshToken);
  };

  refresh = async (refreshToken: string | undefined): Promise<UserResponse> => {
    if (!refreshToken) throw new ApiError(401, "Unauthorized");

    const userData = this.tokenService.validateRefreshToken(refreshToken);
    if (!userData) throw new ApiError(401, "Unauthorized");
    
    const tokenFromDb = await this.tokenService.findToken(refreshToken);
    if (!tokenFromDb) throw new ApiError(401, "Unauthorized");

    const user = await prisma.user.findUnique({ where: { id: userData.id }})
    if (!user) throw new ApiError(401, 'Unauthorized');

    const userDto = new UserDto(user);
    const tokens = await this.tokenService.generateTokens({ ...userDto });
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  };

  deleteUser = async (userData: TokenPayload | undefined): Promise<TokenPayload> => {
    if (!userData) throw new ApiError(401, 'Unauthorized');

    const deletedUser = await prisma.user.delete({ where: { id: userData.id }})
    const userDto = new UserDto(deletedUser)
    return userDto
  }

  private updateRoles = async (
    user: User,
    incomingRole: User["roles"][number],
  ): Promise<User> => {
    const updatedRoles = Array.from(new Set([...user.roles, incomingRole]));

    return await prisma.user.update({
      where: { id: user.id },
      data: { roles: updatedRoles },
    });
  };
}
