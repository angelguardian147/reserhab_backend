import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Home } from "./home.entity";


@Entity()
export class Rule{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToMany(() => Home, (home) => home.rule)
    home: Home[];

}