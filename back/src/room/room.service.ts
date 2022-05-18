import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomDto } from 'src/dto/room.dto';
import { Room } from 'src/entities/room.entity';
import { HomeService } from 'src/home/home.service';
import { IRoom } from 'src/interfaces/room.interface';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {

    constructor(@InjectRepository(Room) private roomRepository: Repository<Room>,
                private homeService: HomeService){}

    async create(room: RoomDto): Promise<IRoom>{
        try {
            const home = await this.homeService.findOne(room.home.id);
            if (home) {
                room.home = home;
                const result = await this.roomRepository.save(room);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findAll(): Promise<IRoom[]>{
        try {
            const result = this.roomRepository.find({
                relations: ['home', 'reservation']
            });
            return result;
        } catch (error) {
            return error;
        }
    }

    async findOne(id: number): Promise<IRoom>{
        try {
            if(id){
                const result = this.roomRepository.findOne(id, {
                    relations: ['home', 'reservation']
                });
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findByIds(ids: number[]): Promise<IRoom[]>{
        try {
            if(ids){
                const rooms = this.roomRepository.findByIds(ids);
                return rooms;
            }
        } catch (error) {
            return error;
        }
    }

}
