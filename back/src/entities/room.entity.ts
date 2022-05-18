import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ads } from "./ads.entity";
import { Home } from "./home.entity";
import { Reservation } from "./reservation.entity";
import { Service } from "./service.entity";

@Entity()
export class Room{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    location: string;

    @Column()
    qualification: number;

    @Column()
    type: string;

    @Column()
    costo: number;

    @Column()
    num_camas: number;

    @Column()
    num_bathroom: number;

    @Column()
    num_huespedes: number;

    @Column()
    get_now: boolean;

    @Column()
    schedule: boolean;

    @Column()
    description: string;

    @Column()
    imagen: string;

    @ManyToMany(() => Service, (service) => service.room)
    @JoinTable({
        name:'room_service',
        joinColumn: {
            name: 'room_id'
        },
        inverseJoinColumn: {
            name: 'service_id'
        }
    })
    servicio: Service[];

    @ManyToOne(() => Home)
    @JoinColumn({name: 'home_id'})
    home: Home;

    @ManyToOne(() => Reservation, (reservation) => reservation.room)
    @JoinColumn({name: 'reservation_id'})
    reservation: Reservation;

    @ManyToOne(() => Ads)
    @JoinColumn({name: 'ads_id'})
    ads: Ads;

}

