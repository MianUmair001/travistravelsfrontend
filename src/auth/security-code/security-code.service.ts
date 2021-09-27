import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SecurityCodeDocument, SecurityCodeEntity, SecurityCodeTypeEnum } from '../../entities/security-code.entity';

@Injectable()
export class SecurityCodeService {
  constructor(
    @InjectModel(SecurityCodeEntity.name)
    private readonly securityCodeModel: Model<SecurityCodeDocument>,
  ) {
  }

  async create(data: SecurityCodeEntity): Promise<SecurityCodeEntity> {
    try {
      return (await this.securityCodeModel.create(data)).toObject();
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOne(email, code, type) {
    try {
      return await this.securityCodeModel.findOne({
        email,
        code,
        type,
      }).lean();
    } catch (e) {
      throw new Error(e);
    }
  }

  async findByEmailAndTypeAndUpdate(email: string, type: string, code: number) {
    const securityCodeType = SecurityCodeTypeEnum[type];
    return this.securityCodeModel
      .updateOne(
        {
          email,
          type: securityCodeType,
        },
        { email, type: securityCodeType, code },
        { upsert: true },
      )
      .lean();
  }
}
