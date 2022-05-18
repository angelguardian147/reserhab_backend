import { IRoom } from "./room";


export interface IAds{
    
    id?: number;

    title?: string;

    description?: string;

    resident_type?: string;

    room?: IRoom[];

}