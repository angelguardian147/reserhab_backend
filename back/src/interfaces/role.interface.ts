
import { IUser } from './user.interface';

export interface IRole{

    readonly id: number;

    readonly name: string;

    readonly user: IUser[];
    
}