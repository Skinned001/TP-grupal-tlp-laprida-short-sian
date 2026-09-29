import "dotenv/config";

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta variables de entorno:${name}`);
  }
  return value;
}

export const env = {};
