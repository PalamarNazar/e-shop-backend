import express, { type Response } from "express";
import { appConfig } from "./app-config.js";
import brandsRoutes from "../models/brand/brands.routes.js";
import stylesRoutes from "../models/style/styles.routes.js";
import sizesRoutes from "../models/size/sizes.routes.js";
import colorRoutes from "../models/color/colors.routes.js";
import productsRouters from "../models/product/product.routes.js";
import authRouters from "../models/auth/auth.routes.js"
import uploadRoutes from "../models/uploads/uploads.routes.js";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { swaggerSpec } from "./docs/swagger.js";
import { globalErrorMiddleware } from "../middlewares/global-middlewares/globalError.middleware.js";
import cookieParser from 'cookie-parser'

const app = express();

async function startServer() {
  app.use(cors());
  app.use(cookieParser())
  app.use(express.json());

  app.get("/", (_, res: Response) => {
    res.json({ message: "E-shop API is running" });
  });
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use("/api", brandsRoutes);
  app.use("/api", stylesRoutes);
  app.use("/api", sizesRoutes);
  app.use("/api", colorRoutes);
  app.use("/api", productsRouters);
  app.use("/api", authRouters);
  app.use("/api/uploads/images", express.static("uploads"));
  app.use("/api", uploadRoutes);
  app.use(globalErrorMiddleware);

  app.listen(appConfig.PORT, () => {
    console.log(`Server started on http://${appConfig.HOST}:${appConfig.PORT}`);
  });
}

startServer();
