import { CanActivate, ExecutionContext, ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { IRole } from 'src/interfaces/role.interface';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>{

    const { params } = context.switchToHttp().getRequest();
    const { user } = context.switchToHttp().getRequest();

    if (!this.hasRole(params.role, user.role)){
      throw new ForbiddenException(HttpStatus.FORBIDDEN,'Acceso restringido!');
    }

    return true;

  }

  hasRole(role: string, roles: IRole[]): boolean{
    let findRole: boolean = false;
    roles.forEach(item => {
      if(item.name == role){
        findRole = true;
      }
    });
    return findRole;
  }

}
