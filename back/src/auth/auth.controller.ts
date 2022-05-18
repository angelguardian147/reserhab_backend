import { Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { AuthService } from './auth.service';
import { AuthenticatedGuard } from './strategies/authenticated.guard';
import { JwtAuthGuard } from './strategies/jwt-auth.guard';
import { LocalAuthGuard } from './strategies/local-auth.guard';
import { UsernameGuard } from './strategies/username.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/login')
    @UseGuards(LocalAuthGuard)
    async login(@Request() req){
        const result = await this.authService.login(req.user);
        return result;
    }
    
    @Post('/confirmUser')
    @UseGuards(UsernameGuard)
    async confirmUser(@Request() req): Promise<IUser>{
        return req.body;
    }

    @Get('/profile')
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req){
        return req.user;
    }

    @Get('/authenticated/:role')
    @UseGuards(JwtAuthGuard, AuthenticatedGuard)
    getAuthenticated(@Request() req, @Param('role') role: string){
        return true;
    }

}
