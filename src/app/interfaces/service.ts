import { IHome } from "./home";
import { IRoom } from "./room";


export interface IService{
    
    id?: number;

    nombre?: string;

    descripcion?: string;

    home?: IHome[];

    room?: IRoom[];

}