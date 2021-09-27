import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import { ConfigInterface } from './interfaces/configInterface.interface';


export class ConfigService {
  private readonly envConfig: ConfigInterface;

  constructor() {
    dotenv.config();
    const config: { [name: string]: string } = process.env;
    const parsedConfig = JSON.parse(JSON.stringify(config));
    this.envConfig = this.validateInput(parsedConfig);
  }
  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput = (envConfig): ConfigInterface => {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .required()
        .valid(
          'development',
          'production',
          'staging',
          'provision',
          'inspection',
        )
        .default('development'),
      SERVER_PORT: Joi.number().required(),
      MONGO_URI: Joi.string().required(), // if the selected database is mongodb
      JWT_SECRET: Joi.string().required(),
      DB_TYPE: Joi.string()
        .required()
        .valid('mysql')
        .default('mysql'),
      DB_HOST: Joi.string()
        .required()
        .default('localhost'),
      DB_PORT: Joi.number()
        .required()
        .default(3306),
      DB_USERNAME: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
      DB_DATABASE: Joi.string().required(),
      AWS_BUCKET_NAME: Joi.string().required(),
      SENDGRID_API_KEY: Joi.string().required(),
      EMAIL_BCC: Joi.string().required(),
      EMAIL_FROM: Joi.string().required(),
      COOKIE_SECRET: Joi.string().required(),
      DEPOSIT_ADDRESS_SEED_PHRASE: Joi.string().required(),

      BLOCKCYPHER_URL: Joi.string().required(),
      BLOCKCYPHER_API_VERSION: Joi.string().required(),
      BLOCKCYPHER_API_ENV: Joi.string().required(),
      BLOCKCYPHER_API_TOKEN: Joi.string().required(),

      INFURA_NETWORK: Joi.string().required(),
      INFURA_WS: Joi.string().required(),
      chainID: Joi.number().required(),
      ETHERSCAN_EXPLORER_URL: Joi.string().required(),
      ETHERSCAN_API_URL: Joi.string().required(),
      ETHERSCAN_API_KEY: Joi.string().required(),

      WEBHOOK_CALL_BACK_BASE_URL: Joi.string().required(),
      ROOT_UPLOAD_DIR: Joi.string().required()
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
      {
        abortEarly: false,
        allowUnknown: true,
      },
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  };

  get nodeEnv(): string {
    return this.envConfig.NODE_ENV;
  }

  get serverPort(): number {
    return this.envConfig.SERVER_PORT;
  }

  get jwtSecret(): string {
    return this.envConfig.JWT_SECRET;
  }

  get cookieSecret(): string {
    return this.envConfig.COOKIE_SECRET;
  }

  get rootUploadDir(): string {
    return this.envConfig.ROOT_UPLOAD_DIR;
  }
  get mongoUri(): string {
    return this.envConfig.MONGO_URI;
  }

  get dbType(): string {
    return this.envConfig.DB_TYPE;
  }

  get dbHost(): string {
    return this.envConfig.DB_HOST;
  }

  get dbPort(): number {
    return this.envConfig.DB_PORT;
  }

  get dbUsername(): string {
    return this.envConfig.DB_USERNAME;
  }

  get dbPassword(): string {
    return this.envConfig.DB_PASSWORD;
  }

  get dbDatabase(): string {
    return this.envConfig.DB_DATABASE;
  }

  get awsBucketName(): string {
    return this.envConfig.AWS_BUCKET_NAME;
  }

  get sendgridApiKey(): string {
    return this.envConfig.SENDGRID_API_KEY;
  }
  get emailBcc(): string {
    return this.envConfig.EMAIL_BCC;
  }
  get emailFrom(): string {
    return this.envConfig.EMAIL_FROM;
  }

  get blockCypherUrl(): string {
    return this.envConfig.BLOCKCYPHER_URL;
  }

  get blockCypherApiEnv(): string {
    return this.envConfig.BLOCKCYPHER_API_ENV;
  }

  get blockCypherApiVersion(): string {
    return this.envConfig.BLOCKCYPHER_API_VERSION;
  }

  get infuraNetwork(): string {
    return this.envConfig.INFURA_NETWORK;
  }
  get infuraWS(): string {
    return this.envConfig.INFURA_WS;
  }

  get chainId(): number {
    return this.envConfig.chainID;
  }
  get etherScanApiUrl(): string {
    return this.envConfig.ETHERSCAN_API_URL;
  }

  get etherScanApiKey(): string {
    return this.envConfig.ETHERSCAN_API_KEY;
  }

  get etherScanExplorerUrl(): string {
    return this.envConfig.ETHERSCAN_EXPLORER_URL;
  }

  get webhookCallbackBaseUrl(): string {
    return this.envConfig.WEBHOOK_CALL_BACK_BASE_URL;
  }

  get depositAddressSeedPhrase(): string {
    return this.envConfig.DEPOSIT_ADDRESS_SEED_PHRASE;
  }
}
