import { IHome } from "./home";
import { IProfile } from "./profile";
import { IReservation } from "./reservation";
import { IUser } from "./user";


export interface IAccount{
    
    id?: number;

    estado?: string;

    num_identificacion?: number;

    nombres?: string;

    apellidos?: string;

    celular?: number;

    fecha_nacimiento?: Date;

    sexo?: string;

    ubicacion_actual?: string;

    security?: string;

    imagen_doc?: string;

    validate?: string;

    user?: IUser;

    profile?: IProfile;

    home?: IHome[];

    reservation?: IReservation[];

}