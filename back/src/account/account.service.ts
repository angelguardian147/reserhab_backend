import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { AccountDto } from 'src/dto/account.dto';
import { Account } from 'src/entities/account.entity';
import { IAccount } from 'src/interfaces/account.interface';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import { IUser } from 'src/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {

    constructor(@InjectRepository(Account) private accountRepository: Repository<Account>,
                private userService: UserService,
                private authService: AuthService){}
    
    async create(account: AccountDto): Promise<any>{
        try {
            const create_user = await this.userService.create(account.user);
            if (create_user) {
                account.user = create_user;
                const result = await this.accountRepository.save(account);
                if(result){
                    const user = {
                        username: result.user.usuario_name,
                        role: result.user.role
                    }
                    const response = await this.authService.login(user);
                    return response;
                }
            }
        } catch (error) {
            return error;
        }
    }

    async findAll(): Promise<IAccount[]>{
        try{
            const result = await this.accountRepository.find({
                relations: ['user', 'profile', 'home', 'reservation'],
            });
            return result;
        } catch (error) {
            return error;
        }
    }

    async findOne(id: number): Promise<IAccount>{
        try {
            if(id){
                const result = await this.accountRepository.findOne(
                    {
                        where: {num_identificacion: id},
                        relations: ['user', 'profile', 'home', 'reservation']
                    }
                );
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findOneById(id: number): Promise<IAccount>{
        try {
            if(id){
                const result = await this.accountRepository.findOne(
                    {
                        where: {id: id}
                    }
                );
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findDataByUser(username: string): Promise<IUser>{
        try {
            if(username){
                const result = await this.userService.findOneByUsername(username);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async remove(id: number): Promise<any>{
        try {
            if(id){
                const result = await this.accountRepository.delete(id);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async update(id: number, account: AccountDto): Promise<any>{
        try {
            if(id && account){
                const result = await this.accountRepository.update(id, account);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

}
