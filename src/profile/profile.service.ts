import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { User } from '../users/user.entity';


@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    )
    
    { }

    async createProfile(userId:number, profile: CreateProfileDto) {
        const userFound = await this.userRepository.findOne({
            where: {
                id: userId
            }});
            if(!userFound) {
                return new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            const newProfile = this.profileRepository.create(profile);
            const saveProfile = await this.profileRepository.save(newProfile);

            userFound.profile = saveProfile;
            return this.userRepository.save(userFound); 


    }

    async getProfile(id: number) {
        const profileFound = await this.profileRepository.findOne({
            where: {
                id,
            }
        });

        if (!profileFound) {
            return new HttpException('Profile not found', HttpStatus.NOT_FOUND);
        }
        return profileFound;

    }

    async deleteProfile(id: number) {
        const result = await this.profileRepository.delete(id);
        if (result.affected === 0) {
            return new HttpException('Profile not found', HttpStatus.NOT_FOUND);
        }
        return result;
    }

            

        
}
