
import { IAccount } from "./account.interface";
import { IRoom } from "./room.interface";
import { IService } from "./service.interface";

export interface IReservation{
    
    readonly id: number;

    readonly fecha_inicial: Date;

    readonly fecha_final: Date;

    readonly total: number;

    readonly estado: string;

    readonly account: IAccount;

    readonly room: IRoom[];
    
}
