import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { RoomDto } from 'src/dto/room.dto';
import { IRoom } from 'src/interfaces/room.interface';
import { ERole } from 'src/role/role.enum';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {

    constructor(private roomService: RoomService){}

    @Post('/create')
    @Roles(ERole.Owner)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async create(@Body() room: RoomDto): Promise<IRoom>{
        const result = await this.roomService.create(room);
        return result;
    }

    @Get('/room/:id')
    @Roles(ERole.Owner)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findOneById(@Param() id: number): Promise<IRoom>{
        const result = await this.roomService.findOne(id);
        return result;
    }

}
