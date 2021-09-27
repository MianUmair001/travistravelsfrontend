import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesServices } from './places.services';

@Module({
  imports: [],
  providers: [PlacesServices],
  controllers: [PlacesController],
  exports: [PlacesServices],
})
export class PlacesModule {}
