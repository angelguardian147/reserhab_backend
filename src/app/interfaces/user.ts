import { IAccount } from "./account";
import { IRole } from "./role";

export interface IUser{

    id?: number;

    usuario_name?: string;

    password?: string;

    role?: IRole[];

    account?: IAccount;

}