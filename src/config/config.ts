/**
 * Application configuration
 */

interface Config {
  readonly NODE_ENV: string;
  readonly PORT: number;
  readonly LOG_LEVEL: string;
  readonly DATABASE_URL?: string;
  readonly OPENAI_API_KEY?: string;
  readonly AWS_ACCESS_KEY_ID?: string;
  readonly AWS_SECRET_ACCESS_KEY?: string;
  readonly REDIS_URL?: string;
}

function getEnvVar(name: string, defaultValue?: string): string {
  const value = process.env[name];
  if (!value && !defaultValue) {
    throw new Error(`Environment variable ${name} is required`);
  }
  return value ?? defaultValue!;
}

function getEnvVarOptional(name: string): string | undefined {
  return process.env[name];
}

function getEnvVarAsNumber(name: string, defaultValue: number): number {
  const value = process.env[name];
  if (!value) return defaultValue;
  
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Environment variable ${name} must be a valid number`);
  }
  return parsed;
}

export const config: Config = {
  NODE_ENV: getEnvVar('NODE_ENV', 'development'),
  PORT: getEnvVarAsNumber('PORT', 3000),
  LOG_LEVEL: getEnvVar('LOG_LEVEL', 'info'),
  DATABASE_URL: getEnvVarOptional('DATABASE_URL'),
  OPENAI_API_KEY: getEnvVarOptional('OPENAI_API_KEY'),
  AWS_ACCESS_KEY_ID: getEnvVarOptional('AWS_ACCESS_KEY_ID'),
  AWS_SECRET_ACCESS_KEY: getEnvVarOptional('AWS_SECRET_ACCESS_KEY'),
  REDIS_URL: getEnvVarOptional('REDIS_URL'),
};
