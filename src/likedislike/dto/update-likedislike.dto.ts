import { PartialType } from '@nestjs/swagger';
import { CreateLikeDislikeDto } from './create-likedislike.dto';

export class UpdateLikeDislikeDto extends PartialType(CreateLikeDislikeDto) {}
