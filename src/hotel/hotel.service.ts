import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Model } from 'mongoose';
import { HotelsDocument, HotelsEntity } from '../entities/hotels.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(HotelsEntity.name)
    private readonly hotelModel: Model<HotelsDocument>,
  ) {}

  async create(createHotelDto: CreateHotelDto) {
    return await this.hotelModel.create({ ...createHotelDto });
  }

  async findAll() {
    return this.hotelModel.find({}).lean();
  }

  async findOne(id: string) {
    return this.hotelModel.findById(id).lean();
  }

  async findHotelWithName(name: string) {
    return this.hotelModel.findOne({ name: name }).lean();
  }

  update(id: string, updateHotelDto: UpdateHotelDto) {
    return this.hotelModel
      .findByIdAndUpdate(id, updateHotelDto, { new: true })
      .lean();
  }

  async remove(id: string) {
    return this.hotelModel.findByIdAndDelete(id).lean();
  }
}
