import * as Joi from 'joi';

export interface ConfigInterface {
  NODE_ENV: string;
  SERVER_PORT: number;
  MONGO_URI: string;
  JWT_SECRET: string;
  DB_TYPE: string,
  DB_HOST: string,
  DB_PORT: number,
  DB_USERNAME: string,
  DB_PASSWORD: string,
  DB_DATABASE: string,
  AWS_BUCKET_NAME: string,
  SENDGRID_API_KEY: string,
  EMAIL_BCC: string,
  EMAIL_FROM: string,
  ROOT_UPLOAD_DIR: string;
  // REDIS_URI: string;
  // FRONTEND_URL: string;
  //
  // AWS_ACCESS_KEY: string;
  // AWS_SECRET_ACCESS_KEY: string;
  // AWS_S3_REGION: string;
  // AWS_SES_REGION: string;
  // AWS_SNS_REGION: string;
  // AWS_MAX_FILE_UPLOAD_SIZE_MB: number;
  // AWS_MAX_FILES_UPLOAD_ALLOW: number;
  //
  // FIREBASE_PROJECT_ID: string;
  // FIREBASE_PRIVATE_KEY: string;
  // FIREBASE_CLIENT_EMAIL: string;
  COOKIE_SECRET: string,
  DEPOSIT_ADDRESS_SEED_PHRASE: string

  BLOCKCYPHER_URL: string;
  BLOCKCYPHER_API_VERSION: string;
  BLOCKCYPHER_API_ENV: string;
  BLOCKCYPHER_API_TOKEN: string;

  INFURA_NETWORK: string;
  INFURA_WS: string;
  chainID: number;
  ETHERSCAN_EXPLORER_URL: string;
  ETHERSCAN_API_URL: string;
  ETHERSCAN_API_KEY: string;

  WEBHOOK_CALL_BACK_BASE_URL: string;
}
