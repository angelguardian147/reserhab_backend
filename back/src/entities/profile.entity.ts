
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity()
export class Profile{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    empleo: string;

    @Column()
    idioma: string;

    @Column()
    description: string;

    @Column()
    register_date: Date;

    @Column()
    imagen: string;

    @OneToOne(() => Account, (account) => account.profile)
    @JoinColumn({name: 'account_id'})
    account: Account;

}