import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NestMiddleware,
  NotFoundException,
} from '@nestjs/common';
import { FilesDto } from '../../../upload/dto/file.dto';
import { validate } from 'class-validator';
import { MongoIdDto } from '../../../global/dto/mongo-id.dto';
import { HotelService } from '../../hotel.service';

@Injectable()
export class HotelValidationMiddleware implements NestMiddleware {
  constructor(private readonly hotelService: HotelService) {}

  async use(req: any, res: any, next: () => void) {
    const data = new MongoIdDto(req.params);
    const errors = await validate(data);
    if (errors && errors.length) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        error: errors,
        message: errors,
      });
    } else {
      const arr = req.url.split('/');
      const hotelId = arr.indexOf('hotel');
      console.log(hotelId);
      const exist = await this.hotelService.findOne(arr[hotelId + 1]);
      if (!exist) {
        throw new NotFoundException({
          statusCode: HttpStatus.NOT_FOUND,
          error: errors,
          message: 'Hotel not found',
        });
      }
      req.hotel = exist;
    }
    next();
  }
}
