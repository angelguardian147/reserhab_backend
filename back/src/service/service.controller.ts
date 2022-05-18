import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { ServiceDto } from 'src/dto/service.dto';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import { IService } from 'src/interfaces/service.interface';
import { ERole } from 'src/role/role.enum';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {

    constructor(private serviceService: ServiceService){}

    @Post('/create')
    @Roles(ERole.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async create(@Res() res, @Body() service: ServiceDto): Promise<JwtResponse>{
        const result = await this.serviceService.create(service);
        return res.status(HttpStatus.OK).json({
            result
        });
    }

    @Get('/services')
    @Roles(ERole.Admin, ERole.Owner)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findAll(): Promise<IService[]>{
        const result = await this.serviceService.findAll();
        return result;
    }

}
