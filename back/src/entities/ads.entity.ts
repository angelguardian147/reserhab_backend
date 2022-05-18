import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room.entity";


@Entity()
export class Ads{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    resident_type: string;

    @OneToMany(() => Room, (room) => room.ads)
    room: Room[];

}