import { Controller, Get, Param } from '@nestjs/common';
import { IRole } from 'src/interfaces/role.interface';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {

    constructor(private roleService: RoleService){}

    @Get('/:name')
    async getRole(@Param('name') name: string): Promise<IRole>{
        const result = await this.roleService.findIdByName(name);
        return result;
    }

}
