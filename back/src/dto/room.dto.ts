
import { AdsDto } from "./ads.entity";
import { HomeDto } from "./home.dto";
import { ReservationDto } from "./reservation.dto";
import { ServiceDto } from "./service.dto";


export class RoomDto{
    
    id: number;

    title: string;

    location: string;

    qualification: number;

    type: string;

    costo: number;

    num_camas: number;

    num_bathroom: number;

    num_huespedes: number;

    get_now: boolean;

    schedule: boolean;

    description: string;

    imagen: string;

    servicio: ServiceDto[];

    home: HomeDto;

    reservation: ReservationDto;

    ads: AdsDto;

}
