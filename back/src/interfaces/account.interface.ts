
import { IHome } from "./home.interface";
import { IProfile } from "./profile.interface";
import { IReservation } from "./reservation.interface";
import { IUser } from "./user.interface";

export interface IAccount{

    readonly id: number;

    readonly estado: string;

    readonly num_identificacion: number;

    readonly nombres: string;

    readonly apellidos: string;

    readonly celular: number;

    readonly fecha_nacimiento: Date;

    readonly sexo: string;

    readonly ubicacion_actual: string;

    readonly security: string;

    readonly imagen_doc: string;

    readonly validate: string;

    readonly user: IUser;

    readonly profile: IProfile;

    readonly home: IHome[];

    readonly reservation: IReservation[];

};
