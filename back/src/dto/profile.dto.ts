
import { AccountDto } from "./account.dto";

export class ProfileDto{
    
    id: number;

    empleo: string;

    idioma: string;

    description: string;

    register_date: Date;

    imagen: string;

    account: AccountDto;

}