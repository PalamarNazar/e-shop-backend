import swaggerJsdoc from "swagger-jsdoc";
import { appConfig } from "../app-config.js";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-shop API",
      version: "1.0.0",
      description: "Документация для нашего интернет-магазина",
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
              format: "date-time", // Это заставит Swagger показать дату правильно
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
      },
    },
  },
  apis: [
    "./src/routes/*.ts",
    "./src/controllers/*.ts",
    "./src/services/*.ts",
    "./src/middlewares/*.ts",
    "./src/app/*.ts",
  ],
};

export const swaggerSpec = swaggerJsdoc(options);
