import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    jwtResponse: JwtResponse;

    constructor(private userService: UserService,
                private jwtService: JwtService){}

    async validateUser(username: string, password: string): Promise<any>{
        try {
            const user = await this.userService.findOneByUsername(username);
            if (user && user.password == password) {
                const response = {
                    username: user.usuario_name,
                    role: user.role
                }
                return response;
            }
        } catch (error) {
            return error;
        }
    }

    async validateUsername(username: string): Promise<any>{
        try {
            const user = await this.userService.findOneByUsername(username);
            if (user) {
                const response = {
                    username: user.usuario_name,
                    role: user.role
                }
                return response;
            }
        } catch (error) {
            return error;
        }
    }

    login(user: any){
        try {
            const payload = { username: user.username, role: user.role };
            this.jwtResponse = {
                username: payload.username,
                role: payload.role,
                access_token: this.jwtService.sign(payload)
            };
            return this.jwtResponse;
        } catch (error) {
            return error;
        }
    }

}
