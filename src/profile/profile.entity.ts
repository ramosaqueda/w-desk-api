import { Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import { BaseEntity } from '../config/base.entity'; 
@Entity()
export class Profile extends BaseEntity { 

    @Column()
    firstname: string;


    @Column()
    lastname: string;

    @Column()
    avatar: string;

    @Column()
    firma: string;

    @Column()
    cta_dominio: string;


    @Column()
    cta_saf: string;

}