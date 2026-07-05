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
      parameters: {
        PageQuery: { in: "query", name: "page", type: "number", default: 1 },
        LimitQuery: { in: "query", name: "limit", type: "number", default: 10 },
      },
      schemas: {
        PaginationMeta: {
          type: "object",
          properties: {
            totalItems: { type: "integer", example: 120 },
            totalPages: { type: "integer", example: 12 },
            currentPage: { type: "integer", example: 2 },
            limit: { type: "integer", example: 10 },
            hasNextPage: { type: "boolean", example: true },
            hasPrevPage: { type: "boolean", example: true },
          },
        },
        Style: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Unique id",
              example: "65f8a1b2-c3d4-4e5f-a6b7-c8d9e0f1a2b3",
            },
            name: {
              type: "string",
              description: "Style name",
              example: "Modern Classic",
            },
            slug: {
              type: "string",
              description: "Style slug",
              example: "modern-classic",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Created data",
              example: "2024-03-20T10:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Last data update",
              example: "2024-03-21T12:00:00Z",
            },
          },
        },
        Brand: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Unique id",
              example: "65f8a1b2-c3d4-4e5f-a6b7-c8d9e0f1a2b3",
            },
            name: {
              type: "string",
              description: "Brand name",
              example: "Nike",
            },
            slug: {
              type: "string",
              description: "Brand slug",
              example: "nike",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Created data",
              example: "2024-03-20T10:00:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Last data update",
              example: "2024-03-21T12:00:00.000Z",
            },
          },
        },
        Size: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Unique id",
              example: "65f8a1b2-c3d4-4e5f-a6b7-c8d9e0f1a2b3",
            },
            name: {
              type: "string",
              description: "Size name",
              example: "M",
            },
            slug: {
              type: "string",
              description: "Size slug",
              example: "m",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Created data",
              example: "2024-03-20T10:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Last data update",
              example: "2024-03-21T12:00:00Z",
            },
          },
        },
        Color: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Unique id",
              example: "65f8a1b2-c3d4-4e5f-a6b7-c8d9e0f1a2b3",
            },
            name: {
              type: "string",
              description: "Color name",
              example: "White",
            },
            slug: {
              type: "string",
              description: "Color slug",
              example: "white",
            },
            hex: {
              type: "string",
              description: "Color hex",
              example: "fff",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Created data",
              example: "2024-03-20T10:00:00Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Last data update",
              example: "2024-03-21T12:00:00Z",
            },
          },
        },
        BrandPaginationResponse: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: { $ref: "#/components/schemas/Brand" },
            },
            meta: { $ref: "#/components/schemas/PaginationMeta" },
          },
        },
        StylesPaginationResponse: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: { $ref: "#/components/schemas/Style" },
            },
            meta: { $ref: "#/components/schemas/PaginationMeta" },
          },
        },
        SizePaginationResponse: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: { $ref: "#/components/schemas/Size" },
            },
            meta: { $ref: "#/components/schemas/PaginationMeta" },
          },
        },
        ColorPaginationResponse: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: { $ref: "#/components/schemas/Color" },
            },
            meta: { $ref: "#/components/schemas/PaginationMeta" },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            status: { type: "number", example: 500 },
            message: {
              type: "string",
              example: "Server Error",
            },
          },
        },
        ValidationErrorResponse: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            status: { type: "number", example: 400 },
            message: {
              type: "string",
              example: "Validation error",
            },
            errors: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  field: { type: "string", example: "name" },
                  message: { type: "string", example: "Name is too small" },
                },
              },
            },
          },
        },
        AuthRequest: {
          type: "object",
          required: ["email", "password", "role"],
          properties: {
            email: {
              type: "string",
              format: "email",
              example: "customer@clothing-shop.com",
            },
            password: {
              type: "string",
              minLength: 8,
              maxLength: 32,
              example: "Example_123",
            },
            role: { type: "string", enum: ["USER", "ADMIN"], example: "USER" },
          },
        },
        UserDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "c7b344f3-a294-4b53-bc2a-7af169ad8b23",
            },
            email: {
              type: "string",
              format: "email",
              example: "customer@clothing-shop.com",
            },
            roles: {
              type: "array",
              items: { type: "string" },
              example: ["USER"],
            },
            isActivated: { type: "boolean", example: false },
          },
        },
        AuthResponse: {
          type: "object",
          properties: {
            accessToken: {
              type: "string",
              example: "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
            },
            refreshToken: {
              type: "string",
              example: "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
            },
            user: { $ref: "#/components/schemas/UserDto" },
          },
        },
        ApiUnauthorized: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            status: { type: "integer", example: 401 },
            message: { type: "string", example: "Unauthorized" },
          },
        },
      },
    },
  },
  apis: ["./src/models/**/*.routes.ts", "./src/app/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
