import { HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private authService: AuthService){
        super();
    }

    async validate(username: string, password: string): Promise<string>{
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException(HttpStatus.FORBIDDEN, 'El nombre de usuario o la contraseña son incorrectos!');
        }
        return user;
    }
    
}