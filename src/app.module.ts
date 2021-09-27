import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { GlobalModule } from './global/global.module';
import { UsersModule } from './users/users.module';
import { EntitiesModule } from './entities/entities.module';
import { UploadModule } from './upload/upload.module';
import { ProfileModule } from './profile/profile.module';
import { HotelModule } from './hotel/hotel.module';
import { PlanModule } from './plan/plan.module';
import { ToursModule } from './tour/tours.module';
import { PostModule } from './post/post.module';
import { PlacesModule } from './places/places.module';
import { BookingModule } from './booking/booking.module';
import { FeedBackRatingModule } from './feedback/feedbackRating.module';
import { CommentsModule } from './comments/comments.module';
import { LikeDislikeModule } from './likedislike/likedislike.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule,
    DatabaseModule,
    GlobalModule,
    UsersModule,
    EntitiesModule,
    UploadModule,
    HotelModule,
    PlanModule,
    ToursModule,
    PostModule,
    PlacesModule,
    BookingModule,
    FeedBackRatingModule,
    CommentsModule,
    LikeDislikeModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
