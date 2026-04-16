import express, { type Response } from "express";
import { appConfig } from "./app-config.js";
import brandsRoutes from "../routes/brands.routes.js";
import productsRouters from "../routes/product.routes.js";
import uploadRoutes from "../routes/uploads.routes.js";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { swaggerSpec } from "./docs/swagger.js";
import { globalErrorMiddleware } from "@/middlewares/global-middlewares/globalError.middleware.js";

const app = express();

async function startServer() {
  app.use(cors());
  app.use(express.json());

  app.get("/", (_, res: Response) => {
    res.json({ message: "E-shop API is running" });
  });
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use("/api", brandsRoutes);
  app.use("/api", productsRouters);
  app.use("/api/uploads/images", express.static("uploads"));
  app.use("/api", uploadRoutes);
  app.use(globalErrorMiddleware)

  app.listen(appConfig.PORT, () => {
    console.log(`Server started on http://${appConfig.HOST}:${appConfig.PORT}`);
  });
}

startServer();
