import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Auth } from 'src/auth/auth.decorator';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';
import { HomeDto } from 'src/dto/home.dto';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import { ERole } from 'src/role/role.enum';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {

    constructor(private homeService: HomeService){}

    @Post('/create')
    @Roles(ERole.Owner)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async create(@Body() home: HomeDto, @Auth() user: JwtResponse): Promise<JwtResponse>{
        const result = await this.homeService.create(home, user);
        return result;
    }

}
