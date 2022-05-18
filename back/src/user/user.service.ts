import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleDto } from 'src/dto/role.dto';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { IUser } from 'src/interfaces/user.interface';
import { RoleService } from 'src/role/role.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,
                private roleService: RoleService){}
    
    async create(user: UserDto): Promise<IUser>{
        try {
            if(user){
                const idsRoles = this.extractIdsRole(user.role);
                const role = await this.roleService.findByIds(idsRoles);
                if(role){
                    user.role = role;
                    const result = await this.userRepository.save(user);
                    return result;
                }
            }
        } catch (error) {
            return error;
        }
    }

    extractIdsRole(role: RoleDto[]): number[]{
        try {
            let ids: number[] = [];
            if(role){
                role.forEach(item => {
                    ids.push(item.id);
                });
            }
            return ids;
        } catch (error) {
            return error;
        }
    }

    async findAll(): Promise<IUser[]>{
        try {
            const result = await this.userRepository.find();
            return result;
        } catch (error) {
            return error;
        }
    }

    async findOneById(id: number): Promise<IUser>{
        try {
            if(id){
                const result = await this.userRepository.findOne({where: {id: id}});
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findOneByUsername(username: string): Promise<IUser>{
        try {
            if(username){
                const result = await this.userRepository.findOne(
                    {
                        where: {usuario_name: username},
                        relations: ['role', 'account']
                    }
                );
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async remove(id: number): Promise<any>{
        try {
            if(id){
                const result = await this.userRepository.delete(id);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async update(id: number, user: UserDto): Promise<any>{
        try {
            if(id && user){
                const result = await this.userRepository.update(id, user);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

}
