import { RoomDto } from "./room.dto";


export class AdsDto{
    
    id: number;

    title: string;

    description: string;

    resident_type: string;

    room: RoomDto[];

}