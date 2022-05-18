import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from 'src/account/account.module';
import { Reservation } from 'src/entities/reservation.entity';
import { RoomModule } from 'src/room/room.module';
import { ServiceModule } from 'src/service/service.module';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';

@Module({
  imports: [ServiceModule, RoomModule, AccountModule, TypeOrmModule.forFeature([Reservation])],
  providers: [ReservationService],
  controllers: [ReservationController]
})
export class ReservationModule {}
