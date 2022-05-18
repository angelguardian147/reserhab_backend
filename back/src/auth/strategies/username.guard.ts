import { CanActivate, ExecutionContext, ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class UsernameGuard implements CanActivate {

  constructor(private authService: AuthService){}

  async canActivate( context: ExecutionContext ): Promise<any>{
    const user = context.switchToHttp().getRequest();
    if(user.body.usuario_name){
      const result = await this.authService.validateUsername(user.body.usuario_name)
      if(result){
        throw new HttpException('Use another username', HttpStatus.FORBIDDEN);
      }
    }else{
      const result = await this.authService.validateUsername(user.body.user.usuario_name)
      if(result){
        throw new HttpException('Use another username', HttpStatus.FORBIDDEN);
      }
    }
    return user.body;
  }

}
