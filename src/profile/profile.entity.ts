import { Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
 
@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

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
 

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    update_at: Date;
    
    

}