import "dotenv/config";

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno: ${name}`);
  }
  return value;
}

function requiredNumber(name: string): number {
  const raw = required(name);
  const n = Number(raw);
  if (Number.isNaN(n)) {
    throw new Error(`La variable ${name} debe ser numérica, llegó: "${raw}"`);
  }
  return n;
}

export const env = {
  API_PORT: requiredNumber("API_PORT"),
  DB_HOST: required("DB_HOST"),
  DB_PORT: requiredNumber("DB_PORT"),
  DB_USER: required("DB_USER"),
  DB_PASSWORD: required("DB_PASSWORD"),
  DB_NAME: required("DB_NAME"),
  JWT_SECRET: required("JWT_SECRET"),
} as const;

export const MONGO_URI =
  `mongodb://${env.DB_USER}:${env.DB_PASSWORD}` +
  `@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}?authSource=admin`;
