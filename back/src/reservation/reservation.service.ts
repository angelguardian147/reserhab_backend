import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from 'src/account/account.service';
import { ReservationDto } from 'src/dto/reservation.dto';
import { RoomDto } from 'src/dto/room.dto';
import { ServiceDto } from 'src/dto/service.dto';
import { Reservation } from 'src/entities/reservation.entity';
import { IReservation } from 'src/interfaces/reservation.interface';
import { RoomService } from 'src/room/room.service';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationService {

    constructor(@InjectRepository(Reservation) private reservationRepository: Repository<Reservation>,
                private roomService: RoomService,
                private accountService: AccountService){}

    async create(reservation: ReservationDto): Promise<IReservation>{
        try {
            const rooms_ids = this.extractRoomIds(reservation.room);
            const room = await this.roomService.findByIds(rooms_ids);
            const account = await this.accountService.findOne(reservation.account.id);
            if (room && account) {
                reservation.room = room;
                reservation.account = account;
                const result = await this.reservationRepository.save(reservation);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findAll(): Promise<IReservation[]>{
        try {
            const result = await this.reservationRepository.find({
                relations: ['account', 'room']
            });
            return result;
        } catch (error) {
            return error;
        }
    }

    async findOneById(id: number): Promise<IReservation>{
        try {
            if(id){
                const result = await this.reservationRepository.findOne(id);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    extractServiceIds(services: ServiceDto[]): number[]{
        try {
            let ids: number[] = [];
            if (services) {
                services.forEach(item => {
                    ids.push(item.id);
                });
            }
            return ids;
        } catch (error) {
            return error;
        }
    }

    extractRoomIds(rooms: RoomDto[]): number[]{
        try {
            let ids: number[];
            if(rooms){
                rooms.forEach(item => {
                    ids.push(item.id);
                });
            }
            return ids;
        } catch (error) {
            return error;
        }
    }

}
