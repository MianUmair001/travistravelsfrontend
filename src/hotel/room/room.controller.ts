import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoomService } from './room.service';
import { MongoIdDto } from '../../global/dto/mongo-id.dto';
import { CreateRoomDto } from './dto/create-room.dto';
import { json } from 'express';

@ApiTags('Hotel Rooms')
@Controller('hotel/:id/rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  
  @Post()
  async addRoom(@Request() req, @Body() body: CreateRoomDto) {
    return await this.roomService.addRoom(body, req.hotel._id.toString());
  }

  @Get('/:id')
  async getRoomById(@Param('id') id: string) {
    return await this.roomService.getRoomById(id);
  }

  // @Patch('id')
  // async updateRoom(
  //   @Request() req,
  //   @Param() params: MongoIdDto,
  //   @Body() body: CreateRoomDto,
  // ) {
  //   return await this.roomService.updateRoom(params.id.toString(), body);
  // }

  @Patch('/:id')
  async updateRoom(
    @Request() req,
    @Param() params: MongoIdDto,
    @Body() body: CreateRoomDto,
  ) {
    return await this.roomService.updateRoom(params.id.toString(), body);
  }

  // @Delete('id')
  // async deleteRoom(@Param() params: MongoIdDto) {
  //   return await this.roomService.deleteRoom(params.id.toString());
  // }
  @Delete('/:id')
  async deleteRoom(@Param() params: MongoIdDto) {
    return await this.roomService.deleteRoom(params.id.toString());
  }

  @Get()
  async getAllRoomsOfAHotel(@Request() req) {
    return await this.roomService.getAllRoomsOfHotel(req.hotel._id.toString());
  }

  @Get('/:planName')
  async getRoomsOfAHotelByPlanName(@Request() req, @Param() params) {
    return await this.roomService.getRoomsOfAHotelByAPlanName(
      req.hotel._id.toString(),
      params.planName,
    );
  }

  // @Get('/:planId')
  // async getRoomsOfAHotelByPlanId(@Request() req, @Param() params) {
  //   return await this.roomService.getRoomsOfAHotelByAPlanId(
  //     req.hotel._id.toString(),
  //     params.planId,
  //   );
  // }

  @Get('/plan/:planId')
  async getRoomsOfAHotelByPlanId(@Request() req, @Param() params) {
    return await this.roomService.getRoomsOfAHotelByAPlanId(
      req.hotel._id.toString(),
      params.planId,
    );
  }
}
