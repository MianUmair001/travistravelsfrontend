import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CONSTANTS } from '../global/constants';
import { ProfileDocument, ProfileEntity } from 'src/entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(ProfileEntity.name)
    private readonly profileModel: Model<ProfileDocument>,
  ) {}

  async profileByUserId(userId) {
    return this.profileModel.findOne({ auth: userId }).lean();
  }

  async findProfile(userId) {
    try {
      const profile = await this.profileByUserId(userId);
      if (!profile) {
        throw new HttpException(CONSTANTS.userNotFound, HttpStatus.NOT_FOUND);
      }
      return profile;
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createProfile(createProfileDto, userId) {
    return this.profileModel.create({ ...createProfileDto, auth: userId });
  }

  async updateProfile(updateProfile, userId) {
    try {
      const userProfile = await this.profileByUserId(userId);
      if (!userProfile) {
        throw new HttpException(CONSTANTS.userNotFound, HttpStatus.NOT_FOUND);
      }
      return await this.profileModel.findByIdAndUpdate(
        userProfile._id.toString(),
        { ...updateProfile },
        { new: true },
      );
    } catch (e) {
      throw new HttpException(
        e.message,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deActivateProfile(userId) {
    try {
      const profile = await this.profileByUserId(userId);
      if (!profile) {
        throw new HttpException(CONSTANTS.userNotFound, HttpStatus.NOT_FOUND);
      }
      return await this.profileModel
        .findByIdAndRemove(profile._id.toString())
        .lean();
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
