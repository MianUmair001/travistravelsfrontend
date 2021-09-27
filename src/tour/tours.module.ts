import { NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { TourController } from './tours.controller';
import { TourService } from './tours.service';
@Module({
  imports: [],
  providers: [TourService],
  controllers: [TourController],
  exports: [TourService],
})
export class ToursModule {}
