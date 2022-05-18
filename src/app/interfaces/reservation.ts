import { IAccount } from "./account";
import { IRoom } from "./room";


export interface IReservation{
    
    id?: number;

    fecha_inicial?: Date;

    fecha_final?: Date;

    total?: number;

    estado?: string;

    account?: IAccount;

    room?: IRoom[];
    
}