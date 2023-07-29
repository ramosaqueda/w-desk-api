import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { System } from './system.entity';
import { CreateSystemDto } from './dto/create-system.dto';
@Injectable()
export class SystemService {
    constructor(
        @InjectRepository(System) private readonly systemRepository: Repository<System>,
    ){}

    async createSystem(system: CreateSystemDto) {
        const systemFound = await this.systemRepository.findOne({
            where: {
                name: system.name
            }});
            
            if (systemFound) {
                return new HttpException('System already exists', HttpStatus.BAD_REQUEST);
            }
            
            const newSystem = this.systemRepository.create(system);
            const saveSystem = await this.systemRepository.save(newSystem);
            return saveSystem;
    }

    async getSystem(id: number) {
        const systemFound = await this.systemRepository.findOne({
            where: {
                id,
            }
        });

        if (!systemFound) {
            return new HttpException('System not found', HttpStatus.NOT_FOUND);
        }
        return systemFound;

    }

    async getSystems() {
        const systemsFound = await this.systemRepository.find();
        if (!systemsFound) {
            return new HttpException('Systems not found', HttpStatus.NOT_FOUND);
        }
        return systemsFound;
    }
    async deleteSystem(id: number) {
        const result = await this.systemRepository.delete(id);
        if (result.affected === 0) {
            return new HttpException('System not found', HttpStatus.NOT_FOUND);
        }
        return result;
    }
}

