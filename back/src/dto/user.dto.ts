
import { AccountDto } from "./account.dto";
import { RoleDto } from "./role.dto";

export class UserDto{
    
    id: number;

    usuario_name: string;

    password: string;

    role: RoleDto[];

    account: AccountDto;

}

