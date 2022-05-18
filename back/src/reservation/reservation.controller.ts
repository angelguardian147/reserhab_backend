import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { ReservationDto } from 'src/dto/reservation.dto';
import { IReservation } from 'src/interfaces/reservation.interface';
import { ERole } from 'src/role/role.enum';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {

    constructor(private reservationService: ReservationService){}

    @Post('/create')
    @Roles(ERole.Reserver)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async create(@Body() reservation: ReservationDto): Promise<IReservation>{
        const result = await this.reservationService.create(reservation);
        return result;
    }

    @Get('/reservation/:id')
    @Roles(ERole.Reserver)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findOneById(@Param('id') id: number): Promise<IReservation>{
        const result = await this.reservationService.findOneById(id);
        return result;
    }

}
