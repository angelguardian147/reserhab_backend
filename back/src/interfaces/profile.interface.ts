import { IAccount } from "./account.interface";

export interface IProfile{

    readonly id: number;

    readonly empleo: string;

    readonly idioma: string;

    readonly description: string;

    readonly register_date: Date;

    readonly imagen: string;

    readonly account: IAccount;

};
