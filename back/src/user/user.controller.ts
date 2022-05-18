import {Body, Controller, Delete, Get, Param, Patch, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { UserDto } from 'src/dto/user.dto';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import { IUser } from 'src/interfaces/user.interface';
import { ERole } from 'src/role/role.enum';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get('/users')
    @Roles(ERole.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findAll(): Promise<IUser[]>{
        const result = await this.userService.findAll();
        return result;
    }

    @Get('/user/:username')
    @Roles(ERole.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findOneByUsername(@Param('username') username: string): Promise<IUser>{
        const result = await this.userService.findOneByUsername(username);
        return result;
    }

    @Delete('/remove/:id')
    @Roles(ERole.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async delete(@Param('id') id: number): Promise<JwtResponse>{
        const result = await this.userService.remove(id);
        return result;
    }

    @Patch('/update/:id')
    @Roles(ERole.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async update(@Param('id') id: number, @Body() user: UserDto): Promise<JwtResponse>{
        const result = await this.userService.update(id, user);
        return result;
    }

}
