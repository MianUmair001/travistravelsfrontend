import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthEntity, AuthSchema } from './auth.entity';
import { SecurityCodeEntity, SecurityCodeSchema } from './security-code.entity';
import { AttachmentsEntity, AttachmentsSchema } from './attachment.entity';
import { BookingEntity, BookingSchema } from './booking.entity';
import {
  FeedbackRatingEntity,
  FeedbackRatingSchema,
} from './feedback-rating.entity';
import { HotelsEntity, HotelsSchema } from './hotels.entity';
import { PlacesEntity, PlacesSchema } from './places.entity';
import { PlanEntity, PlanSchema } from './plan.entity';
import { PostEntity, PostSchema } from './post.entity';
import { RoomsEntity, RoomsSchema } from './rooms.entity';
import { TourEntity, TourSchema } from './tour.entity';
import { UserEntity, UserSchema } from './user.entity';
import { TourEnrolledEntity, TourEnrolledSchema } from './tour-enrolled.entity';
import { CommentsEntity, CommentsSchema } from './comments.entity';
import { LikeDislikeEntity, LikeDislikeSchema } from './likedislike.entity';
import { ProfileEntity, ProfileSchema } from './profile.entity';

const entitiesArray = [
  MongooseModule.forFeature([
    { name: AuthEntity.name, schema: AuthSchema },
    { name: AttachmentsEntity.name, schema: AttachmentsSchema },
    { name: SecurityCodeEntity.name, schema: SecurityCodeSchema },
    { name: BookingEntity.name, schema: BookingSchema },
    { name: FeedbackRatingEntity.name, schema: FeedbackRatingSchema },
    { name: HotelsEntity.name, schema: HotelsSchema },
    { name: PlacesEntity.name, schema: PlacesSchema },
    { name: PlanEntity.name, schema: PlanSchema },
    { name: PostEntity.name, schema: PostSchema },
    { name: RoomsEntity.name, schema: RoomsSchema },
    { name: TourEntity.name, schema: TourSchema },
    { name: TourEnrolledEntity.name, schema: TourEnrolledSchema },
    { name: UserEntity.name, schema: UserSchema },
    { name: PostEntity.name, schema: PostSchema },
    { name: CommentsEntity.name, schema: CommentsSchema },
    { name: LikeDislikeEntity.name, schema: LikeDislikeSchema },
    { name: ProfileEntity.name, schema: ProfileSchema },
  ]),
];

@Global()
@Module({
  imports: [...entitiesArray],
  exports: [...entitiesArray],
})
export class EntitiesModule {}
