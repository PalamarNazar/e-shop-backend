import swaggerJsdoc from "swagger-jsdoc";
import { appConfig } from "../app-config.js";
import { maxLength } from "zod";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-shop API",
      version: "1.0.0",
      description: "Documentation for our online shop",
    },
    servers: [
      {
        url: `http://localhost:${appConfig.PORT}`,
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Style: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Уникальный идентификатор",
              example: "65f8a1b2-c3d4-4e5f-a6b7-c8d9e0f1a2b3",
            },
            name: {
              type: "string",
              description: "Название стиля",
              example: "Modern Classic",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Дата создания",
              example: "2024-03-20T10:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Дата последнего обновления",
              example: "2024-03-21T12:00:00Z",
            },
          },
        },
        StylesList: {
          type: "array",
          items: {
            $ref: "#components/schemas/Style",
          },
        },
        Brand: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Уникальный идентификатор бренда",
              example: "65f8a1b2-c3d4-4e5f-a6b7-c8d9e0f1a2b3",
            },
            name: {
              type: "string",
              description: "Название бренда",
              example: "Nike",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Дата создания записи",
              example: "2024-03-20T10:00:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Дата последнего обновления записи",
              example: "2024-03-21T12:00:00.000Z",
            },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Server Error",
            },
          },
        },
        AuthRequest: {
          type: "object",
          required: ["email", "password", "role"],
          properties: {
            email: { type: "string", format: "email", example: "customer@clothing-shop.com" },
            password: { type: "string", minLength: 8, maxLength: 32, example: "Example_123" },
            role: { type: "string", enum: ["USER", "ADMIN"], example: "USER" },
          },
        },
        UserDto: {
          type: "object",
          properties: {
            id: { type: "string", example: "c7b344f3-a294-4b53-bc2a-7af169ad8b23" },
            email: { type: "string", format: "email", example: "customer@clothing-shop.com" },
            roles: { type: "array", items: { type: "string" }, example: ["USER"] },
            isActivated: { type: "boolean", example: false },
          },
        },
        AuthResponse: {
          type: "object",
          properties: {
            accessToken: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6..." },
            refreshToken: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6..." },
            user: { $ref: "#/components/schemas/UserDto" },
          },
        },
        ApiUnauthorized: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            status: { type: "integer", example: 401 },
            message: { type: "string", example: "Unauthorized" },
          }
        },
        ApiError: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            status: { type: "integer", example: 400 },
            message: { type: "string", example: "Validation failed" },
            errors: {
              type: "array",
              items: { type: "object" },
              example: [{ message: "Invalid email format", path: ["email"] }],
            },
          },
        },
      },
    },
  },
  apis: [
    "./src/models/**/*.routes.ts",
    "./src/app/*.ts",
  ],
};

export const swaggerSpec = swaggerJsdoc(options);
