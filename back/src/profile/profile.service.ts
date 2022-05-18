import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from 'src/account/account.service';
import { ProfileDto } from 'src/dto/profile.dto';
import { Profile } from 'src/entities/profile.entity';
import { IProfile } from 'src/interfaces/profile.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {

    constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>,
                private accountService: AccountService){}
    
    async create(profile: ProfileDto): Promise<IProfile>{
        try {
            if (profile) {
                const account = await this.accountService.findOneById(profile.account.id);
                if(account){
                    const result = await this.profileRepository.save(profile);
                    return result;
                }
            }
        } catch (error) {
            return error;
        }
    }

    async findAll(): Promise<IProfile[]>{
        try{
            const result = await this.profileRepository.find({
                relations: ['account'],
            });
            return result;
        } catch (error) {
            return error;
        }
    }

    async findOne(id: number): Promise<IProfile>{
        try {
            if(id){
                const result = await this.profileRepository.findOne(
                    {
                        where: {id: id},
                        relations: ['account']
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
                const result = await this.profileRepository.delete(id);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async update(id: number, profile: ProfileDto): Promise<any>{
        try {
            if(id && profile){
                const result = await this.profileRepository.update(id, profile);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

}
