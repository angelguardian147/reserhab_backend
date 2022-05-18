import { IRoom } from "./room.interface";


export interface IAds{
    
    readonly id: number;

    readonly title: string;

    readonly description: string;

    readonly resident_type: string;

    readonly room: IRoom[];

}