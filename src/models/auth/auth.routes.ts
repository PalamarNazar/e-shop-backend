import { Router } from "express";
import { asyncHandler } from "../../lib/utils/asyncHandler.js";
import { AuthController } from "./auth.controller.js";
import { validationMiddleware } from "./middlewares/validation.middleware.js";
import { checkAuthMiddleware } from "./middlewares/auth.middleware.js";

const router = Router();

const authController = new AuthController();

/** 
 * @openapi
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: Enter your Access Token here (received after login/registration)
 */


/** 
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     description: Authenticates a user with email and password, sets a refreshToken HTTP-only cookie.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthRequest'
 *     responses:
 *       '200':
 *         description: Successfully logged in. Returns tokens and user profile.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       '400':
 *         description: Invalid email or password / Validation failed.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 *       '401':
 *         description: Unauthorized (User or Role not found).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiUnauthorized'
 */
router.post(
  "/auth/login",
  asyncHandler(validationMiddleware),
  asyncHandler(authController.login),
);

/**
 * @openapi
 * /api/auth/registration:
 *   post:
 *     summary: Register a new customer or assign a new role
 *     description: Creates a new user record in the database and sends an activation email.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthRequest'
 *     responses:
 *       '200':
 *         description: Successfully registered. Activation email sent.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       '400':
 *         description: Role already exists or Validation failed.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 */
router.post(
  "/auth/registration",
  asyncHandler(validationMiddleware),
  asyncHandler(authController.registration),
);

/**
 * @openapi
 * /api/auth/logout:
 *   post:
 *     summary: Log out the current user
 *     description: Deletes the refresh token from the database and clears the HTTP-only cookie.
 *     tags:
 *       - Authentication
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successfully logged out.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Logged out successfully
 *       '401':
 *         description: Unauthorized (Missing or invalid Access Token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiUnauthorized'
 */
router.post("/auth/logout", asyncHandler(authController.logout));

/** 
 * @openapi
 * /api/auth/delete:
 *   delete:
 *     summary: Delete user account
 *     description: Completely removes the user and all their active token sessions from the system.
 *     tags:
 *       - Authentication
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Account successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDto'
 *       '401':
 *         description: Unauthorized (Missing or invalid Access Token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiUnauthorized'
 */
router.delete(
  "/auth/delete",
  asyncHandler(checkAuthMiddleware),
  asyncHandler(authController.delete),
);

/** 
 * @openapi
 * /api/auth/activate/{link}:
 *   get:
 *     summary: Activate user account via email link
 *     description: Sets the user's `isActivated` status to true and redirects them to the client website storefront.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - name: link
 *         in: path
 *         required: true
 *         description: The UUID activation link sent to the user's email.
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '302':
 *         description: Success. Redirects to CLIENT_URL.
 *       '400':
 *         description: Invalid or expired activation link.
 */
router.get("/auth/activate/:link", asyncHandler(authController.activate));

/**
 * @openapi
 * /api/auth/refresh:
 *   get:
 *     summary: Refresh active session tokens
 *     description: Reads the refreshToken from the HTTP-only cookies, validates it, and issues a new pair of tokens.
 *     tags:
 *       - Authentication
 *     responses:
 *       '200':
 *         description: Token rotation successful. Returns new Access and Refresh tokens.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       '401':
 *         description: Unauthorized (Missing, invalid or expired Refresh Token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiUnauthorized'
 */
router.get("/auth/refresh", asyncHandler(authController.refresh));

export default router;
