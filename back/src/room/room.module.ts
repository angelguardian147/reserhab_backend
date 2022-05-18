import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/entities/room.entity';
import { HomeModule } from 'src/home/home.module';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

@Module({
  imports: [HomeModule, TypeOrmModule.forFeature([Room])],
  providers: [RoomService],
  controllers: [RoomController],
  exports: [RoomService]
})
export class RoomModule {}
