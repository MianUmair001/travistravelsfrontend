import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RoomsDocument, RoomsEntity } from '../../entities/rooms.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PlanDocument, PlanEntity } from '../../entities/plan.entity';
import { CONSTANTS } from '../../global/constants';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(PlanEntity.name)
    private readonly planModel: Model<PlanDocument>,
    @InjectModel(RoomsEntity.name)
    private readonly roomModel: Model<RoomsDocument>,
  ) {}

  async addRoom(room, hotelId: string) {
    try {
      const planExist = await this.planModel.findById(room.type);
      if (!planExist || (planExist && room.planName !== planExist.name)) {
        throw new HttpException(CONSTANTS.notFound, HttpStatus.NOT_FOUND);
      }
      return await this.roomModel.create({ ...room, hotel: hotelId });
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateRoom(roomId: string, room) {
    try {
      const planExist = await this.planModel.findById(room.type);
      if (!planExist || (planExist && room.planName !== planExist.name)) {
        throw new HttpException(CONSTANTS.notFound, HttpStatus.NOT_FOUND);
      }
      return this.roomModel.findByIdAndUpdate(roomId, room).lean();
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async getRoomById(id: string) {
    return this.roomModel.findById(id).lean();
  }

  async deleteRoom(roomId: string) {
    return this.roomModel.findByIdAndDelete(roomId).lean();
  }

  async getAllRoomsOfHotel(hotelId: string) {
    return this.roomModel.find({ hotel: hotelId }).lean();
  }

  async getRoomsOfAHotelByAPlanName(hotelId, planName) {
    return this.roomModel.find({ hotel: hotelId, planName: planName }).lean();
  }

  async getRoomsOfAHotelByAPlanId(hotelId, planId) {
    return this.roomModel.find({ hotel: hotelId, type: planId }).lean();
  }
}
