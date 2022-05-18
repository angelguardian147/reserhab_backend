import { IRole } from "./role";

export interface JwtResponse{

    username?: string;

    role?: IRole[];

    access_token?: string;

}