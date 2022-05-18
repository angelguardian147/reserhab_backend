import { UserDto } from "./user.dto";


export class RoleDto{

    id: number;

    name: string;

    user: UserDto[];
    
}