import { IAccount } from "./account";


export interface IProfile{
    
    id?: number;

    empleo?: string;

    idioma?: string;

    description?: string;

    register_date?: Date;

    imagen?: string;

    account?: IAccount;

}