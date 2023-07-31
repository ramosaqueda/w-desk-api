import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule} from '@nestjs/typeorm'
import { Profile } from './profile.entity';
import { User } from '../users/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User,Profile])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
