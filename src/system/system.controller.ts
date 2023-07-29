import { Body, Controller, Post } from '@nestjs/common';
import { SystemService } from './system.service';
import { CreateSystemDto } from './dto/create-system.dto';

@Controller('system')
export class SystemController {
    constructor(private systemService: SystemService) {}
    @Post()
    createSystem(@Body() newSystem: CreateSystemDto) {
        return this.systemService.createSystem(newSystem);
    }
    
}
