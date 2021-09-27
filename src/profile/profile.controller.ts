import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtGuard)
  @Post()
  async createProfile(
    @Request() { user },
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return this.profileService.createProfile(
      createProfileDto,
      user._id.toString(),
    );
  }

  @UseGuards(JwtGuard)
  @Patch('update')
  async updateUserProfile(
    @Request() { user },
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.updateProfile(
      updateProfileDto,
      user._id.toString(),
    );
  }

  @UseGuards(JwtGuard)
  @Get()
  async getProfile(@Request() { user }) {
    return this.profileService.findProfile(user._id.toString());
  }

  @UseGuards(JwtGuard)
  @Delete('deactivateProfile')
  async deActivateProfile(@Request() { user }) {
    return this.profileService.deActivateProfile(user._id.toString());
  }
}
