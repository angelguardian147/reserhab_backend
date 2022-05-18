
import { HomeDto } from "./home.dto";
import { ProfileDto } from "./profile.dto";
import { ReservationDto } from "./reservation.dto";
import { UserDto } from "./user.dto";

export class AccountDto{
    
    id: number;

    estado: string;

    num_identificacion: number;

    nombres: string;

    apellidos: string;

    celular: number;

    fecha_nacimiento: Date;

    sexo: string;

    ubicacion_actual: string;

    security: string;

    imagen_doc: string;

    validate: string;

    user: UserDto;

    profile: ProfileDto;

    home: HomeDto[];

    reservation: ReservationDto[];

}
