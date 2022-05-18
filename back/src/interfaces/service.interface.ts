
import { IHome } from "./home.interface";
import { IRoom } from "./room.interface";


export interface IService{
    
    readonly id: number;

    readonly nombre: string;

    readonly descripcion: string;

    readonly home: IHome[];

    readonly room: IRoom[];

}

