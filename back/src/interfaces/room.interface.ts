import { IAds } from "./ads.interface";
import { IHome } from "./home.interface";
import { IReservation } from "./reservation.interface";
import { IService } from "./service.interface";


export interface IRoom{
    
    readonly id: number;

    readonly title: string;

    readonly location: string;

    readonly qualification: number;

    readonly type: string;

    readonly costo: number;

    readonly num_camas: number;

    readonly num_bathroom: number;

    readonly num_huespedes: number;
   
    readonly get_now: boolean;

    readonly schedule: boolean;

    readonly description: string;

    readonly imagen: string;

    readonly servicio: IService[]

    readonly home: IHome;

    readonly reservation: IReservation;

    readonly ads: IAds;

}
