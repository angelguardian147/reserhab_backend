import { IAds } from "./ads";
import { IHome } from "./home";
import { IReservation } from "./reservation";
import { IService } from "./service";


export interface IRoom{
    
    id?: number;

    title?: string;

    location?: string;

    qualification?: number;

    type?: string;

    costo?: number;

    num_camas?: number;

    num_bathroom?: number;

    num_huespedes?: number;
   
    get_now?: boolean;

    schedule?: boolean;

    description?: string;

    imagen?: string;

    servicio?: IService[]

    home?: IHome;

    reservation?: IReservation;

    ads?: IAds;

}