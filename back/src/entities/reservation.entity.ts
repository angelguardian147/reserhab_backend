import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Room } from "./room.entity";

@Entity()
export class Reservation{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha_inicial: Date;

    @Column()
    fecha_final: Date;

    @Column()
    total: number;

    @Column()
    estado: string;

    @ManyToOne(() => Account, (account) => account.reservation)
    @JoinColumn({name: 'account_id'})
    account: Account;

    @OneToMany(() => Room, (room) => room.reservation)
    room: Room[];

}
