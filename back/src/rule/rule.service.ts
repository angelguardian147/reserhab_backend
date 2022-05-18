import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleDto } from 'src/dto/rule.dto';
import { Rule } from 'src/entities/rule.entity';
import { IRule } from 'src/interfaces/rule.interface';
import { Repository } from 'typeorm';

@Injectable()
export class RuleService {

    constructor(@InjectRepository(Rule) private ruleRepository: Repository<Rule>){}

    async create(rule: RuleDto): Promise<IRule>{
        try {
            if(rule){
                const result = await this.ruleRepository.save(rule);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async findByIds(ids: number[]): Promise<IRule[]>{
        try {
            if(ids){
                const result = await this.ruleRepository.findByIds(ids);
                return result;
            }
        } catch (error) {
            return error;
        }
    }

}
