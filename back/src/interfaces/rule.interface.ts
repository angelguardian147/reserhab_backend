import { IHome } from "./home.interface";


export interface IRule{
    
    readonly id: number;

    readonly title: string;

    readonly description: string;

    readonly home: IHome[];

}