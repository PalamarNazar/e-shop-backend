import dotenv from "dotenv"
import path from "path";

dotenv.config()

const mode = process.env.NODE_ENV || 'development';

const envFile = `.env.${mode}`;

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

console.log(`Running in ${mode} mode. Loaded environment variables from ${envFile}`);

export const appConfig = {
    PORT: Number(process.env.PORT) || 5000,
    HOST: process.env.HOST || "localhost",
} as const