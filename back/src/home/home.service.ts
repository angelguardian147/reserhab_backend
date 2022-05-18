import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from 'src/account/account.service';
import { HomeDto } from 'src/dto/home.dto';
import { RuleDto } from 'src/dto/rule.dto';
import { ServiceDto } from 'src/dto/service.dto';
import { Home } from 'src/entities/home.entity';
import { IHome } from 'src/interfaces/home.interface';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import { RuleService } from 'src/rule/rule.service';
import { ServiceService } from 'src/service/service.service';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {

    constructor(@InjectRepository(Home) private homeRepository: Repository<Home>,
                private accountService: AccountService,
                private serviceService: ServiceService,
                private ruleService: RuleService){}

    async create(home: HomeDto, user: JwtResponse): Promise<any>{
        try {

            //extraemos el usuario en sesión actualmente y confirmamos que existe en la base de datos
            const userBD = await this.accountService.findDataByUser(user.username);

            //extraemos los ids de los servicios y confirmamos que existen en la base de datos
            const idsService = this.extractIdsService(home.service);
            const service = await this.serviceService.findByIds(idsService);

            //extraemos los ids de las reglas y confirmamos que existen en la base de datos
            const idsRule = this.extractIdsRule(home.rule);
            const rule = await this.ruleService.findByIds(idsRule);

            if (userBD.account && service && rule) {
                home.service = service;
                home.account = userBD.account;
                home.rule = rule;
                const result = await this.homeRepository.save(home);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findOne(id: number): Promise<IHome>{
        try {
            if(id){
                const result = await this.homeRepository.findOne(id);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findById(id: number): Promise<IHome>{
        try {
            if(id){
                const result = await this.homeRepository.findOne(id, {
                    relations: ['service', 'account', 'rule', 'room']
                });
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    extractIdsService(services: ServiceDto[]): number[]{
        try {
            let ids: number[];
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

    extractIdsRule(rules: RuleDto[]): number[]{
        try {
            let ids: number[];
            if(rules){
                rules.forEach((item) => {
                    ids.push(item.id);
                });
            }
            return ids;
        } catch (error) {
            return error;
        }
    }

}
