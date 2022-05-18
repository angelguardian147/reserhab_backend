import { IHome } from "./home";


export interface IRule{
    
    id?: number;

    title?: string;

    description?: string;

    home?: IHome[];

}