import { Controller,Post, Param, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService){}

    @Post(':userId')
    createProfile(@Body() profile: CreateProfileDto, @Param('userId') userId: number) {
        return this.profileService.createProfile(userId, profile);

    }
}
