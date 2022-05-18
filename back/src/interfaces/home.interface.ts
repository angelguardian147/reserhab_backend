
import { IAccount } from "./account.interface";
import { IRoom } from "./room.interface";
import { IRule } from "./rule.interface";
import { IService } from "./service.interface";

export interface IHome{
    
    readonly id: number;

    readonly dirección: string;

    readonly barrio: string;

    readonly type: string;

    readonly description: string;

    readonly number_room: number;

    readonly imagen: string;

    readonly rule: IRule[];

    readonly account: IAccount;

    readonly service: IService[];

    readonly room: IRoom[];

}
