
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Home } from './home.entity';
import { Profile } from './profile.entity';
import { Reservation } from './reservation.entity';
import { User } from './user.entity';

@Entity()
export class Account{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    estado: string;

    @Column()
    num_identificacion: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    celular: number;

    @Column()
    fecha_nacimiento: Date;

    @Column()
    sexo: string;

    @Column()
    ubicacion_actual: string;

    @Column()
    security: string;

    @Column()
    imagen_doc: string;

    @Column()
    validate: string;

    @OneToOne(() => Profile)
    profile: Profile;

    @OneToOne(() => User, (user) => user.account)
    @JoinColumn({name: 'user_id'})
    user: User;

    @OneToMany(() => Home, (home) => home.account)
    home: Home[];

    @OneToMany(() => Reservation, (reservation) => reservation.account)
    reservation: Reservation[];

}
