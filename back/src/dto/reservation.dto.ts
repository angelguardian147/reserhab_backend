
import { AccountDto } from "./account.dto";
import { RoomDto } from "./room.dto";
import { ServiceDto } from "./service.dto";


export class ReservationDto{
    
    id: number;

    fecha_inicial: Date;

    fecha_final: Date;

    total: number;

    estado: string;

    account: AccountDto;

    room: RoomDto[];
    
}

