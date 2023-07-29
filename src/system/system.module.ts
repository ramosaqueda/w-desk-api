import { Module } from '@nestjs/common';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { System } from './system.entity';
@Module({
    imports: [TypeOrmModule.forFeature([System])],
    controllers: [SystemController],
    providers: [SystemService]
})
export class SystemModule {}
