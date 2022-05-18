import { createParamDecorator, ExecutionContext, ForbiddenException, SetMetadata } from '@nestjs/common';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';

export const Auth = createParamDecorator(
    (data: string, ctx: ExecutionContext): Partial<JwtResponse> => {
        try{
            const request = ctx.switchToHttp().getRequest();
            return request.user;
        }catch(error){
            throw new ForbiddenException();
        }
    }
);
