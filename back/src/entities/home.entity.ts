import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Room } from "./room.entity";
import { Rule } from "./rule.entity";
import { Service } from "./service.entity";


@Entity()
export class Home{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dirección: string;

    @Column()
    barrio: string;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    number_room: number;

    @Column()
    imagen: string;

    @ManyToMany(() => Rule)
    @JoinTable({
        name:'home_rule',
        joinColumn: {
            name: 'home_id'
        },
        inverseJoinColumn: {
            name: 'rule_id'
        }
    })
    rule: Rule[];

    @ManyToOne(() => Account, (account) => account.home)
    @JoinColumn({name: 'account_id'})
    account: Account;

    @ManyToMany(() => Service, (service) => service.home)
    service: Service[];

    @OneToMany(() => Room, (room) => room.home)
    room: Room[];

}