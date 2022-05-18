

import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { Account } from './account.entity';
import { Role } from './role.entity';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    usuario_name: string;

    @Column()
    password: string;

    @ManyToMany(() => Role, (role) => role.user)
    @JoinTable({
        name:'user_role',
        joinColumn: {
            name: 'user_id'
        },
        inverseJoinColumn: {
            name: 'role_id'
        }
    })
    role: Role[];

    @OneToOne(() => Account, (account) => account.user)
    account: Account;

}