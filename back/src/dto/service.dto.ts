import { HomeDto } from "./home.dto";
import { RoomDto } from "./room.dto";

export class ServiceDto{
    
    id: number;

    nombre: string;

    descripcion: string;

    home: HomeDto[];

    room: RoomDto[];

}
