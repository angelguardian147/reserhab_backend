import { IRole } from "./role.interface";

export interface JwtResponse{

    username: string;

    role: IRole[];

    access_token: string;

}