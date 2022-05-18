import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from 'src/entities/service.entity';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  providers: [ServiceService],
  controllers: [ServiceController],
  exports: [ServiceService]
})
export class ServiceModule {}
