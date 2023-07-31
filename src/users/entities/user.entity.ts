import { Entity, Column, PrimaryGeneratedColumn , OneToOne, JoinColumn} from 'typeorm';
import { Profile } from '../../profile/profile.entity';
import { BaseEntity } from '../../config/base.entity';

@Entity()
export class User extends BaseEntity {
    
    @Column({unique: true})
    email: string;

    @Column()
    password: string;
 
    @Column({default: true})
    active: boolean;


    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
}