import { HttpService, Inject } from '@nestjs/common';
import { delay } from 'rxjs/operators';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class GlobalHelper {
  constructor() {}
}
