import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Home } from "./home.entity";
import { Room } from "./room.entity";


@Entity()
export class Service{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @ManyToMany(() => Home, (home) => home.service)
    @JoinTable({
        name:'service_home',
        joinColumn: {
            name: 'service_id'
        },
        inverseJoinColumn: {
            name: 'home_id'
        }
    })
    home: Home[];

    @ManyToMany(() => Room, (room) => room.servicio)
    room: Room[];

}