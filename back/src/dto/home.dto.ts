
import { AccountDto } from "./account.dto";
import { RoomDto } from "./room.dto";
import { RuleDto } from "./rule.dto";
import { ServiceDto } from "./service.dto";

export class HomeDto{

    id: number;

    dirección: string;

    barrio: string;

    type: string;

    description: string;

    number_room: number;

    imagen: string;

    rule: RuleDto[];

    account: AccountDto;

    service: ServiceDto[];

    room: RoomDto[];

}
