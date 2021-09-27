import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { HotelValidationMiddleware } from './room/directory/hotel-validation.middleware';

@Module({
  controllers: [HotelController, RoomController],
  providers: [HotelService, RoomService]
})
export class HotelModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(HotelValidationMiddleware)
      .forRoutes(RoomController)
  }
}
