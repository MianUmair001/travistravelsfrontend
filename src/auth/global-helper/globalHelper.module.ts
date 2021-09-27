import { HttpModule, Module } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
// import { ConfigService } from '../config/config.service';
// import { ConfigModule } from '../config/config.module';
// import { usersService } from '../users/users.service';
import { GlobalHelper } from './helper/global.helper';

@Module({
  imports: [HttpModule],
  providers: [],
})
export class GlobalHelperModule {}
