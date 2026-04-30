import dotenv from "dotenv";
dotenv.config();

function getEnvVar(key: string, required = true): string {
  const value = process.env[key];
  if (required && !value) {
    throw new Error(`Environment variable ${key} is missing`);
  }
  return value!;
}

export const PORT = getEnvVar("PORT") || "6000";
export const DATABASE_URL = getEnvVar("DATABASE_URL");
export const JWT_SECRET = getEnvVar("JWT_SECRET");
export const JWT_EXPIRES_IN = getEnvVar("JWT_EXPIRES_IN") || "7d";
