import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as passport from 'passport';
import { ConfigService } from './config/config.service';
import * as session from 'express-session';
import express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoDBStore = require('connect-mongodb-session')(session);
import * as flash from 'connect-flash';
import { XCookieMiddleware } from './global/middlewares/xCookie.middleware';
import { ToLowerCasePipe } from './global/pipes/toLowerCase.pipe';
import { ResponseTransformerInterceptor } from './global/interceptors/response-transformer.interceptor';
import { HttpExceptionFilter } from './global/exception-filter/http-exception.filter';

function bootstrapSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('MontyExchange')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('Authentication')
    .addBearerAuth({ type: 'http', bearerFormat: 'JWT', scheme: 'bearer' })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
}

async function bootstrapSession(config: ConfigService, app: INestApplication) {
  const store = new MongoDBStore({
    uri: config.mongoUri, // This will come from the env file
    collection: 'sessions',
  });
  // use sessions
  const sessionOptions = {
    name: 'travis-travell-session',
    secret: config.cookieSecret,
    resave: true,
    saveUninitialized: true,
    cookie: {
      originalMaxAge: 1000 * 60 * 60 * 24 * 30, // 30 days session
      secure: 'auto',
    },
    store,
    trustProxy: false,
  };

  app.use(session(sessionOptions));
  app.use(flash());
}

function bootstrapPassport(app: INestApplication) {
  app.use(passport.initialize());
  app.use(passport.session());
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // set global prefix
  app.setGlobalPrefix('api');

// get env from config
  const configService: ConfigService = app.get(ConfigService);

  // validation pipes
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  // open api specs
  bootstrapSwagger(app);
  // initialize passport
  bootstrapPassport(app);

  await bootstrapSession(configService, app);

  app.use(XCookieMiddleware);

  app.useGlobalPipes(new ToLowerCasePipe())

  // use global interceptor for changing response format
  app.useGlobalInterceptors(new ResponseTransformerInterceptor());
  // use global interceptor for changing error response format
  // app.useGlobalInterceptors(new ErrorTransformerInterceptor());
  // use global http exception filter
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(configService.serverPort, () => console.log(`Server is listening on the port ${configService.serverPort}`));
}

bootstrap();
