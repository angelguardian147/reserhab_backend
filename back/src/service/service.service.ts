import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceDto } from 'src/dto/service.dto';
import { Service } from 'src/entities/service.entity';
import { IService } from 'src/interfaces/service.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {

    constructor(@InjectRepository(Service) private serviceRepository: Repository<Service>){}

    async create(service: ServiceDto): Promise<any>{
        try {
            if(service){
                const result = await this.serviceRepository.save(service);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findByIds(id: number[]): Promise<IService[]>{
        try{
            if(id){
                const result = await this.serviceRepository.findByIds(id);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findAll(): Promise<IService[]>{
        try {
            const result = await this.serviceRepository.find();
            return result;
        } catch (error) {
            return error;
        }
    }

}
