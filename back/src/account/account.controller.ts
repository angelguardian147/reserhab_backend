import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { UsernameGuard } from 'src/auth/strategies/username.guard';
import { AccountDto } from 'src/dto/account.dto';
import { IAccount } from 'src/interfaces/account.interface';
import { IUser } from 'src/interfaces/user.interface';
import { ERole } from 'src/role/role.enum';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
    
    constructor(private accountService: AccountService){}

    @Post('/create')
    @UseGuards(UsernameGuard)
    async create(@Res() res, @Body() account: AccountDto): Promise<any>{
        const result = await this.accountService.create(account);
        return res.status(HttpStatus.OK).json({
            result
        });
    }

    @Get('/accounts')
    @Roles(ERole.Owner, ERole.Reserver)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async getAll(@Res() res): Promise<IAccount[]>{
        const result = await this.accountService.findAll();
        return res.status(HttpStatus.OK).json({
            result
        });
    }

    @Get('/data/:username')
    @Roles(ERole.Owner, ERole.Reserver)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findDataByUser(@Param('username') username: string): Promise<IUser>{
        const result = await this.accountService.findDataByUser(username);
        return result;
    }
    
    @Delete('/remove/:id')
    @Roles(ERole.Owner, ERole.Reserver)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async delete(@Param('id') id: number): Promise<any>{
        const result = await this.accountService.remove(id);
        return result;
    }

    @Patch('/update/:id')
    @Roles(ERole.Owner, ERole.Reserver)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async update(@Param('id') id: number, @Body() account: AccountDto): Promise<any>{
        const result = await this.accountService.update(id, account);
        return result;
    }

}
