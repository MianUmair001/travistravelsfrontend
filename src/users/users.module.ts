import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConfigService } from '../config/config.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
  ],
  providers: [UsersService, ConfigService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
