
import { IAccount } from "./account.interface";
import { IRole } from "./role.interface";

export interface IUser{

    readonly id: number;

    readonly usuario_name: string;

    readonly password: string;

    readonly role: IRole[];

    readonly account: IAccount;

}