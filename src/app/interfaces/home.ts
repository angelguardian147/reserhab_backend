
import { IAccount } from "./account";
import { IRoom } from "./room";
import { IRule } from "./rule";
import { IService } from "./service";


export interface IHome{
    
    id?: number;

    dirección?: string;

    barrio?: string;

    type?: string;

    description?: string;

    number_room?: number;

    imagen?: string;

    rule?: IRule[];

    account?: IAccount;

    service?: IService[];

    room?: IRoom[];

}