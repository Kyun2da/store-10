import dotenv from 'dotenv';

dotenv.config();

const loadEnv = (key: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`환경변수 ${key}가 정의 되지 않음`);
  }
  return value;
};

export default {
  PORT: Number(loadEnv('PORT')),
  DB_PORT: Number(loadEnv('DB_PORT')),
  DB_USERNAME: loadEnv('DB_USERNAME'),
  DB_HOST: loadEnv('DB_HOST'),
  DB_PASSWORD: loadEnv('DB_PASSWORD'),
  DB_DATABASE: loadEnv('DB_DATABASE'),
  JWT_SECRET: loadEnv('JWT_SECRET'),
  GIT_OAUTH_URL: loadEnv('GIT_OAUTH_URL'),
  GIT_CLIENT_ID: loadEnv('GIT_CLIENT_ID'),
  GIT_CLIENT_SECRET: loadEnv('GIT_CLIENT_SECRET'),
  CLIENT_URL: loadEnv('CLIENT_URL'),
};
