import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { IRole } from 'src/interfaces/role.interface';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {

    constructor(@InjectRepository(Role) private roleRepository: Repository<Role>){}

    async findByIds(ids: number[]): Promise<IRole[]>{
        try {
            if(ids){
                const result = await this.roleRepository.findByIds(ids);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findIdByName(name: string): Promise<IRole>{
        try {
            if(name){
                const result = await this.roleRepository.findOne({name: name});
                return result;
            }
        } catch (error) {
            return error;
        }
    }

}
